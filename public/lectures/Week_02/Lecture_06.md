# Lecture 6 — Free Particle & Particle in a 1-D Infinite Box

**Reading:** Engel 4th ed., Chapter 4 (Sections 4.1–4.2)

## Learning Objectives

- Solve the TISE for a free particle and discuss the continuous energy spectrum
- Solve the TISE for a particle in a 1-D infinite square well by applying boundary conditions
- Sketch the wavefunctions and probability densities for the lowest energy levels
- Explain quantization as a consequence of boundary conditions
- Calculate energies, wavelengths, and transition frequencies for confined particles

---

## 1. The Free Particle ($V = 0$ everywhere)

The TISE becomes:

$$-\frac{\hbar^2}{2m}\frac{d^2\psi}{dx^2} = E\psi$$

$$\frac{d^2\psi}{dx^2} = -k^2\psi, \quad \text{where } k = \frac{\sqrt{2mE}}{\hbar}$$

**General solution:**

$$\psi(x) = Ae^{ikx} + Be^{-ikx}$$

- $Ae^{ikx}$: traveling wave moving in $+x$ direction with momentum $p = +\hbar k$
- $Be^{-ikx}$: traveling wave moving in $-x$ direction with momentum $p = -\hbar k$

**Energy:** $E = \frac{\hbar^2 k^2}{2m} = \frac{p^2}{2m}$ — any non-negative value is allowed (continuous spectrum).

**Key point:** No boundary conditions → no quantization. The free particle has a continuous energy spectrum.

> [!NOTE]
> **Concept Check 6.1**
> A free particle is described by the state $\psi(x) = Ae^{ikx}$. If you measure the momentum of this particle, what result(s) can you obtain? What is the uncertainty in its position ($\Delta x$)?

---

## 2. Particle in a 1-D Infinite Square Well (Particle in a Box)

### The Potential

$$V(x) = \begin{cases} 0 & 0 \leq x \leq a \\ \infty & x < 0 \text{ or } x > a \end{cases}$$

The particle is confined to the region $[0, a]$ by infinitely high walls.

### Boundary Conditions

Since $V = \infty$ outside the box, $\psi = 0$ for $x \leq 0$ and $x \geq a$.

Continuity of $\psi$ requires:

$$\psi(0) = 0, \qquad \psi(a) = 0$$

### Solution Inside the Box

The TISE inside ($V = 0$):

$$\frac{d^2\psi}{dx^2} = -k^2\psi, \quad k = \frac{\sqrt{2mE}}{\hbar}$$

General solution: $\psi(x) = C e^{ikx} + D e^{-ikx}$

**From Exponential to Trigonometric Form:**
For a confined particle, it is often more convenient to express the wavefunction in terms of trigonometric functions. Using Euler’s formula, $e^{\pm ikx} = \cos(kx) \pm i\sin(kx)$, we can rewrite the general solution:

$$\psi(x) = C(\cos(kx) + i\sin(kx)) + D(\cos(kx) - i\sin(kx))$$
$$\psi(x) = (C+D)\cos(kx) + i(C-D)\sin(kx)$$

By defining new constants $A = i(C-D)$ and $B = C+D$, we obtain:
$$\psi(x) = A\sin(kx) + B\cos(kx)$$

This form makes applying the boundary conditions at $x=0$ much simpler.

**Apply $\psi(0) = 0$:**

$$A\sin(0) + B\cos(0) = B = 0$$

So $\psi(x) = A\sin(kx)$.

**Apply $\psi(a) = 0$:**

$$A\sin(ka) = 0$$

Since $A \neq 0$ (otherwise $\psi = 0$ everywhere), we need $\sin(ka) = 0$:

$$ka = n\pi, \quad n = 1, 2, 3, \ldots$$

(We exclude $n = 0$ because it gives $\psi = 0$, and negative $n$ values give the same functions.)

> [!NOTE]
> **Concept Check 6.2**
> Why must we exclude $n = 0$ as a valid quantum number for the particle in a box? (Hint: Consider both the normalization condition and the uncertainty principle.)

### Quantized Energies

$$k_n = \frac{n\pi}{a} \implies E_n = \frac{\hbar^2 k_n^2}{2m}$$

$$\boxed{E_n = \frac{n^2 \pi^2 \hbar^2}{2ma^2} = \frac{n^2 h^2}{8ma^2}, \quad n = 1, 2, 3, \ldots}$$

### Key Features of the Energy Spectrum

1. **Quantization:** Only discrete energies are allowed — a direct result of confinement + boundary conditions
2. **Zero-point energy:** $E_1 = \frac{h^2}{8ma^2} \neq 0$ — consistent with the uncertainty principle
3. **Quadratic spacing:** $E_n \propto n^2$ — energy levels get farther apart as $n$ increases
4. **Size dependence:** $E_n \propto 1/a^2$ — smaller box → larger energy gaps
5. **Mass dependence:** $E_n \propto 1/m$ — lighter particles → larger energy gaps

$$\boxed{\psi_n(x) = \sqrt{\frac{2}{a}}\sin\left(\frac{n\pi x}{a}\right)}$$

**Derivation of the Normalization Constant ($A$):**
To ensure the total probability of finding the particle in the box is 1, we must satisfy the normalization condition:
$$\int_{0}^{a} |\psi_n(x)|^2 dx = 1$$

Substitute $\psi_n(x) = A\sin(\frac{n\pi x}{a})$:
$$A^2 \int_{0}^{a} \sin^2\left(\frac{n\pi x}{a}\right) dx = 1$$

Using the trigonometric identity $\sin^2\theta = \frac{1 - \cos(2\theta)}{2}$:
$$A^2 \int_{0}^{a} \frac{1 - \cos(\frac{2n\pi x}{a})}{2} dx = 1$$
$$\frac{A^2}{2} \left[ \int_{0}^{a} dx - \int_{0}^{a} \cos\left(\frac{2n\pi x}{a}\right) dx \right] = 1$$

The second integral is zero over a full period (or $n$ periods):
$$\frac{A^2}{2} \left[ x - \frac{a}{2n\pi}\sin\left(\frac{2n\pi x}{a}\right) \right]_0^a = 1$$
$$\frac{A^2}{2} [a - 0] = 1 \implies \frac{A^2 a}{2} = 1$$
$$\boxed{A = \sqrt{\frac{2}{a}}}$$

### Orthogonality

$$\int_0^a \psi_m^*(x)\,\psi_n(x)\,dx = \delta_{mn} = \begin{cases} 1 & m = n \\ 0 & m \neq n \end{cases}$$

---

## 3. Properties of the Solutions

### Wavefunctions $\psi_n(x)$

- $\psi_n$ has $n-1$ **nodes** (zeros inside the box)
- More nodes → higher kinetic energy (more oscillatory → steeper curvature)
- Each $\psi_n$ has definite **parity** about the center $x = a/2$:
  - $n$ odd: symmetric (even parity about center)
  - $n$ even: antisymmetric (odd parity about center)

### Probability Density $|\psi_n(x)|^2$

- **Ground state ($n = 1$):** Maximum probability at center, zero at walls
- **Higher states:** $n$ equal probability maxima, $n-1$ nodes
- In the classical limit ($n \to \infty$), the probability becomes uniform — the **correspondence principle**

### Classical Limit

For large $n$, the closely-spaced oscillations of $|\psi_n|^2$ average to a uniform distribution (particle equally likely everywhere), matching the classical prediction. The energy spacing becomes negligible compared to the total energy: $\Delta E / E \approx 2/n \to 0$.

> [!NOTE]
> **Concept Check 6.3**
> For the $n = 3$ state of a particle in a box, (a) how many nodes does the wavefunction have? (b) At what positions $x$ are you most likely to find the particle? (c) At what positions is the probability of finding the particle exactly zero?

---

## 4. Worked Example

**Problem:** An electron is confined to a 1-D box of length $a = 1.0$ nm. Calculate $E_1$, $E_2$, and the wavelength of light needed for the $1 \to 2$ transition.

**Solution:**

$$E_n = \frac{n^2 h^2}{8m_e a^2} = \frac{n^2(6.626\times10^{-34})^2}{8(9.109\times10^{-31})(1.0\times10^{-9})^2}$$

$$E_1 = 6.02 \times 10^{-20}\text{ J} = 0.376\text{ eV}$$

$$E_2 = 4 \times E_1 = 2.41 \times 10^{-19}\text{ J} = 1.504\text{ eV}$$

$$\Delta E = E_2 - E_1 = 3E_1 = 1.81 \times 10^{-19}\text{ J}$$

$$\lambda = \frac{hc}{\Delta E} = \frac{(6.626\times10^{-34})(3.0\times10^8)}{1.81\times10^{-19}} = 1100\text{ nm (near-IR)}$$

---

## Key Equations Summary

| Equation | Expression |
|----------|-----------|
| Free particle energy | $E = \hbar^2k^2/(2m)$, continuous |
| PIB energies | $E_n = n^2h^2/(8ma^2)$ |
| PIB wavefunctions | $\psi_n = \sqrt{2/a}\sin(n\pi x/a)$ |
| Number of nodes | $n - 1$ |
| Transition energy | $\Delta E = (n_f^2 - n_i^2)h^2/(8ma^2)$ |

## Recent Literature Spotlight

**"Highly Efficient and Stable InP/ZnSe/ZnS Quantum Dot Light-Emitting Diodes"**
*Y.-H. Won, O. Cho, T. Kim, D.-Y. Chung, T. Kim, et al.*, Nature, **2019**, 575, 634–638. [DOI](https://doi.org/10.1038/s41586-019-1771-5)

Quantum dots are real-world "particles in a box" — semiconductor nanocrystals whose optical properties are governed by quantum confinement. This paper reports InP quantum dot LEDs reaching 21.4% external quantum efficiency using environmentally friendly cadmium-free materials. The emission wavelength is tuned by simply changing the dot size, exactly as the particle-in-a-box model predicts: smaller confinement → larger energy gap → shorter wavelength emission. This work was recognized as part of the 2023 Nobel Prize in Chemistry for quantum dot research.

---

## Practice Problems

1. **Energy levels.** Calculate the first three energy levels of a proton confined to a box of width $a = 10$ fm ($10^{-14}$ m, roughly the size of a nucleus). Express your answers in MeV.

2. **Nodes and probability.** For $n = 3$ in the particle in a box, (a) identify the positions of the nodes, (b) find the position(s) of maximum probability density.

3. **Correspondence principle.** Calculate the fractional energy spacing $(E_{n+1} - E_n)/E_n$ for $n = 1$, $n = 10$, and $n = 1000$. At what level does the system behave essentially classically?

---

*Next lecture: Probability Interpretation & Normalization — Using the Particle in a Box*
