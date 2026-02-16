# Lecture 11 — Particle in 2-D and 3-D Boxes — Degeneracy

**Reading:** Engel 4th ed., Chapter 4 (Sections 4.3–4.4)

## Learning Objectives

- Extend the particle-in-a-box solution to two and three dimensions using separation of variables
- Calculate energies and write wavefunctions for 2-D and 3-D boxes
- Identify and count degenerate states
- Explain the physical origin of degeneracy from symmetry
- Apply the 3-D box model to real systems (quantum dots, metals)

---

## 1. Particle in a 2-D Box

### The Potential

$$V(x,y) = \begin{cases} 0 & 0 \leq x \leq a, \; 0 \leq y \leq b \\ \infty & \text{otherwise} \end{cases}$$

### Separation of Variables

Assume $\psi(x,y) = X(x)\cdot Y(y)$.

The 2-D TISE separates into two independent 1-D problems:

$$-\frac{\hbar^2}{2m}\frac{d^2X}{dx^2} = E_x X, \qquad -\frac{\hbar^2}{2m}\frac{d^2Y}{dy^2} = E_y Y$$

### Solution

$$\psi_{n_x, n_y}(x,y) = \frac{2}{\sqrt{ab}}\sin\left(\frac{n_x\pi x}{a}\right)\sin\left(\frac{n_y\pi y}{b}\right)$$

$$\boxed{E_{n_x, n_y} = \frac{h^2}{8m}\left(\frac{n_x^2}{a^2} + \frac{n_y^2}{b^2}\right)}, \quad n_x, n_y = 1, 2, 3, \ldots$$

Two quantum numbers (one per degree of freedom) — a general rule.

> [!NOTE]
> **Concept Check 11.1**
> For a particle in a 2-D rectangular box with $a \neq b$, what is the expression for the ground-state energy? Is it possible for the ground state to be degenerate in this box?

---

## 2. Degeneracy in a Square Box

When $a = b$ (a **square** box):

$$E_{n_x, n_y} = \frac{h^2}{8ma^2}(n_x^2 + n_y^2)$$

Different quantum number combinations can give the **same energy**:

| $(n_x, n_y)$ | $n_x^2 + n_y^2$ | Degeneracy |
|-------------|----------------|------------|
| (1,1) | 2 | Non-degenerate |
| (1,2), (2,1) | 5 | 2-fold degenerate |
| (2,2) | 8 | Non-degenerate |
| (1,3), (3,1) | 10 | 2-fold degenerate |
| (2,3), (3,2) | 13 | 2-fold degenerate |

### Definition

**Degeneracy** = the number of linearly independent eigenfunctions sharing the same eigenvalue.

The energy level with $E = 5h^2/(8ma^2)$ is **2-fold degenerate** because two distinct states $\psi_{1,2}$ and $\psi_{2,1}$ have the same energy, even though they have different spatial probability distributions.

> [!NOTE]
> **Concept Check 11.2**
> If you have a square box ($a = b$) and you slightly stretch it in the $x$ direction such that $a \to 1.01b$, what happens to the energy levels $\psi_{1,2}$ and $\psi_{2,1}$? Are they still degenerate?

### Origin of Degeneracy: Symmetry

Degeneracy arises from the **symmetry** of the system. A square box has the symmetry of exchanging $x \leftrightarrow y$ (a $C_4$ rotation symmetry). When $a \neq b$ (rectangular box), this symmetry is broken and the degeneracy is **lifted** — $(1,2)$ and $(2,1)$ no longer have the same energy.

> **Key insight:** Symmetry → degeneracy. Breaking the symmetry → splitting of energy levels. This theme will recur throughout the course.

---

## 3. Particle in a 3-D Box

### General Rectangular Box

$$\psi_{n_x,n_y,n_z}(x,y,z) = \sqrt{\frac{8}{abc}}\sin\left(\frac{n_x\pi x}{a}\right)\sin\left(\frac{n_y\pi y}{b}\right)\sin\left(\frac{n_z\pi z}{c}\right)$$

$$\boxed{E_{n_x,n_y,n_z} = \frac{h^2}{8m}\left(\frac{n_x^2}{a^2} + \frac{n_y^2}{b^2} + \frac{n_z^2}{c^2}\right)}$$

### Cubic Box ($a = b = c$)

$$\psi_{n_x,n_y,n_z}(x,y,z) = \left(\frac{2}{a}\right)^{3/2}\sin\left(\frac{n_x\pi x}{a}\right)\sin\left(\frac{n_y\pi y}{a}\right)\sin\left(\frac{n_z\pi z}{a}\right)$$

$$E_{n_x,n_y,n_z} = \frac{h^2}{8ma^2}(n_x^2 + n_y^2 + n_z^2)$$

### Degeneracies in a Cubic Box

| Level | $(n_x, n_y, n_z)$ combinations | $n_x^2+n_y^2+n_z^2$ | Degeneracy |
|-------|-------------------------------|---------------------|------------|
| Ground | (1,1,1) | 3 | 1 |
| 1st excited | (2,1,1), (1,2,1), (1,1,2) | 6 | 3 |
| 2nd excited | (2,2,1), (2,1,2), (1,2,2) | 9 | 3 |
| 3rd excited | (3,1,1), (1,3,1), (1,1,3) | 11 | 3 |
| 4th excited | (2,2,2) | 12 | 1 |

### Accidental Degeneracy

Some degeneracies are purely **accidental** — arising from the specific form of the energy expression, not from a geometrical symmetry:

Example: $(3,3,1)$ and $(1,1,5)$ both give $n_x^2+n_y^2+n_z^2 = 19$. This 2-fold degeneracy exists even in a cube, beyond what the spatial symmetry alone would require.

---

## 4. Applications

### Quantum Dots

Semiconductor quantum dots are nanoscale crystals (2–10 nm) that confine electrons in all three dimensions. The particle-in-a-box model predicts:

$$\Delta E \propto \frac{1}{a^2}$$

Smaller dots → larger energy gaps → **blue-shifted** emission. This is why quantum dots of different sizes glow different colors under UV light and are used in modern display technology.

### Free-Electron Model of Metals

In the simplest model, conduction electrons in a metal move freely within a 3-D box (the crystal). The allowed energy levels fill up following the Pauli exclusion principle. The highest occupied energy is the **Fermi energy** $E_F$.

---

## 5. Counting States: Density of States (Preview)

For a 3-D box, the number of states with energy less than $E$ grows roughly as $E^{3/2}$. The **density of states** (number of states per unit energy) is:

$$g(E) \propto E^{1/2}$$

This concept becomes central in solid-state physics and statistical mechanics.

---

## Key Equations Summary

| Equation | Expression |
|----------|-----------|
| 2-D box energy | $E_{n_x,n_y} = \frac{h^2}{8m}\left(\frac{n_x^2}{a^2}+\frac{n_y^2}{b^2}\right)$ |
| 3-D box energy | $E_{n_x,n_y,n_z} = \frac{h^2}{8m}\left(\frac{n_x^2}{a^2}+\frac{n_y^2}{b^2}+\frac{n_z^2}{c^2}\right)$ |
| 3-D box wavefunctions | $\psi = \sqrt{8/(abc)}\prod_i\sin(n_i\pi r_i/\ell_i)$ |

## Recent Literature Spotlight

**"Squeezed Light and Angular Momentum in Gravitational-Wave Detection"**
*L. McCuller, LIGO Scientific Collaboration*, Physical Review X, **2023**, 13, 041021. [DOI](https://doi.org/10.1103/PhysRevX.13.041021)

This paper describes how quantized angular momentum states of light — specifically, the ladder operators $\hat{L}_+$ and $\hat{L}_-$ taught in this lecture — are exploited in the LIGO detector. By injecting squeezed states of light, the researchers reduce quantum noise below the Heisenberg uncertainty limit for specific angular momentum quadratures, enabling the detection of gravitational waves from distant cosmic events.

---

## Practice Problems

1. **2-D box.** List all energy levels up to $E = 20\,h^2/(8ma^2)$ for a particle in a square box. Indicate the degeneracy of each.

2. **Rectangular box.** A particle is in a 2-D box with $b = 2a$. Find the quantum numbers of the first five distinct energy levels and their degeneracies. Compare to the square box.

3. **Quantum dot.** A CdSe quantum dot has a radius of 3 nm. Using the particle-in-a-sphere model ($E_n \propto n^2/R^2$ with effective mass $m^* = 0.13\,m_e$), estimate the energy gap between the ground state and first excited state. What wavelength of light does this correspond to?

---

*Next lecture: Finite Potential Well & Quantum Tunneling*
