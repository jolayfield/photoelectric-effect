# Lecture 31 — Term Symbols & Hund's Rules

**Reading:** Engel 4th ed., Chapter 11 (Sections 11.1–11.3)

## Learning Objectives

- Determine the total orbital angular momentum $L$, total spin $S$, and total angular momentum $J$ for a multi-electron configuration
- Construct term symbols $^{2S+1}L_J$
- Apply Hund's rules to identify the ground-state term
- Enumerate all possible terms for common electron configurations

---

## 1. Angular Momentum Coupling

For a multi-electron atom, individual angular momenta couple to give totals. Under **Russell-Saunders (LS) coupling** (valid for light atoms):

$$\hat{L} = \sum_i \hat{l}_i, \quad \hat{S} = \sum_i \hat{s}_i, \quad \hat{J} = \hat{L} + \hat{S}$$

### Total Orbital Angular Momentum

$$L = |l_1 - l_2|, |l_1 - l_2| + 1, \ldots, l_1 + l_2$$

$$|L| = \hbar\sqrt{L(L+1)}, \quad M_L = -L, \ldots, +L$$

### Total Spin

$$S = |s_1 - s_2|, \ldots, s_1 + s_2$$

For two electrons: $S = 0$ (singlet) or $S = 1$ (triplet).

### Total Angular Momentum

$$J = |L - S|, |L - S| + 1, \ldots, L + S$$

---

## 2. Term Symbols

$$\boxed{^{2S+1}L_J}$$

| Component | Meaning |
|-----------|---------|
| $2S+1$ | Spin multiplicity (number of $M_S$ values) |
| $L$ | Total orbital angular momentum (letter: $S=0$, $P=1$, $D=2$, $F=3$, …) |
| $J$ | Total angular momentum quantum number |

### Examples

| Term | $S$ | $L$ | $J$ | Multiplicity |
|------|-----|-----|-----|-------------|
| $^1S_0$ | 0 | 0 | 0 | Singlet |
| $^3P_2$ | 1 | 1 | 2 | Triplet |
| $^2D_{3/2}$ | 1/2 | 2 | 3/2 | Doublet |
| $^4F_{3/2}$ | 3/2 | 3 | 3/2 | Quartet |

> [!NOTE]
> **Concept Check 31.1**
> In the term symbol $^{2S+1}L_J$, what does the superscript $2S+1$ represent? If $S = 1$, how many possible values can the magnetic spin quantum number $M_S$ take?

---

## 3. Finding Terms for a Configuration

### Method: Microstate Counting

For carbon ($2p^2$):

1. List all possible ($m_l$, $m_s$) assignments for 2 electrons in the $p$ subshell
2. Obey Pauli exclusion (no two electrons with same $m_l$ and $m_s$)
3. Tabulate $M_L = \sum m_l$ and $M_S = \sum m_s$ for each microstate
4. Extract terms from the $M_L$, $M_S$ table

### Carbon $2p^2$ Terms

Total microstates: $\binom{6}{2} = 15$

The 15 microstates decompose into:

$$^1S_0, \quad ^1D_2, \quad ^3P_{0,1,2}$$

Count check: $1 + 5 + (1 + 3 + 5) = 15$ ✓

---

## 4. Hund's Rules

For the **ground state** of a given configuration:

### Rule 1 — Maximize $S$

The term with the **largest spin multiplicity** ($2S+1$) is lowest in energy.

*Physical basis:* Parallel spins → antisymmetric spatial wavefunction → electrons avoid each other → lower repulsion (exchange stabilization).

### Rule 2 — Maximize $L$ (for same $S$)

Among terms with the same $S$, the one with **largest $L$** is lowest.

*Physical basis:* Higher $L$ means electrons orbit in the same direction → more effectively avoid each other.

### Rule 3 — $J$ value (for same $S$ and $L$)

- Subshell **less than half full**: lowest $J$ is ground state ($J = |L - S|$)
- Subshell **more than half full**: highest $J$ is ground state ($J = L + S$)
- Subshell **exactly half full**: $L = 0$, so $J = S$ (only one possibility)

### Carbon Ground State

$^3P$: $S = 1$, $L = 1$ → $J = 0, 1, 2$

$2p^2$ is less than half full → ground state is $^3P_0$.

> [!NOTE]
> **Concept Check 31.2**
> Describe the physical reason behind Hund's first rule (maximizing $S$). How does a higher total spin affect the spatial distribution of electrons and their mutual repulsion?

---

## 5. Ground-State Terms Across the Periodic Table

| Atom | Config | Ground Term | Rule applied |
|------|--------|-------------|-------------|
| H | $1s^1$ | $^2S_{1/2}$ | One electron |
| He | $1s^2$ | $^1S_0$ | Filled shell |
| C | $2p^2$ | $^3P_0$ | Rules 1–3 |
| N | $2p^3$ | $^4S_{3/2}$ | Half-filled: max $S$ |
| O | $2p^4$ | $^3P_2$ | More than half: max $J$ |
| F | $2p^5$ | $^2P_{3/2}$ | One hole |
| Fe | $3d^6$ | $^5D_4$ | Rules 1–3 |

---

## Key Equations Summary

| Equation | Expression |
|----------|-----------|
| Term symbol | $^{2S+1}L_J$ |
| Total $L$ range | $\|l_1-l_2\| \leq L \leq l_1+l_2$ |
| Total $S$ range | $\|s_1-s_2\| \leq S \leq s_1+s_2$ |
| Total $J$ range | $\|L-S\| \leq J \leq L+S$ |
| Hund's rules | Max $S$ → Max $L$ → Min/Max $J$ |
| Microstates | $\binom{2(2l+1)}{N_e}$ |

## Recent Literature Spotlight

**"First-Row Transition Metal L-Edge X-ray Absorption Spectroscopy: Theory and Applications"**
*R. K. Hocking, E. I. Solomon*, Chemical Reviews, **2021**, 121, 5746–5813. [DOI](https://doi.org/10.1021/acs.chemrev.0c00396)

This comprehensive review covers L-edge X-ray absorption spectroscopy (XAS) of first-row transition metals and its interpretation using ligand field multiplet theory. L-edge spectra probe 2p → 3d transitions, making them sensitive to the d-orbital splitting, electronic configuration, and oxidation state of metal centres — the same crystal field parameters ($10Dq$, Racah $B$ and $C$) taught in this lecture.

---

## Practice Problems

1. **Term symbols.** Find all possible term symbols for the $3d^2$ configuration (e.g., Ti). Identify the ground-state term.

2. **Equivalent electrons.** Show that a filled subshell always gives $^1S_0$. (Hint: what are $M_L$ and $M_S$ for a full subshell?)

3. **Ground-state terms.** Determine the ground-state term symbol for (a) V ($[Ar]\,3d^3\,4s^2$), (b) Co ($[Ar]\,3d^7\,4s^2$), (c) Cl ($[Ne]\,3s^2\,3p^5$).

---

*Next lecture: Spin-Orbit Coupling & Fine Structure*
