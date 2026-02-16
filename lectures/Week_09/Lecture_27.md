# Lecture 27 — The Hydrogen Emission Spectrum & Selection Rules

**Reading:** Engel 4th ed., Chapter 9 (Sections 9.7–9.8)

## Learning Objectives

- Derive the Rydberg formula from the hydrogen energy eigenvalues
- Identify the Lyman, Balmer, Paschen, and Brackett series and their spectral regions
- State and justify the selection rules for electric dipole transitions in hydrogen
- Explain the connection between selection rules and angular momentum conservation
- Discuss the limitations of the hydrogen model and preview multi-electron effects

---

## 1. The Hydrogen Emission Spectrum

When hydrogen atoms are excited (by electrical discharge, heat, etc.), they emit light at discrete wavelengths. These form the **line spectrum** of hydrogen.

### The Rydberg Formula

From $E_n = -13.6\text{ eV}/n^2$, the photon emitted in a $n_i \to n_f$ transition has:

$$\boxed{\tilde{\nu} = R_H\left(\frac{1}{n_f^2} - \frac{1}{n_i^2}\right), \quad n_i > n_f}$$

where the **Rydberg constant** is:

$$R_H = \frac{\mu e^4}{8\epsilon_0^2 h^3 c} = 109{,}677\text{ cm}^{-1}$$

### Spectral Series

| Series | $n_f$ | $n_i$ | Region | Notable lines |
|--------|-------|-------|--------|--------------|
| **Lyman** | 1 | 2, 3, 4, … | UV | Ly-α (121.6 nm) |
| **Balmer** | 2 | 3, 4, 5, … | Visible | H-α (656.3 nm, red), H-β (486.1 nm, cyan) |
| **Paschen** | 3 | 4, 5, 6, … | Near-IR | |
| **Brackett** | 4 | 5, 6, 7, … | IR | |
| **Pfund** | 5 | 6, 7, 8, … | Far-IR | |

### Series Limit

As $n_i \to \infty$, the lines converge to the **series limit**:

$$\tilde{\nu}_{\text{limit}} = R_H / n_f^2$$

Beyond this, the spectrum becomes continuous (ionization).

> [!NOTE]
> **Concept Check 27.1**
> Which series of the hydrogen spectrum—Lyman or Balmer—involves higher energy photons? Explain your answer in terms of the initial and final principal quantum numbers.

---

## 2. Selection Rules for Hydrogen

Not all transitions between energy levels are allowed. The electric dipole selection rules for the hydrogen atom are:

$$\boxed{\Delta l = \pm 1, \quad \Delta m_l = 0, \pm 1}$$

There is **no restriction on $\Delta n$** (any change in $n$ is allowed).

### Physical Justification

A photon carries one unit of angular momentum ($l_{\text{photon}} = 1$). Conservation of angular momentum requires that the atom's angular momentum change by exactly $\pm 1$:

$$|l_i - 1| \leq l_f \leq l_i + 1, \quad l_f \neq l_i \implies \Delta l = \pm 1$$

### Symmetry Justification

The transition dipole moment integral:

$$\mu_{fi} = \langle n_f, l_f, m_f | \hat{\mathbf{r}} | n_i, l_i, m_i \rangle$$

The position operator $\hat{\mathbf{r}}$ has angular parts that transform as $l = 1$ (like the $p$ orbitals). By the triangle rule for angular momentum coupling:

$$\Gamma_{l_f} \otimes \Gamma_1 \otimes \Gamma_{l_i} \supseteq \Gamma_0 \quad \Longleftrightarrow \quad \Delta l = \pm 1$$

### Allowed and Forbidden Transitions

| Transition | $\Delta l$ | Allowed? |
|-----------|----------|---------|
| $2s \to 1s$ | 0 | ✗ (forbidden) |
| $2p \to 1s$ | $-1$ | ✓ |
| $3s \to 2p$ | $+1$ | ✓ |
| $3d \to 1s$ | $-2$ | ✗ |
| $3d \to 2p$ | $-1$ | ✓ |
| $3s \to 1s$ | $0$ | ✗ |

> [!NOTE]
> **Concept Check 27.2**
> According to the selection rules ($\Delta l = \pm 1$), is the transition from a $3d$ orbital to a $2s$ orbital allowed? Why or why not?

The $2s$ state is **metastable** — it cannot decay to $1s$ by electric dipole radiation.

---

## 3. Grotrian Diagram

A Grotrian (energy level) diagram shows allowed transitions as arrows connecting energy levels, arranged by $l$:

```
   l=0(s)    l=1(p)    l=2(d)    l=3(f)
n=4  ——        ——        ——        ——
       \      / \      /
n=3  ——   ——   ——   ——
       \  / \  /
n=2  ——    ——
       \  /
n=1  ——

(arrows only connect adjacent l columns)
```

---

## 4. Emission vs. Absorption

- **Emission**: atom in excited state $\to$ lower state; photon emitted
- **Absorption**: atom in lower state + photon $\to$ excited state
- Same selection rules apply to both

In practice, the hydrogen **absorption spectrum** shows primarily the Lyman series (from $n = 1$, since at room temperature virtually all atoms are in the ground state).

---

## 5. Beyond Hydrogen: Preview

### Fine Structure

The actual hydrogen spectrum shows closely spaced **doublets** due to:
- **Spin-orbit coupling**: interaction between electron spin and orbital angular momentum
- **Relativistic corrections**: electron velocity is significant fraction of $c$ near the nucleus

These effects are small (~$\alpha^2 E$, where $\alpha \approx 1/137$ is the fine-structure constant) and will be revisited in Weeks 10–11.

### Multi-Electron Atoms

For atoms with more than one electron:
- The $n^2$-fold degeneracy is **broken** — energy depends on both $n$ and $l$
- Electron-electron repulsion makes the problem analytically unsolvable
- We need approximate methods (Hartree-Fock, DFT) — coming in Weeks 10 and 13–14

---

## Key Equations Summary

| Equation | Expression |
|----------|-----------|
| Rydberg formula | $\tilde{\nu} = R_H(1/n_f^2 - 1/n_i^2)$ |
| Rydberg constant | $R_H = 109{,}677$ cm⁻¹ |
| Selection rules | $\Delta l = \pm 1$, $\Delta m_l = 0, \pm 1$ |
| Photon energy | $E = hc\tilde{\nu}$ |
| Series limit | $\tilde{\nu}_{\infty} = R_H/n_f^2$ |

## Recent Literature Spotlight

**"Tentative Detection of Helium in the Atmosphere of the Hot Jupiter HD 189733 b"**
*K. Paragas, M. W. McElwain, G. Fu, K. B. Stevenson, et al.*, The Astronomical Journal, **2022**, 164, 59. [DOI](https://doi.org/10.3847/1538-3881/ac7c20)

Metastable helium (2³S₁) is emerging as a powerful probe of exoplanet atmospheric escape. This study reports the detection of helium absorption at 10,833 Å in the transmission spectrum of a hot Jupiter — matching the $n=2$ triplet-to-triplet transition of the helium atom. Each spectral line corresponds directly to the hydrogen-like energy levels and selection rules taught in this lecture.

---

## Practice Problems

1. **Balmer series.** Calculate the wavelengths (in nm) of the first four lines of the Balmer series. In what region of the spectrum does each appear?

2. **Selection rules.** For a hydrogen atom in the $4d$ state, list all allowed transitions and the series each belongs to. Which transition produces the longest wavelength photon?

3. **Ionization from excited states.** How much energy (in eV) is needed to ionize a hydrogen atom from (a) the ground state, (b) the $n = 2$ state, (c) the $n = 5$ state? What wavelength of light would be needed in each case?

---

*Next week: Many-Electron Atoms*
