# Lecture 30 — Electron Spin, Pauli Exclusion & the Aufbau Principle

**Reading:** Engel 4th ed., Chapter 10 (Sections 10.6–10.8)

## Learning Objectives

- Describe electron spin and the quantum numbers $s$ and $m_s$
- State the Pauli exclusion principle in terms of the antisymmetry requirement
- Apply the aufbau principle, Hund's rules, and the Pauli principle to predict electron configurations
- Explain shielding, penetration, and the $(n + l)$ rule for orbital filling
- Determine the ground-state configuration of any atom in the periodic table

---

## 1. Electron Spin

### Discovery

The Stern-Gerlach experiment (1922) showed that silver atoms are deflected into exactly **two** beams by an inhomogeneous magnetic field — implying a two-valued angular momentum.

### Spin Quantum Numbers

Electron spin is an **intrinsic** angular momentum with no classical analog:

| Quantity | Symbol | Value |
|---------|--------|-------|
| Spin quantum number | $s$ | $1/2$ (always, for electrons) |
| Spin magnetic quantum number | $m_s$ | $+1/2$ (↑ or $\alpha$) or $-1/2$ (↓ or $\beta$) |
| Spin angular momentum | $\|S\|$ | $\hbar\sqrt{s(s+1)} = \frac{\sqrt{3}}{2}\hbar$ |
| $z$-component | $S_z$ | $m_s\hbar = \pm\frac{\hbar}{2}$ |

### Spin Operators

$$\hat{S}^2|\alpha\rangle = \frac{3}{4}\hbar^2|\alpha\rangle, \quad \hat{S}_z|\alpha\rangle = +\frac{\hbar}{2}|\alpha\rangle$$

$$\hat{S}^2|\beta\rangle = \frac{3}{4}\hbar^2|\beta\rangle, \quad \hat{S}_z|\beta\rangle = -\frac{\hbar}{2}|\beta\rangle$$

### Spin-Orbitals

A complete single-electron state (spin-orbital):

$$\chi(\mathbf{x}) = \phi_{nlm_l}(\mathbf{r}) \cdot \sigma(s)$$

where $\sigma = \alpha$ or $\beta$. Each spatial orbital holds at most **two electrons** (with opposite spin).

> [!NOTE]
> **Concept Check 30.1**
> In the Stern-Gerlach experiment, the beam of silver atoms split into two. If the electron spin quantum number $s$ were 1 (instead of 1/2), how many beams would have been observed?

---

## 2. The Pauli Exclusion Principle

### Statement (Antisymmetry version)

> The total wavefunction (including spin) for a system of identical fermions (particles with half-integer spin, including electrons) must be **antisymmetric** under exchange of any two particles:
> $$\Psi(\ldots, \mathbf{x}_i, \ldots, \mathbf{x}_j, \ldots) = -\Psi(\ldots, \mathbf{x}_j, \ldots, \mathbf{x}_i, \ldots)$$

### Consequence

No two electrons can have the **same set of four quantum numbers** ($n$, $l$, $m_l$, $m_s$). If two electrons occupy the same spatial orbital ($n$, $l$, $m_l$ the same), they must have opposite spin.

### Maximum per Subshell

| Subshell | $l$ | $m_l$ values | Max electrons |
|----------|-----|-------------|--------------|
| $s$ | 0 | 0 | 2 |
| $p$ | 1 | $-1, 0, +1$ | 6 |
| $d$ | 2 | $-2, \ldots, +2$ | 10 |
| $f$ | 3 | $-3, \ldots, +3$ | 14 |

---

## 3. Helium: Singlet and Triplet States

For excited helium ($1s^1 2s^1$), we can construct symmetric and antisymmetric spatial wavefunctions:

**Symmetric spatial** (paired with antisymmetric spin = singlet):
$$\psi_+ = \frac{1}{\sqrt{2}}[\phi_{1s}(1)\phi_{2s}(2) + \phi_{1s}(2)\phi_{2s}(1)]$$

**Antisymmetric spatial** (paired with symmetric spin = triplet):
$$\psi_- = \frac{1}{\sqrt{2}}[\phi_{1s}(1)\phi_{2s}(2) - \phi_{1s}(2)\phi_{2s}(1)]$$

The **triplet** ($S = 1$) is lower in energy because:
1. Antisymmetric spatial function → electrons avoid each other → reduced repulsion
2. Additional exchange stabilization ($-K$)

This illustrates **Hund's first rule**.

---

## 4. The Aufbau Principle

### Orbital Filling Order

Fill orbitals in order of increasing energy, placing at most 2 electrons per orbital:

$$1s < 2s < 2p < 3s < 3p < 4s < 3d < 4p < 5s < 4d < \ldots$$

### The $(n + l)$ Rule (Madelung)

Orbitals fill in order of increasing $n + l$. For equal $n + l$, lower $n$ fills first.

### Hund's Rules (for degenerate orbitals)

1. **Maximize total spin $S$**: Fill degenerate orbitals singly (with parallel spin) before pairing
2. **Maximize total orbital angular momentum $L$**: Among states with the same $S$, the one with highest $L$ is lowest
3. **Spin-orbit coupling**: For less-than-half-filled subshells, lowest $J$ is lowest; for more-than-half-filled, highest $J$ is lowest

> [!NOTE]
> **Concept Check 30.2**
> According to the $(n+l)$ rule, which orbital fills first: $4s$ or $3d$? Justify your answer using the sum of $n$ and $l$.

---

## 5. Electron Configurations

### Building Up the Periodic Table

| Atom | $Z$ | Configuration | Notes |
|------|-----|--------------|-------|
| H | 1 | $1s^1$ | |
| He | 2 | $1s^2$ | Filled shell |
| Li | 3 | $[He]\,2s^1$ | |
| Be | 4 | $[He]\,2s^2$ | |
| B | 5 | $[He]\,2s^2\,2p^1$ | |
| C | 6 | $[He]\,2s^2\,2p^2$ | Hund: ↑ ↑ \_ |
| N | 7 | $[He]\,2s^2\,2p^3$ | Half-filled: ↑ ↑ ↑ |
| O | 8 | $[He]\,2s^2\,2p^4$ | ↑↓ ↑ ↑ |
| F | 9 | $[He]\,2s^2\,2p^5$ | |
| Ne | 10 | $[He]\,2s^2\,2p^6$ | Filled shell |

### Notable Exceptions

| Atom | Expected | Actual | Reason |
|------|----------|--------|--------|
| Cr | $[Ar]\,3d^4\,4s^2$ | $[Ar]\,3d^5\,4s^1$ | Half-filled $d$ shell stability |
| Cu | $[Ar]\,3d^9\,4s^2$ | $[Ar]\,3d^{10}\,4s^1$ | Filled $d$ shell stability |

---

## 6. Periodic Trends from Quantum Mechanics

| Property | Trend across period | Trend down group | QM Explanation |
|----------|-------------------|------------------|---------------|
| $Z_{\text{eff}}$ | Increases | Roughly constant | Imperfect shielding |
| Atomic radius | Decreases | Increases | $Z_{\text{eff}}$ vs. $n$ |
| IE | Increases | Decreases | Orbital energy vs. size |
| Electron affinity | Generally increases | Decreases | Same reasoning |

---

## Key Equations Summary

| Equation | Expression |
|----------|-----------|
| Spin angular momentum | $\|S\| = \hbar\sqrt{s(s+1)} = \frac{\sqrt{3}}{2}\hbar$ |
| $S_z$ | $m_s\hbar = \pm\hbar/2$ |
| Max electrons per subshell | $2(2l+1)$ |
| Max electrons per shell | $2n^2$ |
| Antisymmetry requirement | $\Psi(\ldots x_i \ldots x_j \ldots) = -\Psi(\ldots x_j \ldots x_i \ldots)$ |

## Recent Literature Spotlight

**"Topological Insulators and Superconductors"**
*X.-L. Qi, S.-C. Zhang*, Reviews of Modern Physics, **2011**, 83, 1057–1110. [DOI](https://doi.org/10.1103/RevModPhys.83.1057)

This seminal review explains how the quantum mechanics of electrons in periodic potentials — band theory, taught in this lecture — gives rise to topological insulators: materials that are bulk insulators but have conducting surface states protected by time-reversal symmetry. The topological classification of electronic bands demonstrates that quantum mechanics can produce robust, dissipationless conduction without magnetic fields.

---

## Practice Problems

1. **Electron configurations.** Write ground-state electron configurations for (a) Si, (b) Fe, (c) Br, (d) Ag.

2. **Hund's rule.** For the nitrogen atom ($1s^2 2s^2 2p^3$), show that the ground-state configuration has $S = 3/2$ rather than $S = 1/2$. How many exchange pairs does each configuration have?

3. **Effective nuclear charge.** Using Slater's rules, calculate $Z_{\text{eff}}$ for (a) a $2p$ electron in F, (b) a $3d$ electron in Fe. Explain why the $3d$ electron is much more effectively shielded.

---

*Next week: Quantum States for Many-Electron Atoms & Atomic Spectroscopy*
