# Lecture 23 — Vibrational (IR) Spectroscopy of Diatomics

**Reading:** Engel 4th ed., Chapter 8 (Sections 8.4–8.5)

## Learning Objectives

- State and apply selection rules for vibrational transitions of diatomics
- Interpret the fundamental absorption band of a diatomic molecule
- Determine force constants from IR spectral data
- Predict isotope effects on vibrational frequencies
- Use group theory to predict IR and Raman activity of polyatomic vibrations

---

## 1. Vibrational Selection Rules

### Gross Selection Rule

The molecule must have a **dipole moment that changes during the vibration**:

$$\left(\frac{d\mu}{dx}\right)_{x=0} \neq 0$$

- **IR active**: HCl, CO, NO (heteronuclear diatomics)
- **IR inactive**: H₂, N₂, O₂ (homonuclear — no dipole change)

> [!NOTE]
> **Concept Check 23.1**
> For a vibration to be IR active, the dipole moment must change during the motion. In $CO_2$, the asymmetric stretch is IR active, but the symmetric stretch is not. Briefly explain why based on the dipole moment.

### Specific Selection Rule (Harmonic Approximation)

$$\boxed{\Delta v = \pm 1}$$

Only the **fundamental** transition ($v = 0 \to 1$) is allowed.

### With Anharmonicity

The selection rule relaxes slightly:
- $\Delta v = \pm 1$: **fundamental** (strong)
- $\Delta v = \pm 2$: **first overtone** (weak)
- $\Delta v = \pm 3$: **second overtone** (very weak)

---

## 2. The Fundamental Absorption Frequency

$$\tilde{\nu}_0 = \frac{1}{2\pi c}\sqrt{\frac{k}{\mu}} \quad \text{(cm}^{-1}\text{)}$$

This gives the center of the fundamental absorption band.

### Force Constant from IR Data

$$k = (2\pi c\tilde{\nu}_0)^2\mu = 4\pi^2 c^2\tilde{\nu}_0^2\,\mu$$

### Typical Values

| Molecule | $\tilde{\nu}_0$ (cm⁻¹) | $k$ (N/m) | Bond type |
|----------|---------------------|-----------|-----------|
| HF | 4138 | 966 | Single (strong) |
| HCl | 2991 | 516 | Single |
| HBr | 2649 | 412 | Single |
| HI | 2309 | 314 | Single |
| CO | 2170 | 1902 | Triple |
| NO | 1904 | 1595 | ~2.5 |
| N₂ | 2359 | 2294 | Triple |

**Trends:**
- Stronger bonds → higher $k$ → higher $\tilde{\nu}$
- Lighter atoms → smaller $\mu$ → higher $\tilde{\nu}$
- The C–H stretch (~3000 cm⁻¹) is a diagnostic region in organic IR

---

## 3. Isotope Effects on Vibrational Frequencies

Since $k$ is unchanged by isotopic substitution:

$$\frac{\tilde{\nu}'}{\tilde{\nu}} = \sqrt{\frac{\mu}{\mu'}}$$

### Example: HCl → DCl

$$\mu_{\text{HCl}} = \frac{(1.008)(34.97)}{35.98} = 0.9796\text{ u}$$

$$\mu_{\text{DCl}} = \frac{(2.014)(34.97)}{36.98} = 1.904\text{ u}$$

$$\frac{\tilde{\nu}_{\text{DCl}}}{\tilde{\nu}_{\text{HCl}}} = \sqrt{\frac{0.9796}{1.904}} = 0.717$$

$$\tilde{\nu}_{\text{DCl}} = 0.717 \times 2991 = 2145\text{ cm}^{-1}$$

Experimental: 2145 cm⁻¹ — excellent agreement!

> [!NOTE]
> **Concept Check 23.2**
> When hydrogen in $HCl$ is replaced by deuterium to form $DCl$, the vibrational frequency decreases. Based on the reduced mass $\mu$, explain why heavier isotopes lead to lower vibrational frequencies.

---

## 4. Raman Spectroscopy

### The Raman Effect

In Raman spectroscopy, monochromatic light ($\nu_0$) is scattered by a sample. Most photons scatter elastically (**Rayleigh scattering**), but a small fraction exchange energy with molecular vibrations:

- **Stokes lines**: $\nu_{\text{scattered}} = \nu_0 - \nu_{\text{vib}}$ (molecule gains energy)
- **Anti-Stokes lines**: $\nu_{\text{scattered}} = \nu_0 + \nu_{\text{vib}}$ (molecule loses energy)

### Raman Selection Rule

A vibration is Raman active if the **polarizability** changes during the vibration:

$$\left(\frac{d\alpha}{dx}\right)_{x=0} \neq 0$$

- **Raman active**: H₂, N₂, O₂ (homonuclear diatomics — polarizability changes!)
- All diatomic molecules are Raman active (for the stretch)

### Comparison: IR vs. Raman

| Feature | IR | Raman |
|---------|-----|-------|
| Selection rule | Dipole must change | Polarizability must change |
| Homonuclear diatomics | Inactive | Active |
| Heteronuclear diatomics | Active | Active |
| Mutual exclusion (centrosymmetric) | $u$ modes only | $g$ modes only |
| Intensity | Absorption | Scattering (weaker) |

### Mutual Exclusion Rule (from Symmetry)

For molecules with an inversion center ($i$): **no vibration is both IR active and Raman active.** This is a direct consequence of group theory — $g$ and $u$ representations are mutually exclusive.

---

## 5. IR and Raman Activity of Polyatomic Molecules

Using the group theory results from Week 6, we can predict activity for each normal mode.

### H₂O ($C_{2v}$): $\Gamma_{\text{vib}} = 2A_1 + B_2$

| Mode | Symmetry | $z$? | $x^2, y^2, z^2$? | IR? | Raman? |
|------|---------|------|------------------|-----|--------|
| Symmetric stretch | $A_1$ | ✓ ($z$) | ✓ ($x^2, y^2, z^2$) | ✓ | ✓ |
| Bend | $A_1$ | ✓ ($z$) | ✓ ($x^2, y^2, z^2$) | ✓ | ✓ |
| Asymmetric stretch | $B_2$ | ✓ ($y$) | ✓ ($yz$) | ✓ | ✓ |

All three modes are both IR and Raman active (no inversion center → no mutual exclusion).

### CO₂ ($D_{\infty h}$): Linear, $3(3)-5 = 4$ modes

| Mode | Symmetry | IR? | Raman? |
|------|---------|-----|--------|
| Symmetric stretch | $\Sigma_g^+$ | ✗ | ✓ |
| Asymmetric stretch | $\Sigma_u^+$ | ✓ | ✗ |
| Bend (×2) | $\Pi_u$ | ✓ | ✗ |

Mutual exclusion rule holds perfectly.

---

## Key Equations Summary

| Equation | Expression |
|----------|-----------|
| Vib. selection rule (harmonic) | $\Delta v = \pm 1$ |
| Fundamental frequency | $\tilde{\nu}_0 = \frac{1}{2\pi c}\sqrt{k/\mu}$ |
| Force constant from IR | $k = 4\pi^2c^2\tilde{\nu}_0^2\mu$ |
| Isotope effect | $\tilde{\nu}'/\tilde{\nu} = \sqrt{\mu/\mu'}$ |
| Raman shift (Stokes) | $\Delta\tilde{\nu} = \tilde{\nu}_0 - \tilde{\nu}_{\text{vib}}$ |
| IR active | $d\mu/dx \neq 0$ |
| Raman active | $d\alpha/dx \neq 0$ |

## Recent Literature Spotlight

**"Using Computational Chemistry Activities to Promote Learning in an Undergraduate Physical Chemistry Course"**
*T. E. Simos, et al.*, Journal of Chemical Education, **2020**, 97, 3014–3023. [DOI](https://doi.org/10.1021/acs.jchemed.0c00029)

This paper describes how computational chemistry tools can be used to teach students about rovibrational spectroscopy of diatomic molecules. Students calculate Morse potential parameters, rotational constants, and vibration-rotation coupling constants — connecting the theoretical framework of this lecture to real spectroscopic data and developing intuition for how quantum mechanics predicts molecular spectra.

---

## Practice Problems

1. **Force constant.** The fundamental vibrational frequency of ¹⁴N¹⁶O is 1904 cm⁻¹. Calculate the force constant and classify the bond order.

2. **Isotope substitution.** Predict $\tilde{\nu}$ for ¹⁵N¹⁶O and ¹⁴N¹⁸O. Which isotope substitution causes a larger shift?

3. **Activity prediction.** For SO₂ ($C_{2v}$, $\Gamma_{\text{vib}} = 2A_1 + B_2$), predict which modes are IR active and which are Raman active. Is the mutual exclusion rule expected to hold?

---

*Next lecture: Vibration-Rotation Spectra & Anharmonicity*
