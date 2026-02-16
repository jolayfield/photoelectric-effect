# Lecture 5 — Deriving the Schrödinger Equation

**Reading:** Engel 4th ed., Chapter 2 (Sections 2.2–2.4)

## Learning Objectives

- Motivate the form of the Schrödinger equation from the de Broglie and Planck relations
- Write the time-dependent Schrödinger equation (TDSE) and the time-independent Schrödinger equation (TISE)
- Identify the Hamiltonian operator and its components
- Separate the TDSE into spatial and temporal parts for stationary states
- Recognize that eigenvalue equations are central to quantum mechanics

---

## 1. Motivation: What Equation Governs Matter Waves?

We need a wave equation whose solutions have the de Broglie and Planck properties:

$$p = \hbar k, \qquad E = \hbar\omega$$

For a free particle (no forces), the total energy is purely kinetic:

$$E = \frac{p^2}{2m}$$

Consider the plane wave: $\Psi(x,t) = Ae^{i(kx - \omega t)}$

Taking derivatives:

$$\frac{\partial \Psi}{\partial x} = ik\Psi \implies -i\hbar\frac{\partial\Psi}{\partial x} = \hbar k\, \Psi = p\,\Psi$$

$$\frac{\partial \Psi}{\partial t} = -i\omega\Psi \implies i\hbar\frac{\partial\Psi}{\partial t} = \hbar\omega\,\Psi = E\,\Psi$$

$$\frac{\partial^2\Psi}{\partial x^2} = -k^2\Psi \implies -\frac{\hbar^2}{2m}\frac{\partial^2\Psi}{\partial x^2} = \frac{\hbar^2 k^2}{2m}\Psi = \frac{p^2}{2m}\Psi$$

These suggest that the momentum and energy operators act on $\Psi$ via differentiation.

---

## 2. The Time-Dependent Schrödinger Equation (TDSE)

For a particle moving in a potential $V(x)$, total energy = kinetic + potential:

$$E = \frac{p^2}{2m} + V(x)$$

Replacing the classical variables with operators acting on $\Psi(x,t)$:

$$\boxed{i\hbar\frac{\partial\Psi(x,t)}{\partial t} = -\frac{\hbar^2}{2m}\frac{\partial^2\Psi(x,t)}{\partial x^2} + V(x)\Psi(x,t)}$$

This is the **time-dependent Schrödinger equation** — the fundamental equation of nonrelativistic quantum mechanics.

### Key Features

1. **First-order in time** (unlike the classical wave equation, which is second-order)
2. **Linear**: if $\Psi_1$ and $\Psi_2$ are solutions, so is $c_1\Psi_1 + c_2\Psi_2$
3. **Complex**: the factor $i$ makes complex wavefunctions essential
4. **Deterministic**: given $\Psi(x,0)$, the TDSE uniquely determines $\Psi(x,t)$ for all future times

> [!NOTE]
> **Concept Check 5.1**
> Why must the wavefunction $\Psi$ be complex-valued? What term in the time-dependent Schrödinger equation (TDSE) necessitates the use of complex numbers?

---

## 3. The Hamiltonian Operator

Define the **Hamiltonian operator**:

$$\hat{H} = -\frac{\hbar^2}{2m}\frac{d^2}{dx^2} + V(x) = \hat{T} + \hat{V}$$

where:
- $\hat{T} = -\frac{\hbar^2}{2m}\frac{d^2}{dx^2}$ is the kinetic energy operator
- $\hat{V} = V(x)$ is the potential energy operator

The TDSE becomes:

$$i\hbar\frac{\partial\Psi}{\partial t} = \hat{H}\Psi$$

The Hamiltonian is the **total energy operator**. It plays a central role in quantum mechanics.

---

## 4. Separation of Variables: Stationary States

When $V$ is independent of time, we can separate $\Psi(x,t)$ into spatial and temporal parts:

$$\Psi(x,t) = \psi(x)\cdot \phi(t)$$

Substituting into the TDSE and dividing both sides by $\psi(x)\phi(t)$:

$$i\hbar\frac{1}{\phi}\frac{d\phi}{dt} = \frac{1}{\psi}\hat{H}\psi$$

The left side depends only on $t$; the right side only on $x$. Both must equal a constant, which we call $E$:

### Temporal Part

$$i\hbar\frac{d\phi}{dt} = E\phi \implies \phi(t) = e^{-iEt/\hbar}$$

### Spatial Part — The Time-Independent Schrödinger Equation (TISE)

$$\boxed{\hat{H}\psi(x) = E\psi(x)}$$

or equivalently:

$$-\frac{\hbar^2}{2m}\frac{d^2\psi}{dx^2} + V(x)\psi(x) = E\psi(x)$$

This is an **eigenvalue equation**: the operator $\hat{H}$ acting on the function $\psi$ returns the same function multiplied by a constant $E$.

- $\psi(x)$: **eigenfunction** of $\hat{H}$
- $E$: **eigenvalue** (the total energy)

### Full Solution for Stationary States

$$\Psi(x,t) = \psi(x)\,e^{-iEt/\hbar}$$

The probability density is:

$$|\Psi(x,t)|^2 = |\psi(x)|^2 \cdot |e^{-iEt/\hbar}|^2 = |\psi(x)|^2$$

The probability distribution is **time-independent** — hence the name "stationary state." The system's measurable properties do not change with time.

> [!NOTE]
> **Concept Check 5.2**
> If the wavefunction of a stationary state is $\Psi(x,t) = \psi(x) e^{-iEt/\hbar}$, show that the expectation value of any time-independent operator $\hat{A}$ is constant in time.

---

## 5. Extension to Three Dimensions

In three dimensions, the TISE becomes:

$$-\frac{\hbar^2}{2m}\nabla^2\psi(\mathbf{r}) + V(\mathbf{r})\psi(\mathbf{r}) = E\psi(\mathbf{r})$$

where the Laplacian in Cartesian coordinates is:

$$\nabla^2 = \frac{\partial^2}{\partial x^2} + \frac{\partial^2}{\partial y^2} + \frac{\partial^2}{\partial z^2}$$

---

## 6. Operators in Quantum Mechanics — Preview

The Schrödinger equation reveals that physical observables correspond to **operators**:

| Observable | Classical | Operator |
|-----------|-----------|----------|
| Position | $x$ | $\hat{x} = x \cdot$ (multiply) |
| Momentum | $p$ | $\hat{p} = -i\hbar\frac{d}{dx}$ |
| Kinetic energy | $\frac{p^2}{2m}$ | $\hat{T} = -\frac{\hbar^2}{2m}\frac{d^2}{dx^2}$ |
| Potential energy | $V(x)$ | $\hat{V} = V(x)\cdot$ |
| Total energy | $E$ | $\hat{H} = \hat{T} + \hat{V}$ |

This operator formalism will be systematized in the postulates of quantum mechanics (Week 3).

---

## Key Equations Summary

| Equation | Expression |
|----------|-----------|
| TDSE | $i\hbar\frac{\partial\Psi}{\partial t} = \hat{H}\Psi$ |
| TISE | $\hat{H}\psi = E\psi$ |
| Hamiltonian | $\hat{H} = -\frac{\hbar^2}{2m}\frac{d^2}{dx^2} + V(x)$ |
| Stationary state | $\Psi(x,t) = \psi(x)e^{-iEt/\hbar}$ |
| Momentum operator | $\hat{p} = -i\hbar\frac{d}{dx}$ |
| 3-D TISE | $-\frac{\hbar^2}{2m}\nabla^2\psi + V\psi = E\psi$ |

## Recent Literature Spotlight

**"Loophole-Free Bell Inequality Violation Using Entangled Electron Spins Separated by 1.3 Kilometres"**
*B. Hensen, H. Bernien, A. E. Dréau, A. Reiserer, N. Kalb, et al.*, Nature, **2015**, 526, 682–686. [DOI](https://doi.org/10.1038/nature15759)

This experiment achieved the first loophole-free Bell test, simultaneously closing both the detection and locality loopholes. Using entangled electron spins in nitrogen-vacancy centres in diamond separated by 1.3 km, the researchers demonstrated that quantum correlations cannot be explained by any local hidden-variable theory — providing the most definitive experimental test of quantum nonlocality to date.

---

## Practice Problems

1. **Operator action.** Show that $\psi(x) = Ae^{ikx}$ is an eigenfunction of the momentum operator $\hat{p} = -i\hbar\frac{d}{dx}$. What is the eigenvalue?

2. **Separation of variables.** Verify that substituting $\Psi(x,t) = \psi(x)e^{-iEt/\hbar}$ into the TDSE yields the TISE.

3. **Free particle.** For a free particle ($V = 0$), show that $\psi(x) = Ae^{ikx} + Be^{-ikx}$ is a solution of the TISE, and express the energy eigenvalue in terms of $k$.

---

*Next lecture: Free Particle & Particle in a 1-D Infinite Box*
