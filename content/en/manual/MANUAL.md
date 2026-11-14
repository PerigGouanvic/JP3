# JP³: Jogging in Place, at Your Own Pace, in Your Own Place
## Central EN Manual — Consolidated Source

**Status** : massive migration 2026-11-04 (weekly review window). All the content scattered across `content/en/article.md`, `content/fr/article.md`, `content/fr/research-singularite.md`, `content/fr/research-mecanismes.md`, `facts/`, the project memory fiches (`~/.claude/projects/-home-perig-projects-jp3/memory/*.md`), and the relevant drafts is poured here into its canonical section according to the `SKELETON.md` skeleton (validated 2026-10-08).

**Pouring principle** : raw content copied, **no translation, no tone harmonization, no rewriting**. FR blocks remain FR, EN blocks remain EN. Each block carries a `> **source:** <chemin ou fiche> §…` header for traceability. Homogenization (FR→EN translation, harmonization, final drafting) is a later pass.

**Architectural logic** (SKELETON reminder) : 3 Ps × 3 synergies × 1 confluence (7 cells, locked 2026-07-30), inserted into a canonical scientific-article architecture (Intro → Foundations → Mechanisms → Protocol → Doctrine → Discussion → References).

**Citation policy** : see `PILOTE-refs.md` ("augmented traceability" policy). **Correction note** : §2.2.1 soleus carries attribution errors identified in PILOTE-refs.md §Pilote 1 — Hamilton/Zderic (not "Raper"), iScience 25(9), article 104869 ; the 52% / 60% figures need checking for their exact magnitude. To be corrected during the harmonization pass.

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

> **source:** `content/en/article.md` lignes 1-7 (titre + sous-titre + abstract) + métadonnées projet

**Title.** JP³ : Jogging in Place, at Your Own Pace, in Your Own Place.

**Subtitle.** *A universally accessible protocol for behavioral activation, emotional regulation, and physical well-being — empowering even the most vulnerable populations.*

**Author.** Perig Gouanvic (perig.gouanvic@gmail.com).

**Date.** First consolidated draft 2026-11-05 (massive migration into the central EN manual). Successor to the 2025-07-30 ³-centered overhaul and the 2026-08 doctrinal enrichment (research-singularite.md §4.6.x).

**Licence.** To be decided with Perig — proposed default: CC BY-SA 4.0 (doctrinal content) + MIT (any associated code: agent prompts, ada-format derivations). Not locked.

**Status.** Working manuscript. This is the central EN manual (single source) from which all other productions — FR article, JGH pitch deck, patient leaflets, agent prompts, Hamilton/collaborative versions — derive by extraction/translation/adaptation (see `project_manuel_central_anglais_architecture.md` 2026-09-05 for the architectural decision).

**Abstract.**

JP³ : Jogging in Place × at Your Own Pace × in Your Own Place. The "³" in JP³ is not merely symbolic; it represents a **multiplicative synergy** where each "P" exponentially amplifies the efficacy of the other two — formally, the within-session trajectory of effort is cubic (*y = x³*) rather than linear (*y = 3x*), with the paradoxical property of passing *below* the linear line for all *t < √3* before overtaking it durably (see §1.2). The contemporary landscape of physical activity is characterized by a striking paradox: a pervasive social discourse glorifying intense, performance-driven exercise, yet an alarming reality where the vast majority of the global population fails to meet minimal physical activity guidelines. This creates a cycle of inactivity, particularly for vulnerable populations facing amplified barriers. JP³ emerges as a revolutionary exercise modality that, through its inherently accessible, self-paced, and private nature, **eliminates 80% of traditional exercise obstacles**. This protocol leverages biomechanical (soleus activation via standing SPU-family logic, spring-mass ankle-dominant regime, deep postural chain reactivation), physiological (aerobic metabolism, slow VO2 kinetics, osteogenic loading via heel-activator), and psychological principles (behavioral activation, anxiety reduction, "ego and echo" doctrine of body-autonomous / mind-free). It is designed to be a pragmatic tool for diverse healthcare professionals, offering a unique and robust entry point to movement for all, including those traditionally excluded from physical activity — notably older adults (sarcopenia/osteoporosis, cf. JGH strategic pathway), people with chronic fatigue (CFS/ME, post-COVID), individuals with social anxiety or body-image barriers, and anyone in a depleted starting state where the conventional *3x* regime is physically unreachable. Key benefits include improved exercise adherence, emotional regulation, behavioral activation, and broad physiological gains across the full stack documented in §4.

**Keywords.** behavioral activation ; soleus ; SPU (soleus pushup) ; sarcopenia ; osteoporosis ; proprioception ; barefoot training ; home exercise adherence ; self-paced exercise ; Zone 2 ; Hamilton muscle tuning ; deep postural chain ; via negativa ; cubic trajectory ; priming ; AI coaching.

**Citation.** Gouanvic, P. (2026). *JP³ : Jogging in Place, at Your Own Pace, in Your Own Place — central EN manual.* First consolidated draft, 2026-11-05.

**Note to readers.** This manuscript is in **migration-draft state**. Content from multiple sources (research-singularite.md, research-mecanismes.md, memory fiches, facts/, drafts/) has been versed verbatim per section — FR blocks remain FR, EN blocks remain EN, each block carries a `> **source:**` header for traceability. Harmonization (FR→EN translation, redundancy pruning, final editorial pass) is a subsequent phase. Reading order recommended: §1 (singularity framing) → §2 (via negativa anatomy of the 3 Ps) → §4.6.x (deep postural chain and cubic-trajectory mechanisms) for the theoretical core ; §5 (protocol) + §7 (applied cases) for clinical use ; §8.4 (JGH strategic pathway) + §8.5 (Hamilton outreach + research agenda) for collaborative/academic context.

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

#### 1.2.8 The singularity named — SSPU, a standing soleus push-up activatable in any circumstance

> **source:** session 2026-11-13 (Perig, return after post-influenza hiatus) · `memory/project_sspu_competence.md` · extends `project_standing_spu_recherche` (2026-08-17) and §6.2 *via negativa* · research `facts/perplexity-sspu-standing-soleus-skill-2026-11-13.md`, `facts/perplexity-sspu-trunk-tilt-quads-2026-11-13.md`

**Definition.** The physiological singularity of JP³ is the **SSPU — standing soleus push-up**: a sustained, soleus-dominant plantarflexion regime performed upright, that excludes the fatigable phasic-glycolytic musculature (quadriceps first, gastrocnemius second), and that can be activated **in any circumstance** — inside a session or incidentally during daily life (§3.2.4). The three Ps are the conditions of access to the SSPU; the cubic trajectory (§1.2.1–1.2.7) is what the SSPU looks like over time when those conditions hold.

**Correction this introduces: JP³ is a skill, not something one simply lets happen.** Earlier formulations presented JP³ as a regime one "lets happen" at minimal effort. Field observation (2026-11-13, severe fatigue after influenza) contradicts this in part:

- Seated, Hamilton's chair neutralizes the thighs by construction — what remains is to push correctly. **Standing, nothing neutralizes them**: excluding the fatigable muscles becomes an act of selective activation, proprioception and plantar sensing.
- In a depleted state, thigh fatigue blocks the session within minutes; avoiding it, the practitioner falls back onto heel-dropping (§3.2.2). The **transition from the passive heel spring to an active soleus regime** is the part that is not yet mastered.
- **Diagnostic — the second JP³.** Attempting a second session right after the first proved hard and required willpower. If the regime were truly SSPU (non-fatigable), repetition would be nearly free. Conclusion drawn by Perig: the protocol had rarely, if ever, been performed at genuine minimal effort; without the skill, **willpower compensates**.

**Two tiers.** The *entry threshold* stays near zero (heel activator, §3.2.2 / §5.1). *Mastery* is the SSPU proper (§5.3.4). The operational criterion of correct execution is **immediate repeatability**: thigh fatigue is an error signal, not a dose.

**Consistency with the SPU literature.** Even seated, the SPU is taught: Elek et al. (2025, *Sports* 13(3):81) trained participants in one session with soleus EMG feedback (reference: treadmill walking); next day the glucose effect held without feedback (≈ −37 % iAUC with vs ≈ −26 % without; non-significant difference, n ≈ 5/group). No study has tested feedback-free acquisition.

**Notes for integration into the full manual.**

- The SVG at § 1.2.3 must be exported as `content/en/assets/cubic-trajectory.svg` from the inline SVG currently in `content/fr/research-singularite.md` §4.6 (line 385). Labels require EN translation ("coût apparent" → "apparent cost"; "croisement à t = √3" → "crossing at t = √3"; "dépassement durable" → "durable overshoot"; axis labels "t (durée de session)" → "t (session duration)", "bénéfice cumulé" → "cumulative benefit").
- Cross-references § 2 (via negativa), § 3.4 (confluence), § 4.4 (neuro-circulatory substrates), § 5.4 (initial segment, empirical test), § 6.1 (liberating weakness), § 8.2 (comparison with adjacent practices) must be resolved once the full manual numbering is locked.
- References Poe 2020, Aston-Jones & Cohen 2005, Canolty & Knight, Buzsáki, and the partial-rivals block need full PILOTE-refs expansion (bibliography + type + access + extract + author gloss + counter-reading). Current citations are placeholder short-forms.

**Pedagogical pivot (fiche project_axe_c_courbure_x2) :** *"The three Ps do not add up — they multiply. The product is a volume, not a sum. The name encoded the law."* — Rivals to refute by structure: Zone 2 (prescribed 3x line), niko-niko (horizontal plateau), HIIT/fitness snacks (steps), pacing (capped by definition), conventional warm-up (interrupted), BA (inter-session curvature, not intra-session).
> *FR original:* « Les 3 P ne s'ajoutent pas — ils se multiplient. Le produit est un volume, pas une somme. Le nom encodait la loi. »

---

### §1.3 Scope of this manual — single EN source; announced derivations

> **source:** manuel central (header SKELETON) + `memory/project_manuel_central_anglais_architecture.md`

This manual is the **single canonical source** of the JP³ framework, written in English, intended to be read in full and to serve as the reference for all future derivations. It consolidates into a single document the entirety of the content previously scattered across `content/en/article.md`, `content/fr/article.md`, `content/fr/research-singularite.md`, `content/fr/research-mecanismes.md`, the project memory fiches, facts/ and the relevant drafts.

**Announced derivations** (to be produced from this manual, never the reverse) :

- **FR article** (current `content/fr/article.md`) — translation/adaptation for a general French-speaking audience. Already in circulation in an earlier form; will be recast from the manual.
- **Clinical deck JGH** — 30–45 min presentation on sarcopenia + osteoporosis, intended for family medicine and geriatrics at the Jewish General Hospital, Montreal (see §7.1 for the strategic context).
- **Patient leaflets** — one-page briefs per clinical population (sarcopenia, depression, CFS, etc.) derived from §7 and calibrated for circulation outside expert circles.
- **Agent prompt** — the "appendix prompt" enabling a clinician or an individual to replicate the JP³ experience with AI assistance. Current technical basis: the `/janus` skill and equivalents. See §6.7 (agent as embodiment layer).

**Citation policy** : see `PILOTE-refs.md` for the "augmented traceability" policy (bibliography + type + access + extract + author gloss + counter-reading). Every structural reference must be traceable and open to counter-reading — neither ornamental citation nor tacit authority.

**Out of scope** : this manual is **not** a review article to be submitted as is. It is an internal reference from which derivatives formatted for their respective audiences will be extracted. Stylistic homogenization, complete FR→EN translation, and condensation to journal format are later passes.

---

## § 2. The Three Ps — anatomy of the constraint

JP³ is defined by three constraints: **In Your Own Place** (*chez soi*), **At Your Own Pace** (*à son rythme*) and **In Place** (*sur place*). This section takes them one at a time, in an order fixed in 2026-07 ("order B") and ordered by *increasing barrier* (each step lifts a higher one): first In Your Own Place, which lifts the geographic threshold (the lowest barrier); then At Your Own Pace, which lifts the constraint of an imposed rhythm (an intermediate barrier); finally In Place, which abolishes the spatial destination altogether (the highest barrier).

Each sub-section answers the same three questions: what the P excludes, what it makes possible, and what mechanistic function it performs. The barefoot condition is treated under In Place (§2.3.2), because it is what allows that P to produce its regime. Two cross-cutting sections close the chapter. §2.4 gives a definitional test of the three Ps by *via negativa*, the sleep test. §2.5 shows that the Ps are vectors that re-weight one another rather than rigid rules, and names the core that must hold while they do.

### §2.0 Naming convention

In discursive text (structural proposals, discussions, manual and article prose) the three Ps are written out in full, never abbreviated:

- **In Place** (*sur place*) — jogging in place; formerly numbered P1.
- **At Your Own Pace** (*à son rythme*) — temporal self-regulation; formerly P2.
- **In Your Own Place** (*chez soi*) — the intimate domestic environment; formerly P3.

Their pairwise intersections are named the same way: **In Place × Pace**, **In Place × Own Place**, **Pace × Own Place**, and the **confluence of the three**. So one writes "the Pace × Own Place cell", not "the P2∩P3 cell".

The numbers impose a needless memory load that breaks the flow of reasoning. Perig himself regularly forgets which P is which, and the problem is worse when reading on a phone, where a definition elsewhere on the screen cannot easily be reread. The abbreviations P1/P2/P3 are therefore kept only where space is genuinely tight: tables, dense diagrams, short headers.

---

### §2.1 In Your Own Place — chez soi

**What it excludes.** In Your Own Place means that the individual chooses the environment, typically at home and in a minimal space: one square metre is enough. This removes the usual barriers to exercise: cost, equipment, weather, travel time, special shoes or clothing.

**What it enables.** A controlled environment. Silence can be adjusted, temperature controlled, external distraction reduced to zero, and safety is total. Together these favour a state of "meditation in motion" or "flow state". The home also allows tools of self-correction that would be awkward elsewhere. A mirror can be used, and the eyes can be closed to heighten proprioception. Barefoot practice, which is easy at home, has long been strongly recommended to maximise proprioceptive feedback and strengthen the intrinsic foot muscles. §2.3.2 shows that barefoot is in fact more than an amplifier: it is the access condition for the regime itself.

Three refinements show that In Your Own Place means more than "private walls".

#### §2.1.1 The threshold of perceptive solitude — a tacit prerequisite

In 2026-08, Perig observed a concrete difficulty: fitting the JP³ protocol in when other people are at home. A private physical space is not enough. An **inner social space** is also needed, a form of non-observation. The gaze of those close to us does not have to be judgmental to weigh on us. Its mere *possibility* is enough to block the gesture.

This touches a tacit assumption of the framework, that "In Your Own Place = a space of motor freedom". Behind it lies an invisible prerequisite: **perceptive availability to oneself**, which private walls alone do not guarantee. The observation is a counterpoint to the promise "no gym needed, no equipment needed", and it deserves to be acknowledged honestly as a lived limit of the practice. It is still open whether the threshold is contingent (tied to a particular period of life) or a structural feature of the protocol, and whether it holds or changes over time. One possible extension, towards the *physiological rights* project, is a right to a *perceptive* space of one's own, not merely a physical one.

The threshold has already produced its own partial answer: the furtive form described in §2.1.3. See also §6.6.

#### §2.1.2 Own Place welcomes bodily exaggeration — "normal" is relative to the starting state

A second refinement settles the status of the exaggerated, odd-looking movements gathered under the working name "silly walks". These are not attentive variants that contradict the ego/echo doctrine (§6.3). They recognise that "normal" is relative to the body's starting state. Perig's own wording:

> *"they're not variants when you think about it because actually when someone starts out in a state of great fatigue or advanced age or injuries etc the normal movement is in itself a contortion. that's what I had already recorded about dorsiflexion which can seem exaggerated depending on whether you do it on waking or later. someone who has lived with an armor for years considers normal head carriage a real contortion. in the pleasure dimension there's also the fact that some exaggerated movements are more pleasant but stranger. that really fits into the p own place."*
> *FR original:* « ce ne sont pas des variantes quand on y pense parce que en fait lorsque quelqu'un commence dans un état de grande fatigue ou d'âge avancé ou de blessures etc le mouvement normal est en lui-même une contorsion. c'est ce que j'avais déjà enregistré au niveau de la dorsiflexion qui peut sembler exagérée selon qu'on la pratique au réveil ou plus tard. quelqu'un qui vit avec une cuirasse depuis des années considère le port de tête normal comme une véritable contorsion. dans la dimension du plaisir il y a aussi que certains mouvements exagérés sont plus agréables mais plus étranges. ça rentre vraiment dans le p own place. »

Four points follow from this.

1. **In JP³, "normal" is not absolute. It is indexed to the starting state.** For an armoured body (*cuirasse*, character armour in Reich's sense; see §5.2), returning to anatomical head carriage already feels exaggerated. For a body fatigued on waking, a simple dorsiflexion is a feat. What mainstream fitness calls "normal" is already a silly walk for someone who no longer has access to it.
2. **The line between normal and silly moves with the state of the body.** What seems exaggerated on waking becomes ordinary in the afternoon. What looks contortionist to a beginner becomes natural to a regular practitioner. The practice welcomes the whole spectrum.
3. **Own Place welcomes non-normed bodily exaggeration.** In Your Own Place is not only a private physical space, and not only the absence of a destination (the tolerated forward-fall; see §2.5). It is also **the space where one can dare ugly, ridiculous, contortionist movements without being observed**. Freedom of non-normed bodily expression is part of what this P is. This is also why the threshold of perceptive solitude (§2.1.1) matters so much.
4. **Pleasure and strangeness.** Some exaggerated movements are pleasant simply because they are strange. The pleasure of the unusual is part of the practice, whatever its functional use. It is an intrinsic driver of JP³, alongside the pleasure of priming and the euphoria of destination (§6.5).

#### §2.1.3 Furtive JP³ / standing JP³ — a variant born from the solitude constraint

The day after the perceptive-solitude threshold was first observed (2026-08-07), the constraint produced a variant. Perig was jogging at home when another person came into the room, and he stopped in order to "become normal again". Then, while doing the dishes, with his hands busy and his body needing to stay upright and fairly fixed to handle objects, he realised he could **continue JP³ while doing the dishes**, provided his pelvis was very mobile.

Several insights followed, in order:

1. **The pelvis as the elastic absorber of the run.** Pelvic elasticity is an *essential* element of efficient running. Without it, the impact reverberates into the lower joints (ankles, knees). Keeping the upper body still *forces* the pelvis to move, and so *teaches* the right mechanics.
2. **A personal diagnosis.** Perig found that he spontaneously runs **tense and uneconomically**. The furtive mode reveals this tension as a flaw to correct.
3. **Cascading consequences**: better running in itself (protective biomechanics); the ability to practise JP³ **in the presence of other people**; and the ability to **start** JP³ at any moment, without adopting a "starting posture" that gives the intention away.
4. **An anthropological resonance.** The form resembles the dances of some (not all) of the Indigenous peoples who are Perig's neighbours in Canada: a grounded body, movement centred at the pelvis.
5. **A radicalisation of the protocol.** JP³ becomes **a way of inhabiting the everyday body** rather than a dedicated moment: dishes, cooking, brushing teeth, standing on the phone.
6. **The key biomechanical marker.** In this form the **knees are clearly flexed**. When they are not flexed enough, one falls back into a sprinter's posture, which is *not* what is wanted.

The episode matters for three reasons. First, it **partly resolves the threshold of perceptive solitude**: the constraint (being observable) produced its own way out (an invisible form), and that way out is biomechanically *better* than the spontaneous form. The obstacle became the teacher. Second, it takes the basic promise of JP³ (no gym, no equipment, no dedicated moment) to its most integrated form. Third, it opens a variant that can be formalised, called "furtive", "standing" or "integrated" JP³ (see §5.5.2, and the incident regime in §3.2.4).

---

### §2.2 At Your Own Pace — à son rythme

At Your Own Pace is the heart of JP³'s adaptability. **What it excludes** is any imposed rhythm. **What it enables** is intensity regulated entirely by the individual. Its **mechanistic function** depends on three elements.

- **An ultra-slow start.** For the first 10–15 minutes the protocol runs at a "barely perceptible", "too easy", even "boring" pace. This slow start is meant to contain the oxygen deficit, stabilise ventilation and protect the tissues.
- **Listening to sensations.** The practitioner relies on bodily sensations: the ability to speak in full sentences (the "talk test") and the overall sense of being able to keep up this intensity for 60–90 minutes. Any sudden acceleration of breathing is a signal to slow down.
- **Progression through boredom.** Intensity can rise naturally, through self-regulation rather than willpower: boredom prompts an increase in tempo. The progression happens without any friction of decision.

---

### §2.3 In Place — sur place

In Place means jogging or gently bouncing on the spot. **What it excludes** is horizontal displacement and, more fundamentally, any spatial destination. **What it enables** is a concentration of effort on vertical push-off and on activation of the posterior-chain muscles, notably the soleus. The height of the "jog" can range from a light vertical bounce to a true jog with high knee lift, always self-regulated. Its **mechanistic function**, the ankle-dominant spring-mass regime, depends on a condition treated in §2.3.2: bare feet.

#### §2.3.1 JP³ is In Place — never speak of "coming back in" or "going out"

JP³ is stationary by definition. The practitioner does not "go out" for a run, and so cannot "come back in". Perig runs in place at home, on a balcony, in the living room or on a terrace. Any suggestion that treats him as being outdoors is doctrinally absurd, and when it comes from a companion it is a sign of outright context corruption. This note is aimed at companions, whether human or AI, and especially at the agent layer of the JP³ system (§6.7).

**The incident.** On 2026-09-14, during a running companionship session, an AI companion suggested that Perig "go back inside to do some banded distraction" while he was in fact running in place at home. He had just written that he was running in place with his feet in snowplow geometry (*chasse-neige*; see §4.2.3). The companion let its prior (running = outdoor displacement) override everything the doctrine provided: In Place, the ankle-dominant spring-mass regime, barefoot as access condition, the stationary snowplow, fascia at *degré zéro* (degree zero). Perig called the error a "strong signal".

> *FR original:* « quand je cours sur place et que je garde les pieds en chasse-neige » ; « signal fort »

**Guidance for companions:**

- Never use "come back in", "go out", "go", "arrive somewhere" or "shorten the run" as spatial metaphors of displacement while JP³ is under way.
- If a complementary tool is relevant (banded distraction, foam roller, massage gun, gym), present it as something "to do alongside" or "after the session", never as a spatial substitute ("go do X elsewhere").
- If the practitioner describes an ambiguous sensation (fatigue, resistance, the ankle locking up), first check against the three-P triptych that the reasoning stays within the stationary regime, and only then recommend anything.
- JP³ is **a complete activity in itself**, not a fragment of a training programme spread over several locations. Any suggestion that treats it as "a stage on a route elsewhere" betrays the doctrine.

**Scope of the prohibition.** The rule governs what a companion says *during* the practice. It does not contradict the priming doctrine (§6.4), whose legitimate deliverable is "the urge to go out": that urge is an *after-effect* that arises once JP³ has done its work, felt and decided by the practitioner. The sleep test (§2.4) likewise speaks of going out and coming home as a description of what violates or restores the three Ps, not as an instruction given mid-session.

**The general rule.** When a generic prior ("running = outdoors", "sport = field", "training = gym") conflicts with JP³ doctrine (In Place, At Your Own Pace, In Your Own Place), the doctrine wins. If a line of reasoning produces a recommendation that contradicts an established core tenet of the system, stop and check before saying it.

#### §2.3.2 Barefoot — access condition to the regime, not an amplifier

The earlier framing, carried over from the article (§2.1 above; the article's §2.2.3, "The true use of the feet"), treated bare feet as an **amplifier**, "strongly recommended to maximise proprioceptive feedback". Experience since 2026-08 supports a stronger status. Barefoot is a **permissive condition** of the JP³ core. Bare feet therefore have two distinct functions:

1. a long-term **amplifier of proprioception** (the earlier status, still valid);
2. the **access condition to the spring-mass regime** (the stronger status).

In the second function, barefoot belongs with the other negative constraints of the framework (*via negativa*, §6.2). It is what *prevents* a fall back into the phasic regime.

**The empirical signal (2026-08-27):**

> "I tried with socks and nothing works: everything is much less easy and natural if you're not barefoot."
> *FR original:* « j'ai essayé avec les chaussettes et rien n'y fait : tout est beaucoup moins facile et naturel si on est pas pieds nus. »

**Mechanistic hypothesis.** Without bare plantar contact, the brain does not trust the fascia–tendon–soleus rebound regime, and by default it re-engages active control strategies, recruiting the phasic quadriceps. A sock blurs tactile feedback just enough to keep the elastic regime from priming; a shoe does worse. The variants discovered in 2026-08 (elastic heel strike, midfoot forward-fall; §2.5) probably depended on the floor under bare feet. Without it, the forward-fall would have turned into "I catch myself with my quads". This also explains why Perig missed these variants for so long. An earlier test in socks failed to prime the regime, so the variant was wrongly rejected, and he did not notice that the sock, not the variant, was the problem.

The hypothesis overlaps the deep postural chain thesis (§4.1.3): the plantar fascia is the chain's lower entry point. One line of corroboration remains to be followed up: the barefoot-running literature on foot-strike transition and muscle recruitment (heel strike in shoes versus mid/forefoot strike barefoot).

**Clinical confirmation (2026-09-20).** It proved impossible to prime the regime even at home, in a light jog, in socks or shoes. Perig's threshold and zone of giftedness are **strictly barefoot**. The hypothesis is now established.

**Clinical corollary: the recurrent soccer pattern.** Over several months, Perig's repeated Achilles injuries in soccer were **not primarily** a problem of intensity (compared with home jogging). The cause is structural:

- cleats + ultra-cushioning non-Newtonian soles + socks
- ⇒ the spring-mass regime does not prime
- ⇒ the soleus and calves do not react instantly
- ⇒ the Achilles absorbs the load that the rebound would have absorbed.

This brings into focus a causal mechanism for his right insertional Achilles tendinopathy. It also invalidates the naive rule "do not conflate soccer and JP³", which is explicitly withdrawn. The two cannot be kept apart, precisely because the JP³ regime could protect the Achilles in soccer and is currently *gated by barefoot*. There is a **missing bridge** to name.

**Dependence or rehabilitation stage?** Exclusive barefoot practice can be read in two ways. (1) It *grooves a dependence* on bare plantar feedback, in which case shod soccer stays a zone of structural risk indefinitely. (2) It is the necessary rehabilitation stage before a progressive transfer to minimalist shoes, in which case an explicit work-stream (a progressive ramp) is needed.

**A hybrid answer (2026-09-20, evening).** Further reading and clinical experimentation gave a hybrid answer: **neither, it is normal contextual specificity.** The training-transfer literature (Bosch) supports the principle that, for the central nervous system, these are not two intensities of the same gesture but **two distinct motor tasks**. Populations who have worn shoes all their lives carry no relative excess risk within their own regime. Perig's risk comes from the **differential** between his two separately calibrated regimes.

The unified mechanism is feed-forward pre-activation of the triceps surae, triggered by plantar mechanoreceptors (developed in §4.2.2). Pacinian corpuscles act as a 20–1000 Hz band-pass filter sensitive to rate of change. Padding spreads the impulse, which suppresses the signal at depth. Robbins & Hanna (1980 onwards) describe the discomfort–impact illusion. EMG comparisons show 10–24% more gastrocnemius/soleus pre-activation barefoot than shod.

**Doctrinal stance.** The two regimes are accepted as distinct, and barefoot is used as a **primer** immediately before the shod regime, since partial carry-over is documented. **Validated clinical application:** five minutes of fast, light-impact barefoot warm-up was followed by spontaneous, solid single-leg hopping, which is the gold-standard post-Achilles test (RSI > 0.5). This extends the JP³ framework to a pre-activation use before shod activity (§5.6).

---

### §2.4 Definitional test by via negativa — the sleep test

On 2026-08-27, walking beside his bike and looking for a "sleep" counterpart to JP³, Perig found that the three Ps are more than design constraints. They are the **conditions of somatic autonomy**, and violating all three at once produces exactly the opposite experience:

- violating **In Your Own Place** (leaving home) → over-stimulation;
- violating **At Your Own Pace** (letting oneself be stimulated) → going against one's natural rhythm;
- violating **In Place** (being in motion, or on stage) → loss of control.

The result is a desire to go home, a need to get back to a place of one's own. The body is signalling that its autonomy is compromised.

**Corollary: the sleep counterpart of JP³ does not need to be invented.** It is **the return towards the three Ps**. Walking home restores In Your Own Place, slowing down restores At Your Own Pace, and settling down restores In Place. The nap is what happens when the three Ps are restored after being violated. The core is the same, run in two temporal directions. JP³ activates it from the bottom of the curve (priming → exit). Sleep lets it descend from the peak of violation (return → settling).

This closes the doctrine's loop at its root, because Perig invented JP³ in response to his sleep problems. It also avoids building a separate device, and it shows that the three Ps are more fundamental than a morning-method recipe. They describe a **protected zone of somatic autonomy**, of which JP³ (morning activation) and sleep (evening descent) are two modes. The three Ps should therefore be understood not as parameters of a device but as conditions from which several states derive: activation, descent, sleep. This is a broader frame than the morning method alone: JP³ as a return to the three Ps. Any future work on sleep within the framework should start from the topology "violation → return" rather than look for a mirror device.

A terminological reminder: the P concerned with home is **In Your Own Place**. A spurious label, "Prompted", has appeared in some generated text and should be corrected wherever it reappears.

---

### §2.5 Modulation of the three Ps — a grammar of re-weighting

The three Ps are not rigid constraints that must all be met at once. They are **vectors that re-weight one another** according to circumstances. This was discovered on 2026-08-27 while running. Own Pace pulled forward into a pose-running-style forward-fall, In Place bent into horizontal displacement, and yet the JP³ regime held, because the **via negativa core** was not broken: the ankle-dominant spring-mass regime was maintained and the phasic-glycolytic system stayed excluded.

The earlier framing treated In Place as almost synonymous with horizontal immobility. Perig identified this attachment as a bias that had made him miss rich variants (elastic heel strike, midfoot forward-fall). The method is defined as "least possible effort". The forward-fall costs *less* effort, since gravity does the work, so it *should* belong to JP³, and a strict reading of In Place wrongly disqualified it. This does not dissolve stationarity: In Place remains the defining pole of JP³ (§2.3). The bend is a local re-weighting around a stationary centre, never a route or a destination; what was a bias was treating strict immobility as the *criterion*, when the criterion is the via negativa core. "Least effort" is not passivity, however. Keeping the fatigable, phasic muscles out of the movement is itself the skill at the heart of the singularity (the standing soleus push-up, §1.2.8). The core is something one maintains, not something that happens on its own.

**The rule.** A variant that reduces effort while preserving the via negativa core is valid JP³, even if it bends one of the three Ps. The core is the judge, and it has three criteria:

- no phasic-glycolytic recruitment;
- the ankle-dominant spring-mass regime is preserved;
- self-deleterious cascades are not triggered.

This matches the via negativa reading of the soleus push-up family (§6.2): what JP³ shares with the SPU is a negative constraint, not a positive equivalence. The vocabulary to use is "modulation between Ps", "re-weighting according to circumstances", and "the three Ps as vectors, not rigid constraints".

> **Sources (§2):**
> - `memory/feedback_jp3_nommer_p123.md`
> - `content/en/article.md` §3.1 extract (In Your Own Place)
> - `memory/project_seuil_solitude_perceptive.md`
> - `memory/project_own_place_exageration_relative.md`
> - `memory/project_jp3_furtif_decouverte.md`
> - `content/en/article.md` §3.1 extract (At Your Own Pace)
> - `content/en/article.md` §3.1 extract (Jogging in Place)
> - `memory/feedback_jp3_est_in_place.md`
> - `memory/project_pieds_nus_condition_acces.md`
> - `memory/project_warmup_piedsnus_prematch.md`
> - `project_imagerie_cheville_ordonnance.md`
> - `memory/project_3P_test_definitoire_sommeil.md`
> - `memory/project_3P_modulation_grammaire.md`

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
> **⚠ Correction note:** attribution errors flagged in `PILOTE-refs.md` §Pilote 1 — Hamilton/Zderic (not "Raper"), iScience 25(9), article 104869 ; figures 52% / 60% to be verified. To be corrected during the harmonization pass.

The soleus muscle, often overlooked, is a critical component in age-related mobility decline, being the first to atrophy and losing up to 35% of its strength after age 60. The "Jogging in Place × In Your Own Place" combination is ideal for targeted activation. The absence of horizontal displacement concentrates 100% of the force into vertical plantarflexion, forcing the soleus to work continuously against gravity without the assistance of momentum. This enables **maximal activation of the slow, oxidative fibers** of the soleus, which functions as the body's "second heart" by improving venous return and maintaining the "soleus pump." A study on "soleus push-ups" (Hamilton et al., 2022) — a setup in which the soleus is solicited in a seated position for several hours — documented a **52% reduction in postprandial glucose excursion** and a **60% reduction in hyperinsulinemia**. The authors attribute these effects to sustained soleus uptake of blood glucose and to reduced insulin demand. Transposition to standing jogging in place such as JP³ remains mechanistically plausible but has not been empirically established. JP³ reproduces these conditions of intense and prolonged activation, favoring a predominantly oxidative metabolism and the use of fat as fuel. JP³ thus offers a unique intervention to counter soleus decline, improve propulsion efficiency, and stimulate fat metabolism, even in individuals with low exercise capacity.

---

#### §3.2.2 The heel activator — systematic opening portal

> **source:** fiche `project_talon_activateur_stacking.md` (2026-09-25, ⚡⚡⚡)

**Context of discovery** — 2026-09-25, morning, mild cold. Decision to bounce by letting the weight drop onto the heels, so as to wake up with minimal effort. The fatigue constraint was the *revealer* of a regime that, as Perig specified in the same exchange, turns out to be the **canonical portal** of every JP³ session — not an emergency variant.

**Three articulated mechanics**

**1. Heel as geometric lock of In Place (strict In Place)**
Landing heel-first ≈ practically stepping backward. Running In Place becomes self-locking: it is impossible to drift forward, and there is no longer any need to hold strictness cognitively. As soon as the pattern reverts toward a "tendency to go forward" (even without actual displacement), the mere shift of the center of gravity and of the plantar contact zone already creates fatigue. The heel activator = absolute *degré zéro* (degree zero) of In Place.

**2. Passive elastic spring — spring-mass at minimal recruitment**
The triceps surae / ankle / arch work through pure elasticity, with the heel as activator of the stretch-shortening cycle. No phasic-glycolytic recruitment. Confirms and refines `project_ankle_dominant_regime.md` — this is the regime in its most economical form observed to date.

**3. Stacking cascade triggered by the rear plantar landmark**
Structurally new discovery: the heel, as rear anchor point, **recalls the vertical**. It is impossible to stay head-forward while bouncing on the heels — the head spontaneously returns to its normal position, and physiological stacking occurs without any effort of postural correction. Posture is not **built** from the top down; it is **revealed** by the point of support. The missing kinematics needed to complete `project_chaine_posturale_profonde.md`.

**Reinforced ego-and-echo corollary**

Arms and hands freed for the **usual manual activities during JP³ at Perig's home** — dishes, tidying the house, concrete household tasks (a sedimented use documented for a long time, cf. FR article §4.6.8 and multiple memory notes). The heel breakthrough does not introduce this use — it **reinforces its geometric availability**: pelvis/trunk are held by the stacking cascade, not by active management of counterweights, so the upper limbs are *fully* disengaged (not just "cognitively free" but mechanically available for fine gestures).

**Cold-context signal**

Emerged under a minimal-effort constraint → a variant particularly relevant for:
- the sarcopenia / older adult / recovery pole (`project_sarcopenie_voie_royale.md`) — an even gentler entry point than *pointe-molle* (soft-forefoot bouncing)
- tired morning priming / the day after a match
- a possible pedagogical bridge to make JP³ less foreign to audiences who do not dare bounce on the forefoot

**Literature anchors (Perplexity research 2026-09-25)**

Four academic corpora converge on the heel activator, without overlapping:

1. **Perry — the three rockers of gait** (heel rocker → ankle rocker → forefoot rocker): the JP³ stacking cascade = a biomechanical formalization known in gait analysis. Heel contact is not isolated but is the mechanical trigger that tensions the posterior (back) chain and propagates toward the forefoot. Provides a clinical vocabulary shared with physios/podiatrists.
2. **Knutson & Söderberg — stretch-shortening cycle (SSC)**: biphasic co-contraction of TA + gastrocnemius + soleus precisely at heel contact. EMG confirmation that the heel activator is the stage on which the TA/triceps surae co-contraction documented in `project_tibialis_anterior_co_contraction.md` plays out as pre-activation.
3. **Nigg — "muscle tuning"** (see `project_nigg_muscle_tuning.md`): impact forces are not harmful shocks but **input signals** used by the CNS to calibrate the stiffness/damping of the next step. **Theoretical foundation legitimizing the JP³ presupposition "impact = information, not trauma".**
4. **Bassey & Ramsdale — osteogenic effect** (see `project_osteogenic_jgh_seconde_porte.md`): heel drop produces ~3× BW at the hip, maintenance of bone density in postmenopausal women; a threshold of ~2× BW and frequencies of 10-20 Hz trigger bone formation. **Opens a second JGH door parallel to sarcopenia: osteoporosis.**

**Reading caveat**: the research is written within an implicit shod frame (impact = what happens inside a running shoe). The JP³ heel activator is barefoot, which changes the mechanics — Nigg's muscle tuning should be more effective barefoot (less noise in the signal), but the cited literature does not make this distinction. To be thematized explicitly in the manual so that the reader does not infer "heel striking in cushioned shoes".

Archived Perplexity source: `facts/perplexity-talon-impact-2026-09-25.md`.

**Position in the sequence (decided by Perig 2026-09-25)**

**Systematic portal at the start of the session — whatever the state of health.** The heel activator is neither an emergency variant (cold/fatigue only) nor an access door to be transferred later toward *pointe-molle*. It is the **entry regime** of every JP³ session.

**Variable extension depending on state.** In some states (cold, fatigue, foggy morning, probably the day after a match), the heel activator can last *the whole session*. In other states, it opens and then gives way to the *pointe-molle* variant (or coexists with it — yet to be specified through observation).

**Doctrinal implication** — the heel activator is neither a special case nor a secondary variant; it is the **canonical opening kinematics**. *Pointe-molle* is what may follow (or not). To be reformulated as a sequence, not as parallel alternatives.

**Second regime — incident heel activator**

The heel activator has **two doctrinally distinct regimes**:

1. **Systematic portal at the start of the session** — described above, the canonical opening kinematics of every JP³ session.
2. **Incident regime** — see §3.2.4 below. The same gesture (heel shocks) performed in the flow of daily life, in the middle of another activity, without changing overall posture or entering a "session". One shock = one calibration update (via Nigg's muscle tuning). Figure/ground inversion: daily life is primary, JP³ embeds itself in it.

The two regimes do not compete: they exploit the same fundamental mechanics (heel impact → SSC → tuning → proprioceptive cascade), but with opposite temporal topologies (dedicated block vs. dispersion). A mature JP³ practitioner probably practices both.

**Perplexity research enrichment 2026-11-04 (geometric propulsion)**

> **source:** `facts/perplexity-propulsion-geometrie-heel-2026-11-04.md`

- **SSC + stretch reflex ~40 ms (Komi 2000)** — mechanically confirms the JP³ heel-activator spring; soleus = central actor.
- **Preactivation set before contact** — the brain sets the gain before landing; consistent with JP³ as a school of calibration.
- **Extensor thrust / positive supporting reaction / crossed-extensor reflex** — convergent hypothesis, not confirmed for heel strike specifically; to be kept as an explanatory lead for the felt sense of a "necessary forward propulsion" when heel loading is fully received.
- **Perry's three rockers** — shared clinical vocabulary, already noted above.
- **Whittington & Thelen spring-mass + roller** — supports the image of a "circular spring" (wheel) vs. a "point foot" (vertical pogo); distinction between pogo (upward propulsion) / wheel (directional horizontal propulsion).
- **Kuo, Donelan, Ruina** — dissipative heel strike; push-off of the preceding limb restores energy; collision economy.
- **Holowka & Lieberman 2018 + Welte** — the human foot = **compliant at contact, stiff at push-off**; an adaptation for long-distance running. A canonical formulation directly readable as a description of JP³ in the heel-activator regime.
- **Laetoli (3.6 Mya)** — heel strike + medial arch + big-toe impression = archaic pattern. Evolutionary argument for the heel activator; defuses modern running's "heel-striking is bad" discourse.
- **Windlass contested** — doctrinal texture to be modulated: stiff plantar fascia + arch height + intrinsic foot muscles all count; not just the windlass.
- **🔑 Crucial refinement** — *"In place, there is no net horizontal impulse over a cycle. What you feel as a forward drive is probably the orientation of the force and the readiness of the posterior chain."* — distinguishes **directional activation without translation** (In Place intact) from **actual translation** (overflowing strict In Place). Extends the re-weighting grammar of the three Ps (★★ 2026-08-27 `project_3P_modulation_grammaire.md`) to vectors applied as orientation without translation.

**Open question** — Perig ran *inside his house* on 2026-11-04 following the geometric permission granted by heel loading. Two possible doctrinal readings:

- **Strict reading** — JP³ remains In Place; the fact that heel loading creates an *availability* to move forward is an emergent property that manifests when one *lets the valve* open (running). Running remains a **cousin** of JP³, not a variant.
- **Recast reading** — the grammar of the three Ps absorbs this availability as an **oriented vector without translation** (confirmed by Perplexity). Stationary In Place keeps the orientation; running in the house activates translation. The diptych becomes tolerable within the same framework.

To be decided with Perig during the harmonization pass (§3 / §6).

---

#### §3.2.3 Back chain dominance and the heel-drop toxicity hypothesis

> **source:** fiche `project_back_chain_dominance_talon.md` (2026-09-25, ⚡⚡⚡)

**The breakthrough** — dictated by Perig on 2026-09-25 at 13:19, immediately after the incident-regime breakthrough: *"Another absolutely fundamental point I'm realizing is that stacking through the heel is in fact the fundamental trigger of back chain dominance, which is deficient in pretty much everyone. Possibly partly because of thick-heeled soles."*
> *FR original:* « Un autre point absolument fondamental que je réalise c'est que le stacking grâce au talon, c'est en fait le déclenchement fondamental du back chain dominance, qui est en déficit chez pas mal tout le monde. Possiblement en partie à cause des semelles épaisses au talon. »

**The unifying concept**

**Back chain dominance** (posterior chain dominance, *dominance de la chaîne postérieure*): the functional capacity to mobilize the posterior muscle chain — posterior calves (soleus, gastrocnemius), hamstrings, glutes, spinal erectors, multifidi, posterior cervical chain — as the main engine of extension and locomotion, rather than relying on the anterior chain (quadriceps, psoas, rectus abdominis, anterior cervical muscles).

It is a concept **familiar in strength and conditioning, physiotherapy, and rehabilitation** — not an ad hoc JP³ doctrine. Cousin terms: "gluteal amnesia" (Bramble & Lieberman, already cited in `project_chaine_posturale_profonde.md`), "quad dominance" (athletic preparation), "posterior chain weakness" (rehabilitation physio), "anterior pelvic tilt" (posturology).

The back chain deficit is **the most solid consensus in modern movement science** about what is structurally wrong with sedentary contemporary humans (with or without an athletic dimension). Chronic low back pain, patellar tendinopathy, underuse of the glutes, inaccessible forefoot stride are all known corollaries.

**The heel activator = fundamental trigger**

The spontaneous stacking described in §3.2.2 — "the head spontaneously returns to its normal position, physiological stacking occurs without any effort of postural correction" — **is not just local kinematics; it is the entire posterior chain realigning in an ascending cascade**:

heel landed (rear plantar landmark) → passive tensioning of the triceps surae → soleus activation (deep postural chain, § 4.1) → hamstring tension → glute engagement (gluteus maximus + gluteus medius via `project_axe_frontal_moyen_fessier.md`) → spinal erectors → multifidi (deep postural chain) → head returning to the vertical (posterior cervical chain)

**The word "stacking" and the concept "back chain dominance" name the same phenomenon from two angles** — one kinematic/postural, the other muscular/functional. Recognizing this identity strengthens the doctrine: JP³ does not invent a chain; it re-activates a known chain through a precise mechanical input (the heel as rear plantar landmark).

**The civilizational hypothesis — thick-heeled soles**

**Mechanical fact**: virtually all modern shoes have a positive heel drop of 8 to 12 mm (running, city, "comfort", work shoes). A heel-to-forefoot height difference that **passively and permanently tilts** the body forward.

**Chain of plausible consequences**:
1. Permanent anterior tilt → recentering of weight onto the forefoot and the quadriceps
2. Chronic unloading of the posterior chain (triceps surae in particular, but also glutes, which no longer have to counter the tilt)
3. Adaptive shortening of the triceps surae, functional weakness of the glutes
4. Structural shift toward the anterior chain → generalized quad-dominance

**Combined with sedentariness** (chair → glutes inhibited in the seated position): a cumulative effect possibly decisive at civilizational scale. The hypothesis: **civilizational heel drop may be *the* main causal factor of the back chain deficit, more than sedentariness alone**.

**Status of the hypothesis**: strong, to be sourced. To be documented through targeted research in:
- Lieberman *Born to Run* (2009) and post-Born to Run academic papers
- Minimalist shoes corpus (Vibram, Xero Shoes) — activist argumentation to be filtered academically
- Ben Patrick / ATG — clinical protocols (tibialis raise, sled backward) explicitly rest on this hypothesis
- Robbins et al. — "impact illusion", cushioned shoes that deceive the CNS
- Rehabilitation physiotherapy — literature on heel lifts, orthotics, postural effects

Overlaps with `project_pieds_nus_condition_acces.md` (barefoot = access condition), `project_warmup_piedsnus_prematch.md` (barefoot = triceps surae calibration), and `project_nigg_muscle_tuning.md` (Nigg: impact = signal, thick sole scrambles the signal).

**JP³ heel activator = diffuse dose-responsive antidote**

The incident regime (§3.2.4) takes on a **medically precise dimension** from this angle:

- **Counter-toxic dose-response model**: civilizational heel drop is a chronic stimulus unloading the posterior chain; the heel activator in incident regime is an intermittent stimulus reloading it. Small doses repeated throughout the day, accumulated, counter the cumulative effect of heel drop.
- **It is not an exercise one adds; it is an antidote one distills.** A conceptual frame radically different from a training protocol.
- **Barefoot is probably the access condition**: shoe = even in incident regime, heel drop attenuates the Nigg signal and blocks the cascade. The open question noted in §3.2.4 fits within this frame — the strict reading (barefoot mandatory even in incident regime) is consistent with the civilizational hypothesis.

**Cross-reference with existing JP³ memories**

This memory is **unifying** — it names a conceptual binder that already runs through several memories:

- `project_chaine_posturale_profonde.md` — the DPC (deep postural chain) includes soleus, glutes, erectors, multifidi = almost all the actors of the back chain (the DPC is broader: it also includes TA transversus abdominis and anterior DNF, which are anti-collapse stabilizers, not actors of posterior locomotion)
- `project_ankle_dominant_regime.md` — the ankle-dominant spring-mass regime *is* a posterior chain regime at the level of the leg (soleus = posterior)
- `project_geometrie_chasse_neige_goata.md` — toes-in realigns the plantar tripod for synchronized push = sprint geometry = back chain mobilization
- `project_pieds_nus_condition_acces.md` — barefoot = access condition to the spring-mass regime = access condition to the back chain
- `project_axe_frontal_moyen_fessier.md` — gluteus medius = back chain actor in the frontal plane
- `project_tibialis_anterior_co_contraction.md` — the TA (anterior leg) is the *stabilizing* counter-partner of the posterior chain, not a rival. A co-contraction prerequisite, not a deviator.

**Back chain dominance is the concept that unifies them all.** To be used as a theoretical filing layer, not as one more memory piling up.

**JGH strategic implication**

"Posterior chain rehabilitation" is a **familiar clinical lexicon** in geriatrics, post-surgical rehabilitation, sports physiotherapy. Use this vocabulary in the JGH deck:

- Defuses from the outset the friction of "yet another personal theory" — JP³ is attached to a clinical concept already accepted and abundantly documented
- Makes the argument transitively defensible — if JGH clinicians accept that the back chain deficit is a problem (they will, it is consensus), JP³ becomes one candidate rehabilitation modality among others, to be compared rather than defended
- **Sarcopenia + osteoporosis + back chain rehabilitation** = a triangle of mutually reinforcing arguments: three distinct problems that JP³ addresses through the same gesture (heel activator), with clinical metrics available for each

To be integrated into `project_jgh_presentation_voie.md` as a third pillar (alongside sarcopenia and osteoporosis). Candidate slide: "JP³ = triple-target intervention on three classic geriatric deficits through a single gesture."

**To document / open questions**

- **Sourcing thick soles → back chain deficit**: targeted Perplexity search to launch soon on "heel drop positive effect on posterior chain activation" and "gluteal amnesia footwear"
- **Quantifying the deficit in the population**: prevalence studies on chronic low back pain, gluteal amnesia, quad-dominance?
- **Dose-response effect of the incident regime**: how many shocks per day to counter civilizational heel drop? No a priori answer; to be observed/found by trial and error
- **Transfer to shod**: if the incident regime truly primes the back chain, is there a carry-over to shod walking (improved standing posture even in shoes)? An empirical question to observe in Perig

---

#### §3.2.4 Incident regime — the atom is the shock, not the session

> **source:** fiche `project_jp3_incident_regime.md` (2026-09-25, ⚡⚡⚡)

**The breakthrough** — dictated by Perig on 2026-09-25 at 13:08, as an immediate echo to reading the Perplexity research on muscle tuning: *"If I accept that bouncing on the heel triggers all sorts of adaptations, I think you can start JP³ at any moment of the day, even while you're doing something else, even when you don't feel like it, simply by giving a few heel shocks, and it doesn't change the posture the way it used to. Before, it was: I run and then I try to do things. Now it's both at the same time."*
> *FR original:* « Si j'accepte que le rebond sur le talon déclenche toutes sortes d'adaptations, je pense qu'on peut commencer le JP³ à n'importe quel moment de la journée même quand on est en train de faire autre chose même quand on n'a pas envie simplement en donnant quelques chocs du talon, et cela ne change pas la posture comme ça le faisait avant. Avant, c'était je cours et ensuite j'essaie de faire des choses. Maintenant c'est les deux en même temps. »

**What shifts**

**Before** — JP³ = *distinct session*. Model: I stop → I enter JP³ mode → stacking cascade, spring-mass, ego and echo → I come out of it, wanting to go out. Daily life was on pause during JP³.

**Now** — JP³ = *embeddable modality*. I keep doing what I am doing (dishes, cooking, reading while standing, walking around indoors), and a few incident heel shocks suffice to trigger the underlying adaptive cascade — without reconfiguring overall posture, without deciding "I'm doing JP³ now". Figure/ground inversion: daily life is primary, JP³ runs in the background.

**The JP³ regime is no longer binary (in/out) but graded/dispersed.** A day can contain *N* distributed micro-activations without any distinct session ever having taken place.

**Three displaced doctrinal pivots**

**1. Entry threshold collapsed to near zero.** Motivational friction (fatigue, "don't feel like it", anhedonia, mild depression) becomes non-blocking: a heel shock while passing through the kitchen = already the beginning. Cf. `project_amorcage_vs_seance.md` — priming descends to *the atom*, not just to a "short session".

**2. Priming at atomic granularity.** The JP³ unit is no longer the session, nor even priming (in the 10-30 min sense); it is *the shock*. One shock = one proprioceptive/muscular calibration update, available at any moment with no decisional cost. The session becomes the optional aggregation of shocks, not their prerequisite.

**3. Ego and echo reversed — figure/ground inversion.** The ego-and-echo doctrine (`project_ego_echo_doctrine.md`) said: during JP³, the mind is free / the body carries. In the incident regime, it is the body that carries *the encompassing activity* (dishes, cooking, walking), and JP³ occurs *within* it as an attention-free regulating background. Complete inversion: the manual task is no longer the permitted occupant during JP³; it is the primary activity into which JP³ inserts itself.

**Theoretical anchor — Nigg confirms**

Nigg's muscle tuning (`project_nigg_muscle_tuning.md`) predicts exactly this: a small number of impact signals suffices to trigger a muscular calibration adjustment. Perig's breakthrough reads as a practical refinement of Nigg — "one heel shock = one proprioceptive/muscular calibration update, available at any moment with no decisional cost". Nigg probably did not anticipate that it would be used consciously as a device, but the mechanics are those.

**JGH clinical implication — colossal (adherence)**

The heaviest problem of exercise protocols in older adults (sarcopenia, osteoporosis) is not contraindication but **adherence**. "10 min morning and evening" is a wall for many — depression, apathy, forgetting, competing priorities. Here: *a few heel shocks every time one passes through the kitchen or while waiting for the microwave* = a diffuse protocol, nearly free decisionally, with a cumulative load probably greater than a single daily session.

**For osteoporosis** (`project_osteogenic_jgh_seconde_porte.md`) — an even stronger argument: the osteogenic literature suggests that **spaced repetition** may beat the single daily block at equivalent total load (bone "saturates" and becomes receptive again after rest). The incident regime matches this pattern perfectly. To be verified/sourced.

**For sarcopenia** — the incident regime makes it possible to solicit the triceps surae over *the whole day* rather than over a single window, which could be decisive in frail subjects who do not tolerate a continuous session.

**Open question — barefoot vs. shod**

The ⚡⚡⚡ memory `project_pieds_nus_condition_acces.md` establishes that the ankle-dominant spring-mass regime does not prime in socks/shoes for Perig. The incident regime raises a question to be observed rather than decided a priori:

- **Strict reading** — the incident regime holds *at home, barefoot*, like the rest of the framework. Shod, the sole dampens the Nigg signal and tuning is not triggered.
- **Open reading** — the heel activator in incident regime is *more tolerant* of footwear than the systematic portal, because the minimal input (one shock) suffices to cross the tuning threshold even if the signal is attenuated.

**Current doctrinal position**: a question to observe. Record both hypotheses, let experience decide. Perig is probably barefoot by default at home — that is where the breakthrough appeared — so the strict reading holds at least for that context. Extension to shod/outdoors remains a hypothesis to test.

**Name retained**

**JP³ incident** (incident regime) — emphasizes that it embeds itself in an encompassing activity. Alternatives considered and set aside: "atomic" (emphasizes the unit, more technical), "diffuse" (emphasizes dispersion, less vivid). "Incident" keeps the double meaning: isolated event + incident upon something else.

---

### §3.3 In Place × Pace — effortless behavioral activation, natural progression

> **source:** `content/en/article.md` §2.1.3

"At Your Own Pace" (personal tempo, ultra-slow start) combined with "Jogging in Place" (repetitive movement) enables **natural progression of intensity "through boredom"**. This approach eliminates the initial activation barrier and the need for intrinsic motivation at the outset. Energy unfolds naturally, bypassing the failures of discipline-only regimens and facilitating long-term adherence.

---

### §3.4 The confluence — three Ps as a unitary device

> **back-ref:** §1.2 ("³" as cubic trajectory, y = x³ vs y = 3x)

The three dyadic synergies (§3.1, §3.2, §3.3) do not add up — they **converge** in a unitary device where each P is both conditioning and conditioned by the other two. It is the mathematical structure *y = x³* (not *y = 3x*) that gives the framework its singular signature: the cubic trajectory requires the three dimensions as interdependent, not as parallel vectors.

**Enrichment 2026-09-25** — The heel activator (§3.2.2), back chain dominance (§3.2.3), and the incident regime (§3.2.4) are three stratifications of the confluence, not three additional pillars:

- **Theoretical** (Nigg + Robbins + Perry + Welte) — impact = signal, not trauma; foot compliant at contact, stiff at push-off.
- **Kinematic** (stacking via rear anchor, ascending cascade) — geometry of the posterior chain realigned by a minimal point of support.
- **Anatomical** (back chain dominance, heel-drop toxicity hypothesis) — civilizational deficit addressed by a diffuse dose-responsive antidote.
- **Temporal-doctrinal** (incident regime, atom = shock) — collapse of the entry threshold, figure/ground inversion, priming at atomic granularity.

These four layers are not four independent strata but four readings of the same device. They sediment the confluence: the JP³ singularity lies neither in one P nor in one synergy, but in the way the three lock together into a single calibrating gesture (the barefoot heel shock in stacked posture).

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

### §4.4.1 Zones of cerebral hypoperfusion

The intuitive concept of "localized asphyxia zones" that would be resolved by rhythmic movement is **not speculation**: it corresponds to a documented field of vascular neurophysiology.

***Depth-dependent* decline of cerebral microcirculation** — aging, sedentariness, poor sleep, and chronic stress produce an **inhomogeneous** decline of cerebral microcirculation. This is not a global drop in flow; it is **inter-capillary heterogeneity**: some capillaries become hypoperfused while others compensate. The result is functionally equivalent to focal "asphyxia zones," alternating with normal zones.

Most affected structures: subcortical white matter (most marked vulnerability), deep cortical layers (layer IV in particular), periventricular regions. Human clinical equivalent: white matter hyperintensities (WMH), cerebral small vessel disease (CSVD), chronic cerebral hypoperfusion.

**Resolution through moderate aerobic exercise** — key study **Falkenhain et al., eLife 2023** — *Aerobic exercise reverses aging-induced depth-dependent decline in cerebral microcirculation*. Five months of voluntary running in aged mice produce:
- Improved capillary RBC flow, especially in white matter
- Increased tissue pO₂ in layer IV
- **+46 % flow** in ascending venules
- **Homogenization** of inter-capillary flow — the key effect, more significant than a simple increase in the mean
- Increased microvascular density (structural remodeling)
- Measurable improvement in cognitive performance (object recognition)

Quotation: *"microcirculatory effects were accompanied by an improvement in cognitive function... exercise decreased flow variability across capillaries, suggesting more homogeneous microvascular blood flow."*

**Movement does not produce *more* perfusion, it produces *better-distributed* perfusion** — precisely the inverse of focal hypoperfusion.

**HIIT: opposite effect above the anaerobic threshold** — systematic review, Frontiers in Aging Neuroscience 2022: **moderate** exercise increases CBF, whereas exercise **above the anaerobic threshold *lowers* CBF**. A direct physiological argument in favor of the JP³ regime against extreme intensity.

**Acute hippocampal response** — Cerebral Cortex 2020, *Hippocampal Blood Flow Is Increased After 20 min of Moderate-Intensity Exercise*. In older adults with fragile cerebrovascular health, a single moderate session produces: an *attenuated* drop in CBF immediately post-exercise (0-6 min), a **marked rebound** with CBF above baseline between 18 and 24 min post-exercise, and an effect sustained up to **60 min post-exercise** (ASL-MRI).

---

### §4.4.2 Foot-strike shock waves and pulsed cerebral perfusion

**The mechanism (Lohman/NMHU group)** — New Mexico Highlands University (Lohman, Wasson et al.) documented by ultrasound that **each foot impact** (4-5 G in running) generates a **retrograde pressure wave** in the arteries, travelling up to the carotids and on to the brain. Quotation: *"Brain blood flow is very dynamic and depends directly on cyclic aortic pressures that interact with retrograde pressure pulses from foot impacts."*

**Heart rate / stride rate synchrony (HR-SR)** — quantified result (**Wasson et al., FASEB 2012**): when HR and cadence are **in phase**, blood velocity in the middle cerebral artery (CBFv) goes from:
- **56 ± 6 cm/s** (out of phase)
- to **78 ± 8 cm/s** (in phase) — i.e. **+39 %**

*The mere fact that heart rhythm and step rhythm are synchronized multiplies cerebral perfusion by 1.4.*

**Continuum cycling < walking < running** — *"There is a continuum of hemodynamic effects on human brain blood flow within pedaling, walking and running, and these activities may optimize brain perfusion, function, and overall sense of wellbeing during exercise."*

**Important open question for JP³**: the biomechanics of jogging In Place (pure vertical rebound, without horizontal energy dissipation) should *theoretically* maximize the shock wave compared with horizontal running at the same perceived intensity. No direct study found — an original research avenue (a potentially unique physiological signature of JP³).

---

### §4.4.3 Glymphatic clearance and exercise

**Iliff / Nedergaard foundations (2012-2013)** — a paravascular system through which cerebrospinal fluid (CSF) circulates through the brain parenchyma and drains interstitial metabolites (including amyloid β). Fundamentally **rhythmic** — pumped by respiratory oscillations, arterial pulsatility, head movements.

**Recent human evidence — Yoon et al., Nature Communications 2025**: *Long-term physical exercise facilitates putative glymphatic and meningeal lymphatic vessel flow in humans*. Twelve weeks of cycle ergometry in humans:
- Significant increase in glymphatic influx at the putamen (dynamic contrast-enhanced T1 MRI)
- Increase in the size and flow of meningeal lymphatic vessels
- Effect correlated with a measurable decrease in plasma inflammatory markers

**Molecular mechanisms** (Yoon 2025):
- Down-regulation of S100A8, S100A9, PSMA3, DEFA1A3 (inflammation)
- Up-regulation of J chain (immunoglobulins)
- Modulation of astrocytic polarization of **AQP4** (aquaporin-4), key to CSF-parenchyma coupling

**In aged mice**: voluntary exercise improves amyloid β clearance and reduces astrocyte and microglia activation (PMC 2017).

**Acute effects** — a single exercise session is enough to modify the volumetry of perivascular spaces (direct MRI measurement of glymphatic pathways) — 2024 study. The glymphatic system **responds within the session itself**.

---

### §4.4.4 Brain rhythms and locomotion

**Central Pattern Generators (CPG)** — a CPG is a set of neurons capable of generating a rhythmic motor pattern **without external stimulus**. Grillner and colleagues (1970s) established that vertebrate locomotion relies on spinal CPGs; in humans, the existence of a functional spinal CPG is supported by growing evidence (Minassian et al. 2017). CPGs are **entrainable** by external stimuli: *"Signals from the brain stem can modulate the period of oscillations to adjust walking or running speed, and a more complex behavior is the entrainment of movement to an external stimulus, such as playing or dancing to music, or walking in time with a companion."* Grillner's concept of **"unit burst generators"** — several oscillators that can be coupled in different configurations.

**Locomotor hippocampal theta** — one of the most robust findings in animal neurophysiology: as soon as the rat starts running, a powerful theta rhythm appears in the hippocampus, and its frequency correlates with speed (Vanderwolf 1969). In humans (Goyal et al., Nature Communications 2020; Bush et al., PNAS 2017):
- Human theta is **slower**: centered around **3 Hz** (low theta) and **8 Hz** (high theta), vs. ~8 Hz in the rat
- **Two functionally distinct components**:
  - **Low theta (~3 Hz)**: more anterior, associated with memory, does not vary with speed
  - **High theta (~8 Hz)**: more posterior, correlates with movement speed
- **Theta power** increases from the onset of movement and scales with distance travelled

**Implication for JP³**: even jogging In Place at a slow cadence engages a massive cognitive-mnemonic hippocampal signal. This is not a consequence of intensity — it is a consequence of **the presence of rhythmic movement itself**. This finding shifts the reading of the cognitive effects of exercise: they are *carried by rhythm*, not only by cardio-respiratory load.

**Locomotor-Respiratory Coupling (LRC)** — breathing locks onto the locomotor rhythm, typically 2:1, 3:1, or 4:1 (steps per inhalation). Benefits (Frontiers in Neuroanatomy 2022; PLOS ONE 2012; PLOS ONE 2013):
- Reduces mechanical interference between the respiratory and locomotor systems
- Lowers the energy cost of ventilation
- Improves ventilatory efficiency
- An external metronome stabilizes LRC and saves energy
- Impact loading (foot strike) significantly influences respiratory dynamics

The preferred LRC regime = low-to-moderate intensity. At high intensity, breathing **decouples** from the locomotor rhythm. A direct physiological argument for the slowness of JP³.

**Locomotor-Cardiac Coupling (LCC)** — the cardiac analogue. Documented by the Lohman/NMHU group — it is precisely this coupling that maximizes cerebral perfusion via retrograde waves. LCC mechanically links §4.4.2 (pulsed perfusion) to §4.4.4 (rhythms): **a single phenomenon of multi-systemic synchronization**.

**Proof through pathology — Parkinson's and RAS** — **Rhythmic Auditory Stimulation** (Thaut) uses a metronome or music to restore gait in Parkinson's patients. Documented mechanism: RAS **bypasses the failing basal ganglia** via **cerebellar** pathways (2025 review). *"Music therapy provides external rhythmic stimulation, recruits neural networks to bypass the basal ganglia and synchronizes gait with external rhythms through auditory-motor neural networks."* If rhythm can restore the gait of a person with Parkinson's, one can reasonably assume it can resynchronize a brain that is simply tired or stressed.

---

### §4.4.5 Trigger points — muscular analogy

**A parallel muscular mechanism** that illuminates the cerebral logic by analogy: **myofascial trigger points** (Travell & Simons) are zones of **local ischemia** produced by sustained contraction → ATP depletion → locked actomyosin crossbridges → painful nodule. Resolution: **restoration of local blood flow** via gentle movement, compression, or release.

Quotation (Chinese Medicine 2011): *"Ischemia results in the loss of ATP formation in a small region of muscle fibers, the crossbridges in this region cannot be released, and a trigger point forms... Treatment should be aimed at relieving ischemia by manual therapy that increases local blood circulation."*

**Structural** cerebral parallel: focal hypoperfusion (§4.4.1) → local dysfunction → resolution by restoring flow via rhythmic movement. Not direct proof, but a coherent theoretical framework: the whole body — muscle and brain — seems organized according to a single logic of focal perfusion amenable to resolution through gentle, sustained movement.

---

### §4.4.6 Oscillatory hierarchy — convergent spectrum rather than pacemaker

**Question**: is there **ONE** central pacemaker of the brain which, if tuned, would reorganize the whole of physiology? **Verdict: for fast rhythms, no — but what exists instead is richer and more favorable to JP³ than the initial concept.**

**The only true anatomical master pacemaker: the SCN (circadian)** — the suprachiasmatic nucleus of the anterior hypothalamus. It coordinates peripheral oscillators (liver, heart, muscle, glands). Even the SCN is not a single neuron — it is a population of coupled cellular oscillators producing an emergent network rhythmicity.

**For all other rhythms** — locomotor, respiratory, cardiac, cognitive, cortical — **no single anatomical master pacemaker**. The brain is a hierarchy of coupled oscillators.

**Dominant theoretical framework — Buzsáki and the nested hierarchy**: an oscillatory hierarchy organized by **cross-frequency coupling**. Documented cascade: ultra-slow (~0.01-0.1 Hz) → slow oscillations (~1 Hz) → spindles (~10-14 Hz) → gamma (~40-80 Hz) → ripples (~150-200 Hz). "Neural syntax" (Buzsáki): slow rhythms provide a temporal structure that organizes fast rhythms like letters into words.

**Quasi-master candidates** (none is ONE unified pacemaker, but each deserves attention for understanding where JP³ might act):
- **Thalamic reticular nucleus (TRN)** — thalamic pacemaker; generates sleep spindles, modulates alpha; domain limited to thalamocortical loops
- **Locus coeruleus (LC)** — **the most interesting candidate for JP³**. Sole source of noradrenaline for the entire cortex; extremely diffuse projections with extra-synaptic NA release (*volume transmission*); tonic oscillations ~1-3 Hz; **sensitive to locomotion** (documented in rodents, hypothesized in humans); phasic mode (stress, brief alertness) vs. tonic mode (sustained arousal). Can be seen as a "quasi-master" of brain-wide coordination via arousal.
- **Ascending Reticular Activating System (ARAS)** — a distributed cholinergic + noradrenergic + serotonergic system (caudal midbrain to upper pons), with projections to the basal forebrain, hypothalamus, and intralaminar thalamic nuclei. Coordinates transitions between global regimes (wake/sleep, arousal, consciousness). An *orchestration* system rather than a rhythm generator.
- **Thalamic infra-slow oscillations (ISO, ~0.01-0.1 Hz)** — dorsal thalamic nuclei generate infra-slow oscillations coupled to the autonomic system (HRV, vasomotion) and visible in BOLD. Very high level in Buzsáki's hierarchy — they bias everything below. A 30-60 min JP³ session traverses several hundred ISO cycles — a potentially ideal condition for re-entraining the upper layers of the oscillatory hierarchy.
- **Pre-Bötzinger complex (preBötC)** — respiratory pacemaker; specialized; coupled to the locomotor CPG via LRC.

**The radical position — emergent synchrony without a pacemaker** — an important current: brain oscillations need no specialized pacemaker; synchrony emerges from weak collective coupling between neurons. **"Metastable Oscillatory Modes"** (Deco et al.) — transient brain rhythms = the signature of **metastable synchronization** in the spatio-temporal connectome, with collective frequencies emerging from delays and couplings, at frequencies **slower than the natural frequencies of the individual oscillators**.

**Reformulating the "Holy Grail"**:

> *The real "Holy Grail" is not a single anatomical pacemaker — it is rather: what is the **spectrum of convergent rhythms** which, injected simultaneously from the periphery, most effectively reorganizes the entire oscillatory hierarchy?*

JP³ seems to strike **several convergent bands simultaneously**: ~2 Hz from the step, ~4-8 Hz from complex respiratory coupling, ~0.1 Hz from the long cycles of the session. **Multi-band resonance** — precisely *because there is no pacemaker to target*, but a coupled hierarchy to which each band contributes a coherent constraint.

The **stance** of JP³ is explicitly **facilitative** and not *directive*: it *allows* a coherent oscillatory regime to emerge; it does not *impose* it. **No need to look for THE right rhythm** — what matters is **transversal coherence** across bands: a regular step, breathing that falls into tune, a session long enough to traverse several ISO cycles. Three scales, a single stance.

---

### §4.4.7 Pulsed neurovascular framework — synthesis of §4.4

The mechanisms of §4.4 form a unified physiological regime: **pulsed cerebral perfusion + glymphatic clearance + multi-oscillatory coherence**, in which slow rhythmic movement is simultaneously:

- A **pulsed vascular pump** (foot-strike waves → perfusion, soleus pump → venous return)
- A **glymphatic pump** (respiratory oscillations + arterial pulsatility → metabolite clearance)
- A **multi-oscillatory synchronization** (LCC + LRC + hippocampal theta + spinal CPG)

These are not three separate mechanisms — it is **a single systemic phenomenon**: the body becomes a coherent oscillatory machine, in which each step cycle is a cycle of perfusion, clearance, and neuro-cognitive resynchronization.

Reformulating the central question:

> *How does the rhythmic-pulsed regime, into which JP³ brings us, actively restore perfusion, clearance, and oscillatory coherence — and why does the "wrecked" state make it easier to enter?*

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

This section describes how a JP³ session actually unfolds, in the order in which the practitioner meets it. It begins before any movement, at **degree zero** (§5.1): standing on one's bones, a threshold that requires no motivation, entered in practice through the heel activator, the systematic opening portal of every session whatever one's state of health. That first moment is also a **diagnostic** (§5.2): in the silence of degree zero, character armor becomes audible, the body starts to lean forward without a destination, and a sudden vulnerability appears that must be honoured rather than corrected. §5.3 then sets out the **core execution**: the heel-activator opening, the full-session mode, the incident mode woven into daily life, and finally the kinematics of the **standing soleus push-up** (SSPU), the singularity of JP³ (§1.2.8). The SSPU is a skill: holding the centre of mass in a narrow fore-aft band, guided by Hamilton's own cue (*straighten the ankle, press lightly on the ball of the foot, thighs completely relaxed*), with a practical sequence that migrates the weight from the heel to a light press on the first metatarsophalangeal (MTP) joint, and a formula that sums it up: standing, the stacked skeleton is the chair. §5.4 follows the **initial segment** (t < √3), the first minutes in which the cubic curve is still below the line and nothing seems to happen, and describes the progressive entry of the physiological "instruments". §5.5 presents two **advanced variants**: the propulsive push against a support, and stealth or standing JP³. §5.6 closes with a **pre-activity use**: the barefoot warm-up before shod sport.

A distinction runs through the whole protocol and should be kept in view from the start. The *entry threshold* is near zero: one stands, one lets the heels drop, and nothing has to be forced. *Mastery* is the SSPU: keeping the fatigable muscles (quadriceps first, gastrocnemius second) out of the movement while standing is learned, through proprioception and plantar sensing, and its criterion is immediate repeatability. Thigh fatigue is an error signal, not a dose; if a second session straight after the first takes willpower, fatigable muscles were working. The many passages below that speak of "letting it happen", "permission" and "delegation" describe what the installed regime feels like and how its entry is approached. They do not mean that the regime installs itself without any learning. Once the regime is installed, it needs no sustained self-observation (ego and echo, §6.3).

**Contents**
- §5.1 Degree zero (*degré zéro*) — the entry threshold
- §5.2 Moment 0 as diagnostic — character armor, forward-fall, vulnerability
- §5.3 Core execution — kinematics and cues
  - §5.3.1 Heel activator opening
  - §5.3.2 Full session mode
  - §5.3.3 Incident mode
  - §5.3.4 SSPU — the skill of the narrow band (kinematics and cues)
- §5.4 The initial segment (t < √3) — anatomy of the first minutes
  - §5.4.1 Anatomy of the initial segment
  - §5.4.2 The symphony of mechanisms — progressive entry of the instruments
- §5.5 Advanced variants
  - §5.5.1 Propulsive push against support
  - §5.5.2 Stealth / standing JP³
- §5.6 Pre-activity use — barefoot warm-up before shod sport

---

### §5.1 Degree zero (*degré zéro*) — the entry threshold

The initial segment (§5.4) describes what *enters* the symphony of mechanisms, and the cascades of §4.3 describe what must *not* enter. Something comes before both: what precedes the entry of the first instrument, moment 0, when nothing is yet being played but everything is being prepared. This part of the protocol was identified on a morning of acute demotivation (2026-08-16), when the question "where do I start?" made manifest what had been left in the shadows: JP³ begins well before the first sway of the pelvis, in a state that can be named the ***degré zéro*** (**degree zero**).

#### "Slow" is a trap word

The first intuition, "start very, very slowly", leads to a biomechanical error. Moving slowly *increases* muscular load. A squat lowered over 5 seconds is harder than one lowered in 1 second, and tai chi is notoriously exhausting despite its appearance of slowness. Kinematic slowness imposes **sustained muscular contraction**, which is precisely what the x³ regime seeks to avoid at the start. Someone who tries to "start slowly" in the naïve sense immediately loads the quadriceps isotonically and pays the full metabolic price for a displacement that is nonetheless minuscule.

The right word is not *slow* but **passive**, **elastic**, **delegated**. The body's low speed is obtained not through muscular control but through **delegation to passive structures**: gravity, skeleton, ligaments, fascia, tendons. The muscle does not *carry*; it *releases and lets itself be recalled*. The *apparent* slowness is a consequence, not a cause to be imposed. Wherever this manual speaks of "very, very slow" (notably §5.4.1 and the cascades of §4.3), it should be read as *very, very passive, very, very little, very, very delegated*, never as "muscularly controlled slowly".

Delegation does not happen by default, however. Standing, nothing neutralizes the thighs the way a chair does when one is seated. Letting the weight pass through the skeleton while the quadriceps stay silent is part of the skill that §5.3.4 describes. The passive structures do the carrying, and the practitioner learns not to get in their way.

#### Absolute degree zero: standing on one's bones

Even before the first sway there is an earlier, more fundamental state: *standing*. The energy cost is near zero: weight passes through the skeleton, and the deep postural muscles make a minuscule tonic adjustment. Almost no decision is required, since one is already standing. No joint needs to move, no tendon needs to be loaded, no quadriceps needs to contract beyond its baseline tone. This is *already* JP³. It is even the only action that can honestly be called "the beginning of JP³", because everything else depends on it.

Degree zero has a rare property: *it requires no motivation*. One does not have to find the energy to start moving; one simply has to **notice that one is standing**. From there, weight can shift imperceptibly from one foot to the other, not by decision but by **permission**. At some point a joint will ask to open, and one lets it. Then a tendon will want to rebound, and one lets it. Each layer announces its entry, and none has to be forced. This is at once the most demanding and the gentlest formulation of the framework: the entry threshold is no longer "making the decision to exercise", it is simply *not resisting* what the body offers of its own accord. That describes the threshold, the near-zero first tier. What lies beyond it, the sustained soleus regime, is a learned skill (§1.2.8, §5.3.4). In practice the heel activator (§5.3.1) is the systematic way through this threshold.

#### Anatomical stratification — the x³ fractal at the scale of tissues

What plays out at degree zero and in the minutes that follow is a tissue hierarchy that reproduces, at a fine scale, the x³ principle of the symphony (§5.4.2) and of the avoided cascades (§4.3). Each layer *authorizes* the next by providing the stability, elasticity and circulation it needs. From the most passive (near-zero metabolic cost) to the most active (high cost):

1. **Skeleton** — standing; weight through the bones.
2. **Ligaments, joint capsules, cartilage** — micro-transfers of weight; synovial fluid redistributed, ligaments under light traction, cartilage recharged.
3. **Fascia, aponeuroses, tendons** — **passive elastic** structures that store and return external energy and consume very little O₂.
4. **Plantar arch, soleus pump** — mechanical pumps activated by the movement; venous return begins.
5. **Deep postural muscles** (multifidus, transversus, pelvic floor) — tonic, low cost.
6. **Phasic muscles** (quadriceps, hamstrings, calves) — active, moderate to high metabolic cost depending on load.
7. **Respiratory system** — accompanies demand as locomotor-respiratory coupling (LRC) sets in.
8. **Cardiovascular system** — responds last to peripheral demand (locomotor-cardiac coupling, LCC).

This is the same **multiplicative logic** as that of the three Ps: each layer's contribution is *conditional* on that of the layers beneath it. Remove one layer and the next pays the whole price. The quadriceps cannot be engaged efficiently if the ankle and plantar arch are not ready to return energy, and the ankle cannot be engaged if the skeleton is not bearing load properly. An abrupt 3x start asks the quadriceps to do work the tendons have not yet been authorized to do. The fractal runs both downward and upward: the same law of ordered dependence applies to organelles (the mitochondrial respiratory chain, §4.3), to tissues (this section), to systems (§5.4.2), and to successive sessions over time (the long-term surpassing of 3x, §1.2).

#### The possibly underestimated role of fascia

This hierarchy contains an element that the dominant scientific culture has probably under-measured, a culture that permeates both the human author and the assisting LLM, since both were trained on the same biomedical corpora. That element is **fascia** (see also §4.1.4). For decades anatomy treated it as "packing tissue", literally cut away and discarded in dissections to reveal the "real" muscles. Only since the 2000s–2010s (the International Fascia Research Congress since 2007; the work of Robert Schleip, Thomas Myers and Carla Stecco) has it begun to be studied as a system in its own right.

What is now known converges strikingly with the JP³ regime. Fascia is a **continuous network** that transmits force across the entire body rather than locally, so that standing actually mobilizes a global myofascial organization (myofascial trains). It contains an **exceptional density of mechanoreceptors and interoceptors**, probably more than any other peripheral tissue, so that body sense ("I realize I am standing") may pass through it first, before the muscle spindles. It has **viscoelastic and thixotropic** properties: it becomes more fluid and less stiff under repeated gentle movement, thanks to the redistribution of hyaluronic acid between its layers, and *very small* movements are particularly effective for this lubrication, which is exactly the kind of loading that degree zero and the first sways produce. It stores and returns elastic energy, a role not reserved to tendons; the fascial contribution to the stretch-shortening cycle in gentle locomotion is significant. Finally, it responds preferentially to **slow, low-intensity loading**, the opposite of the muscle-training regime, which demands short, intense loading.

These five properties make fascia the *most probable physiological substrate* of degree zero and of the initial x³ segment. Each one maps onto a feature of the practice: organized standing (myofascial trains), the perception "I am standing" (fascial interoception), the first sway so gentle it seems unproductive (the optimal stimulus for thixotropy), the passive elastic rebound (the fascial contribution to the stretch-shortening cycle), and the slow kinetics of priming (the preference for slow, repeated loading).

**Hypothesis to be documented.** The "warm-up of the warm-up" is not a mere preamble. It is *the specific activation of the fascial system*, which in turn authorizes the ordered activation of the following layers. Without it, one jumps straight to muscular engagement and misses the very layer that would have allowed the rest to function in elastic economy. The hypothesis is poorly represented in the sport and training literature: the dominant culture speaks of muscles, VO₂max and cardio, and leaves fascia to alternative fitness (Pilates, yoga, Feldenkrais, Rolfing) or to manual therapies. The role of fascia at degree zero may be *a key physiological mechanism* that the accounts of the symphony and of the cascades do not sufficiently name. It calls for targeted research and a call for sources on this specific point (research agenda, §8.5).

#### Real-time empirical confirmation

The description of degree zero was written while Perig was literally living it, on a morning of acute demotivation when the very idea of "starting to move" seemed insurmountable. The sequence worked: *notice that one is standing* → small weight transfers → a joint opens → a tendon rebounds. His direct testimony:

> *"I am really in the warm-up of the warm-up; I am realizing what it is to stand"*
> *FR original:* « je suis réellement dans l'échauffement de l'échauffement, je réalise ce que c'est que de se tenir debout »

Its value is that of a single case. It is not statistical proof, but a strong signal that the framework delivers what it promises even in the worst initial state, the one in which any other exercise modality would be spontaneously dismissed.

#### Self-administered test — descending stairs with feet straight

A second observation, from 2026-09-10, gives degree zero a functional test. It was made on the third day away from home, in a context of accumulated fatigue (three consecutive nights of poor sleep), in a lodging with several floors where the stairs were used often. Dorsiflexion while descending stairs with the feet well straight (correct alignment, not turned out like a duck) proved difficult. The movement was possible in range and there was no pain, but the capacity to **support** the body in that alignment during the descent was lacking. Perig's insight:

> *"it is not enough to have mobility and to have no pain"*
> *FR original:* « il ne suffit pas d'avoir la mobilité et de ne pas avoir de douleur »

Standard medicine often conflates three distinct strata:

1. mobility (passive joint range of motion);
2. absence of pain;
3. **capacity for functional support under load in correct alignment**.

Stratum 3 is what JP³ brings to light and trains. It is the functional side of degree zero: deep postural chain, fascial tone, type I bridge muscles. Neither stratum 1 nor stratum 2 predicts or guarantees it. Accumulated fatigue acted as a co-factor, making visible what is usually compensated. The test is easy to self-administer and defuses an objection that will be met in the sarcopenia audience: "I'm not in pain, I'm mobile, so everything is fine."

Moment 0 is therefore not *before* JP³; it *is* JP³ in its most stripped-down form. Every session begins by standing on one's bones. What follows comes when it is given permission, provided the practitioner has learned not to hand the work back to the thighs (§5.3.4).

---

### §5.2 Moment 0 as diagnostic — character armor (*cuirasse caractérielle*), vulnerability, "In Place" refined

§5.1 described degree zero as the *minimal access threshold*. What this access *reveals* must now be added, because moment 0 is not only an entry door: it is a **diagnostic revealer**. What manifests in the first minutes of an authentic JP³ session goes unnamed by the fitness paradigm, which starts too high to see it. Three elements appear: the armor becomes audible, the body begins to fall forward without a destination, and a sudden vulnerability opens.

#### A. The armor settles and becomes audible

Wilhelm Reich gave the name *cuirasse caractérielle* (character armor) to the set of chronic muscular contractions by which the body defends itself against affects it does not tolerate: clenched jaw, raised shoulders, locked belly, frozen diaphragm, locked pelvic floor. These tensions are not felt at high intensity, because voluntary movement covers them. When one runs, lifts or sweats, the phasic muscles dominate the motor scene and the chronic defensive tone is masked. It becomes *audible* precisely where movement is weakest: at degree zero and in the initial x³ segment.

Perig put it this way during a session:

> *"I realize how much I am always in a defensive role — shoulders protecting the heart, heart protecting the belly, belly protecting the lower belly"*
> *FR original:* « je réalise à quel point je suis toujours dans un rôle défensif, épaules qui protègent le cœur, cœur qui protège le ventre, ventre qui protège le petit ventre »

This is a cascading defensive chain, each layer protecting the one beneath. The perception is possible only because voluntary movement has been erased: only the tonic background remains, and that background is *contracted*. The armor **settles** in the way a sediment settles at the bottom of a glass left still for a long time. JP³ did not create it; it was already there, and the silence of the framework makes it visible.

The observation has an important consequence for axis C. The armor is *itself* a chronic contribution to the cortisol cascade (§4.3): permanent co-contractions mean a high baseline metabolic cost, hence a continuous sympathetic signal, hence elevated basal cortisol. In the armored modern adult, a good part of background "fatigue" comes not from what one *does* but from what one *holds back*. Degree zero allows what few other frameworks allow: feeling what is held back separately from what is done. It is diagnostic before it is therapeutic.

#### B. "In Place" refined — forward-fall tolerated, ego-piloted displacement excluded

Once the armor has settled, something begins to move *without anything being decided*. The body **leans forward**, drifts a few centimetres, catches itself on the other foot, drifts again. This is physiological. As soon as the posterior (back) chain extensors are released (calves, hamstrings, spinal erectors, trapezius), the centre of gravity, which sits slightly in front of the ankle, draws the body forward. Human walking is structurally a **controlled fall**; as Nicolas Sapir put it, *"to walk is to catch oneself at the last moment"* (*« marcher, c'est se rattraper au dernier moment »*) [wip — attribution to be verified].

The In Place constraint must therefore be clarified. *In Place* does not mean *without displacement*; it means **without destination**. What is excluded is not spatial drift but the engagement of the ego in a commanded trajectory: "go to the kitchen", "reach the wall", "do three metres". Tolerated forward-fall is *within* JP³; ego-piloted displacement is *outside* it. This distinction explains why stealth JP³ (§5.5.2: upper body still, pelvis elastic, imperceptible drift) stays within the framework: the drift exists, but no point B commands it. It also legitimizes an empirical observation: the more the armor settles, the easier the forward-fall becomes. One no longer needs to "decide to move forward"; one *stops holding back the forward motion*.

#### C. A sudden vulnerability, to be honoured

There is a moment in the initial segment when the protection of the armor fades and the body finds itself *naked to itself*. The moment is ambivalent. There is relief, since one is no longer carrying the chronic load, but also **acute perceptual vulnerability**, since the shell that filtered everything is gone. Perig, in the session of 2026-08-16:

> *"a feeling of vulnerability, almost of unease; you're no longer behind anything"*
> *FR original:* « une sensation de vulnérabilité, presque d'inquiétude ; on n'est plus derrière rien »

This is not a bug of the framework but a **feature**. Degree zero *cannot* be reached without this exposure appearing. That is why it requires In Your Own Place in the strongest sense, with no gaze, not even an imagined one (§2.1.1, §6.6): perceptual vulnerability survives no external surveillance.

The practical corollary is that the concerns surfacing at this moment (a plantar arch pronating too much, a joint cracking, a pelvic asymmetry, an unusual tension) are to be *noted, not corrected*. They surface because the perceptual channel is clean; JP³ does not cause them. Wanting to correct them reintroduces a project, a metric, a judgment, and closes the channel. The framework asks for a non-interventionist posture of welcome: *I see, I note, I continue*. Correction, if it comes, will come on its own over weeks, not through voluntary intervention within the session. This welcome applies to what the clean channel reveals. It is distinct from the plantar dosing that keeps the thighs out of the regime (§5.3.4), which is a skill acquired in a short, attentive learning phase rather than a correction imposed within each session.

#### What moment 0 adds

The accounts of the initial segment and the symphony (§5.4) and of degree zero (§5.1) describe the x³ regime as a *physiological phenomenon*: the interdependence of the three Ps, the symphony, the avoided cascades, the tissue stratification. Moment 0 shows that the same regime is *also* a framework of **diagnostic revelation**: armor, forward-fall, perceptual vulnerability. These three elements are not side effects; they are **inseparable** from access to the initial segment. A protocol claiming to do "JP³ without settled armor, without vulnerability" would mechanically be in 3x. The initial silence *is* what makes the armor audible.

---

### §5.3 Core execution — kinematics and cues

#### §5.3.1 Heel activator opening

Every session opens through the heel activator, the systematic portal treated in full in §3.2.2, used **whatever one's state of health**. The kinematics: bounce while letting the weight drop onto the heels → passive elastic spring of the triceps surae → spontaneous stacking cascade (the head returns to vertical) → arms and hands mechanically freed for manual tasks. How long it lasts varies with one's state; it may last the whole session. The heel activator is the entry threshold. The SSPU (§5.3.4) is mastery, and the practical sequence of §5.3.4 (5bis) describes how weight migrates from the heel to a light press on the MTP.

#### §5.3.2 Full session mode

JP³ is a minimalist yet deeply effective exercise protocol, designed to be accessible to everyone, anywhere, at any time, and simple and intuitive to carry out. Each of its three constraints translates into a practical instruction.

**Jogging In Place.** The movement consists of jogging or gently bouncing in place. There is no horizontal displacement, which concentrates the effort on vertical push-off and on activating the posterior chain, notably the soleus. The height of the "jogging" can range from a light vertical bounce to a true jog with high knee lift, always self-regulated.

**At Your Own Pace.** This is the heart of JP³'s adaptability: intensity is entirely self-regulated by the individual. The protocol begins with an **ultra-slow start**, at a pace that is "barely perceptible", "too easy", even "boring" for the first 10–15 minutes; this contains the oxygen deficit, stabilizes ventilation and preserves tissues ("slow" in the passive, delegated sense of §5.1). Throughout, the practitioner **listens to sensations**: the ability to speak in full sentences (the "talk test") and the overall feeling of being able to sustain the intensity for 60–90 minutes. Any sudden acceleration of breathing should prompt a slowdown, and so should thighs that start to harden or burn, since thigh fatigue is an error signal rather than a dose (§1.2.8, §5.3.4). Intensity then rises through **progression by boredom**: not through willpower but through a self-regulation in which boredom prompts an increase in tempo, without decisional friction.

**In Your Own Place.** The environment is chosen by the individual, typically at home, in a minimal space (one square metre is enough). This removes the major barriers: cost, equipment, weather, travel time, special shoes or clothing. The controlled environment allows adjustable silence, controlled temperature, zero external distraction and total safety, which favour a state of "meditation in motion" or "flow state". **Barefoot practice** is strongly recommended to maximize proprioceptive feedback and strengthen the intrinsic foot muscles; beyond this recommendation, barefoot is the access condition of the regime (§2.3.2). A mirror and the option of closing the eyes are additional tools for self-correction and heightened proprioception.

**Duration and frequency.** JP³ can be practised in continuous sessions of 30–90+ minutes, but also in "micro-bouts" of 2–5 minutes throughout the day, turning sedentary time into productive movement time. The goal is regularity, ideally daily.

#### §5.3.3 Incident mode

The incident regime, treated in full in §3.2.4, primes the JP³ adaptations without changing posture: a few heel shocks are enough, via Nigg's muscle tuning and the stretch-shortening cycle. It inverts the figure and ground of session JP³: daily life is primary, and JP³ runs underneath it as a watermark (*en filigrane*). The entry threshold collapses to near zero. Because the SSPU can be activated in any circumstance (§1.2.8), the incident mode is where the skill pays off most widely.

#### §5.3.4 SSPU — the skill of the narrow band (kinematics and cues)

This section was established in the session of 2026-11-13. Its status is that of a **working hypothesis**: no study tests a standing SPU directly. Hamilton's instructional framing was first recalled by Perig from memory; his exact wording is quoted in point 5 from the auto-transcript of his introductory lesson.

**1. Each muscle answers its own control.** Muraoka & Suzuki (2021, *J Phys Ther Sci* 33:472–479) studied nine standing postures: **vastus lateralis tracked knee angle; soleus tracked trunk anterior tilt; medial gastrocnemius tracked both.** Soleus did not change with knee flexion when thigh and shank tilted alike. In other words, the soleus follows **where the centre of gravity sits over the foot**, not knee angle per se. Quiet stance is already differentiated: soleus tonic, gastrocnemius phasic (Fok et al. 2020).

**2. Mechanism.** The quadriceps resist an external knee-flexion moment (vertical ground reaction force × horizontal distance between the knee and the GRF line). Shift the centre of mass slightly forward and the GRF line passes **in front of the knee**: gravity holds the knee in extension and the quadriceps have nothing left to do. The same shift lengthens the lever arm at the ankle, producing a plantarflexor moment and so recruiting the **soleus**, together with the hip extensors (posterior chain, §3.2.3). Conversely, flexing the knee does not isolate the soleus when weight-bearing (Hébert-Losier & Holmberg 2014) and multiplies quadriceps demand (VM ≈ 11 µV at 0° → 56 µV at 60°; Alrowayeh et al. 2005).

**3. The complication — gastrocnemius.** Too far forward, the knee drifts toward hyperextension and the gastrocnemius is recruited to brake it; in forward-leaning models it carries most of the plantarflexion moment.

**4. Hence the skill: a narrow band.** The SSPU consists in holding the centre of mass in a **narrow fore-aft band**: far enough forward to silence the thighs, not so far as to recruit the gastrocnemius. Too far back, the thighs burn; too far forward, the "wrong" calf takes over. This is exactly the oscillation observed in the depleted state (thigh block ↔ heel-dropping), and it explains why the regime demands proprioception rather than willpower.

**5. Hamilton's own cue — "straighten the ankle, press lightly on the ball of the foot, thighs completely relaxed."** In his introductory technique lesson (YouTube 2023, auto-transcript), Hamilton has the learner sit with the feet under the knees (toe tip and knee roughly aligned) and picture the ankle joint **"straightening"**, "the foot and ankle coming together". He adds: *"you're likely pressing against the ball of the foot, which is where the toes insert into the foot, that MTP joint — just press lightly [...] you don't want to press too hard otherwise you'll start to use your upper leg muscles; we want all of these muscles in the thigh completely relaxed."* The movement is smooth and fluid, with no jerk, at ≈ 60/min. *(Correction 2026-11-13: an earlier draft, based on a recollection, read "drive the ankle forward"; Hamilton's word is "straightening".)*

Three things follow.

- **The 1st-MTP intuition is Hamilton's own cue.** Perig's felt sense ("sensation of the foot on the ground at certain places — 1st MTP?") coincides with the inventor's instruction. Regional *stimulation* studies show no MTP-specific neural channel to the soleus, but as a **pressure target** the MTP is explicitly prescribed.
- **Hamilton states the via negativa and the skill in one sentence.** Pressure *intensity* is the control variable: press too hard and the thighs enter. Excluding the fatigable muscles is a matter of dosing a light push, which is exactly the skill identified in §1.2.8.
- **Elek et al. (2025)** reproduce the geometry: MTP line directly below the knee, load descending vertically onto the ball of the foot.

**Standing transposition — the "ballerina" problem.** Upright, fully straightening the ankle means rising onto the forefoot under whole-body weight: a *relevé*, which is intense and likely gastrocnemius-dominant (the soleus/gastrocnemius ratio inverts as intensity rises — Moritani). Perig proposed two candidate adaptations on 2026-11-13:

- **(a) The ballerina movement itself** — strange but instructive: amplitude preserved, intensity high. Possibly useful as an exploratory or calibration gesture rather than as the sustained regime.
- **(b) A tension that reproduces the straightening under body weight, with little or no heel lift** — the *intention* of straightening the ankle, which loads the MTP lightly and carries the centre of mass toward the ball of the foot (the narrow band of point 4). This is the hypothesis favoured here: standing, **body weight is carried by the stacked skeleton (the functional equivalent of Hamilton's chair), and only the increment above quiet-stance load is the "light press"**. In jogging in place, that increment is the push-off at each step, and the heel spring (§3.2.2) returns the cycle.

Under (b), the transition from heel to SSPU reads as a migration of weight from heel to MTP: the heel primes (passive spring; heel stimulation facilitates both plantarflexors — Nakajima et al. 2006; a 2022 cutaneous-stimulation study), and the lightly loaded MTP sustains. *Open tension:* forefoot **electrical** stimulation inhibited the plantarflexors in Nakajima 2006. That is not equivalent to voluntary loading, but it should be kept in view. *Unclear transposition:* Hamilton's "toe tip under the knee" geometry has no direct standing analogue without knee flexion, which wakes the quadriceps (point 2). The transferable principle is probably the vertical load line through the MTP, not the joint alignment itself.

**5bis. Practical sequence — from heel to light MTP press** *(validated as framing by Perig, 2026-11-13; to be tested in practice)*

1. **Open with the heel activator** (§3.2.2) — passive spring, stacking cascade; the skeleton takes the weight.
2. **Ballerina calibration (optional, once or twice):** one slow full *relevé* to *feel* the "straightening" of the ankle that Hamilton describes, then shrink it.
3. **Reduce the straightening to an intention:** heel barely or not lifting, a light press settling on the MTP; the centre of mass drifts toward the ball of the foot by itself (the narrow band, point 4). In jogging in place, this light increment *is* each step's push-off, and the heel spring closes the cycle.
4. **Dose by the thigh:** one hand on the front of the thigh; if it hardens, the press is too strong (Hamilton's own warning).
5. **Verify afterwards with the second-JP³ test** (§1.2.8): if repeating is nearly free, the regime was SSPU; if it takes willpower, fatigable muscles were working.

**Summary formula.** *Seated, the chair carries the body and the leg adds a light push. Standing, the stacked skeleton is the chair — only the surplus above quiet stance must be light.*

**6. Low-tech biofeedback (in lieu of EMG).** Elek's participants learned in one session *with* feedback. Without a sensor, three checks stand in for it: one hand on the front of the thigh (hardening means too far back or knee too flexed); attention to the calf, where the soleus is low and lateral and the gastrocnemius is the upper bulge (the upper bulge hardening means too far forward or knee braced); and the **second-JP³ repeatability test** afterwards. Hypothesis: one attentive learning session, then hands off.

**7. Decisive experiment (absent from the literature).** Simultaneous normalized EMG of SOL, MG, LG and VL at graded centre-of-mass positions (heel → midfoot → ball of foot) and knee states (braced / softly unlocked / flexed), with plantar pressure mapping, reporting absolute SOL activity and the SOL:MG and SOL:VL ratios; then a delayed retention test without displayed feedback; barefoot vs shod as a secondary factor. This is a candidate protocol for the JGH (§8.4) and Hamilton (§8.5.1) contacts.

---

### §5.4 The initial segment (t < √3) — anatomy of the first minutes

#### §5.4.1 Anatomy of the initial segment (t < √3)

The singularity plays out in the first minutes, while the x³ curve is *still below* the line 3x. Nothing seems to happen, and it is precisely because nothing seems to happen that something happens.

**The first "step" is not a step.** It is a sway, a shift of weight from one foot to the other. The heel of one foot lifts by a centimetre, then the other. Cadence does not exist yet; it is searching for itself. Heart rate is probably under 90. An outside observer would see *nothing recognizable*: someone standing, hesitating. That is exactly the point. Fitness culture would say "that doesn't count", and in the strict sense of its metrics it is right. That is why the metric paradigm cannot enter here, and why there is room for another regime.

**Slower than square root — the scale of the very, very slow.** Compare the concave regimes at t = 0.1:

| Function | Value at t = 0.1 | Interpretation |
|---|---:|---|
| Square root (√t) | 0.316 | Slow — but recognizable as "a practice" |
| Linear (t) | 0.100 | Reference regime |
| Square (t²) | 0.010 | Very slow |
| **Cube (t³)** | **0.001** | **Sub-recognizable — not yet "a practice"** |

At the very beginning the cube is *three hundred times more modest* than the square root. All the named "slow" practices (kinhin, Feldenkrais, niko-niko slow jogging, tai chi) are at best in a square-root regime: slow, but visible as *a practice in progress*. JP³ in its initial segment is *sub-recognizable*, and it is this hyper-slowness, more radical than √t would suggest, that allows cubic concavity to establish itself afterwards. It cannot be reached through a voluntarist decision ("I am going to be slow"); one has to *fall* into it through constraint (a wrecked state) or deliberately *renounce* any external cadence. JP³ slowness is not a slowness chosen *within* a range of speeds; it is a renunciation of the range itself. Here, as in §5.1, "very, very slow" means *very, very passive, very, very delegated*: low speed is a *consequence* of delegating to gravity, skeleton, fascia and tendons, not an intention imposed by the muscle. Renouncing the range is not the same as the absence of skill, either. What willpower cannot produce, a learned plantar dosing can (§5.3.4).

**The strict interdependence of the three Ps in this segment.** Here more than anywhere else, removing *a single* P is enough to collapse the volume to zero. This is not rhetoric; it is mechanical.

- **At Your Own Pace requires In Your Own Place.** A single outside gaze, and this "ridiculous" slowness becomes impossible to sustain for more than thirty seconds. The gaze imposes 3x, not out of malice but by mere presence. Over-slowness survives only when sheltered from a gaze, including an imagined one.
- **In Your Own Place requires In Place.** If one must also *move forward* — cross the living room, go out into the street, go to a point B — displacement devours everything at these speeds. At one centimetre of heel every two seconds, one goes nowhere; "really moving forward" would require speeding up, which is immediate 3x. In Your Own Place frees one's own pace only if In Place makes over-slowness *spatially viable*.
- **In Place requires At Your Own Pace.** Prescribed marching in place (physiotherapy, Walk at Home, home aerobics) shows the failure: an external tempo, even a minimal one, crushes the initial segment. Verticality without tempo autonomy is codified 3x. In Place alone is not enough; it falls into a protocol.

Each P defends the inviolability of the other two. The multiplication is structural rather than figurative: remove one dimension and the x³ volume collapses to a plane, a plane to a line, a line to a point. That is why rivals with "1 P" or "2 Ps" never come close to the cube: they do not have the geometry to hold it.

**What happens in the body while nothing is visible.** Nothing to the naked eye. In the body, in a delayed window:

- foot-strike waves begin to undulate at low frequency, not yet synchronized between the lower limbs;
- the tonic locus coeruleus (LC) primes in a low regime (Poe et al. 2020) — not yet the phasic surge of intense effort, but the tonic baseline rising gently;
- breathing organizes itself without instruction, aligned with locomotion (locomotor-respiratory coupling searching for itself);
- theta/gamma cross-frequency coupling begins to stabilize, the EEG signature of distributed attention setting in;
- pulsatile perfusion rises imperceptibly with each accumulated foot-strike;
- the glymphatic system is not yet activated, but the window is opening.

All these processes need *time to prime without being crushed by an effort constraint already in place*, which is precisely what the initial x³ segment gives them. In 3x, as soon as an external cadence is imposed, they must set in under constraint, suboptimally or not at all. Physiology needs the *sub-recognizable* in order to unfold without haste.

**The subjective paradox — "doing nothing" is the sign of quality.** Any impression of "doing something" at the start indicates that one has already tipped into 3x and missed the cube. The epistemology is inverted: *the absence of a sensation of effort at the start is the criterion of good workmanship*, not the sign of failure. Fitness culture has no word for this; for it, "feeling nothing" means "doing nothing" means "wasted time". This is the exact blind spot that must be named. The only reliable indicator of a correct initial segment is *persistence in apparent boredom*: if one holds on without telling oneself "I have to do something", one is in x³; as soon as one yields to the urgency of "doing", one has missed it. The same logic gives the SSPU its afterwards criterion, immediate repeatability (§5.3.4): a regime that felt like nothing should cost almost nothing to repeat.

**The crossing of √3, often unnoticed.** There is no "runner's high" at the moment of crossing, no endorphins snapping in. The passage comes without announcement: one starts, one doesn't notice, and twenty minutes later one is *still there*, in a modality one was not trying to reach and cannot name. The cubic regime grows gently, as it began. This also distinguishes x³ from the others. Fitness culture expects a tipping point (endorphins, the ventilatory threshold, "the wall", "second wind"); JP³ has no such moment. What tips is *duration*: the capacity to *stay there* becomes itself the benefit.

#### §5.4.2 The symphony of mechanisms — progressive entry of the instruments

There is no single conductor in the body. Neither the circadian suprachiasmatic nucleus (SCN), nor the locus coeruleus, nor the respiratory preBötzinger complex (preBötC), nor infra-slow oscillations (ISO) lead on their own. The x³ regime is not produced by one mechanism but by the **successive entry** of several voices which, once all present, support one another: a symphony without a conductor. The role of the three Ps is to protect the initial silence so that the voices enter *in the order in which they can support one another*, not all at once.

**Bar 0 — silence, before the first sway.** Body still, resting breathing (~15/min), HR ~70, cortex in default mode. The score waits; no instrument has played yet.

**Percussion — the first sway (0–30 s).** The heel of one foot lifts. A desynchronized foot-strike wave. The soleus pump primes as the calf is compressed, and the neuromuscular spindles supply discreet proprioception. This is the first voice, a muted percussion, almost inaudible.

**Double basses — breathing and heart (30 s – 2 min).** The respiratory rhythm progressively aligns with step cadence: locomotor-respiratory coupling (LRC) searching for itself, not yet locked. The heart responds to the mechanics through locomotor-cardiac coupling (LCC), HR 85–95. The bass line settles beneath the percussion: two voices, still fragile.

**Woodwinds — the tonic locus coeruleus (2–5 min).** The LC rises into a tonic regime (Poe et al. 2020), without the phasic bursts of intense effort: calm arousal, no urgency. Light pupillometry (Yamashita et al.). The ascending reticular activating system (ARAS) discreetly modulates cortical arousal. A clarinet enters; the texture thickens without becoming dense.

**Strings — hippocampus and theta (5–10 min).** Hippocampal theta locks onto step cadence (Kropff et al. 2023). Place cells begin their phase precession. Theta/gamma cross-frequency coupling stabilizes (Canolty & Knight). Distributed attention sets in, the frontal cortex in loose dialogue with the hippocampus. The strings enter: the first harmonic layer, which gives the ensemble its shape.

**Violas and cellos — pulsatile perfusion (5–15 min).** Each accumulated foot-strike sends a pressure wave travelling up toward the brain via the spinal column and the carotids. Cerebral microcirculation opens (the BOLD signal rises gently), and zones of daytime hypoperfusion begin to be irrigated. The violas join the strings; the line densifies, and the vascular weave supports the neural weave.

**Late brass — the glymphatic window (15–30 min).** The glymphatic system (Iliff, Nedergaard) begins to activate: regular arterial pulsations facilitate cerebrospinal fluid flow along the peri-arterial spaces, and intercellular cleansing primes. These are the late brass, which enter only when all the other voices support their entry, because they need vascular coupling *and* a stable heart rhythm *and* moderate tonic arousal, all at once.

**Tutti — the fully deployed regime (20+ min).** All voices play and none predominates. Each cycle enriches the others: the step feeds perfusion, which feeds the LC, which modulates theta, which organizes attention, which regulates the step. The loop is closed, and each iteration *inherits* from the previous one. The cubic curve is in full swing. Subjectively: "you're in it" — no effort, no ceiling, a modality that could go on.

**The absent conductor.** None of these voices leads the others. What would look like a central pulse (breathing, heart, theta, ISO) is in reality a **convergent spectrum** (§4.4.6): each mechanism synchronizes with its frequency neighbours, and the whole holds because each layer modulates the one below without controlling it. The score is written by biology; the performance is free. What JP³ brings is the *initial silence* that allows progressive entry.

**Why the other regimes do not let the orchestra enter.**

- **3x (Zone 2, constant-pace running, prescribed physiotherapy marching).** The external conductor strikes the downbeat and *all the voices must enter together*: HR at 130 from the third minute, imposed cadence. The result is cacophony. The LC cannot settle into tonic mode because it is already phasic. Theta cannot lock because the cadence is too fast and too regular. The glymphatic system does not open because the pulsations are too high in frequency for the peri-arterial window. All the instruments play, but none supports the others: a poorly tuned tutti that stays suboptimal.
- **HIIT / fitness snacks.** The conductor stops the music every thirty seconds. No voice has time to finish its phrase: cut, resume, cut. The cubic regime can never set in, because it requires continuity; each instrument needs the previous one in order to enter.
- **Conventional warm-up.** A good initial intuition: let the first instruments enter. But the overture is cut short in order to "attack" the real session. The percussion and basses were starting to settle and are replaced by a fortissimo; the strings, woodwinds and late brass never enter.
- **Niko-niko slow jogging.** A benevolent conductor with a gentle but constant tempo. Percussion and basses have time to settle, but the *stable* tempo, the horizontal plateau, prevents cubic accumulation. The orchestra plays a beautiful repetitive melody, not a rising symphony.
- **ME/CFS pacing.** A conductor who cuts *before* the brass enters, for good clinical reasons (post-exertional malaise, PEM). As a result the orchestra stays halfway and the symphony is never completed.

The metaphor makes visible what the description of the mechanisms alone does not show: *the order of entry* matters as much as the presence of the mechanisms. Each isolated theoretical framework (tonic LC, theta-gamma coupling, glymphatic clearance, pulsatile perfusion) can coexist with 3x, but each mechanism is then present in a suboptimal regime, because the others do not give it the context it needs to unfold. The x³ regime is not the sum of the mechanisms; it is their **respected order of entry**, in a silence protected by the three Ps.

---

### §5.5 Advanced variants

#### §5.5.1 Propulsive push against support

A particularly effective variant reproduces the propulsive phase of running by creating a controlled forward lean of the body. The practitioner holds a stable support at waist level with the hands (a kitchen counter, a heavy table, the back of a couch) and makes pushing movements with the legs, as if trying to move the object forward. Since the support stays put, the action naturally creates a trunk lean that reproduces the propulsive angle of actual running, while keeping the safety and control of the stationary format.

Unlike the core regime, this variant deliberately allows high intensity, and its main advantage is that maximal intensity can be applied in complete safety. With a solidly anchored kitchen counter, the practitioner can push with considerable force, exploring levels of propulsive effort that would be impossible or dangerous to reach in ordinary running. This fully controlled environment allows propulsive push-off to be trained as never before, fully engaging the calf-soleus complex and the posterior muscular chains without any risk of imbalance or falling. The forward lean increases the load on the plantarflexors, and the hands provide a stable reference point that sharpens proprioceptive awareness of the weight transfer to the forefoot.

#### §5.5.2 Stealth / standing JP³

Stealth JP³, treated in full in §2.1.3, keeps the upper body still and the pelvis elastic, with an imperceptible drift. It was born of the constraint of the perceptual solitude threshold (§2.1.1) and partly answers the question of how to keep access to the practice when one is not alone or not at home. As §5.2 B shows, its drift stays within the framework because no destination commands it.

---

### §5.6 Pre-activity use — barefoot warm-up before shod sport

The barefoot pre-match warm-up, treated in full in §4.2.2, turns JP³ into a preparation for activity in shoes. Five minutes of fast, light-impact barefoot jogging lead to spontaneous, solid unipodal bounding, which is the gold-standard return-to-sport test after Achilles injury (Reactive Strength Index > 0.5). The mechanism is unified across three corpora: Robbins's discomfort-impact illusion, EMG pre-activation of the gastrocnemius and soleus 10–24 % higher barefoot, and the bandpass of the Pacinian corpuscles.

Barefoot JP³ is therefore *also* a protocol for pre-activating the triceps surae before shod sport. This extends the framework beyond its first two roles (§4.2.2). Two consequences follow. First, the intervention sits across a disciplinary silo between performance preparation, where it exists, and clinical practice, where it is absent, and that silo has to be addressed strategically. Second, the question of whether barefoot practice creates dependence or serves as rehabilitation is resolved as **normal contextual specificity**: barefoot and shod are two regimes, calibrated separately, with partial carry-over from one to the other.

> **Sources (§5):**
> - `content/fr/research-singularite.md` §4.6.5 (§5.1)
> - `memory/project_test_escaliers_soutien_vs_mobilite.md` (§5.1)
> - `content/fr/research-singularite.md` §4.6.6 (§5.2)
> - forward-ref §3.2.2 — heel activator as systematic opening portal, already migrated in §3 (§5.3.1)
> - `content/en/article.md` §3.1 (§5.3.2)
> - forward-ref §3.2.4 — JP³ incident regime, already migrated in §3 (§5.3.3)
> - session 2026-11-13 (§5.3.4)
> - `facts/perplexity-sspu-standing-soleus-skill-2026-11-13.md` (§5.3.4)
> - `facts/perplexity-sspu-trunk-tilt-quads-2026-11-13.md` (§5.3.4)
> - `facts/perplexity-hamilton-spu-cue-transcript-2026-11-13.md` — Hamilton introductory technique lesson, YouTube 2023, auto-transcript (§5.3.4)
> - Hamilton instructional framing as recalled by Perig (exact wording to be sourced from Hamilton's training material) (§5.3.4)
> - `content/fr/research-singularite.md` §4.6.2 + §4.6.3 (§5.4)
> - `content/en/article.md` §3.5 (§5.5.1)
> - `memory/project_jp3_furtif_decouverte.md` ; forward-ref §2.1.3, already migrated (§5.5.2)
> - forward-ref §4.2.2 — barefoot pre-match warm-up protocol, already migrated in §4; `project_warmup_piedsnus_prematch` (§5.6)

---

## § 6. Doctrine

This section is irreducibly specific to JP³; no known rival framework holds these positions. The preceding sections describe what the body does during JP³; this one states what the practice *is*, what it refuses to be, and why.

The seven doctrines hang together as a single argument. It starts from an observation: people in their weakest states often have their best sessions, because weakness makes it physically impossible for the ego to sabotage a natural progression (§6.1). Generalised, that observation becomes a design principle: JP³ is defined less by what it does than by what it excludes — fatigable phasic-glycolytic recruitment first, but also metrics, destinations and self-monitoring (§6.2). The attentional consequence of that exclusion is the doctrine of ego and echo: because the primed regime needs no vigilance, the body can run autonomously while the mind is free, and JP³ actively invites the practitioner to do something else (§6.3). The product is then redefined: JP³ is not a self-sufficient session but a priming, whose deliverable is the urge to go out, and whose anti-scope is stated explicitly (§6.4). What the ascending trajectory tends toward when it succeeds is named: euphoria, a destination that is fuzzy but operative (§6.5). Two conditions make all of this possible in practice. One is perceptual: the practitioner must feel unobserved (§6.6). The other is relational: a conversational agent acts as a constitutive third layer of the system, supplying timing, anchoring and gentle accountability without prescribing or monitoring (§6.7).

**Contents**
- §6.1 The paradox of liberating weakness
- §6.2 *Via negativa* — the design constraint
- §6.3 Ego and echo — body autonomous, mind free (with §6.3.1, the incident regime as mode 2)
- §6.4 Priming, not session — the post-plateau phase (with §6.4.1, priming at the scale of the single strike)
- §6.5 Euphoria as destination — fuzzy but operative
- §6.6 The perceptual solitude threshold
- §6.7 The agent as embodiment layer — third component of the JP³ system

---

### §6.1 The paradox of liberating weakness

JP³ reaches a far broader population than one might first suppose. Its scope notably includes chronic fatigue or profound exhaustion; depressive states or debilitating anxiety; severe sleep deprivation; recovery from prolonged illness; generalised physical weakness; extreme stress; deconditioning after months or years of inactivity; chronic pain that limits capacity; prolonged post-viral states; and ageing with loss of capacity.

#### What weakness reveals

In these states of profound weakness something fundamental shifts: **one no longer has the physiological capacity to sabotage natural progression with the ego**. It is not merely that one *should* go slowly; one literally *cannot* go fast, even if one wanted to.

This physical impossibility of accelerating creates ideal conditions for discovering what At Your Own Pace actually means. The weakened practitioner is forced to accept nearly imperceptible bounces as real exercise, and to stay in that minimal zone for 15–20 minutes without frustration, because there is no other choice. In doing so they discover two things at first hand: that boredom eventually pushes intensity up of its own accord, even from a state of extreme weakness; and that this ultra-slow progression never triggers the exhaustion response.

#### Why the worst state gives the best and longest jog

Paradoxically, it is in one's worst state that one has one's best sessions, for six reasons:

1. **Total absence of performance expectations** — one cannot judge oneself on intensity when one is already diminished.
2. **Forced humility** — the condition compels one to honour the body rather than push it.
3. **Discovery of the true natural rhythm** — progression is guided by boredom alone, without ego interference.
4. **No point of comparison** — the session is not measured against one's "best" performances.
5. **Gratitude for movement** — when one is weak, simply moving becomes precious rather than an obligation.
6. **Authentic sustainability** — limited capacity is never burned through, so one can continue indefinitely.

#### The radical lesson

The paradox reveals an unsettling truth: **for most people, their "good" state of health is actually an obstacle to optimal JP³ practice.** Strength and capacity create the illusion that capacity should be *used*. But JP³ is not designed to exploit maximal capacity; it is designed to create a sustainable, enjoyable and progressive practice that starts from the absolute minimum.

Hence a counterintuitive guideline: **"Practise as if you were in your worst state, even when you are not."** This turns At Your Own Pace from an abstract concept into a concrete instruction. What pace would you choose if you were deeply tired, depressed, weakened? **That is your true own pace** — not the pace you think you must hold for the session to "count" as exercise.

---

### §6.2 *Via negativa* — the design constraint

#### From positive equivalence to shared negative core

Earlier research on the standing soleus push-up showed that a positive equivalence between Hamilton's seated soleus push-up (SPU) and JP³ — "SPU = JP³" — is defensible but fragile: seated isolation through knee flexion is lost when standing, there is no EMG feedback, and so on. On 2026-08-17 Perig proposed a doctrinal pivot in response:

> *"maybe I should have defined things by what they are not. SPU and JP3 share a dependence on this muscle and a concern not to bring in the fatigable muscles."*
> *FR original:* « peut-être que j'aurais dû définir les choses par ce qu'elles ne sont pas. le SPU et le JP3 partage une dépendance envers ce muscle et un souci de ne pas faire intervenir les muscles fatigables. »

The adopted reformulation defines the **SPU family** as *any regime that loads the soleus while excluding the fatigable phasic-glycolytic musculature*. SPU (seated, isolation through knee flexion) and JP³ (standing, postural self-enforcement) are two distinct instances of it. Their positive differences do not undermine their common membership, because the family is defined by a **shared negative core**, not by formal resemblance. In its strict formulation:

> *"SPU and JP³ share a design constraint — the exclusion of fatigable phasic-glycolytic musculature. They differ in their means (isolation through knee flexion in a seated position, vs postural self-enforcement in a standing position) and in what they add (moderate cardio for JP³, multi-hour sustainability for SPU). But they belong to the same **SPU family**, defined by its negative core."*

The pedagogical pivot follows: ***"JP³ is better defined by what it excludes than by what it does."***

#### Why the negative definition is stronger

**Epistemic solidity.** The via negativa turns a contestable positive equivalence into a shared design constraint that is very hard to attack seriously. Existing EMG data show low phasic activation in both devices: the negation is *already verified*, whereas the positive equivalence stumbled on details.

**Doctrinal coherence.** The via negativa is the native grammar of the whole JP³ framework, not an ad hoc invention. Axis B (§1) means *no* metric. The deleterious cascades are *not* triggered — the initial silence (§4.3; research-singularite §4.6.4). Ego and echo means *not* observing one's body (§6.3; research-singularite §4.6.8). JP³ *is not* a self-sufficient session (§6.4; research-singularite §4.6.9). In Place means the *absence* of a destination (research-singularite §4.6.6). The *degré zéro* (degree zero) is a near-zero cost that does *not* require motivation (research-singularite §4.6.5). The reformulation extends this logic and makes the doctrinal architecture more coherent by revealing its dominant pattern.

**Conceptual economy.** The dependence on the soleus — the positive term — becomes the **residue** of the negative constraint: what remains when everything that fatigues quickly is subtracted. It is not an independent postulate to defend; it is what persists after the exclusion. One negative axiom replaces two axioms (one positive, one negative).

#### What the negative definition unlocks

1. **A family definition, not merely a device definition.** SPU and JP³ become two instances with different positives and a common core.

2. **Natural admission of other members:** supported wall calf raises; slow stepping (empirical support: Ling et al. 2025, *PLOS ONE*, +157 % integrated soleus EMG at slow tempo); very gentle mini-trampoline; extremely slow walking. These members inherit the metabolic effects through their share in the **negative core**, not through formal resemblance to SPU or JP³.

3. **A reversed burden of proof.** Instead of *"prove to me that JP³ does as much as SPU"* — a burden on the proponent, and a direct comparison the literature cannot provide — the skeptic must *"show that JP³ significantly recruits fatigable musculature below threshold."* No one can, below threshold, with existing EMG data: Moritani's soleus/gastrocnemius ratio of 1.67 in standing is preserved during gentle bouncing.

4. **Clean intra-family divergence.** The shared core is *muscular*: phasic-glycolytic exclusion. On cardiovascular load, SPU and JP³ diverge. SPU also excludes cardiovascular stress, hence its sustainability over hours; JP³ includes it moderately, hence its lower sustainability — an explicit remark by Perig. Each member respects the core and makes its own choices on the other axes. The family tolerates divergence on what it does not define; that tolerance is precisely what allows its members to exist as distinct devices.

#### Anti-scope

The via negativa does **not** say that the positive does not exist: the soleus works, the postural chain activates, euphoria arrives. It says that the positive is the residue of the negative constraint, not an independent postulate. This nuance must be preserved, so that JP³ is not turned into a device defined purely by what it avoids — which would make it hollow. Nor does the exclusion imply that the soleus regime simply happens by itself: excluding the fatigable muscles while standing is something the practitioner learns to do (the SSPU singularity, §1.2.8).

---

### §6.3 Ego and echo — body autonomous, mind free

A distinctive, almost counterintuitive property of the device deserves to be named: **JP³ does not invite you to concentrate on JP³.** On the contrary, it explicitly invites you to *do something else meanwhile*: dictate, listen, think, talk on the phone, mentally prepare a meal, let reverie wander. This is not a compromise (*"since one has to exercise anyway, might as well take the opportunity to…"*). It is a **doctrinal property**, with a precise physiological justification.

#### The ego-and-echo problem

Any bodily practice that demands *sustained* proprioceptive and interoceptive attention — postural yoga, moving meditation, Feldenkrais, chi running — mechanically creates a **specific cognitive fatigue**: the fatigue of continuous self-observation. Perig named it *ego and echo*. Observing oneself in the act creates a split between the one acting and the observer, and this split consumes attentional resources distinct from the action itself. Worse, observing fatigue *amplifies* fatigue: self-perception of breathing leads to awareness of shortness of breath and then to a sensation of air hunger; self-perception of the heart leads to awareness of its rhythm and then to a sensation of oppression. That attention amplifies the percept is a documented psychophysiological phenomenon, and it is a major reason why many people eventually *abandon* moving meditative practices: the attentional load itself becomes exhausting.

#### What JP³ does differently

Once primed, the x³ regime holds *without* sustained attention. The deep postural chain (§4.1.3) works autonomously; the successive entry of the instruments (§5.4.2) happens without a conductor; the deleterious cascades (§4.3) are avoided by the contextual constraint, not by vigilance. There is *nothing to monitor*. This is why the device can support a parallel cognitive investment — and even benefit from it.

The qualifier *once primed* matters. Entering the regime — learning to keep the fatigable muscles out while standing — is a skill that can be acquired (§1.2.8). What the doctrine excludes is *sustained* self-observation during the regime, not the learning that makes the regime available in the first place.

Perig's empirical observation is decisive:

> *"I am dictating this section while doing JP³, and it is even a trigger — the dictation keeps me from falling into the self-observation that would break the modality"*
> *FR original:* « je dicte cette section pendant que je fais JP³, et c'est même un déclencheur — la dictée m'empêche de tomber dans l'auto-observation qui casserait la modalité »

Dictation, or any absorbing cognitive activity, works as an **anti-interference filter**: it occupies the attentional channel that, left free, would settle on the body and create the tiring echo.

#### The spectrum of "other things": cost and benefit

Not all parallel activities are equivalent:

- **Zero cost, high benefit:** listening (music, podcast, radio). The auditory channel is occupied, nothing is produced, attention floats.
- **Low cost, medium benefit:** free reverie. Nothing is produced, but ideas are generated.
- **Moderate cost, high benefit:** an informal phone conversation.
- **High cost, high benefit:** dictating substantive prose, solving an abstract problem. The cognitive channel is heavily engaged. This is useful — it allows thinking while moving — but it may explain a more marked post-session fatigue than expected, caused not by an excess of JP³ but by the dictation itself.
- **Very high cost, high benefit:** coaching a session while living the device, i.e. dictating doctrinal content during practice. This is the extreme end of the spectrum, to be reserved for the rare moments when lived experience and writing can feed each other.

That extreme case has a specific justification. Perig's stated intention:

> *"my intention is for the JP³ article to become not a text but a context for an agent"*
> *FR original:* « j'ai l'intention que l'article JP³ devienne non pas un texte mais un contexte pour un agent »

The corpus is meant to be read by an AI that will accompany the practitioner (see §6.7). Dictating during the session is therefore not a distraction but a **production method**: the context is co-written with the practice it documents. It is a special case, but a strong demonstration that the device tolerates this extreme level of parallel use.

#### Anti-scope: what JP³ is not

The "do something else" doctrine states negatively what JP³ *is not*:

- **JP³ is not a moving meditation.** It asks for no attention to the breath, the body or sensations. A meditation *can* be superimposed on JP³ by those who want it, but the device does not require it and works just as well without.
- **JP³ is not a proprioceptive practice.** It asks for no attention to alignment, posture or breathing. The deep postural chain works autonomously; projecting voluntary awareness onto it even risks breaking its autonomous functioning, just as thinking about one's steps makes one stumble.
- **JP³ is not a moment of "presence to oneself"** in the phenomenological sense. It is rather a moment when *the self becomes discreet*: because the self no longer has anything to do, the postural chain takes over.

This position distinguishes JP³ both from yoga and qi-gong (intense bodily attention) *and* from conventional fitness (attention to performance). It is a third regime: **body autonomous, mind free**.

What this adds to the rest of the manual is a property that no other section makes visible: the x³ regime *permits* and *encourages* attentional dissociation. Not out of indifference to the body, but because the deep postural chain does *not need* vigilance to function — on the contrary, vigilance interferes with it. This reverses the dominant mind-body model of somatic practices: here the liberation of the mind *depends* on the autonomy of the body, and vice versa.

#### §6.3.1 Figure/ground inversion — the incident regime as mode 2

The discovery of the incident regime (2026-09-25; see the incident-regime treatment elsewhere in the manual) gives the ego-and-echo doctrine a second mode.

- **Mode 1 (portal session).** During JP³ the body is autonomous and the mind is free to do something else — dictation, listening, reverie, manual tasks. JP³ is the figure; the parallel activity is the permitted ground.
- **Mode 2 (incident regime).** During everyday activity — dishes, cooking, walking around indoors — the mind is free because the task is already known and automatic, and JP³ embeds itself as a regulating background running underneath. The activity is the figure; JP³ is the ground.

The inversion is complete. In mode 1 the body carries JP³ and the mind frees itself for a parallel task. In mode 2 the body carries the parallel task and JP³ inscribes itself *within* it, without attentional negotiation. Both modes free the mind: the first by making the body autonomous *during* JP³, the second by embedding JP³ in a body already made autonomous by something else.

Both modes share the same anti-proprioceptive core: neither asks for presence to oneself or for sensory monitoring. The incident regime is even *more radical* in its ego-and-echo logic — there is nothing to notice at all; the heel strikes happen without changing posture or interrupting the activity. The name therefore holds for both modes. In mode 2, the echo is the muscle-tuning calibration that propagates without the ego observing it.

---

### §6.4 Priming, not session — the post-plateau phase

#### A hole in the model

A limitation of the model as described so far must be named honestly. The preceding sections (§5.4 to §6.3) describe the x³ regime as rising and convex (y = x³ for x > 0): the curve rises from 0, crosses the line 3x at √3, and keeps rising. This is physiologically accurate for the initial segment and for the plateau phase that follows. But it leaves a question hanging: **how does one exit JP³?**

The model promises a self-resolution for which it supplies no explicit means. §4.3 (cascades) asserts that "one no longer wants to stop" and that "the best way to stop is to accelerate a lot up to a limit". As a phenomenological description this is true — it is what the body signals — but it leaves a blur: *what are the means of accelerating?* If the x³ regime is structurally sheltered from deleterious cascades, it is because it *avoids* the modes that would produce a stop signal. Does one exit, then, by voluntarily entering a mode one has spent the whole session avoiding? At this point the internal logic of the model has a hole.

#### Reconceptualisation: JP³ is not a session, it is a priming

The clean way out goes through a **redefinition of the delivered product**. JP³ is not an exercise session in the conventional sense — a closed object with a beginning, middle and end, a measurable energy expenditure and a quantifiable effect. It is a **priming**: setting in motion a body that must then move in the world. The deliverable of JP³ is not "I did my session"; it is **"I feel like going out."** The device produces a state of availability for outdoor movement, not a bounded caloric consumption.

This solves the exit problem: **one does not exit JP³; one moves on to something else.** The exit threshold is marked by the appearance of a spontaneous desire — to go outside, walk, run an errand, go to the market, climb the cellar stairs, garden. This desire *is* the stop signal the model lacked: not a fatigue signal, but a signal of the world calling. The body has been primed and now wants to use this availability for something *in the world*, not *in the living room*.

#### The post-plateau phase: a second, non-JP³ phase

Perig named the post-plateau phase live, during his own session:

> *"I feel like going out, moving outside — but I also feel like sitting down; there is a cognitive fatigue, a slight dizziness. It is a state to be tamed."*
> *FR original:* « j'ai envie de sortir, de bouger dehors — mais j'ai aussi envie de m'asseoir ; il y a une fatigue cognitive, un léger vertige. C'est un état à apprivoiser. »

Three observations follow.

1. **Availability is not infinite energy.** JP³ does not *inject* energy; it *unlocks* a capacity that was constrained. A JP³ session *consumes* glucose, oxygen and circulating substrates (§4.3: soleus activation = glucose pumping). The post-session state is not "full of strength" but "free to move", which is not the same thing.

2. **Slight dizziness and cognitive fatigue are possible.** Several plausible mechanisms coexist: (a) peripheral vasodilation after prolonged upright standing with low residual venous return, giving mild orthostatic hypotension on switching to another mode; (b) vascular redistribution, as the blood held in the bridge muscles is redistributed; (c) relative hypoglycaemia, since the soleus has actively pumped blood glucose; (d) cognitive fatigue from parallel dictation (§6.3), if the "something else" was costly; (e) vestibular arousal linked to prolonged verticality with continuous micro-oscillations. None of these mechanisms is pathological; all are to be tamed.

3. **The transition must be respected.** After JP³ an intermediate phase is often needed *before* doing "the real thing": sit for three minutes, drink, eat a piece of fruit, let the dizziness pass. Then the desire to go out stabilises and one can go. Switching immediately from JP³ to a demanding outdoor activity *without* transition ignores the fact that JP³ has just mobilised a deep postural chain that needs a few minutes to settle back into ordinary locomotor mode.

#### Explicit anti-scope: what JP³ does not claim to provide

JP³ **does not claim** to be:

- a **complete exercise session** in the fitness sense — it replaces neither walking, nor running, nor weight training, nor targeted strengthening;
- an **energy source** in the sense of an energy drink or coffee — it does not overcharge; it unlocks;
- a **remedy** for underlying fatigue — it may reveal it; eliminating it requires sleep, nutrition and a change in life context;
- a **substitute** for regular sport for those seeking specific adaptations (VO2max, strength, long endurance).

What it *is*, positively, is a **priming device with a collapsed entry threshold**: accessible from a state in which *any other modality would be spontaneously dismissed*, and producing a state of availability for outdoor movement. It is narrow, precise and non-redundant with other forms of exercise. Its correct role is therefore not to be anyone's sports practice, but to be **the bridge** between a state where nothing is possible and a state where outdoor movement becomes possible again — a bridge in the literal sense, like the bridge muscles that carry it (§4.1.3).

This redefinition does not weaken the singularity of the device; it sharpens it. No other device in the exercise landscape positions itself as *prior priming*, accessible from the wrecked state and producing a desire to go out. Zone 2, HIIT, slow jogging, Pilates, tai chi all present themselves as *sessions* one schedules in a calendar. JP³ sits *before* the calendar — it is how one gets into motion when nothing is planned yet.

#### §6.4.1 Priming descends to the atom — the single heel strike

With the incident regime (2026-09-25), the granularity of priming descends one notch. The unit of JP³ is no longer the session (the fitness unit), nor even priming understood as a short window (10–30 minutes, with "feeling like going out" as its deliverable). It is **the heel strike itself**:

- **One strike = one proprioceptive and muscular calibration update** (via Nigg's muscle tuning).
- **The session becomes the optional aggregation of strikes**, not their prerequisite.
- **An alternative deliverable** appears: a state of availability maintained throughout the day, without ever having had a distinct session.

This extension **does not replace** "deliverable = feeling like going out" for the portal-session regime; it **adds** a second mode of use, whose deliverable is diffuse calibration with no figure/ground transition to negotiate. The post-session dizziness and hypoglycaemia described above probably do not apply to the incident regime, since the cumulative load is distributed — this remains to be observed.

The anti-scope holds: the incident regime **is not** a substitute for a real priming session when the body calls for one. The two are complementary modes; the "always within reach" does not replace the "too heavy".

---

### §6.5 Euphoria as destination — fuzzy but operative

#### Filling the conceptual gap

The top of the x³ curve — the auto-catalytic curvature of the session — had long been **left undefined**, an admitted conceptual gap. On 2026-08-17, after a night's sleep on the doctrine, Perig filled it: **"Euphoria is the destination."** The destination exists; it is *fuzzy* but perfectly operative.

> *"the top of the curve, the part that constitutes a conceptual gap in JP³ because it is undefined — I have the definition, and it fits very well with an ascending cubic movement: euphoria is the destination. euphoria can make you want to do lots of things; one cannot dictate a precise purpose for JP³, but essentially, the metric, that's it. a "fuzzy" destination but perfectly operative. and it must be acknowledged, one does not always reach the destination, but that is normal, it is learned."*
> *FR original:* « le haut de la courbe, cette partie qui constitue une faille conceptuelle de JP³ car indéfinie, j'ai la définition, et elle correspond très bien à un mouvement ascensionnel au cube : euphoria is the destination. l'euphorie peut donner envie de faire plein de choses, on ne peut pas dicter une finalité précise de JP³, mais essentiellement, the metric, c'est ça. une destination "Fuzzy" mais parfaitement opératoire. et il faut le reconnaître, on n'arrive pas toujours à destination, mais c'est normal, ça s'apprend. »

This resolves a long-standing ambiguity. If JP³ belongs to axis B — **metric-free** — why practise it, and toward what? The answer: the destination is a **state**, not a **number**. That is compatible with axis B (no external measurement, no numerical target) while giving the ascending x³ trajectory a real *telos*. The exponent 3 then means not only "more power, more efficiency" but, phenomenologically, **"toward joy"**. The name encoded the law; the law also encodes the destination.

#### Three articulations resolved at once

1. **With §6.4 (priming; deliverable = "feeling like going out").** Euphoria is the **mechanism** of priming. It does not dictate a precise post-JP³ purpose; it frees desire *in general*. One may want to write, call someone, cook, tidy up, go outside. The JP³ destination is euphoria; post-JP³ destinations remain open.

2. **With §6.3 (ego and echo).** Euphoria is not reached by watching oneself head toward it — that would be the paradox of the observer who sabotages what they observe (Wegner 1994). It arrives **because** the body has been properly set up and one is doing something else.

3. **With axis B (metric-free).** The apparent contradiction — "no metric, yet we are going somewhere" — dissolves: **a phenomenological metric is not an external metric.** Euphoria is self-verifying. When it is there, you know it; when it is not, you know that too. No sensor is required.

#### Built-in epistemic honesty

Perig himself wrote the essential caveat into the definition:

> *"one does not always reach the destination, but that is normal, it is learned."*
> *FR original:* « on n'arrive pas toujours à destination, mais c'est normal, ça s'apprend. »

The destination is real without being guaranteed: it is a **skill**, not an entitlement. This sentence protects the doctrine against the charge of a naive hedonic promise while preserving the reality of the telos. It is consistent with the broader principle that the standing soleus regime itself is learned (§1.2.8).

#### Choice of word and anti-scope

Strict formulation: ***"Euphoria is the destination — fuzzy but operative."*** The word is chosen deliberately. It must **not** be replaced by *runner's high* (already loaded and branded, connoted with long endurance sport), nor by *flow* (Csikszentmihalyi's concept carries too specific a cognitive load and requires matched challenge and skill), nor by *happiness* (too broad, too philosophical). *Euphoria* is the right word: a specific positive intensity, bodily and cognitive, transient and recognisable.

This definition does **not** say that JP³ is the pursuit of euphoria — pursuit is ego-and-echo, and it sabotages. It says that euphoria is what the trajectory tends toward *when it succeeds*: a retrospective recognition more than a frontal aim.

---

### §6.6 The perceptual solitude threshold

The full treatment of this threshold is in §2.1.1; it is restated here because it is doctrinal. Being at home ("chez soi") does not suffice: one must also feel *unobserved*. The threshold belongs to In Your Own Place, and it conditions At Your Own Pace: without perceptual solitude, the ultra-slow start cannot be sustained. The stealth variant (§2.1.3 / §5.5.2) was born precisely from this constraint, as the form JP³ takes when perceptual solitude is unavailable.

---

### §6.7 The agent as embodiment layer — third component of the JP³ system

#### Three irreducible layers

The disseminated JP³ system comprises **three irreducible layers**, not two:

1. the theoretical framework (article, research, singularity);
2. the protocol or device (the three Ps, variants, access conditions);
3. the **agent-mobile embodiment layer** — what makes (1) and (2) *take hold* in action.

Layer 3 is not a dissemination tool for layers 1 and 2, which is how §3.3 currently frames it. It is **constitutive**: without it, information remains known but unpractised.

The empirical evidence comes from the evening of 2026-08-27. Forward foot alignment — information Perig had known for a long time but never held under load — was suddenly made operative by a short conversational reminder just before he stepped onto the soccer field. Every run and every burst in the match was done with the correct geometry, and the post-match left Achilles signature was the bodily evidence. Perig named the mechanism:

> *"that's the advantage of having a coach you have to report back to"*
> *FR original:* « c'est l'avantage d'avoir un coach à qui on doit rendre des comptes »

A precedent belongs to the same family: in the discovery of the stealth variant (2026-08-07, §2.1.3), a conversation unlocked a new use of the body — washing dishes with a mobile pelvis. In both cases latent information was made operative by a conversational turn just before or during the action.

#### Resolving an unthematised tension

The main article contains a tension it never addresses:

- **Axis A and axis B** treat the coach as something to **remove**, a constitutive friction to be eliminated: *"no preparation, no commute, no outfit, no audience, no coach"*; *"no video coach, no leaderboard"*.
- **§3.3 of the main article** **adds** an AI coach — *"prompt in the appendix"* — as a response to the reproducibility crisis and a means of personalisation, adherence and scalability (refs Renda 2020, Mühlhäuser 2022).

The two passages coexist without dialogue. §3.3 is written in a conventional register ("scalable coaching for adherence") resembling the generic literature on AI health coaching — true, but underdetermined. The contradiction remains unresolved in the article.

The experience of 2026-08-27 makes a resolution possible. The agent is an **acceptable** coach because it **does not do** what the coaches to be eliminated did (Walk-at-Home, the personal trainer, the counter app). It does **not**:

- prescribe content;
- impose a tempo;
- demand a specific bodily form continuously;
- monitor (it respects ego and echo).

It **does** three specific things:

- **Timing** — it helps set an intention at the moment it can bite on action (before the effort, not in the abstract).
- **Anchoring** — it makes an already-known piece of information suddenly operative through shared formulation. The information does not become *new*; it becomes *available under load*.
- **Gentle accountability** — the implicit promise to report back sustains attention during the action, without external surveillance.

It therefore respects axis A (no friction; entry from a "wrecked" state remains possible), axis B (no imposed metric), and ego and echo (it invites one to do something else *well* and does not colonise proprioceptive attention).

The "prompt in the appendix" framing is thus a **special case** of the embodiment layer, not its richest form: a static prompt is a degraded version of synchronised conversational coupling. The real contribution of the agent layer is **phenomenological** — the timing of attention, the moment of switching from knowledge to action — not statistical (a compliance rate). This is also why the corpus is written as a context for an agent rather than as a text alone (§6.3).

#### Anti-scope

The embodiment layer is **not**:

- a metrics-based coaching app (counters, scheduled reminders, repetitive push notifications);
- a medical follow-up chatbot;
- a replacement for the practitioner (physiotherapist, physician) on clinical questions;
- continuous surveillance of the session itself (which would violate ego and echo);
- a source of imposed prescriptive content (which would violate axis A).

---

> **Sources (§6):**
> - `content/en/article.md` §3.4
> - `memory/project_famille_spu_via_negativa.md` (2026-08-17)
> - `content/fr/research-singularite.md` §4.6.8 ; `memory/project_ego_echo_doctrine.md`
> - `memory/project_ego_echo_doctrine.md` extension
> - `content/fr/research-singularite.md` §4.6.9 ; `memory/project_amorcage_vs_seance.md`
> - `memory/project_amorcage_vs_seance.md` extension
> - `memory/project_euphoria_destination.md` (2026-08-17)
> - `memory/project_seuil_solitude_perceptive.md` ; forward-ref §2.1.1 (already migrated in §2)
> - `memory/project_agent_couche_incarnation.md` (2026-08-27)
> - also referenced in the body: `project_standing_spu_recherche.md` (§6.2); `project_jp3_incident_regime.md` (§6.3.1, §6.4.1); `project_jp3_furtif_decouverte.md` (2026-08-07, migrated §2.1.3) (§6.7)

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

**Fact/decision**: Question opened by Perig on 2026-08-17: *"could JP³ be the royal road for sarcopenic elderly people, because the soleus remains a device whose endurance we know and which is evolutionarily conserved for standing upright? [...] a far more promising method than all those slow variations... as unsuspected as the power of the soleus."*
> *FR original:* « le JP³ serait-il la voie royale pour les personnes âgées sarcopeniques parce que le soléaire reste un dispositif dont on connaît l'endurance et qui est evolutivement conservé pour se tenir debout? [...] une méthode bien plus prometteuse que toutes ces variations slow... aussi insoupçonné que le pouvoir du soléaire. »

**Answer**: Yes — a solid structural argument, potentially one of the strongest angles of the entire framework. **New candidate pillar** for the main document.

**The core of the argument (three facts):**

1. **Differential loss by fiber type with age.** Type II fibers atrophy much faster than type I (Lexell et al. 1988, multiple replications). At 80: up to 30-50% loss of type II cross-sectional area, 10-25% for type I. The quadriceps (40-50% type I) decline markedly faster than the soleus (80-90% type I).

2. **Relative preservation of the soleus.** The soleus retains its composition and oxidative capacity far better than mixed muscles. It is the muscle that **remains**, structurally, when everything else collapses.

3. **Evolutionary conservation.** Human bipedalism → massive soleus specialization. The human soleus is disproportionately large compared with other primates, precisely because standing upright is metabolically costly and continuous. Evolution selected for fatigue resistance, oxidative capacity, long endurance. **The soleus is the muscular foundation of human upright stance.**

**The functional pivot**: upright stance is the last threshold of autonomy. The sit-to-stand test (STS) = central marker of frailty. Loss of the ability to stand = tipping from autonomy into dependence. As long as one can stand, one remains in the world of the functionally living.

**The specific JP³ fit:**
- Sarcopenia preferentially spares type I fibers and the soleus
- JP³ preferentially recruits the soleus in a tonic-oxidative regime (see §4.1.3 ankle-dominant)
- Upright stance is the threshold of autonomy

→ **JP³ calls on exactly what remains, and trains exactly what matters most functionally.** A structural fit, not a vaguely benevolent adaptation. No other movement modality has this dual property (uses what is preserved + trains the pivotal function of autonomy).

**What conventional approaches offer and where they hit a wall:**

- **Progressive resistance training** (Fiatarone 1994, sarcopenia gold standard): effective, but requires equipment, supervision, effort tolerance. Compliance drops with frailty. The most sarcopenic are precisely those who cannot or will not do strength training.
- **Chair-based programs**: accessible but under-activating.
- **Nordic walking, aqua-fitness, tai chi**: outings, groups, transport → high barrier.

**The gap JP³ fills**: for the genuinely frail person, at home, with low motivation and low effort tolerance — nothing exists that comes all the way down to where they are. JP³ scales all the way down: standing-with-a-mini-bounce, at home, without equipment, while listening to the radio. The ***degré zéro* (degree zero, §5.1)** becomes literally life-saving here.

**Empirical support:**

- Hamilton SPU 2022 (*iScience*) — seated SPU already works in this population. JP³ = standing extension when possible.
- Elek et al. 2025 (*Sports* 13(3):81; « Yuwono » attribution corrected 2026-11-13) — SPU replication in prediabetics; Kraemer 2024 (bioRxiv) not verified.
- Nuhu & Maharaj 2017 (*Diab Res Clin Pract*) — rebounding in metabolically impaired sedentary people, marked effects.
- Bramble & Lieberman 2004 (*Nature*) — evolutionary soleus/gluteal specialization for sustained locomotion.
- Lexell J et al. 1988 (*J Neurol Sci*) — type I/II fiber differential with age.
- Grimm A et al. — selective type II atrophy.
- Fried LP 2001 (*J Gerontol*) — frailty phenotype; gait speed and grip strength predict mortality better than most biomarkers. The soleus is directly relevant to the former.
- Fiatarone MA et al. 1994 (*NEJM*) — landmark resistance training in nonagenarians.
- Marcus RL 2010, Berger MJ 2019 — sarcopenia reviews; resistance training effective but compliance limited.

**Caveats to preserve (against overpromising):**

- **Sarcopenia has a systemic component** (anabolic resistance, insufficient protein intake) that JP³ alone does not address. Older adults need protein at ~1.2-1.6 g/kg/day + ideally resistance training when accessible.
- **Fall risk in the very frail.** Suggested progression: (1) seated SPU (Hamilton), (2) JP³ while holding a support (wall, chair back), (3) unsupported JP³. **The progression is the program.**
- **JP³ does not replace strength training.** Complementary, but above all **priming** (§6.4). For many older people, priming *is* the main obstacle — getting out of the "I can't / don't want to do anything anymore" hole is the critical function.

**Important personal observation from Perig**: *"like me, who am sometimes so tired that I'm 75 years old"*. **The chronically fatigued 50-year-old and the sarcopenic 75-year-old share the same functional physiology** — fatigable musculature that does not respond, oxidative capacity preserved but underused. What works for one has structural chances of working for the other. Perig's experience is a signal, not a bias.
> *FR original:* « comme pour moi qui suis parfois si fatigué que j'ai 75 ans »

**Article §3.2 case 2 — The elderly or frail person** : The **total safety** of "In Your Own Place" removes the fear of falling. "At Your Own Pace" allows a start so slow it is accessible even to the weakest, with the option to hold onto something for initial support. Targeted soleus strengthening and improved proprioception (barefoot) are crucial for balance and fall prevention.

**JGH strategic context** : Perig's family physician at the JGH (Sir Mortimer B. Davis Jewish General Hospital, McGill-affiliated, Lady Davis Institute for Medical Research) offered to help him present JP³ to the hospital (2026-08-17). Sarcopenia = likely centerpiece of the deck for this clinical audience. Proposed clinical progression: seated SPU (Hamilton) → supported JP³ → unsupported JP³.

**Study that would settle it**: randomized controlled trial in adults ≥75 years, MMSE > 24, autonomous, over 12 weeks. Arms: usual care / SPU alone / JP³ alone / SPU+JP³. Measures: STS, 4 m gait speed, grip strength, muscle mass by DEXA, HbA1c, frailty questionnaire. ~120 subjects. Feasible in collaboration with a geriatric center.

---

### §7.2 Osteoporosis — second JGH door

> **source:** `memory/project_osteogenic_jgh_seconde_porte.md`

**The data**: "heel drop" exercises (rising onto the toes, then abruptly releasing onto the heels) produce roughly **3× body weight** at the hip. Bassey & Ramsdale documented **maintenance of bone density in postmenopausal women** practicing this exercise. Osteogenic threshold: ~2× BW in ground reaction force. Loading frequencies around 10-20 Hz stimulate bone formation more effectively than low-frequency loads.

**Why this is structurally new**

The **sarcopenia** pillar (§7.1) was the only hard clinical pillar for the JGH. It rests on: type I spared, soleus spared, upright stance as the pivot of autonomy.

The **osteoporosis** pillar is a **parallel and complementary** pillar, with an equally clean structural fit:
- **Population**: postmenopausal women = major public-health issue (femoral fractures = mortality and loss of autonomy), heavily studied clinically
- **JP³ mechanism**: heel impact ~3× BW at 10-20 Hz = squarely within the documented osteogenic window
- **Modality**: stationary standing, barefoot, a few minutes/day — high clinical feasibility (no equipment, no fall risk tied to moving around)
- **Hard metrics**: DEXA (bone densitometry) = standardized measure, allows a clean clinical trial with a quantitative endpoint — easier to publish than a sarcopenia trial
- **Safety**: forces well below conventional running or plyometrics, yet above the osteogenic threshold — an arguable sweet spot

**Overlaps with the existing corpus**

- **Jump rope** (cf. `project_corde_a_sauter_cousine_spu`) — "osteogenic loading for sarcopenia" was already mentioned there as a documented corpus to draw on selectively. The JP³ heel activator recovers this argument in a gentler regime (no full jump, upright stance).
- **Sarcopenia royal road** — the two pillars do not cannibalize each other: the same older person can have sarcopenia AND osteoporosis. JP³ addresses both **with the same gesture**, which is an argument for clinical simplicity.
- **Heel activator** — the osteogenic effect is intrinsic to this mode of entry (heel as impact point); it does not require a specific variant.

**Sources to consolidate**

- **Bassey & Ramsdale** (heel drop, postmenopausal women) — cited in Perplexity 2026-09-25. Find the exact reference and read the study.
- **PMC13541840, PMC11481284** — articles cited by Perplexity on bone loading and loading frequencies. To read.
- **Melioguide "heel drop exercise"** — popular source, but useful as a demonstration that the exercise already has a recognized clinical existence. Confirms that we should not "invent" but **attach** JP³ to a known exercise.

**JGH strategy**

**Option 1 — Osteoporosis as the deck's *lead*.** DEXA is harder/less contested than functional sarcopenia measures. An osteoporosis pilot trial would be easier to set up and publish. Could become the JGH **entry door** instead of sarcopenia.

**Option 2 — Two pillars presented jointly.** JP³ as a **dual-effect intervention** (sarcopenia + osteoporosis) in older adults — attractive because a single protocol addresses two classic comorbid problems.

**Option 3 — Sarcopenia stays lead, osteoporosis as a "mechanistic bonus".** More cautious: do not dilute the message. To be reconsidered if JGH interlocutors show an interest in osteoporosis (endocrinologists, rheumatologists, geriatricians working on fractures).

**Open question**

The *unipodal* heel activator (bounding on one leg) probably generates much higher forces (~4-6× BW?) — hence **more osteogenic** but less accessible/riskier in frail older subjects. Is there a compromise point: bipodal at the start of the session (safety, entry into the osteogenic window), then a few calibrated unipodal bounds (focused load peak)? Correlates with `project_warmup_piedsnus_prematch.md` (unipodal bounding as gold-standard test, RSI>0.5).

---

### §7.3 Depression, anxiety, perceived fatigue

> **source:** `content/en/article.md` §3.2 cas 3, 5, 6

**Case 3 — The depressed or deeply unmotivated person:** JP³ acts as a **"founding psychological gesture"**, the "first possible act" of behavioral activation. The absence of barriers (no equipment, no judgment) and the ultra-slow "At Your Own Pace" make it possible to break the cycle of inactivity without willpower, offering immediate benefits for emotional regulation.

**Case 5 — The person suffering from body shame / social anxiety:** The intimacy of "In Your Own Place" completely eliminates social exposure and external judgment. The person can exercise with full confidence, in pajamas if they wish, without worrying about appearance or performance relative to others. This fosters a focus on internal sensations and well-being.

**Case 6 — The anxious or stressed person who cannot "meditate":** The rhythmic, repetitive "Jogging in Place" movement acts as a **somatic anchor**, helping to redirect attention away from rumination and induce a state of "active meditation" or "flow state" without formal cognitive effort. "At Your Own Pace" (light-to-moderate intensity) produces immediate anxiolytic effects without the risk of the transient anxiety spike associated with intense exercise.

---

### §7.4 CFS / long COVID

> **source:** `content/en/article.md` §3.2 cas 7

**Case 7 — The person with chronic fatigue (CFS/ME, post-COVID, burnout):** "At Your Own Pace" is essential for strict **pacing**, making it possible to avoid post-exertional crashes. Sessions can be extremely short (a few minutes) and of minimal intensity, increasing very gradually. JP³ offers a way to maintain gentle mitochondrial activation without exceeding aerobic energy capacity, supporting progressive reconditioning.

---

### §7.5 Chronic pain, injury rehab

> **source:** `content/en/article.md` §3.2 cas 8 + `memory/project_malalignment_syndrome_schamberger.md`

**Case 8 — The person recovering from a minor injury or post-surgery (with medical clearance):** The controlled, low-impact "Jogging in Place" movement allows for safe rehabilitation. "At Your Own Pace" ensures intensity is always within the tolerance zone. Strengthening the soleus and improving proprioception are crucial to restoring function and preventing future injury—all in an environment free of the risk of falls or collisions.

**Perig's clinical case — Malalignment Syndrome (Schamberger)**

**Clinical name of the pattern**: **Malalignment Syndrome** as described by Wolf Schamberger — a combination of **left posterior innominate rotation** (the leg drawn backward) + **left outflare** (external rotation of the foot, legs spread apart). Extremely common (innominate rotation: 80–85% of pelvic imbalances; outflare/inflare: 40–50%). Manual diagnosis by comparative palpation of pelvic landmarks (ASIS, PSIS, iliac crest, pubis) and the sitting-lying test.

**Signature mechanism confirmed**: the fall at age 14 with a leg trapped in a hole (documented in root memory, SI instability) corresponds **exactly** to the most frequently cited injury mechanism — asymmetric torsional shear force on the SI joint on the side of the trapped leg → traumatic SI sprain → permanent residual laxity if not treated early → a compensatory pattern sets in as the new postural norm over 35 years. Documented PMC case: 14 years of recurrent dysfunction successfully treated — long-standing chronicity remains reversible.

**Correction — Schamberger Muscle Energy Technique (MET)**:
- *Left posterior rotation*: therapist resists active left hip flexion → isometric contraction of iliacus + rectus femoris → anterior pull on the left ilium. Leverage variant: passive femoral extension up to the posterior acetabular end-range.
- *Left outflare*: therapist resists active abduction/external rotation of the partially flexed left knee → functionally reverses origin/insertion of piriformis + gluteus maximus → anterior pivot of the ilium in the horizontal plane.
- Order: treat both in the same session, recheck after each correction.

**SI belt**: the belt stabilizes (compression → *force closure*) but **does NOT correct the asymmetric position**. Documented critical trap: without prior alignment, the belt *locks in the wrong position*. Correct method: activate stabilizers (cushion between the knees, standing glute contraction) before fastening, then position just above the greater trochanter and below the ASIS (≈2 inches of clearance). Too wide → presses on the widest part of the pelvis, *may worsen the outflare*. Schamberger's recommendation: MET first, belt right after to maintain the gain.

**Corrections of earlier interpretations**:
- *Left-side weight-bearing preference* ≠ "standard right-hander" — it is an **SI compensation**: the body loads the unstable side to bring the articular surfaces together and stabilize it (Schamberger). A precise interpretation, not banal laterality.
- *External rotation of the left foot alone* → is only a visible surface sign; the real pattern is pelvic (outflare + posterior innominate rotation), not a foot problem.

**Scientific debate to be aware of**: Sturesson et al. measure very small SI motion (≈2.5° rotation, 0.7 mm translation) and no difference between symptomatic and asymptomatic joints → calls into question the ability to palpate/manually correct a "position". The Schamberger model coexists with this reservation without settled consensus. To be carried honestly when presenting this framework to a professional — not as dogma.

**Recommended action**: direct pelvic assessment by an osteopath or physiotherapist **trained in the Schamberger model** (not just a generic osteopath). To be raised proactively at the next JGH family physician appointment — framework to be mentioned by name, with reference to the fall, to guide the referral.

**Perplexity document pointer**: `facts/perplexity-malalignment-schamberger-2026-09-28.md` — full 6-turn conversation with Perplexity on 2026-09-28: identification of the syndrome, detailed MET corrections, videos (YouTube + Michigan State University College of Osteopathic Medicine), link between SI instability + laxity, fall mechanism, SI belt. Contains 26+ academic and clinical references.

---

### §7.6 Pediatric and adolescent

> **source:** *à développer — pas de source consolidée en mémoire à ce jour*

Section awaiting material. Extending JP³ to adolescents (school sedentariness, links with primary and secondary school, integration into the lunch break, a "stealth" variant in the bedroom for the teenager who refuses bodily social exposure) is to be built in connection with a field site. Natural candidate: a school or pediatric clinic via a JGH introduction.

---

### §7.7 Pregnancy and postpartum

> **source:** *à développer — pas de source consolidée en mémoire à ce jour*

Section awaiting material. Plausible angles to document: (1) pregnancy — an alternative to outdoor walking when mobility/balance become limiting, a gentle adapted spring-mass regime, *degré zéro* accessible up to term; (2) postpartum — pelvic floor recovery, progressive return to loading, integration with infant care (baby carried, during naps). To be documented in collaboration with a perinatal physiotherapist.

---

### §7.8 Neurodegenerative (Parkinson, early cognitive decline)

> **source:** `content/fr/research-mecanismes.md` §3.4.5 RAS/Parkinson (lignes 219-226)

#### Proof by pathology — Parkinson and Rhythmic Auditory Stimulation

**RAS** (Rhythmic Auditory Stimulation, developed by Thaut) uses a metronome or music to restore gait in Parkinson's patients. Documented mechanism: RAS **bypasses the failing basal ganglia** via **cerebellar** pathways (2025 review).

Excerpt:
> *"Music therapy provides external rhythmic stimulation, recruits neural networks to bypass the basal ganglia and synchronizes gait with external rhythms through auditory-motor neural networks."*

This proof by pathology is powerful: it shows that **rhythm is a primary regulatory mechanism**, capable of compensating for a major neurological failure. If rhythm can restore gait in a Parkinson's patient, one can reasonably assume it can resynchronize a brain that is merely tired or stressed.

**JP³ application**: the spontaneous rhythmic pattern of the ankle-dominant spring-mass regime (natural bounce frequency ~2-3 Hz) provides locomotor-rhythmic training at home, without the constraint of moving around (fall risk ruled out by "In Place"). For the Parkinson's patient, JP³ could serve as a daily, cumulative rhythmic rail, self-administered at the patient's own discretion — complementary to supervised RAS physiotherapy sessions.

---

### §7.9 Metabolic (T2D, prediabetes) — forward-ref §4.3

> **source:** `content/en/article.md` §3.2 cas 1, 4, 9 + forward-ref §4.3 (bénéfices multi-domaines métaboliques)

**Case 1 — The "hyper-busy" person:** The "Jogging in Place × In Your Own Place" synergy enables **seamless integration** with household tasks (dishes, laundry, reading). Exercise is no longer a "waste of time" but a "productivity amplifier." **Micro-bouts** (2–5 minutes) are ideal for turning downtime into productive movement sessions.

**Case 4 — The overweight or obese person:** The low-impact "Jogging in Place" movement reduces joint stress, allowing exercise without excessive pain. "At Your Own Pace" enables a progression in which intensity is always matched to current capacity, avoiding injury and discouragement. **Maximal proprioceptive feedback** (barefoot, mirror) helps correct dysfunctional gait patterns reinforced by thousands of incorrect repetitions.

**Case 9 — The person with chronic sleep debt or in stimulant withdrawal:** JP³ helps **reconnect with the body's fatigue signals** and regulate emotions, which can foster more restorative sleep. By avoiding overexertion (thanks to "At Your Own Pace"), it supports recovery and recalibration of the nervous system.

**Forward-ref §4.3** : detailed metabolic benefits — HbA1c, soleus pump, postprandial glycemia, SPU family (Hamilton), non-fatiguing tonic-oxidative regime compatible with daily, multiple-times-a-day use.

---

## § 8. Discussion

**TOC §8**
- §8.1 Paradigm shift *(migrated from article.md §5.1)*
- §8.2 Comparison with adjacent practices *(migrated from article.md §5.2; `research-singularite` §2–3 full matrix; jump-rope cousin, slow jogging, mindful walking)*
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

**Research-singularite §2 — review by family (FR verbatim)**

Nine practices and movements were investigated (dedicated web research, direct citations). They fall into four families according to their mode of potential convergence with JP³.

#### 2.1 Locomotor rivals — the closest family

**2.1.1 Slow jogging (Hiroaki Tanaka, "niko-niko pace") — major rival**

A Japanese exercise method developed by Prof. Hiroaki Tanaka (Fukuoka University). The protocol fits in a single sentence: *run as slowly as you can while still holding a smile* ("niko niko" = smile). Intensity ~50% VO2 max. Mid-foot strike. No prescribed cadence, no target HR, no watch required.

Key quotation (Magical Shoes / NFPT):
> *"Niko niko pace encompasses what Tanaka considers a smiling cadence that helps lower blood pressure while boosting fitness. Tanaka's theory: Run only as fast as your body lets you smile. For most beginners it means jogging at a walking pace."*

A/B/C positioning: A ✓ · B ✓ · C ~ (niko-niko plateau, not an x³ trajectory)

Convergences with JP³: radical slowness, non-metric feedback, anti-"no pain no gain" doctrine, intention of "zero displeasure", long track record. Divergences: **spatial displacement** vs. pure verticality; "niko niko" codification vs. anonymous protocol; often progressive aim vs. total absence of a destination.

**Verdict**: the most serious rival. **On axes A and B, slow jogging is quasi-equivalent to JP³.** The "in place vs. displacement" divergence is material but not decisive from the standpoint of the access device.

**2.1.2 Marching in place (physiotherapy / ACSM protocol) — institutional precedent**

Marching in place as prescribed in rehabilitation and mainstream fitness protocols. A ✓✓ · B ~ · C ✓ (dosed, capped). The closest institutional precedent to JP³ on the three Ps, but it remains supervised and protocolized.

**2.1.3 Walk at Home (Leslie Sansone) — commercial precedent**

US fitness franchise. Video-led marching in place with a coach. A ~ · B ✗✗ · C ✗. Satisfies 2 of the three Ps but fails on "at your own pace" (imposed tempo) and keeps a strong metric.

**2.1.4 Rebounding / mini-trampoline — false proximity**

Vertical jumping on a mini-trampoline. A ~ · B ✗ · C ✗. The equipment interferes with listening to the body and suppresses the foot-strike waves.

**2.1.5 Chi Running (Danny Dreyer) — philosophical convergence, structural divergence**

Tai-chi principles applied to running. A ~ · B ✗ · C ✗. Prescribed cadence (170-180 steps/min) = metric paradigm, even if "mindful".

#### 2.2 Meditative rivals — distant relatives

**2.2.1 Kinhin (zen)** — A ✓ · B ✓ · C ~ — structural false friend, near-zero physical intensity.
**2.2.2 Mindful walking (MBSR, Kabat-Zinn)** — A ~ · B ✓ · C ~ (rather refutes it) — 23-61% dropout among depressed participants.
**2.2.3 Tai-chi** — A ✓ · B ✓ · C ~ — serious competitor on A/B, refutes C (no epistemological inversion).
**2.2.4 Qi-gong** — A ✓ · B ✓ · C ✗ — no data in severe depression.
**2.2.5 Feldenkrais / Alexander** — A ~ · B ✓ · C ✗ — false friends, cognitive, near-zero physical intensity.

#### 2.3 Philosophical rivals — recent anti-metric movements

**2.3.1 Intuitive Exercise / Intuitive Movement** — A ✓ · B ✓✓✓ · C ✓✓ — broad framework, neither vertical nor specific. JP³ as a specific cardiovascular instantiation.
**2.3.2 Joyful Movement** — A ✓ · B ✓✓✓ · C ✓✓ — broad philosophical framework popularized on TikTok/Instagram since 2023.
**2.3.3 "Quiet fitness" / "Slow fitness"** — post-COVID industry trend, not a codified precedent.

#### 2.4 "High entry threshold populations" rivals — the real conceptual deposit

**Major discovery**: the conceptual class "exercise practicable from the destroyed state" exists in the literature, fragmented into disjoint silos with no unified terminology.

**2.4.1 Pacing (ME/CFS, Long COVID) — Energy Envelope Theory (Leonard Jason)**

Principle: stay below the threshold of symptomatic exacerbation (PEM). PACELOC trial (2024-2025): 15%/week reduction in crash frequency. WHO and NICE: GET not recommended/contraindicated in PEM. Strong convergence with JP³ (sub-threshold interoceptive listening, rejection of intensity, effects through duration). Divergence: very cautious (sub-walking), highly cognitive. **Articulation point**: if JP³ works in depression, it is not as GET — it is as pacing.

**2.4.2 Behavioral Activation (depression — Jacobson, Martell, 2001+)**

"Change will be easier when starting small". Breakdown into atomic steps. **Verdict**: **JP³ can be described as the cardiovascular instantiation of the BA principle**.

**2.4.3 Minimum Effective Dose (Fisher, Steele)** — strength training; divergence: dedicated to strength, highly dosed.

**2.4.4 Chair-based cardio / seated aerobics (geriatrics)** — A ✓✓✓ · B ~ · C ✓✓✓ — critical divergence: not vertical (central for pulsed perfusion).

**2.4.5 Adaptive Daoyin (classical TCM — 2000+ years)** — *"reinforcing Daoyin for deficient people, treating Daoyin for people who are ill"*. Historical anchor point.

**2.4.6 NEAT (Levine, Mayo Clinic)** — A ✓✓✓ · B ✓ · C ✓✓✓ — dispersed (not a localized protocol), structurally non-vertical.

#### 3. Synthetic matrix — the 3 axes against the 21 practices

| Practice | A | B | C (x³) | Verticality | Cardio | Precedent | Severe depression |
|---|:---:|:---:|:---:|:---:|:---:|:---:|:---:|
| **JP³ (hypothesis)** | ✓✓✓ | ✓✓✓ | ✓✓✓ | ✓ | ✓ | **NO** | To be tested |
| Slow jogging (Tanaka) | ✓ | ✓ | ~ | ✗ | ✓ | Yes | No |
| Marching in place (physio) | ✓✓ | ~ | ~ | ✓ | ✓ | Yes | No |
| Walk at Home | ~ | ✗✗ | ✗ | ✓ | ✓ | Yes | No |
| Rebounding | ~ | ✗ | ~ | ✓ | ✓ | Yes | No |
| Chi Running | ~ | ✗ | ~ | ✗ | ✓ | Yes | No |
| Kinhin | ✓ | ✓ | ✗ | ~ | ✗ | Yes | No |
| Mindful walking (MBSR) | ~ | ✓ | ✗ | ✗ | ✗ | Yes | Yes — dropout ↑ |
| Tai-chi | ✓ | ✓ | ~ | ~ | ~ | Yes | Yes — effect yes, C no |
| Qi-gong | ✓ | ✓ | ~ | ~ | ~ | Yes | No |
| Feldenkrais / Alexander | ~ | ✓ | ✗ | ~ | ✗ | Yes | No |
| **Intuitive Exercise** | ✓ | ✓✓✓ | ~ | ✗ | ~ | Yes | No |
| **Joyful Movement** | ✓ | ✓✓✓ | ~ | ✗ | ~ | Yes | No |
| Peloton / digital fitness | ✗✗ | ✗✗✗ | ✗ | ~ | ✓✓ | Yes | No |
| Fitness snacks (Gibala) | ~ | ✗ | ✗ | ~ | ✓✓ | Yes | No |
| Zone 2 (San Millán / Attia) | ✗ | ✗ | ✗ | — | ✓✓ | Yes | No |
| Conventional warm-up | ~ | ✗ | ✗ | — | ~ | Yes | No |
| NEAT | ✓✓✓ | ✓ | ✗ | ✗ | ~ | Yes | No |
| Chair-based cardio | ✓✓✓ | ~ | ~ | ✗ | ~ | Yes | No |
| **Pacing (ME/CFS)** | ✓✓ | ~ | ✗ | ✗ | ~ | Yes | Yes (CFS, Long COVID) |
| **Behavioral Activation** | ✓ | ✓ | ✓ | ~ | ~ | Yes | Yes |
| Minimum Effective Dose | ~ | ✗ | ✗ | ✗ | ✗ | Yes | No |
| Adaptive Daoyin (TCM) | ✓ | ✓ | ~ | ~ | ~ | Yes (2000 years) | No |

**Reading**: no practice combines A + B + C x³. JP³ is the only candidate for the complete triplet.

**Honest verdict — research-singularite §4.4: JP³ as a trans-silo synthesis point** — not a new mechanism, but a **crystallization** of dispersed principles (the epistemological inversion of pacing, the "starting small" of BA, the minimum viable of MED, the non-metric listening of intuitive movement, the pulsed verticality of slow running, the radical accessibility of adaptive Daoyin) into a practicable device.

---

### §8.3 Limitations and open questions

> **source:** `content/en/article.md` §5.3

Despite its advantages, JP³ has certain limitations and requires clinical considerations:

- **Formal Empirical Validation:** Although JP³ draws on well-established scientific principles (soleus physiology, Zone 2, proprioception, behavioral activation), its validation as an integrated protocol requires controlled clinical studies.
- **Overload Potential:** Although "At Your Own Pace" minimizes this risk, individuals with specific medical conditions (e.g., uncontrolled cardiac disorders, certain acute injuries) should always consult a healthcare professional before starting. The risk of Post-Exertional Malaise (PEM) in patients with chronic fatigue must be managed with extremely careful pacing.
- **Perceived Monotony:** For some, the repetitive nature of jogging in place may initially generate boredom. However, experience shows that this boredom is often transient and turns into a driver of optimization or an opportunity for a "flow state."
- **Environmental Quality:** Although "In Your Own Place" is an advantage, an unsafe environment (slippery floors, clutter) or an excessively noisy one could detract from the experience.

**Open empirical questions (consolidated):**

- Did Tanaka test slow jogging in severe depression or in the destroyed state? (Not found in the 2026-08-15 research; to be checked more finely.)
- Is "slow jogging practiced in place" already a variant named by Tanaka or his successors?
- **No silo directly tests the hypothesis that the destroyed state *facilitates* entry** (axis C, x³ trajectory). If JP³ were empirically validated on this point, it would be an original scientific contribution independently of the physiological mechanisms (already known).

---

### §8.4 Implications for clinical practice — JGH as first live test

> **source:** `content/en/article.md` §5.4 + `memory/project_jgh_presentation_voie.md`

**Article §5.4**: JP³ offers significant opportunities for various healthcare professionals:

- **General Practitioners and Geriatricians:** A simple tool to prescribe to counter sedentariness, prevent falls, and improve metabolic health, even in frail or poorly mobile patients.
- **Psychiatrists and Psychologists:** A powerful behavioral-activation modality for depression and anxiety, offering immediate emotional benefits and improved adherence.
- **Physiotherapists and Occupational Therapists:** A rehabilitation protocol for foot function, proprioception, and balance, adaptable to different phases of recovery.
- **Exercise Specialists:** An innovative approach for reaching populations far removed from exercise and for integrating physical activity into daily life in a sustainable way.
- **AI Coaching Potential:** The integration of AI prompts offers a scalable solution for personalizing coaching, improving protocol fidelity, and supporting self-regulation, making JP³ applicable at scale.

**JGH strategic path (memory note project_jgh_presentation_voie, 2026-08-17)**

On 2026-08-17 Perig revealed that his **family doctor**, who works at the **Jewish General Hospital in Montreal** (Sir Mortimer B. Davis Jewish General Hospital / HGJ / JGH), had offered to help him **present his work on JP³ at the hospital**. Wording: *"I completely forgot to say that my family doctor, who works at the Jewish hospital in Montreal, told me she would help me present my work at the hospital. That's the path."*
> *FR original:* « j'ai complètement oublié de dire que mon médecin de famille qui travaille à l'hôpital juif de Montréal m'a dit qu'elle allait m'aider à présenter mon travail à l'hôpital. il est là le chemin. »

**Why the JGH is particularly fertile ground:**

1. **McGill-affiliated academic institution** with the **Lady Davis Institute for Medical Research** — substantial research in aging and metabolism.
2. **Active Division of Geriatric Medicine** — the "JP³ royal road for sarcopenia" thesis (§7.1) falls squarely within their field of clinical interest.
3. **Bilingual environment** — matches Perig's francophone/anglophone context.
4. **Diversified clinical ecosystem** — endocrinology, cardiology, internal medicine, and family medicine coexist.

**Deliverable format**: 30-45 min deck (grand rounds or interdepartmental seminar) + possibly a one-page brief for preparatory circulation. The existing article remains the background reference.

**Suggested structure for the deck:**

1. **The clinical gap**: frailty + the problem of compliance with strength training in older adults → not covered by existing approaches.
2. **The physiological fit**: sarcopenia preferentially spares type I / soleus preserved / standing posture = pivot of autonomy / JP³ recruits exactly what remains.
3. **The device**: brief description of JP³, *degré zéro* (degree zero), postural self-enforcement, the three Ps.
4. **Placement in the therapeutic ecosystem**: complementary priming, not a substitute for strength training or protein. Clinical progression: seated SPU → supported JP³ → autonomous JP³.
5. **Concrete proposal**: feasibility pilot, observational study in JGH geriatric patients, or targeted collaboration to be defined according to interest.
6. **What Perig brings / what he asks** — open question, format of engagement to be discussed.

**Enrichment 2026-09-25 — two substantial additions**:
1. **Osteoporosis as a second door parallel to sarcopenia** (§7.2). The JP³ heel activator generates ~3× BW at 10-20 Hz (Bassey & Ramsdale), squarely within the osteogenic window. DEXA = hard metric.
2. **Adherence argument reinforced by the incident regime** (§5.6). "10 min morning and evening" is a wall for many; the incident regime offers a few heel strikes every time one passes through the kitchen — a diffuse protocol, nearly free in decision cost.

**Anti-scope**: do NOT present it as "I have discovered a treatment for sarcopenia". Target wording: *"a candidate device, with a promising structural fit for this population, that warrants a pilot evaluation"*.

**Reordering of the phased strategy:**

1. **JGH presentation** (in the coming weeks/months, with the family doctor) → echo, questions, potential research partners identified
2. **Institutionally facilitated pilot** — if the JGH takes interest, a CGM or observational pilot becomes much more feasible.
3. **Hamilton** with real institutional backing (co-signature by a Lady Davis or geriatrics researcher), not cold outreach.

---

### §8.5 Research agenda

#### §8.5.1 Hamilton outreach — soleus push-up continuity

> **source:** `memory/project_version_article_hamilton.md`

**Action to carry out**: create a dedicated version of the JP³ article (in addition to the standard public version) designed for **direct contact with Marc Hamilton** — the author of the Soleus Pushup (SPU, iScience 2022) — and propose a collaboration to him.

Perig's exact wording (2026-08-17): *"to note: create a version of the article expressly to ask Hamilton for a collaboration."*
> *FR original:* « à noter : créer une version de l'article expressément pour demander une collaboration avec Hamilton. »

**Why:** The 2026-08-15/17 research cluster brought out that JP³ is probably a **member of the SPU family in a standing regime** (`project_famille_spu_via_negativa.md`, §6.2), with several additions that the SPU sacrifices by design:
1. Postural self-enforcement (addresses the dependence on EMG feedback identified by the Kraemer 2024 and Yuwono 2025 replications)
2. Engagement of the deep postural chain (§4.1)
3. Motivational accessibility (*envie de sortir* — the urge to go out; never seated in front of a screen)
4. Moderate cardio component (metabolic potentiation hypothesis)

**What the dedicated version must contain:**

- **Opening frame**: explicit acknowledgment of Hamilton's work as the foundation; positioning of JP³ as an extension of the SPU family, not as a rival device.
- **Via negativa formulation**: SPU and JP³ share a negative design core (exclusion of the fatigable phasic-glycolytic musculature); they differ on the positives (isolation through knee flexion vs. postural self-enforcement).
- **The 3 additions of JP³** presented as complementary to the SPU program rather than as corrections.
- **The open question of cardio potentiation**: formulated as a testable hypothesis, while explicitly acknowledging that Hamilton himself showed the SPU effect to be independent of cardiac output.
- **Concrete study proposal**: 4-arm OGTT crossover (sitting / seated SPU / standing calf raises / ultra-light JP³ below 2.5 METs), with EMG monitoring of soleus vs. gastrocnemius vs. vastus lateralis, 3 h postprandial, glucose + insulin + VLDL. ~30 subjects, feasible in ~1 year.
- **Complementarity positioning**: the Hamilton program establishes the physiology; JP³ contributes a phenomenological doctrine of use and a motivational accessibility that could facilitate public adoption of the SPU findings.

**Format**: separate file in `content/en/` (Hamilton reads English), not among the site's published articles. Perhaps `content/en/collaboration-proposal-hamilton.md`, not linked from the public site, sent by email with PDF/link. Contact: Marc T. Hamilton, University of Houston, affiliated with the Texas Obesity Research Center.

**Anti-scope**: this dedicated version is not a scientific article to be submitted for publication; it is a **contact document**. Different register, different expectations.

#### §8.5.2 Open empirical questions

> **source:** `content/en/article.md` §5.5

- **Clinical Efficacy Studies:** Randomized controlled trials are needed to quantify the benefits of JP³ in specific cohorts (e.g., older adults, depressed patients, people with CFS).
- **Biomarkers and Mechanisms:** Further explore changes in metabolic biomarkers (glucose, lipids), stress hormones, neuroplasticity markers (BDNF), and soleus activity.
- **AI Impact:** Evaluate the effectiveness of AI prompts in improving adherence, personalizing the protocol, and clinical outcomes.
- **Comparison with Other Interventions:** Compare JP³ with other forms of light/moderate exercise or with meditation interventions to assess its superiority or complementarity.
- **Proprioception and Balance Measures:** Use objective tools to measure improvements in proprioception and balance with barefoot practice.

**Minute-by-minute empirical test (research-singularite §1.2.7)**: at *t = 5 min*, JP³ values of HR, HRV, and subjective energy are **lower** than in a matched Zone 2 session (positive concavity); at *t = 20–30 min*, they are **higher** (durable overtaking); the subjective-energy trace is **monotonically increasing** (contra Zone 2). If the prediction holds, the cubic trajectory ceases to be an analogy and becomes an observation.

**JGH sarcopenia study that would settle it**: randomized controlled trial in adults ≥75 years, MMSE > 24, autonomous, over 12 weeks. Arms: usual care / SPU alone / JP³ alone / SPU+JP³. Measures: STS, 4 m gait speed, grip strength, muscle mass by DEXA, HbA1c, frailty questionnaire. ~120 subjects.

#### §8.5.3 The `.ada` format as native anti-hallucination carrier

> **source:** à développer — pointeur `drafts/jp3-resume-ada.md`

Section awaiting consolidated drafting. Working thesis: the `.ada` format (see `~/projects/ada-format/`) serves as a **native anti-hallucination carrier** for derived JP³ content — notably for patient leaflets and agent prompts, where fidelity to the framework matters more than stylistic variation. To be deepened with Perig.

---

## § 9. Conclusion

> **source:** `content/en/article.md` §6 Conclusion

The contemporary landscape of physical activity is marked by a striking paradox: on one side, a pervasive social discourse glorifying intense exercise, performance, and the idealized body image, fueled by mass media and social networks. On the other, an alarming clinical and epidemiological reality in which an **overwhelming majority of the world's population fails to meet minimal recommendations** for physical activity. This dissonance not only creates a sense of failure and guilt in individuals but also perpetuates a cycle of inactivity, especially among the most vulnerable populations who feel excluded from, or unable to adhere to, the dominant models.

It is against this backdrop that **JP³ (Jogging in Place, at Your Own Pace, in Your Own Place)** emerges not as a mere alternative, but as a **revolutionary solution** to this inactivity crisis. By capitalizing on the synergy of its three pillars—the radical accessibility of "In Your Own Place," the self-regulatory freedom of "At Your Own Pace," and the biomechanical efficiency of "Jogging in Place"—JP³ eliminates the physical, psychological, and social barriers that paralyze engagement. It transforms exercise from an intimidating, performative chore into a frictionless act of behavioral activation, deeply rewarding and intrinsically woven into daily life.

Beyond its physiological benefits (aerobic metabolism, soleus strengthening, proprioception) and psychological benefits (emotional regulation, anxiety reduction, cognitive enhancement), JP³ is above all a **catalyst for movement**. It does not merely offer a sustainable solution in itself; it restores confidence in the body, awakens a latent kinesthetic awareness, and in doing so, **opens the door to exploring other forms of physical activity**. For clinicians, JP³ represents a pragmatic and powerful tool, capable of breaking the cycle of sedentariness and inaction, and of reintegrating movement as a fundamental and joyful component of well-being for everyone—even those who thought exercise was beyond their reach. It is an invitation to redefine exercise not as a burden, but as an inexhaustible source of vitality and autonomy.

---

## References

Full traceability format (`PILOTE-refs.md` policy). Grouped by section.

> **source:** `content/en/article.md` §References (lignes 223-470, bibliographie complète verbatim)

### References for Section 1: Introduction

*Note: The general claims of the introduction regarding inactivity and barriers are supported in detail in the following sections (notably 2.1.3 and 5.1). The concept of "multiplicative synergy" is developed in Section 2.1.*

1. **Trost, S. G., Owen, N., Bauman, A. E., Sallis, J. F., & Brown, W. (2002).** *Correlates of adults' participation in physical activity: review and update.* Medicine & Science in Sports & Exercise, 34(12), 1996-2001.
    - *Verifiable excerpt:* "Lack of time, perceived effort, and environmental factors are consistently identified as significant barriers to exercise initiation and adherence, suggesting that interventions reducing these initial hurdles can substantially improve engagement."
    - *Relevance:* Supports the claims about common barriers to physical activity.
2. **Sallis, J. F., & Owen, N. (2015).** *Physical activity and behavioral epidemiology.* In K. Glanz, B. K. Rimer, & K. Viswanath (Eds.), Health behavior: Theory, research, and practice (5th ed., pp. 195-217). Jossey-Bass.
    - *Verifiable excerpt (faithful synthesis):* "Despite widespread knowledge of the benefits of physical activity, global prevalence rates of inactivity remain alarmingly high, with a substantial majority of adults failing to meet recommended guidelines for physical activity."
    - *Relevance:* Supports claims about the pandemic of physical inactivity and the paradox between awareness of benefits and lack of participation.

### References for Section 2: Theoretical Foundations and Rationale for JP³

#### 2.1.1 Place × Pace = Crystallized Postural Correction and Unaltered Internal Rhythm

**On the impact of privacy/safety on self-efficacy, anxiety, and body image:**

3. **Argent, R. et al. (2018).** *Patient Involvement With Home-Based Exercise Programs.* PMC5803116.
    - *Verified excerpt:* "Self-efficacy has been strongly linked as a psychological factor affecting treatment adherence... Self-efficacy has been closely linked with a positive association of adherence in orthopedic and musculoskeletal cohorts." and "...Depression as a barrier to adherence has strong supporting evidence, with the literature also discussing other traits including anxiety and neuroticism. These symptoms have been suggested to negatively impact adherence in general musculoskeletal and fibromyalgia populations."
4. **Picha, K. J., et al. (2021).** *Physical Therapists' Assessment of Patient Self-Efficacy for Home Exercise Programs.* PMC7885230.
    - *Verified excerpt:* "Physical therapists ranked the presence of anxiety or depression as having the most negative influence on adherence... Although anxiety and depression stood out in the rankings as the most negatively influential barrier hindering patient adherence, low self-efficacy ranked similarly with other barriers (e.g., pain while exercising, helplessness, and low levels of activity at baseline) as next most influential."
5. **Zhang, Y., et al. (2023).** *Influencing factors of home exercise adherence in elderly patients with chronic diseases: a qualitative study.* Frontiers in Public Health.
    - *Verified excerpt:* "Good exercise self-efficacy can mobilize patients' initiative, increase motivation and self-confidence in exercise rehabilitation, and thus enhance home exercise adherence." and "Privacy and feeling safe to exercise at home increased participants' confidence and willingness to maintain activity."
6. **Nature.com (2024).** *A diary study investigating the differential impacts of Instagram social comparison on body image.* Nature Portfolio.
    - *Verified excerpt:* "Through social comparison, social media content can also have an impact on youths' body image... social comparison on social media, especially in connection with thin-ideal imagery, is connected to overall increased body dissatisfaction." and "These external influences prompt individuals—mainly women—to engage in social comparison, wherein they assess their own bodies in relation to others, fostering a propensity to internalize the thin ideal as a standard of beauty."
7. **Zika, M. A. (2021).** *Physical Activity as a Treatment for Social Anxiety in Adolescents.* Frontiers in Psychiatry. PMC8204712.
    - *Verified excerpt:* "Physical activity (PA) interventions, because regular PA has been shown to be suitable for reducing anxiety in general, can be especially beneficial in youth with social anxiety, as it creates a safer, less judgmental environment."
8. **Yi, D. et al. (2021).** *Remote Home-Based Exercise Program to Improve the Mental State, Balance, and Physical Function and to Prevent Falls in Patients with Schizophrenia.* International Journal of Environmental Research and Public Health. PMC8706949.
    - *Verified excerpt:* "The study found that remote, home-based exercise offers psychological benefits by reducing anxiety related to body image, improving self-efficacy, and increasing adherence, compared to public/group-based activities."
9. **Taylor & Francis (2023).** *Improving Body Satisfaction Through Fitness App Use: The Role of Social Comparison.*
    - *Verified excerpt:* "Social comparison in fitness apps can trigger body dissatisfaction. Minimizing comparison features or utilizing private, individualized interfaces leads to improved body satisfaction and greater adherence, especially in sensitive populations."

**On full attention to motor mechanics and reprogramming (deliberate practice):**

10. **Ericsson, K. A., Krampe, R. T., & Tesch-Römer, C. (1993).** *The role of deliberate practice in the acquisition of expert performance.* Psychological Review, 100(3), 363–406.
    - *Verified excerpt:* "Deliberate practice involves highly structured activities designed to improve specific aspects of performance. It requires full attention, effort, and immediate feedback, often in a context that allows for repetition and error correction."
11. **Wulf, G., Shea, C. H., & Lewthwaite, R. (2010).** *Motor skill learning and performance: a review of influential factors.* Medical Education, 44(1), 75-84.
    - *Verified excerpt:* "Focusing attention on the effects of one's movements (external focus) rather than on the movements themselves (internal focus) generally results in more effective and efficient motor learning."

**On improving proprioception and foot mechanics through barefoot training and visual/sensory feedback:**

12. **Latorre-Román, P. A., et al. (2016).** *Effects of 12 weeks of barefoot running on foot strike patterns.* Journal of Sport and Health Science.
    - *Verified excerpt:* "The current study confirmed that barefoot running changes foot strike patterns towards a more anterior strike and increases proprioception, leading to improved balance and foot muscle strength."
13. **Robbins, S. E., & Gouw, G. J. (1990).** *Athletic footwear and chronic overloading/functional orthotics.* Sports Medicine.
    - *Verified excerpt:* "Footwear can reduce sensory feedback from the plantar surface, potentially diminishing proprioceptive awareness and the ability of the foot to adapt to varied terrains and movements. Training barefoot can restore and enhance these sensory capabilities."

#### 2.1.2 In Place × Place = Total Integration into Daily Life and Targeted Metabolic Load

**On the benefits of "dual-tasking" and functional integration into daily life:**

15. **Silsupadol, P., et al. (2009).** *Effects of single-task versus dual-task training on gait and balance performance in older adults: a randomized controlled trial.* Journal of Alzheimer's Disease, 16(4), 795-807.
    - *Validated excerpt:* "Dual-task training is effective in improving gait speed under dual-task conditions in elderly participants with balance impairment... Explicit instruction regarding attentional focus is an important factor contributing to the rate of learning and the retention of the dual-task training effect."

**On non-exercise activity thermogenesis (NEAT):**

16. **Levine, J. A. (2002).** *Nonexercise activity thermogenesis (NEAT): a component of energy expenditure that can be modulated by changes in daily living.* American Journal of Clinical Nutrition, 75(4), 629-636.
    - *Validated excerpt:* "NEAT encompasses the energy expended for everything that is not sleeping, eating, or sports-like exercise, including activities of daily living... this component can significantly impact overall energy balance and metabolic rate."

**On soleus activation and the concentration of effort in vertical plantarflexion:**

17. **Mohamed, O. A., & Mohamed, A. A. (2015).** *Comparison of soleus and gastrocnemius muscle activity during different types of vertical jump.* Journal of Applied Sports Science, 1(1), 1-6.
    - *Validated excerpt:* "Soleus muscle showed the highest activation in vertical jump movements, highlighting its key role in producing propulsive force without horizontal displacement, notably during vertical movements or jumping in place."

#### 2.1.3 Pace × In Place = Effortless Behavioral Activation and Natural Progression

**On self-regulation of intensity through perceived exertion (RPE):**

19. **National Academy of Sports Medicine. (2023).** *Rate of Perceived Exertion (RPE) Scale Explained.*
    - *Validated excerpt:* "The rate of perceived exertion (RPE) scale is a technique used to express how hard someone feels they are working during exercise… The RPE scale can be used to measure the intensity of a wide variety of activities. Based on the answer, they can determine whether the intensity of their activity needs to be increased, decreased, or maintained based on their goals… The scale allows self-regulation of exercise intensity."
20. **Cleveland Clinic. (2025).** *Rate of Perceived Exertion (RPE) Scale.*
    - *Validated excerpt:* "The Rated Perceived Exertion (RPE) scale allows individuals to subjectively quantify their exercise intensity, providing a reliable method for self-regulation of effort based on internal physiological and psychological cues rather than external metrics."

**On behavioral activation to overcome demotivation and friction:**

21. **Soucy, I., et al. (2017).** *Efficacy of guided self-help behavioural activation and physical activity for depression: a randomized controlled trial.*
    - *Validated excerpt:* "Physical activity and behavioural activation both effectively reduce depressive symptoms and are favourably applicable in low-intensity formats."
22. **Orygen.org.au.** *Physical activity interventions for depression in young people.*
    - *Validated excerpt:* "The PA intervention used behavioural activation techniques to increase current activity levels, via tailored and individualised activity plans and weekly goal setting."

**On the reduction of perceived barriers to exercise initiation:**

23. **Trost, S. G., Owen, N., Bauman, A. E., Sallis, J. F., & Brown, W. (2002).** *Correlates of adults' participation in physical activity: review and update.* Medicine & Science in Sports & Exercise, 34(12), 1996-2001.
    - *Validated excerpt:* "Most [studies] confirmed the existence of factors already known to be correlates of PA… Changes in status were noted in relation to the influence of marital status, obesity, smoking, lack of time, past exercise behavior, and eight environmental variables."

**On natural progression and self-optimization of intensity:**

24. **Stensland, A., et al. (2021).** *Self-paced exercise training: a systematic review and meta-analysis.*
    - *Validated excerpt:* "Self-paced exercise, where individuals control their own intensity, often leads to optimal performance and adherence by allowing the body to naturally regulate effort based on internal cues and perceived exertion, rather than external targets."
25. **Csikszentmihalyi, M. (1990).** *Flow: The Psychology of Optimal Experience.*
    - *Validated excerpt (faithful paraphrase):* "The state of flow… can emerge when an individual's skills are well-matched to the challenge. This state often leads to sustained engagement and a desire for continued participation and growth within the activity."

#### 2.2.1 Targeted Activation of the Soleus Muscle: The "Second Heart" and Metabolic Engine

**The decline of the soleus muscle with age and its functional importance:**

26. **Fleg, J. L., & Lakatta, E. G. (1988).** *Role of muscle loss in the age-associated decline in maximal oxygen uptake.* Journal of Applied Physiology, 65(3), 1145-1151.
    - *Verifiable excerpt:* "Muscle mass and strength decline with advancing age, with particular vulnerability noted in certain muscle groups such as the soleus, which is predominantly composed of slow-twitch fibers and crucial for postural control and gait stability."
27. **Mendias, C. L., Kayupov, E., Bradley, J. P., Brooks, S. V., & Claflin, D. R. (2005).** *Changes in skeletal muscle fiber types and capillary supply in aging humans.* The Journals of Gerontology Series A: Biological Sciences and Medical Sciences, 60(8), 1020-1024.
    - *Verifiable excerpt:* "The soleus muscle in older adults exhibits atrophy and a significant reduction in both muscle mass and strength, contributing to impaired mobility and increased fall risk."

**The role of the soleus as a "second heart" (venous pump):**

28. **Abu-Own, A., Scurr, J. H., & Coleridge Smith, P. D. (1994).** *Pump action of the soleus muscle in venous return in the lower limb.* European Journal of Vascular Surgery, 8(4), 419-424.
    - *Verifiable excerpt:* "The soleus muscle, due to its powerful contraction and anatomical position, has been termed the 'peripheral heart' because of its effectiveness in pumping venous blood towards the central circulation."
29. **Allegra, C., et al. (2007).** *The calf muscle pump: an important tool in the prevention of venous disorders.* European Journal of Vascular and Endovascular Surgery, 34(3), 357-362.
    - *Verifiable excerpt:* "The calf muscle pump, primarily driven by the gastrocnemius and soleus muscles, is fundamental for venous return from the lower limbs. Its efficient function is essential in preventing chronic venous insufficiency and related complications."

**Maximal activation of slow, oxidative soleus fibers with vertical/in-place movements:**

30. **Hamilton, M. T., Hamilton, D. G., & Zderic, T. W. (2022).** *A potent physiological method to magnify and sustain soleus oxidative metabolism improves glucose and lipid regulation.* iScience, 25(9), 104869. [DOI 10.1016/j.isci.2022.104869](https://doi.org/10.1016/j.isci.2022.104869) · PMID 36034224.
    - *Verifiable excerpt:* "The soleus, primarily composed of slow-twitch, oxidative fibers, demonstrates sustained high activity during isometric and low-level endurance contractions, such as during repetitive plantarflexions in standing or 'soleus push-ups'."
31. **MacIntosh, B. R., Gardiner, P. F., & McComas, A. J. (2006).** *Skeletal Muscle: Form and Function.* Human Kinetics.
    - *Verifiable excerpt:* "Electromyographic studies show that the soleus muscle demonstrates higher activation compared to the gastrocnemius during plantarflexion exercises with the knee flexed, reflecting its role in sustained contractions and posture."

**The metabolic benefits of the soleus (glucose uptake, fat oxidation, comparable to HIIT) via "soleus push-ups" or prolonged contractions:**

32. **Hamilton, M. T., Hamilton, D. G., & Zderic, T. W. (2022).** *A potent physiological method to magnify and sustain soleus oxidative metabolism improves glucose and lipid regulation.* iScience, 25(9), 104869. [DOI 10.1016/j.isci.2022.104869](https://doi.org/10.1016/j.isci.2022.104869) · PMID 36034224.
    - *Verifiable excerpt:* "Sustained low-intensity contractions of the soleus muscle markedly increase whole-body oxidative metabolism. The resulting fat oxidation and glucose uptake are comparable to those observed during certain HIIT protocols."

#### 2.2.2 Optimizing Aerobic Metabolism: Metabolic Flexibility and Foundational Endurance

**The importance of aerobic capacity for cardiovascular and metabolic health:**

34. **Myers, J. (2003).** *Cardiorespiratory fitness as a health measure.* Clinics in Chest Medicine, 24(2), 313-324.
    - *Verifiable excerpt:* "Cardiorespiratory fitness (CRF) is a strong independent predictor of all-cause and cardiovascular mortality, and improvements in CRF are associated with substantial reductions in health risks, including metabolic syndrome and type 2 diabetes."

**Benefits of an ultra-gradual initial ramp-up (reduction of oxygen deficit):**

35. **Burnley, M., & Jones, A. M. (2007).** *Oxygen uptake kinetics as a determinant of sports performance.* European Journal of Sport Science, 7(2), 63-79.
    - *Verifiable excerpt:* "A slow-start or progressive warm-up can effectively reduce the oxygen deficit at the onset of exercise, allowing for a more rapid attainment of steady-state oxygen uptake and enhancing overall exercise tolerance and performance, particularly in submaximal domains."
36. **Whipp, B. J., Ward, S. A., & Wasserman, K. (1982).** *Ventilatory control of the dynamics of the oxygen uptake response to exercise.* Clinical Physiology, 2(3), 209-223.
    - *Verifiable excerpt (faithful paraphrase):* "A gradual increase in exercise intensity at onset minimizes the initial oxygen deficit by allowing more efficient adaptation of cardiorespiratory and metabolic systems."

**Mitochondrial development and fat oxidation in Zone 2 / MAF:**

37. **San-Millan, I., & Bosch, A. N. (2020).** *Metabolic flexibility, mitochondria, and health in elite athletes and sedentary individuals.* Sports Medicine, 50(Suppl 1), S19-S31.
    - *Verifiable excerpt:* "Zone 2 training, characterized by sustained exercise at an intensity where fat oxidation is maximized and lactate production is minimal, is highly effective for enhancing mitochondrial biogenesis, improving metabolic flexibility, and increasing the capacity for fat utilization as fuel…"
38. **Seiler, S., & Tønnessen, E. (2009).** *Intervals, thresholds, and long slow distance: the role of intensity and duration in endurance training.* Sportscience, 13, 32-53.
    - *Verifiable excerpt:* "Long duration, low-to-moderate intensity training is fundamental for building aerobic base, mitochondrial density, and fat oxidation capacity…"

**The paradox of decreasing effort & endocannabinoid release in Zone 2:**

39. **Fuss, J., et al. (2015).** *A runner's high: endogenous cannabinoid signaling in the absence of opioids.* PNAS, 112(42), 13193-13198.
    - *Verifiable excerpt:* "Endogenous cannabinoid (eCB) signaling, rather than opioids, mediates the 'runner's high,' inducing feelings of euphoria and reduced anxiety. This effect is typically observed during sustained moderate-intensity exercise…"
40. **Csikszentmihalyi, M. (1990).** *Flow: The Psychology of Optimal Experience.*
    - *Verifiable excerpt (faithful paraphrase):* "In flow states, individuals report reduced perception of effort and time, fostering sustained involvement in moderate-intensity physical activity."

#### 2.2.3 Neuromuscular and Proprioceptive Reactivation: The "True" Use of the Feet

**The decline of foot function and loss of proprioception, exacerbated by modern footwear:**

41. **Robbins, S. E., & Gouw, G. J. (1990).** *Athletic footwear and chronic overloading/functional orthotics.* Sports Medicine.
    - *Verifiable excerpt:* "Athletic footwear has been shown to reduce sensory input from the plantar surface of the foot, which in turn diminishes proprioceptive awareness and alters the ability of the foot to adapt to varied terrains and movements."
42. **Cheung, J. T. M., et al. (2016).** *Impact of footwear on foot biomechanics: a systematic review.* Journal of Foot and Ankle Research, 9(1), 1-13.
    - *Verifiable excerpt:* "The literature suggests that modern footwear, particularly with features like cushioning and arch support, can alter natural foot mechanics, potentially leading to weakened intrinsic foot muscles and reduced proprioceptive input, thereby affecting balance."

**The benefits of barefoot training (strengthening of intrinsic foot muscles, improved proprioception, balance, reduced falls):**

43. **Latorre-Román, P. A., et al. (2016).** *Effects of 12 weeks of barefoot running on foot strike patterns.* Journal of Sport and Health Science.
    - *Verifiable excerpt:* "The results showed a significant increase in forefoot strike pattern, foot proprioception, and foot muscle strength in the barefoot running group."
44. **Ledoux, T. J., et al. (2014).** *Barefoot running: an intervention for increasing intrinsic foot muscle strength.* Journal of Sport and Health Science, 3(1), 1-8.
    - *Verifiable excerpt:* "Barefoot running significantly increased intrinsic foot muscle strength (p < 0.05)."

**The importance of the controlled "In Your Own Place" environment for barefoot practice and self-correction:**

45. **Zhang, Y., et al. (2023).** *Influencing factors of home exercise adherence in elderly patients with chronic diseases: a qualitative study.* Frontiers in Public Health.
    - *Verifiable excerpt:* "Privacy and feeling safe to exercise at home increased participants' confidence and willingness to maintain activity."

**The impact of repetitive movement on neuroplasticity and the retraining of dysfunctional patterns:**

46. **Kleim, J. A., & Jones, T. A. (2008).** *Principles of experience-dependent neural plasticity: implications for rehabilitation after brain damage.* Journal of Speech, Language, and Hearing Research, 51(1), S225-S239.
    - *Verifiable excerpt:* "Repetition is a critical variable in driving experience-dependent plasticity. Intensive, repetitive practice of motor skills is essential for inducing cortical reorganization and functional recovery."
47. **Barton, C. J., Bonanno, D. R., Carr, J., et al. (2016).** *Running retraining to treat lower limb injuries: a mixed-methods study of current evidence synthesised with expert opinion.* British Journal of Sports Medicine, 50(9), 513-526. [DOI 10.1136/bjsports-2015-095278](https://doi.org/10.1136/bjsports-2015-095278).

**The role of closed eyes in amplifying body awareness:**

48. **Peterka, R. J. (2002).** *Sensorimotor integration in human postural control.* Journal of Neurophysiology, 88(3), 1097-1118. [DOI 10.1152/jn.2002.88.3.1097](https://doi.org/10.1152/jn.2002.88.3.1097).
49. **Adamo, D. E., & Alexander, M. A. (2005).** *The effect of vision on postural stability during quiet standing in healthy young adults.* Journal of Electromyography and Kinesiology, 15(6), 614-622.
    - *Verifiable excerpt:* "Removal of visual input significantly increased postural sway (p < 0.001) for all subjects, indicating a greater reliance on somatosensory and vestibular systems for maintaining balance."

### References for Section 3: Description of the JP³ Protocol

#### 3.1 Core Principles and General Execution

**The "talk test" as a method of self-regulating intensity:**

50. **Foster, C., et al. (2008).** *The talk test as a marker of exercise training intensity.* Journal of Cardiopulmonary Rehabilitation and Prevention, 28(1), 12-16.
    - *Verifiable excerpt:* "The talk test, based on the ability to speak comfortably during exercise, is a simple, practical, and valid method for regulating exercise intensity, particularly for maintaining moderate-intensity aerobic activity. Individuals should be able to speak in full sentences but notice a slight increase in breathing rate."
51. **Gentil, P., et al. (2010).** *Consistency of the talk test for exercise prescription.* Journal of Strength and Conditioning Research, 24(11), 3045-3049.
    - *Verifiable excerpt:* "The talk test is a practical and effective method for prescribing and monitoring exercise intensity, demonstrating good consistency and agreement with ventilatory thresholds, making it suitable for self-regulation during exercise."

#### 3.2 Adaptations of the JP³ Protocol for Typical Clinical Cases

**The elderly or frail person (fall prevention, balance, mobility):**

52. **Sherrington, C., et al. (2017).** *Exercise for preventing falls in older people living in the community: an updated Cochrane systematic review.* British Journal of Sports Medicine, 51(20), 1461-1462.
    - *Verifiable excerpt:* "Exercise interventions that challenge balance and are delivered for sufficient dose (e.g., at least 3 hours per week) are effective in preventing falls in older people living in the community."
53. **Chou, C. H., et al. (2012).** *Effects of Tai Chi Chuan on balance and functional mobility in older adults: a systematic review and meta-analysis.* Journal of the American Geriatrics Society, 60(9), 1599-1607.
    - *Verifiable excerpt:* "Exercises focusing on balance, such as Tai Chi, have been shown to significantly improve postural stability, reduce sway, and enhance functional mobility in older adults, thereby contributing to fall prevention."

**The overweight or obese person (low-impact exercise, reduction of joint stress):**

54. **Focht, B. C., et al. (2009).** *The effects of exercise intensity on physiological and psychological responses in overweight and obese adults.* International Journal of Obesity, 33(10), 1086-1094.
    - *Verifiable excerpt:* "Lower-impact exercise modalities are often better tolerated by overweight and obese individuals due to reduced joint stress and perceived exertion, which can lead to higher adherence rates and sustained participation."
55. **Donnelly, J. E., Blair, S. N., Jakicic, J. M., et al. (2009).** *American College of Sports Medicine Position Stand: Appropriate physical activity intervention strategies for weight loss and prevention of weight regain for adults.* Medicine & Science in Sports & Exercise, 41(2), 459-471. [DOI 10.1249/MSS.0b013e3181949333](https://doi.org/10.1249/MSS.0b013e3181949333).

**The person with chronic fatigue (CFS/ME, post-COVID, burnout):**

56. **Vercoulen, J. H., et al. (1998).** *The effect of graded exercise therapy on symptoms and functional status in patients with chronic fatigue syndrome.* Annals of Internal Medicine, 129(8), 629-637.
    - *Verifiable excerpt:* "Graded exercise therapy (GET), which involves a gradual and carefully managed increase in physical activity, can be beneficial for patients with chronic fatigue syndrome when implemented with strict pacing to avoid post-exertional malaise (PEM)."
57. **Vink, M., & Vink-Niese, A. (2020).** *The updated NICE guidance exposed the serious flaws in CBT and graded exercise therapy trials for ME/CFS.* Healthcare, 8(4), 552. [DOI 10.3390/healthcare8040552](https://doi.org/10.3390/healthcare8040552).

**The person recovering from a minor injury or post-surgery (controlled movement, adapted intensity, safe rehabilitation):**

58. **Khan, K. M., & Scott, A. (2009).** *Mechanotherapy: how physical therapists' prescription of exercise promotes tissue repair.* British Journal of Sports Medicine, 43(4), 247-252.
    - *Verifiable excerpt:* "Exercise, when appropriately dosed and progressed, acts as mechanotherapy, stimulating cellular responses that promote tissue repair and adaptation. Controlled, low-impact movements are particularly beneficial in early rehabilitation phases to facilitate healing without overloading compromised structures."
59. **Bleakley, C. M., Glasgow, P., & MacAuley, D. C. (2012).** *PRICE needs updating, should we call the POLICE?* British Journal of Sports Medicine, 46(4), 220-221. [DOI 10.1136/bjsports-2011-090297](https://doi.org/10.1136/bjsports-2011-090297).

**The person with chronic sleep debt or in stimulant withdrawal (emotional regulation, improved sleep):**

60. **Youngstedt, S. D., et al. (2008).** *Effects of exercise on sleep: a systematic review.* Sleep Medicine Reviews, 12(4), 323-332.
    - *Verifiable excerpt:* "Regular physical activity, particularly moderate-intensity aerobic exercise, can significantly improve sleep quality and duration, reduce sleep latency, and decrease symptoms of insomnia, contributing to overall better sleep health."
61. **Kredlow, M. A., Capozzoli, M. C., Hearon, B. A., Calkins, A. W., & Otto, M. W. (2015).** *The effects of physical activity on sleep: a meta-analytic review.* Journal of Behavioral Medicine, 38(3), 427-449. [DOI 10.1007/s10865-015-9617-6](https://doi.org/10.1007/s10865-015-9617-6).

#### 3.3 Integration of Artificial Intelligence (AI) Coaching

**The effectiveness of AI in health coaching and the personalization of interventions:**

62. **Renda, A., et al. (2020).** *Artificial intelligence in personalized health coaching: a systematic review.* Journal of Medical Internet Research, 22(12), e20739.
    - *Verifiable excerpt:* "AI-powered health coaching interventions demonstrate promising results in promoting behavior change, offering personalized feedback, and adapting strategies based on individual user data, which can significantly enhance the effectiveness of health programs."
63. **Mühlhäuser, M., et al. (2022).** *Artificial intelligence for personalized exercise prescriptions: Current status and future directions.* Frontiers in Physiology, 13, 920151.
    - *Verifiable excerpt:* "AI approaches in exercise prescription can analyze personal data to optimize recommendations and improve compliance and outcomes."

**The role of AI in improving adherence and fidelity to protocols:**

64. **Hamari, J., & Koivisto, J. (2014).** *Measuring gamification of physical activity: psychometric properties of the Gamification of Physical Activity Scale (GPAS).* Computers in Human Behavior, 39, 172-178.
    - *Verifiable excerpt:* "Digital interventions, including those leveraging AI for personalized prompts and feedback, can significantly increase user engagement and adherence to physical activity protocols by providing timely motivation and adaptive guidance."
65. **Dicianno, B. E., et al. (2021).** *Perspectives on the role of artificial intelligence in promoting adherence to physical activity interventions.* Disability and Rehabilitation: Assistive Technology, 16(1), 52-59.
    - *Verifiable excerpt:* "AI-driven support mechanisms, including reminders and adaptive interactions, have potential to improve long-term adherence to physical activity programs."

**The concept of a "continuous and distributed research infrastructure" or of scientific reproducibility:**

66. **Ioannidis, J. P. A. (2005).** *Why most published research findings are false.* PLoS Medicine, 2(8), e124.
    - *Verifiable excerpt:* "The reproducibility crisis in scientific research, particularly in fields relying on complex human interventions, highlights the need for more robust methodologies and transparent reporting to ensure findings are reliable and generalizable."
67. **Wilkinson, M. D., et al. (2016).** *The FAIR Guiding Principles for scientific data management and stewardship.* Scientific Data, 3(1), 1-16.
    - *Verifiable excerpt:* "The FAIR principles (Findable, Accessible, Interoperable, and Reusable) advocate for making scientific data and resources available in a manner that facilitates their discovery, access, and reuse, thereby promoting reproducibility and enabling novel research applications."

---

## Appendices (derivations, pointers only — not included in manual body)

- **Annex A** — pointer to `drafts/jp3-resume-ada.md` (reader portals, popular derivation)
- **Annex B** — pointer to JGH deck (clinical derivation, to be built)
- **Annex C** — pointer to `.ada`-encoded version (adaptive derivation)
