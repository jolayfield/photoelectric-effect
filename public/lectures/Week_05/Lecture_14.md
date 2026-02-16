# Lecture 14 — Commutators, Simultaneous Observables & the Generalized Uncertainty Principle

**Reading:** Engel 4th ed., Chapter 6 (Sections 6.1–6.3)

## Learning Objectives

- Evaluate commutators of common quantum-mechanical operators
- Determine whether two observables can be measured simultaneously
- Apply the generalized uncertainty principle to arbitrary operator pairs
- Explain the connection between commutation, compatible observables, and shared eigenstates
- Use commutator algebra identities to simplify calculations

---

## 1. Review: The Commutator

$$[\hat{A}, \hat{B}] = \hat{A}\hat{B} - \hat{B}\hat{A}$$

- If $[\hat{A},\hat{B}] = 0$: operators **commute** — order doesn't matter
- If $[\hat{A},\hat{B}] \neq 0$: operators **do not commute** — order matters

The commutator captures the essence of what makes quantum mechanics different from classical mechanics.

---

## 2. Commutator Algebra

### Useful Identities

$$[\hat{A}, \hat{B}] = -[\hat{B}, \hat{A}] \quad \text{(antisymmetry)}$$

$$[\hat{A}, \hat{B} + \hat{C}] = [\hat{A}, \hat{B}] + [\hat{A}, \hat{C}] \quad \text{(linearity)}$$

$$[\hat{A}, \hat{B}\hat{C}] = [\hat{A}, \hat{B}]\hat{C} + \hat{B}[\hat{A}, \hat{C}] \quad \text{(product rule)}$$

$$[\hat{A}\hat{B}, \hat{C}] = \hat{A}[\hat{B}, \hat{C}] + [\hat{A}, \hat{C}]\hat{B}$$

$$[\hat{A}, [\hat{B}, \hat{C}]] + [\hat{B}, [\hat{C}, \hat{A}]] + [\hat{C}, [\hat{A}, \hat{B}]] = 0 \quad \text{(Jacobi identity)}$$

### Worked Examples

**Example 1:** $[\hat{x}, \hat{p}^2]$

$$[\hat{x}, \hat{p}^2] = [\hat{x}, \hat{p}]\hat{p} + \hat{p}[\hat{x}, \hat{p}] = i\hbar\hat{p} + i\hbar\hat{p} = 2i\hbar\hat{p}$$

**Example 2:** $[\hat{x}^2, \hat{p}]$

$$[\hat{x}^2, \hat{p}] = \hat{x}[\hat{x}, \hat{p}] + [\hat{x}, \hat{p}]\hat{x} = i\hbar\hat{x} + i\hbar\hat{x} = 2i\hbar\hat{x}$$

**Example 3:** $[\hat{x}, \hat{H}]$ where $\hat{H} = \frac{\hat{p}^2}{2m} + V(\hat{x})$

$$[\hat{x}, \hat{H}] = \frac{1}{2m}[\hat{x}, \hat{p}^2] + [\hat{x}, V(\hat{x})] = \frac{2i\hbar\hat{p}}{2m} + 0 = \frac{i\hbar\hat{p}}{m}$$

This result connects to the classical equation $\dot{x} = p/m$ via Ehrenfest's theorem.

> [!NOTE]
> **Concept Check 14.1**
> Evaluate the commutator $[\hat{p}_x, \hat{x}^2]$. How does this relate to the commutator $[\hat{x}, \hat{p}_x^2]$ derived in the worked example?

---

## 3. Compatible Observables and Simultaneous Eigenstates

### Theorem

If $[\hat{A}, \hat{B}] = 0$, then $\hat{A}$ and $\hat{B}$ share a **complete set of simultaneous eigenfunctions**.

**Proof sketch:** Let $\hat{A}\psi_a = a\psi_a$. Then:

$$\hat{A}(\hat{B}\psi_a) = \hat{B}(\hat{A}\psi_a) = \hat{B}(a\psi_a) = a(\hat{B}\psi_a)$$

So $\hat{B}\psi_a$ is also an eigenfunction of $\hat{A}$ with eigenvalue $a$. If $a$ is non-degenerate, $\hat{B}\psi_a$ must be proportional to $\psi_a$, meaning $\psi_a$ is also an eigenfunction of $\hat{B}$. ∎

### Physical Interpretation

| Commute? | Physical meaning | Example |
|----------|-----------------|---------|
| $[\hat{A},\hat{B}] = 0$ | Both observables can have definite values simultaneously | $\hat{L}^2$ and $\hat{L}_z$ |
| $[\hat{A},\hat{B}] \neq 0$ | Cannot have definite values for both at the same time | $\hat{x}$ and $\hat{p}$ |

### Complete Sets of Commuting Observables (CSCO)

A **CSCO** is a maximal set of mutually commuting operators whose simultaneous eigenvalues uniquely label every state. Examples:

- **Hydrogen atom:** $\{\hat{H}, \hat{L}^2, \hat{L}_z, \hat{S}_z\}$ → quantum numbers $\{n, l, m_l, m_s\}$
- **Particle in a 3-D box:** $\{\hat{H}_x, \hat{H}_y, \hat{H}_z\}$ → quantum numbers $\{n_x, n_y, n_z\}$

---

## 4. The Generalized Uncertainty Principle (Rigorous)

For any two Hermitian operators:

$$\boxed{\Delta A \cdot \Delta B \geq \frac{1}{2}|\langle[\hat{A},\hat{B}]\rangle|}$$

### Special Cases

**Position-Momentum:**
$$[\hat{x}, \hat{p}] = i\hbar \implies \Delta x\cdot\Delta p \geq \frac{\hbar}{2}$$

**Angular Momentum Components:**
$$[\hat{L}_x, \hat{L}_y] = i\hbar\hat{L}_z \implies \Delta L_x\cdot\Delta L_y \geq \frac{\hbar}{2}|\langle L_z\rangle|$$

**Compatible Observables:**
$$[\hat{A}, \hat{B}] = 0 \implies \Delta A\cdot\Delta B \geq 0$$

No fundamental restriction — both can be known precisely.

### State-Dependence of the Uncertainty Bound

The right-hand side of the uncertainty relation depends on the **state**. For angular momentum:

$$\Delta L_x\cdot\Delta L_y \geq \frac{\hbar}{2}|\langle L_z\rangle|$$

In a state with $m_l = 0$ (so $\langle L_z\rangle = 0$), the lower bound is zero — but this doesn't mean both $L_x$ and $L_y$ can be exactly zero simultaneously (they can't, unless $l = 0$).

> [!NOTE]
> **Concept Check 14.2**
> If two observables $A$ and $B$ are compatible ($[\hat{A}, \hat{B}] = 0$), does measuring $A$ necessarily disturb the value of $B$? What does the generalized uncertainty principle say about the minimum product $\Delta A \cdot \Delta B$ in this case?

---

## 5. Ehrenfest's Theorem (Preview)

The time evolution of expectation values follows classical-looking equations:

$$\frac{d\langle x\rangle}{dt} = \frac{\langle p\rangle}{m}$$

$$\frac{d\langle p\rangle}{dt} = -\left\langle\frac{dV}{dx}\right\rangle$$

These can be derived from $\frac{d}{dt}\langle A\rangle = \frac{i}{\hbar}\langle[\hat{H},\hat{A}]\rangle$ (for time-independent operators).

This shows that expectation values obey Newton's laws — the **correspondence principle** in action.

---

## Key Equations Summary

| Equation | Expression |
|----------|-----------|
| Commutator product rule | $[\hat{A},\hat{B}\hat{C}] = [\hat{A},\hat{B}]\hat{C} + \hat{B}[\hat{A},\hat{C}]$ |
| $[\hat{x},\hat{H}]$ | $i\hbar\hat{p}/m$ |
| $[\hat{x},\hat{p}^n]$ | $in\hbar\hat{p}^{n-1}$ |
| CSCO | Maximal set of commuting operators |
| Generalized uncertainty | $\Delta A\cdot\Delta B \geq \frac{1}{2}\|\langle[\hat{A},\hat{B}]\rangle\|$ |
| Ehrenfest | $\frac{d}{dt}\langle A\rangle = \frac{i}{\hbar}\langle[\hat{H},\hat{A}]\rangle$ |

## Recent Literature Spotlight

**"Tomography of Feshbach Resonance States"**
*B. Margulis, K. P. Horn, D. M. Reich, M. Upadhyay, N. Kahn, et al.*, Science, **2023**, 380, 77–81. [DOI](https://doi.org/10.1126/science.adf9888)

Using ion-electron coincidence detection, the authors performed the first tomographic characterization of Feshbach resonances in cold molecular collisions. These quasi-bound resonance states — where a scattering particle temporarily tunnels into a metastable potential well — represent the ultimate limit of quantum tunneling in multi-dimensional systems and are central to understanding ultracold chemistry.

---

## Practice Problems

1. **Commutator evaluation.** Calculate $[\hat{x}, \hat{p}^3]$ using commutator identities. Verify your result by acting on $f(x) = x^2$.

2. **Kinetic and potential energy.** Show that the kinetic energy operator $\hat{T} = \hat{p}^2/(2m)$ and the potential energy operator $\hat{V} = V(x)$ generally do not commute. Under what conditions do they commute?

3. **Angular momentum.** Given $[\hat{L}_x, \hat{L}_y] = i\hbar\hat{L}_z$ (and cyclic permutations), show that $[\hat{L}^2, \hat{L}_z] = 0$. What does this imply about simultaneous measurement of $L^2$ and $L_z$?

---

*Next lecture: Quantum Entanglement, Bell's Theorem & the EPR Paradox*
