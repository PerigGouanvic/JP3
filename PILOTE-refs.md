# Pilote — format de citation à traçabilité augmentée

> **Statut :** brouillon de travail, non publié. Sert à valider le format avant déroulé sur les 67 refs de `content/fr/article.md`.
> **À faire par Perig :** relire le préambule et les 3 refs pilotes ci-dessous, arbitrer les points marqués `→ décision Perig`, réécrire les gloses en son nom (les drafts ci-dessous sont proposés pour montrer le format, pas pour être signés tels quels).

---

## Préambule proposé — « Politique de citation » (à placer en tête de la section Références de l'article)

*Draft à amender.*

> Cet article défend une thèse qui n'a pas encore été testée empiriquement en tant que protocole intégré. Chacune de ses composantes s'appuie sur des travaux publiés, mais l'assemblage lui-même reste à valider. En complément — et parce que je publie hors institution académique, sans le crédit d'autorité qu'offre une affiliation —, j'adopte pour cet article une politique de citation à **traçabilité augmentée**. Chaque référence numérotée est accessible en cliquant sur son numéro dans le texte : le bloc déplié fournit (a) la bibliographie complète et un lien direct vers le texte source, (b) le type assumé de la source, (c) un extrait cité large dans la langue originale, (d) ma glose personnelle indiquant *comment* et *pourquoi* cette source soutient la claim précise à cet endroit du texte, et (e) une contre-lecture signalant ce que la source ne dit pas, pour prévenir toute extrapolation. L'objectif est de rendre la vérification triviale pour le lecteur et impossible à contourner pour l'auteur : aucune référence ne doit pouvoir tenir par simple correspondance de mots-clés.

**Notes de format :**
- Les extraits sont cités dans leur langue d'origine (anglais pour la quasi-totalité). Les gloses et contre-lectures existent en FR (source) et EN (traduction).
- Une même référence peut être appelée sous plusieurs numéros : dans ce cas, la glose est **réécrite pour chaque contexte d'usage** (une ref ne soutient jamais la même claim de deux façons identiques).
- Tags de type utilisés : `[étude primaire]`, `[revue narrative]`, `[revue systématique / méta-analyse]`, `[chapitre-manuel]`, `[source grand public / commerciale]`, `[métaphore d'auteur — non sourcée]`.

---

## Format cible d'une entrée

Rendu markdown, exploite `<details>/<summary>` (natif GitHub, se rend proprement sur GitHub Pages, imprimable via `@media print` en mode ouvert).

```markdown
<details>
<summary><strong>[N]</strong> Auteur1, Auteur2 (Année) — <em>Titre court</em></summary>

**Bibliographie** — Auteur1, X. Y., Auteur2, A. B., & Auteur3, C. D. (Année). *Titre complet.* Journal, volume(numéro), pages.
**Type** — `[étude primaire]`
**Accès** — [DOI](https://doi.org/…) · [PMID](https://pubmed.ncbi.nlm.nih.gov/…) · [PDF OA](…)

**Extrait cité (langue originale)**

> « Paragraphe entier, ~4-8 lignes, pas une phrase isolée. »

**Ce que j'en tire** (glose auteur, soutient la claim au §X.Y)

Deux ou trois lignes en FR expliquant précisément quel morceau de mon argument s'appuie sur cette source, et comment.

**Ce que ce texte ne dit pas**

Une ligne, souvent la plus importante — barrière contre l'extrapolation.

</details>
```

---

## Pilote 1 — ref 30 & 32 actuelles (soleus push-ups iScience 2022)

### État actuel dans le texte

```
30. Raper, D. P., et al. (2022). A potent physiological method to magnify and sustain
    soleus oxidative metabolism improves glucose and lipid regulation. iScience, 25(8), 104270.
    - Extrait vérifiable : "The soleus, primarily composed of slow-twitch, oxidative fibers,
      demonstrates sustained high activity during isometric and low-level endurance contractions,
      such as during repetitive plantarflexions in standing or 'soleus push-ups'."
32. [même ref, réutilisée pour un autre extrait]
```

### Vérification menée

Trois erreurs matérielles + une erreur d'interprétation :

1. **Auteurs faux** — L'étude est de **Marc T. Hamilton, Deborah G. Hamilton, Theodore W. Zderic** (pas "Raper"). "Raper" n'apparaît ni dans les auteurs, ni dans la liste des affiliations. Vraisemblablement une hallucination LLM.
2. **Volume/article faux** — Volume 25**(9)**, article **104869** (pas 25(8), 104270).
3. **DOI/PMID absents** — DOI réel `10.1016/j.isci.2022.104869`, PMID `36034224`.
4. **Misattribution des chiffres** dans le texte principal (§2.2.1) :
   - Article : *"52% less postprandial glucose excursion"* et *"60% less hyperinsulinemia"* — deux grandeurs mesurées directement.
   - Texte JP³ actuel : *"une captation de glucose augmentant jusqu'à 52% et l'oxydation des graisses s'améliorant de 60%"* — deux grandeurs différentes (captation musculaire, oxydation lipidique), qui sont des **mécanismes sous-jacents** discutés dans l'article mais non chiffrés directement à ces valeurs.
   - **Nuance importante** : la direction physiologique est cohérente (un soléaire actif capte bien du glucose ; une hyperinsulinémie réduite implique plus de lipolyse). Ce n'est donc pas un renversement de sens, mais un déplacement chiffré : les valeurs 52% et 60% sont attribuées à des grandeurs différentes de celles mesurées. Un lecteur qui vérifie la ref trouvera *"52% less postprandial glucose excursion"*, pas *"52% more glucose uptake"*.
5. **Position** — l'étude porte sur des sujets **assis** pendant des heures, pas debout. Le lien avec un jogging debout de 30-90 min doit être posé comme extrapolation, pas comme équivalence.

### Bloc proposé au format cible

*Draft — la glose et la contre-lecture doivent être ré-écrites par Perig.*

```markdown
<details>
<summary><strong>[30]</strong> Hamilton, Hamilton & Zderic (2022) — <em>Soleus oxidative metabolism improves glucose and lipid regulation</em></summary>

**Bibliographie** — Hamilton, M. T., Hamilton, D. G., & Zderic, T. W. (2022). *A potent physiological method to magnify and sustain soleus oxidative metabolism improves glucose and lipid regulation.* iScience, 25(9), 104869.
**Type** — `[étude primaire]`
**Accès** — [DOI 10.1016/j.isci.2022.104869](https://doi.org/10.1016/j.isci.2022.104869) · [PMID 36034224](https://pubmed.ncbi.nlm.nih.gov/36034224/) · [texte intégral (Cell/iScience)](https://www.cell.com/iscience/fulltext/S2589-0042(22)01141-5)

**Extrait cité (langue originale)**

> « Slow oxidative muscle, most notably the soleus, is inherently well equipped with the molecular machinery for regulating blood-borne substrates. […] The human soleus muscle could raise local oxidative metabolism to high levels for hours without fatigue, during a type of soleus-dominant activity while sitting, even in unfit volunteers. […] Postprandial glucose excursion was reduced by 52% (approximately 50 mg/dL less between ~1 and 2 hours) with 60% less hyperinsulinemia. »

**Ce que j'en tire** (glose auteur — soutient la claim au §2.2.1 sur le soléaire comme moteur métabolique)

Cette étude établit que le muscle soléaire, même en sollicitation isolée et de faible intensité, peut sustainer un métabolisme oxydatif élevé pendant des heures et modifier significativement la glycémie et l'insulinémie postprandiales. Je m'en sers pour appuyer l'idée que le soléaire est un moteur métabolique disproportionné par rapport à sa masse, et que sa sollicitation prolongée — dont le JP³ est un mode possible — peut avoir des effets métaboliques systémiques. Les chiffres 52% et 60% sont des réductions postprandiales de glucose et d'hyperinsulinémie, pas des hausses d'oxydation ou de captation.

**Ce que ce texte ne dit pas**

L'étude teste le « soleus push-up » **en position assise** pendant plusieurs heures. Elle n'établit pas que le jogging sur place debout (JP³) reproduise le même profil métabolique. Le lien est théoriquement plausible (activation soléaire dominante, faible intensité, durée) mais reste une extrapolation à valider empiriquement.

</details>
```

### Actions à effectuer dans `content/fr/article.md` (après validation du format)

- **§2.2.1** — Corriger la misattribution des chiffres : préserver les valeurs exactes appliquées aux grandeurs mesurées (excursion glucose −52%, hyperinsulinémie −60%) et déplacer les mécanismes (captation soléaire, oxydation lipidique) en glose explicative.
- **Réf 30 et 32** — Fusionner en une seule entrée (`[30]`) puisqu'il s'agit du même article, ou conserver deux appels [30] et [32] au même bloc si les deux extraits différents restent utiles (dans ce cas, deux gloses contextuelles différentes).
- **Renuméroter** la bibliographie en aval de 32.

**→ décision Perig :** fusionner en une entrée, ou garder deux appels ? *Ma reco : deux appels au même bloc si les gloses divergent (elles doivent divergier — sinon fusionner).*

---

## Pilote 2 — ref 14 actuelle (Mirrorsdelivered.com)

### État actuel dans le texte

```
14. Mirrorsdelivered.com (2025). How Mirrors Impact Posture and Injury Prevention in Workouts.
    - Extrait vérifié : "Mirrors offer immediate visual feedback, allowing individuals to observe
      their body's movements and make real-time corrections to their form, significantly enhancing
      kinesthetic awareness and technique for posture improvement and injury prevention."
```

### Vérification menée

`mirrorsdelivered.com` est le **blog SEO d'un site marchand de miroirs pour salles de gym et studios de yoga**. Aucun article, aucune étude, aucune revue par les pairs. L'extrait cité est du contenu marketing/informatif produit pour référencement, sans donnée primaire ni méta-analyse.

### Trois options possibles

**Option A — supprimer** et retirer l'appel de ref dans le texte (§2.1.1). La claim visée (« un miroir donne un feedback visuel utile à la correction posturale ») est plausible mais soutenue ailleurs plus solidement.

**Option B — remplacer** par une source primaire. Deux pistes :
- Diener et al. (2019, *Gait & Posture*) sur mirror visual feedback en rééducation.
- Ramachandran & Altschuler (2009, *Brain*) sur la thérapie miroir pour douleur/rééducation motrice.

**Option C — conserver et reclasser** en `[source grand public / commerciale]`, avec glose explicite : « je mobilise ici une source non-académique parce que la claim est de sens commun et que je n'ai pas trouvé de source primaire directement transposable au contexte JP³ ». Assumé, mais fragilise le voisinage.

### Bloc proposé au format cible (si option C retenue)

```markdown
<details>
<summary><strong>[14]</strong> Mirrors Delivered (blog, s.d.) — <em>How Mirrors Impact Posture and Injury Prevention in Workouts</em></summary>

**Bibliographie** — *How Mirrors Impact Posture and Injury Prevention in Workouts.* Blog Mirrors Delivered (site marchand de miroirs de fitness), sans date de publication clairement identifiée.
**Type** — `[source grand public / commerciale]`
**Accès** — [Article original](https://mirrorsdelivered.com/blogs/tips-and-tricks/how-mirrors-impact-posture-injury-prevention-in-workouts)

**Extrait cité (langue originale)**

> « Mirrors offer immediate visual feedback, allowing individuals to observe their body's movements and make real-time corrections to their form, significantly enhancing kinesthetic awareness and technique for posture improvement and injury prevention. »

**Ce que j'en tire** (glose auteur — soutient la mention du miroir comme aide à l'auto-correction au §2.1.1)

Je mobilise ici une source non-académique pour appuyer une observation de sens commun : le miroir facilite le feedback visuel et l'auto-correction. Je n'ai pas trouvé, à ce stade, d'étude primaire directement transposable au contexte de la pratique privée à domicile.

**Ce que ce texte ne dit pas**

Ce texte est produit par un site marchand pour vendre des miroirs de fitness. Il ne rapporte ni étude, ni mesure, ni comparaison contrôlée. La claim doit être lue comme une plausibilité, pas comme un résultat empirique.

</details>
```

**→ décision Perig :** A, B ou C ? *Ma reco : B (chercher un remplaçant primaire) — je peux le faire dans un prochain passage. À défaut, A (supprimer). Éviter C : conserver une source commerciale déguisée en académique est exactement ce que la politique de citation cherche à empêcher, et l'assumer via un tag n'efface pas complètement le signal négatif.*

---

## Pilote 3 — ref 46 actuelle (Kleim & Jones 2008, neuroplasticité)

### État actuel dans le texte

```
46. Kleim, J. A., & Jones, T. A. (2008). Principles of experience-dependent neural plasticity:
    implications for rehabilitation after brain damage. Journal of Speech, Language, and Hearing
    Research, 51(1), S225-S239.
    - Extrait vérifiable : "Repetition is a critical variable in driving experience-dependent
      plasticity. Intensive, repetitive practice of motor skills is essential for inducing
      cortical reorganization and functional recovery."
```

### Vérification menée

Ref **solide et exacte** (rare cas où tout est correct dès l'existant). Article-clé, cité massivement en réadaptation neurologique. Une seule lacune : le DOI manque, et l'extrait cité est plus une **synthèse fidèle** qu'une citation textuelle — à confirmer contre l'article.

### Bloc proposé au format cible

```markdown
<details>
<summary><strong>[46]</strong> Kleim & Jones (2008) — <em>Principles of experience-dependent neural plasticity</em></summary>

**Bibliographie** — Kleim, J. A., & Jones, T. A. (2008). *Principles of experience-dependent neural plasticity: implications for rehabilitation after brain damage.* Journal of Speech, Language, and Hearing Research, 51(1), S225-S239.
**Type** — `[revue narrative]`
**Accès** — [DOI 10.1044/1092-4388(2008/018)](https://doi.org/10.1044/1092-4388(2008/018)) · [ASHA (accès abonné)](https://pubs.asha.org/doi/abs/10.1044/1092-4388%282008/018%29) · [ResearchGate (PDF OA)](https://www.researchgate.net/publication/5620837)

**Extrait cité (langue originale)**

> *[À insérer : paragraphe direct de l'article confirmant que la répétition intensive de la pratique motrice est un facteur causal de la réorganisation corticale et de la récupération fonctionnelle. Nécessite accès au texte intégral pour vérifier la citation exacte plutôt que la synthèse actuelle.]*

**Ce que j'en tire** (glose auteur — soutient la claim au §2.2.3 sur le nombre élevé de cycles de mouvement en JP³ comme moteur de neuroplasticité)

Kleim & Jones formalisent dix principes régissant la plasticité neurale dépendante de l'expérience, dont la **répétition** et l'**intensité** comme conditions nécessaires du remodelage cortical. Je m'en sers pour justifier que la nature répétitive et prolongée du JP³ (plusieurs milliers de cycles par séance) crée un substrat favorable à la ré-éducation de patterns moteurs dysfonctionnels — sans quoi la répétition pieds nus ne serait qu'un renforcement musculaire, pas un ré-apprentissage.

**Ce que ce texte ne dit pas**

L'article porte sur la neuroplasticité **après lésion cérébrale** (AVC, TCC). L'application à la ré-éducation de la démarche chez un sujet non-lésé est une **transposition raisonnable mais extrapolée** : les mécanismes de plasticité opèrent également chez le sujet sain, mais les paramètres optimaux (nombre de répétitions, saillance, spécificité) ne sont pas directement calibrés pour ce contexte.

</details>
```

**→ Action à effectuer :** aller chercher un extrait direct de l'article (nécessite accès au texte intégral — ResearchGate a un PDF OA, à vérifier).

---

## Ce que ce pilote établit / ce qu'il reste à décider

**Établi :**
- Format des 5 champs — biblio, type, accès, extrait, glose, contre-lecture — semble tenir sur les trois cas.
- La glose contextuelle *par appel* est la valeur ajoutée méthodologique principale.
- La contre-lecture est le champ le plus discriminant : sur le pilote 1, c'est elle qui empêche l'extrapolation assis→debout ; sur le pilote 3, elle qualifie la portée du résultat.

**À décider avec Perig :**
1. **Rendu accordéon** — le pattern `<details>/<summary>` te va, ou tu veux qu'on teste un rendu custom (bordure, icône, animation) via un peu de CSS/JS sur le site ?
2. **Refs réutilisées** (Trost, Csikszentmihalyi, Latorre-Román, Robbins & Gouw…) — un appel = un bloc (avec glose ré-écrite) ? Ou un bloc canonique + gloses secondaires plus courtes ? *Ma reco : deux appels indépendants, chacun avec sa glose complète, pour forcer la distinction.*
3. **Vue « bibliographie linéaire »** en fin de doc pour usage académique/citation — la générer ? à quel moment ?
4. **Refs à supprimer d'office** vs à remplacer : Mirrorsdelivered (14), Advanced Human Performance (48), American Home Fitness (55), Physio-pedia (33, 47), Henry Ford (59), UChicago Medicine (61), Luks blog (57), Sciencedirect glossaire (18). Politique globale ? *Ma reco : les traiter cas par cas dans le prochain passage, avec un biais fort vers la suppression/remplacement.*
5. **Effort de vérification** — les 67 refs sont un chantier long. Est-ce qu'on y va section par section (§1, puis §2.1.1, etc.) en commitant à chaque étape ? *Ma reco : oui, un commit par sous-section, pour garder l'historique navigable.*

**À porter dans le repo `ada-format` :**
- Ajouter au manifest `.ada` un champ `citations[]` avec les sous-champs `id`, `bibliography`, `url`, `doi`, `type`, `full-quote`, `author-gloss`, `counter-reading`, `supports-claims: [ref-anchors]`. Voir comme atout distinctif du format (« anti-hallucination natif »).
- À rédiger dans le README `ada-format` dans une prochaine session.
