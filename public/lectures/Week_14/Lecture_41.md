# Lecture 41 — NMR Spectroscopy — Nuclear Spin & Chemical Shift

**Reading:** Engel 4th ed., Chapter 17

## Learning Objectives

- Describe nuclear spin and the resonance condition for NMR
- Explain the chemical shift and its origin in electron shielding
- Interpret spin-spin coupling (J-coupling) patterns
- Predict NMR spectra for simple organic molecules
- Connect NMR to quantum mechanical principles (angular momentum, magnetic moments)

---

## 1. Nuclear Spin

### Nuclear Spin Quantum Number

Nuclei with odd mass number or odd atomic number have nonzero spin:

| Nucleus | $I$ | Natural abundance | NMR active? |
|---------|-----|------------------|-------------|
| ¹H | 1/2 | 99.98% | Yes (most common) |
| ²H (D) | 1 | 0.02% | Yes |
| ¹²C | 0 | 98.90% | No |
| ¹³C | 1/2 | 1.10% | Yes |
| ¹⁶O | 0 | 99.76% | No |
| ¹⁹F | 1/2 | 100% | Yes |
| ³¹P | 1/2 | 100% | Yes |

### Nuclear Magnetic Moment

$$\hat{\mu} = \gamma\hbar\hat{I}$$

where $\gamma$ is the **magnetogyric ratio** (nucleus-specific).

For ¹H: $\gamma = 2.675 \times 10^8$ rad s⁻¹ T⁻¹

---

## 2. The NMR Experiment

### Zeeman Splitting

In an external magnetic field $B_0$, the $2I+1$ spin states split:

$$E_{m_I} = -\gamma\hbar B_0\,m_I$$

For $I = 1/2$: two states ($m_I = +1/2$ and $-1/2$) split by:

$$\Delta E = \gamma\hbar B_0 = h\nu_0$$

### The Resonance Condition

$$\boxed{\nu_0 = \frac{\gamma B_0}{2\pi}}$$

At $B_0 = 14.1$ T: $\nu_0$(¹H) = 600 MHz (radiofrequency)

### Boltzmann Population

The population difference between spin states at room temperature is tiny:

$$\frac{N_\alpha - N_\beta}{N_\alpha + N_\beta} = \tanh\left(\frac{\gamma\hbar B_0}{2k_BT}\right) \approx \frac{\gamma\hbar B_0}{2k_BT} \approx 10^{-5}$$

NMR is inherently **low-sensitivity** compared to optical spectroscopy.

> [!NOTE]
> **Concept Check 41.1**
> The resonance frequency in NMR depends on the strength of the external magnetic field $B_0$. If you move a sample from a 300 MHz spectrometer to a 600 MHz spectrometer, what happens to the energy difference ($\Delta E$) between the spin states?

---

## 3. Chemical Shift

### Origin: Electron Shielding

The electron cloud around a nucleus **shields** it from the full external field:

$$B_{\text{local}} = B_0(1 - \sigma)$$

where $\sigma$ is the **shielding constant** (dimensionless, ~10⁻⁶).

The resonance frequency shifts:

$$\nu = \frac{\gamma B_0(1-\sigma)}{2\pi}$$

### The Chemical Shift Scale ($\delta$)

$$\boxed{\delta = \frac{\nu - \nu_{\text{ref}}}{\nu_{\text{ref}}} \times 10^6 \quad \text{(in ppm)}}$$

Reference: TMS (tetramethylsilane) is defined as $\delta = 0$ for ¹H and ¹³C.

### Typical ¹H Chemical Shifts

| Environment | $\delta$ (ppm) | Shielding |
|------------|---------------|-----------|
| R–CH₃ (alkyl) | 0.9–1.0 | High (shielded) |
| R₂–CH₂ | 1.3–1.5 | |
| C=C–H (vinylic) | 4.5–6.5 | |
| Ar–H (aromatic) | 6.5–8.0 | Low (deshielded) |
| R–CHO (aldehyde) | 9.5–10.0 | Very low |
| R–COOH | 10–12 | Lowest |

### Factors Affecting Chemical Shift

1. **Electronegativity** of nearby atoms: electron-withdrawing groups deshield (higher $\delta$)
2. **Ring current** effects: aromatic ring creates induced field (deshielding outside the ring)
3. **Hydrogen bonding**: deshields the proton
4. **Hybridization**: $sp > sp^2 > sp^3$ (increasing shielding)

> [!NOTE]
> **Concept Check 41.2**
> Why do protons attached to more electronegative atoms (like Oxygen in a carboxylic acid) show a higher chemical shift ($\delta$)? Use the terms "shielding" or "deshielding" in your explanation.

---

## 4. Spin-Spin Coupling (J-Coupling)

### Physical Origin

Nuclear spins communicate through **bonding electrons** (not through space). The spin state of one nucleus affects the local field at another through polarization of the bonding electrons.

### The Coupling Pattern

A nucleus coupled to $n$ equivalent spin-1/2 nuclei is split into $n + 1$ lines with intensities following **Pascal's triangle**:

| $n$ | Pattern | Intensity ratios |
|-----|---------|-----------------|
| 0 | Singlet | 1 |
| 1 | Doublet | 1:1 |
| 2 | Triplet | 1:2:1 |
| 3 | Quartet | 1:3:3:1 |
| 4 | Quintet | 1:4:6:4:1 |

### Coupling Constant ($J$)

$J$ (in Hz) is the **coupling constant** — it is field-independent and characteristic of the bonding pathway:

| Coupling | $J$ (Hz) |
|--------|---------|
| ²J(H–C–H) geminal | 0–12 |
| ³J(H–C–C–H) vicinal | 6–8 (free rotation) |
| ³J (trans alkene) | 12–18 |
| ³J (cis alkene) | 6–12 |

### First-Order Rules

When $\Delta\nu/J \gg 1$ (chemical shift difference >> coupling constant):
- The splitting pattern of nucleus A due to coupling to nucleus X follows the $n+1$ rule
- The coupling is symmetric: $J_{AX} = J_{XA}$
- Equivalent nuclei **do not split each other**

---

## 5. Interpreting NMR Spectra

### Step-by-step

1. **Count the peaks** (groups of chemically distinct nuclei)
2. **Integration** gives relative number of protons in each group
3. **Chemical shift** identifies the chemical environment
4. **Splitting pattern** reveals the number of neighboring coupled nuclei
5. **Coupling constants** indicate the type of coupling pathway

### Example: Ethanol (CH₃CH₂OH)

- CH₃: $\delta \approx 1.2$ ppm, triplet (coupled to 2 CH₂ protons)
- CH₂: $\delta \approx 3.7$ ppm, quartet (coupled to 3 CH₃ protons)
- OH: $\delta \approx 2.6$ ppm, singlet (exchanging rapidly, no coupling)

Integration ratio: 3:2:1 ✓

---

## Key Equations Summary

| Equation | Expression |
|----------|-----------|
| Resonance condition | $\nu_0 = \gamma B_0/(2\pi)$ |
| Zeeman splitting | $\Delta E = \gamma\hbar B_0$ |
| Chemical shift | $\delta = (\nu-\nu_{\text{ref}})/\nu_{\text{ref}} \times 10^6$ |
| Splitting rule | $n+1$ lines for $n$ equivalent neighbors |
| Population ratio | $N_\alpha/N_\beta \approx 1+\gamma\hbar B_0/(k_BT)$ |

## Recent Literature Spotlight

**"Ultrahigh-Field NMR Spectroscopy at 1.2 GHz"**
*T. Schubeis, T. Le Marchand, L. B. Andreas, G. Pintacuda*, Journal of Biomolecular NMR, **2020**, 74, 349–359. [DOI](https://doi.org/10.1007/s10858-019-00295-3)

The development of 1.2 GHz (28.2 Tesla) NMR spectrometers represents the frontier of magnetic resonance technology. This paper demonstrates how the ultrahigh magnetic field resolves spectral crowding in large biomolecules, enabling structure determination of proteins and nucleic acids with unprecedented detail. The enhanced resolution scales with $B_0$ exactly as the Zeeman splitting $\Delta E = g\mu_N B_0$ taught in this lecture predicts.

---

## Practice Problems

1. **Resonance frequency.** Calculate the ¹H resonance frequency at (a) 7.05 T, (b) 11.75 T, (c) 21.1 T. What "MHz class" is each spectrometer?

2. **Spectrum prediction.** Predict the ¹H NMR spectrum of (a) diethyl ether (CH₃CH₂OCH₂CH₃), (b) acetone (CH₃COCH₃), (c) 1,1-dichloroethane (CHCl₂CH₃). Give chemical shifts, multiplicities, and integration ratios.

3. **Chemical shift trends.** Rank the following protons by increasing $\delta$: $\text{CH}_4$, $\text{CH}_3\text{Cl}$, $\text{CH}_2\text{Cl}_2$, $\text{CHCl}_3$. Explain the trend using electronegativity arguments.

---

*Next lecture: Course Review & Integration*
