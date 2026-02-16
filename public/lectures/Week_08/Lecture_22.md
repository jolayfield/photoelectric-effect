# Lecture 22 — Rotational (Microwave) Spectroscopy

**Reading:** Engel 4th ed., Chapter 8 (Sections 8.1–8.3)

## Learning Objectives

- State the selection rules for pure rotational transitions and justify them from symmetry
- Predict and interpret rotational (microwave) spectra of diatomic molecules
- Determine rotational constants and bond lengths from spectral data
- Account for centrifugal distortion
- Explain population effects and predict the most intense spectral line

---

## 1. Conditions for Rotational Spectroscopy

### Gross Selection Rule

A molecule must have a **permanent electric dipole moment** to absorb or emit microwave radiation via rotational transitions.

- **Active**: HCl, CO, NO, H₂O — heteronuclear diatomics and most polyatomics
- **Inactive**: H₂, N₂, O₂, CO₂ (symmetric stretch) — homonuclear diatomics and some symmetric modes

> [!NOTE]
> **Concept Check 22.1**
> Why must a molecule have a permanent dipole moment to exhibit a pure rotational spectrum? Would you expect to observe a rotational spectrum for $CH_4$ (methane)?

### Symmetry Perspective

The transition dipole moment $\langle J', m_J'|\hat{\mu}|J, m_J\rangle$ is nonzero only if the direct product of representations contains the totally symmetric representation. Since $\hat{\mu}$ transforms as a translation ($x$, $y$, or $z$), we need $\Gamma_{J'} \otimes \Gamma_{\text{translation}} \otimes \Gamma_J \supseteq$ totally symmetric.

### Specific Selection Rules

$$\boxed{\Delta J = \pm 1, \quad \Delta m_J = 0, \pm 1}$$

---

## 2. The Rotational Spectrum

### Transition Frequencies

For $J \to J+1$:

$$\tilde{\nu}_{J \to J+1} = \frac{E_{J+1} - E_J}{hc} = B[(J+1)(J+2) - J(J+1)] = 2B(J+1)$$

The pure rotational spectrum consists of **equally spaced lines** separated by $2B$:

| Transition | $\tilde{\nu}$ (cm⁻¹) |
|-----------|---------------------|
| $J=0 \to 1$ | $2B$ |
| $J=1 \to 2$ | $4B$ |
| $J=2 \to 3$ | $6B$ |
| $J=3 \to 4$ | $8B$ |

### Measuring $B$ from the Spectrum

The spacing between adjacent lines is $2B$. A single measurement gives:

$$B = \frac{\tilde{\nu}_{J\to J+1}}{2(J+1)}$$

From $B$, we get the bond length:

$$r_e = \sqrt{\frac{h}{8\pi^2 c\mu B}}$$

> [!NOTE]
> **Concept Check 22.2**
> In the rotational spectrum of a rigid diatomic molecule, the lines are equally spaced by $2B$. If the bond length of the molecule were to increase, how would the spacing between these lines change?

---

## 3. Centrifugal Distortion

Real molecules are not perfectly rigid — as $J$ increases, centrifugal force stretches the bond, increasing $I$ and decreasing the effective $B$.

### Corrected Energy Levels

$$E_J = BhcJ(J+1) - DhcJ^2(J+1)^2$$

where $D$ is the **centrifugal distortion constant** (small, positive).

$$D = \frac{4B^3}{\tilde{\nu}^2}$$

### Effect on the Spectrum

Lines at high $J$ are shifted to **lower frequency** relative to the rigid rotor prediction:

$$\tilde{\nu}_{J\to J+1} = 2B(J+1) - 4D(J+1)^3$$

---

## 4. Intensities and the Boltzmann Distribution

### Population of Level $J$

$$N_J \propto (2J+1)\exp\left(-\frac{BhcJ(J+1)}{k_BT}\right)$$

- $(2J+1)$: degeneracy factor (increases with $J$)
- Exponential: Boltzmann factor (decreases with $J$)

These competing effects create a **maximum** in population at:

$$J_{\max} = \sqrt{\frac{k_BT}{2Bhc}} - \frac{1}{2}$$

### Spectral Envelope

The most intense line in the rotational spectrum corresponds to the transition originating from the most populated level $J_{\max}$.

### Worked Example: HCl at 300 K

$B = 10.59$ cm⁻¹

$$J_{\max} = \sqrt{\frac{(1.381\times10^{-23})(300)}{2(10.59)(6.626\times10^{-34})(3\times10^{10})}} - \frac{1}{2} \approx 3$$

The strongest absorption line is the $J = 3 \to 4$ transition at $\tilde{\nu} = 8B = 84.7$ cm⁻¹.

---

## 5. Isotope Effects

For isotopic substitution (e.g., H³⁵Cl vs. H³⁷Cl):
- The force constant $k$ is unchanged (same electronic structure)
- The reduced mass $\mu$ changes
- The rotational constant changes: $B \propto 1/\mu$

$$\frac{B'}{B} = \frac{\mu}{\mu'}$$

Isotopic splitting is often observed in high-resolution microwave spectra and can be used to determine precise bond lengths.

---

## Key Equations Summary

| Equation | Expression |
|----------|-----------|
| Selection rule | $\Delta J = \pm 1$ |
| Transition frequency | $\tilde{\nu} = 2B(J+1)$ |
| Line spacing | $2B$ |
| Centrifugal distortion | $\tilde{\nu} = 2B(J+1) - 4D(J+1)^3$ |
| Population maximum | $J_{\max} \approx \sqrt{k_BT/(2Bhc)} - 1/2$ |
| Bond length | $r_e = \sqrt{h/(8\pi^2c\mu B)}$ |

## Recent Literature Spotlight

**"Detection of Two Interstellar Polycyclic Aromatic Hydrocarbons via Spectral Matched Filtering"**
*B. A. McGuire, R. A. Loomis, A. M. Burkhardt, K. L. K. Lee, C. N. Shingledecker, et al.*, Science, **2021**, 371, 1265–1269. [DOI](https://doi.org/10.1126/science.abb7535)

Using Green Bank Telescope observations of the Taurus Molecular Cloud, the authors identified interstellar 1- and 2-cyano­naphthalene through rotational spectroscopy. Each detection relied on matching observed microwave transition frequencies to the rotational constants predicted by quantum mechanics — the same $E_J = BJ(J+1)$ energy levels derived in this lecture for rigid rotors.

---

## Practice Problems

1. **Microwave spectrum.** The first line in the rotational spectrum of ¹²C¹⁶O appears at 3.863 cm⁻¹. Calculate (a) $B$, (b) $I$, and (c) $r_e$.

2. **Isotope effect.** Predict the rotational constant $B$ for ¹³C¹⁶O given $B(^{12}C^{16}O) = 1.931$ cm⁻¹.

3. **Most populated level.** For CO at 300 K ($B = 1.931$ cm⁻¹), find $J_{\max}$ and predict which rotational transition will be most intense.

---

*Next lecture: Vibrational (IR) Spectroscopy of Diatomics*
