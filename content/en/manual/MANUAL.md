# JP³: Jogging in Place, at Your Own Pace, in Your Own Place
## Central EN Manual — Consolidated Source

**Status** : migration massive 2026-11-04 (fenêtre bilan hebdo). Tout le contenu dispersé dans `content/en/article.md`, `content/fr/article.md`, `content/fr/research-singularite.md`, `content/fr/research-mecanismes.md`, `facts/`, les fiches mémoire projet (`~/.claude/projects/-home-perig-projects-jp3/memory/*.md`), et les drafts pertinents est versé ici dans sa section canonique selon le squelette `SKELETON.md` (validé 2026-10-08).

**Principe de versement** : contenu brut copié, **pas de traduction, pas d'harmonisation de ton, pas de réécriture**. Les blocs FR restent FR, les blocs EN restent EN. Chaque bloc porte un en-tête `> **source:** <chemin ou fiche> §…` pour traçabilité. L'homogénéisation (traduction FR→EN, harmonisation, rédaction finale) est une passe ultérieure.

**Architectural logic** (rappel SKELETON) : 3 Ps × 3 synergies × 1 confluence (7 cases, verrouillé 2026-07-30), inséré dans une architecture canonique d'article scientifique (Intro → Foundations → Mechanisms → Protocol → Doctrine → Discussion → References).

**Citation policy** : voir `PILOTE-refs.md` (politique "augmented traceability"). **Note de correction** : §2.2.1 soleus porte des erreurs d'attribution identifiées dans PILOTE-refs.md §Pilote 1 — Hamilton/Zderic (pas "Raper"), iScience 25(9), article 104869 ; chiffres 52% / 60% à vérifier dans leur grandeur exacte. À corriger lors de la passe d'harmonisation.

---

## Table of Contents — General

- [Front matter](#front-matter)
- [§ 1. Introduction](#-1-introduction)
- [§ 2. The Three Ps — anatomy of the constraint](#-2-the-three-ps--anatomy-of-the-constraint)
- [§ 3. The multiplicative core — three synergies and their confluence](#-3-the-multiplicative-core--three-synergies-and-their-confluence)
- [§ 4. Physiological mechanisms — the full stack](#-4-physiological-mechanisms--the-full-stack)
- [§ 5. The protocol](#-5-the-protocol)
- [§ 6. Doctrine](#-6-doctrine)
- [§ 7. Applied cases — clinical and population](#-7-applied-cases--clinical-and-population)
- [§ 8. Discussion](#-8-discussion)
- [§ 9. Conclusion](#-9-conclusion)
- [References](#references)
- [Appendices (derivations, pointers only)](#appendices-derivations-pointers-only)

---

## Front matter

<!-- FRONT-MATTER-CONTENT -->

---

## § 1. Introduction

**TOC §1**
- §1.1 The gap this fills — no existing protocol combines the three Ps; singularity as design constraint (*via negativa*), not marketing
- §1.2 The "³" as cubic trajectory — formal *y = x³* vs *y = 3x*
- §1.3 Scope of this manual — single EN source; announced derivations (FR article, clinical deck, patient leaflets, agent); citation policy

### §1.1 The gap this fills

> **source:** `content/en/article.md` §1 Introduction + abstract

**Abstract (verbatim) :** JP³: Jogging in Place × at Your Own Pace × in Your Own Place. The "³" in JP³ is not merely symbolic; it represents a **multiplicative synergy** where each "P" exponentially amplifies the efficacy of the other two. The contemporary landscape of physical activity is characterized by a striking paradox: a pervasive social discourse glorifying intense, performance-driven exercise, yet an alarming reality where the vast majority of the global population fails to meet minimal physical activity guidelines. This creates a cycle of inactivity, particularly for vulnerable populations facing amplified barriers. JP³ emerges as a revolutionary exercise modality that, through its inherently accessible, self-paced, and private nature, **eliminates 80% of traditional exercise obstacles**. This protocol leverages biomechanical (soleus activation, proprioception), physiological (aerobic metabolism, slow VO2 kinetics), and psychological principles (behavioral activation, anxiety reduction). It is designed to be a pragmatic tool for diverse healthcare professionals, offering a unique and robust entry point to movement for all, including those traditionally excluded from physical activity. Key benefits include improved exercise adherence, emotional regulation, behavioral activation, and broad physiological gains.

**Introduction body (verbatim) :**

The contemporary public health landscape is shadowed by a global pandemic of physical inactivity, with profound consequences for both physical and mental well-being. Despite widespread awareness of the benefits of exercise, a significant share of the population struggles to engage in regular physical activity. Common barriers include lack of time, financial cost, unfavorable weather, intimidation by fitness environments, and the sheer mental effort required to initiate and sustain a routine. These universal obstacles are considerably amplified for vulnerable populations—individuals grappling with chronic fatigue, anxiety disorders, depression, obesity, social anxiety, or frailties linked to aging. For these groups, traditional exercise prescriptions often prove unworkable, leading to the perpetuation of sedentary lifestyles and a growing sense of inadequacy.

It is in response to this critical unmet need that **JP³: Jogging in Place, at Your Own Pace, in Your Own Place** is introduced as an innovative and radically accessible solution. The "³" in the acronym is not a mere stylistic choice; it represents a **multiplicative synergy** where each "P" exponentially amplifies the efficacy of the other two. This foundational principle is the key to understanding why JP³ transcends simple exercise, offering a universally applicable approach while being particularly robust for those who need it most. This interaction creates a unique environment that overcomes traditional exercise barriers and optimizes physiological and psychological benefits. By systematically dismantling the most common barriers to physical activity, JP³ opens a powerful and sustainable path to movement.

This article aims to elucidate the theoretical foundations, practical protocol, synergistic mechanisms of action, and broad clinical benefits of JP³. It will demonstrate how JP³ can empower a wide range of individuals, including those traditionally marginalized by conventional exercise paradigms, and will explore the transformative potential of integrating AI coaching into its deployment.

---

### §1.2 The "³" as cubic trajectory — formal *y = x³* vs *y = 3x*

> **source:** `content/en/manual/01.2-cubic-trajectory.md` (pilot section drafted 2026-10-08, derived from `content/fr/research-singularite.md` §4.6) + `memory/project_axe_c_courbure_x2.md`

The exponent "³" in JP³ is not stylistic. It is literal, in two senses that compose: it names both the number of dimensions the protocol forces to multiply, and the shape of the session-time trajectory those multiplications produce. This section states that double literalness formally. All subsequent sections (§ 3 synergies, § 4 mechanistic stack, § 5 protocol, § 6 doctrine) presuppose it.

#### 1.2.1 The three Ps multiply — they do not add

Each P removes a different class of constraint. Taken alone, two Ps still leave the third constraint active, which collapses the device to a known category:

- **In Place without Own Pace** = prescribed protocol (physio marching, Walk at Home). Verticality is present; the external tempo-floor is not lifted.
- **Own Pace without Own Place** = public ground. One starts visibly productive to a gaze that imposes an output rate (slow jogging in a park). Autonomy is nominal; the surrounding look restores a floor.
- **Own Place without In Place** = home-cardio with video (Peloton, Walk at Home). The place is private; the coach imposes the tempo.

In each pair, the missing third P reinstates a floor that the remaining two cannot cancel. The device therefore has a **volume**, not a sum: its characteristic action appears only when the three dimensions compose. Structurally, this is *x³*, not *3x*. The notation is a reminder that one P alone is one-dimensional (a line), two Ps are two-dimensional (a surface), and three Ps are a volume whose magnitude grows faster than the sum of its sides.

#### 1.2.2 Two session-time regimes

Once the three Ps compose a volume, the within-session trajectory of effort inherits the geometry. Two regimes are then distinguishable:

- **Linear regime (y = 3x).** Each minute is equivalent to the preceding one. Conventional Zone 2, constant-pace running, prescribed tempo — the bulk of culturally legitimate cardio. The line is predictable; the trajectory does not accelerate.
- **Cubic regime (y = x³).** Each minute **inherits** the preceding ones. Tonic locus coeruleus firing rises cycle after cycle (Poe et al. 2020; Aston-Jones & Cohen 2005); theta–gamma cross-frequency coupling stabilizes and amplifies (Canolty & Knight; Buzsáki); pulsed cerebral perfusion rises progressively via accumulated foot-strike waves; the glymphatic system engages on a delayed window. Each cycle inherits from the preceding one rather than consuming it.

The two regimes are not two intensities of the same thing. They differ in **curvature**, not in slope. A fast linear session and a slow linear session are both *3x* (different coefficients). A JP³ session is *x³* at any coefficient.

#### 1.2.3 The paradox that defines the singularity

The cubic curve **passes below** the linear line for all *t < √3 ≈ 1.73* (in arbitrary normalized units). Over that initial segment the cubic trajectory looks wasteful. It **must** look wasteful — that appearance is the mechanical price of its positive concavity. Then the curves cross; the cubic trajectory overtakes the linear one durably; and the gap grows disproportionately (at *t = 3*: *x³ = 27, 3x = 9*, ratio ×3; at *t = 5*: *x³ = 125, 3x = 15*, ratio ×8).

![Two session regimes: y = 3x (linear) vs y = x³ (JP³). The cubic curve passes below the linear line until crossing at t = √3, then overtakes it durably. The cream-tinted zone is the "apparent waste" region that mainstream fitness refuses to traverse.](../assets/cubic-trajectory.svg)

<!-- SVG asset to be exported from research-singularite §4.6 inline SVG; placeholder reference above. Caption source: "Two session regimes. The cubic curve passes below the line before the crossing, then overtakes it. The cream-tinted region is the 'apparent waste' zone that fitness culture refuses to traverse." -->

#### 1.2.4 Why mainstream fitness systematically fails the cubic regime

The cubic regime cannot be reached by lowering intensity within a linear protocol. Zone 2 at low heart-rate is still *3x* (small coefficient). What forbids the cubic regime in mainstream formats is not the pace — it is the **floor**:

- **Prescribed cardio** (Zone 2 à la San Millán / Attia) targets a heart-rate band from the first minute. The initial segment is cut off by the lower bound of the band.
- **High-intensity formats** (HIIT, fitness snacks) are discontinuous steps. There is no concavity; there are jumps.
- **Conventional warm-up** places the initial segment *before* the "real" session. The curvature is interrupted exactly when it would be about to overtake the linear line.
- **Slow jogging (niko-niko)** installs a stable floor cadence. Tanaka formalized the floor, not the curvature; the result is a horizontal plateau.
- **Marching in place (physio-prescribed)** is dosed by protocol — floor and ceiling imposed, no free curvature.
- **Pacing (ME/CFS)** caps the trajectory by energy-envelope safety; the curvature is explicitly forbidden to accelerate past a threshold.
- **Behavioral Activation** grows *between* sessions (5 min → 10 min → 20 min). This is a curvature of adherence, not of physiology, and it operates inter-session rather than intra-session.

Each of these formats fails the cubic regime by **structural design**, not by accident. They impose a floor — of pace, of cadence, of heart rate, of visible productivity — that cuts off the sub-√3 segment where the cubic trajectory is slower than the line.

#### 1.2.5 Why JP³ accesses it

Three independent mechanical reasons, not one:

1. **A depleted starting state forbids *3x*.** From a fatigued, anxious, or depressed state, the body **cannot** start on the linear line — it falls into the initial segment of the cubic curve by necessity. The depleted state ceases to be a tolerated handicap and becomes the **physical guarantee** that the trajectory is not already parked at *3x*. One cannot cheat. (See § 6.1 — *The paradox of liberating weakness*.)
2. **No external tempo-floor.** The absence of a coach, a cadence target, a music beat, or a visible gaze removes every mechanism that could install a floor. Slow jogging prescribes "niko-niko" as a **stable floor** — hence a plateau, not a curvature. JP³ prescribes no floor at all; it specifies three exclusions (§ 2) and lets the trajectory find its own geometry.
3. **Pure verticality maximizes foot-strike waves at low energetic cost.** Horizontal displacement is expensive and ventilation-bound. Pure vertical oscillation generates the periodic impact wave required for pulsed cerebral perfusion and for the deep postural chain to tune (§ 4.4, § 4.2) **without** requiring an increase in pace. The intra-corporeal dynamics have time to deploy before ventilation becomes a limiting constraint.

These three reasons are **properties of the three Ps**, respectively: the depleted-state logic is a corollary of *Own Place* (private = no performance pressure); the tempo-floor absence is *Own Pace*; the verticality is *In Place*. Each P is one necessary condition for the cubic regime; the three together are sufficient. This is the formal sense in which the three Ps multiply.

#### 1.2.6 The nominal space is empty

A dedicated web search (2026-08-15) on candidate formulations — *auto-emergent effort profile*, *self-reinforcing exercise trajectory*, *warm-up as the workout*, *exponential recruitment*, *monotonically increasing session profile*, *session curvature*, *auto-catalytic training*, *self-priming exercise*, *intra-session progression* — returned no theorized concept of a **self-reinforcing cubic intra-session trajectory**. The underlying substrates are each described separately (VO2 on-kinetics are modelled by exponentials; locus coeruleus is characterized under mild exercise; theta–gamma coupling scales with running speed; cardiovascular drift is documented), but their integration into a single session-time narrative is absent. The nominal space is empty.

Partial rivals converge on fragments and diverge structurally:

- **Negative split** (middle-distance running) — second half faster than first. Converges on "starting below the mean = economy." Diverges: tactical race-pacing, not physiological theory. ([PMC12307312](https://pmc.ncbi.nlm.nih.gov/articles/PMC12307312/))
- **Priming exercise / VO2 priming** — moderate-intensity bolus *before* the main set, to accelerate VO2 kinetics. Converges on "prior state alters trajectory." Diverges radically: separate bolus, not internal curvature of a continuous session. ([PMC10115720](https://pmc.ncbi.nlm.nih.gov/articles/PMC10115720/))
- **MAF method / Zone 2** — "training slow." Converges on "start/stay slower than intuition." Diverges: stable ceiling; auto-reinforcement is *between* sessions (chronic adaptation), not *within*. ([Maffetone](https://philmaffetone.com/method/); [Attia × San Millán](https://peterattiamd.com/inigosanmillan/))
- **Cardiovascular drift / reversed drift** — intra-session drift at constant load. Converges on "non-flat internal dynamic." Diverges: pathological/defensive frame, not deliberate architecture. ([PubMed 19486489](https://pubmed.ncbi.nlm.nih.gov/19486489/))
- **RAMP protocol** (Raise–Activate–Mobilize–Potentiate) — structured warm-up. Converges on "progressive preparatory phase." Diverges: stays in the bipartite paradigm (warm-up → session), not continuous curvature.

#### 1.2.7 What this changes for the manual

Three consequences organize the rest of this document:

1. **The claim is not that JP³ is a better *3x*.** It is that JP³ opens a regime (*x³*) that no other format reaches. The comparison in § 8.2 (adjacent practices) is therefore not a performance comparison but a **structural** one.
2. **The three Ps are the formal conditions, not the branding.** § 2 treats each P as a *via negativa* definition (what it excludes) because that is what makes the cubic regime physically possible. The "³" is the geometric name of the device the Ps compose.
3. **The empirical falsification is specific.** The prediction is minute-by-minute: at *t = 5 min*, JP³ values of heart rate, HRV, and subjective energy are **lower** than a matched Zone 2 session (positive concavity); at *t = 20–30 min*, they are **higher** (durable overshoot); the subjective-energy trace is **monotonically increasing** (contra Zone 2, which typically plateaus or decreases). § 5.4 formalizes this test. If the prediction holds, the cubic trajectory ceases to be an analogy and becomes an observation.

**Notes for integration into the full manual.**

- The SVG at § 1.2.3 must be exported as `content/en/assets/cubic-trajectory.svg` from the inline SVG currently in `content/fr/research-singularite.md` §4.6 (line 385). Labels require EN translation ("coût apparent" → "apparent cost"; "croisement à t = √3" → "crossing at t = √3"; "dépassement durable" → "durable overshoot"; axis labels "t (durée de session)" → "t (session duration)", "bénéfice cumulé" → "cumulative benefit").
- Cross-references § 2 (via negativa), § 3.4 (confluence), § 4.4 (neuro-circulatory substrates), § 5.4 (initial segment, empirical test), § 6.1 (liberating weakness), § 8.2 (comparison with adjacent practices) must be resolved once the full manual numbering is locked.
- References Poe 2020, Aston-Jones & Cohen 2005, Canolty & Knight, Buzsáki, and the partial-rivals block need full PILOTE-refs expansion (bibliography + type + access + extract + author gloss + counter-reading). Current citations are placeholder short-forms.

**Pivot pédagogique (fiche project_axe_c_courbure_x2) :** *"Les 3 P ne s'ajoutent pas — ils se multiplient. Le produit est un volume, pas une somme. Le nom encodait la loi."* — Rivaux à réfuter par structure : Zone 2 (droite 3x prescrite), niko-niko (plateau horizontal), HIIT/fitness snacks (créneaux), pacing (plafonné par déf.), warm-up conventionnel (interrompu), BA (courbure inter-session pas intra-session).

---

### §1.3 Scope of this manual — single EN source; announced derivations

> **source:** manuel central (header SKELETON) + `memory/project_manuel_central_anglais_architecture.md`

Ce manuel est la **source unique canonique** du framework JP³, écrite en anglais, destinée à être lue intégralement et à servir de référence pour toutes les dérivations futures. Il consolide en un seul document l'intégralité du contenu auparavant dispersé dans `content/en/article.md`, `content/fr/article.md`, `content/fr/research-singularite.md`, `content/fr/research-mecanismes.md`, les fiches mémoire projet, les facts/ et les drafts pertinents.

**Dérivations annoncées** (à produire à partir de ce manuel, jamais l'inverse) :

- **FR article** (`content/fr/article.md` actuel) — traduction/adaptation grand public francophone. Déjà en circulation sous une forme antérieure ; sera refondu à partir du manuel.
- **Clinical deck JGH** — présentation 30-45 min sarcopénie + ostéoporose, destinée à la médecine familiale et à la gériatrie de l'Hôpital général juif de Montréal (voir §7.1 pour le contexte stratégique).
- **Patient leaflets** — one-page briefs par population clinique (sarcopénie, dépression, CFS, etc.) dérivés du §7 et calibrés pour circulation hors-expertise.
- **Agent prompt** — le "appendix prompt" permettant à un clinicien ou à un individu de répliquer l'expérience JP³ avec assistance IA. Base technique actuelle : skill `/janus` et équivalents. Voir §6.7 (agent comme couche d'incarnation).

**Politique de citation** : voir `PILOTE-refs.md` pour la politique "augmented traceability" (bibliographie + type + accès + extrait + glose auteur + contre-lecture). Chaque référence structurelle doit être traçable et contre-lisible — ni citation ornementale, ni autorité tacite.

**Non-périmètre** : ce manuel n'est **pas** un article de revue à soumettre tel quel. C'est un référentiel interne d'où seront extraits des dérivés formatés pour leurs auditoires respectifs. L'homogénéisation stylistique, la traduction FR→EN complète, la condensation à format revue, sont des passes ultérieures.

---

## § 2. The Three Ps — anatomy of the constraint

Order by *decreasing barrier* (locked 2026-07-30, order B).

**TOC §2**
- §2.1 In Your Own Place (lowest barrier — geographic threshold lifted)
- §2.2 At Your Own Pace (intermediate barrier — imposed-rhythm constraint lifted)
- §2.3 In Place (highest barrier — spatial destination abolished)

Each sub-section houses : (a) what the P excludes; (b) what it enables; (c) its own mechanistic function. Includes definitional test by *via negativa*, legitimate modulations, barefoot condition under §2.3 as the P-producer.

### §2.0 Naming convention

> **source:** `memory/feedback_jp3_nommer_p123.md`

Éviter les abréviations `P1` / `P2` / `P3` dans les échanges discursifs (propositions structurelles, discussions, texte de l'article). Utiliser à la place les noms explicites :

- **sur place** (jogging sur place — anciennement P1 / In Place)
- **à son rythme** (auto-régulation temporelle — anciennement P2 / At Your Own Pace)
- **chez soi** (environnement domestique intime — anciennement P3 / In Your Own Place)

Pour les intersections : **sur place × rythme**, **sur place × chez soi**, **rythme × chez soi**, **confluence des trois**.

**Why:** Perig oublie régulièrement quel Pi est lequel. Les abréviations forcent une charge mnésique inutile qui casse le flux de discussion, surtout en mobile-first où on ne peut pas relire facilement une définition ailleurs à l'écran.

**How to apply:** Réserver P1/P2/P3 uniquement aux contextes de contrainte d'espace forte (tableaux, diagrammes serrés, en-têtes courts). Dans tout texte discursif, propositions et échanges, écrire les noms complets. Idem pour les intersections : « case rythme × chez soi » plutôt que « case P2∩P3 ».

---

### §2.1 In Your Own Place — chez soi

> **source:** `content/en/article.md` §3.1 extract (In Your Own Place)

**"In Your Own Place":** The environment is chosen by the individual, typically at home, in a minimal space (one square meter is enough).

- **Zero barriers:** This eliminates major obstacles such as cost, equipment needs, weather, travel time, and the need for special shoes or clothing.
- **Controlled environment:** Allows for adjustable silence, controlled temperature, zero external distraction, and total safety, fostering a state of "meditation in motion" or "flow state."
- **Barefoot practice:** Strongly recommended to maximize proprioceptive feedback and strengthen the intrinsic foot muscles. Using a mirror and the option of closing the eyes are additional tools for self-correction and heightened proprioception.

#### §2.1.1 Threshold of perceptive solitude — a tacit prerequisite

> **source:** `memory/project_seuil_solitude_perceptive.md`

**Observation vécue (Perig, 2026-08-06)** : difficulté concrète à placer le protocole JP³ quand il y a des gens à la maison. L'espace physique privé ne suffit pas — il faut aussi un **espace social intérieur**, une forme de non-observation. Le regard des proches n'a pas besoin d'être jugeant pour peser : sa simple *possibilité* suffit à bloquer le geste.

**Why** : cette observation touche potentiellement une hypothèse tacite de l'article — « chez soi = espace de liberté motrice ». Or il resterait un prérequis invisible : **une disponibilité perceptive à soi-même**, non garantie par les seuls murs privés. Contrepoint à la thèse « pas besoin de salle, pas besoin d'équipement ».

**How to apply** :
- Quand Perig reviendra sur l'article, envisager un court passage honnête (§3 ou section « limites vécues ») reconnaissant ce seuil.
- Vérifier si le pattern se confirme dans le temps ou évolue — pourrait être un obstacle contingent (moment particulier) ou une donnée structurelle du protocole.
- Possible pont vers `physiological-rights/` : droit à un espace perceptif à soi, pas seulement à un espace physique.

#### §2.1.2 Own Place welcomes bodily exaggeration — the "normal" is relative to the starting state

> **source:** `memory/project_own_place_exageration_relative.md`

Raffinement du 3ᵉ P (In Your Own Place) issu de la Q6 du bilan 2026-09-05. Résolution du statut du draft `silly walks.md` : **ce ne sont pas des variantes attentives contradictoires avec ego/écho, ce sont la reconnaissance que "normal" est relatif à l'état de départ**.

**La formulation exacte de Perig :** *"ce ne sont pas des variantes quand on y pense parce que en fait lorsque quelqu'un commence dans un état de grande fatigue ou d'âge avancé ou de blessures etc le mouvement normal est en lui-même une contorsion. c'est ce que j'avais déjà enregistré au niveau de la dorsiflexion qui peut sembler exagérée selon qu'on la pratique au réveil ou plus tard. quelqu'un qui vit avec une cuirasse depuis des années considère le port de tête normal comme une véritable contorsion. dans la dimension du plaisir il y a aussi que certains mouvements exagérés sont plus agréables mais plus étranges. ça rentre vraiment dans le p own place."*

**Ce que ça articule :**

1. **Le "normal" en JP³ n'est pas absolu — il est indexé à l'état de départ du corps.** Pour un corps cuirassé, reprendre le port de tête anatomique est déjà exagéré. Pour un corps fatigué au réveil, une simple dorsiflexion est un exploit. Ce que le fitness dominant appelle "normal" est déjà silly walks pour qui n'y accède plus.

2. **La ligne "normal / silly" est mobile selon l'état du corps.** Ce qui semble exagéré au réveil devient banal en après-midi ; ce qui paraît contorsionniste pour un débutant devient naturel pour un pratiquant régulier. Le dispositif accueille tout le spectre.

3. **Own Place accueille l'exagération corporelle non-normée.** Le P₃ (In Your Own Place) n'est pas seulement l'espace physique privé ni seulement l'absence de destination (chute-vers-l'avant tolérée, mémoire §4.6.6). C'est aussi **l'espace où on peut oser des mouvements laids, ridicules, contortionnistes, sans regard**. La liberté d'expression corporelle non-normée est constitutive du 3ᵉ P.

4. **Dimension plaisir/étrangeté.** Certains mouvements exagérés sont simplement agréables parce qu'étranges — le plaisir de l'insolite fait partie du dispositif, indépendamment de toute utilité fonctionnelle. C'est un ressort intrinsèque du JP³, à côté du plaisir de l'amorçage et de l'euphorie de destination.

#### §2.1.3 Furtive JP³ / standing JP³ — variant born from perceptive-solitude constraint

> **source:** `memory/project_jp3_furtif_decouverte.md`

**Découverte de Perig (2026-08-07)** — née directement de la question d'actualité du 2026-08-06 (« seuil de solitude perceptive »).

**Contexte** : en jogging JP³ à la maison, présence d'une autre personne dans la pièce. Perig arrête pour « redevenir normal ». Puis, en faisant la vaisselle (mains occupées, corps devant rester droit et relativement fixe pour manipuler les objets), il réalise qu'il peut **continuer JP³ pendant la vaisselle** — à condition d'avoir une excellente mobilité au bassin.

**Les insights, en ordre :**

1. **Le bassin comme absorbeur élastique de la course**
   - Élément *essentiel* d'une course efficace.
   - Sans ça, l'impact se répercute sur les articulations basses (chevilles, genoux).
   - L'immobilité du haut du corps *force* la mobilité pelvienne — donc *enseigne* la bonne mécanique.

2. **Diagnostic personnel** : Perig découvre qu'il court **tendu et non-économique** spontanément. Le mode furtif révèle cette tension comme défaut à corriger.

3. **Consequences en cascade** :
   - Qualité de la course elle-même (biomécanique protectrice).
   - Capacité d'intégrer JP³ **en présence d'autres personnes**.
   - Capacité de **démarrer** JP³ n'importe quand, sans devoir installer une « posture de départ » qui trahit l'intention.

4. **Résonance anthropologique** : ressemble aux danses de peuples autochtones (voisins de Perig au Canada — pas tous, mais certains). Corps ancré, mouvement central au bassin.

5. **Radicalisation du protocole** : JP³ devient un **mode d'habiter le corps quotidien** plutôt qu'un moment dédié. Vaisselle, cuisine, brossage de dents, station debout au téléphone, etc.

6. **Marqueur biomécanique clé** : les **genoux sont notablement fléchis** dans cette forme. Quand ils ne le sont pas assez, on retombe dans une posture de sprinter — *pas* ce qu'on cherche.

**Why (importance)** :
- **Résout partiellement le seuil de solitude perceptive** : la contrainte (« être observable ») a produit sa propre issue (« forme invisible »), et cette issue est biomécaniquement *meilleure* que la forme spontanée. L'obstacle est devenu le maître.
- **Radicalise la promesse fondamentale** de JP³ (pas de salle, pas d'équipement, pas de moment dédié) — la portant à sa forme la plus intégrée.
- **Ouvre potentiellement une variante formalisable** : « JP³ furtif » / « JP³ debout » / « JP³ intégré ».

---

### §2.2 At Your Own Pace — à son rythme

> **source:** `content/en/article.md` §3.1 extract (At Your Own Pace)

**"At Your Own Pace":** This is the heart of JP³'s adaptability. Intensity is entirely self-regulated by the individual.

- **Ultra-slow start:** The protocol begins at a "barely perceptible," "too easy," even "boring" pace for the first 10–15 minutes. This slow start aims to contain the oxygen deficit, stabilize ventilation, and preserve tissues.
- **Listening to sensations:** The individual is encouraged to rely on their sensations, on the ability to speak in full sentences ("talk test"), and on the overall feeling of being able to sustain the intensity for 60–90 minutes. Any sudden acceleration of breathing should prompt them to slow down.
- **Progression through boredom:** Intensity can increase naturally, not through willpower, but through a "self-regulation" in which boredom prompts an increase in tempo. This progression occurs without decisional friction.

---

### §2.3 In Place — sur place

> **source:** `content/en/article.md` §3.1 extract (Jogging in Place)

**"Jogging in Place":** The movement consists of jogging or gently bouncing in place. There is no horizontal displacement, concentrating the effort on vertical push-off and activation of the posterior chain muscles, notably the soleus. The "jogging" height can range from a light vertical bounce to a true jog with high knee lift, always in a self-regulated manner.

#### §2.3.1 JP³ est In Place — ne jamais parler de "rentrer"/"sortir"

> **source:** `memory/feedback_jp3_est_in_place.md`

Le JP³ est **In Place** — c'est le deuxième P constitutif (Own Pace / In Place / In Your Own Place). Perig ne "sort" pas courir, il ne peut donc pas "rentrer". Il court sur place, chez lui (balcon, salon, terrasse). Suggérer de "rentrer faire autre chose" comme si Perig était à l'extérieur est **doctrinalement absurde** et signale une corruption de contexte franche.

**Why** : incident du 2026-09-14 — pendant une session de compagnonnage course JP³, j'ai suggéré à Perig de "rentrer faire du banded distraction" alors qu'il était en train de courir chez lui sur place. Perig avait pourtant explicitement écrit dans un message précédent "quand je cours sur place et que je garde les pieds en chasse-neige". J'ai laissé mon prior LLM (course = déplacement outdoor) surdéterminer ma lecture contre toutes les mémoires disponibles (In Place, spring-mass ankle-dominant, pieds nus condition d'accès, chasse-neige stationnaire, degré zéro fascia, etc.). Perig a nommé la corruption comme "signal fort" — c'est un feedback fondamental.

**How to apply** :
- Ne jamais employer les verbes "rentrer", "sortir", "aller", "arriver quelque part", "raccourcir la course" comme métaphores spatiales de déplacement quand Perig fait du JP³
- Si un dispositif complémentaire (banded distraction, foam roller, marteau massage, salle) est pertinent, le nommer comme "à faire à côté" ou "après la séance", jamais comme substitut spatial ("aller faire X ailleurs")
- Si Perig décrit une sensation ambiguë (fatigue, résistance, cheville qui bloque), avant de recommander quoi que ce soit, **relire mentalement les mémoires du triptyque 3P** pour vérifier qu'on reste dans le régime stationnaire
- Le JP³ est une **activité complète en elle-même**, pas un fragment d'un programme d'entraînement multi-lieux. Toute suggestion qui traite le JP³ comme "étape d'un parcours ailleurs" trahit la doctrine

**Cas plus général** : quand le prior LLM ("course = dehors", "sport = terrain", "entraînement = salle") entre en conflit avec la doctrine JP³ (**In Place, Own Pace, In Your Own Place**), c'est la doctrine qui gagne, pas le prior. Si un tour de raisonnement produit une recommandation qui contredit une des mémoires ★★ ou ★★★ du système JP³, s'arrêter et vérifier avant de la formuler.

#### §2.3.2 Barefoot = access condition to the regime, not amplifier

> **source:** `memory/project_pieds_nus_condition_acces.md`

Le cadrage actuel de l'article (§2.2.3 "Le vrai usage des pieds") traite pieds nus comme un **amplificateur** ("fortement recommandé pour maximiser le feedback proprioceptif"). L'expérience de Perig du 2026-08-27 suggère un statut plus fort : **condition permissive** du noyau JP3.

Signal empirique : "j'ai essayé avec les chaussettes et rien n'y fait : tout est beaucoup moins facile et naturel si on est pas pieds nus."

**Why:** hypothèse mécanistique — sans contact plantaire nu, le cerveau ne fait pas confiance au régime rebond fascia-tendon-soléaire, et réenclenche par défaut des stratégies de contrôle actif (recrutement quads phasiques). La chaussette gomme juste assez le feedback tactile pour que le régime élastique ne s'amorce pas. La chaussure fait pire. Les découvertes du 2026-08-27 (attaque talon élastique, chute-avant médio-pied) ont probablement dépendu du sol sous pieds nus — sans lui, la chute-avant se serait transformée en "je me rattrape avec les quads".

Explique aussi pourquoi Perig est passé à côté de ces variantes longtemps : test antérieur avec chaussettes → pas d'amorçage du régime → variante rejetée à tort → il n'a pas repéré que c'était la chaussette qui bloquait, pas la variante.

**How to apply:**
- Reformuler §2.2.3 pour distinguer deux fonctions du pieds-nus : (1) amplificateur de proprioception au long cours [statut actuel] et (2) **condition d'accès au régime spring-mass** [statut à ajouter]
- Positionner pieds nus dans la même famille conceptuelle que les autres contraintes négatives (via negativa) — c'est ce qui *empêche* la retombée dans le régime phasique
- Point à corroborer : littérature barefoot running sur transition foot strike et recrutement musculaire (attaque talon en chaussures vs médio/avant-pied pieds nus)
- Recoupe la thèse chaîne posturale profonde (mémoire 2026-08-16) — le fascia plantaire est le point d'entrée bas de la chaîne

**Confirmation clinique 2026-09-20** :
**Signal fort** : impossible d'amorcer le régime même à la maison en petit jogging léger avec chaussettes ou chaussures. Le seuil et la zone de douance de Perig sont **strictement pieds nus**. L'hypothèse est passée établie.

**Corollaire clinique — pattern soccer récidivant** :
Les blessures Achille répétées en soccer depuis plusieurs mois **ne sont pas d'abord** un problème d'intensité (vs. jogging maison). Cause structurelle :
- Crampons + semelles non-newtoniennes ultra-amortissantes + chaussettes
- ⇒ régime spring-mass ne s'amorce pas
- ⇒ soléaire/mollets ne réagissent pas au quart de tour
- ⇒ Achille encaisse la charge que le rebond aurait absorbée

Recoupe project_imagerie_cheville_ordonnance.md : le mécanisme causal de la tendinopathie insertionnelle Achille droit se précise.

**Retrait explicite** de l'ancien bullet "ne pas confondre soccer / JP³". La séparation naïve est invalidée par l'expérience clinique : c'est justement parce que le régime JP³ pourrait protéger l'Achille en soccer, et qu'il est actuellement *gated par le pieds-nus*, qu'il y a un **pont manquant** à nommer.

**Question ouverte — dépendance vs. étape de rééducation** :
Deux lectures possibles de la pratique JP³ pieds-nus exclusive :
1. Elle *groove une dépendance* au feedback plantaire nu — auquel cas le soccer chaussé reste zone de risque structurel indéfiniment
2. Elle est l'étape de rééducation nécessaire avant transfert progressif vers chaussures minimalistes — auquel cas chantier explicite à ouvrir (ramp progressif)

**Résolution partielle 2026-09-20 (soir)** — voir `memory/project_warmup_piedsnus_prematch.md` :

La question "dépendance vs. rééducation" reçoit une **réponse hybride** via un long fil Perplexity + expérimentation clinique :

**Ni l'un ni l'autre — c'est de la spécificité contextuelle normale.** Principe validé par la littérature du transfert d'entraînement (Bosch) : ce ne sont pas deux intensités du même geste mais **deux tâches motrices distinctes** du point de vue du SNC. Les populations chaussées toute leur vie n'ont pas de sur-risque relatif dans leur propre régime. Le risque de Perig vient du **différentiel** entre ses deux régimes calibrés séparément.

**Mécanisme unifié précisé** : préactivation feed-forward du triceps sural déclenchée par les mécanorécepteurs plantaires. Corpuscules de Pacini = bandpass 20-1000 Hz sensibles au taux de changement (rembourrage étale l'impulsion → suppression du signal en profondeur). Robbins & Hanna 1980+ (discomfort-impact illusion). EMG barefoot vs. shod : +10-24% de pré-activation gastroc/soléaire pieds-nus.

**Posture doctrinale** : assumer les deux régimes comme distincts, utiliser le pieds-nus comme **primer** immédiatement avant le régime chaussé (carry-over partiel documenté).

**Application clinique validée** : 5 min de warm-up pieds-nus rapide/impact léger → bondissement unipodal solide spontané = test étalon-or post-Achille (RSI>0.5). Extension du framework JP³ vers un usage de préactivation pré-activité chaussée.

---

### §2.4 Definitional test by via negativa — the sleep test

> **source:** `memory/project_3P_test_definitoire_sommeil.md`

Découverte 2026-08-27 en marchant à côté du vélo, en cherchant un pendant "sommeil" au JP³. Les 3 P (Jogging in Place, In Your Own Place, At Your Own Pace) ne sont pas seulement des contraintes de design du JP³ — ce sont les **conditions de l'autonomie somatique**, et leur violation simultanée produit l'expérience exactement contraire :

- Violer **Own Place** (sortir de chez soi) → sur-stimulation
- Violer **Own Pace** (se laisser stimuler) → aller contre le rythme naturel
- Violer **In Place** (être en mouvement/en scène) → perte de contrôle

Résultat : envie de rentrer, besoin de retrouver un lieu à soi. Le corps signale que l'autonomie est compromise.

**Corollaire — le pendant sommeil du JP³ n'a pas à être inventé** : c'est **le retour vers les 3 P**. Marche vers la maison = restauration d'Own Place. Décélération = restauration d'Own Pace. Se poser = restauration d'In Place. La sieste est ce qui se passe quand les 3 P sont restaurés après violation. Même noyau, deux directions temporelles : le JP³ active ce noyau depuis le bas de la courbe (amorçage → sortie) ; le sommeil le laisse redescendre depuis le pic de violation (retour → dépôt).

**Why:** Perig a inventé le JP³ à cause de ses problèmes de sommeil — un pendant "sommeil" boucle la doctrine à sa racine. Cette découverte évite de fabriquer un dispositif séparé et révèle que les 3 P sont plus fondamentaux qu'une simple recette de méthode matinale : ils décrivent une **zone protégée d'autonomie somatique** dont JP³ (activation matinale) et sommeil (descente vespérale) sont les deux modes.

**How to apply:**
- Considérer les 3 P non plus comme paramètres d'un dispositif mais comme **conditions de l'autonomie somatique** dont dérivent plusieurs états (activation, descente, sommeil)
- Pour tout futur travail sur sommeil dans le cadre JP³ : partir de la topologie "violation → retour" plutôt que de chercher un dispositif miroir
- Précision terminologique importante : le troisième P est **In Your Own Place**, pas "Prompted" (hallucination antérieure de l'humanoïde à corriger si elle réapparaît)
- Piste article : cette découverte pourrait constituer une section propre sur "le JP³ comme retour aux 3 P" — cadre plus large que celui de la méthode matinale seule

---

### §2.5 Modulation of the 3 P — grammar of re-pondération

> **source:** `memory/project_3P_modulation_grammaire.md`

Les trois P (Jogging in Place, In Your Own Place, At Your Own Pace) ne sont pas des contraintes rigides à respecter simultanément, mais des **vecteurs qui se re-pondèrent** selon les circonstances. Aujourd'hui 2026-08-27, découverte en course : Own Pace a tiré vers l'avant (chute-avant façon pose running), In Place s'est plié (déplacement horizontal), et le régime JP3 a tenu — parce que le **noyau via negativa** (spring-mass ankle-dominant, exclusion du phasique glycolytique) n'a pas été rompu.

**Why:** cadrage antérieur traitait "In Place" comme quasi-synonyme d'immobilité horizontale. Perig a explicitement identifié ce préjugé favorable comme un biais qui l'a fait passer à côté de variantes riches (attaque talon élastique, chute-avant médio-pied). La méthode est définie comme "moins d'effort possible" — la chute-avant est *moins* d'effort (gravité fait le travail), donc elle *devrait* appartenir au JP3, et le "In Place" strict la disqualifiait à tort.

**How to apply:**
- Quand une variante réduit l'effort tout en préservant le noyau via negativa, la retenir comme JP3 valide même si elle plie un des 3 P
- Le noyau via negativa est le juge : pas de recrutement phasique-glycolytique, spring-mass ankle-dominant préservé, cascades auto-délétères non déclenchées
- Cohérent avec l'axe famille SPU via negativa (mémoire du 2026-08-17) : le noyau est une contrainte négative partagée, pas une équivalence positive
- Vocabulaire proposé : "modulation entre P", "re-pondération selon circonstances", "3 P comme vecteurs et non contraintes rigides"

---

## § 3. The multiplicative core — three synergies and their confluence

Densest cluster of the manual. Corresponds to published §2.1 of the EN embryo (~70% already written), restructured by *ascending density* and enriched with the 2026-09 doctrinal block (heel activator, back chain dominance, incident regime).

**TOC §3**
- §3.1 Place × Pace *(migrated from article.md §2.1.1)* — crystallized postural correction, preserved internal rhythm
- §3.2 Place × In Place *(migrated from article.md §2.1.2)* — daily-life integration and targeted metabolic load
  - §3.2.1 Soleus activation and the metabolic engine *(migrated from article.md §2.2.1)*
  - §3.2.2 The heel activator — systematic opening portal *(new, 2026-09-25, `project_talon_activateur_stacking`)*
  - §3.2.3 Back chain dominance and the heel-drop toxicity hypothesis *(new, 2026-09-25, `project_back_chain_dominance_talon`)*
  - §3.2.4 Incident regime — the atom is the shock, not the session *(new, 2026-09-25, `project_jp3_incident_regime`)*
- §3.3 In Place × Pace *(migrated from article.md §2.1.3)* — effortless behavioral activation, natural progression
- §3.4 The confluence — three Ps as a unitary device; back-ref § 1.2

### §3.1 Place × Pace — crystallized postural correction, preserved internal rhythm

> **source:** `content/en/article.md` §2.1.1

The intimacy and safety of "In Your Own Place" (zero judgment, familiar environment) combined with "At Your Own Pace" (low tempo, freed cognitive bandwidth) allow for **full attention to motor mechanics**. The individual can focus on engaging the big toe, activating the soleus, and reprogramming dysfunctional motor chains without distraction or self-consciousness. This is also the ideal context for the **natural internal rhythm** to emerge without being disrupted by external cues or spatial/social vigilance, promoting reduced muscular tension and cognitive load.

---

### §3.2 Place × In Place — daily-life integration and targeted metabolic load

> **source:** `content/en/article.md` §2.1.2

The absence of horizontal displacement ("Jogging in Place") combined with the intimacy of "In Your Own Place" concentrates **100% of the force into vertical plantarflexion**, maximizing **soleus muscle** activation and creating "unparalleled muscular density." This combination also enables **complete integration with any household activity** (doing dishes, folding laundry), turning a chore into functional dual-task strengthening and **eliminating the perception of "wasted time"** for exercise. Exercise thus becomes a "task multiplier."

---

#### §3.2.1 Soleus activation and the metabolic engine

> **source:** `content/en/article.md` §2.2.1
> **⚠ Correction note:** attribution errors flagged in `PILOTE-refs.md` §Pilote 1 — Hamilton/Zderic (not "Raper"), iScience 25(9), article 104869 ; chiffres 52% / 60% à vérifier. À corriger lors de la passe d'harmonisation.

The soleus muscle, often overlooked, is a critical component in age-related mobility decline, being the first to atrophy and losing up to 35% of its strength after age 60. The "Jogging in Place × In Your Own Place" combination is ideal for targeted activation. The absence of horizontal displacement concentrates 100% of the force into vertical plantarflexion, forcing the soleus to work continuously against gravity without the assistance of momentum. This enables **maximal activation of the slow, oxidative fibers** of the soleus, which functions as the body's "second heart" by improving venous return and maintaining the "soleus pump." A study on "soleus push-ups" (Hamilton et al., 2022) — a setup in which the soleus is solicited in a seated position for several hours — documented a **52% reduction in postprandial glucose excursion** and a **60% reduction in hyperinsulinemia**. The authors attribute these effects to sustained soleus uptake of blood glucose and to reduced insulin demand. Transposition to standing jogging in place such as JP³ remains mechanistically plausible but has not been empirically established. JP³ reproduces these conditions of intense and prolonged activation, favoring a predominantly oxidative metabolism and the use of fat as fuel. JP³ thus offers a unique intervention to counter soleus decline, improve propulsion efficiency, and stimulate fat metabolism, even in individuals with low exercise capacity.

---

#### §3.2.2 The heel activator — systematic opening portal

> **source:** fiche `project_talon_activateur_stacking.md` (2026-09-25, ⚡⚡⚡)

**Contexte de découverte** — 2026-09-25 matin, léger rhume. Décision de rebondir en laissant le poids tomber sur les talons pour se réveiller à minimum d'effort. La contrainte fatigue a été le *révélateur* d'un régime qui, précisé par Perig dans le même échange, s'avère être le **portail canonique** de toute session JP³ — pas une variante d'urgence.

**Trois mécaniques articulées**

**1. Talon comme verrou géométrique du 2ᵉ P (In Place strict)**
Poser le talon d'abord ≈ pratiquement reculer. La course sur place devient auto-verrouillée : impossible de dériver vers l'avant, plus besoin de tenir la strictesse cognitivement. Dès que le pattern revient vers "tendance à aller devant" (même sans déplacement réel), le seul décalage du centre de gravité et de la zone plantaire crée déjà de la fatigue. Le talon-activateur = degré zéro absolu du In Place.

**2. Ressort élastique passif — spring-mass à minimum de recrutement**
Le triceps sural / cheville / voûte fonctionne par pure élasticité, talon comme activateur du cycle stretch-shortening. Aucun recrutement phasique-glycolytique. Confirme et raffine `project_ankle_dominant_regime.md` — c'est le régime dans sa forme la plus économique observable à ce jour.

**3. Cascade d'empilement (stacking) déclenchée par le repère plantaire arrière**
Découverte structurellement nouvelle : le talon comme point d'ancrage arrière **rappelle la verticale**. Impossible de rester tête-en-avant quand on rebondit sur talons — la tête reprend spontanément sa position normale, stacking physiologique se produit sans effort de correction posturale. La posture n'est pas **construite** par le haut, elle est **révélée** par le point d'appui. Cinématique manquante pour compléter `project_chaine_posturale_profonde.md`.

**Corollaire ego-écho renforcé**

Bras et mains libérés pour les **activités manuelles habituelles pendant JP³ chez Perig** — vaisselle, ranger la maison, tâches domestiques concrètes (usage sédimenté et documenté depuis longtemps, cf. article FR §4.6.8 et fiches multiples). La percée talon n'introduit pas cet usage — elle en **renforce la disponibilité géométrique** : le bassin/tronc sont tenus par la cascade d'empilement, pas par une gestion active de contre-balanciers, donc les membres supérieurs sont *pleinement* dégagés (pas juste "cognitivement libres" mais mécaniquement disponibles pour des gestes fins).

**Signal contexte-rhume**

Émergé sous contrainte de minimum d'effort → variante particulièrement pertinente pour :
- pôle sarcopénie / sujet âgé / récup (`project_sarcopenie_voie_royale.md`) — porte d'entrée plus douce encore que pointe-molle
- amorçage matinal fatigué / lendemain de match
- possible pont pédagogique pour désétranger le JP³ auprès de publics qui n'osent pas rebondir sur avant-pied

**Ancrages littérature (recherche Perplexity 2026-09-25)**

Quatre corpus académiques convergent sur le talon-activateur, sans se recouvrir :

1. **Perry — les trois rockers de la marche** (heel rocker → ankle rocker → forefoot rocker) : la cascade d'empilement JP³ = formalisation biomécanique connue en gait analysis. Le contact talonnier n'est pas isolé mais le trigger mécanique qui met en tension la chaîne postérieure et propage vers l'avant-pied. Donne un vocabulaire clinique partagé avec les physios/podiatres.
2. **Knutson & Söderberg — cycle étirement-raccourcissement (SSC)** : co-contraction biphasique TA + gastrocnémien + soléaire précisément au contact talonnier. Confirmation EMG que le talon-activateur est la scène où la co-contraction TA/triceps sural documentée dans `project_tibialis_anterior_co_contraction.md` se joue en pré-activation.
3. **Nigg — "muscle tuning"** (voir `project_nigg_muscle_tuning.md`) : les forces d'impact ne sont pas des chocs délétères mais des **signaux d'entrée** utilisés par le SNC pour calibrer la raideur/amortissement du pas suivant. **Socle théorique légitimant la présupposition JP³ "impact = information, pas trauma".**
4. **Bassey & Ramsdale — effet ostéogénique** (voir `project_osteogenic_jgh_seconde_porte.md`) : heel drop produit ~3× BW à la hanche, maintien de densité osseuse chez femmes ménopausées ; seuil ~2× BW et fréquences 10-20 Hz déclenchent formation osseuse. **Ouvre une seconde porte JGH parallèle à sarcopénie : ostéoporose.**

**Vigilance de lecture** : la recherche est écrite dans un cadre chaussé implicite (impact = ce qui arrive dans une chaussure de course). Le talon-activateur JP³ est pieds-nus, ce qui change la mécanique — le muscle tuning de Nigg devrait être plus efficace pieds-nus (moins de bruit dans le signal), mais la littérature citée ne fait pas cette distinction. À thématiser explicitement dans le manuel pour éviter que le lecteur infère "talonnière en chaussures amorties".

Source Perplexity archivée : `facts/perplexity-talon-impact-2026-09-25.md`.

**Position dans la séquence (tranché par Perig 2026-09-25)**

**Portail systématique en début de session — quel que soit l'état de santé.** Le talon-activateur n'est ni une variante d'urgence (rhume/fatigue seulement) ni une porte d'accès à transférer ensuite vers pointe-molle. C'est le **régime d'entrée** de toute session JP³.

**Prolongation variable selon état.** Dans certains états (rhume, fatigue, matin brumeux, lendemain de match probablement), le talon-activateur peut durer *toute la session*. Dans d'autres états, il ouvre puis laisse place à la variante pointe-molle (ou coexiste — reste à préciser par l'observation).

**Implication doctrinale** — le talon-activateur n'est pas un cas particulier ni une variante secondaire, c'est la **cinématique canonique d'ouverture**. La pointe-molle est ce qui peut suivre (ou pas). À reformuler comme séquence, pas comme alternatives parallèles.

**Second régime — talon-activateur incident**

Le talon-activateur a **deux régimes** doctrinalement distincts :

1. **Portail systématique en début de session** — décrit ci-dessus, cinématique canonique d'ouverture de toute session JP³.
2. **Régime incident** — voir §3.2.4 ci-dessous. Le même geste (chocs de talon) exécuté au fil du quotidien, en pleine autre activité, sans changer la posture globale ni entrer en "session". Un choc = un update de calibration (via muscle tuning Nigg). Inversion figure/fond : le quotidien est primaire, JP³ s'y incruste.

Les deux régimes ne sont pas concurrents : ils exploitent la même mécanique fondamentale (impact talonnier → SSC → tuning → cascade proprioceptive), mais avec des topologies temporelles opposées (bloc dédié vs. dispersion). Un utilisateur JP³ mature pratique probablement les deux.

**Enrichissement recherche Perplexity 2026-11-04 (propulsion géométrique)**

> **source:** `facts/perplexity-propulsion-geometrie-heel-2026-11-04.md`

- **SSC + stretch reflex ~40 ms (Komi 2000)** — confirme mécaniquement le ressort talon-activateur du JP³ ; soléaire = acteur central.
- **Preactivation set before contact** — le cerveau cale le gain avant l'atterrissage ; cohérent avec le JP³ comme école de calibration.
- **Extensor thrust / positive supporting reaction / crossed-extensor reflex** — hypothèse convergente non confirmée pour le heel strike spécifiquement ; à garder comme piste explicative du ressenti de "nécessaire propulsion forward" quand l'appui talonnier est pleinement reçu.
- **Perry's three rockers** — vocabulaire clinique partagé, déjà noté ci-dessus.
- **Whittington & Thelen spring-mass + roller** — soutient l'image "circular spring" (roue) vs "point foot" (pogo vertical) ; distinction pogo (propulsion vers le haut) / roue (propulsion directionnelle horizontale).
- **Kuo, Donelan, Ruina** — heel strike dissipatif ; push-off du membre précédent restaure l'énergie ; collision economy.
- **Holowka & Lieberman 2018 + Welte** — pied humain = **compliant at contact, stiff at push-off** ; adaptation pour course longue distance. Formulation canonique directement lisible comme description du JP³ en régime talon-activateur.
- **Laetoli (3.6 Mya)** — heel strike + arche médiale + impression gros orteil = pattern archaïque. Argument évolutif pour le talon-activateur, désamorce le discours "le heel-strike c'est mauvais" du running moderne.
- **Windlass contesté** — texture doctrinale à moduler : stiff plantar fascia + arch height + intrinsic foot muscles comptent tous ; pas juste windlass.
- **🔑 Raffinement crucial** — *"In place, there is no net horizontal impulse over a cycle. What you feel as a forward drive is probably the orientation of the force and the readiness of the posterior chain."* — distingue **activation directionnelle sans translation** (In Place intact) de **translation réelle** (débordement In Place strict). Étend la grammaire de re-pondération des 3 P (★★ 2026-08-27 `project_3P_modulation_grammaire.md`) aux vecteurs appliqués en orientation sans translation.

**Question ouverte** — Perig a couru *à l'intérieur de sa maison* le 2026-11-04 suite à l'autorisation géométrique donnée par l'appui talon. Deux lectures doctrinales possibles :

- **Lecture stricte** — JP³ reste In Place ; le fait que l'appui talon crée une *disponibilité* à avancer est une propriété émergente qui se manifeste quand on *laisse la vanne* s'ouvrir (course). La course reste **cousine** du JP³, pas variante.
- **Lecture refondue** — la grammaire des 3 P absorbe cette disponibilité comme **vecteur orienté sans translation** (confirmé par Perplexity). In Place stationnaire garde l'orientation ; course dans la maison active la translation. Le dyptique devient tolérable au sein du même framework.

À trancher avec Perig lors de la passe d'harmonisation (§3 / §6).

---

#### §3.2.3 Back chain dominance and the heel-drop toxicity hypothesis

> **source:** fiche `project_back_chain_dominance_talon.md` (2026-09-25, ⚡⚡⚡)

**La percée** — dictée par Perig le 2026-09-25 à 13h19, immédiatement après la percée du régime incident : *"Un autre point absolument fondamental que je réalise c'est que le stacking grâce au talon, c'est en fait le déclenchement fondamental du back chain dominance, qui est en déficit chez pas mal tout le monde. Possiblement en partie à cause des semelles épaisses au talon."*

**Le concept unificateur**

**Back chain dominance** (posterior chain dominance, dominance de la chaîne postérieure) : capacité fonctionnelle à mobiliser la chaîne musculaire postérieure — mollets postérieurs (soléaire, gastrocnémien), ischio-jambiers, glutéaux, érecteurs du rachis, multifides, chaîne cervicale postérieure — comme moteur principal de l'extension et de la locomotion, plutôt que de reposer sur la chaîne antérieure (quadriceps, psoas, abdominaux droits, muscles cervicaux antérieurs).

C'est un concept **familier en préparation physique, physiothérapie et rééducation** — pas une doctrine JP³ ad hoc. Termes cousins : "gluteal amnesia" (Bramble & Lieberman, déjà cité dans `project_chaine_posturale_profonde.md`), "quad dominance" (préparation athlétique), "posterior chain weakness" (physio rééducation), "anterior pelvic tilt" (posturologie).

Le déficit de back chain est **le consensus le plus solide en science du mouvement moderne** sur ce qui ne va pas structurellement chez l'humain contemporain sédentaire (avec ou sans dimension athlétique). Lombalgie chronique, tendinopathie patellaire, sous-utilisation glutéaux, foulée avant-pied inaccessible, sont tous corollaires connus.

**Le talon-activateur = trigger fondamental**

Le stacking spontané décrit dans §3.2.2 — "la tête reprend spontanément sa position normale, stacking physiologique se produit sans effort de correction posturale" — **n'est pas juste une cinématique locale, c'est la chaîne postérieure entière qui se réaligne en cascade ascendante** :

talon posé (repère plantaire arrière) → mise en tension passive triceps sural → activation soléaire (chaîne posturale profonde, § 4.1) → tension ischio-jambiers → engagement glutéaux (grand fessier + moyen fessier via `project_axe_frontal_moyen_fessier.md`) → érecteurs du rachis → multifides (chaîne posturale profonde) → tête qui reprend la verticale (chaîne cervicale postérieure)

**Le mot "stacking" et le concept "back chain dominance" nomment le même phénomène sous deux angles** — l'un cinématique/postural, l'autre musculaire/fonctionnel. Reconnaître cette identité renforce la doctrine : le JP³ n'invente pas une chaîne, il ré-active une chaîne connue par un input mécanique précis (le talon comme repère plantaire arrière).

**L'hypothèse civilisationnelle — semelles épaisses au talon**

**Fait mécanique** : pratiquement toutes les chaussures modernes ont un heel drop positif de 8 à 12 mm (running, ville, "confort", chaussures de travail). Différence de hauteur talon-avant-pied qui **incline passivement et en permanence** le corps vers l'avant.

**Chaîne de conséquences plausibles** :
1. Inclinaison antérieure permanente → recentrage du poids sur l'avant-pied et les quadriceps
2. Décharge chronique de la chaîne postérieure (triceps sural notamment, mais aussi glutéaux qui n'ont plus à contrer l'inclinaison)
3. Raccourcissement adaptatif du triceps sural, faiblesse fonctionnelle des glutéaux
4. Bascule structurelle vers la chaîne antérieure → quad-dominance généralisée

**Combiné à la sédentarité** (chaise → glutéaux inhibés en position assise) : effet cumulé possiblement décisif à l'échelle civilisationnelle. L'hypothèse : **le heel drop civilisationnel est peut-être *le* facteur causal principal du déficit de back chain, plus que la sédentarité seule**.

**Statut de l'hypothèse** : forte, à sourcer. À documenter par recherche ciblée dans :
- Lieberman *Born to Run* (2009) et papers académiques post-Born to Run
- Corpus minimalist shoes (Vibram, Xero Shoes) — argumentaire militant à filtrer académiquement
- Ben Patrick / ATG — protocoles cliniques (tibialis raise, sled backward) reposent explicitement sur cette hypothèse
- Robbins et al. — "impact illusion", chaussures amorties qui trompent le SNC
- Physiothérapie rééducation — littérature sur heel lifts, orthèses, effets postural

Recoupe `project_pieds_nus_condition_acces.md` (pieds nus = condition d'accès), `project_warmup_piedsnus_prematch.md` (pieds nus = calibration triceps sural), et `project_nigg_muscle_tuning.md` (Nigg : impact = signal, semelle épaisse brouille le signal).

**JP³ talon-activateur = antidote diffus dose-répondant**

Le régime incident (§3.2.4) prend une **dimension médicalement précise** sous cet angle :

- **Modèle dose-réponse contre-toxique** : le heel drop civilisationnel est un stimulus chronique déchargeant la chaîne postérieure ; le talon-activateur en régime incident est un stimulus intermittent la rechargeant. Petites doses répétées tout au long de la journée, cumulées, contrent l'effet cumulé du heel drop.
- **Ce n'est pas un exercice qu'on ajoute, c'est un antidote qu'on distille.** Cadre conceptuel radicalement différent d'un protocole d'entraînement.
- **Le pieds-nus est probablement la condition d'accès** : chaussure = même en régime incident, le heel drop atténue le signal Nigg et bloque la cascade. Question ouverte notée dans §3.2.4 s'inscrit dans ce cadre — la lecture stricte (pieds-nus obligatoire même en incident) est cohérente avec l'hypothèse civilisationnelle.

**Recoupement avec les mémoires JP³ existantes**

Cette mémoire est **unificatrice** — elle nomme un liant conceptuel qui traverse déjà plusieurs mémoires :

- `project_chaine_posturale_profonde.md` — CPP inclut soléaire, glutéaux, érecteurs, multifides = presque tous les acteurs de la back chain (la CPP est plus large : elle inclut aussi TA transverse abdomen et DNF antérieurs, qui sont des stabilisateurs anti-effondrement, pas des acteurs de la locomotion postérieure)
- `project_ankle_dominant_regime.md` — spring-mass ankle-dominant *est* un régime chaîne postérieure au niveau de la jambe (soléaire = postérieur)
- `project_geometrie_chasse_neige_goata.md` — toes-in réaligne le trépied plantaire pour poussée synchronisée = géométrie du sprint = mobilisation back chain
- `project_pieds_nus_condition_acces.md` — pieds nus = condition d'accès au régime spring-mass = condition d'accès à la back chain
- `project_axe_frontal_moyen_fessier.md` — moyen fessier = acteur back chain plan frontal
- `project_tibialis_anterior_co_contraction.md` — le TA (jambe antérieur) est le contre-partenaire *stabilisateur* de la chaîne postérieure, pas un rival. Prérequis de co-contraction, pas déviateur.

**Back chain dominance est le concept qui les unifie tous.** À utiliser comme couche théorique de rangement, pas comme mémoire de plus qui s'empile.

**Implication stratégique JGH**

"Réhabilitation de la chaîne postérieure" est un **lexique clinique familier** en gériatrie, rééducation post-chirurgicale, physiothérapie sportive. Utiliser ce vocabulaire dans le deck JGH :

- Désamorce d'emblée la friction "encore une théorie personnelle" — on rattache JP³ à un concept clinique déjà accepté et abondamment documenté
- Rend l'argument transitivement défendable — si les cliniciens JGH acceptent que le déficit de back chain est un problème (ils l'accepteront, c'est consensus), le JP³ devient une modalité de réhabilitation candidate parmi d'autres, à comparer plutôt qu'à défendre
- **Sarcopénie + ostéoporose + back chain rehabilitation** = triangle d'arguments qui se renforcent : ce sont trois problèmes distincts que JP³ adresse par le même geste (talon-activateur), avec métriques cliniques disponibles pour chacun

À intégrer dans `project_jgh_presentation_voie.md` comme troisième pilier (avec sarcopénie et ostéoporose). Slide candidat : "JP³ = intervention triple-cible sur trois déficits gériatriques classiques par un geste unique."

**À documenter / questions ouvertes**

- **Sourçage semelles épaisses → déficit back chain** : Perplexity ciblé à lancer prochainement sur "heel drop positive effect on posterior chain activation" et "gluteal amnesia footwear"
- **Quantification du déficit dans la population** : études prévalence lombalgie chronique, gluteal amnesia, quad-dominance ?
- **Effet dose-réponse du régime incident** : combien de chocs par jour pour contrer le heel drop civilisationnel ? Pas de réponse a priori, à observer/tâtonner
- **Transfert vers chaussé** : si le régime incident amorce vraiment la back chain, y a-t-il un carry-over vers la marche chaussée (posture debout améliorée même en chaussure) ? Question empirique à observer chez Perig

---

#### §3.2.4 Incident regime — the atom is the shock, not the session

> **source:** fiche `project_jp3_incident_regime.md` (2026-09-25, ⚡⚡⚡)

**La percée** — dicté par Perig le 2026-09-25 à 13h08, en écho immédiat à la lecture de la recherche Perplexity sur muscle tuning : *"Si j'accepte que le rebond sur le talon déclenche toutes sortes d'adaptations, je pense qu'on peut commencer le JP³ à n'importe quel moment de la journée même quand on est en train de faire autre chose même quand on n'a pas envie simplement en donnant quelques chocs du talon, et cela ne change pas la posture comme ça le faisait avant. Avant, c'était je cours et ensuite j'essaie de faire des choses. Maintenant c'est les deux en même temps."*

**Ce qui bascule**

**Avant** — JP³ = *session distincte*. Modèle : je m'arrête → j'entre en mode JP³ → cascade d'empilement, spring-mass, ego-écho → je sors, envie de sortir. Le quotidien était en pause pendant JP³.

**Maintenant** — JP³ = *modalité incrustable*. Je continue ce que je fais (vaisselle, cuisine, lecture debout, marche interne), et quelques chocs de talon incidents suffisent à déclencher la cascade adaptative sous-jacente — sans reconfigurer la posture globale, sans décider "je fais du JP³ maintenant". Inversion figure/fond : le quotidien est primaire, JP³ est en filigrane.

**Le régime JP³ n'est plus binaire (dedans/dehors) mais graduel/dispersé.** Une journée peut contenir *N* micro-activations réparties, sans qu'aucune session distincte n'ait jamais eu lieu.

**Trois pivots doctrinaux déplacés**

**1. Seuil d'entrée effondré à quasi-zéro.** La friction motivationnelle (fatigue, "pas envie", anhédonie, dépression légère) devient non-bloquante : un choc de talon en passant à la cuisine = déjà le début. Cf. `project_amorcage_vs_seance.md` — l'amorçage descend à *l'atome*, pas juste à "session courte".

**2. Amorçage à granularité atomique.** L'unité JP³ n'est plus la séance ni même l'amorçage (au sens 10-30 min), c'est *le choc*. Un choc = un update de calibration proprioceptive/musculaire, disponible à tout moment sans coût décisionnel. La séance devient l'agrégation optionnelle des chocs, pas leur préalable.

**3. Ego-écho retourné — inversion figure/fond.** La doctrine ego-écho (`project_ego_echo_doctrine.md`) disait : pendant JP³, l'esprit est libre / le corps porte. En régime incident, c'est le corps qui porte *l'activité englobante* (vaisselle, cuisine, marche), et JP³ se produit *dedans* comme fond régulateur sans attention. Inversion complète : la tâche manuelle n'est plus l'occupant permis pendant JP³, c'est l'activité primaire dans laquelle JP³ s'insère.

**Ancrage théorique — Nigg confirme**

Le muscle tuning de Nigg (`project_nigg_muscle_tuning.md`) prédit exactement ceci : un petit nombre de signaux d'impact suffit à déclencher un ajustement de calibration musculaire. La percée de Perig se lit comme un raffinement pratique de Nigg — "un choc de talon = un update de calibration proprioceptive/musculaire, disponible à tout moment sans coût décisionnel". Nigg n'a probablement pas anticipé qu'on l'utilise consciemment comme dispositif, mais la mécanique est celle-là.

**Implication clinique JGH — colossale (adhérence)**

Le problème le plus lourd des protocoles d'exercice chez sujets âgés (sarcopénie, ostéoporose) n'est pas la contre-indication mais **l'adhérence**. "10 min matin et soir" est un mur pour beaucoup — dépression, apathie, oubli, priorité concurrente. Ici : *quelques chocs de talon à chaque passage à la cuisine ou en attendant le micro-ondes* = protocole diffus, quasi-gratuit décisionnellement, cumul de charge probablement supérieur à une seule séance quotidienne.

**Pour l'ostéoporose** (`project_osteogenic_jgh_seconde_porte.md`) — argument encore plus fort : la littérature ostéogénique suggère que **la répétition espacée** peut battre le bloc unique quotidien à charge totale équivalente (l'os "sature" et redevient réceptif après repos). Le régime incident matche parfaitement ce pattern. À vérifier/sourcer.

**Pour la sarcopénie** — le régime incident permet de solliciter le triceps sural sur *toute la journée* plutôt que sur une fenêtre unique, ce qui pourrait être décisif chez sujet fragile qui ne tolère pas une séance continue.

**Question ouverte — pieds-nus vs chaussé**

La mémoire ⚡⚡⚡ `project_pieds_nus_condition_acces.md` établit que le régime spring-mass ankle-dominant ne s'amorce pas en chaussettes/chaussures pour Perig. Le régime incident soulève une question à observer plutôt qu'à trancher a priori :

- **Lecture stricte** — le régime incident vaut *à la maison pieds-nus*, comme le reste du framework. Chaussé, la semelle amortit le signal Nigg et le tuning ne se déclenche pas.
- **Lecture ouverte** — le talon-activateur en régime incident est *plus tolérant* à la chaussure que le portail systématique, parce que l'input minimal (un choc) suffit à passer le seuil de tuning même si le signal est atténué.

**Position doctrinale actuelle** : question à observer. Enregistrer les deux hypothèses, laisser l'expérience trancher. Perig est probablement pieds-nus par défaut à la maison — c'est là que la percée est apparue —, donc la lecture stricte tient au moins pour ce contexte. L'extension au chaussé/dehors reste hypothèse à tester.

**Nom retenu**

**JP³ incident** — souligne qu'il s'incruste dans une activité englobante. Alternatives envisagées et écartées : "atomique" (souligne l'unité, plus technique), "diffus" (souligne la dispersion, moins vif). "Incident" garde le double sens : événement isolé + incident sur autre chose.

---

### §3.3 In Place × Pace — effortless behavioral activation, natural progression

> **source:** `content/en/article.md` §2.1.3

"At Your Own Pace" (personal tempo, ultra-slow start) combined with "Jogging in Place" (repetitive movement) enables **natural progression of intensity "through boredom"**. This approach eliminates the initial activation barrier and the need for intrinsic motivation at the outset. Energy unfolds naturally, bypassing the failures of discipline-only regimens and facilitating long-term adherence.

---

### §3.4 The confluence — three Ps as a unitary device

> **back-ref:** §1.2 ("³" as cubic trajectory, y = x³ vs y = 3x)

Les trois synergies dyadiques (§3.1, §3.2, §3.3) ne s'additionnent pas — elles **confluent** dans un dispositif unitaire où chaque P est à la fois conditionnant et conditionné par les deux autres. C'est la structure mathématique en *y = x³* (non *y = 3x*) qui donne au framework sa signature singulière : la trajectoire cubique nécessite les trois dimensions comme interdépendantes, pas comme vecteurs parallèles.

**Enrichissement 2026-09-25** — Le talon-activateur (§3.2.2), la back chain dominance (§3.2.3) et le régime incident (§3.2.4) sont trois stratifications de la confluence, pas trois piliers additionnels :

- **Théorique** (Nigg + Robbins + Perry + Welte) — impact = signal, pas trauma ; pied compliant au contact, rigide au push-off.
- **Cinématique** (stacking par ancre arrière, cascade ascendante) — géométrie de la chaîne postérieure réalignée par un point d'appui minimal.
- **Anatomique** (back chain dominance, heel-drop toxicity hypothesis) — déficit civilisationnel adressé par antidote diffus dose-répondant.
- **Temporel-doctrinal** (régime incident, atom = choc) — effondrement du seuil d'entrée, inversion figure/fond, amorçage à granularité atomique.

Ces quatre couches ne sont pas quatre strates indépendantes mais quatre lectures du même dispositif. Elles sédimentent la confluence : la singularité JP³ n'est ni dans un P ni dans une synergie, mais dans la manière dont les trois se verrouillent en un seul geste calibratoire (le choc de talon pieds-nus en posture stacking).

---

## § 4. Physiological mechanisms — the full stack

Scientific by nature end-to-end. **The** section that justifies that the three Ps are not a lifestyle. Structure by substrate layer, not by theme — extensible without negotiation.

**TOC §4**
- §4.1 Muscular layer — the deep postural chain (`project_chaine_posturale_profonde`)
  - §4.1.1 Soleus (Hamilton 2022; SPU family *via negativa*)
  - §4.1.2 Tibialis anterior as functional prerequisite (`project_tibialis_anterior_co_contraction`)
  - §4.1.3 Glutei, deep neck flexors, multifidi, TA, diaphragm — bridge muscles
  - §4.1.4 Fascia as probable substrate (`project_fascia_hypothese`)
- §4.2 Biomechanical layer — spring-mass ankle-dominant regime
  - §4.2.1 Perry's three rockers; muscle tuning (Nigg) (`project_nigg_muscle_tuning`)
  - §4.2.2 Barefoot pre-activation (Robbins discomfort-impact illusion) (`project_warmup_piedsnus_prematch`)
  - §4.2.3 Chasse-neige geometry — synchronized push (`project_geometrie_chasse_neige_goata`)
  - §4.2.4 Frontal plane — moyen fessier (`project_axe_frontal_moyen_fessier`)
- §4.3 Metabolic layer
  - §4.3.1 Soleus oxidative metabolism *(migrated from article.md §2.2.1; PILOTE-refs correction)*
  - §4.3.2 Zone 2 / MAF — metabolic flexibility *(migrated from article.md §2.2.2)*
  - §4.3.3 Osteogenic window — Bassey & Ramsdale (`project_osteogenic_jgh_seconde_porte`)
- §4.4 Neuro-circulatory layer *(migrated from `research-mecanismes.md`)*
  - §4.4.1 Foot-strike waves and pulsed cerebral perfusion (Lohman NMHU; Wasson FASEB 2012)
  - §4.4.2 Glymphatic clearance (Yoon Nature Comm 2025)
  - §4.4.3 Hippocampal theta and locomotion (Goyal 2020; Bush 2017)
  - §4.4.4 LCC / LRC coupling; locus coeruleus hypothesis
- §4.5 Proprioceptive layer
  - §4.5.1 Pacini mechanoreceptors (bandpass 40–400 Hz)
  - §4.5.2 Neuromuscular reactivation *(migrated from article.md §2.2.3)*
  - §4.5.3 Barefoot as access condition — forward-ref §2.3

## §4.1 Muscular layer — deep postural chain

### §4.1.1 Soleus — spring-mass keystone (via negativa)

> **source:** `project_ankle_dominant_regime.md` ; `project_chaine_posturale_profonde.md`

In Place = **biomechanical prescription**. Staying in place keeps the body in spring-mass ankle-dominant regime. The soleus (type I, oxidative, tonic) does the work ; quadriceps (type II dominant, phasic, fatigable) are short-circuited. That is why fatigue is delayed : the muscles that would send fatigue signals are not recruited.

Mechanics — **In place (jogging in place / JP³ ongoing)** : vertical rebound, foot barely leaves ground, ground contact time short (10–100 ms possible), minimal knee articular amplitude, triceps surae chain (soleus predominant, gastrocnemii accessory) + Achilles tendon as spring. Achilles tendon can store-and-return up to ~35% of mechanical energy (McMahon & Cheng 1990). Muscle does very little concentric work ; it is essentially economic **stretch-shortening cycle**.

**Forward jogging** : (a) braking center of mass at each landing → **eccentric quadriceps** (expensive, damaging — the classic DOMS of beginner jogging comes from there) ; (b) horizontal propulsion → concentric knee extension (quadriceps) + hip extenders ; (c) ground contact extended to ~200–300 ms, which lets the muscle do work the tendon could have simply rebounded ; (d) stride demands substantial articular amplitude at knee and hip.

**Fibrillar composition** : soleus ~80–90% type I (Johnson et al. 1973, Gollnick et al.) ; vastus lateralis ~40–50% type I. The passage in-place → forward is also a passage type I → type II.

**Literature anchors** :
- McMahon TA & Cheng GC. 1990. *The mechanics of running: how does stiffness couple with speed?* J Biomech 23(Suppl 1):65–78.
- Roberts TJ, Marsh RL, Weyand PG, Taylor CR. 1997. *Muscular force in running turkeys: the economy of minimizing work.* Science 275:1113–1115.
- Sawicki GS, Ferris DP. Human ankle exoskeleton studies (ankle vs knee/hip contribution to economy).
- Hamilton MT, Hamilton DG, Zderic TW. 2022. *A potent physiological method to magnify and sustain soleus oxidative metabolism improves glucose and lipid regulation.* iScience 25(9):104869. PMID: 36034224.
- Kram R, Taylor CR. 1990. *Energetics of running: a new perspective.* Nature 346:265–267.
- Ekkekakis P. Affective response during exercise — reliable positive window below VT1.

**Unified thesis** (candidate strongest formulation of JP³'s physiological singularity) :

> *JP³ is the minimal device permitting simultaneous and non-forced reactivation of the deep postural chain in modern adults.*

Operational class : **bridge-muscles**, defined by five simultaneous properties : (1) type I dominance (≥60%, often 70–80%), (2) preferential oxidative metabolism, (3) basal tonic function, (4) autonomous recruitment at low intensity, (5) locomotion drivers in gentle regime. The deep postural chain : foot arch → **soleus** → popliteus → deep hamstrings → **deep gluteals** → **multifidi** → **transversus abdominis** (+ diaphragm, pelvic floor) → thoracic multifidi → **deep neck flexors (DNF)**.

No other device in the exercise landscape reactivates the *entire chain* in a continuous locomotor regime — rivals target isolated segments (Pilates → canister ; McKenzie → multifidi ; SPU/Hamilton → soleus ; yoga → posterior chain segment by segment). JP³ integrates the chain by **biomechanical constraint** (impossible to stand up and bounce without engaging the chain) rather than by intention (no muscle is volitionally targeted).

---

### §4.1.2 Tibialis anterior — functional prerequisite

> **source:** `project_tibialis_anterior_co_contraction.md`

The tibialis anterior (TA) is **functional prerequisite** to the spring-mass ankle-dominant regime of JP³ via **stabilizing co-contraction** with the soleus. Without functional TA, the ankle stiffness needed for fascia-tendon spring-mass cannot install, regardless of soleus tonic effort.

Mechanics :
1. **Ankle stabilization during stance** — TA + soleus co-contract during stance phase to stabilize tibia on foot ; without TA, ankle collapses in uncontrolled plantarflexion and soleus compensates alone (→ premature fatigue, Achilles tendinopathy)
2. **Stiffness modulation** — spring-mass requires a rigid ankle at contact ; this stiffness is produced by agonist/antagonist co-contraction, not by a single muscle. Weak TA = insufficient stiffness = spring-mass fails to prime
3. **Eccentric protection of Achilles** — TA absorbs part of the braking work at contact, protects Achilles tendon from eccentric overload

**EMG citation — Knutson & Söderberg** : documented biphasic pattern of sequential co-contraction TA + gastrocnemius precisely around heel-strike. Established biomechanical fact. Probable Knutson LM, Söderberg GL — Journal of Biomechanics, 1990s ; to verify exact reference.

Protocols to integrate (Ben Patrick / ATG confirmed) :
- Tibialis raise (back to wall, heels ~30 cm out, lift toes against gravity, long series slow tempo)
- Walking on heels
- Sled backward

**Homonymy note** : "TA" = tibialis anterior (leg, dorsiflexor) ; "TA" in deep postural chain context may also designate transversus abdominis (abdomen). Two different muscles sharing the same English abbreviation.

---

### §4.1.3 Deep postural chain — bridge muscles and systemic coherence

> **source:** `project_chaine_posturale_profonde.md`

The deep postural chain ≠ "core" in the fitness sense (the core often includes external obliques and rectus abdominis, which are *superficial* and often in chronic overload in armored adults). Insist on the word **deep**.

Primary citation sources :
- Hamilton MT et al. *iScience* 25(9) 2022 (SPU)
- Bramble & Lieberman *Nature* 432 (2004) *Endurance running and the evolution of Homo*
- Hodges PW *Spine* 1996 (TA transversus anticipation)
- Falla D et al. *Spine* 2004 (DNF)
- Hides *Spine* 1996 (multifidi post-LBP)

**Corollary 1 — target populations** : maximal benefits in sedentary armored adults, depressed, post-partum, seniors ; lesser in dancers, advanced yoga/Feldenkrais practitioners, long-term endurance athletes (chain already functional).

**Corollary 2 — complementary rivals** : Pilates, McKenzie, SPU, standing qi-gong are not competitors but complementary — JP³ integrates, they segment.

**Corollary 3 — contraindications** : persons in whom a layer is structurally prevented (paralysis, recent surgery, acute localized pain) will see JP³ less effective. The device assumes an *inhibited but present* chain, not absent.

---

### §4.1.4 Fascia — probable under-named substrate

> **source:** `project_fascia_hypothese.md`

The **fascia** is flagged as physiologically probable under-named substrate of JP³'s moment-zero and initial x³ segment. Five fascial properties converge with JP³ :
1. Continuous network across muscles, tendons, ligaments
2. Density of interoceptors (rivaling skin by some counts)
3. Thixotropy under gentle movement (slow repetitive loading → liquefaction of ground substance, hyaluronic lubrication)
4. Contribution to stretch-shortening cycle (elastic energy storage)
5. Preference for slow loading, low intensity (opposite of what phasic-glycolytic training produces)

The fascia is an exemplary case of disciplinary epistemic bias. For decades, anatomy treated it as "packing tissue" (literally discarded in dissections). The first International Fascia Research Congress dates to 2007 (Boston). Key figures : **Robert Schleip**, **Thomas Myers** (myofascial trains), **Carla Stecco** (Padua, specialized dissections). Mainstream sport/training culture speaks in terms of muscles, VO₂max, cardio ; fascia remains marginalized in alternative fitness (Pilates, yoga, Feldenkrais, Rolfing) or manual therapies.

Convergence suspected with JP³ : the five fascial properties point to a tissue that responds *preferentially* to stimuli JP³ produces (very small movements, slow loading, repeated low-intensity solicitation) and *does not respond* to brutal anaerobic stimuli.

**Articulation with deep postural chain** : fascia is the *connective tissue* that links bridge-muscles together (myofascial trains of Myers). The fascia hypothesis and the deep postural chain thesis are **complementary** — probably two faces of the same phenomenon.

---

## §4.2 Biomechanical layer — spring-mass ankle-dominant regime

### §4.2.1 Perry's three rockers + Nigg's muscle tuning

> **source:** `project_nigg_muscle_tuning.md` ; Perry (gait rockers canonical reference)

**Nigg's thesis** (Nigg BM. *The role of impact forces and foot pronation: a new paradigm.* Clinical Journal of Sport Medicine, 2001;11(1):2-9) : impact forces at ground contact **are not harmful shocks** to minimize. They are **input signals** that the CNS uses to calibrate upcoming muscular activity — a pre-adjustment of articular stiffness and tissue damping for the next step. The epidemiological and experimental evidence does not support impact forces as a major injury factor.

**Theoretical pair with Robbins** (discomfort-impact illusion — cf. §4.2.2). Robbins shows that cushioned shoes **increase** impact by deceiving the CNS ; Nigg shows that impact **is a signal** used by that same CNS. Together : external cushioning blurs a functional signal. Unified framework.

**Transversal across JP³ discoveries**. Nigg illuminates :
- Heel-activator — heel impact is the trigger of muscle tuning for the next step, not articular aggression
- Barefoot — the impact signal is intact, tuning is clean
- Deep postural chain — tuning is the execution of the "cascade" program at the step scale
- Spring-mass ankle-dominant regime — ankle stiffness is set upstream by tuning

**Strategic JGH usage** : Nigg is cited in clinical biomechanics — a physio or sports physician at JGH will likely know him. Naming him explicitly in a pitch flips the prejudice "making arthritic/elderly persons run risks their joints" on its head. The heel-activator JP³ becomes a targeted application of a validated principle.

Perry's three rockers (gait analysis canonical reference) — heel rocker, ankle rocker, forefoot rocker — remain the structural reference frame for understanding JP³'s step-by-step action on the posterior chain.

---

### §4.2.2 Barefoot pre-activation — Robbins / EMG / Pacini unified mechanism

> **source:** `project_warmup_piedsnus_prematch.md`

**Unified mechanism — convergence of three corpora** :

1. **Steven Robbins & Gerard Hanna (1980s+)** — "discomfort-impact illusion". Cushioning suppresses perception of impact without reducing actual impact transmitted to the tendon. Three pivotal studies : Robbins & Hanna, Robbins & Gouw ("shock setting"), Robbins & Waked (most expensive shoes = >2x injuries). Entire research program built on this mechanism, largely ignored outside the critical-podiatric field.

2. **EMG barefoot vs. shod** — pre-activation gastroc/soleus 10–24% higher barefoot. One study : *"the lateral gastrocnemius, medial gastrocnemius and soleus respectively had 13.7, 23.6, and 10.8% more activity"* during pre-activation phase preceding contact.

3. **Pacinian corpuscles** — bandpass 20–1000 Hz, sensitive to **rate of change** of load, not static pressure. Concentric-layered structure that mechanically filters the signal. Consequence : adding texture over thick cushioning does not restore transduction, because the foam continues to spread the impulse in time. **This mechanically justifies the refusal to tinker with textured insoles and demands removing the cushioning itself.**

**"Two distinct motor regimes" reformulation** — validated by the principle of contextual specificity (Bosch, training transfer). These are not two intensities of the same gesture, they are two **distinct motor tasks** from the CNS's point of view. Populations adapted lifelong to footwear are not more at risk in that context (systematic review : "no differences in relative injury rates" between barefoot and shod populations). Injury risk comes specifically from the **differential between the two regimes** when one practices both.

**Clinical experimentation 2026-09-20** : 5-min barefoot jogging at home at fast / light-impact pace → calves warmed, oxygenated, forceful. **Solid unipodal bounding achieved** = clinical gold-standard test of post-Achilles return-to-sport (Reactive Strength Index > 0.5 unipodal, <10% asymmetry between legs). Spontaneously reached in a living room what rehabilitation protocols aim to reach in weeks — documented clinical event.

**Carry-over documented** : *"persisted when the runners donned their shoes, indicating that some learning had occurred during an initial short bout of barefoot running"*. No precise figure on duration, but existence of carry-over confirmed. Validates the **warm-up pre-match principle** : the effect is not totally erased on putting on cleats.

**Disciplinary silo** : the warm-up barefoot pre-activity intervention **exists** among performance preparers (Joachim Training, Thrive Foot & Ankle, Pursuit Athletic Performance) — explicit prescription "5-10 min barefoot before activity" — but **absent** from clinical physiotherapy tendinopathy practice (2024 JOSPT CPG, Beyer protocol, return-to-run guides — complete silence).

**Framework extension** : JP³ barefoot is no longer only (a) condition of access to one's own spring-mass regime and (b) priming toward "want to go out" — it becomes also (c) **triceps surae pre-activation protocol before shod activity**, exportable as clinical intervention for anyone whose main activity requires shoes (soccer, but also hiking, prolonged standing work, etc.).

---

### §4.2.3 Chasse-neige geometry — synchronized push school

> **source:** `project_geometrie_chasse_neige_goata.md`

The asymmetric geometry of the foot tripod (1st ray long, 5th ray short) imposes two different rocking modes :

1. **Feet straight (in running axis)** : **sequential** unrolling — heel → 5th ray (short side swept rapidly) → medial transfer → terminal hallux push (1st ray) — the economical S-rolling of endurance, time-spread
2. **Feet turned inward (chasse-neige, toes in, GOATA style)** : the metatarsal line becomes perpendicular to running axis → **latero-medial synchronization** — 1st ray (long) and 5th ray (short) receive load simultaneously, contact time reduced, concentrated push = **maximal explosiveness**

**Biomechanical confirmation** : great sprinters (Bolt, Coleman, Fraser-Pryce) all have a **subtle internal foot rotation** at block start and during acceleration. Sprint contact time (~90 ms) makes sequential unrolling mechanically impossible — must synchronize. GOATA does not invent this pattern, it **restores** it in a population that lost it through socialization ("walk straight").

**Doctrinal cross-reference** :
- **GOATA provides the motor pattern** (slightly inward feet, articular alignment), **JP³ integrates it at low intensity** — the chasse-neige In Place is **the school of synchronized push without having to sprint**
- Links to the **frontal axis / gluteus medius** — pelvis-in-flotation + slightly inward feet + active gluteus medius compose a **coherent biomechanical system** whose 3 elements support each other

**Doctrinal contribution** : chasse-neige is not an aesthetic gimmick or a "ridiculous" position to socially assume — it is the geometry that teaches the foot to push in synchronization, which all great sprinters do subtly.

---

### §4.2.4 Frontal plane — gluteus medius and preparatory gesture

> **source:** `project_axe_frontal_moyen_fessier.md`

Discovery 2026-08-27 after a JP³ session. Feeling that Own Pace pushed him to stop running rather than continue, Perig found himself standing in front of the dishes in lateral left-right swaying, camped on heels, robust despite global fatigue. Immediate activation of an under-used muscle identified as **gluteus medius** (confirmed). Deep hip rotators probable but not confirmed.

Opens a **complementary axis** of the deep postural chain. Until now, the deep postural chain thesis (2026-08-16) was structured mainly around the sagittal axis (front-back running : soleus, gluteus maximus, TA, DNF, diaphragm, multifidi). The lateral swaying reveals a **frontal axis** with gluteus medius as typical bridge-muscle — atrophied by seated sedentarity, difficult to activate because TFL takes the shortcut, accessible in slow standing Own Pace.

Document the **"dormant hip syndrome"** (Sahrmann) as conceptual parent of **"gluteal amnesia"** on the frontal side — same sedentary-sitting pathology, different plane. Literature to search : isolated gluteus medius activation without TFL (Reiman, Selkowitz).

**Secondary doctrinal point** : "the preparatory state is an integral part of the thing" (Perig's formulation). JP³ includes its own preparatory state — it is not a dissociable warm-up, it is a moment of the practice. Consistent with 3-P modulation : Own Pace can legitimately push to cease running to find a more just gesture, as long as the via negativa core holds.

---

## §4.3 Metabolic layer

### §4.3.1 Soleus oxidative metabolism

> **source:** `content/en/article.md` §2.2.1 — *PILOTE-refs correction: not "Raper", should be Hamilton MT, Hamilton DG, Zderic TW. 2022. iScience 25(9) 104869. PMID 36034224. Figures 52% / 60% to verify against source.*

The soleus muscle, often overlooked, is a critical component in age-related mobility decline, being the first to atrophy and losing up to 35% of its strength after age 60. The "Jogging in Place × In Your Own Place" combination is ideal for targeted activation. The absence of horizontal displacement concentrates 100% of the force into vertical plantarflexion, forcing the soleus to work continuously against gravity without the assistance of momentum. This enables **maximal activation of the slow, oxidative fibers** of the soleus, which functions as the body's "second heart" by improving venous return and maintaining the "soleus pump." A study on "soleus push-ups" (Hamilton et al., 2022) — a setup in which the soleus is solicited in a seated position for several hours — documented a **52% reduction in postprandial glucose excursion** and a **60% reduction in hyperinsulinemia**. The authors attribute these effects to sustained soleus uptake of blood glucose and to reduced insulin demand. Transposition to standing jogging in place such as JP³ remains mechanistically plausible but has not been empirically established. JP³ reproduces these conditions of intense and prolonged activation, favoring a predominantly oxidative metabolism and the use of fat as fuel. JP³ thus offers a unique intervention to counter soleus decline, improve propulsion efficiency, and stimulate fat metabolism, even in individuals with low exercise capacity.

---

### §4.3.2 Zone 2 / MAF — metabolic flexibility

> **source:** `content/en/article.md` §2.2.2

Improving aerobic capacity is fundamental to cardiovascular health, weight management, and the prevention of metabolic diseases. JP³ allows one to work specifically and sustainably within optimal intensity zones. The "At Your Own Pace × Jogging in Place" combination allows for an **ultra-gradual initial ramp-up** and self-regulation of intensity. This reduces the initial oxygen deficit and stabilizes ventilation, making it easier to remain in a stable aerobic regime from the very start of a session. The protocol favors **mitochondrial development and the use of fat as fuel** (lipid oxidation) by staying below the lactate threshold, which aligns with the principles of Zone 2 and Maximum Aerobic Function (MAF). This approach allows for extended exercise duration with minimal metabolic cost and no accumulation of toxic byproducts—essential for weight management, glycogen sparing, and building a durable "aerobic base." JP³ provides an accessible and effective way to improve metabolic flexibility and aerobic capacity, even for individuals with metabolic disorders or low tolerance to intense exercise, by harnessing the body's ability to optimize fat utilization.

---

### §4.3.3 Osteogenic window — Bassey & Ramsdale

> **source:** `project_osteogenic_jgh_seconde_porte.md`

**The data** : "heel drop" exercises (rise on toes then release sharply on heels) produce approximately **3× body weight** at the hip. Bassey & Ramsdale documented **maintenance of bone density in menopausal women** practicing this exercise. Osteogenic threshold : ~2× BW ground reaction force. Loading frequencies around 10–20 Hz stimulate bone formation more efficiently than low-frequency loads.

**Structural novelty** : the sarcopenia pillar (see §7 applied cases) was the only clinically hard pillar for JGH strategy. The osteoporosis pillar is **parallel and complementary**, with equally clean structural fit :
- **Population** : post-menopausal women = major public health issue (femoral fractures = mortality and loss of autonomy), heavily clinically studied
- **JP³ mechanism** : heel impact ~3× BW at 10–20 Hz = exactly in the documented osteogenic window
- **Modality** : standing stationary, barefoot, few minutes/day — high clinical feasibility (no equipment, no fall risk tied to displacement)
- **Hard metrics** : DEXA (bone densitometry) = standardized measure, allows clean clinical trial with quantitative endpoint — easier to publish than a sarcopenia trial
- **Safety** : forces well below classic running or plyometrics, but above osteogenic threshold — arguable sweet spot

**Cross-references** :
- Jump-rope (osteogenic loading for sarcopenia) — same corpus documented, less gentle regime
- Sarcopenia voie royale — the two pillars do not cannibalize : one same elderly person can have sarcopenia AND osteoporosis. JP³ addresses both **by the same gesture**, clinical simplicity argument.
- Heel-activator — the osteogenic effect is intrinsic to this entry mode, no specific variant needed.

**Sources** :
- Bassey & Ramsdale — heel drop, menopausal women — exact reference to retrieve.
- PMC13541840, PMC11481284 — articles on bone loading and loading frequencies.
- Melioguide "heel drop exercise" — pop source confirming the exercise has pre-existing clinical recognition.

**Open question** : unipodal heel-activator (one-leg bounding) probably generates much higher forces (~4–6× BW ?) — more osteogenic but less accessible / riskier in frail elderly subjects. Sweet-spot compromise : bipodal at session start (safety, entry into osteogenic window) then a few calibrated unipodal bounds (focused peak load) ?

---

## §4.4 Neuro-circulatory layer

> **source:** `content/fr/research-mecanismes.md` (integrated blocks ; text originally in French, not retranslated per brutal-migration mandate)

### §4.4.1 Zones d'hypoperfusion cérébrale

Le concept intuitif de "zones d'asphyxie localisées" qui se résorberaient par le mouvement rythmique n'est **pas une spéculation** : il correspond à un champ documenté de la neurophysiologie vasculaire.

**Déclin *depth-dependent* de la microcirculation cérébrale** — le vieillissement, la sédentarité, le mauvais sommeil, le stress chronique produisent un déclin **inhomogène** de la microcirculation cérébrale. Ce n'est pas une baisse globale du débit ; c'est une **hétérogénéité inter-capillaire** : certains capillaires deviennent hypoperfusés pendant que d'autres compensent. Résultat fonctionnellement équivalent à des "zones d'asphyxie" focales, alternant avec des zones normales.

Structures les plus touchées : substance blanche subcorticale (vulnérabilité la plus marquée), couches corticales profondes (couche IV notamment), régions péri-ventriculaires. Équivalent clinique humain : white matter hyperintensities (WMH), cerebral small vessel disease (CSVD), chronic cerebral hypoperfusion.

**Résorption par l'exercice aérobie modéré** — étude clé **Falkenhain et al., eLife 2023** — *Aerobic exercise reverses aging-induced depth-dependent decline in cerebral microcirculation*. Cinq mois de course volontaire chez souris âgées produisent :
- Amélioration du flux capillaire RBC, surtout en substance blanche
- Augmentation de la pO₂ tissulaire en couche IV
- **+46 % de débit** dans les veinules ascendantes
- **Homogénéisation** du flux inter-capillaire — l'effet-clé, plus significatif qu'une simple augmentation moyenne
- Densité micro-vasculaire accrue (remodelage structural)
- Amélioration mesurable des performances cognitives (reconnaissance d'objets)

Citation : *"microcirculatory effects were accompanied by an improvement in cognitive function... exercise decreased flow variability across capillaries, suggesting more homogeneous microvascular blood flow."*

**Le mouvement ne fait pas *plus* de perfusion, il fait une perfusion *mieux répartie*** — précisément l'inverse d'une hypoperfusion focale.

**HIIT : effet inverse au-delà du seuil anaérobie** — revue systématique Frontiers in Aging Neuroscience 2022 : l'exercice **modéré** augmente le CBF, tandis que l'exercice **au-delà du seuil anaérobie fait *baisser* le CBF**. Argument physiologique direct en faveur du régime JP³ contre l'intensité extrême.

**Réponse hippocampique aiguë** — Cerebral Cortex 2020, *Hippocampal Blood Flow Is Increased After 20 min of Moderate-Intensity Exercise*. Adulte âgé à santé cérébrovasculaire fragile, une session modérée produit : chute *atténuée* du CBF immédiatement post-effort (0-6 min), **rebond marqué** avec CBF supérieur au baseline entre 18 et 24 min post-effort, effet maintenu jusqu'à **60 min post-effort** (ASL-MRI).

---

### §4.4.2 Ondes de choc pédestres et perfusion cérébrale pulsée

**Le mécanisme (groupe Lohman/NMHU)** — New Mexico Highlands University (Lohman, Wasson et al.) a documenté par échographie que **chaque impact du pied** (4-5 G en course) génère une **onde de pression rétrograde** dans les artères, remontant jusqu'aux carotides et jusqu'au cerveau. Citation : *"Brain blood flow is very dynamic and depends directly on cyclic aortic pressures that interact with retrograde pressure pulses from foot impacts."*

**Synchronie fréquence cardiaque / cadence de foulée (HR-SR)** — résultat quantifié (**Wasson et al., FASEB 2012**) : quand FC et cadence sont **en phase**, vitesse du sang dans l'artère cérébrale moyenne (CBFv) passe de :
- **56 ± 6 cm/s** (hors phase)
- à **78 ± 8 cm/s** (en phase) — soit **+39 %**

*Le simple fait que le rythme cardiaque et le rythme du pas soient synchronisés multiplie la perfusion cérébrale par 1,4.*

**Continuum cycling < walking < running** — *"There is a continuum of hemodynamic effects on human brain blood flow within pedaling, walking and running, and these activities may optimize brain perfusion, function, and overall sense of wellbeing during exercise."*

**Question ouverte importante pour le JP³** : la biomécanique du jogging sur place (rebond vertical pur, sans dissipation horizontale d'énergie) devrait *théoriquement* maximiser l'onde de choc vs. une course horizontale à même intensité perçue. Aucune étude directe trouvée — piste de recherche originale (signature physiologique potentiellement unique du JP³).

---

### §4.4.3 Clairance glymphatique et exercice

**Fondations Iliff / Nedergaard (2012-2013)** — système paravasculaire par lequel le liquide céphalo-rachidien (LCR) circule à travers le parenchyme cérébral et draine les métabolites interstitiels (dont l'amyloïde β). Fondamentalement **rythmique** — pompé par oscillations respiratoires, pulsatilité artérielle, mouvements de tête.

**Preuves humaines récentes — Yoon et al., Nature Communications 2025** : *Long-term physical exercise facilitates putative glymphatic and meningeal lymphatic vessel flow in humans*. Douze semaines de cyclo-ergomètre chez l'humain :
- Augmentation significative de l'influx glymphatique au putamen (IRM T1 contrastée dynamique)
- Augmentation de la taille et du débit des vaisseaux lymphatiques méningés
- Effet corrélé à une baisse mesurable de marqueurs inflammatoires plasmatiques

**Mécanismes moléculaires** (Yoon 2025) :
- Down-régulation de S100A8, S100A9, PSMA3, DEFA1A3 (inflammation)
- Up-régulation de J chain (immunoglobulines)
- Modulation de la polarisation astrocytaire de **AQP4** (aquaporine-4), clé du couplage LCR-parenchyme

**Chez la souris âgée** : exercice volontaire améliore la clairance de l'amyloïde β et réduit l'activation des astrocytes et de la microglie (PMC 2017).

**Effets aigus** — une seule session d'exercice suffit à modifier la volumétrie des espaces perivasculaires (mesure IRM directe des voies glymphatiques) — étude 2024. Glymphatique **répond dans la séance elle-même**.

---

### §4.4.4 Rythmes cérébraux et locomotion

**Central Pattern Generators (CPG)** — un CPG est un ensemble de neurones capable de générer un pattern moteur rythmique **sans stimulus externe**. Grillner et collègues (années 1970) ont établi que la locomotion des vertébrés repose sur des CPG spinaux ; chez l'humain, existence d'un CPG spinal fonctionnel soutenue par évidences croissantes (Minassian et al. 2017). CPG sont **entraînables** par stimuli externes : *"Signals from the brain stem can modulate the period of oscillations to adjust walking or running speed, and a more complex behavior is the entrainment of movement to an external stimulus, such as playing or dancing to music, or walking in time with a companion."* Concept Grillner de **"unit burst generators"** — plusieurs oscillateurs couplables selon différentes configurations.

**Theta hippocampique locomoteur** — un des résultats les plus solides de la neurophysiologie animale : dès que le rat se met à courir, un rythme theta puissant apparaît dans l'hippocampe, et sa fréquence corrèle avec la vitesse (Vanderwolf 1969). Chez l'humain (Goyal et al., Nature Communications 2020 ; Bush et al., PNAS 2017) :
- Theta humain **plus lent** : centré autour de **3 Hz** (bas theta) et **8 Hz** (haut theta), vs. ~8 Hz chez le rat
- **Deux composantes fonctionnellement distinctes** :
  - **Theta bas (~3 Hz)** : plus antérieur, associé à la mémoire, ne varie pas avec la vitesse
  - **Theta haut (~8 Hz)** : plus postérieur, corrèle avec la vitesse de mouvement
- **Puissance theta** augmente dès le début du mouvement et scale avec la distance parcourue

**Implication pour le JP³** : même un jogging sur place à cadence lente engage un signal cognitivo-mémoriel hippocampique massif. Ce n'est pas une conséquence de l'intensité — c'est une conséquence de **la présence du mouvement rythmique lui-même**. Cette découverte déplace la lecture des effets cognitifs de l'exercice : ils sont *portés par le rythme*, pas seulement par la charge cardio-respiratoire.

**Locomotor-Respiratory Coupling (LRC)** — la respiration s'accroche au rythme locomoteur, typiquement 2:1, 3:1, ou 4:1 (pas par inspiration). Bénéfices (Frontiers in Neuroanatomy 2022 ; PLOS ONE 2012 ; PLOS ONE 2013) :
- Réduit interférences mécaniques entre système respiratoire et locomoteur
- Diminue coût énergétique de la ventilation
- Améliore efficacité ventilatoire
- Métronome externe stabilise le LRC et économise l'énergie
- Impact loading (foulée) influence significativement dynamique respiratoire

Régime préférentiel LRC = basse-à-modérée intensité. À haute intensité, respiration **se découple** du rythme locomoteur. Argument physiologique direct pour la lenteur du JP³.

**Locomotor-Cardiac Coupling (LCC)** — analogue cardiaque. Documenté par groupe Lohman/NMHU — c'est précisément ce couplage qui maximise la perfusion cérébrale via ondes rétrogrades. LCC lie mécaniquement §4.4.2 (perfusion pulsée) à §4.4.4 (rythmes) : **un seul phénomène de synchronisation multi-systémique**.

**Preuve par la pathologie — Parkinson et RAS** — la **Rhythmic Auditory Stimulation** (Thaut) utilise métronome ou musique pour restaurer la marche chez patients Parkinson. Mécanisme documenté : RAS **bypasse les ganglions de la base défaillants** via voies **cérébelleuses** (revue 2025). *"Music therapy provides external rhythmic stimulation, recruits neural networks to bypass the basal ganglia and synchronizes gait with external rhythms through auditory-motor neural networks."* Si le rythme peut restaurer la marche d'un parkinsonien, on peut raisonnablement supposer qu'il peut resynchroniser un cerveau simplement fatigué ou stressé.

---

### §4.4.5 Trigger points — analogie musculaire

**Mécanisme parallèle musculaire** éclairant par analogie la logique cérébrale : les **points-gâchettes myofasciaux** (Travell & Simons) sont des zones d'**ischémie locale** produites par contraction soutenue → épuisement ATP → ponts actomyosine bloqués → nodule douloureux. Résolution : **restauration du flux sanguin local** via mouvement doux, compression, ou libération.

Citation (Chinese Medicine 2011) : *"Ischemia results in the loss of ATP formation in a small region of muscle fibers, the crossbridges in this region cannot be released, and a trigger point forms... Treatment should be aimed at relieving ischemia by manual therapy that increases local blood circulation."*

Parallèle cérébral **structural** : hypoperfusion focale (§4.4.1) → dysfonction locale → résorption par restauration du flux via mouvement rythmique. Pas une preuve directe, mais un cadre théorique cohérent : le corps entier — muscle et cerveau — semble organisé selon une même logique de perfusion focale susceptible de résolution par le mouvement doux et prolongé.

---

### §4.4.6 Hiérarchie oscillatoire — spectre convergent plutôt que pacemaker

**Question** : existe-t-il **UN** pacemaker central du cerveau qui, s'il est syntonisé, réorganiserait toute la physiologie ? **Verdict : pour les rythmes rapides, non — mais ce qui existe à la place est plus riche et plus favorable au JP³ que le concept initial.**

**Le seul vrai master pacemaker anatomique : le SCN (circadien)** — noyau suprachiasmatique de l'hypothalamus antérieur. Coordonne les oscillateurs périphériques (foie, cœur, muscle, glandes). Même le SCN n'est pas un neurone unique — c'est une population d'oscillateurs cellulaires couplés qui produit une rythmicité de réseau émergente.

**Pour tous les autres rythmes** — locomoteur, respiratoire, cardiaque, cognitif, corticaux — **pas de master pacemaker anatomique unique**. Le cerveau est une hiérarchie d'oscillateurs couplés.

**Cadre théorique dominant — Buzsáki et la hiérarchie nichée** : oscillatory hierarchy organisée par **cross-frequency coupling**. Cascade documentée : ultra-slow (~0.01-0.1 Hz) → slow oscillations (~1 Hz) → spindles (~10-14 Hz) → gamma (~40-80 Hz) → ripples (~150-200 Hz). "Syntaxe neurale" (Buzsáki) : rythmes lents fournissent une structure temporelle qui organise les rythmes rapides comme des lettres dans des mots.

**Candidats quasi-master** (aucun n'est UN pacemaker unifié, mais chacun mérite l'attention pour comprendre où le JP³ pourrait agir) :
- **Noyau réticulaire thalamique (TRN)** — pacemaker thalamique ; génère les spindles du sommeil, module l'alpha ; domaine limité aux boucles thalamocorticales
- **Locus coeruleus (LC)** — **candidat le plus intéressant pour le JP³**. Seul émetteur de noradrénaline pour tout le cortex ; projections extrêmement diffuses avec libération extra-synaptique de NA (*volume transmission*) ; oscillations toniques ~1-3 Hz ; **sensible à la locomotion** (documenté chez le rongeur, hypothèse chez l'humain) ; mode phasique (stress, alerte brève) vs mode tonique (arousal soutenu). Peut être vu comme un "quasi-master" de la coordination brain-wide via arousal.
- **Ascending Reticular Activating System (ARAS)** — système distribué cholinergique + noradrénergique + sérotoninergique (mésencéphale caudal à pont supérieur), avec projections vers basal forebrain, hypothalamus, noyaux intralaminaires du thalamus. Coordonne transition entre régimes globaux (éveil/sommeil, arousal, conscience). Système d'*orchestration* plus qu'un générateur de rythme.
- **Oscillations infra-lentes thalamiques (ISO, ~0.01-0.1 Hz)** — noyaux thalamiques dorsaux génèrent des oscillations infra-lentes couplées à l'autonome (HRV, vasomotion) et visibles en BOLD. Niveau très haut dans la hiérarchie de Buzsáki — biaisent tout ce qui est en-dessous. Une session JP³ de 30-60 min traverse plusieurs centaines de cycles ISO — condition potentiellement idéale pour un ré-entraînement des couches supérieures de la hiérarchie oscillatoire.
- **Complexe pré-Bötzinger (preBötC)** — pacemaker respiratoire ; spécialisé ; couplé au CPG locomoteur via LRC.

**La position radicale — synchronie émergente sans pacemaker** — courant important : les oscillations cérébrales n'ont besoin d'aucun pacemaker spécialisé ; la synchronie émerge du couplage collectif faible entre neurones. **"Metastable Oscillatory Modes"** (Deco et al.) — rythmes cérébraux transitoires = signature de **synchronisation métastable** dans le connectome spatio-temporel, avec des fréquences collectives émergeant des délais et des couplages, à des fréquences **plus lentes que les fréquences naturelles des oscillateurs individuels**.

**Reformulation du "Saint Graal"** :

> *Le vrai "Saint Graal" n'est pas un pacemaker anatomique unique — c'est plutôt : quel est le **spectre de rythmes convergents** qui, injectés simultanément depuis la périphérie, réorganise le plus efficacement toute la hiérarchie oscillatoire ?*

Le JP³ semble frapper **simultanément plusieurs bandes convergentes** : ~2 Hz du pas, ~4-8 Hz du couplage respiratoire complexe, ~0.1 Hz des cycles longs de session. **Résonance multi-bandes** — précisément *parce qu'il n'y a pas de pacemaker à cibler*, mais une hiérarchie couplée à laquelle chaque bande apporte une contrainte cohérente.

**Posture** du JP³ explicitement **facilitatrice** et non *directive* : il *permet* l'émergence d'un régime oscillatoire cohérent, il ne l'*impose* pas. **Inutile de chercher LE bon rythme** — ce qui compte, c'est **la cohérence transversale** entre bandes : un pas régulier, une respiration qui s'accorde, une session assez longue pour traverser plusieurs cycles ISO. Trois échelles, une seule posture.

---

### §4.4.7 Cadre neuro-vasculaire pulsé — synthèse §4.4

Les mécanismes de §4.4 forment un régime physiologique unifié : **perfusion cérébrale pulsée + clairance glymphatique + cohérence multi-oscillatoire**, dans lequel le mouvement rythmique lent est simultanément :

- Un **pompage vasculaire pulsé** (foot-strike waves → perfusion, pompe soléaire → retour veineux)
- Un **pompage glymphatique** (oscillations respiratoires + pulsatilité artérielle → clairance des métabolites)
- Une **synchronisation multi-oscillatoire** (LCC + LRC + theta hippocampique + CPG spinal)

Ce n'est pas trois mécanismes séparés — c'est **un seul phénomène systémique** : le corps devient une machine oscillatoire cohérente, dans laquelle chaque cycle de pas est un cycle de perfusion, de clairance et de resynchronisation neuro-cognitive.

Reformulation de la question centrale :

> *Comment le régime rythmique-pulsé, dans lequel le JP³ nous fait entrer, restaure-t-il activement la perfusion, la clairance, et la cohérence oscillatoire — et pourquoi l'état "détruit" permet-il d'y entrer plus facilement ?*

---

## §4.5 Proprioceptive layer

### §4.5.1 Pacinian mechanoreceptors

> **source:** `project_warmup_piedsnus_prematch.md` (extract)

Pacinian corpuscles — bandpass 20–1000 Hz, sensitive to **rate of change** of load, not static pressure. Concentric-layered structure that mechanically filters the signal.

Operational consequence : adding texture over thick cushioning does not restore transduction, because the foam continues to spread the impulse in time. **This mechanically justifies the refusal to tinker with textured insoles and demands removing the cushioning itself.**

Together with Nigg's muscle tuning (§4.2.1) and Robbins's discomfort-impact illusion (§4.2.2), the Pacinian evidence forms the receptor-side half of the mechanism : impact is the signal, Pacinian is the receptor, muscle tuning is the response.

---

### §4.5.2 Neuromuscular reactivation

> **source:** `content/en/article.md` §2.2.3

The decline of foot function (particularly the big toe and the first ray) and the loss of proprioception are major contributors to mobility problems, falls, and chronic pain, exacerbated by the wearing of modern footwear. The "Jogging in Place × At Your Own Pace × Barefoot" combination is unique. Barefoot training reactivates the thousands of proprioceptive nerves of the foot, which are essential for body position awareness and postural control. It strengthens the intrinsic foot muscles, improving arch stability and reducing injury risk. The safe, private home environment of "In Your Own Place" makes this barefoot practice possible without risk or self-consciousness, encouraging experimentation and **self-correction** of movement patterns without the "autonomic tension" of unfamiliar spaces. The repetitive "In Place" movement, combined with maximal proprioceptive feedback from bare feet, produces a high number of movement cycles (3,000–4,000 in 30 minutes) conducive to **neuroplasticity and the retraining of dysfunctional patterns**. This improves balance, reduces fall risk, restores big-toe function, and enhances neuromuscular connections. The eyes-closed option can further amplify this body awareness by forcing the muscle spindles to work in overload to stabilize the movement. JP³ offers a unique platform for functional foot rehabilitation and for improving proprioception and balance—critical elements for autonomy and fall prevention.

---

### §4.5.3 Barefoot as access condition — forward-ref §2.3

> **source:** composite (barefoot condition fiche ; forward-ref to §2.3)

See §2.3 (barefoot as access condition — the 4th implicit P) for the full doctrinal treatment of why barefoot is a **structural prerequisite** to accessing one's own spring-mass regime, not a preference. The key clinical corollary (recurring Achilles tendinopathy in soccer is not an intensity problem but the structural absence of the spring-mass regime when cleats + cushioning + socks block priming) belongs to §2.3.

**Proprioceptive-layer-specific point** : in the proprioceptive layer specifically, barefoot is the condition that preserves the Pacinian bandpass (§4.5.1), permits the EMG pre-activation gain (§4.2.2), and keeps the muscle-tuning feedback loop (§4.2.1) intact.

---

## § 5. The protocol

**TOC §5**
- §5.1 Degré zéro — the entry threshold (`research-singularite` §4.6.5; `project_test_escaliers_soutien_vs_mobilite`)
- §5.2 Moment 0 as diagnostic — what the threshold reveals (`research-singularite` §4.6.6)
- §5.3 Core execution — kinematics and cues
  - §5.3.1 Heel activator opening — forward-ref §3.2.2
  - §5.3.2 Full session mode *(migrated from article.md §3.1)*
  - §5.3.3 Incident mode — forward-ref §3.2.4
- §5.4 The initial segment (t < √3) — anatomy of the first minutes (`research-singularite` §4.6.2–§4.6.3)
- §5.5 Advanced variants
  - §5.5.1 Propulsive push against support *(migrated from article.md §3.5)*
  - §5.5.2 Stealth / standing JP³ (`project_jp3_furtif_decouverte`)
- §5.6 Pre-activity use — barefoot warm-up before shod sport (`project_warmup_piedsnus_prematch`)

### §5.1 Degré zéro — the entry threshold

> **source:** `content/fr/research-singularite.md` §4.6.5 ; `memory/project_test_escaliers_soutien_vs_mobilite.md`

Les sections précédentes ont décrit ce qui *entre* dans la symphonie (§4.6.3) et ce qui doit *ne pas entrer* (§4.6.4). Reste à décrire ce qui *précède l'entrée du premier instrument* — le moment 0, où rien encore ne se joue mais où tout se prépare. Cette section est née d'un cas concret : un matin de démotivation aiguë (2026-08-16), la question "par où commencer ?" a rendu manifeste ce que les autres sections avaient laissé dans l'ombre — que JP³ commence bien avant le premier balancement du bassin, dans un état qu'on peut nommer le **degré zéro**.

**"Lent" est un mot piégé.**

L'intuition initiale — "commencer très très lentement" — induit une erreur biomécanique. Bouger lentement *augmente* la charge musculaire : un squat descendu en 5 secondes est plus dur qu'un squat descendu en 1 seconde ; le tai-chi est notoirement épuisant malgré son apparence de lenteur. La lenteur cinématique impose une **contraction musculaire soutenue** — précisément ce que le régime x³ cherche à éviter au démarrage. Si on essaie de "commencer lentement" au sens naïf, on charge immédiatement les quadriceps de manière isotonique et on paie plein tarif métabolique pour un déplacement pourtant minuscule. Le bon mot n'est pas *lent* — c'est **passif**, **élastique**, **délégué**. La faible vitesse du corps n'est pas obtenue par contrôle musculaire mais par **délégation aux structures passives** : gravité, squelette, ligaments, fascia, tendons. Le muscle ne *porte* pas — il *relâche et se laisse rappeler*. La lenteur *apparente* est une conséquence, pas une cause à imposer. Il faut donc lire les mentions de "très très lent" dans §4.6.2 et §4.6.4 comme voulant dire *très très passif, très très peu, très très délégué*.

**Le degré zéro absolu : se tenir debout sur ses os.**

Avant même le premier balancement, il y a un état antérieur, plus fondamental : *se tenir debout*. Coût énergétique quasi-nul (le poids transite par le squelette, les muscles posturaux profonds font un ajustement tonique minuscule). Décision requise quasi-nulle (on est déjà debout). Aucune articulation n'a besoin de bouger, aucun tendon d'être sollicité, aucun quadriceps de se contracter au-delà de son tonus de base. C'est *déjà* JP³ — c'est même la seule action qui puisse honnêtement s'appeler "le début de JP³", parce que tout le reste dépend d'elle.

Ce degré zéro a une propriété rare : *il n'exige pas de motivation*. On n'a pas à trouver l'énergie de commencer à bouger. On a juste à **noter qu'on est debout**. À partir de là, le poids peut basculer imperceptiblement d'un pied à l'autre — non par décision, mais par **permission**. À un moment, une articulation demandera à s'ouvrir. On la laissera. Puis un tendon voudra rebondir. On le laissera. Chaque couche annoncera son entrée. Aucune n'a à être forcée. C'est la formulation la plus exigeante et la plus douce du dispositif : le seuil d'entrée n'est plus "prendre la décision de faire du sport" — c'est simplement *ne pas résister* à ce que le corps propose de lui-même.

**La stratification anatomique — le fractal x³ à l'échelle des tissus.**

Ce qui se joue au degré zéro et dans les minutes qui suivent est une hiérarchie tissulaire qui reproduit à échelle fine le principe x³ des §4.6.3 et §4.6.4 : chaque couche *autorise* la suivante en fournissant la stabilité, l'élasticité, la circulation dont elle a besoin. Du plus passif (coût métabolique quasi nul) au plus actif (coût élevé) :

1. **Squelette** — se tenir debout. Poids par les os.
2. **Ligaments, capsules articulaires, cartilage** — micro-transferts de poids. Liquide synovial redistribué, ligaments sollicités en légère traction, cartilage rechargé.
3. **Fascia, aponévroses, tendons** — structures **élastiques passives**. Stockage et restitution d'énergie externe. Consomment très peu d'O₂.
4. **Voûte plantaire, pompe soléaire** — pompes mécaniques activées par le geste. Retour veineux commence.
5. **Muscles posturaux profonds** (multifidus, transverse, plancher pelvien) — toniques, coût faible.
6. **Muscles phasiques** (quadriceps, ischio-jambiers, mollets) — actifs, coût métabolique modéré à élevé selon la sollicitation.
7. **Système respiratoire** — accompagne la demande (LRC — locomotor-respiratory coupling s'installe).
8. **Système cardio-vasculaire** — répond en dernier à la demande périphérique (LCC — locomotor-cardiac coupling).

C'est la même **logique multiplicative** que celle des 3 P : la contribution de chaque couche est *conditionnelle* à celle des couches sous-jacentes. Retire une couche, la suivante paie tout le prix. Impossible d'engager le quadriceps efficacement si la cheville et la voûte plantaire ne sont pas prêtes à restituer l'énergie ; impossible d'engager la cheville si le squelette ne porte pas correctement. Un démarrage brutal en 3x, c'est demander aux quadriceps de faire le travail que les tendons n'ont pas encore été autorisés à faire. Le fractal descend et remonte : la même loi de dépendance ordonnée s'applique aux organites (chaîne respiratoire mitochondriale, §4.6.4), aux tissus (cette section), aux systèmes (§4.6.3), aux sessions successives dans le temps (dépassement de 3x à long terme, §4.6).

**Note importante : le rôle possiblement sous-estimé du fascia.**

Cette hiérarchie contient un élément que la culture scientifique dominante — celle qui imprègne à la fois l'auteur humain et le LLM assistant, tous deux formés sur les mêmes corpus biomédicaux — a vraisemblablement sous-mesuré : le **fascia**. Pendant des décennies, l'anatomie l'a traité comme "tissu d'emballage" — littéralement découpé et jeté dans les dissections pour révéler les "vrais" muscles. Ce n'est que depuis les années 2000-2010 (Congrès international de recherche sur le fascia depuis 2007, travaux de Robert Schleip, Thomas Myers, Carla Stecco) qu'il commence à être étudié comme un système à part entière.

Ce qu'on sait maintenant, et qui converge de manière frappante avec le régime JP³ :

- Le fascia est un **réseau continu** — il transmet la force à travers le corps entier, pas localement. Se tenir debout mobilise en réalité une organisation myofasciale globale (myofascial trains).
- Il contient une **densité exceptionnelle de mécanorécepteurs et d'interocepteurs** — probablement plus qu'aucun autre tissu périphérique. Le sens du corps ("je réalise que je suis debout") passe possiblement d'abord par lui, avant même les fuseaux musculaires.
- Il a des propriétés **viscoélastiques et thixotropiques** — il devient plus fluide (moins raide) sous mouvement doux répété, grâce à la redistribution de l'acide hyaluronique entre ses couches. Les *tout petits* mouvements sont particulièrement efficaces pour cette lubrification — précisément le type de sollicitation que produit le degré zéro et les premiers balancements.
- Il stocke et rend de l'énergie élastique — pas seulement les tendons. La contribution fasciale au stretch-shortening cycle en locomotion douce est significative.
- Il répond préférentiellement à des **chargements lents et de faible intensité** — le contraire du régime d'entraînement musculaire, qui exige des chargements courts et intenses.

Ces cinq propriétés font du fascia le *substrat physiologique le plus probable* du degré zéro et du segment initial x³ : la station debout organisée (myofascial trains), la perception "je suis debout" (interoception fasciale), le premier balancement tellement doux qu'il paraît improductif (stimulus optimal pour la thixotropie), le rebond élastique passif (contribution fasciale au stretch-shortening cycle), la cinétique lente d'amorçage (préférence pour chargements lents et répétés).

**Hypothèse à documenter :** l'"échauffement de l'échauffement" n'est pas un simple préambule — c'est *l'activation spécifique du système fascial*, qui à son tour autorise l'activation ordonnée des couches suivantes. Sans elle, on saute directement à l'engagement musculaire et on rate la couche qui, précisément, aurait permis au reste de fonctionner en économie élastique. Cette hypothèse est mal représentée dans la littérature du sport et de l'entraînement — la culture scientifique dominante parle en termes de muscles, VO₂max, cardio, et laisse le fascia au fitness alternatif (Pilates, yoga, Feldenkrais, Rolfing) ou aux thérapies manuelles. Il est possible que le rôle du fascia dans le degré zéro de JP³ soit *un mécanisme physiologique clé* que les §4.6.3 et §4.6.4 n'ont pas suffisamment nommé — à documenter dans une recherche ciblée (voir §7 pour appel à sources sur ce point précis).

**Confirmation empirique en temps réel.**

Cette section a été écrite pendant que Perig vivait littéralement le degré zéro — un matin de démotivation aiguë où l'idée même de "commencer à bouger" semblait insurmontable. La séquence a fonctionné : *remarquer qu'on est debout* → petits transferts de poids → une articulation s'ouvre → un tendon rebondit. Témoignage direct : *"je suis réellement dans l'échauffement de l'échauffement, je réalise ce que c'est que de se tenir debout"*. Valeur : celle d'un cas d'espèce — pas d'une preuve statistique, mais d'un signal fort que le dispositif tient ce qu'il promet même dans le pire état initial, celui où toute autre modalité d'exercice serait spontanément écartée.

**Ce que cette section ajoute au reste.**

Les §4.6.2, §4.6.3, §4.6.4 décrivaient le segment initial x³ *une fois qu'on avait commencé*. Le §4.6.5 identifie le *moment antérieur au commencement lui-même* — le degré zéro qui rend possible tout le reste. Il précise aussi la correction sémantique : ce que "très très lent" cherchait à dire, c'était *très très passif, très très délégué* — jamais "musculairement contrôlé lentement". Enfin, il pointe le fascia comme substrat physiologique probablement sous-nommé, à documenter.

Le moment 0 n'est donc pas *avant* JP³ — il *est* JP³, dans sa forme la plus dépouillée. Toute session commence par se tenir debout sur ses os. Le reste vient tout seul si on lui donne la permission.

**Test auto-administrable — descente d'escaliers pieds droits (fiche test escaliers, 2026-09-10) :**

Observation du 2026-09-10. Jour 3 hors de chez lui, en contexte de fatigue accumulée (trois nuits consécutives de mauvais sommeil). L'endroit d'hébergement a plusieurs étages, escaliers fréquemment empruntés.

La dorsiflexion en descente d'escaliers, pieds bien droits (alignement correct, pas ouverts en canard), est difficile. Le mouvement est possible en amplitude et il n'y a pas de douleur — mais la capacité à **soutenir** le corps dans cet alignement pendant la descente fait défaut.

Insight doctrinal : *« il ne suffit pas d'avoir la mobilité et de ne pas avoir de douleur »*. Trois strates distinctes que la médecine standard confond souvent :

1. Mobilité (amplitude articulaire passive)
2. Absence de douleur
3. **Capacité de soutien fonctionnel sous charge dans l'alignement correct**

La strate 3 est ce que le JP³ met en évidence et travaille — c'est le versant fonctionnel du degré zéro (chaîne posturale profonde, tonus fascial, muscles-ponts type I). Ni la strate 1 ni la strate 2 ne la prédit ni ne la garantit. Co-facteur noté : fatigue accumulée (3 nuits mal dormies) rend visible ce qui est habituellement compensé. Bon désarmoir de l'objection « je n'ai pas mal, je suis mobile, donc tout va bien » — objection qu'on rencontrera dans le public sarcopénie.

---

### §5.2 Moment 0 as diagnostic — cuirasse caractérielle, vulnérabilité, "In Place" affiné

> **source:** `content/fr/research-singularite.md` §4.6.6

Le §4.6.5 a décrit le degré zéro comme *seuil d'accès minimal*. Il faut ajouter ce que cet accès *révèle* — car le moment 0 n'est pas seulement une porte d'entrée : c'est un **révélateur diagnostique**. Ce qui se manifeste dans les premières minutes d'un JP³ authentique n'est pas nommé par le paradigme fitness, qui commence trop haut pour le voir.

**A. La cuirasse se dépose — et devient audible.**

Wilhelm Reich a nommé *cuirasse caractérielle* l'ensemble des contractions musculaires chroniques par lesquelles le corps se défend d'affects non-tolérés — mâchoire serrée, épaules remontées, ventre bloqué, diaphragme figé, plancher pelvien verrouillé. Ces tensions ne se sentent pas à haute intensité, parce que le mouvement volontaire les recouvre : quand on court, quand on soulève, quand on transpire, les muscles phasiques dominent la scène motrice et le tonus défensif chronique est masqué. Il devient *audible* précisément là où le mouvement est le plus faible — dans le degré zéro et le segment initial x³.

Ce que Perig a nommé pendant une session : *"je réalise à quel point je suis toujours dans un rôle défensif, épaules qui protègent le cœur, cœur qui protège le ventre, ventre qui protège le petit ventre"*. C'est un enchaînement défensif en cascade — chaque couche protégeant celle du dessous. Cette perception n'est possible que parce que le mouvement volontaire est effacé : il ne reste que le fond tonique, et ce fond est *contracté*. La cuirasse **se dépose** au sens où un sédiment se dépose au fond d'un verre resté longtemps immobile : elle n'a pas été créée par JP³, elle était là ; le silence du dispositif la rend visible.

Cette observation a une conséquence importante pour l'axe C. La cuirasse est *elle-même* une contribution chronique à la cascade cortisolique décrite en §4.6.4 : co-contractions permanentes = coût métabolique de base élevé = signal sympathique continu = cortisol basal élevé. Chez l'adulte moderne cuirassé, une bonne partie de la "fatigue" de fond n'est pas due à ce qu'on *fait*, mais à ce qu'on *retient*. Le degré zéro de JP³ permet ce que peu d'autres dispositifs permettent : sentir le retenu séparément de l'agissant. C'est diagnostique avant d'être thérapeutique.

**B. "In Place" affiné — chute-vers-l'avant tolérée, déplacement ego-piloté exclu.**

La cuirasse déposée, quelque chose se met à bouger *sans que rien ne soit décidé*. Le corps se **penche vers l'avant**, dérive de quelques centimètres, se rattrape sur l'autre pied, dérive encore. C'est physiologique : dès qu'on relâche les extenseurs postérieurs (chaîne postérieure — mollets, ischio-jambiers, érecteurs du rachis, trapèzes), le centre de gravité, situé légèrement en avant de la cheville, entraîne le corps vers l'avant. La marche humaine est structurellement une **chute contrôlée**, comme le disait Nicolas Sapir : *"marcher, c'est se rattraper au dernier moment"* [wip — attribution à vérifier].

Le premier P est donc à préciser : *In Place* ne veut pas dire *sans déplacement* — il veut dire **sans destination**. Ce qui est exclu, ce n'est pas la dérive spatiale — c'est l'engagement de l'ego dans une trajectoire commandée ("aller à la cuisine", "atteindre le mur", "faire trois mètres"). La chute-vers-l'avant tolérée est *dans* JP³ ; le déplacement ego-piloté est *hors* JP³. C'est cette distinction qui explique pourquoi la variante *JP³ furtif* (haut du corps immobile, bassin élastique, dérive imperceptible) reste dans le dispositif : la dérive existe, mais aucun point B ne la commande. C'est aussi ce qui rend légitime l'observation empirique : plus la cuirasse se dépose, plus la chute-vers-l'avant devient facile ; on n'a plus besoin de "décider d'avancer" — on *cesse de retenir l'avancée*.

**C. Une vulnérabilité soudaine, à honorer.**

Il y a un moment dans le segment initial où la protection de la cuirasse s'estompe et où le corps se retrouve *nu à lui-même*. Ce moment est ambivalent : soulagement (on ne portait plus la charge chronique) mais aussi **vulnérabilité perceptive aiguë** (on n'a plus la carapace qui filtrait tout). Perig, session du 2026-08-16 : *"une sensation de vulnérabilité, presque d'inquiétude ; on n'est plus derrière rien"*. Ce n'est pas un bug du dispositif — c'est une **caractéristique**. Le degré zéro *ne peut pas* être atteint sans que cette exposition apparaisse. C'est pourquoi il exige Own Place au sens le plus fort (pas de regard, y compris imaginé) — parce que la vulnérabilité perceptive ne survit à aucune surveillance externe.

Corollaire pratique : les préoccupations qui remontent à ce moment (voûte plantaire qui pronationne trop, articulation qui craque, asymétrie de bassin, tension inhabituelle) sont à *noter, pas à corriger*. Elles remontent parce que le canal perceptif est propre — elles ne sont pas causées par JP³. Vouloir les corriger réintroduit un projet, une métrique, un jugement, et referme le canal. Le dispositif demande une posture d'accueil non-interventionniste : *je vois, je note, je continue*. La correction, si elle a lieu, se fera d'elle-même sur des semaines — pas par intervention volontaire dans la session.

**Ce que cette section ajoute au reste.** Les §4.6.2 à §4.6.5 décrivaient le régime x³ comme *phénomène physiologique* (interdépendance des 3 P, symphonie, cascades évitées, stratification tissulaire). Le §4.6.6 ajoute que ce même régime est *aussi* un dispositif de **révélation diagnostique** : cuirasse, chute-vers-l'avant, vulnérabilité perceptive. Ces trois éléments ne sont pas des effets secondaires — ils sont **inséparables** de l'accès au segment initial. Un protocole qui prétendrait faire du "JP³ sans cuirasse déposée, sans vulnérabilité" serait mécaniquement en 3x : le silence initial *est* ce qui rend la cuirasse audible.

---

### §5.3 Core execution — kinematics and cues

#### §5.3.1 Heel activator opening — forward-ref §3.2.2

> **source:** forward-ref to §3.2.2 (heel activator as systematic opening portal — already migrated in §3)

See §3.2.2 for the full treatment of the heel-activator as systematic portal of session opening — regardless of health state. The core kinematic: bounce letting weight drop on heels → passive elastic spring of triceps surae → spontaneous stacking cascade (head returns vertical) → arms/hands mechanically freed for manual tasks. Prolongation variable according to state; may last the whole session.

#### §5.3.2 Full session mode

> **source:** `content/en/article.md` §3.1

JP³ is a minimalist yet deeply effective exercise protocol, designed to be accessible to everyone, anywhere, anytime. Its execution is simple and intuitive:

- **"Jogging in Place":** The movement consists of jogging or gently bouncing in place. There is no horizontal displacement, concentrating the effort on vertical push-off and activation of the posterior chain muscles, notably the soleus. The "jogging" height can range from a light vertical bounce to a true jog with high knee lift, always in a self-regulated manner.
- **"At Your Own Pace":** This is the heart of JP³'s adaptability. Intensity is entirely self-regulated by the individual.
  - **Ultra-slow start:** The protocol begins at a "barely perceptible," "too easy," even "boring" pace for the first 10–15 minutes. This slow start aims to contain the oxygen deficit, stabilize ventilation, and preserve tissues.
  - **Listening to sensations:** The individual is encouraged to rely on their sensations, on the ability to speak in full sentences ("talk test"), and on the overall feeling of being able to sustain the intensity for 60–90 minutes. Any sudden acceleration of breathing should prompt them to slow down.
  - **Progression through boredom:** Intensity can increase naturally, not through willpower, but through a "self-regulation" in which boredom prompts an increase in tempo. This progression occurs without decisional friction.
- **"In Your Own Place":** The environment is chosen by the individual, typically at home, in a minimal space (one square meter is enough).
  - **Zero barriers:** This eliminates major obstacles such as cost, equipment needs, weather, travel time, and the need for special shoes or clothing.
  - **Controlled environment:** Allows for adjustable silence, controlled temperature, zero external distraction, and total safety, fostering a state of "meditation in motion" or "flow state."
  - **Barefoot practice:** Strongly recommended to maximize proprioceptive feedback and strengthen the intrinsic foot muscles. Using a mirror and the option of closing the eyes are additional tools for self-correction and heightened proprioception.
- **Duration and Frequency:** JP³ can be practiced in continuous sessions of 30–90+ minutes, but also in "micro-bouts" of 2–5 minutes throughout the day, turning sedentary time into productive movement time. The goal is regularity, ideally daily.

#### §5.3.3 Incident mode — forward-ref §3.2.4

> **source:** forward-ref to §3.2.4 (JP³ incident regime — already migrated in §3)

See §3.2.4 for the full treatment of the incident regime — JP³ adaptations priming without changing posture, a few heel shocks suffice (via muscle tuning Nigg + SSC). Figure-ground inversion of session JP³: quotidien primary, JP³ in filigrane. Entry threshold collapsed to near-zero.

---

### §5.4 The initial segment (t < √3) — anatomy of the first minutes

> **source:** `content/fr/research-singularite.md` §4.6.2 + §4.6.3

#### §5.4.1 Anatomie du segment initial (t < √3)

C'est ici, dans les premières minutes où la courbe x³ est *encore sous* la droite 3x, que la singularité se joue. Rien ne semble se passer. C'est précisément parce que rien ne semble se passer qu'il se passe quelque chose.

**Le premier "pas" n'est pas un pas.** C'est un balancement, un déplacement de poids d'un pied sur l'autre. Le talon d'un pied se lève d'un centimètre. Puis l'autre. La cadence n'existe pas encore — elle se cherche. Fréquence cardiaque probablement sous 90. Un observateur extérieur ne verrait *rien de reconnaissable* : quelqu'un debout, qui hésite. C'est exactement le point. La culture fitness dirait "ça ne compte pas". Elle a raison — au sens strict de ses métriques, ça ne compte pas. C'est pourquoi le paradigme métrique ne peut pas entrer ici, et c'est pourquoi il y a une place pour un autre régime.

**Plus lent que racine carrée — l'échelle du très très lent.** Comparons les régimes concaves à t = 0,1 :

| Fonction | Valeur à t = 0,1 | Interprétation |
|---|---:|---|
| Racine carrée (√t) | 0,316 | Lent — mais reconnaissable comme "une pratique" |
| Linéaire (t) | 0,100 | Régime de référence |
| Carré (t²) | 0,010 | Très lent |
| **Cube (t³)** | **0,001** | **Sub-reconnaissable — pas encore "une pratique"** |

Le cube est *trois cents fois plus modeste* que la racine carrée au tout début. Toutes les pratiques "lentes" nommées (kinhin, Feldenkrais, slow jogging niko-niko, tai-chi) sont au mieux en régime racine carrée : lentes, mais visibles comme *une pratique en cours*. JP³ dans son segment initial est *sub-reconnaissable*. C'est cette hyperlenteur — plus radicale que √t ne le suggérerait — qui permet à la concavité cubique de s'établir ensuite. On ne peut pas y accéder par une décision volontariste ("je vais être lent") ; il faut y *tomber* par contrainte (état détruit) ou y *renoncer* délibérément à toute cadence externe. La lenteur JP³ n'est pas une lenteur choisie *dans* une gamme de vitesses — c'est un renoncement à la gamme elle-même.

*Correction sémantique importante* (voir §5.1 pour le développement complet) : "lent" est un mot piégé. La lenteur cinématique commandée par le muscle *augmente* la charge — le tai-chi et le squat lent le démontrent. Ce que cette section décrit sous "très très lent" doit être relu comme *très très passif, très très délégué* : la faible vitesse du corps n'est pas obtenue par contrôle musculaire mais par délégation aux structures passives (gravité, squelette, fascia, tendons). La vitesse basse est une *conséquence*, pas une intention à imposer.

**L'interdépendance stricte des 3 P dans ce segment.** C'est ici, plus qu'ailleurs, que retirer *un seul* P suffit à effondrer le volume à zéro. Ce n'est pas rhétorique : c'est mécanique.

- **Own Pace exige Own Place.** Un seul regard extérieur, et cette lenteur "ridicule" devient impossible à maintenir plus de trente secondes. Le regard impose 3x — non par malveillance, par simple présence. La sur-lenteur ne survit qu'à l'abri d'un regard, y compris le regard imaginé. Own Pace n'a pas de sens sans Own Place.
- **Own Place exige In Place.** Si on doit aussi *avancer* — traverser le salon, sortir dans la rue, aller à un point B — le déplacement dévore tout à ces vitesses. À un centimètre de talon toutes les deux secondes, on ne va nulle part. On devrait accélérer pour "avancer réellement" — 3x immédiat. Own Place ne libère Own Pace que si In Place rend la sur-lenteur *spatialement viable*.
- **In Place exige Own Pace.** Marching in place prescrit (physio, Walk at Home, aérobie à la maison). Un tempo externe, même minimal, écrase le segment initial. La verticalité sans autonomie de tempo = 3x codifié. In Place tout seul ne suffit pas ; il tombe dans un protocole.

Chaque P défend l'inviolabilité des deux autres. La multiplication n'est pas une figure — elle est structurelle : retire une dimension et le volume x³ collapse à un plan, un plan à une droite, une droite à un point. C'est pourquoi les rivaux "1 P" ou "2 P" ne s'approchent jamais du cube. Ils n'ont pas la géométrie pour le tenir.

**Ce qui se passe dans le corps pendant que rien ne se voit.** Rien à l'œil nu. Mais dans le corps, en fenêtre différée :

- Les foot-strike waves commencent à onduler à basse fréquence, pas encore synchronisées entre membres inférieurs.
- Le LC tonique s'amorce en régime bas (Poe et al. 2020) — pas encore la phasic surge de l'effort intense, la tonic baseline qui monte doucement.
- La respiration s'organise sans consigne, alignée sur la locomotion (couplage locomotor-respiratory qui se cherche).
- Le cross-frequency coupling theta/gamma commence à se stabiliser — la signature EEG de l'attention distribuée qui s'installe.
- La perfusion pulsée monte imperceptiblement à chaque foot-strike accumulé.
- Le système glymphatique n'est pas encore activé, mais la fenêtre s'ouvre.

Tous ces processus ont besoin *de temps pour s'amorcer sans être écrasés par une contrainte d'effort déjà présent*. C'est précisément ce que le segment initial x³ leur donne. En 3x — dès qu'une cadence externe s'impose — ils doivent s'installer sous contrainte : sous-optimaux, ou pas du tout. La physiologie a besoin du *sub-reconnaissable* pour se déployer sans hâte.

**Le paradoxe subjectif — "ne rien faire" est le signe de qualité.** Toute impression de "faire quelque chose" au démarrage indique qu'on a déjà basculé en 3x, qu'on a raté le cube. L'épistémologie est inversée : *l'absence de sensation d'effort au démarrage est le critère de bonne facture*, pas le signe d'un échec. La culture fitness n'a pas de mot pour ça — pour elle, "ne rien sentir" = "ne rien faire" = "temps perdu". C'est le point aveugle exact qu'il faut nommer. Le seul indicateur fiable du segment initial correct, c'est la *persistance dans l'ennui apparent* : si on tient sans se dire "il faut que je fasse quelque chose", on est dans x³. Dès qu'on cède à l'urgence de "faire" — on a raté.

**Le franchissement de √3, souvent inaperçu.** Il n'y a pas de "runner's high" au moment du croisement. Pas d'endorphines qui claquent. Le passage se fait sans annonce : on démarre, on ne s'en rend pas compte, et vingt minutes plus tard on est *encore là*, dans une modalité qu'on ne cherchait pas à atteindre et qu'on ne sait pas nommer. Le régime cubique croît doucement, comme il a commencé. C'est aussi ce qui distingue x³ des autres : la culture fitness attend un moment de bascule (endorphines, seuil ventilatoire, "the wall", "second wind"). JP³ n'a pas de moment. Ce qui bascule, c'est la *durée* — la capacité à *rester là* devient elle-même le bénéfice.

#### §5.4.2 La symphonie des mécanismes — entrée progressive des instruments

Il n'y a pas de chef d'orchestre unique dans le corps. Ni le SCN circadien, ni le locus coeruleus, ni le preBötC respiratoire, ni les oscillations infra-lentes (ISO) ne dirigent seuls. Le régime x³ décrit dans les sections précédentes n'est pas produit par un mécanisme — il est produit par l'**entrée successive** de plusieurs voix qui, une fois toutes présentes, se soutiennent mutuellement. C'est une symphonie sans chef. Le rôle des 3 P est de protéger le silence initial pour que les voix entrent *dans l'ordre où elles peuvent se soutenir*, pas toutes en même temps.

**Mesure 0 — le silence, avant le premier balancement.** Corps immobile, respiration au repos (~15/min), FC ~70, cortex en mode par défaut. La partition attend. Aucun instrument n'a encore joué.

**Percussion — le premier balancement (0-30 s).** Le talon d'un pied se lève. Foot-strike wave désynchronisée. La pompe soléaire s'amorce à la compression du mollet. Fuseaux neuromusculaires — proprioception discrète. C'est la première voix, une percussion mate, presque inaudible.

**Contrebasses — respiration et cœur (30 s – 2 min).** Le rythme respiratoire s'aligne progressivement sur la cadence des pas : couplage locomotor-respiratoire (LRC) qui se cherche, pas encore verrouillé. Le cœur répond à la mécanique — locomotor-cardiac coupling (LCC), FC 85-95. La ligne de basse s'installe sous la percussion. Deux voix ; encore fragile.

**Bois — le tonic locus coeruleus (2-5 min).** Le LC monte en régime tonique (Poe et al. 2020), sans les phasic bursts de l'effort intense. Éveil calme, pas d'urgence. Pupillométrie légère (Yamashita et al.). L'ARAS module discrètement l'éveil cortical. Une clarinette entre. La texture s'épaissit sans devenir dense.

**Cordes — hippocampe et theta (5-10 min).** Le theta hippocampique se verrouille sur la cadence de pas (Kropff et al. 2023). Les cellules de lieu commencent leur phase precession. Le cross-frequency coupling theta/gamma se stabilise (Canolty & Knight). L'attention distribuée s'installe — cortex frontal en dialogue lâche avec l'hippocampe. Les cordes entrent — c'est la première nappe harmonique qui donne à l'ensemble sa forme.

**Altos et violoncelles — perfusion pulsée (5-15 min).** Chaque foot-strike accumulée envoie une onde de pression qui remonte vers le cerveau via la colonne vertébrale et les carotides. Micro-circulation cérébrale s'ouvre (BOLD signal augmente doucement). Les zones d'hypoperfusion diurne commencent à être irriguées. Les altos rejoignent les cordes — la ligne se densifie, la trame vasculaire soutient la trame neurale.

**Cuivres tardifs — la fenêtre glymphatique (15-30 min).** Le système glymphatique (Iliff, Nedergaard) commence à s'activer : les pulsations artérielles régulières facilitent le flux de CSF le long des espaces péri-artériels. Le nettoyage inter-cellulaire s'amorce. Ce sont les cuivres tardifs, qui n'entrent que quand toutes les autres voix soutiennent leur entrée — parce qu'elles ont besoin du couplage vasculaire *et* du rythme cardiaque stable *et* de l'éveil tonique modéré, tout simultanément.

**Tutti — le régime pleinement déployé (20+ min).** Toutes les voix jouent. Aucune n'est prépondérante. Chaque cycle enrichit les autres : le pas alimente la perfusion qui alimente le LC qui module le theta qui organise l'attention qui régule le pas. La boucle est fermée, chaque itération *hérite* de la précédente. La courbe cubique bat son plein. Subjectivement : "on est dans" — pas d'effort, pas de plafond, une modalité qui pourrait continuer.

**Le chef d'orchestre absent.** Aucune de ces voix ne dirige les autres. Ce qui ressemblerait à une pulsation centrale (respiration, cœur, theta, ISO) est en réalité un **spectre convergent** — chaque mécanisme se synchronise avec ses voisins de fréquence, et le tout tient parce que la couche du dessus module la couche du dessous sans la contrôler. La partition est écrite par la biologie ; l'exécution est libre. Ce que JP³ apporte, c'est le *silence initial* qui permet l'entrée progressive.

**Pourquoi les autres régimes ne laissent pas l'orchestre entrer.**

- **3x (Zone 2, course à allure constante, marching physio prescrit).** Le chef externe frappe le premier temps — *toutes les voix doivent entrer ensemble*. FC à 130 dès la 3ᵉ minute, cadence imposée. Résultat : cacophonie. Le LC ne peut pas s'installer en tonique parce qu'il est déjà en phasique. Le theta ne peut pas se verrouiller parce que la cadence est trop rapide et trop régulière. Le glymphatique ne s'ouvre pas parce que les pulsations sont trop hautes en fréquence pour la fenêtre péri-artérielle. Tous les instruments jouent — mais aucun ne se soutient : un tutti mal ajusté qui reste sous-optimal.
- **HIIT / fitness snacks.** Le chef arrête la musique tous les trente secondes. Aucune voix n'a le temps de finir sa phrase. On coupe. On reprend. On coupe. Le régime cubique ne peut jamais s'installer parce qu'il exige de la continuité — chaque instrument a besoin du précédent pour entrer.
- **Warm-up conventionnel.** Bonne intuition initiale — laisser les premiers instruments entrer. Mais on coupe l'ouverture pour "attaquer" la vraie séance. Les percussions et les basses commençaient à s'installer ; on les remplace par un fortissimo. Les cordes, les bois, les cuivres tardifs n'entreront jamais.
- **Slow jogging niko-niko.** Chef bienveillant, tempo doux mais constant. Percussions et basses ont le temps de s'installer. Mais le tempo *stable* — le plateau horizontal — empêche l'accumulation cubique. L'orchestre joue une belle mélodie répétitive, pas une symphonie qui monte.
- **Pacing ME/CFS.** Chef qui coupe *avant* l'entrée des cuivres — pour de bonnes raisons cliniques (le PEM). Mais du coup l'orchestre reste à mi-parcours. La symphonie ne s'achève pas.

**Ce que la métaphore ajoute au reste.** Elle rend visible ce que la description des mécanismes seuls ne fait pas voir : *l'ordre d'entrée* est aussi important que la présence des mécanismes. Chaque cadre théorique isolé (LC tonique, theta-gamma, glymphatique, perfusion pulsée) peut coexister avec du 3x — mais alors chaque mécanisme est présent en régime sous-optimal, car les autres ne lui donnent pas le contexte dont il a besoin pour se déployer. Le régime x³ n'est pas la somme des mécanismes ; c'est leur **séquence d'entrée respectée**, dans un silence protégé par les 3 P.

---

### §5.5 Advanced variants

#### §5.5.1 Propulsive push against support

> **source:** `content/en/article.md` §3.5

A particularly effective variant of JP³ consists of reproducing the propulsive phase of running by creating a controlled forward lean of the body. The exercise is performed by holding onto a stable support at waist level with the hands (kitchen counter, heavy table, back of a couch) and executing pushing movements with the legs, as if trying to move the object forward. When the support remains immobile, this action naturally creates a trunk lean that reproduces the propulsive angle characteristic of actual running, while preserving the safety and control of the stationary format.

The major advantage of this variant lies in the ability to apply maximal intensity in complete safety: with a solidly anchored kitchen counter, the practitioner can push with considerable force, exploring levels of propulsive effort that would be impossible or dangerous to reach in traditional running. This fully controlled environment allows one to train propulsive push-off like never before, fully engaging the calf-soleus complex and the posterior muscular chains without any risk of imbalance or falling. The forward lean increases the load on the plantarflexor muscles while enabling heightened proprioceptive work, since the hands provide a stable reference point that helps refine awareness of weight transfer to the forefoot.

#### §5.5.2 Stealth / standing JP³ — forward-ref §2.1.3

> **source:** `memory/project_jp3_furtif_decouverte.md` ; forward-ref §2.1.3 (already migrated)

See §2.1.3 for the full treatment of stealth JP³ — upper body still, pelvis elastic, drift imperceptible. Variant born from the solitude perception threshold constraint (§2.1.1). Resolves partially the "not-at-home-but-still-need-access" question.

---

### §5.6 Pre-activity use — barefoot warm-up before shod sport

> **source:** forward-ref §4.2.2 (warm-up pieds-nus pré-match protocol — already migrated in §4)

See §4.2.2 for the full treatment of the barefoot pre-match warm-up protocol — 5 min barefoot jogging rapid/light impact → spontaneous solid unipodal bounding (gold-standard post-Achilles RSI>0.5 test). Mechanism unified across three corpora (Robbins discomfort-impact illusion, EMG pre-activation gastroc/soléaire +10-24% barefoot, Pacini bandpass).

**JP³ pieds-nus = also protocol of triceps sural pre-activation before shod sport.** Disciplinary silo performance/clinic to assume strategically. Dependency vs. rehabilitation question resolved as "normal contextual specificity, two regimes calibrated separately with partial carry-over." Framework extension to integrate into the manual.

---

## § 6. Doctrine

Section irreducibly specific to JP³. No known rivals.

**TOC §6**
- §6.1 The paradox of liberating weakness *(migrated from article.md §3.4)*
- §6.2 *Via negativa* — the design constraint (`project_famille_spu_via_negativa`)
- §6.3 Ego and echo — body autonomous, mind free (`research-singularite` §4.6.8; `project_ego_echo_doctrine`; incident mode = mode 2 return)
- §6.4 Priming, not session — the post-plateau phase (`research-singularite` §4.6.9; `project_amorcage_vs_seance`)
- §6.5 Euphoria as destination (`project_euphoria_destination`)
- §6.6 Perceptual solitude threshold (`project_seuil_solitude_perceptive`)
- §6.7 The agent as embodiment layer (`project_agent_couche_incarnation`)

### §6.1 The paradox of liberating weakness

> **source:** `content/en/article.md` §3.4

The scope of JP³ extends to a far broader spectrum than one might initially suppose. It notably encompasses:

- Chronic fatigue or profound exhaustion
- Depressive states or debilitating anxiety
- Severe sleep deprivation
- Recovery from prolonged illness
- Generalized physical weakness
- Extreme stress
- Deconditioning after months or years of inactivity
- Chronic pain that limits capacity
- Prolonged post-viral states
- Aging with loss of capacity

#### The real discovery

In these states of profound weakness, something fundamental shifts: **one no longer has the physiological capacity to sabotage natural progression with the ego**. It is not merely that one "should" go slowly—it is that one literally **cannot** go fast, even if one wanted to.

This physical impossibility of accelerating creates the perfect conditions for discovering what JP³ truly means at the "P" (own pace) level. One is forced to:

- Accept nearly imperceptible bounces as "real" exercise
- Stay in that minimal zone for 15–20 minutes without frustration (because there is no other choice)
- Discover that boredom eventually pushes intensity up naturally, even from a state of extreme weakness
- Experience firsthand that this ultra-slow progression never triggers the exhaustion response

#### Why it's the best and longest jog

Paradoxically, it is in one's worst state that one has one's best sessions, because:

1. **Total absence of performance expectations** — impossible to judge oneself on intensity when one is already diminished
2. **Forced humility** — the condition compels one to truly honor the body rather than push it
3. **Discovery of the true natural rhythm** — progression guided by pure boredom, without ego interference
4. **No point of comparison** — one does not compare this session to one's "best" performances
5. **Gratitude for movement** — when one is weak, simply moving becomes precious rather than an obligation
6. **Authentic sustainability** — one never burns through one's limited capacity, so one can continue indefinitely

#### The radical lesson

This paradox reveals an unsettling truth: **for the vast majority of people, their "good" state of health is actually an obstacle to optimal JP³ practice**.

Strength and capacity create the illusion that one should "use" that capacity. But JP³ is not designed to exploit maximal capacity—it is designed to create a sustainable, enjoyable, and progressive practice that starts from the absolute minimum.

This discovery suggests that JP³ might benefit from a counterintuitive guideline: **"Practice as if you were in your worst state, even when you are not."**

This turns the "P" (own pace) from an abstract concept into a concrete instruction: what pace would you choose if you were deeply tired, depressed, weakened? **That is the true "own pace"**—not the pace you think you have to hold for it to "count" as exercise.

---

### §6.2 *Via negativa* — the design constraint

> **source:** `memory/project_famille_spu_via_negativa.md` (2026-08-17)

Pivot doctrinal proposé par Perig le 2026-08-17, en réaction à la recherche web précédente (`project_standing_spu_recherche.md`) qui montrait que l'équivalence positive SPU = JP³ est défendable mais fragile.

Formulation exacte de Perig : *"peut-être que j'aurais dû définir les choses par ce qu'elles ne sont pas. le SPU et le JP3 partage une dépendance envers ce muscle et un souci de ne pas faire intervenir les muscles fatigables."*

**Reformulation retenue** : La *famille SPU* devient définissable comme **tout régime qui charge le soléaire en excluant la musculature phasique-glycolytique fatigable**. Le SPU (assis, isolation par flexion du genou) et le JP³ (debout, auto-enforcement postural) en sont deux instances distinctes ; leurs différences positives ne minent pas leur appartenance commune à la famille, définie par un **noyau négatif partagé**.

**Why:**

**Solidité épistémique** : la via negativa transforme une équivalence positive contestable (SPU = JP³ ?) en une contrainte de design partagée impossible à attaquer sérieusement. Les données EMG existantes montrent toutes deux une faible activation phasique — la négation est *déjà vérifiée* là où l'équivalence positive butait sur les détails (isolation par flexion perdue, feedback EMG absent, etc.).

**Cohérence doctrinale** : la via negativa est la **grammaire native** de tout le framework JP³ construit jusqu'ici :
- **Axe B** (§1) = *pas* de métrique
- **§4.6.4** = cascades délétères *non* déclenchées (silence initial)
- **§4.6.8** (ego et écho) = *ne pas* observer son corps
- **§4.6.9** = JP³ *n'est pas* une séance auto-suffisante
- **§4.6.6** = *In Place* = absence de destination
- **§4.6.5** = degré zéro = coût quasi-nul, ne demande *pas* de motivation

Cette reformulation prolonge la logique existante plutôt que de l'inventer ad hoc. Elle rend l'architecture doctrinale plus cohérente en révélant son motif dominant.

**Économie conceptuelle** : la dépendance au soléaire (positif) devient logiquement le **résidu** de la contrainte négative — ce qui reste quand on soustrait tout ce qui fatigue vite. Le positif n'est pas un postulat indépendant à défendre, c'est ce qui persiste après l'exclusion. Un seul axiome (négatif) au lieu de deux (positif + négatif).

**Ce que ça débloque :**

1. **Définition de famille, pas seulement de dispositif.** *Famille SPU* = régimes qui chargent le soléaire en excluant la musculature phasique-glycolytique fatigable. SPU et JP³ = deux instances avec positifs différents mais noyau commun.

2. **Admission naturelle d'autres membres** : calf raises au mur soutenus, stepping lent (appui empirique : Ling et al. 2025 PLOS ONE, +157% EMG intégré du soléaire au tempo lent), mini-trampoline très doux, marche extrêmement lente. Ces membres héritent des effets métaboliques par leur partage du **noyau négatif**, pas par leur ressemblance formelle avec SPU ou JP³.

3. **Défense retournée** face au sceptique. Au lieu de *"prouve-moi que JP³ fait autant que SPU"* (fardeau de preuve sur toi, comparaison directe impossible dans la littérature), la charge devient *"montre-moi que JP³ recrute significativement de la musculature fatigable sous seuil"* — et personne ne peut, sous seuil, avec les EMG existantes (Moritani ratio soléaire/gastrocnémien 1,67 en station, préservé au rebond doux).

4. **Divergence intra-famille rendue propre** : le noyau négatif partagé est *musculaire* (exclusion phasique-glycolytique). Sur le cardio, SPU et JP³ divergent — SPU exclut aussi le stress cardio (d'où tenabilité en heures), JP³ l'inclut modérément (d'où moindre tenabilité, remarque explicite de Perig). Chaque membre respecte le noyau et fait ses choix sur les autres axes. La famille tolère la divergence sur ce qu'elle ne définit pas — c'est même ce qui permet à ses membres d'exister comme dispositifs distincts.

**Formulation stricte** : *"Le SPU et le JP³ partagent une contrainte de design — l'exclusion de la musculature fatigable phasique-glycolytique. Ils diffèrent par les moyens (isolation par flexion du genou en position assise, vs auto-enforcement postural en position debout) et par ce qu'ils ajoutent (cardio modéré pour JP³, tenabilité multi-horaire pour SPU). Mais ils appartiennent à la même **famille SPU**, définie par son noyau négatif."*

**Point pivot pédagogique** : *"On définit mieux JP³ par ce qu'il exclut que par ce qu'il fait."* — miroir explicite de la structure axe B / cascades non déclenchées / ego-écho / anti-scope amorçage.

**Anti-scope** : cette via negativa ne dit **pas** que le positif n'existe pas — le soléaire travaille, la chaîne posturale s'active, l'euphorie arrive. Elle dit que le positif est le **résidu** de la contrainte négative, pas un postulat indépendant. Nuance à préserver pour ne pas transformer JP³ en dispositif purement défini par ce qu'il évite (ce qui le rendrait creux).

---

### §6.3 Ego and echo — body autonomous, mind free

> **source:** `content/fr/research-singularite.md` §4.6.8 ; `memory/project_ego_echo_doctrine.md`

Une propriété distinctive du dispositif, presque contre-intuitive, mérite d'être nommée : **JP³ n'invite pas à se concentrer sur JP³.** Au contraire — il invite explicitement à *faire autre chose pendant*. Dicter, écouter, penser, parler au téléphone, préparer un repas mentalement, laisser la rêverie divaguer. Cette caractéristique n'est pas un compromis (*"puisqu'il faut bien faire de l'exercice, autant en profiter pour…"*). C'est une **propriété doctrinale**, et elle a une justification physiologique précise.

**Le problème "ego et écho".**

Toute pratique corporelle qui exige une attention proprioceptive et interocpetive *soutenue* (yoga postural, méditation en mouvement, Feldenkrais, chi running) crée mécaniquement une **fatigue cognitive spécifique** — la fatigue de l'auto-observation continue. Perig l'a nommée *ego et écho* : le fait d'observer soi-même en train d'agir crée un dédoublement (l'agissant + l'observateur), et ce dédoublement consomme des ressources attentionnelles distinctes de l'action elle-même. Pire : l'observation de la fatigue *amplifie* la fatigue (auto-perception de la respiration → conscience du souffle court → sensation de manque d'air ; auto-perception du cœur → conscience du rythme → sensation d'oppression). C'est un phénomène psychophysiologique documenté (attention amplifie le percept) et une raison majeure pour laquelle beaucoup de gens *abandonnent* les pratiques méditatives en mouvement après un temps : la charge attentionnelle devient elle-même épuisante.

**Ce que fait JP³ différemment.**

Le régime x³, une fois amorcé, tient *sans* attention soutenue. La chaîne posturale profonde (§4.1.3) travaille en autonomie ; l'entrée successive des instruments (§5.4.2) se fait sans chef d'orchestre ; les cascades délétères (§4.3) sont évitées par la contrainte contextuelle, pas par la vigilance. Il n'y a *rien à surveiller*. C'est pourquoi le dispositif peut supporter un investissement cognitif parallèle — et même en tirer bénéfice.

L'observation empirique de Perig est décisive : *"je dicte cette section pendant que je fais JP³, et c'est même un déclencheur — la dictée m'empêche de tomber dans l'auto-observation qui casserait la modalité"*. La dictée (ou toute activité cognitive absorbante) fonctionne comme **anti-parasite** : elle occupe le canal attentionnel qui, s'il était libre, viendrait se poser sur le corps et créer l'écho fatigant.

**Le spectre des "autres choses" — coût et bénéfice.**

Toutes les activités parallèles ne sont pas équivalentes :

- **Coût nul / bénéfice haut** : écouter (musique, podcast, radio) — canal auditif occupé, aucune production, l'attention flotte.
- **Coût faible / bénéfice moyen** : rêverie libre — pas de production, mais génération d'idées.
- **Coût modéré / bénéfice élevé** : conversation informelle au téléphone.
- **Coût élevé / bénéfice élevé** : dicter une prose substantive, résoudre un problème abstrait. Le canal cognitif est fortement sollicité — utile (permet de penser en marchant) mais peut expliquer une fatigue post-session plus marquée que prévu, non par excès de JP³ mais par la dictée elle-même.
- **Coût très élevé / bénéfice élevé** : coacher une session comme celle-ci (dicter du contenu doctrinal pendant qu'on vit le dispositif) — extrême du spectre. À réserver aux rares moments où le vécu et l'écriture peuvent se nourrir mutuellement.

La position de Perig : *"j'ai l'intention que l'article JP³ devienne non pas un texte mais un contexte pour un agent"* — c'est-à-dire un corpus dense conçu pour être lu par une IA qui accompagnera le praticien. La dictée pendant la session n'est donc pas une distraction mais une **méthode de production** : le contexte est co-écrit avec la pratique qu'il documente. Cas d'espèce, mais démonstration forte que le dispositif tolère ce niveau extrême d'usage parallèle.

**Anti-scope — ce que JP³ n'est pas.**

Cette doctrine "faire autre chose" pose négativement ce que JP³ *n'est pas* :

- **JP³ n'est pas une méditation en mouvement.** Il ne demande pas d'attention au souffle, au corps, aux sensations. Une méditation *peut* être surimposée à JP³ pour ceux qui le veulent, mais le dispositif ne le requiert pas et fonctionne aussi bien sans.
- **JP³ n'est pas une pratique proprioceptive.** Il ne demande pas d'attention à l'alignement, à la posture, à la respiration. La chaîne posturale profonde travaille en autonomie ; y projeter la conscience volontaire risque même de casser son fonctionnement autonome (comme penser à ses pas fait trébucher).
- **JP³ n'est pas un moment de "présence à soi"** au sens phénoménologique. C'est plutôt un moment où *le soi devient discret* — parce qu'il n'a plus rien à faire, la chaîne posturale prend le relais.

Cette position doctrinale distingue JP³ à la fois du yoga/qi-gong (attention corporelle intense) *et* du fitness conventionnel (attention à la performance). C'est un troisième régime : **corps autonome, esprit libre**.

**Ce que cette section ajoute au reste.** Elle rend visible une propriété du dispositif qui n'apparaissait dans aucune des sections précédentes : le régime x³ *permet* et *encourage* la dissociation attentionnelle. Non pas par indifférence au corps, mais parce que la chaîne posturale profonde n'a *pas besoin* de vigilance pour fonctionner — au contraire, la vigilance la parasite. C'est un renversement du modèle mind-body dominant en pratiques somatiques : ici, la libération de l'esprit *dépend* de l'autonomie du corps, et vice versa.

#### §6.3.1 Extension 2026-09-25 — inversion figure/fond en régime incident

> **source:** `memory/project_ego_echo_doctrine.md` extension

Avec la découverte du régime incident (`project_jp3_incident_regime.md`), la doctrine ego-écho reçoit un second mode :

- **Mode 1 (session-portail)** — pendant JP³, le corps est autonome, l'esprit est libre pour "faire autre chose" (dictée, écoute, rêverie, tâches manuelles). JP³ est le figure, l'activité parallèle est le fond permis.
- **Mode 2 (régime incident)** — pendant l'activité quotidienne (vaisselle, cuisine, marche interne), l'esprit est libre parce que la tâche est déjà connue/automatique ; JP³ s'incruste comme fond régulateur en filigrane. L'activité est le figure, JP³ est le fond.

**Inversion complète** : mode 1 = corps porte JP³, esprit se libère pour tâche parallèle. Mode 2 = corps porte tâche parallèle, JP³ s'inscrit *dedans* sans négociation attentionnelle. Les deux modes libèrent l'esprit — le premier en autonomisant le corps *pendant* JP³, le second en incrustant JP³ dans un corps déjà autonomisé par autre chose.

**Cohérence doctrinale** : les deux modes partagent le noyau anti-proprioception. Aucun des deux ne demande "présence à soi" ni surveillance sensorielle. Le régime incident est même *plus radical* dans son ego-écho : rien à remarquer du tout, les chocs de talon se produisent sans changer la posture ni interrompre l'activité.

**Nom conservé** : "ego et écho" tient pour les deux modes. L'écho ici est la calibration muscle tuning qui se propage sans que l'ego l'observe.

---

### §6.4 Priming, not session — the post-plateau phase

> **source:** `content/fr/research-singularite.md` §4.6.9 ; `memory/project_amorcage_vs_seance.md`

Il faut nommer honnêtement une limite du modèle tel que décrit jusqu'ici. Les §5.4 à §6.3 ont décrit le régime x³ comme *concave positive* : la courbe monte à partir de 0, dépasse la droite 3x à √3, continue à monter. Cette description est physiologiquement juste pour le segment initial et pour la phase de plateau qui suit. Mais elle laisse en suspens la question : **comment sort-on de JP³ ?**

**Le modèle promet une auto-résolution qui n'a pas de moyens explicites.**

Le §4.3 (cascades) affirmait que "on n'a plus envie d'arrêter" et que "la meilleure manière d'arrêter est d'accélérer beaucoup jusqu'à une limite". Cette formulation est vraie *comme description phénoménologique* — c'est bien ce que le corps signale — mais elle laisse un flou : *quels sont les moyens d'accélérer* ? Si le régime x³ est structurellement à l'abri des cascades délétères, il l'est parce qu'il *évite* les modes qui produiraient un signal d'arrêt. Alors comment sort-on ? En rentrant volontairement dans un mode qu'on a passé toute la session à éviter ? La logique interne du modèle a un trou à cet endroit.

**Reconceptualisation : JP³ n'est pas une séance, c'est un amorçage.**

La sortie propre du problème passe par une **redéfinition du produit livré**. JP³ n'est pas une séance d'exercice au sens conventionnel — objet clos avec début, milieu, fin, dépense énergétique mesurable, effet quantifiable. C'est un **amorçage** : la mise en marche d'un corps qui doit ensuite bouger dans le monde. Le *livrable* de JP³ n'est pas "j'ai fait ma séance" — c'est "j'ai envie de sortir". Le dispositif produit un état de disponibilité au mouvement extérieur, pas une consommation calorique bornée.

Cette reconceptualisation résout le problème de la sortie : **on ne sort pas de JP³, on passe à autre chose.** Le seuil de sortie est marqué par l'apparition d'un désir spontané — sortir dehors, marcher, faire une course, aller au marché, monter l'escalier de la cave, jardiner. Ce désir *est* le signal d'arrêt qu'il fallait — pas un signal de fatigue, un signal d'appel du monde. Le corps s'est amorcé, il veut maintenant utiliser cette disponibilité pour quelque chose *dans le monde*, pas *dans le salon*.

**Une deuxième phase, non-JP³, qui suit naturellement.**

Ce que Perig a nommé, en direct pendant sa propre session, la phase post-plateau : *"j'ai envie de sortir, de bouger dehors — mais j'ai aussi envie de m'asseoir ; il y a une fatigue cognitive, un léger vertige. C'est un état à apprivoiser."* Trois observations importantes :

1. **La disponibilité n'est pas de l'énergie infinie.** JP³ n'*injecte* pas d'énergie — il *débloque* une capacité qui était contrainte. Une session JP³ *consomme* (glucose, oxygène, substrats circulants — voir §4.3, activation du soléaire = pompage glucose). L'état post-session n'est pas "plein de forces" — il est "libre de bouger", ce qui n'est pas la même chose.

2. **Le vertige léger et la fatigue cognitive sont possibles.** Plusieurs mécanismes plausibles co-existent : (a) vasodilatation périphérique après station verticale prolongée avec faible retour veineux résiduel — hypotension orthostatique légère au passage à un autre mode ; (b) redistribution vasculaire (le sang qui était dans les muscles-ponts se redistribue) ; (c) hypoglycémie relative — le soléaire a activement pompé le glucose sanguin ; (d) fatigue cognitive de la dictée parallèle (voir §6.3) si l'activité "autre chose" était coûteuse ; (e) éveil vestibulaire lié à la verticalité prolongée avec micro-oscillations continues. Aucun de ces mécanismes n'est pathologique ; tous sont à apprivoiser.

3. **La transition doit être respectée.** Après JP³, il faut souvent une phase intermédiaire *avant* de pouvoir faire "la vraie chose" — s'asseoir 3 minutes, boire, manger un fruit, laisser le vertige passer. Puis le désir de sortir se stabilise et on peut y aller. Vouloir passer immédiatement de JP³ à une activité extérieure exigeante *sans* transition, c'est ignorer que JP³ vient de mobiliser une chaîne posturale profonde qui a besoin de quelques minutes pour se stabiliser en mode locomoteur ordinaire.

**Ce que JP³ ne prétend pas fournir — anti-scope explicite.**

Il faut donc dire honnêtement ce que JP³ **ne prétend pas** être :
- Ce n'est pas une **séance d'exercice complète** au sens fitness (elle ne remplace ni la marche, ni la course, ni la musculation, ni le renforcement ciblé).
- Ce n'est pas une **source d'énergie** au sens boisson énergisante ou café (elle ne surcharge pas ; elle débloque).
- Ce n'est pas un **remède** à la fatigue de fond (elle peut la révéler ; l'éliminer demande sommeil, alimentation, contexte de vie).
- Ce n'est pas un **substitut** à une pratique sportive régulière pour qui vise des adaptations spécifiques (VO2max, force, endurance longue).

Ce qu'elle *est*, en positif : un **dispositif d'amorçage à seuil d'entrée effondré** — accessible depuis un état où *toute autre modalité serait spontanément écartée*, et produisant un état de disponibilité au mouvement extérieur. C'est étroit, précis, et non-redondant avec les autres formes d'exercice. C'est pourquoi le rôle correct de JP³ n'est pas d'être *la* pratique sportive de quelqu'un — c'est d'être **le pont** entre un état où rien n'est possible et un état où le mouvement extérieur redevient possible. Pont, littéralement — comme les muscles-ponts qui le portent (§4.1.3).

**Ce que cette section ajoute au reste.** Les sections précédentes décrivaient le régime x³ dans son segment initial et sa phase soutenue. §6.4 ajoute la **phase post-plateau** et la **redéfinition du produit** : JP³ = amorçage, pas séance auto-suffisante. Cette redéfinition n'affaiblit pas la singularité du dispositif — au contraire, elle la précise. Aucun autre dispositif du paysage de l'exercice ne se positionne comme *amorçage préalable*, accessible depuis l'état détruit, produisant une envie de sortir. Zone 2, HIIT, slow jogging, Pilates, tai-chi — toutes se positionnent comme *séances* qu'on programme dans son agenda. JP³ se positionne *avant* l'agenda — comme la manière dont on entre en mouvement quand rien n'est encore prévu.

#### §6.4.1 Extension 2026-09-25 — l'amorçage descend à l'atome

> **source:** `memory/project_amorcage_vs_seance.md` extension

Avec la découverte du régime incident, la granularité de l'amorçage descend d'un cran. L'unité JP³ n'est plus la séance (fitness) ni même l'amorçage entendu comme fenêtre courte (10-30 min avec livrable "envie de sortir"), c'est **le choc de talon lui-même** :

- **Un choc = un update de calibration** proprioceptive/musculaire (via muscle tuning Nigg)
- **La séance devient l'agrégation optionnelle** des chocs, pas leur préalable
- **Livrable alternatif** : "état de disponibilité maintenu sur la journée" — sans jamais avoir eu de session distincte

Cette extension **ne remplace pas** la formulation "livrable = envie de sortir" pour le régime session-portail — elle **ajoute** un second mode d'usage où le livrable est la calibration diffuse, sans transition figure/fond à négocier (§6.4 vertige/hypoglycémie post-session ne s'applique probablement pas au régime incident, la charge cumulée étant distribuée). À observer.

**Anti-scope maintenu** : le régime incident **n'est pas** un substitut à un vrai amorçage-session quand le corps réclame un vrai amorçage-session. Ce sont deux modes complémentaires, pas un remplacement du "trop lourd" par du "toujours à portée".

---

### §6.5 Euphoria as destination — fuzzy but operative

> **source:** `memory/project_euphoria_destination.md` (2026-08-17)

Le haut de la courbe x³ (auto-catalytic session curvature) était jusqu'ici **laissé indéfini** — faille conceptuelle admise. Perig comble le trou (2026-08-17, après nuit de sommeil sur les §5.1-§6.4) : **"Euphoria is the destination."** La destination existe. Elle est *fuzzy* mais parfaitement opératoire.

Formulation exacte de Perig : *"le haut de la courbe, cette partie qui constitue une faille conceptuelle de JP³ car indéfinie, j'ai la définition, et elle correspond très bien à un mouvement ascensionnel au cube : euphoria is the destination. l'euphorie peut donner envie de faire plein de choses, on ne peut pas dicter une finalité précise de JP³, mais essentiellement, the metric, c'est ça. une destination "Fuzzy" mais parfaitement opératoire. et il faut le reconnaître, on n'arrive pas toujours à destination, mais c'est normal, ça s'apprend."*

**Why:** Ambiguïté non résolue jusqu'ici : si JP³ est axe B (**métrique-free**), pourquoi le faire, vers quoi tend-on ? Réponse : la destination est un **état**, pas un **nombre**. Compatible avec axe B (pas de mesure externe, pas de cible chiffrée) tout en donnant un *télos* réel à la trajectoire ascendante x³. L'exposant 3 signifie désormais non seulement "plus de puissance / efficacité" mais phénoménologiquement **"vers la joie"**. Le nom encodait la loi ; la loi encode aussi la destination.

Trois articulations doctrinales que cette définition résout d'un coup :

1. **Avec §6.4 (JP³ = amorçage, livrable = "envie de sortir")** : l'euphorie est le **mécanisme** de l'amorçage. Elle ne dicte pas de finalité précise post-JP³ — elle libère l'envie *en général*. On peut vouloir écrire, appeler quelqu'un, cuisiner, ranger, ressortir. La destination JP³ = l'euphorie ; les destinations post-JP³ = ouvertes.

2. **Avec §6.3 (ego et écho — corps autonome, esprit libre)** : on ne cherche pas l'euphorie en s'observant y aller — ce serait le paradoxe de l'observateur qui la sabote (Wegner 1994). Elle arrive **parce que** le corps a été bien mis en place et qu'on fait autre chose. Doctrine cohérente.

3. **Avec axe B (métrique-free)** : la contradiction apparente ("pas de métrique mais on va quelque part") s'évanouit. **Une métrique phénoménologique n'est pas une métrique externe.** L'euphorie est self-verifying — quand elle est là, tu le sais ; quand elle ne l'est pas, tu le sais aussi. Aucun capteur requis.

**Honnêteté épistémique** intégrée par Perig lui-même : *"on n'arrive pas toujours à destination, mais c'est normal, ça s'apprend."* La destination est réelle sans être garantie ; c'est une **compétence**, pas un dû. Cette phrase est essentielle — elle protège la doctrine contre l'accusation de promesse hédonique naïve, tout en préservant la réalité du télos.

**Formulation stricte** : *"L'euphorie est la destination — fuzzy mais opératoire."* NE PAS remplacer par *runner's high* (déjà chargé/branded, connoté sport d'endurance long), NI par *flow* (charge cognitive Csikszentmihalyi trop spécifique, exige défi/compétence appariés), NI par *bonheur* (trop large, trop philosophique). *Euphorie* est le mot juste : intensité positive spécifique, corporelle-cognitive, transitoire, reconnaissable.

**Anti-scope** : cette définition ne dit **pas** que JP³ = poursuite de l'euphorie (poursuite = ego/écho, sabote). Elle dit que l'euphorie est ce vers quoi la trajectoire tend *quand elle réussit*, une reconnaissance rétrospective plus qu'une visée frontale. Nuance à préserver.

---

### §6.6 Perceptual solitude threshold — forward-ref §2.1.1

> **source:** `memory/project_seuil_solitude_perceptive.md` ; forward-ref §2.1.1 (already migrated in §2)

See §2.1.1 for the full treatment of the perceptual solitude threshold — "chez soi" doesn't suffice; one must also feel *non-observed*. The threshold is doctrinal to Own Place: without perceptual solitude, Own Pace (the ultra-slow start) cannot be sustained. The stealth variant (§2.1.3 / §5.5.2) was born precisely from this constraint when perceptual solitude is unavailable.

---

### §6.7 The agent as embodiment layer — 3rd component of the JP³ system

> **source:** `memory/project_agent_couche_incarnation.md` (2026-08-27)

Le système JP³ diffusé comporte **trois couches irréductibles**, pas deux :

1. Framework théorique (article, recherche, singularité)
2. Protocole/dispositif (les 3 P, variantes, conditions d'accès)
3. **Couche d'incarnation agent-mobile** — ce qui fait *prendre* (1) et (2) dans l'action

La couche 3 n'est pas un outil de diffusion des couches 1-2 (framing actuel de §3.3). C'est un composant **constitutif** : sans elle, l'information reste connue-mais-non-pratiquée. Preuve empirique : soirée du 2026-08-27, alignement des pieds forward (info connue de longue date, jamais tenue sous charge) rendue soudain opératoire par un rappel conversationnel court juste avant l'entrée sur le terrain de soccer. Chaque course, chaque élancement du match a été fait avec la géométrie correcte. Signature Achille gauche post-match = preuve corporelle. Perig a nommé le mécanisme : *"c'est l'avantage d'avoir un coach à qui on doit rendre des comptes"*.

**Why:**

L'article contient une tension non thématisée :
- **Axe A + Axe B** : le coach est ce qu'on **retire** — friction constitutive à éliminer. *"pas de préparation, pas de trajet, pas de tenue, pas de public, pas de coach"* ; *"pas de coach vidéo, pas de leaderboard"*.
- **§3.3 article principal** : on **ajoute** un coach IA — *"prompt en annexe"*, réponse à la crise de reproductibilité, personnalisation, adhésion, scalabilité (refs Renda 2020, Mühlhäuser 2022).

Les deux passages coexistent sans dialoguer. §3.3 est écrit dans un registre conventionnel ("scalable coaching for adherence") qui ressemble à la littérature générique sur AI health coaching — vrai mais sous-déterminé. La contradiction n'est pas résolue.

La **résolution** que l'expérience du 2026-08-27 permet de formuler :

L'agent est un coach **acceptable** parce qu'il **ne fait pas** ce que faisaient les coachs à éliminer (Walk-at-Home, entraîneur perso, app compteur) :
- Il ne prescrit **pas** de contenu
- Il n'impose **pas** de tempo
- Il n'exige **pas** de forme corporelle spécifique en continu
- Il ne monitore **pas** (respecte ego-écho)

Il **fait** trois choses spécifiques :
- **Timing** : aide à poser une intention au moment où elle peut mordre sur l'action (pre-effort, pas dans l'abstrait)
- **Ancrage** : rend une donnée déjà connue soudain opératoire par la formulation partagée (l'information ne devient pas *nouvelle*, elle devient *disponible sous charge*)
- **Redevabilité douce** : la promesse implicite de raconter maintient l'attention pendant l'action, sans surveillance externe

Il respecte donc Axe A (pas de friction, entrée depuis état "détruit" reste possible), Axe B (pas de métrique imposée), ego et écho (invite à *bien* faire autre chose, ne colonise pas l'attention proprioceptive).

Le **framing "prompt en annexe" est un cas particulier** de la couche d'incarnation, pas sa forme la plus riche. Un prompt statique = version dégradée du couplage conversationnel synchronisé. Le vrai apport de la couche agent est **phénoménologique** (timing d'attention, moment de bascule connaissance→action), pas statistique (compliance rate).

**Anti-scope** : la couche d'incarnation n'est **pas** :
- un app coaching à métriques (compteurs, rappels programmés, notifications push répétitives)
- un chatbot de suivi médical
- un remplacement du praticien (physio, médecin) pour les questions cliniques
- une surveillance continue de la séance elle-même (violerait ego-écho)
- un contenu prescriptif imposant (violerait Axe A)

**Précédent phénoménologique** : `project_jp3_furtif_decouverte.md` (2026-08-07, migré §2.1.3) — une conversation avait débloqué un usage nouveau du corps (vaisselle avec bassin mobile). Même famille : information latente rendue opératoire par le tour conversationnel juste avant/pendant l'action.

---

## § 7. Applied cases — clinical and population

The 9 clinical cases from published §3.2 + 2026-09 extensions. **NOT** reader portals — application cases of the validated protocol.

**TOC §7**
- §7.1 Sarcopenia and aging (`project_sarcopenie_voie_royale`) ← main JGH door
- §7.2 Osteoporosis (`project_osteogenic_jgh_seconde_porte`) ← second JGH door
- §7.3 Depression, anxiety, perceived fatigue *(migrated from article.md §3.2)*
- §7.4 CFS / long COVID *(migrated from article.md §3.2)*
- §7.5 Chronic pain, injury rehab *(migrated from article.md §3.2)*
- §7.6 Pediatric and adolescent *(migrated from article.md §3.2)*
- §7.7 Pregnancy and postpartum *(migrated from article.md §3.2)*
- §7.8 Neurodegenerative (Parkinson, early cognitive decline) *(`research-mecanismes` RAS section)*
- §7.9 Metabolic (T2D, prediabetes) — forward-ref §4.3

### §7.1 Sarcopenia and aging — main JGH door

> **source:** `memory/project_sarcopenie_voie_royale.md` + `content/en/article.md` §3.2 cas 2 + `memory/project_jgh_presentation_voie.md`

**Fait/décision** : Question ouverte par Perig le 2026-08-17 : *"le JP³ serait-il la voie royale pour les personnes âgées sarcopeniques parce que le soléaire reste un dispositif dont on connaît l'endurance et qui est evolutivement conservé pour se tenir debout? [...] une méthode bien plus prometteuse que toutes ces variations slow... aussi insoupçonné que le pouvoir du soléaire."*

**Réponse** : Oui, argument structurel solide, potentiellement un des angles les plus forts de tout le framework. **Nouveau pilier candidat** pour le doc principal.

**Le cœur de l'argument (trois faits) :**

1. **Perte différentielle par type de fibre avec l'âge.** Fibres type II atrophient beaucoup plus vite que type I (Lexell et al. 1988, réplications multiples). À 80 ans : jusqu'à 30-50% de perte de section type II, 10-25% type I. Les quadriceps (40-50% type I) déclinent nettement plus vite que le soléaire (80-90% type I).

2. **Préservation relative du soléaire.** Le soléaire garde sa composition et sa capacité oxydative beaucoup mieux que les muscles mixtes. C'est le muscle qui **reste**, structurellement, quand tout le reste s'effondre.

3. **Conservation évolutive.** Bipédie humaine → spécialisation soléaire massive. Soléaire humain disproportionnellement grand vs autres primates, précisément parce que rester debout est métaboliquement coûteux et continu. Évolution a sélectionné fatigue-résistance, capacité oxydative, long-endurance. **Le soléaire est la fondation musculaire de la station debout humaine.**

**Le pivot fonctionnel** : la station debout est le dernier seuil d'autonomie. Sit-to-stand test (STS) = marqueur central de fragilité. Perte de la capacité debout = basculement autonomie → dépendance. Tant qu'on tient debout, on est dans le monde des vivants fonctionnels.

**Le fit spécifique JP³ :**
- Sarcopénie épargne préférentiellement type I et soléaire
- JP³ recrute préférentiellement soléaire en régime tonique-oxydatif (voir §4.1.3 ankle-dominant)
- La station debout est le seuil d'autonomie

→ **JP³ sollicite exactement ce qui reste, et travaille exactement ce qui compte le plus fonctionnellement.** Fit structurel, pas adaptation vaguement bienveillante. Aucune autre modalité de mouvement n'a cette double propriété (utilise ce qui est préservé + travaille la fonction pivot de l'autonomie).

**Ce que les approches conventionnelles offrent et où elles butent :**

- **Résistif progressif** (Fiatarone 1994, gold standard sarcopénie) : efficace, mais exige équipement, supervision, tolérance à l'effort. Compliance chute avec la fragilité. Les plus sarcopéniques sont précisément ceux qui ne peuvent ou ne veulent pas faire de la musculation.
- **Programmes en chaise** : accessibles mais sous-activants.
- **Nordic walking, aqua-fitness, tai chi** : sorties, groupe, transport → barrière élevée.

**Le trou que JP³ comble** : pour la personne réellement fragile, à domicile, faible motivation, faible tolérance à l'effort — rien n'existe qui descend jusqu'où elle est. JP³ scale jusqu'en bas : station-debout-avec-mini-rebond, à domicile, sans matériel, pendant qu'on écoute la radio. Le **degré zéro (§5.1)** devient ici littéralement salvateur.

**Appuis empiriques :**

- Hamilton SPU 2022 (*iScience*) — le SPU assis fonctionne déjà chez cette population. JP³ = extension debout quand possible.
- Kraemer 2024 (bioRxiv), Yuwono 2025 (*Sports*) — réplications SPU chez prédiabétiques (souvent âgés).
- Nuhu & Maharaj 2017 (*Diab Res Clin Pract*) — rebounding chez sédentaires métaboliquement altérés, effets marqués.
- Bramble & Lieberman 2004 (*Nature*) — spécialisation évolutive soléaire/glutéaux pour locomotion soutenue.
- Lexell J et al. 1988 (*J Neurol Sci*) — différentielle fibre type I/II avec âge.
- Grimm A et al. — atrophie sélective type II.
- Fried LP 2001 (*J Gerontol*) — phénotype fragilité, vitesse de marche et force de préhension prédisent mortalité mieux que la plupart des biomarqueurs. Soléaire directement pertinent pour la première.
- Fiatarone MA et al. 1994 (*NEJM*) — landmark resistance training chez nonagenaires.
- Marcus RL 2010, Berger MJ 2019 — reviews sarcopénie, résistif efficace mais compliance limitée.

**Caveats à préserver (contre la surpromesse) :**

- **La sarcopénie a une composante systémique** (résistance anabolique, apports protéiques insuffisants) que JP³ seul n'adresse pas. Il faut protéines ~1,2-1,6 g/kg/j chez la personne âgée + idéalement résistif quand accessible.
- **Risque de chute chez le très fragile.** Progression suggérée : (1) SPU assis (Hamilton), (2) JP³ en tenant un appui (mur, dossier), (3) JP³ autonome. **La progression est le programme.**
- **JP³ ne remplace pas la musculation.** Complémentaire, mais surtout **amorçage** (§6.4). Pour beaucoup de personnes âgées, l'amorçage *est* l'obstacle principal — sortir du trou "je ne peux/veux plus rien faire" est la fonction critique.

**Observation personnelle importante de Perig** : *"comme pour moi qui suis parfois si fatigué que j'ai 75 ans"*. **Le fatigué chronique de 50 ans et le sarcopénique de 75 ans partagent la même physiologie fonctionnelle** — musculature fatigable qui ne répond pas, capacité oxydative préservée mais sous-utilisée. Ce qui marche pour l'un a des chances structurelles de marcher pour l'autre. L'expérience de Perig est un signal, pas un biais.

**Article §3.2 cas 2 — The elderly or frail person** : The **total safety** of "In Your Own Place" removes the fear of falling. "At Your Own Pace" allows a start so slow it is accessible even to the weakest, with the option to hold onto something for initial support. Targeted soleus strengthening and improved proprioception (barefoot) are crucial for balance and fall prevention.

**JGH strategic context** : médecin de famille de Perig au JGH (Sir Mortimer B. Davis Jewish General Hospital, affilié McGill, Lady Davis Institute for Medical Research) s'est offerte de l'aider à présenter JP³ à l'hôpital (2026-08-17). Sarcopénie = centre probable du deck pour cet auditoire clinique. Progression clinique proposée : SPU assis (Hamilton) → JP³ appuyé → JP³ autonome.

**Étude qui trancherait** : essai contrôlé randomisé chez adultes ≥75 ans, MMSE > 24, autonomes, sur 12 semaines. Bras : soin usuel / SPU seul / JP³ seul / SPU+JP³. Mesures : STS, vitesse de marche 4m, préhension, masse musculaire par DEXA, HbA1c, questionnaire fragilité. ~120 sujets. Faisable en collaboration avec un centre gériatrique.

---

### §7.2 Osteoporosis — second JGH door

> **source:** `memory/project_osteogenic_jgh_seconde_porte.md`

**La donnée** : les exercices de type "heel drop" (se hausser sur pointes puis relâcher brusquement sur talons) produisent environ **3× le poids du corps** au niveau de la hanche. Bassey & Ramsdale ont documenté un **maintien de la densité osseuse chez femmes ménopausées** pratiquant cet exercice. Seuil ostéogénique : ~2× BW en force de réaction au sol. Fréquences de charge autour de 10-20 Hz stimulent la formation osseuse plus efficacement que des charges basse fréquence.

**Pourquoi c'est structurellement nouveau**

Le pilier **sarcopénie** (§7.1) était le seul pilier clinique dur pour JGH. Il repose sur : type I épargné, soléaire épargné, station debout comme pivot autonomie.

Le pilier **ostéoporose** est un pilier **parallèle et complémentaire**, avec un fit structurel tout aussi propre :
- **Population** : femmes post-ménopause = enjeu de santé publique majeur (fractures fémorales = mortalité et perte d'autonomie), très étudiée cliniquement
- **Mécanisme JP³** : impact talonnier ~3× BW à 10-20 Hz = pile dans la fenêtre ostéogénique documentée
- **Modalité** : station debout stationnaire, pieds-nus, quelques minutes/jour — feasibility clinique élevée (pas d'équipement, pas de risque de chute lié à un déplacement)
- **Métriques dures** : DEXA (densitométrie osseuse) = mesure standardisée, permet essai clinique clean avec critère d'évaluation quantitatif — plus facile à publier qu'un essai sarcopénie
- **Sécurité** : forces bien en-deçà de courses classiques ou pliométrie, mais au-dessus du seuil ostéogénique — sweet spot argumentable

**Recoupements avec le corpus existant**

- **Corde à sauter** (cf. `project_corde_a_sauter_cousine_spu`) — l'"osteogenic loading pour sarcopénie" y était déjà mentionné comme corpus documenté à puiser sélectivement. Le talon-activateur JP³ récupère cet argument en régime plus doux (pas de saut complet, station debout).
- **Sarcopénie voie royale** — les deux piliers ne se cannibalisent pas : une même personne âgée peut avoir sarcopénie ET ostéoporose. Le JP³ adresse les deux **par le même geste**, ce qui est un argument de simplicité clinique.
- **Talon-activateur** — l'effet ostéogénique est intrinsèque à ce mode d'entrée (talon comme point d'impact), il n'exige pas de variante spécifique.

**Sources à consolider**

- **Bassey & Ramsdale** (heel drop, femmes ménopausées) — cité dans Perplexity 2026-09-25. Retrouver la référence exacte et lire l'étude.
- **PMC13541840, PMC11481284** — articles cités par Perplexity sur charge osseuse et fréquences de chargement. À lire.
- **Melioguide "heel drop exercise"** — source pop mais utile comme démonstration que l'exercice a déjà une existence clinique reconnue. Confirme qu'il ne faut pas "inventer" mais **rattacher** JP³ à un exercice connu.

**Stratégie JGH**

**Option 1 — Ostéoporose comme *lead* du deck.** DEXA est plus dur/moins contesté que les mesures sarcopénie fonctionnelles. Un essai pilote ostéoporose serait plus facile à monter et à publier. Pourrait devenir la **porte d'entrée** JGH plutôt que la sarcopénie.

**Option 2 — Deux piliers présentés conjointement.** JP³ comme **intervention double-effet** (sarcopénie + ostéoporose) chez le sujet âgé — attractif parce qu'un seul protocole adresse deux problèmes co-morbides classiques.

**Option 3 — Sarcopénie reste lead, ostéoporose comme "bonus mécanistique".** Plus prudent : ne pas diluer le message. À reconsidérer si les interlocuteurs JGH ont un intérêt affiché pour l'ostéoporose (endocrinologues, rhumatologues, gériatres travaillant sur les fractures).

**Question ouverte**

Le talon-activateur *unipodal* (bondissement sur une jambe) génère probablement des forces beaucoup plus élevées (~4-6× BW ?) — donc **plus ostéogénique** mais moins accessible/plus risqué chez sujet âgé fragile. Y a-t-il un point de compromis : bipodal en début de séance (sécurité, entrée dans la fenêtre ostéogénique) puis quelques bondissements unipodaux calibrés (pic de charge focalisé) ? Corrèle avec `project_warmup_piedsnus_prematch.md` (bondissement unipodal comme test étalon-or RSI>0.5).

---

### §7.3 Depression, anxiety, perceived fatigue

> **source:** `content/en/article.md` §3.2 cas 3, 5, 6

**Cas 3 — The depressed or deeply unmotivated person:** JP³ acts as a **"founding psychological gesture"**, the "first possible act" of behavioral activation. The absence of barriers (no equipment, no judgment) and the ultra-slow "At Your Own Pace" make it possible to break the cycle of inactivity without willpower, offering immediate benefits for emotional regulation.

**Cas 5 — The person suffering from body shame / social anxiety:** The intimacy of "In Your Own Place" completely eliminates social exposure and external judgment. The person can exercise with full confidence, in pajamas if they wish, without worrying about appearance or performance relative to others. This fosters a focus on internal sensations and well-being.

**Cas 6 — The anxious or stressed person who cannot "meditate":** The rhythmic, repetitive "Jogging in Place" movement acts as a **somatic anchor**, helping to redirect attention away from rumination and induce a state of "active meditation" or "flow state" without formal cognitive effort. "At Your Own Pace" (light-to-moderate intensity) produces immediate anxiolytic effects without the risk of the transient anxiety spike associated with intense exercise.

---

### §7.4 CFS / long COVID

> **source:** `content/en/article.md` §3.2 cas 7

**Cas 7 — The person with chronic fatigue (CFS/ME, post-COVID, burnout):** "At Your Own Pace" is essential for strict **pacing**, making it possible to avoid post-exertional crashes. Sessions can be extremely short (a few minutes) and of minimal intensity, increasing very gradually. JP³ offers a way to maintain gentle mitochondrial activation without exceeding aerobic energy capacity, supporting progressive reconditioning.

---

### §7.5 Chronic pain, injury rehab

> **source:** `content/en/article.md` §3.2 cas 8 + `memory/project_malalignment_syndrome_schamberger.md`

**Cas 8 — The person recovering from a minor injury or post-surgery (with medical clearance):** The controlled, low-impact "Jogging in Place" movement allows for safe rehabilitation. "At Your Own Pace" ensures intensity is always within the tolerance zone. Strengthening the soleus and improving proprioception are crucial to restoring function and preventing future injury—all in an environment free of the risk of falls or collisions.

**Cas clinique Perig — Malalignment Syndrome (Schamberger)**

**Nom clinique du pattern** : **Malalignment Syndrome** décrit par Wolf Schamberger — combinaison de **rotation postérieure innominée gauche** (retrait vers l'arrière de la jambe) + **outflare gauche** (rotation externe du pied, écartement des jambes). Extrêmement fréquent (rotation innominée : 80–85% des déséquilibres pelviens ; outflare/inflare : 40–50%). Diagnostic manuel par palpation comparative des repères pelviens (EIAS, EIPS, crête iliaque, pubis) et test assis-couché.

**Mécanisme signature confirmé** : la chute jambe-piège dans un trou à 14 ans (documentée mémoire racine SI instability) correspond **exactement** au mécanisme lésionnel le plus fréquemment cité — force de torsion asymétrique en cisaillement sur la SI du côté de la jambe piégée → entorse SI traumatique → laxité résiduelle permanente si non traitée précocement → schéma compensatoire s'installe comme nouvelle norme posturale sur 35 ans. Cas documenté PMC : 14 ans de dysfonction récurrente traitée avec succès — chronicité ancienne reste réversible.

**Correction — Technique d'Énergie Musculaire (MET) Schamberger** :
- *Rotation postérieure gauche* : thérapeute résiste à la flexion active de hanche gauche → contraction isométrique iliaque + droit fémoral → traction antérieure sur l'ilion gauche. Variante par effet de levier : extension passive du fémur jusqu'à butée acétabulaire postérieure.
- *Outflare gauche* : thérapeute résiste à l'abduction/rotation externe active du genou gauche partiellement fléchi → inverse fonctionnellement origine/insertion piriforme + grand fessier → pivot antérieur de l'ilion dans le plan horizontal.
- Ordre : traiter les deux dans la même séance, revérifier après chaque correction.

**Ceinture SI** : la ceinture stabilise (compression → *force closure*) mais **ne corrige PAS la position asymétrique**. Piège critique documenté : sans alignement préalable, la ceinture *verrouille la mauvaise position*. Méthode juste : activer stabilisateurs (coussin entre genoux, contraction fessiers debout) avant fixation, puis positionner juste au-dessus du grand trochanter et sous EIAS (≈2 pouces d'espace). Trop large → presse la partie la plus large du bassin, *peut aggraver l'outflare*. Recommandation Schamberger : MET d'abord, ceinture juste après pour maintenir le gain.

**Corrections d'interprétations antérieures** :
- *Appui préférentiel gauche* ≠ « droitier standard » — c'est une **compensation SI** : le corps charge le côté instable pour rapprocher les surfaces articulaires et le stabiliser (Schamberger). Interprétation précise, pas latéralité banale.
- *Rotation externe pied gauche seule* → n'est qu'un signe visible de surface ; le patron réel est pelvien (outflare + rotation postérieure innominée), pas un problème de pied.

**Débat scientifique à connaître** : Sturesson et al. mesurent un mouvement SI très faible (≈2,5° rotation, 0,7 mm translation) et aucune différence entre articulations symptomatiques et asymptomatiques → remise en cause de la capacité à palper/corriger manuellement une « position ». Le modèle Schamberger coexiste avec cette réserve sans consensus tranché. À porter honnêtement quand on présentera ce cadre à un professionnel — pas comme dogme.

**Action recommandée** : évaluation directe du bassin par ostéopathe ou physio **formé au modèle Schamberger** (pas juste ostéo générique). À rappeler proactivement au prochain RDV médecin famille JGH — cadre à mentionner par nom, avec référence à la chute, pour orienter l'ordonnance.

**Pointeur document Perplexity** : `facts/perplexity-malalignment-schamberger-2026-09-28.md` — conversation complète en 6 tours avec Perplexity le 2026-09-28 : identification du syndrome, corrections MET détaillées, vidéos (YouTube + Michigan State University College of Osteopathic Medicine), lien instabilité SI + laxité, mécanisme chute, ceinture SI. Contient 26+ références académiques et cliniques.

---

### §7.6 Pediatric and adolescent

> **source:** *à développer — pas de source consolidée en mémoire à ce jour*

Section en attente de matériau. L'extension JP³ à l'adolescent (sédentarité scolaire, lien avec l'école primaire et le lycée, intégration à la pause déjeuner, variante "furtif" en chambre pour l'ado qui refuse l'exposition sociale corporelle) est à construire en lien avec un terrain. Candidat naturel : école ou clinique pédiatrique via introduction JGH.

---

### §7.7 Pregnancy and postpartum

> **source:** *à développer — pas de source consolidée en mémoire à ce jour*

Section en attente de matériau. Angles plausibles à documenter : (1) grossesse — alternative à la marche extérieure quand mobilité/équilibre deviennent limitants, régime spring-mass doux adapté, degré zéro accessible jusqu'au terme ; (2) postpartum — récupération plancher pelvien, remise en charge progressive, intégration avec soin nourrisson (bébé porté, pendant sieste). À documenter en lien avec kinésithérapeute périnatal.

---

### §7.8 Neurodegenerative (Parkinson, early cognitive decline)

> **source:** `content/fr/research-mecanismes.md` §3.4.5 RAS/Parkinson (lignes 219-226)

#### Preuve par la pathologie — Parkinson et Rhythmic Auditory Stimulation

La **RAS** (Rhythmic Auditory Stimulation, développée par Thaut) utilise un métronome ou de la musique pour restaurer la marche chez les patients Parkinson. Mécanisme documenté : la RAS **bypasse les ganglions de la base défaillants** via les voies **cérébelleuses** (revue 2025).

Extrait :
> *"Music therapy provides external rhythmic stimulation, recruits neural networks to bypass the basal ganglia and synchronizes gait with external rhythms through auditory-motor neural networks."*

Cette preuve par la pathologie est puissante : elle démontre que **le rythme est un mécanisme régulateur primaire**, capable de compenser une défaillance neurologique majeure. Si le rythme peut restaurer la marche d'un parkinsonien, on peut raisonnablement supposer qu'il peut resynchroniser un cerveau simplement fatigué ou stressé.

**Application JP³** : le pattern rythmique spontané du régime spring-mass ankle-dominant (fréquence propre de rebond ~2-3 Hz) fournit un entraînement locomoteur-rythmique à domicile, sans la contrainte du déplacement (risque de chute écarté par le "In Place"). Pour le patient Parkinson, JP³ pourrait servir de rail rythmique quotidien, cumulatif, administré à l'autonomie du patient — complémentaire aux séances supervisées de physiothérapie-RAS.

---

### §7.9 Metabolic (T2D, prediabetes) — forward-ref §4.3

> **source:** `content/en/article.md` §3.2 cas 1, 4, 9 + forward-ref §4.3 (bénéfices multi-domaines métaboliques)

**Cas 1 — The "hyper-busy" person:** The "Jogging in Place × In Your Own Place" synergy enables **seamless integration** with household tasks (dishes, laundry, reading). Exercise is no longer a "waste of time" but a "productivity amplifier." **Micro-bouts** (2–5 minutes) are ideal for turning downtime into productive movement sessions.

**Cas 4 — The overweight or obese person:** The low-impact "Jogging in Place" movement reduces joint stress, allowing exercise without excessive pain. "At Your Own Pace" enables a progression in which intensity is always matched to current capacity, avoiding injury and discouragement. **Maximal proprioceptive feedback** (barefoot, mirror) helps correct dysfunctional gait patterns reinforced by thousands of incorrect repetitions.

**Cas 9 — The person with chronic sleep debt or in stimulant withdrawal:** JP³ helps **reconnect with the body's fatigue signals** and regulate emotions, which can foster more restorative sleep. By avoiding overexertion (thanks to "At Your Own Pace"), it supports recovery and recalibration of the nervous system.

**Forward-ref §4.3** : bénéfices métaboliques détaillés — HbA1c, soleus pump, glycémie postprandiale, famille SPU (Hamilton), régime tonique-oxydatif non-fatigant compatible avec usage quotidien pluriquotidien.

---

## § 8. Discussion

**TOC §8**
- §8.1 Paradigm shift *(migrated from article.md §5.1)*
- §8.2 Comparison with adjacent practices *(migrated from article.md §5.2; `research-singularite` §2–3 matrice complète; jump-rope cousin, slow jogging, mindful walking)*
- §8.3 Limitations and open questions *(migrated from article.md §5.3)*
- §8.4 Implications for clinical practice — JGH as first live test *(migrated from article.md §5.4; `project_jgh_presentation_voie`)*
- §8.5 Research agenda
  - §8.5.1 Hamilton outreach — soleus push-up continuity (`project_version_article_hamilton`)
  - §8.5.2 Open empirical questions *(migrated from article.md §5.5)*
  - §8.5.3 The `.ada` format as native anti-hallucination carrier

### §8.1 Paradigm shift

> **source:** `content/en/article.md` §5.1

JP³ is not merely a new exercise modality; it represents a break with the traditional paradigms of physical activity promotion, which are often centered on intensity, performance, outdoor environments, or discipline.

- **Against "No Pain, No Gain" and the Intensity Bias:** Fitness culture glorifies intensity (HIIT, exhaustion) and physical challenges. JP³, through "At Your Own Pace" and its ultra-slow start, contradicts this notion. It proves that an intensity perceived as "too easy" or "boring" at first is actually the key to **extended duration and sustainable adherence**, enabling physiological and psychological benefits to be reached without the pressure of performance.
- **Overcoming Psychological and Social Barriers:** The synergy of the "three P's" eliminates the major obstacles that keep the majority of people from exercising: the need to change clothes, travel, pay, face social judgment, or feel exposed. This **radical psychological accessibility** is a key innovation, enabling entire populations (body shame, social anxiety, deep demotivation) to engage in physical activity for the first time or in a sustained way.
- **Integration and Productivity:** Unlike forms of exercise that require dedicated, separate time, JP³ turns "lost" time (household chores, waiting, sedentary work) into physical activity time. It becomes a "task multiplier" and a daily working tool, improving concentration and creativity.

---

### §8.2 Comparison with adjacent practices

> **source:** `content/en/article.md` §5.2 + `content/fr/research-singularite.md` §2–3 matrice complète

**Article §5.2 — Comparison with Other Similar Approaches**

Although jogging in place or walking in place already exist, JP³ stands apart through its synergistic conceptualization and specific foundations:

- **Differentiation from Walking in Place:** Walking in place is often used for functional mobility or warm-up. JP³, with its focus on self-regulated "Pace," barefoot practice, and the goal of emotional regulation and sustained metabolic activation, goes far beyond a simple functional exercise. It targets deeper neurophysiological and biomechanical mechanisms.
- **Differentiation from Exercise-as-Chore:** Many interventions aim to "motivate" people to exercise. JP³ aims to make exercise intrinsically rewarding and frictionless, capitalizing on boredom as the driver of increased intensity and on neurochemical release to create a euphoric experience—the "runner's high."

**Research-singularite §2 — dépouillement par famille (verbatim FR)**

Neuf pratiques et courants ont été investigués (recherche web dédouble, citations directes). Ils se regroupent en quatre familles selon leur mode de convergence potentielle avec JP³.

#### 2.1 Rivaux locomoteurs — la famille la plus proche

**2.1.1 Slow jogging (Hiroaki Tanaka, "niko-niko pace") — rival majeur**

Méthode d'exercice japonaise développée par le Pr Hiroaki Tanaka (Fukuoka University). Le protocole tient en une phrase : *courir aussi lentement qu'on puisse tenir un sourire* ("niko niko" = sourire). Intensité ~50% VO2 max. Frappe mid-foot. Aucune cadence prescrite, aucun FC cible, aucune montre requise.

Citation-clé (Magical Shoes / NFPT) :
> *"Niko niko pace encompasses what Tanaka considers a smiling cadence that helps lower blood pressure while boosting fitness. Tanaka's theory: Run only as fast as your body lets you smile. For most beginners it means jogging at a walking pace."*

Positionnement A/B/C : A ✓ · B ✓ · C ~ (plateau niko-niko, pas trajectoire x³)

Convergences avec JP³ : lenteur radicale, feedback non-métrique, doctrine anti-"no pain no gain", intention de "déplaisir zéro", ancienneté. Divergences : **déplacement spatial** vs. verticalité pure ; codification "niko niko" vs. protocole anonyme ; visée souvent progressive vs. absence totale de destination.

**Verdict** : rival le plus sérieux. **Sur les axes A et B, slow jogging est quasi-équivalent à JP³.** La divergence "in place vs. déplacement" est matérielle mais non-décisive du point de vue du dispositif d'accès.

**2.1.2 Marching in place (protocole physiothérapie / ACSM) — précédent institutionnel**

Marche sur place prescrite dans les protocoles de réhabilitation et de fitness grand public. A ✓✓ · B ~ · C ✓ (dosé, plafonné). Précédent institutionnel le plus proche de JP³ sur les 3 P mais reste encadré, protocolisé.

**2.1.3 Walk at Home (Leslie Sansone) — précédent commercial**

Franchise fitness US. Marche sur place vidéo avec coach. A ~ · B ✗✗ · C ✗. Satisfait 2 des 3 P mais échoue sur "at your own pace" (tempo imposé) et maintient une métrique forte.

**2.1.4 Rebounding / mini-trampoline — fausse proximité**

Saut vertical sur mini-trampoline. A ~ · B ✗ · C ✗. L'équipement interfère avec l'écoute du corps et supprime les foot-strike waves.

**2.1.5 Chi Running (Danny Dreyer) — convergence philosophique, divergence structurelle**

Principes Tai-chi appliqués à la course. A ~ · B ✗ · C ✗. Cadence prescrite (170-180 pas/min) = paradigme métrique même si "mindful".

#### 2.2 Rivaux méditatifs — parents lointains

**2.2.1 Kinhin (zen)** — A ✓ · B ✓ · C ~ — faux ami structurel, intensité physique quasi-nulle.
**2.2.2 Mindful walking (MBSR, Kabat-Zinn)** — A ~ · B ✓ · C ~ (réfute plutôt) — 23-61% dropout chez déprimés.
**2.2.3 Tai-chi** — A ✓ · B ✓ · C ~ — concurrent sérieux A/B, réfute C (pas inversion épistémologique).
**2.2.4 Qi-gong** — A ✓ · B ✓ · C ✗ — aucune donnée en dépression sévère.
**2.2.5 Feldenkrais / Alexander** — A ~ · B ✓ · C ✗ — faux amis, cognitifs, intensité physique quasi-nulle.

#### 2.3 Rivaux philosophiques — courants récents anti-métriques

**2.3.1 Intuitive Exercise / Intuitive Movement** — A ✓ · B ✓✓✓ · C ✓✓ — cadre large, pas vertical ni spécifique. JP³ comme instanciation cardiovasculaire spécifique.
**2.3.2 Joyful Movement** — A ✓ · B ✓✓✓ · C ✓✓ — cadre philosophique large popularisé TikTok/Instagram depuis 2023.
**2.3.3 "Quiet fitness" / "Slow fitness"** — tendance d'industrie post-COVID, pas précédent codifié.

#### 2.4 Rivaux "populations à haut seuil d'entrée" — le vrai gisement conceptuel

**Découverte majeure** : la classe conceptuelle "exercice praticable depuis l'état détruit" existe dans la littérature, fragmentée en silos disjoints sans terminologie unifiée.

**2.4.1 Pacing (ME/CFS, Long COVID) — Energy Envelope Theory (Leonard Jason)**

Principe : rester en-dessous du seuil d'exacerbation symptomatique (PEM). PACELOC trial (2024-2025) : réduction 15%/semaine de fréquence des crashes. WHO et NICE : GET non recommandé/contre-indiqué en PEM. Convergence forte avec JP³ (écoute intéroceptive sous seuil, rejet intensité, effets par durée). Divergence : très prudent (sub-marche), hautement cognitif. **Point d'articulation** : si JP³ fonctionne en dépression, ce n'est pas comme GET — c'est comme pacing.

**2.4.2 Behavioral Activation (dépression — Jacobson, Martell, 2001+)**

"Change will be easier when starting small". Décomposition en étapes atomiques. **Verdict** : **JP³ peut être décrit comme l'instanciation cardiovasculaire du principe BA**.

**2.4.3 Minimum Effective Dose (Fisher, Steele)** — force training, divergence : dédié force, hautement dosé.

**2.4.4 Chair-based cardio / seated aerobics (gériatrie)** — A ✓✓✓ · B ~ · C ✓✓✓ — divergence critique : pas vertical (centrale pour perfusion pulsée).

**2.4.5 Daoyin adaptatif (TCM classique — 2000+ ans)** — *"reinforcing Daoyin for deficient people, treating Daoyin for people who are ill"*. Point d'ancrage historique.

**2.4.6 NEAT (Levine, Mayo Clinic)** — A ✓✓✓ · B ✓ · C ✓✓✓ — dispersé (pas protocole localisé), non-vertical structurellement.

#### 3. Matrice synthétique — les 3 axes contre les 21 pratiques

| Pratique | A | B | C (x³) | Verticalité | Cardio | Précédent | Dépression sévère |
|---|:---:|:---:|:---:|:---:|:---:|:---:|:---:|
| **JP³ (hypothèse)** | ✓✓✓ | ✓✓✓ | ✓✓✓ | ✓ | ✓ | **NON** | À tester |
| Slow jogging (Tanaka) | ✓ | ✓ | ~ | ✗ | ✓ | Oui | Non |
| Marching in place (physio) | ✓✓ | ~ | ~ | ✓ | ✓ | Oui | Non |
| Walk at Home | ~ | ✗✗ | ✗ | ✓ | ✓ | Oui | Non |
| Rebounding | ~ | ✗ | ~ | ✓ | ✓ | Oui | Non |
| Chi Running | ~ | ✗ | ~ | ✗ | ✓ | Oui | Non |
| Kinhin | ✓ | ✓ | ✗ | ~ | ✗ | Oui | Non |
| Mindful walking (MBSR) | ~ | ✓ | ✗ | ✗ | ✗ | Oui | Oui — dropout ↑ |
| Tai-chi | ✓ | ✓ | ~ | ~ | ~ | Oui | Oui — effet oui, C non |
| Qi-gong | ✓ | ✓ | ~ | ~ | ~ | Oui | Non |
| Feldenkrais / Alexander | ~ | ✓ | ✗ | ~ | ✗ | Oui | Non |
| **Intuitive Exercise** | ✓ | ✓✓✓ | ~ | ✗ | ~ | Oui | Non |
| **Joyful Movement** | ✓ | ✓✓✓ | ~ | ✗ | ~ | Oui | Non |
| Peloton / digital fitness | ✗✗ | ✗✗✗ | ✗ | ~ | ✓✓ | Oui | Non |
| Fitness snacks (Gibala) | ~ | ✗ | ✗ | ~ | ✓✓ | Oui | Non |
| Zone 2 (San Millán / Attia) | ✗ | ✗ | ✗ | — | ✓✓ | Oui | Non |
| Warm-up conventionnel | ~ | ✗ | ✗ | — | ~ | Oui | Non |
| NEAT | ✓✓✓ | ✓ | ✗ | ✗ | ~ | Oui | Non |
| Chair-based cardio | ✓✓✓ | ~ | ~ | ✗ | ~ | Oui | Non |
| **Pacing (ME/CFS)** | ✓✓ | ~ | ✗ | ✗ | ~ | Oui | Oui (CFS, Long COVID) |
| **Behavioral Activation** | ✓ | ✓ | ✓ | ~ | ~ | Oui | Oui |
| Minimum Effective Dose | ~ | ✗ | ✗ | ✗ | ✗ | Oui | Non |
| Daoyin adaptatif (TCM) | ✓ | ✓ | ~ | ~ | ~ | Oui (2000 ans) | Non |

**Lecture** : aucune pratique ne combine A + B + C x³. JP³ est le seul candidat au triplet complet.

**Verdict honnête — §4.4 research-singularite : JP³ comme point de synthèse trans-silo** — pas un mécanisme nouveau, mais une **cristallisation** de principes dispersés (inversion épistémologique du pacing, "starting small" de la BA, minimum viable du MED, écoute non-métrique de l'intuitive movement, verticalité pulsée de la course lente, accessibilité radicale du Daoyin adaptatif) en un dispositif praticable.

---

### §8.3 Limitations and open questions

> **source:** `content/en/article.md` §5.3

Despite its advantages, JP³ has certain limitations and requires clinical considerations:

- **Formal Empirical Validation:** Although JP³ draws on well-established scientific principles (soleus physiology, Zone 2, proprioception, behavioral activation), its validation as an integrated protocol requires controlled clinical studies.
- **Overload Potential:** Although "At Your Own Pace" minimizes this risk, individuals with specific medical conditions (e.g., uncontrolled cardiac disorders, certain acute injuries) should always consult a healthcare professional before starting. The risk of Post-Exertional Malaise (PEM) in patients with chronic fatigue must be managed with extremely careful pacing.
- **Perceived Monotony:** For some, the repetitive nature of jogging in place may initially generate boredom. However, experience shows that this boredom is often transient and turns into a driver of optimization or an opportunity for a "flow state."
- **Environmental Quality:** Although "In Your Own Place" is an advantage, an unsafe environment (slippery floors, clutter) or an excessively noisy one could detract from the experience.

**Open empirical questions (consolidées) :**

- Tanaka a-t-il testé slow jogging en dépression sévère ou état détruit ? (Pas trouvé en recherche 2026-08-15 ; à vérifier plus finement.)
- "Slow jogging pratiqué sur place" est-il déjà une variante nommée par Tanaka ou ses successeurs ?
- **Aucun silo ne teste directement l'hypothèse que l'état détruit *facilite* l'entrée** (axe C trajectoire x³). Si JP³ était empiriquement validé sur ce point, ce serait une contribution scientifique originale indépendamment des mécanismes physiologiques (déjà connus).

---

### §8.4 Implications for clinical practice — JGH as first live test

> **source:** `content/en/article.md` §5.4 + `memory/project_jgh_presentation_voie.md`

**Article §5.4** : JP³ offers significant opportunities for various healthcare professionals:

- **General Practitioners and Geriatricians:** A simple tool to prescribe to counter sedentariness, prevent falls, and improve metabolic health, even in frail or poorly mobile patients.
- **Psychiatrists and Psychologists:** A powerful behavioral-activation modality for depression and anxiety, offering immediate emotional benefits and improved adherence.
- **Physiotherapists and Occupational Therapists:** A rehabilitation protocol for foot function, proprioception, and balance, adaptable to different phases of recovery.
- **Exercise Specialists:** An innovative approach for reaching populations far removed from exercise and for integrating physical activity into daily life in a sustainable way.
- **AI Coaching Potential:** The integration of AI prompts offers a scalable solution for personalizing coaching, improving protocol fidelity, and supporting self-regulation, making JP³ applicable at scale.

**Voie stratégique JGH (fiche project_jgh_presentation_voie, 2026-08-17)**

Perig a révélé le 2026-08-17 que sa **médecin de famille**, qui travaille à l'**Hôpital général juif de Montréal** (Sir Mortimer B. Davis Jewish General Hospital / HGJ / JGH), lui a offert de l'aider à **présenter son travail sur JP³ à l'hôpital**. Formulation : *"j'ai complètement oublié de dire que mon médecin de famille qui travaille à l'hôpital juif de Montréal m'a dit qu'elle allait m'aider à présenter mon travail à l'hôpital. il est là le chemin."*

**Pourquoi le JGH est un terrain particulièrement fertile :**

1. **Institution académique affiliée McGill** avec le **Lady Davis Institute for Medical Research** — recherche substantielle en vieillissement et métabolique.
2. **Division de médecine gériatrique active** — la thèse "JP³ voie royale sarcopénie" (§7.1) tombe pile dans leur champ d'intérêt clinique.
3. **Environnement bilingue** — correspond au contexte francophone/anglophone de Perig.
4. **Écosystème clinique diversifié** — endocrinologie, cardiologie, médecine interne, médecine familiale coexistent.

**Format livrable** : deck 30-45 min (grand rounds ou seminar interdépartemental) + éventuellement one-page brief pour circulation préparatoire. Article existant reste référence de fond.

**Structure suggérée pour le deck :**

1. **Le trou clinique** : fragilité + problème de compliance à la musculation chez la personne âgée → non-couvert par les approches existantes.
2. **Le fit physiologique** : sarcopénie épargne préférentiellement type I / soléaire préservé / station debout = pivot autonomie / JP³ recrute exactement ce qui reste.
3. **Le dispositif** : brève description JP³, degré zéro, auto-enforcement postural, 3 P.
4. **Placement dans l'écosystème thérapeutique** : amorçage complémentaire, pas substitut à la musculation ni aux protéines. Progression clinique SPU assis → JP³ appuyé → JP³ autonome.
5. **Proposition concrète** : pilote de faisabilité, étude observationnelle chez patients gériatriques du JGH, ou collaboration ciblée à définir selon l'intérêt.
6. **Ce que Perig apporte / ce qu'il demande** — question ouverte, format d'engagement discuté.

**Enrichissement 2026-09-25 — deux ajouts substantiels** :
1. **Ostéoporose comme seconde porte parallèle à sarcopénie** (§7.2). Talon-activateur JP³ génère ~3× BW à 10-20 Hz (Bassey & Ramsdale), pile dans la fenêtre ostéogénique. DEXA = métrique dure.
2. **Argument adhérence renforcé par le régime incident** (§5.6). "10 min matin et soir" est un mur pour beaucoup ; le régime incident propose quelques chocs de talon à chaque passage à la cuisine — protocole diffus, quasi-gratuit décisionnellement.

**Anti-scope** : ne PAS présenter comme "j'ai découvert un traitement pour la sarcopénie". Formulation cible : *"un dispositif candidat, avec un fit structurel prometteur pour cette population, qui mérite une évaluation pilote"*.

**Réordonnancement de la stratégie phasée :**

1. **JGH présentation** (semaines/mois qui viennent, avec la médecin de famille) → écho, questions, partenaires de recherche potentiellement identifiés
2. **Pilote institutionnellement facilité** — si le JGH accroche, un pilote CGM ou observationnel devient beaucoup plus faisable.
3. **Hamilton** avec appui institutionnel réel (co-signature d'un chercheur du Lady Davis ou de gériatrie), pas cold outreach.

---

### §8.5 Research agenda

#### §8.5.1 Hamilton outreach — soleus push-up continuity

> **source:** `memory/project_version_article_hamilton.md`

**Action à réaliser** : créer une version dédiée de l'article JP³ (en plus de la version publique standard) conçue pour une **prise de contact directe avec Marc Hamilton** — l'auteur du Soleus Pushup (SPU, iScience 2022) — et lui proposer une collaboration.

Formulation exacte de Perig (2026-08-17) : *"à noter : créer une version de l'article expressément pour demander une collaboration avec Hamilton."*

**Why:** Le cluster de recherche 2026-08-15/17 a fait émerger que JP³ est probablement un **membre de la famille SPU en régime debout** (`project_famille_spu_via_negativa.md`, §6.2), avec plusieurs ajouts que le SPU sacrifie par design :
1. Auto-enforcement postural (adresse la dépendance au feedback EMG identifiée par les réplications Kraemer 2024, Yuwono 2025)
2. Engagement de la chaîne posturale profonde (§4.1)
3. Accessibilité motivationnelle (envie de sortir, jamais assis devant un écran)
4. Composante cardio modérée (hypothèse de potentiation métabolique)

**Ce que la version dédiée doit contenir :**

- **Cadre d'ouverture** : reconnaissance explicite du travail de Hamilton comme fondation ; positionnement de JP³ comme extension de la famille SPU, pas comme dispositif rival.
- **Formulation via negativa** : SPU et JP³ partagent un noyau négatif de design (exclusion de la musculature phasique-glycolytique fatigable) ; diffèrent sur les positifs (isolation par flexion du genou vs auto-enforcement postural).
- **Les 3 additions de JP³** présentées comme complémentaires au programme SPU plutôt que comme corrections.
- **La question ouverte de la potentiation cardio** : formulée comme hypothèse testable, en reconnaissant explicitement que Hamilton lui-même a montré que l'effet SPU est indépendant du débit cardiaque.
- **Proposition d'étude concrète** : OGTT crossover à 4 bras (sitting / SPU assis / calf raises debout / JP³ ultra-léger sous 2,5 METs), monitoré EMG soléaire vs gastrocnémien vs vaste latéral, postprandial 3h, glucose + insuline + VLDL. ~30 sujets, faisable en ~1 an.
- **Positionnement de complémentarité** : le programme Hamilton établit la physiologie ; JP³ apporte une doctrine d'usage phénoménologique et une accessibilité motivationnelle qui pourraient faciliter l'adoption publique des trouvailles SPU.

**Format** : fichier séparé dans `content/en/` (Hamilton lit en anglais), pas dans les articles publiés du site. Peut-être `content/en/collaboration-proposal-hamilton.md`, non lié depuis le site public, envoyé par courriel avec PDF/lien. Contact : Marc T. Hamilton, University of Houston, affilié au Texas Obesity Research Center.

**Anti-scope** : cette version dédiée n'est pas un article scientifique à soumettre pour publication ; c'est un **document de prise de contact**. Différent registre, différentes attentes.

#### §8.5.2 Open empirical questions

> **source:** `content/en/article.md` §5.5

- **Clinical Efficacy Studies:** Randomized controlled trials are needed to quantify the benefits of JP³ in specific cohorts (e.g., older adults, depressed patients, people with CFS).
- **Biomarkers and Mechanisms:** Further explore changes in metabolic biomarkers (glucose, lipids), stress hormones, neuroplasticity markers (BDNF), and soleus activity.
- **AI Impact:** Evaluate the effectiveness of AI prompts in improving adherence, personalizing the protocol, and clinical outcomes.
- **Comparison with Other Interventions:** Compare JP³ with other forms of light/moderate exercise or with meditation interventions to assess its superiority or complementarity.
- **Proprioception and Balance Measures:** Use objective tools to measure improvements in proprioception and balance with barefoot practice.

**Test empirique minute-par-minute (research-singularite §1.2.7)** : à *t = 5 min*, JP³ values de HR, HRV, et énergie subjective sont **inférieures** à une session Zone 2 appariée (concavité positive) ; à *t = 20–30 min*, elles sont **supérieures** (dépassement durable) ; la trace d'énergie subjective est **monotone croissante** (contra Zone 2). Si la prédiction tient, la trajectoire cubique cesse d'être une analogie et devient une observation.

**Étude JGH sarcopénie qui trancherait** : essai contrôlé randomisé chez adultes ≥75 ans, MMSE > 24, autonomes, sur 12 semaines. Bras : soin usuel / SPU seul / JP³ seul / SPU+JP³. Mesures : STS, vitesse de marche 4m, préhension, masse musculaire par DEXA, HbA1c, questionnaire fragilité. ~120 sujets.

#### §8.5.3 The `.ada` format as native anti-hallucination carrier

> **source:** à développer — pointeur `drafts/jp3-resume-ada.md`

Section en attente de rédaction consolidée. Thèse de travail : le format `.ada` (voir `~/projects/ada-format/`) sert de **porteur natif anti-hallucination** pour les contenus JP³ dérivés — notamment pour les leaflets patient et les prompts agent, où la fidélité au framework compte plus que la variation stylistique. À approfondir avec Perig.

---

## § 9. Conclusion

<!-- SECTION-9-CONTENT -->

---

## References

Full traceability format (`PILOTE-refs.md` policy). Grouped by section.

<!-- REFERENCES-CONTENT -->

---

## Appendices (derivations, pointers only — not included in manual body)

- **Annex A** — pointer to `drafts/jp3-resume-ada.md` (reader portals, popular derivation)
- **Annex B** — pointer to JGH deck (clinical derivation, to be built)
- **Annex C** — pointer to `.ada`-encoded version (adaptive derivation)
