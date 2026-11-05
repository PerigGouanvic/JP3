# Brief de passation — migration massive MANUAL.md (suite)

**Écrit** : 2026-11-04 23h21, session courante bientôt close (quota session 57%, reset dans 3h28 ; quota semaine à 77% — WARNING, reset jeudi matin dans 10h38 ; fenêtre weekly-boucle active jusqu'à jeudi 2h).

## Mandat durable (verbatim Perig)

> « Ce soir nous avons énormément de crédits alors je voudrais qu'on rattrape c'est-à-dire en allant mettre tout tout dans le grand document central. Ce n'est vraiment pas important d'avoir quelque chose d'homogène l'important c'est que tout le contenu soit dedans. »
>
> « Un seul fichier pour tout que l'on va parcourir de la manière habituelle avec des sections et une table de matière ou plusieurs tables des matières, par section. Tout copier dedans en effet y compris les fiches mémoires. Pour la manière de procéder fait au mieux. »
>
> « Je répète: tu as TOUT ce qu'il te faut, on peut consommer TOUS les crédits »

**Traduction opérationnelle** : verser dans `content/en/manual/MANUAL.md` tout le contenu dispersé (article.md EN/FR, research-singularite.md, research-mecanismes.md, fiches mémoire `~/.claude/projects/-home-perig-projects-jp3/memory/*.md`, facts/, drafts/ pertinents). Brut, pas de traduction, pas de réécriture, chaque bloc avec `> **source:** <chemin>` pour traçabilité. Pas d'interrogation, pas de proposition — exécuter.

## État d'avancement

**Fait et committé (dans l'ordre chronologique)** :

- **§3 Noyau multiplicatif** — commit `109ad43` *Migrate §3 Noyau multiplicatif + facts/ propulsion géométrique 2026-11-04*
- **§4 Mécanismes physiologiques** — commit `c509ff9` *Migrate §4 Mécanismes physiologiques from memory fiches + research-mecanismes 2026-11-04*
  - §4.1 Muscular (soléaire + TA + chaîne posturale profonde + fascia)
  - §4.2 Biomechanical (Perry/Nigg + warmup pieds-nus + chasse-neige + plan frontal)
  - §4.3 Metabolic (soléaire oxydatif + Zone 2/MAF + fenêtre ostéogénique)
  - §4.4 Neuro-circulatory (hypoperfusion / foot-strike / glymphatique / rythmes cérébraux / trigger points / hiérarchie oscillatoire / synthèse)
  - §4.5 Proprioceptive (Pacini + neuromusculaire + pieds-nus comme condition d'accès)
- **§2 Les trois P** — commit `f8e6f49` *Migrate §2 Three Ps from article.md §3.1 + 3P fiches 2026-11-04*
  - §2.0 Naming convention
  - §2.1 In Your Own Place (+ §2.1.1 seuil solitude, §2.1.2 exagération absorbée, §2.1.3 furtif)
  - §2.2 At Your Own Pace
  - §2.3 In Place (+ §2.3.1 doctrine In Place, §2.3.2 barefoot condition)
  - §2.4 Via negativa — sleep test
  - §2.5 Modulation grammar

**À faire, dans l'ordre établi (suite)** :

1. **§5 Protocole** — prochain — sources :
   - `content/fr/research-singularite.md` §4.6.2 (anatomie segment initial t<√3)
   - `content/fr/research-singularite.md` §4.6.3 (symphonie des mécanismes)
   - `content/fr/research-singularite.md` §4.6.5 (degré zéro)
   - `content/fr/research-singularite.md` §4.6.6 (moment 0 diagnostic)
   - `content/en/article.md` §3.1 (core execution — full session mode)
   - `content/en/article.md` §3.5 (propulsive push against support)
   - `memory/project_test_escaliers_soutien_vs_mobilite.md`
   - Forward-refs à §3.2.2 (heel activator), §3.2.4 (incident regime), §2.1.3 (stealth), §4.2.2 (warmup pieds-nus)
   - TOC §5 déjà dans MANUAL.md ligne ~986

2. **§6 Doctrine** — sources :
   - `content/en/article.md` §3.4 (paradox of liberating weakness)
   - `memory/project_famille_spu_via_negativa.md` (via negativa)
   - `content/fr/research-singularite.md` §4.6.8 (ego et écho)
   - `memory/project_ego_echo_doctrine.md`
   - `content/fr/research-singularite.md` §4.6.9 (amorçage, pas séance)
   - `memory/project_amorcage_vs_seance.md`
   - `memory/project_euphoria_destination.md`
   - `memory/project_seuil_solitude_perceptive.md` (déjà migré §2.1.1, peut forward-ref)
   - `memory/project_agent_couche_incarnation.md`

3. **§7 Cas appliqués** — sources :
   - `content/en/article.md` §3.2 (9 cas typiques)
   - `memory/project_sarcopenie_voie_royale.md`
   - `memory/project_osteogenic_jgh_seconde_porte.md` (déjà cité §4.3.3)
   - `memory/project_jgh_presentation_voie.md`
   - `memory/project_back_chain_dominance_talon.md` (déjà migré §3)
   - `memory/project_malalignment_syndrome_schamberger.md`
   - `memory/project_warmup_piedsnus_prematch.md` (déjà migré §4.2.2)
   - `memory/project_jp3_incident_regime.md` (déjà migré §3.2.4)

4. **§1 Intro** — sources :
   - `content/en/article.md` §1 (Introduction) + abstract
   - `drafts/01.2-cubic-trajectory.md` (à lire)
   - `memory/project_axe_c_courbure_x2.md`

5. **§8 Discussion + §9 Conclusion + Références** — sources :
   - `content/en/article.md` §5 (Discussion)
   - `content/en/article.md` §6 (Conclusion si existe)
   - Références consolidées depuis tous les blocs

6. **Front matter** — titre, abstract, auteurs, date, licence.

## Pattern d'exécution confirmé

Chaque bloc = Edit remplaçant `<!-- SECTION-N-CONTENT -->` par :
- Titre `### §X.Y titre`
- Ligne `> **source:** <chemin ou fiche>`
- Contenu brut collé (FR reste FR, EN reste EN, pas de retraduction)
- Séparateur `---`

Un commit par section : `Migrate §N <titre> from <sources>`. HEREDOC avec `Co-Authored-By: Claude Opus 4.7 <noreply@anthropic.com>`. Pas de `--no-verify`.

## Rappels doctrinaux

- **Pas de proposition, pas de check-in** : Perig a dit explicitement « on consomme tous les crédits ». Exécuter, pas demander.
- **Brut > harmonisé** : la note en tête de MANUAL.md dit déjà que l'homogénéisation est une passe ultérieure. Les duplications entre sections sont acceptables.
- **Note PILOTE-refs** : §2.2.1 article.md porte « Raper » (erreur) → c'est Hamilton MT, Hamilton DG, Zderic TW 2022 *iScience* 25(9) 104869 PMID 36034224. Chiffres 52% / 60% à vérifier. À signaler dans chaque bloc qui réutilise ce chiffre.
- **Tight read, pas de scan exhaustif** : lire 10-30 lignes autour de la cible, exécuter l'Edit. Ne pas re-lire tout le fichier à chaque tour.

## Pièges rencontrés dans la session courante

- **Erreur "File has not been read yet"** → le tool Edit exige qu'on ait fait un Read du fichier dans la conversation en cours. Faire un Read étroit (15-30 lignes autour du placeholder cible) avant d'Edit. Pas besoin de re-lire tout le fichier.
- **Ne pas sur-réfléchir le plan de §5** : il est déjà cadré par le TOC présent dans MANUAL.md (ligne ~986) et les sources §4.6.2-§4.6.6 sont dans le fichier `content/fr/research-singularite.md` (lignes 460-704).

## Fenêtre weekly-boucle

**Encore active jusqu'à jeudi 2h** (~2h40 restantes à 23h21). Priorité : au minimum sédimenter §5 avant la clôture — c'est le prochain bloc dense. §6 et §7 reposent surtout sur des fiches déjà consultées dans les commits précédents, donc plus rapides à composer.

## Journal chronotie à poser à l'ouverture suivante

Entrée `début de session` : "reprise migration MANUAL.md §5 Protocole".
