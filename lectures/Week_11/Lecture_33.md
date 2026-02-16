# Lecture 33 — Atomic Spectroscopy & Selection Rules

**Reading:** Engel 4th ed., Chapter 11 (Sections 11.6–11.8)

## Learning Objectives

- State and apply the selection rules for multi-electron atoms ($\Delta L$, $\Delta S$, $\Delta J$)
- Interpret Grotrian diagrams for multi-electron atoms
- Predict allowed and forbidden transitions from term symbols
- Describe the features of atomic emission and absorption spectra
- Explain the singlet-triplet distinction in helium and its spectroscopic implications

---

## 1. Selection Rules for Multi-Electron Atoms

### Electric Dipole Selection Rules (LS coupling)

$$\boxed{\Delta S = 0, \quad \Delta L = 0, \pm 1, \quad \Delta J = 0, \pm 1 \text{ (but not } J=0 \to J=0\text{)}}$$

$$\Delta M_J = 0, \pm 1$$

Additionally, for a single-electron transition: $\Delta l = \pm 1$ (the electron that "jumps" still must change $l$ by 1).

### Physical Justification

- $\Delta S = 0$: the photon carries no spin; it cannot flip electron spin
- $\Delta L = 0, \pm 1$: from the triangle rule for coupling photon angular momentum ($l = 1$) with the atom
- $\Delta J = 0, \pm 1$: from the triangle rule for $J$

### Forbidden Transitions

Transitions violating these rules are "**forbidden**" — they can still occur but at rates $\sim 10^6$ times slower (via magnetic dipole, electric quadrupole, or spin-orbit–induced mixing).

> [!NOTE]
> **Concept Check 33.1**
> Explain why $\Delta S = 0$ is a strict selection rule for electric dipole transitions. What is it about the interaction between light and the atom that makes spin-flips highly unlikely?

---

## 2. Helium: Singlet-Triplet Separation

### Two "Independent" Systems

Because $\Delta S = 0$, singlet ($S = 0$) and triplet ($S = 1$) states of helium form **separate spectral systems** with no electric dipole transitions between them.

Historically: "**parahelium**" (singlets) and "**orthohelium**" (triplets) — once thought to be different elements!

### Singlet States

$^1S_0$, $^1P_1$, $^1D_2$, … — only one $M_S$ value → single lines

### Triplet States

$^3S_1$, $^3P_{0,1,2}$, $^3D_{1,2,3}$, … — three $M_S$ values → fine structure multiplets

### The Metastable $2\,^3S_1$ State

The $2\,^3S_1$ state cannot decay to $1\,^1S_0$ because:
- $\Delta S = 1$ (forbidden)
- $\Delta L = 0$ (allowed but $S = s$)

This makes it **metastable** with a lifetime of ~7900 s (> 2 hours!) — compared to ~10⁻⁸ s for allowed transitions.

> [!NOTE]
> **Concept Check 33.2**
> Why did early scientists believe that "parahelium" and "orthohelium" were two different gases? How does the $\Delta S = 0$ selection rule explain the lack of transitions between singlet and triplet states?

---

## 3. Grotrian Diagrams for Multi-Electron Atoms

Grotrian diagrams for multi-electron atoms are organized by:
- Columns: different $L$ values ($S$, $P$, $D$, $F$, …)
- Separate panels: different multiplicities (singlets, doublets, triplets)
- Allowed transitions: arrows connecting terms following selection rules

### Sodium Grotrian Diagram

Sodium ($[Ne]\,3s^1$) has doublet terms only ($S = 1/2$):

```
     ²S      ²P       ²D       ²F
5 —— ——      ——       ——       ——
4 —— ——      ——       ——       ——
3 ——         ——       ——
     \      / \      ..
      \    /   \    ...
       \  /     \  ...
        \/       \/
        3s       
```

Key series:
- **Sharp**: $n\,^2S \to 3\,^2P$
- **Principal**: $n\,^2P \to 3\,^2S$ (includes the D-line)
- **Diffuse**: $n\,^2D \to 3\,^2P$
- **Fundamental (Bergmann)**: $n\,^2F \to 3\,^2D$

The letters $S$, $P$, $D$, $F$ for angular momentum states originate from these spectral series!

---

## 4. The Alkali Metal Spectra

### Quantum Defect

For alkali metals (one valence electron outside a closed core):

$$E_{n,l} = -\frac{R_H}{(n - \delta_l)^2}$$

where $\delta_l$ is the **quantum defect** — larger for $s$ electrons (more penetrating) than for $d$ or $f$ electrons:

| Li | $\delta_s$ | $\delta_p$ | $\delta_d$ |
|----|----------|----------|----------|
| | 0.41 | 0.04 | 0.00 |

| Na | $\delta_s$ | $\delta_p$ | $\delta_d$ |
|----|----------|----------|----------|
| | 1.37 | 0.88 | 0.01 |

---

## 5. X-Ray Spectroscopy

### Characteristic X-Rays

When a high-energy electron knocks out a core electron (e.g., $1s$), an outer electron fills the vacancy, emitting an X-ray photon.

**Moseley's Law** (1913):

$$\sqrt{\nu} = a(Z - b)$$

where $a$ and $b$ are constants for each spectral series. This established that **atomic number** (not atomic weight) determines chemical identity.

### X-Ray Lines

| Transition | Name | Typical energy |
|-----------|------|---------------|
| $L \to K$ | $K_\alpha$ | keV range |
| $M \to K$ | $K_\beta$ | Slightly higher |
| $M \to L$ | $L_\alpha$ | Lower energy |

Selection rules still apply within each shell.

---

## Key Equations Summary

| Equation | Expression |
|----------|-----------|
| Selection rules (LS) | $\Delta S = 0$, $\Delta L = 0, \pm1$, $\Delta J = 0, \pm1$ (not $0 \to 0$) |
| Quantum defect | $E = -R_H/(n - \delta_l)^2$ |
| Moseley's law | $\sqrt{\nu} = a(Z-b)$ |

## Recent Literature Spotlight

**"Radiative Lifetimes and Transition Probabilities of Vanadium and Chromium Ions"**
*A. Kramida, G. Nave*, Physical Review A, **2023**, 109, 022813. [DOI](https://doi.org/10.1103/PhysRevA.109.022813)

State-of-the-art measurements of radiative lifetimes and oscillator strengths for transition-metal ions require careful accounting of electronic configuration mixing and term symbol assignments. This paper presents benchmark-quality data for V and Cr ions, using the same Russell-Saunders coupling scheme and selection rules ($\Delta L = \pm 1$, $\Delta S = 0$) derived in this lecture to classify the observed spectral lines.

---

## Practice Problems

1. **Allowed transitions.** Which of the following transitions in calcium are allowed? (a) $^1S_0 \to ^1P_1$, (b) $^3P_1 \to ^1S_0$, (c) $^3D_2 \to ^3P_1$, (d) $^1D_2 \to ^1S_0$, (e) $^3P_0 \to ^3P_1$.

2. **Sodium spectrum.** The first four lines of the principal series of sodium (transitions $n\,^2P_{1/2,3/2} \to 3\,^2S_{1/2}$) are observed at 589.0/589.6, 330.2/330.3, 285.3/285.3, and 268.0/268.0 nm. Why does the doublet splitting decrease for higher $n$?

3. **Moseley's law.** The $K_\alpha$ X-ray frequencies for several elements are: Ti ($Z=22$, $\nu = 1.09 \times 10^{18}$ Hz), Fe ($Z=26$, $\nu = 1.65 \times 10^{18}$ Hz), Cu ($Z=29$, $\nu = 2.18 \times 10^{18}$ Hz). Verify Moseley's law by plotting $\sqrt{\nu}$ vs. $Z$, and determine the screening constant $b$.

---

*Next week: The Chemical Bond in Diatomic Molecules*
