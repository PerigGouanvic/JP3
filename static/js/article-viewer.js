(function () {
  const container = document.getElementById('article');
  const tocList = document.getElementById('toc-list');
  const drawer = document.getElementById('toc-drawer');
  const backdrop = document.getElementById('toc-backdrop');
  const tocBtn = document.getElementById('toc-btn');
  const topBtn = document.getElementById('top-btn');
  const feedbackBtn = document.getElementById('feedback-btn');
  const closeBtn = document.getElementById('toc-close');

  const articlePath = container && container.dataset.articlePath;
  if (!articlePath) return;

  function slugify(text) {
    return text
      .toString()
      .toLowerCase()
      .normalize('NFD')
      .replace(/[̀-ͯ]/g, '')
      .replace(/[^a-z0-9\s-]/g, '')
      .trim()
      .replace(/\s+/g, '-')
      .replace(/-+/g, '-');
  }

  function buildToc(root) {
    if (!tocList) return;
    const headings = root.querySelectorAll('h2, h3, h4');
    const usedIds = new Set();
    tocList.innerHTML = '';
    headings.forEach((h) => {
      let base = h.id || slugify(h.textContent);
      let id = base;
      let i = 2;
      while (usedIds.has(id)) id = base + '-' + i++;
      usedIds.add(id);
      h.id = id;

      const li = document.createElement('li');
      li.className = 'toc-' + h.tagName.toLowerCase();
      const a = document.createElement('a');
      a.href = '#' + id;
      a.textContent = h.textContent;
      a.addEventListener('click', closeDrawer);
      li.appendChild(a);
      tocList.appendChild(li);
    });
  }

  function openDrawer() {
    if (!drawer) return;
    drawer.classList.add('is-open');
    backdrop.classList.add('is-open');
    document.body.style.overflow = 'hidden';
  }

  function closeDrawer() {
    if (!drawer) return;
    drawer.classList.remove('is-open');
    backdrop.classList.remove('is-open');
    document.body.style.overflow = '';
  }

  if (tocBtn) tocBtn.addEventListener('click', openDrawer);
  if (closeBtn) closeBtn.addEventListener('click', closeDrawer);
  if (backdrop) backdrop.addEventListener('click', closeDrawer);

  if (topBtn) {
    topBtn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
    window.addEventListener('scroll', () => {
      if (window.scrollY > 400) topBtn.classList.add('is-visible');
      else topBtn.classList.remove('is-visible');
    });
  }

  function currentSectionHeading() {
    const headings = container.querySelectorAll('h1, h2, h3, h4');
    let current = null;
    const y = window.scrollY + 120;
    for (const h of headings) {
      if (h.offsetTop <= y) current = h;
      else break;
    }
    return current;
  }

  if (feedbackBtn) {
    const email = feedbackBtn.dataset.email;
    const lang = (document.documentElement.lang || 'en').toLowerCase().startsWith('fr') ? 'fr' : 'en';
    const strings = {
      fr: {
        subject: (s) => `JP³ — retour de lecture${s ? ' : ' + s : ''}`,
        body: (s, url) => `Section : ${s || '(début de l\'article)'}\nURL : ${url}\n\n---\n\n`,
      },
      en: {
        subject: (s) => `JP³ — reader feedback${s ? ': ' + s : ''}`,
        body: (s, url) => `Section: ${s || '(top of article)'}\nURL: ${url}\n\n---\n\n`,
      },
    };
    feedbackBtn.addEventListener('click', () => {
      const h = currentSectionHeading();
      const sectionText = h ? h.textContent.trim() : '';
      const anchor = h && h.id ? '#' + h.id : '';
      const url = window.location.href.split('#')[0] + anchor;
      const t = strings[lang];
      const href = 'mailto:' + email +
        '?subject=' + encodeURIComponent(t.subject(sectionText)) +
        '&body=' + encodeURIComponent(t.body(sectionText, url));
      window.location.href = href;
    });
  }

  function insertVersionStamp(path) {
    const normalizedPath = path.replace(/^(\.\.\/)+/, '');
    const apiUrl = 'https://api.github.com/repos/PerigGouanvic/jp3/commits?path=' +
      encodeURIComponent(normalizedPath) + '&per_page=1';
    fetch(apiUrl)
      .then((r) => (r.ok ? r.json() : null))
      .then((data) => {
        if (!data || !data.length) return;
        const commit = data[0];
        const date = new Date(commit.commit.author.date);
        const sha = commit.sha.slice(0, 7);
        const commitUrl = commit.html_url;
        const lang = (document.documentElement.lang || 'en')
          .toLowerCase()
          .startsWith('fr')
          ? 'fr'
          : 'en';
        const yyyy = date.getUTCFullYear();
        const mm = String(date.getUTCMonth() + 1).padStart(2, '0');
        const dd = String(date.getUTCDate()).padStart(2, '0');
        const hh = String(date.getUTCHours()).padStart(2, '0');
        const min = String(date.getUTCMinutes()).padStart(2, '0');
        const dateStr = yyyy + '-' + mm + '-' + dd + ' ' + hh + ':' + min + ' UTC';
        const label = lang === 'fr' ? 'Publié' : 'Published';
        const el = document.createElement('p');
        el.className = 'version-stamp';
        el.style.cssText =
          'font-size:0.8rem;color:#999;font-style:italic;margin:-0.5rem 0 2rem;';
        el.innerHTML =
          label + ' : ' + dateStr +
          ' · <a href="' + commitUrl + '" target="_blank" rel="noopener" style="color:#999;">commit ' + sha + '</a>';
        const subtitle = container.querySelector('.subtitle-lead');
        if (subtitle) subtitle.after(el);
        else {
          const firstH1 = container.querySelector('h1');
          if (firstH1) firstH1.after(el);
        }
      })
      .catch(() => {});
  }

  fetch(articlePath, { cache: 'no-cache' })
    .then((r) => {
      if (!r.ok) throw new Error('HTTP ' + r.status);
      return r.text();
    })
    .then((md) => {
      container.classList.remove('loading');
      container.innerHTML = marked.parse(md);
      const firstH1 = container.querySelector('h1');
      if (firstH1) {
        let next = firstH1.nextElementSibling;
        if (next && next.tagName === 'P') next.classList.add('subtitle-lead');
      }
      buildToc(container);
      insertVersionStamp(articlePath);
      if (window.location.hash) {
        const target = document.getElementById(window.location.hash.slice(1));
        if (target) target.scrollIntoView();
      }
    })
    .catch((err) => {
      container.innerHTML =
        '<p style="color:#b00">Error loading article: ' + err.message + '</p>';
    });
})();
