# Lecture 39 — Fluorescence, Phosphorescence & Photochemistry

**Reading:** Engel 4th ed., Chapter 14 (Sections 14.5–14.8)

## Learning Objectives

- Describe the Jablonski diagram and the processes following photon absorption
- Distinguish between fluorescence and phosphorescence
- Explain internal conversion, intersystem crossing, and vibrational relaxation
- Define quantum yield and fluorescence lifetime
- Describe applications: lasers, fluorescent probes, photodynamic therapy, solar cells

---

## 1. The Jablonski Diagram

After absorbing a photon, a molecule can relax via several pathways:

```
S₂ ——————
    ↓ IC
S₁ ——————  ———————  T₁ ——————
    ↓ VR        ISC →    ↓ VR
S₁(v=0) ——           T₁(v=0) ——
    ↓ Fluorescence      ↓ Phosphorescence
S₀ ——————           S₀ ——————
```

| Process | Abbreviation | Timescale | $\Delta S$ |
|---------|-------------|-----------|-----------|
| Absorption | Abs | 10⁻¹⁵ s | 0 |
| Vibrational relaxation | VR | 10⁻¹²–10⁻¹⁰ s | 0 |
| Internal conversion | IC | 10⁻¹²–10⁻⁹ s | 0 |
| Fluorescence | F | 10⁻⁹–10⁻⁷ s | 0 |
| Intersystem crossing | ISC | 10⁻⁸–10⁻³ s | ±1 |
| Phosphorescence | P | 10⁻³–10² s | ±1 |

---

## 2. Fluorescence

### Characteristics

- **Spin-allowed**: $S_1 \to S_0$ ($\Delta S = 0$)
- **Fast**: lifetime $\tau_f \sim 10^{-9}$–$10^{-7}$ s (nanoseconds)
- **Stokes shift**: fluorescence is always at **longer wavelength** (lower energy) than absorption because of vibrational relaxation in $S_1$

### Kasha's Rule

> Fluorescence (and phosphorescence) occurs from the **lowest excited state** of a given multiplicity, regardless of which state was initially excited.

This is because internal conversion and vibrational relaxation are faster than emission.

### Mirror Image Rule

The fluorescence spectrum is often approximately the mirror image of the $S_0 \to S_1$ absorption band, shifted to longer wavelength. This arises because:
- Absorption: $v'' = 0 \to v' = 0, 1, 2, \ldots$ (vibrational progression in $S_1$)
- Fluorescence: $v' = 0 \to v'' = 0, 1, 2, \ldots$ (vibrational progression in $S_0$)

> [!NOTE]
> **Concept Check 39.1**
> Fluorescence is almost always observed at a longer wavelength than the corresponding absorption. What is this phenomenon called, and what physical process (occurring immediately after absorption) is responsible for it?

---

## 3. Phosphorescence

### Characteristics

- **Spin-forbidden**: $T_1 \to S_0$ ($\Delta S = -1$)
- **Slow**: lifetime $\tau_p \sim 10^{-3}$–$10^2$ s (milliseconds to seconds)
- **Lower energy** than fluorescence: $T_1 < S_1$ (exchange stabilization)
- Requires **intersystem crossing** ($S_1 \to T_1$), enhanced by spin-orbit coupling

### Heavy Atom Effect

Heavy atoms (Br, I, transition metals) increase spin-orbit coupling, which:
- Enhances ISC ($S_1 \to T_1$)
- Increases phosphorescence intensity
- Decreases fluorescence (competing pathway)

> [!NOTE]
> **Concept Check 39.2**
> How does the "heavy atom effect" influence the competition between fluorescence and phosphorescence? Which process is enhanced by the presence of a heavy atom like Iodine?

---

## 4. Quantum Yield and Lifetimes

### Fluorescence Quantum Yield

$$\Phi_f = \frac{\text{photons emitted}}{\text{photons absorbed}} = \frac{k_f}{k_f + k_{IC} + k_{ISC}}$$

where $k_f$, $k_{IC}$, and $k_{ISC}$ are rate constants for fluorescence, internal conversion, and intersystem crossing.

### Fluorescence Lifetime

$$\tau_f = \frac{1}{k_f + k_{IC} + k_{ISC}}$$

### Quenching

**Fluorescence quenching** reduces $\Phi_f$ via additional deactivation pathways:

**Stern-Volmer equation:**

$$\frac{\Phi_f^0}{\Phi_f} = 1 + K_{SV}[Q]$$

where $[Q]$ is the quencher concentration and $K_{SV} = k_q\tau_0$ is the Stern-Volmer constant.

---

## 5. Applications

### Lasers (Light Amplification by Stimulated Emission of Radiation)

Requirements:
1. **Population inversion**: more molecules in excited state than ground state
2. **Stimulated emission**: incoming photon triggers emission of identical photon
3. **Optical cavity**: mirrors to amplify the signal

### FRET (Förster Resonance Energy Transfer)

Non-radiative energy transfer between a donor and acceptor chromophore:

$$E_{\text{FRET}} = \frac{1}{1 + (r/R_0)^6}$$

where $R_0$ is the Förster radius (~2–8 nm). Used as a "molecular ruler" in biochemistry.

### Photodynamic Therapy

- Photosensitizer absorbs light → ISC → triplet state
- Triplet transfers energy to molecular oxygen: $^3O_2 \to ^1O_2$ (singlet oxygen)
- Singlet oxygen destroys tumor cells

### Photovoltaics

The photovoltaic effect converts light to electrical energy through:
1. Photon absorption creates electron-hole pair
2. Charge separation at a junction
3. Electrons flow through external circuit

---

## 6. Summary of Photophysical Processes

| Process | Radiative? | $\Delta S$ | Timescale | Energy change |
|---------|-----------|-----------|-----------|--------------|
| Absorption | Yes | 0 | fs | $\uparrow$ |
| Fluorescence | Yes | 0 | ns | $\downarrow$ |
| Phosphorescence | Yes | $\neq 0$ | ms–s | $\downarrow$ |
| IC | No | 0 | ps–ns | $\downarrow$ |
| ISC | No | $\neq 0$ | ns–ms | $\downarrow$ |
| VR | No | 0 | ps | $\downarrow$ |

---

## Key Equations Summary

| Equation | Expression |
|----------|-----------|
| Quantum yield | $\Phi_f = k_f/(k_f+k_{IC}+k_{ISC})$ |
| Lifetime | $\tau = 1/(k_f+k_{IC}+k_{ISC})$ |
| Stern-Volmer | $\Phi_f^0/\Phi_f = 1+K_{SV}[Q]$ |
| FRET efficiency | $E = 1/[1+(r/R_0)^6]$ |
| Stokes shift | $\Delta\tilde{\nu} = \tilde{\nu}_{abs} - \tilde{\nu}_{em} > 0$ |

## Recent Literature Spotlight

**"Highly Efficient Organic Light-Emitting Diodes from Delayed Fluorescence"**
*H. Uoyama, K. Goushi, K. Shizu, H. Nomura, C. Adachi*, Nature, **2012**, 492, 234–238. [DOI](https://doi.org/10.1038/nature11687)

This landmark paper introduced thermally activated delayed fluorescence (TADF) as a mechanism for achieving nearly 100% internal quantum efficiency in organic LEDs without heavy metals. By engineering a small singlet-triplet energy gap ($\Delta E_{ST}$) through twisted donor-acceptor molecular design, the authors enabled reverse intersystem crossing ($T_1 \to S_1$) — directly exploiting the singlet/triplet state energetics and spin selection rules covered in this lecture.

---

## Practice Problems

1. **Jablonski diagram.** A molecule has $k_f = 10^8$ s⁻¹, $k_{IC} = 10^7$ s⁻¹, $k_{ISC} = 5 \times 10^7$ s⁻¹. Calculate (a) the fluorescence lifetime, (b) the fluorescence quantum yield, and (c) the phosphorescence yield (assuming all ISC leads to phosphorescence).

2. **Stern-Volmer.** A fluorescent probe has $\tau_0 = 5$ ns. Adding a quencher at 0.01 M reduces the fluorescence intensity by 30%. Calculate $K_{SV}$ and $k_q$.

3. **Heavy atom effect.** Explain why naphthalene shows strong fluorescence but weak phosphorescence, while 1-bromonaphthalene shows weak fluorescence but strong phosphorescence.

---

*Next week: Computational Chemistry, NMR Spectroscopy & Course Review*
