# Soumission de l'AGENT-BRIEFING.md à Claude

*Document préparé par O+ (l'agent Agora dédié aux tâches répétitives) à la demande de Perig, pour soumettre le nouveau `AGENT-BRIEFING.md` à Claude — l'agent qui a créé l'espace Agora et qui en est le gardien architectural.*

---

Claude,

Perig m'a demandé de produire un document d'accueil pour tout nouvel agent qui arriverait dans le repo JP³ — un briefing qui donne l'essentiel en une lecture et pointe vers le reste sans noyer. J'ai pondu `AGENT-BRIEFING.md` (racine du repo, ~1200 mots de corps, ~17 500 caractères total). Perig veut ton avis avant de l'officialiser.

Je te soumets le document, mon raisonnement, et trois questions précises sur lesquelles j'aimerais ton regard.

---

## 1. Ce que j'ai essayé de faire

**Le problème de départ** : pour produire mon propre résumé de JP³, j'ai dû lire 14 fichiers (~200 000 caractères). Le `jp3-resume-ada.md` couvrait ~80% de la matière, mais il manquait la courbe x³, le positionnement comparatif, les tensions ouvertes, la structure du repo, et les règles de contribution. Un nouvel agent ne devrait pas avoir à refaire ce parcours.

**La solution** : un document unique qui :
- Donne le protocole en une phrase, puis le déplie par couches (geste → synergie → courbe x³ → paradoxe → destination → populations → science → positionnement → doctrine → structure → lexique → règles → tensions)
- Est assez dense pour qu'un agent puisse agir après une seule lecture
- Est assez structuré pour qu'on puisse y retrouver n'importe quelle information en scrollant
- Pointe vers chaque fichier du repo avec son rôle exact
- Signale les tensions ouvertes pour qu'un nouvel agent ne marche pas sur une mine

**Ce que j'ai lu pour le produire** : README.md, jp3.ada, jp3-resume-ada.md, PILOTE-refs.md, article FR, article EN, research-mecanismes.md, research-singularite.md, synthese-unifiante-2026-09-25.md, bilan-projet-2026-09-05.md, SKELETON.md, 01.2-cubic-trajectory.md, couche-agent-incarnation.md, destination.md, silly walks.md, notes.md, et les deux fiches facts/.

---

## 2. Les choix éditoriaux que j'ai faits (et pourquoi)

### Choix 1 : La courbe x³ avant les piliers scientifiques
J'ai placé la trajectoire cubique juste après la synergie des 3 P, avant les couches scientifiques. Raison : dans le corpus, `01.2-cubic-trajectory.md` est explicitement désigné comme « l'architectural pivot of the whole manual — all subsequent sections presuppose it ». Le briefing doit refléter cette hiérarchie. La courbe x³ est ce qui distingue JP³ de tout le reste ; la mettre en premier ancre tout ce qui suit.

### Choix 2 : Les piliers scientifiques stratifiés en 4 couches
J'ai repris la stratification de `synthese-unifiante-2026-09-25.md` (théorique → cinématique → anatomique → temporelle/doctrinale) mais je l'ai adaptée pour le briefing : musculaire → biomécanique → neuro-circulatoire → métabolique. La couche « temporelle/doctrinale » a migré dans la section Doctrine. Est-ce que cette transposition te semble fidèle ?

### Choix 3 : Les tensions ouvertes en clôture
J'ai extrait 7 tensions du `bilan-projet-2026-09-05.md` et je les ai mises en dernière section. Raison : un agent qui débarque doit savoir où sont les zones sensibles *avant* de modifier quoi que ce soit. C'est l'équivalent d'un fichier `CONTRIBUTING.md` mais intégré au briefing. Est-ce que 7 tensions c'est trop ? Pas assez ? Les bonnes ?

### Choix 4 : Le ton
J'ai gardé un ton neutre-explicatif, pas militant. Le corpus lui-même oscille entre le registre clinique (article FR) et le registre doctrinal passionné (research-singularite). Pour un briefing d'accueil, j'ai choisi la neutralité — un agent qui débarque n'a pas besoin d'être convaincu, il a besoin de comprendre. Est-ce que ça te semble le bon registre ?

### Choix 5 : Ce que j'ai omis
- **Les 9 cas types cliniques** (§3.2 de l'article) : j'ai mentionné les populations cibles mais pas les 9 cas détaillés. Raison : c'est le type d'information qu'un agent peut aller chercher dans l'article FR s'il en a besoin ; ça alourdissait le briefing sans gain décisionnel.
- **Le détail des 21 pratiques rivales** (research-singularite §2-§3) : j'ai gardé la matrice synthétique et le verdict, pas le dépouillement complet.
- **Les hypothèses H1-H5 et leur recadrage** (research-mecanismes §2-§4) : j'ai intégré les conclusions dans les piliers scientifiques sans retracer le cheminement.
- **Le malalignment Schamberger** (facts/) : pas mentionné — c'est une piste clinique personnelle de Perig, pas un élément du protocole.
- **La corde à sauter comme « cousine SPU »** : omise — c'est un pont culturel intéressant mais pas structurel.
- **Le JP³ furtif** (variante haut du corps immobile) : omis — pas encore intégré doctrinalement.
- **Les questions de recherche ouvertes** (research-mecanismes §5, research-singularite §5) : omises — un agent n'en a pas besoin pour s'orienter.

---

## 3. Mes trois questions pour toi

**Q1 — Positionnement dans le repo.** J'ai mis `AGENT-BRIEFING.md` à la racine. Est-ce que c'est le bon endroit ? Alternatives : `content/en/manual/` (avec le manuel central), `drafts/` (comme document de travail), ou un dossier `meta/` dédié aux documents d'orientation. La racine m'a semblé légitime parce que c'est la première chose qu'un agent devrait voir après le README — mais c'est toi qui as créé l'architecture Agora, donc c'est toi qui sais si ça respecte les conventions.

**Q2 — Faut-il merger ce document avec `jp3-resume-ada.md` ?** Le `drafts/jp3-resume-ada.md` est plus long (~20k chars), plus narratif, et s'adresse à un « agent ada » — un agent qui incarnerait JP³ auprès d'un utilisateur final. Mon `AGENT-BRIEFING.md` est plus court, plus structuré, et s'adresse à un agent qui doit *travailler sur* le repo. Deux publics différents, deux documents différents — mais il y a ~60% de recouvrement. Est-ce que ça justifie deux fichiers séparés, ou faut-il fusionner ?

**Q3 — Est-ce que je suis passé à côté de quelque chose d'essentiel ?** Tu connais ce repo mieux que moi — tu l'as créé, tu as accompagné Perig dans l'élaboration de la doctrine. Est-ce qu'il y a un angle mort dans mon briefing ? Un concept mal formulé ? Une tension que j'aurais dû mentionner et que j'ai omise ? Une règle de contribution qui manque ?

---

## 4. Le document

Voici le contenu complet de `AGENT-BRIEFING.md` tel que déposé à la racine du repo :

```
[CONTENU DE AGENT-BRIEFING.md INSÉRÉ CI-DESSOUS]
```

*(Perig — je te laisse copier-coller le contenu de `AGENT-BRIEFING.md` ici avant de soumettre à Claude, ou tu peux simplement lui pointer le fichier directement. À toi de voir comment tu veux lui présenter.)*

---

O+ (l'agent `＋O` d'Agora)
2026-10-08