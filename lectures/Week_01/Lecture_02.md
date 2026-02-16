# Lecture 2 — The Photoelectric Effect & Compton Scattering

**Reading:** Engel 4th ed., Chapter 1 (Sections 1.3–1.4)

## Learning Objectives

- Describe the photoelectric effect and its key experimental features
- Apply Einstein's photoelectric equation to calculate kinetic energies and threshold frequencies
- Explain why the classical wave theory of light fails to account for the photoelectric effect
- Describe Compton scattering and derive the Compton wavelength shift
- Recognize that electromagnetic radiation carries momentum in discrete quanta (photons)

---

## 1. The Photoelectric Effect

### Experimental Setup

When light strikes a clean metal surface, electrons can be ejected. The emitted electrons are called **photoelectrons**. A collector electrode at a variable potential measures the resulting current.

### Key Experimental Observations

1. **Threshold frequency:** No electrons are emitted below a certain frequency $\nu_0$, regardless of light intensity
2. **Instantaneous emission:** Electrons are emitted immediately (< 10⁻⁹ s), with no time delay
3. **Kinetic energy depends on frequency:** The maximum kinetic energy of emitted electrons increases linearly with frequency, independent of intensity
4. **Current depends on intensity:** The number of emitted electrons (photocurrent) is proportional to light intensity

### Classical Predictions vs. Experiment

| Feature | Classical Prediction | Experimental Result |
|---------|---------------------|-------------------|
| Threshold frequency | No threshold; sufficient intensity should eject electrons at any frequency | Sharp threshold exists |
| Time delay | Energy accumulates slowly; delay expected at low intensity | Emission is instantaneous |
| KE dependence | KE should depend on intensity | KE depends on frequency only |

Classical wave theory fails on all counts.

### Einstein's Explanation (1905)

Einstein proposed that light consists of discrete energy packets — **photons** — each carrying energy:

$$E_{\text{photon}} = h\nu$$

When a photon strikes the metal, it transfers all its energy to a single electron. The electron must overcome the **work function** $\phi$ (the minimum energy needed to escape the surface). Any remaining energy becomes kinetic energy:

$$\boxed{KE_{\max} = h\nu - \phi}$$

or equivalently:

$$\frac{1}{2}m_e v_{\max}^2 = h\nu - \phi$$

The **threshold frequency** is:

$$\nu_0 = \frac{\phi}{h}$$

Below this frequency, a single photon lacks sufficient energy to liberate an electron.

### The Stopping Potential

The maximum kinetic energy can be measured using a **stopping potential** $V_s$:

$$eV_s = KE_{\max} = h\nu - \phi$$

A plot of $V_s$ vs. $\nu$ is linear with slope $h/e$ and intercept $-\phi/e$.

> **Historical note:** Robert Millikan experimentally confirmed Einstein's equation in 1916, despite initially trying to disprove it. Einstein received the 1921 Nobel Prize primarily for this work.

> [!NOTE]
> **Concept Check 2.1**
> If you double the intensity of light striking a metal surface while keeping the frequency constant (and above $\nu_0$), how do the maximum kinetic energy and the number of emitted electrons change?

---

## 2. Work Functions of Common Metals

| Metal | $\phi$ (eV) | $\nu_0$ (10¹⁴ Hz) | $\lambda_0$ (nm) |
|-------|------------|-------------------|-----------------|
| Cs | 2.1 | 5.1 | 590 |
| Na | 2.3 | 5.6 | 540 |
| Cu | 4.7 | 11.3 | 264 |
| Pt | 5.6 | 13.5 | 222 |

---

## 3. Compton Scattering (1923)

### The Experiment

Arthur Compton directed X-rays at a graphite target and measured the scattered radiation. He observed that the scattered X-rays had a **longer wavelength** than the incident beam, and the wavelength shift depended on the scattering angle.

### Classical Failure

Classical electromagnetic theory predicts that scattered radiation has the **same** frequency as the incident radiation (Thomson scattering). The observed wavelength shift cannot be explained classically.

### Quantum Explanation

Compton treated the X-ray beam as a stream of photons, each with:
- Energy: $E = h\nu$
- Momentum: $p = h\nu / c = h / \lambda$

The scattering is a **collision** between a photon and an electron, governed by conservation of energy and momentum.

### The Compton Wavelength Shift

Applying conservation laws to the photon-electron collision:

$$\boxed{\Delta\lambda = \lambda' - \lambda = \frac{h}{m_e c}(1 - \cos\theta)}$$

where:
- $\lambda$ = incident wavelength
- $\lambda'$ = scattered wavelength
- $\theta$ = scattering angle
- $\frac{h}{m_e c} = 2.426 \times 10^{-12}$ m is the **Compton wavelength** of the electron

Key features:
- $\theta = 0°$: no shift (forward scattering)
- $\theta = 90°$: $\Delta\lambda = h/(m_e c)$
- $\theta = 180°$: $\Delta\lambda = 2h/(m_e c)$ (maximum shift, backscattering)

### Significance

Compton scattering provides direct evidence that photons carry **momentum** as well as energy, behaving as particles in collisions. This was powerful confirmation of the photon concept.

> [!NOTE]
> **Concept Check 2.2**
> In a Compton scattering experiment, why do we observe a range of wavelengths in the scattered radiation rather than a single shifted wavelength? (Hint: Think about what the scattering angle $\theta$ represents).

---

## 4. The Photon — Summary of Properties

$$E = h\nu = \frac{hc}{\lambda}$$

$$p = \frac{h}{\lambda} = \frac{h\nu}{c} = \frac{E}{c}$$

$$m_{\text{rest}} = 0 \quad (\text{photons are massless})$$

The photon is a quantum of electromagnetic radiation that exhibits both wave properties (interference, diffraction) and particle properties (photoelectric effect, Compton scattering).

---

## Key Equations Summary

| Equation | Expression |
|----------|-----------|
| Photon energy | $E = h\nu = hc/\lambda$ |
| Photoelectric equation | $KE_{\max} = h\nu - \phi$ |
| Threshold frequency | $\nu_0 = \phi / h$ |
| Stopping potential | $eV_s = h\nu - \phi$ |
| Photon momentum | $p = h/\lambda$ |
| Compton shift | $\Delta\lambda = \frac{h}{m_ec}(1-\cos\theta)$ |

## Recent Literature Spotlight

**"Field-Driven Attosecond Charge Dynamics in Germanium"**
*M. Lucchini, S. A. Sato, G. D. Lucarelli, B. Moio, G. Inzani, et al.*, Nature Photonics, **2023**, 17, 1059–1065. [DOI](https://doi.org/10.1038/s41566-023-01274-1)

Using attosecond transient reflectivity spectroscopy, the authors tracked the ultrafast injection of charge carriers into the conduction band of germanium with sub-femtosecond time resolution. This work provides a direct window into the photoelectric effect at its most fundamental timescale — showing that the "instantaneous" ejection of electrons actually unfolds over attosecond delays governed by the crystal band structure.

---

## Practice Problems

1. **Photoelectric effect.** Light of wavelength 250 nm strikes a sodium surface ($\phi = 2.3$ eV). (a) Calculate the energy of each photon in eV. (b) Calculate the maximum kinetic energy of the emitted electrons. (c) What is the stopping potential?

2. **Threshold wavelength.** What is the longest wavelength of light that can eject electrons from a platinum surface ($\phi = 5.6$ eV)?

3. **Compton scattering.** X-rays of wavelength 0.0711 nm are scattered from a carbon target. Calculate the wavelength of the X-rays scattered at (a) 45°, (b) 90°, and (c) 180°.

---

*Next lecture: Wave-Particle Duality & the de Broglie Relation*
