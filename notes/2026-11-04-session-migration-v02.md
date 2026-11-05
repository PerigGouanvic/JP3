# Brief de passation — migration massive MANUAL.md

**Écrit** : 2026-11-04 19h20, session courante bientôt close (quota session 5h à 82%, reset dans 2h29 ; quota semaine à 71% ; fenêtre weekly-boucle active jusqu'à jeudi 2h).

## Mandat durable (verbatim Perig, deux fois dans la session)

> « Ce soir nous avons énormément de crédits alors je voudrais qu'on rattrape c'est-à-dire en allant mettre tout tout dans le grand document central. Ce n'est vraiment pas important d'avoir quelque chose d'homogène l'important c'est que tout le contenu soit dedans. »
>
> « Un seul fichier pour tout que l'on va parcourir de la manière habituelle avec des sections et une table de matière ou plusieurs tables des matières, par section. Tout copier dedans en effet y compris les fiches mémoires. Pour la manière de procéder fait au mieux. »
>
> « Je répète: tu as TOUT ce qu'il te faut, on peut consommer TOUS les crédits »

**Traduction opérationnelle** : verser dans `content/en/manual/MANUAL.md` tout le contenu dispersé (article.md EN/FR, research-singularite.md, research-mecanismes.md, fiches mémoire `~/.claude/projects/-home-perig-projects-jp3/memory/*.md`, facts/, drafts/ pertinents). Brut, pas de traduction, pas de réécriture, chaque bloc avec `> **source:** <chemin>` pour traçabilité. Pas d'interrogation, pas de proposition — exécuter.

## État d'avancement

**Fait et committé** :
- Architecture squelette + placeholders `<!-- SECTION-N-CONTENT -->` déjà en place dans MANUAL.md (hérité de 2026-10-08)
- **§3 Noyau multiplicatif — DONE** — commit `109ad43` *Migrate §3 Noyau multiplicatif + facts/ propulsion géométrique 2026-11-04* (2 fichiers, 636 insertions)
  - §3.1 Place × Pace (article.md §2.1.1)
  - §3.2 intro (article.md §2.1.2)
  - §3.2.1 Soleus (article.md §2.2.1, avec note correction PILOTE-refs)
  - §3.2.2 Heel activator (fiche talon-activateur + enrichissement Perplexity 2026-11-04 propulsion géométrique)
  - §3.2.3 Back chain dominance (fiche back_chain)
  - §3.2.4 Incident regime (fiche jp3_incident)
  - §3.3 In Place × Pace (article.md §2.1.3)
  - §3.4 Confluence — quatre stratifications (théorique / cinématique / anatomique / temporel-doctrinal)
- `facts/perplexity-propulsion-geometrie-heel-2026-11-04.md` ajouté au commit (préexistant, non committé)

**À faire, dans l'ordre établi** :
1. **§4 Mécanismes physiologiques** (prochain, sources déjà lues en RAM — voir plus bas)
2. §2 Les trois P (article.md §1 + fiches 3P)
3. §5 Protocole (research-singularite §4.6-5 + article.md §3)
4. §6 Doctrine (research-singularite §6 + fiches doctrinales)
5. §7 Cas appliqués (article.md §3.2 + fiches sarcopénie/ostéoporose/JGH)
6. §1 Intro (article.md début + `drafts/01.2-cubic-trajectory.md` à vérifier)
7. §8 Discussion + §9 Conclusion + Références
8. Commit final de la migration massive

## §4 — sources lues (en RAM session courante mais perdues après compaction suivante)

**Fiches mémoire lues** :
- `project_chaine_posturale_profonde.md` — thèse unifiée, muscles-ponts, 5 propriétés, citations (Hamilton SPU, Bramble & Lieberman, Hodges TA, Falla DNF, Hides multifides)
- `project_nigg_muscle_tuning.md` — impact = signal pas trauma ; Nigg BM CJSM 2001 ; paire théorique Robbins
- `project_warmup_piedsnus_prematch.md` — Robbins discomfort-impact illusion ; EMG pre-activation +10-24% pieds-nus ; Pacini bandpass 20-1000 Hz ; bondissement unipodal RSI > 0.5
- `project_geometrie_chasse_neige_goata.md` — trépied asymétrique, pieds droits = déroulé séquentiel, toes-in = synchronisation latéro-médiale
- `project_axe_frontal_moyen_fessier.md` — moyen fessier plan frontal, dormant hip syndrome Sahrmann
- `project_tibialis_anterior_co_contraction.md` — TA prérequis spring-mass, co-contraction Knutson & Söderberg EMG heel-strike
- `project_fascia_hypothese.md` — 5 propriétés fasciales ; Schleip / Myers / Stecco ; angle sous-mesuré
- `project_ankle_dominant_regime.md` — spring-mass soléaire ~80-90% type I ; McMahon & Cheng 1990 ; Roberts et al. 1997 Science ; Kram & Taylor 1990 Nature ; Ekkekakis VT1
- `project_osteogenic_jgh_seconde_porte.md` — ~3× BW à hanche, Bassey & Ramsdale heel drop, seuil 2× BW et 10-20 Hz

**Documents lus** :
- `/home/perig/projects/jp3/content/fr/research-mecanismes.md` (574 lignes) — Falkenhain eLife 2023, Lohman/NMHU Wasson FASEB 2012 (CBFv +39%), Yoon Nature Comm 2025 glymphatic, Goyal 2020 Bush 2017 theta hippocampique humain, Buzsáki hiérarchie, LC, ISO thalamiques, Deco metastable modes, trigger points analogy, H1-H5 + recadrage §4
- `/home/perig/projects/jp3/content/en/article.md` (471 lignes) — §2.2.1 soleus, §2.2.2 Zone 2/MAF, §2.2.3 proprioception pieds nus

## §4 — composition proposée (TOC déjà dans MANUAL.md)

Remplacer `<!-- SECTION-4-CONTENT -->` (~ligne 370) par :

- **§4.1 Muscular layer — deep postural chain**
  - §4.1.1 Soleus (fiche ankle_dominant + article.md §2.2.1 — note : peut dédoubler avec §3.2.1, c'est OK en migration brute, harmoniser plus tard)
  - §4.1.2 Tibialis anterior (fiche TA complète)
  - §4.1.3 Glutei, DNF, multifides, TA transverse, diaphragm (fiche chaîne posturale profonde)
  - §4.1.4 Fascia (fiche fascia)
- **§4.2 Biomechanical layer**
  - §4.2.1 Perry's three rockers + Nigg muscle tuning (fiche Nigg complète)
  - §4.2.2 Barefoot pre-activation (fiche warmup_piedsnus_prematch complète — mécanisme unifié trois corpus Robbins/EMG/Pacini)
  - §4.2.3 Chasse-neige geometry (fiche chasse_neige_goata complète)
  - §4.2.4 Frontal plane moyen fessier (fiche axe_frontal_moyen_fessier complète)
- **§4.3 Metabolic layer**
  - §4.3.1 Soleus oxidative metabolism (article.md §2.2.1 + note PILOTE-refs)
  - §4.3.2 Zone 2 / MAF (article.md §2.2.2 brut)
  - §4.3.3 Osteogenic window (fiche osteogenic_jgh complète)
- **§4.4 Neuro-circulatory layer** — gros bloc venant de research-mecanismes.md
  - §4.4.1 Foot-strike waves + pulsed cerebral perfusion (research-mecanismes §3.2 complet : Lohman, Wasson FASEB 2012, +39% HR-SR, continuum cycling<walking<running)
  - §4.4.2 Glymphatic clearance (research-mecanismes §3.3 complet : Yoon Nature Comm 2025, Iliff/Nedergaard, AQP4)
  - §4.4.3 Hippocampal theta + locomotion (research-mecanismes §3.4.1-3.4.2 : CPG, theta 3 Hz / 8 Hz Goyal Bush, RAS Parkinson)
  - §4.4.4 LCC / LRC coupling + locus coeruleus hypothesis (research-mecanismes §3.4.3-3.4.4 + §3.6 Buzsáki hiérarchie, LC, ISO, Deco metastable modes)
  - §4.4.5 Cerebral hypoperfusion zones (research-mecanismes §3.1 Falkenhain + HIIT inverse + hippocampal response 2020)
  - §4.4.6 Trigger points analogy (research-mecanismes §3.5)
- **§4.5 Proprioceptive layer**
  - §4.5.1 Pacini mechanoreceptors (extrait fiche warmup_piedsnus)
  - §4.5.2 Neuromuscular reactivation (article.md §2.2.3 brut)
  - §4.5.3 Barefoot as access condition (forward-ref §2.3)

## Pattern d'exécution

Chaque bloc = Edit remplaçant `<!-- SECTION-N-CONTENT -->` par :
- Titre `### §X.Y titre`
- Ligne `> **source:** <chemin ou fiche>`
- Contenu brut collé (FR reste FR, EN reste EN, pas de retraduction)
- Séparateur `---`

Un commit par section : `Migrate §N <titre> from <sources>`. Pas de commit final de regroupement.

## Rappels doctrinaux session courante

- **Pas de proposition, pas de check-in** : Perig a dit explicitement deux fois « on consomme tous les crédits ». Exécuter, pas demander.
- **Brut > harmonisé** : la note en tête de MANUAL.md dit déjà que l'homogénéisation est une passe ultérieure.
- **Note PILOTE-refs** : §2.2.1 article.md porte « Raper » (erreur) → c'est Hamilton MT, Hamilton DG, Zderic TW 2022 *iScience* 25(9) 104869 PMID 36034224. Chiffres 52% / 60% à vérifier. À signaler dans chaque bloc qui réutilise ce chiffre.
- **Commit snippet** : utiliser HEREDOC avec Co-Authored-By, pas de `--no-verify`.

## Journal chronotie à poser à l'ouverture

Appeler `/home/perig/projects/chronotie-journal/journal/*.jsonl` miroir `.md` pour `début de session` — une entrée qui dit "reprise migration MANUAL.md §4".

## Fenêtre weekly-boucle

Active jusqu'à jeudi 2026-11-05 02h. Si le temps manque pour finir, au minimum sédimenter §4 avant la clôture : c'est le bloc le plus dense et le plus coûteux à re-composer.
