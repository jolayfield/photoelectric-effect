# Lecture 3 — Wave-Particle Duality & the de Broglie Relation

**Reading:** Engel 4th ed., Chapter 1 (Sections 1.5–1.7)

## Learning Objectives

- State and apply the de Broglie relation connecting wavelength and momentum
- Describe the Davisson-Germer experiment and explain its significance
- Interpret double-slit experiments for electrons and photons
- Articulate the principle of complementarity
- Assess when quantum effects are significant vs. negligible

---

## 1. De Broglie's Hypothesis (1924)

If electromagnetic radiation (classically a wave) can behave as particles (photons), Louis de Broglie proposed the converse: **particles of matter should exhibit wave-like properties**.

For a photon: $p = h/\lambda$. De Broglie generalized this to *all* matter:

$$\boxed{\lambda = \frac{h}{p} = \frac{h}{mv}}$$

where:
- $\lambda$ = **de Broglie wavelength**
- $m$ = mass of the particle
- $v$ = velocity of the particle
- $p = mv$ = momentum (nonrelativistic)

### When Are Quantum Effects Important?

Quantum behavior is observable when the de Broglie wavelength is comparable to the dimensions of the system.

| Object | Mass (kg) | Speed (m/s) | $\lambda$ |
|--------|----------|-------------|-----------|
| Baseball | 0.15 | 40 | $1.1 \times 10^{-34}$ m |
| Electron (100 eV) | $9.11 \times 10^{-31}$ | $5.9 \times 10^6$ | 0.12 nm |
| Neutron (thermal) | $1.67 \times 10^{-27}$ | 2200 | 0.18 nm |
| He atom (300 K) | $6.65 \times 10^{-27}$ | 1260 | 0.079 nm |

For macroscopic objects, $\lambda$ is incomprehensibly small — quantum interference effects vanish. For electrons and atoms, $\lambda$ is on the order of atomic spacings, and diffraction effects are observable.

> [!NOTE]
> **Concept Check 3.1**
> If a proton and an electron are moving at the same speed, which one has a longer de Broglie wavelength? Why?

---

## 2. Experimental Confirmation: Davisson-Germer Experiment (1927)

### Setup

Clinton Davisson and Lester Germer directed a beam of electrons at a nickel crystal and measured the intensity of scattered electrons as a function of angle.

### Results

They observed a strong peak in scattered intensity at specific angles — a **diffraction pattern** — exactly analogous to X-ray diffraction (Bragg diffraction).

### Bragg's Law

For constructive interference from crystal planes separated by distance $d$:

$$n\lambda = 2d\sin\theta$$

The wavelength inferred from the diffraction angles matched de Broglie's prediction perfectly.

### Significance

This was the first direct experimental proof that electrons — undeniably particles — exhibit wave behavior. De Broglie received the 1929 Nobel Prize, and Davisson shared the 1937 Nobel Prize for this discovery.

---

## 3. The Double-Slit Experiment

The double-slit experiment is the quintessential demonstration of wave-particle duality.

### With Classical Particles (e.g., bullets)

Particles pass through one slit or the other. The pattern on the detector is the *sum* of the two single-slit patterns — no interference.

### With Waves (e.g., water, light)

Waves pass through both slits, creating an **interference pattern** of alternating maxima and minima.

### With Electrons

When electrons pass through a double slit:
1. **High flux:** An interference pattern builds up — just like waves
2. **One electron at a time:** Each electron arrives at a single point on the detector (particle-like), but after many electrons accumulate, the interference pattern emerges
3. **Detector at one slit:** If we determine *which slit* the electron passes through, the interference pattern **disappears**

### Key Insight

Each electron somehow "interferes with itself." The electron does not split; rather, a **probability amplitude** (wavefunction) passes through both slits and interferes. The probability of detecting the electron at a given point is governed by the square of this amplitude:

$$P(x) = |\Psi(x)|^2$$

This probability interpretation will be formalized in the next chapter with the Schrödinger equation.

> [!NOTE]
> **Concept Check 3.2**
> In the double-slit experiment with single electrons, we say the electron "interferes with itself." If we place a detector to see which slit the electron goes through, why does the interference pattern disappear?

---

## 4. Complementarity and Uncertainty

### Bohr's Complementarity Principle

Wave and particle descriptions are **complementary** — both are needed for a complete description of quantum objects, but they cannot be observed simultaneously in the same experiment.

- Interference experiments reveal wave behavior
- Photoelectric/Compton experiments reveal particle behavior
- Measuring which path (particle info) destroys the interference pattern (wave info)

### Heisenberg's Uncertainty Principle (Preview)

De Broglie's relation has a profound consequence: if a particle has a definite wavelength (definite momentum), it extends over all space (completely delocalized). Localizing a particle requires superposing many wavelengths, which means the momentum becomes uncertain.

$$\boxed{\Delta x \cdot \Delta p_x \geq \frac{\hbar}{2}}$$

where $\hbar = h / 2\pi = 1.055 \times 10^{-34}$ J·s.

This is not a limitation of our instruments — it is a fundamental property of nature. We will derive it rigorously from the postulates of quantum mechanics in Week 3.

---

## 5. The Transition to Quantum Mechanics

Lectures 1–3 have established that:

1. Energy is quantized (Planck, blackbody radiation)
2. Light behaves as both wave and particle (Einstein, Compton)
3. Matter behaves as both wave and particle (de Broglie, Davisson-Germer)
4. A probability amplitude (wavefunction) governs the behavior of quantum objects
5. There are fundamental limits on what we can simultaneously know (uncertainty principle)

Classical mechanics cannot account for any of these observations. We need a new framework — **quantum mechanics** — built on the Schrödinger equation (next week).

---

## Key Equations Summary

| Equation | Expression |
|----------|-----------|
| de Broglie wavelength | $\lambda = h/p = h/(mv)$ |
| Bragg diffraction | $n\lambda = 2d\sin\theta$ |
| Probability density | $P(x) = \|\Psi(x)\|^2$ |
| Uncertainty principle | $\Delta x\,\Delta p_x \geq \hbar/2$ |
| Reduced Planck's constant | $\hbar = h/(2\pi)$ |

## Recent Literature Spotlight

**"Quantum Superposition of Molecules Beyond 25 kDa"**
*Y. Y. Fein, P. Geyer, P. Zwick, F. Kiałka, S. Pedalino, M. Mayor, S. Gerlich, M. Arndt*, Nature Physics, **2019**, 15, 1242–1245. [DOI](https://doi.org/10.1038/s41567-019-0663-9)

This landmark experiment demonstrated matter-wave interference of molecules exceeding 25,000 daltons — the heaviest objects to exhibit wave-particle duality to date. Using a Talbot-Lau interferometer, the researchers showed that functionalized oligoporphyrin molecules (each containing over 2,000 atoms) produce clear quantum interference fringes, pushing the boundary of the quantum-classical transition.

---

## Practice Problems

1. **De Broglie wavelength.** Calculate the de Broglie wavelength of (a) an electron accelerated through a potential difference of 200 V, and (b) a proton with the same kinetic energy. Why is electron diffraction much more commonly used than proton diffraction?

2. **Davisson-Germer.** In the Davisson-Germer experiment, electrons accelerated through 54 V produced a diffraction maximum at $\theta = 50°$ from a nickel crystal ($d = 0.091$ nm). Verify that the observed angle is consistent with the de Broglie wavelength.

3. **Uncertainty.** An electron is confined to a region of width $\Delta x = 0.10$ nm (approximately one atomic diameter). Estimate the minimum uncertainty in its velocity. Compare this to the speed of light.

---

*Next week: The Schrödinger Equation*
