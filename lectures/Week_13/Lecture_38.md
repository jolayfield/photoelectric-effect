# Lecture 38 — Electronic Transitions & the Franck-Condon Principle

**Reading:** Engel 4th ed., Chapter 14 (Sections 14.1–14.4)

## Learning Objectives

- Classify electronic transitions ($\sigma \to \sigma^*$, $n \to \pi^*$, $\pi \to \pi^*$, etc.)
- Apply symmetry selection rules to predict allowed electronic transitions
- State the Franck-Condon principle and explain its physical basis
- Interpret UV-Vis absorption spectra including band shapes and vibrational fine structure
- Relate absorption wavelength to molecular structure (chromophores)

---

## 1. Types of Electronic Transitions

When a molecule absorbs UV or visible light, an electron is promoted from an occupied MO to an unoccupied MO:

| Transition | Energy | Wavelength | Example |
|-----------|--------|-----------|---------|
| $\sigma \to \sigma^*$ | Very high | < 150 nm (vacuum UV) | C–C, C–H bonds |
| $n \to \sigma^*$ | High | 150–250 nm | Alcohols, amines |
| $\pi \to \pi^*$ | Moderate | 200–500 nm | Alkenes, aromatics |
| $n \to \pi^*$ | Low | 250–600 nm | Carbonyls, azo compounds |

### Chromophores

A **chromophore** is the functional group responsible for UV-Vis absorption:

| Chromophore | Transition | $\lambda_{\max}$ (nm) | $\epsilon$ (L mol⁻¹ cm⁻¹) |
|------------|-----------|---------------------|--------------------------|
| C=C | $\pi \to \pi^*$ | 170 | 15,000 |
| C=O (aldehyde) | $n \to \pi^*$ | 290 | 10 |
| C=O (aldehyde) | $\pi \to \pi^*$ | 180 | 10,000 |
| Benzene | $\pi \to \pi^*$ | 254 | 200 |
| Conjugated diene | $\pi \to \pi^*$ | 217 | 21,000 |

> [!NOTE]
> **Concept Check 38.1**
> Which electronic transition typically requires the highest energy (shortest wavelength): $\sigma \to \sigma^*$ or $n \to \pi^*$? Briefly explain why based on the types of orbitals involved.

---

## 2. Selection Rules for Electronic Transitions

### Symmetry Selection Rule

A transition from state $\Psi_i$ to $\Psi_f$ is allowed if the transition dipole moment is nonzero:

$$\vec{\mu}_{fi} = \langle\Psi_f|\hat{\mu}|\Psi_i\rangle \neq 0$$

This requires:

$$\Gamma_f \otimes \Gamma_\mu \otimes \Gamma_i \supseteq A_1 \text{ (totally symmetric)}$$

### Spin Selection Rule

$$\Delta S = 0$$

Singlet → triplet (or vice versa) transitions are **spin-forbidden**. They occur only weakly via spin-orbit coupling.

### Orbital Symmetry (Laporte Rule)

For centrosymmetric molecules: only $g \to u$ or $u \to g$ transitions are allowed.

This means $d \to d$ transitions in octahedral complexes are (strictly) Laporte-forbidden — they gain intensity through vibronic coupling (vibrations that temporarily remove the inversion center).

---

## 3. The Franck-Condon Principle

### Statement

> Electronic transitions occur so rapidly (∼10⁻¹⁵ s) compared to nuclear motion (∼10⁻¹³ s) that the nuclear positions and momenta are essentially unchanged during the transition.

This is the **vertical transition** approximation — on an energy diagram, the transition is represented as a vertical arrow.

### Consequences

1. The molecule is promoted to a vibrational level of the excited electronic state that has the **maximum overlap** with the ground vibrational wavefunction
2. The transition probability is proportional to the **Franck-Condon factor**:

$$\text{FC factor} = |\langle\chi_{v'}^{\text{excited}}|\chi_{v''}^{\text{ground}}\rangle|^2$$

3. If the excited-state equilibrium geometry is similar to the ground state: $v'' = 0 \to v' = 0$ is strongest (narrow band)
4. If the equilibrium geometries differ significantly: $v'' = 0 \to v' > 0$ transitions are strong (broad band with vibrational progression)

### Vibrational Fine Structure

UV-Vis bands often show vibrational progressions — a series of peaks separated by the excited-state vibrational frequency $\tilde{\nu}'$:

$$\tilde{\nu}_{\text{absorption}} = \tilde{\nu}_{0-0} + v'\tilde{\nu}' \quad (v' = 0, 1, 2, \ldots)$$

The $0-0$ band corresponds to zero vibrational quanta in both states.

> [!NOTE]
> **Concept Check 38.2**
> According to the Franck-Condon principle, why are electronic transitions represented as "vertical" lines on a potential energy diagram? What assumption is made about the relative speed of electrons vs. nuclei?

---

## 4. Beer-Lambert Law

The absorbance $A$ is related to concentration and path length:

$$\boxed{A = \epsilon\,c\,l = -\log_{10}(I/I_0)}$$

| Quantity | Units |
|---------|-------|
| $\epsilon$ (molar absorptivity) | L mol⁻¹ cm⁻¹ |
| $c$ (concentration) | mol L⁻¹ |
| $l$ (path length) | cm |

### Oscillator Strength

The dimensionless oscillator strength connects to the integrated absorption:

$$f = \frac{4m_e c \ln 10}{N_A e^2} \int \epsilon(\tilde{\nu})\,d\tilde{\nu}$$

For fully allowed transitions: $f \sim 0.1$–$1.0$
For forbidden transitions: $f \ll 0.01$

---

## 5. Effect of Conjugation

Extended conjugation shifts $\lambda_{\max}$ to longer wavelength (**bathochromic shift** or **red shift**):

| System | $\lambda_{\max}$ (nm) |
|--------|---------------------|
| Ethylene | 170 |
| 1,3-Butadiene | 217 |
| 1,3,5-Hexatriene | 258 |
| β-Carotene (11 conjugated C=C) | 450 (orange!) |

This is exactly the particle-in-a-box / FEMO model from Lecture 13 — longer conjugation = larger "box" = smaller $\Delta E$.

---

## Key Equations Summary

| Equation | Expression |
|----------|-----------|
| Transition dipole | $\vec{\mu}_{fi} = \langle\Psi_f\|\hat{\mu}\|\Psi_i\rangle$ |
| Selection rules | $\Delta S = 0$; $\Gamma_f \otimes \Gamma_\mu \otimes \Gamma_i \supseteq A_1$ |
| Franck-Condon factor | $\|\langle\chi_{v'}'\|\chi_{v''}'' \rangle\|^2$ |
| Beer-Lambert | $A = \epsilon cl$ |
| FEMO trend | $\lambda_{\max} \propto L^2$ (box length) |

## Recent Literature Spotlight

**"Attosecond Delays in X-Ray Molecular Ionization"**
*H. J. Wörner, M. Vacher, A. Schneider, et al.*, Nature, **2024**, 632, 762–767. [DOI](https://doi.org/10.1038/s41586-024-07771-9)

This experiment used attosecond soft X-ray pulses from a free-electron laser to measure photoionization delays in NO molecules. The observed delays — up to 700 attoseconds — arise from shape resonances and Auger-Meitner electron scattering within the molecular Franck-Condon region. This real-time probe of electronic excitation dynamics directly visualizes the vertical transitions between molecular potential energy surfaces taught in this lecture.

---

## Practice Problems

1. **Symmetry selection rules.** Using the $C_{2v}$ character table, determine whether the $n \to \pi^*$ transition in formaldehyde ($A_1 \to A_2$) is symmetry-allowed. What about the $\pi \to \pi^*$ transition ($A_1 \to B_1$)?

2. **Franck-Condon.** Sketch potential energy curves for a molecule where the excited-state bond is significantly longer than the ground state. On your diagram, show the most probable vertical transition and the resulting vibrational progression in the absorption spectrum.

3. **Conjugation effect.** Using the FEMO model, predict the ratio $\lambda_{\max}(\text{hexatriene})/\lambda_{\max}(\text{butadiene})$. Compare with the experimental values above.

---

*Next lecture: Fluorescence, Phosphorescence & Photochemistry*
