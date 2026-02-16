# Lecture 9 — Postulates IV–VI: Expansion, Expectation Values & Time Evolution

**Reading:** Engel 4th ed., Chapter 3 (Sections 3.4–3.6)

## Learning Objectives

- Expand an arbitrary state in terms of PIB eigenfunctions and determine measurement probabilities
- Calculate expectation values using eigenfunction expansions
- Define the commutator and determine whether operators commute
- State the time-evolution postulate and describe the time-dependent behavior of quantum states

---

## Postulate IV — Expansion & Probabilities

> **If the eigenfunctions $\{\psi_n\}$ of operator $\hat{A}$ form a complete set, then any state $\Psi$ can be expanded as:**
> $$\Psi = \sum_n c_n \psi_n$$
> **The probability of measuring eigenvalue $a_n$ is $|c_n|^2$.**

### Finding the Coefficients

Using orthonormality ($\int \psi_m^* \psi_n\,dx = \delta_{mn}$):

$$c_n = \int \psi_n^*\,\Psi\,dx$$

### Completeness

$$\sum_n |c_n|^2 = 1$$

This ensures total probability is conserved.

> [!NOTE]
> **Concept Check 9.1**
> A system is in a state $\Psi = \frac{3}{5}\psi_1 + \frac{4}{5}\psi_2$, where $\psi_1$ and $\psi_2$ are normalized eigenfunctions of an operator $\hat{A}$ with eigenvalues $a_1$ and $a_2$. What is the probability of measuring $a_1$? Does the total probability sum to 1?

### PIB Example: Expanding an Arbitrary State

A particle in a box ($a = 1$) is prepared in the state $\Psi(x) = \sqrt{30}\,x(1-x)$.

This is *not* an eigenstate of $\hat{H}$. To find what energies we might measure, expand in PIB eigenstates:

$$c_n = \sqrt{2}\int_0^1 \sin(n\pi x)\cdot \sqrt{30}\,x(1-x)\,dx$$

Evaluating:
- $|c_1|^2 = 0.9986$ — 99.86% probability of measuring $E_1$
- $|c_2|^2 = 0$ — zero probability (by symmetry, $\Psi$ is symmetric and $\psi_2$ is antisymmetric)
- $|c_3|^2 = 0.0013$ — tiny contribution from $E_3$

The parabolic state is *almost entirely* the ground state — it closely resembles $\psi_1$!

---

## Postulate V — Expectation Values

> **The expectation value of observable $A$ in state $\Psi$ is:**
> $$\langle A \rangle = \int \Psi^*\,\hat{A}\,\Psi\,dx$$

If $\Psi = \sum_n c_n\psi_n$:

$$\langle A \rangle = \sum_n |c_n|^2\,a_n$$

This is the **weighted average** of eigenvalues with probabilities $|c_n|^2$.

### PIB Example: Energy of a Superposition

For the state $\Psi = \frac{1}{\sqrt{2}}\psi_1 + \frac{1}{\sqrt{2}}\psi_3$ in a PIB:

$$\langle E \rangle = |c_1|^2 E_1 + |c_3|^2 E_3 = \frac{1}{2}E_1 + \frac{1}{2}(9E_1) = 5E_1$$

The average energy is $5E_1$, but you never *measure* $5E_1$. Each individual measurement gives either $E_1$ (50% of the time) or $E_3$ (50% of the time).

### Measurement and Collapse

After measuring observable $A$ and obtaining eigenvalue $a_n$, the system **collapses** into eigenstate $\psi_n$. A subsequent measurement of $A$ will yield $a_n$ with certainty.

### PIB Example: Collapse in Action

Suppose the particle is in $\Psi = \frac{1}{\sqrt{2}}\psi_1 + \frac{1}{\sqrt{2}}\psi_2$ and you measure the energy. If you obtain $E_2$:
1. The state immediately becomes $\psi_2$
2. A second energy measurement gives $E_2$ with 100% certainty
3. The probability density changes from the oscillating superposition to the stationary $|\psi_2|^2$

---

## Postulate VI — Time Evolution

> **The time evolution of state $\Psi$ is governed by the time-dependent Schrödinger equation:**
> $$i\hbar\frac{\partial\Psi}{\partial t} = \hat{H}\Psi$$

For stationary states with definite energy $E_n$:

$$\Psi_n(\mathbf{r}, t) = \psi_n(\mathbf{r})\,e^{-iE_nt/\hbar}$$

For a general superposition:

$$\Psi(\mathbf{r}, t) = \sum_n c_n\,\psi_n(\mathbf{r})\,e^{-iE_nt/\hbar}$$

### PIB Example: A Sloshing Superposition

For $\Psi(x, 0) = \frac{1}{\sqrt{2}}[\psi_1(x) + \psi_2(x)]$:

$$\Psi(x,t) = \frac{1}{\sqrt{2}}\left[\psi_1(x)e^{-iE_1t/\hbar} + \psi_2(x)e^{-iE_2t/\hbar}\right]$$

The probability density:

$$|\Psi(x,t)|^2 = \frac{1}{2}\left[|\psi_1|^2 + |\psi_2|^2 + 2\psi_1\psi_2\cos\left(\frac{(E_2-E_1)t}{\hbar}\right)\right]$$

The probability "sloshes" back and forth in the box with angular frequency $\omega = (E_2 - E_1)/\hbar = 3E_1/\hbar$. This is a quantum beat — interference between two energy eigenstates.

> [!NOTE]
> **Concept Check 9.2**
> For the sloshing PIB state above, at time $t = 0$ the probability density is peaked toward the left side of the box. At what time is it peaked toward the right side? What happens to the probability density if the particle is in a single eigenstate $\psi_n$?

---

## Commutators

### Definition

The **commutator** of two operators $\hat{A}$ and $\hat{B}$:

$$\boxed{[\hat{A}, \hat{B}] = \hat{A}\hat{B} - \hat{B}\hat{A}}$$

If $[\hat{A}, \hat{B}] = 0$, the operators **commute**.

### The Canonical Commutation Relation

The most important commutator in quantum mechanics:

$$\boxed{[\hat{x}, \hat{p}] = i\hbar}$$

**Proof:** Acting on an arbitrary function $f(x)$:

$$[\hat{x}, \hat{p}]f = x\left(-i\hbar\frac{df}{dx}\right) - \left(-i\hbar\frac{d}{dx}\right)(xf)$$

$$= -i\hbar x\frac{df}{dx} + i\hbar\left(f + x\frac{df}{dx}\right) = i\hbar f$$

Therefore $[\hat{x}, \hat{p}] = i\hbar$. ∎

### PIB Perspective: Why Position and Momentum Don't Commute

We showed in Lecture 8 that the PIB ground state $\psi_1$ is an eigenstate of $\hat{H}$ (and thus $\hat{p}^2$) but *not* of $\hat{p}$. Because $[\hat{x}, \hat{p}] \neq 0$, the particle cannot have definite position *and* definite momentum simultaneously. In the PIB:
- The particle is confined ($\Delta x \sim a$)
- Therefore it must have momentum uncertainty ($\Delta p > 0$)
- This is exactly the zero-point energy: the particle can never be at rest

### Why Commutators Matter

| Commutation | Physical Consequence |
|-------------|---------------------|
| $[\hat{A}, \hat{B}] = 0$ | $A$ and $B$ can be measured simultaneously with arbitrary precision; they share eigenfunctions |
| $[\hat{A}, \hat{B}] \neq 0$ | $A$ and $B$ cannot be simultaneously known; measuring one disturbs the other |

### Common Commutators

| Commutator | Value |
|-----------|-------|
| $[\hat{x}, \hat{p}_x]$ | $i\hbar$ |
| $[\hat{x}, \hat{p}_y]$ | $0$ |
| $[\hat{x}, \hat{x}]$ | $0$ |
| $[\hat{L}_x, \hat{L}_y]$ | $i\hbar\hat{L}_z$ |
| $[\hat{L}^2, \hat{L}_z]$ | $0$ |
| $[\hat{H}, \hat{p}]$ (free particle) | $0$ |

### Compatible Observables

If $[\hat{A}, \hat{B}] = 0$, we can find a **simultaneous eigenbasis** — functions that are eigenfunctions of both $\hat{A}$ and $\hat{B}$:

$$\hat{A}\psi = a\psi \quad \text{and} \quad \hat{B}\psi = b\psi$$

The system can have definite values of both $A$ and $B$. Such observables are called **compatible**.

> [!NOTE]
> **Concept Check 9.3**
> For a **free** particle (no box), $[\hat{H}, \hat{p}] = 0$. This means $\psi = Ae^{ikx}$ is simultaneously an eigenstate of both $\hat{H}$ and $\hat{p}$. Verify this by finding the eigenvalues of each. Why doesn't this work for the PIB?

---

## Dirac Notation (Bra-Ket) — Brief Introduction

Dirac notation provides a compact way to write quantum expressions:

| Standard | Dirac |
|----------|-------|
| $\psi$ | $|\psi\rangle$ (ket) |
| $\psi^*$ | $\langle\psi|$ (bra) |
| $\int\psi_m^*\psi_n\,dx$ | $\langle\psi_m|\psi_n\rangle$ |
| $\int\psi^*\hat{A}\psi\,dx$ | $\langle\psi|\hat{A}|\psi\rangle$ |
| Eigenvalue eq. | $\hat{A}|a_n\rangle = a_n|a_n\rangle$ |

---

## Key Equations Summary

| Equation | Expression |
|----------|-----------|
| Expansion | $\Psi = \sum_n c_n\psi_n$ |
| Coefficients | $c_n = \int\psi_n^*\Psi\,dx$ |
| Measurement probability | $P(a_n) = \|c_n\|^2$ |
| Expectation value | $\langle A\rangle = \sum_n\|c_n\|^2 a_n$ |
| Commutator | $[\hat{A},\hat{B}] = \hat{A}\hat{B} - \hat{B}\hat{A}$ |
| Canonical commutator | $[\hat{x},\hat{p}] = i\hbar$ |
| Time evolution | $\Psi(t) = \sum_n c_n\psi_n e^{-iE_nt/\hbar}$ |

## Recent Literature Spotlight

**"Agnostic Phase Estimation"**
*X. Song, F. Salvati, C. Gaikwad, N. Yunger Halpern, D. R. M. Arvidsson-Shukur, K. Murch*, Physical Review Letters, **2024**, 132, 260801. [DOI](https://doi.org/10.1103/PhysRevLett.132.260801)

This work demonstrates a quantum advantage in phase estimation by entangling a probe qubit with an ancilla and measuring them in an entangled basis — extracting more information than any single-qubit sensor could. The experiment, performed on a superconducting quantum processor, illustrates how the postulates of quantum mechanics (superposition, entanglement, measurement) directly enable technologies that outperform classical approaches.

---

## Practice Problems

1. **Expansion coefficients.** A particle in a box ($0 \leq x \leq a$) is in the state $\Psi(x) = \sqrt{30/a^5}\,x(a-x)$. Calculate the probability of measuring (a) $E_1$, (b) $E_2$, (c) $E_3$.

2. **Commutator calculations.** Evaluate: (a) $[\hat{x}^2, \hat{p}]$, (b) $[\hat{p}, V(x)]$, (c) $[\hat{H}, \hat{x}]$ for a particle in a potential $V(x)$.

3. **Time evolution.** A PIB system starts in the state $\Psi(0) = \frac{1}{\sqrt{2}}(\psi_1 + \psi_2)$. Write $\Psi(t)$ and show that $|\Psi(x,t)|^2$ oscillates with frequency $(E_2 - E_1)/h$.

---

*Next lecture: The Uncertainty Principle & Problem-Solving Workshop*
