# Lecture 13 — Conjugated π-Systems, Quantum Dots & Real-World PIB Applications

**Reading:** Engel 4th ed., Chapter 5 (Sections 5.1–5.3)

## Learning Objectives

- Apply the free-electron molecular orbital (FEMO) model to conjugated polyenes and dyes
- Predict absorption wavelengths using the particle-in-a-box model
- Explain quantum confinement in semiconductor nanocrystals
- Describe the quantum size effect and its applications in nanotechnology
- Assess the limitations of the PIB model for real molecules

---

## 1. The Free-Electron Model for Conjugated Molecules

### The Idea

In a conjugated molecule (alternating single and double bonds), the π-electrons are delocalized over the entire carbon chain. To first approximation, they move freely in a 1-D "box" of length $L$.

### Setting Up the Model

For a linear conjugated system with $N$ carbon atoms:

$$L \approx (N - 1)d + d = Nd$$

where $d \approx 1.40$ Å is the average C–C bond length in a conjugated system. (We add one bond length at each end to account for the overshoot.)

The $\pi$-electrons fill the energy levels according to the Pauli exclusion principle (2 electrons per level):

$$E_n = \frac{n^2 h^2}{8m_e L^2}$$

### Absorption Wavelength

The lowest-energy electronic transition is HOMO → LUMO:

$$\Delta E = E_{N/2+1} - E_{N/2} = \frac{h^2}{8m_e L^2}\left[(N/2+1)^2 - (N/2)^2\right]$$

For $N_e$ π-electrons (filled up to level $n = N_e/2$):

$$\boxed{\Delta E = \frac{h^2(N_e + 1)}{8m_e L^2}}$$

$$\lambda_{\text{abs}} = \frac{hc}{\Delta E} = \frac{8m_e c L^2}{h(N_e + 1)}$$

### Worked Example: 1,3-Butadiene

- 4 carbon atoms, 4 π-electrons
- $L = 4 \times 1.40\text{ Å} = 5.60\text{ Å} = 5.60 \times 10^{-10}$ m
- $N_e = 4$, HOMO = $n=2$, LUMO = $n=3$

$$\Delta E = \frac{(9-4)h^2}{8m_e L^2} = \frac{5(6.626\times10^{-34})^2}{8(9.109\times10^{-31})(5.60\times10^{-10})^2}$$

$$\Delta E = 9.6 \times 10^{-19}\text{ J} \implies \lambda = 207\text{ nm}$$

Experimental: $\lambda_{\max} = 217$ nm — remarkably good for such a simple model!

### Trend with Chain Length

As conjugation length increases:
- $L$ increases → $\Delta E$ decreases → $\lambda_{\text{abs}}$ increases (**red shift**)
- This explains why longer polyenes absorb at longer wavelengths
- β-carotene (11 conjugated double bonds) absorbs at ~450 nm (blue light), appearing orange

> [!NOTE]
> **Concept Check 13.1**
> According to the FEMO model, if you increase the number of conjugated double bonds in a molecule, does the HOMO-LUMO energy gap increase or decrease? Does the absorption wavelength shift to the red or the blue?

### Cyanine Dyes

Cyanine dyes are prototypical test cases for the FEMO model:

| Dye | # π electrons | $\lambda_{\text{calc}}$ (nm) | $\lambda_{\text{exp}}$ (nm) |
|-----|--------------|--------------------------|--------------------------|
| Pinacyanol (3) | 10 | 565 | 604 |
| Pinacyanol (5) | 12 | 690 | 706 |
| Pinacyanol (7) | 14 | 825 | 813 |

The agreement improves for longer chains.

---

## 2. Quantum Dots: Nanoparticle "Atoms"

### What Are Quantum Dots?

Quantum dots are semiconductor nanocrystals (2–10 nm diameter) made of materials like CdSe, CdS, InP, or PbS. Electrons and holes are confined in all three dimensions.

### The Particle-in-a-Sphere Model

For a spherical quantum dot of radius $R$:

$$E_n \propto \frac{n^2 h^2}{8m^* R^2}$$

where $m^*$ is the effective mass of the charge carrier in the semiconductor.

### Size-Dependent Properties

$$\Delta E_{\text{gap}} = E_{\text{gap}}^{\text{bulk}} + \frac{h^2}{8R^2}\left(\frac{1}{m_e^*} + \frac{1}{m_h^*}\right) - \frac{1.8e^2}{4\pi\epsilon\epsilon_0 R}$$

The first correction term (confinement) dominates for small $R$:
- **Small dots** → large gap → **blue** emission
- **Large dots** → small gap → **red** emission

### Applications

- **Displays**: Samsung QLED TVs use quantum dots for pure color emission
- **Solar cells**: Tunable absorption for optimizing solar harvesting
- **Bioimaging**: Bright, photostable fluorescent labels
- **LEDs**: Narrow-emission-width light sources

> [!NOTE]
> **Concept Check 13.2**
> A sample of CdSe quantum dots appears red, while another sample of the same material appears green. Which sample contains the smaller nanocrystals? Explain using the particle-in-a-box (quantum confinement) model.

---

## 3. Additional Applications

### Molecular Wires and Nanoscale Electronics

Conjugated polymers (polyacetylene, polythiophene) conduct electricity along their chains — essentially 1-D quantum wires. The PIB model explains the band gap as the HOMO-LUMO gap.

### Color of β-Carotene

β-carotene has a conjugated system of 22 π electrons over 11 double bonds. Using the FEMO model:

$$L \approx 22 \times 1.40\text{ Å} = 30.8\text{ Å}$$

$$\lambda_{\text{calc}} \approx 455\text{ nm}$$

Experimental: ~450 nm — absorbs blue/violet light, giving carrots their orange color.

---

## 4. Limitations of the PIB Model

| Limitation | Reality |
|-----------|---------|
| Sharp walls | Real potentials are smooth |
| Constant potential inside | Electrons feel nuclear attractions |
| 1-D treatment | Molecules are 3-D |
| No electron-electron repulsion | Electrons repel each other |
| No end effects | Chain termination matters |

Despite these limitations, the model captures the essential physics: **confinement + quantization → discrete energy levels whose spacing decreases with system size**.

---

## Key Equations Summary

| Equation | Expression |
|----------|-----------|
| FEMO box length | $L \approx Nd$ ($d \approx 1.40$ Å) |
| HOMO→LUMO transition | $\Delta E = h^2(N_e+1)/(8m_eL^2)$ |
| Absorption wavelength | $\lambda = 8m_ecL^2/[h(N_e+1)]$ |
| Quantum dot gap | $\Delta E \propto 1/R^2$ |

## Recent Literature Spotlight

**"Loophole-Free Bell Test Using Superconducting Circuits"**
*S. Storz, J. Schär, A. Kulak, P. Magnard, P. Kurpiers, et al.*, Nature, **2023**, 617, 265–270. [DOI](https://doi.org/10.1038/s41586-023-05885-0)

This experiment performs a milestone loophole-free Bell test using superconducting qubits, directly probing the quantum mechanical principles of superposition and entanglement taught in this lecture. By measuring the spin-like observables of entangled qubits separated by 30 meters, the researchers definitively confirm that quantum correlations cannot be explained by any local hidden variable theory, reinforcing the probabilistic framework of quantum mechanics.

---

## Practice Problems

1. **Hexatriene.** Use the FEMO model to predict the absorption wavelength of 1,3,5-hexatriene (6 π-electrons, 6 carbon backbone). Compare to the experimental value of 268 nm.

2. **Chain length trend.** Calculate $\lambda_{\text{abs}}$ for conjugated polyenes with 4, 6, 8, 10, and 12 π-electrons. Plot $\lambda$ vs. $N_e$ and comment on the trend.

3. **CdSe quantum dots.** CdSe quantum dots with $m_e^* = 0.13\,m_e$ and $m_h^* = 0.45\,m_e$ have a bulk band gap of 1.74 eV. Calculate the emission wavelength for dots of radius (a) 2 nm, (b) 4 nm, and (c) 6 nm.

---

*Next lecture: Commutators, Simultaneous Observables & the Generalized Uncertainty Principle*
