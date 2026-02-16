# Lecture 4 — The Classical Wave Equation & Waves Review

**Reading:** Engel 4th ed., Chapter 2 (Section 2.1)

## Learning Objectives

- Write and solve the classical wave equation in one dimension
- Distinguish between traveling waves and standing waves
- Express waves using complex exponential notation
- Connect the classical wave equation to the quantum-mechanical Schrödinger equation

---

## 1. Why Study Waves?

De Broglie showed that matter has wave properties. To build a quantum theory, we need an equation that governs the behavior of "matter waves" — analogous to how the classical wave equation governs vibrating strings and electromagnetic fields.

---

## 2. The Classical Wave Equation

A disturbance $u(x,t)$ propagating along a string satisfies:

$$\frac{\partial^2 u}{\partial x^2} = \frac{1}{v^2}\frac{\partial^2 u}{\partial t^2}$$

where $v$ is the wave speed.

### General Solution: Traveling Waves

$$u(x,t) = f(x - vt) + g(x + vt)$$

- $f(x - vt)$: wave moving in $+x$ direction
- $g(x + vt)$: wave moving in $-x$ direction

### Sinusoidal Traveling Wave

$$u(x,t) = A\sin(kx - \omega t + \phi)$$

Key parameters:
| Symbol | Name | Definition |
|--------|------|-----------|
| $A$ | Amplitude | Maximum displacement |
| $k$ | Wavevector | $k = 2\pi / \lambda$ |
| $\omega$ | Angular frequency | $\omega = 2\pi\nu$ |
| $\lambda$ | Wavelength | Spatial period |
| $\nu$ | Frequency | $\nu = v/\lambda$ |
| $\phi$ | Phase | Offset at $x = 0, t = 0$ |

The dispersion relation: $v = \lambda\nu = \omega/k$.

> [!NOTE]
> **Concept Check 4.1**
> If you double the frequency of a wave on a string while keeping the tension and mass density constant (so the wave speed $v$ is constant), how does the wavelength $\lambda$ change?

---

## 3. Standing Waves

When a wave is confined (e.g., a string fixed at both ends of length $L$), boundary conditions restrict the allowed wavelengths:

$$u_n(x,t) = A_n \sin\left(\frac{n\pi x}{L}\right)\cos(\omega_n t)$$

**Quantization from boundary conditions:**

$$\lambda_n = \frac{2L}{n}, \quad n = 1, 2, 3, \ldots$$

This is our first encounter with a recurring theme: **confinement leads to quantization**. The same principle applies to electrons confined in atoms or molecules.

---

## 4. Complex Exponential Notation

Euler's formula connects complex exponentials to trigonometric functions:

$$e^{i\theta} = \cos\theta + i\sin\theta$$

A traveling wave can be written compactly as:

$$u(x,t) = A\, e^{i(kx - \omega t)}$$

The physical wave is the real part: $\text{Re}[u(x,t)]$.

### Why Use Complex Notation?

- Derivatives are simpler: $\frac{d}{dx}e^{ikx} = ik\, e^{ikx}$
- Superposition calculations are more transparent
- Quantum mechanics inherently uses complex wavefunctions

### Key Identities

$$\cos\theta = \frac{e^{i\theta} + e^{-i\theta}}{2}, \qquad \sin\theta = \frac{e^{i\theta} - e^{-i\theta}}{2i}$$

$$|e^{i\theta}|^2 = e^{i\theta}\cdot e^{-i\theta} = 1$$

> [!NOTE]
> **Concept Check 4.2**
> Using complex exponential notation, write a wave that is traveling in the negative $x$ direction with amplitude $B$, wavevector $k$, and angular frequency $\omega$.

---

## 5. Superposition Principle

If $u_1$ and $u_2$ are both solutions of the wave equation, then any linear combination is also a solution:

$$u(x,t) = c_1 u_1(x,t) + c_2 u_2(x,t)$$

This **superposition principle** holds because the wave equation is linear. The Schrödinger equation is also linear, so superposition will be a central feature of quantum mechanics.

### Fourier's Theorem

Any well-behaved function on $[0, L]$ can be expanded as a sum of standing waves:

$$f(x) = \sum_{n=1}^{\infty} c_n \sin\left(\frac{n\pi x}{L}\right)$$

This foreshadows the expansion of quantum states in terms of eigenfunctions.

---

## 6. From Classical Waves to Quantum Waves

| Classical Wave | Quantum "Wave" |
|---------------|----------------|
| $u(x,t)$ = displacement | $\Psi(x,t)$ = wavefunction |
| $|u|^2$ ∝ intensity | $|\Psi|^2$ = probability density |
| $v = \omega/k$ | $E = \hbar\omega,\; p = \hbar k$ |
| Classical wave equation | Schrödinger equation |

Next lecture: we construct the Schrödinger equation by combining de Broglie's relation with the energy-momentum relationship.

---

## Key Equations Summary

| Equation | Expression |
|----------|-----------|
| Classical wave equation | $\frac{\partial^2 u}{\partial x^2} = \frac{1}{v^2}\frac{\partial^2 u}{\partial t^2}$ |
| Sinusoidal wave | $u(x,t) = A\sin(kx - \omega t)$ |
| Wavevector | $k = 2\pi/\lambda$ |
| Angular frequency | $\omega = 2\pi\nu$ |
| Standing wave (string) | $\lambda_n = 2L/n$ |
| Euler's formula | $e^{i\theta} = \cos\theta + i\sin\theta$ |

## Recent Literature Spotlight

**"Ab Initio Multiple Spawning Dynamics Reveals the Photochemistry of Butadiene"**
*B. F. E. Curchod, T. J. Martínez*, Chemical Reviews, **2024**, 124, 3500–3529. [DOI](https://doi.org/10.1021/acs.chemrev.3c00696)

This review showcases how the time-dependent Schrödinger equation is solved numerically to simulate ultrafast photochemical reactions. By propagating nuclear wave packets on multiple electronic surfaces, the researchers capture phenomena like conical intersections and nonadiabatic transitions — processes that determine the outcome of photochemical reactions. It illustrates how the Schrödinger equation from this lecture is the engine behind modern photochemistry simulations.

---

## Practice Problems

1. **Standing waves.** A guitar string is 65 cm long. Calculate the wavelengths and frequencies of the first three harmonics if the wave speed on the string is 400 m/s.

2. **Complex notation.** Verify that $\Psi(x,t) = Ae^{i(kx-\omega t)}$ satisfies the classical wave equation with $v = \omega/k$.

3. **Superposition.** Two waves $u_1 = A\sin(kx - \omega t)$ and $u_2 = A\sin(kx + \omega t)$ overlap. Show that the result is a standing wave, and identify its nodes.

---

*Next lecture: Deriving the Schrödinger Equation*
