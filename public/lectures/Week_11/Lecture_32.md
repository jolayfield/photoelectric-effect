# Lecture 32 — Spin-Orbit Coupling & Fine Structure

**Reading:** Engel 4th ed., Chapter 11 (Sections 11.4–11.5)

## Learning Objectives

- Explain the physical origin of spin-orbit coupling
- Calculate spin-orbit energy corrections for hydrogen-like atoms
- Interpret fine structure in atomic spectra
- Distinguish between LS (Russell-Saunders) and jj coupling
- Apply selection rules that include $J$

---

## 1. Spin-Orbit Interaction

### Physical Origin

An electron orbiting a nucleus "sees" the nucleus as a moving charge — creating a magnetic field in the electron's rest frame. This field interacts with the electron's magnetic spin moment.

$$\hat{H}_{SO} = \xi(r)\,\hat{L}\cdot\hat{S}$$

where $\xi(r)$ is the **spin-orbit coupling constant**, which increases rapidly with $Z$:

$$\xi \propto Z^4$$

This is why spin-orbit effects are small for light atoms (C, N, O) but large for heavy atoms (Pb, Bi, actinides).

> [!NOTE]
> **Concept Check 32.1**
> Spin-orbit coupling strength $\xi$ is proportional to $Z^4$. Qualitatively, why would a larger nuclear charge $Z$ lead to a stronger interaction between the electron's spin and its orbital motion?

### Energy Correction

Using $\hat{J} = \hat{L} + \hat{S}$:

$$\hat{L}\cdot\hat{S} = \frac{1}{2}(\hat{J}^2 - \hat{L}^2 - \hat{S}^2)$$

$$\langle\hat{L}\cdot\hat{S}\rangle = \frac{\hbar^2}{2}[J(J+1) - L(L+1) - S(S+1)]$$

The spin-orbit energy correction:

$$\boxed{E_{SO} = \frac{A}{2}[J(J+1) - L(L+1) - S(S+1)]}$$

where $A$ is the spin-orbit coupling parameter for the specific term.

---

## 2. Fine Structure

Spin-orbit coupling splits each $^{2S+1}L$ term into $J$ levels. This splitting produces **fine structure** in atomic spectra.

### Example: Carbon $^3P$ Term

$L = 1$, $S = 1$ → $J = 0, 1, 2$

$$E(^3P_J) = E_0 + \frac{A}{2}[J(J+1) - 1(2) - 1(2)]$$

| $J$ | $J(J+1)$ | $E - E_0$ |
|-----|---------|-----------|
| 0 | 0 | $-2A$ |
| 1 | 2 | $-A$ |
| 2 | 6 | $A$ |

For carbon ($2p^2$, less than half-filled): $A > 0$, so $J = 0$ is lowest → ground state $^3P_0$. ✓

### Landé Interval Rule

The energy spacing between adjacent $J$ levels is proportional to the larger $J$:

$$E(J) - E(J-1) = AJ$$

This can be used to determine $A$ experimentally.

> [!NOTE]
> **Concept Check 32.2**
> The Landé interval rule states that $E(J) - E(J-1) = AJ$. If $A$ is positive, which value of $J$ will correspond to the lowest energy state for a given term?

### Example: Sodium D-line Doublet

The sodium "D line" at 589 nm is actually a **doublet**:
- D₁: $^2P_{1/2} \to ^2S_{1/2}$ at 589.59 nm
- D₂: $^2P_{3/2} \to ^2S_{1/2}$ at 589.00 nm

The splitting ($0.59$ nm, $17$ cm⁻¹) arises from spin-orbit coupling in the $^2P$ state.

---

## 3. LS vs. jj Coupling

### LS Coupling (Russell-Saunders)

Valid for light atoms ($Z \lesssim 30$):

$$\hat{L} = \sum \hat{l}_i, \quad \hat{S} = \sum \hat{s}_i, \quad \hat{J} = \hat{L} + \hat{S}$$

Good quantum numbers: $L$, $S$, $J$, $M_J$

### jj Coupling

For heavy atoms ($Z \gtrsim 70$), spin-orbit coupling for individual electrons is stronger than electron-electron repulsion:

$$\hat{j}_i = \hat{l}_i + \hat{s}_i, \quad \hat{J} = \sum \hat{j}_i$$

Good quantum numbers: $j_1$, $j_2$, $J$, $M_J$ (but not $L$ or $S$ individually)

### Intermediate Coupling

Most atoms fall in between — neither scheme is perfect, and configuration interaction mixes terms. Numerical computation is required.

---

## 4. Zeeman Effect (Brief)

In an external magnetic field $B$, each $J$ level splits into $2J + 1$ levels ($M_J = -J, \ldots, +J$):

$$E_{M_J} = g_J \mu_B B\, M_J$$

where $g_J$ is the **Landé $g$-factor**:

$$g_J = 1 + \frac{J(J+1) + S(S+1) - L(L+1)}{2J(J+1)}$$

and $\mu_B = e\hbar/(2m_e) = 9.274 \times 10^{-24}$ J/T is the Bohr magneton.

---

## Key Equations Summary

| Equation | Expression |
|----------|-----------|
| Spin-orbit energy | $E_{SO} = \frac{A}{2}[J(J+1)-L(L+1)-S(S+1)]$ |
| Landé interval rule | $E(J)-E(J-1) = AJ$ |
| Landé $g$-factor | $g_J = 1 + \frac{J(J+1)+S(S+1)-L(L+1)}{2J(J+1)}$ |
| Zeeman splitting | $E_{M_J} = g_J\mu_B B\,M_J$ |
| SO coupling strength | $\xi \propto Z^4$ |

## Recent Literature Spotlight

**"Skyrmion Hall Effect in Altermagnets"**
*Z. Jin, Z. Zeng, Y. Cao, P. Yan*, Physical Review Letters, **2024**, 133, 196701. [DOI](https://doi.org/10.1103/PhysRevLett.133.196701)

Altermagnets — a recently discovered class of collinear magnets with spin-split bands but zero net magnetization — exhibit novel spin-orbit-driven phenomena. This paper shows that the skyrmion Hall effect in altermagnets arises from a hidden gauge field tied to the spin-orbit interaction. The spin-orbit coupling that drives this physics is the same $\hat{H}_{SO} = \xi \hat{\mathbf{L}}\cdot\hat{\mathbf{S}}$ operator treated in this lecture.

---

## Practice Problems

1. **Fine structure.** The $^3P$ term of silicon ($3p^2$) has levels at: $^3P_0$ = 0 cm⁻¹, $^3P_1$ = 77.1 cm⁻¹, $^3P_2$ = 223.2 cm⁻¹. (a) Verify the Landé interval rule. (b) Determine $A$.

2. **Sodium D-line.** Calculate the Landé $g$-factors for the $^2S_{1/2}$, $^2P_{1/2}$, and $^2P_{3/2}$ states of sodium.

3. **Heavy atom.** Explain qualitatively why spin-orbit coupling in lead ($Z = 82$) is much larger than in carbon ($Z = 6$), and why LS coupling is a poor description for Pb.

---

*Next lecture: Atomic Spectroscopy & Selection Rules*
