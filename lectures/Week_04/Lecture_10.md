# Lecture 10 — The Uncertainty Principle & Problem-Solving Workshop

**Reading:** Engel 4th ed., Chapter 3 (Sections 3.7–3.8)

## Learning Objectives

- Derive the generalized uncertainty principle from the postulates
- Apply the Heisenberg uncertainty principle to physical problems
- Verify the uncertainty principle using the particle in a box
- Work through representative problems applying the postulates to the PIB

---

## 1. The Generalized Uncertainty Principle

### Statement

For any two observables $A$ and $B$:

$$\boxed{\Delta A \cdot \Delta B \geq \frac{1}{2}\left|\langle[\hat{A}, \hat{B}]\rangle\right|}$$

where $\Delta A = \sqrt{\langle A^2\rangle - \langle A\rangle^2}$ is the standard deviation of measurements of $A$.

### Derivation Sketch

1. Define $\hat{\alpha} = \hat{A} - \langle A\rangle$ and $\hat{\beta} = \hat{B} - \langle B\rangle$
2. Consider $I(\lambda) = \int|(\hat{\alpha} + i\lambda\hat{\beta})\Psi|^2\,dx \geq 0$ for all real $\lambda$
3. Expand: $I(\lambda) = \langle\hat{\alpha}^2\rangle + \lambda^2\langle\hat{\beta}^2\rangle + i\lambda\langle[\hat{\alpha},\hat{\beta}]\rangle \geq 0$
4. Since $[\hat{\alpha},\hat{\beta}] = [\hat{A},\hat{B}]$, the discriminant condition gives the result

### The Heisenberg Uncertainty Principle

For position and momentum: $[\hat{x}, \hat{p}] = i\hbar$

$$\boxed{\Delta x \cdot \Delta p \geq \frac{\hbar}{2}}$$

This is not about limitations of measurement apparatus — it is a fundamental property of nature arising from the wave-like character of matter.

> [!NOTE]
> **Concept Check 10.1**
> Is it possible for a particle to be in a state where the uncertainty in its position ($\Delta x$) is exactly zero? If so, what does the uncertainty principle predict for the uncertainty in its momentum ($\Delta p$)?

### Energy-Time Uncertainty

$$\Delta E \cdot \Delta t \geq \frac{\hbar}{2}$$

Here $\Delta t$ is the time required for a significant change in the system, not an "uncertainty in time measurement." This relation explains:
- Natural linewidths of spectral lines
- Lifetimes of excited states
- Virtual particles in quantum field theory

---

## 2. Verifying Uncertainty with the Particle in a Box

### Complete Calculation for the PIB Ground State

For $\psi_1(x) = \sqrt{2/a}\sin(\pi x/a)$:

**Position:**

$$\langle x \rangle = \frac{2}{a}\int_0^a x\sin^2\left(\frac{\pi x}{a}\right)dx = \frac{a}{2}$$

$$\langle x^2 \rangle = \frac{2}{a}\int_0^a x^2\sin^2\left(\frac{\pi x}{a}\right)dx = a^2\left(\frac{1}{3} - \frac{1}{2\pi^2}\right)$$

$$\Delta x = \sqrt{\langle x^2 \rangle - \langle x \rangle^2} = a\sqrt{\frac{1}{12} - \frac{1}{2\pi^2}} \approx 0.181a$$

**Momentum:**

$$\langle p \rangle = \frac{2}{a}\int_0^a \sin\left(\frac{\pi x}{a}\right)\left(-i\hbar\frac{d}{dx}\right)\sin\left(\frac{\pi x}{a}\right)dx = 0$$

$$\langle p^2 \rangle = \frac{2}{a}\int_0^a \sin\left(\frac{\pi x}{a}\right)\left(-\hbar^2\frac{d^2}{dx^2}\right)\sin\left(\frac{\pi x}{a}\right)dx = \frac{\pi^2\hbar^2}{a^2}$$

$$\Delta p = \sqrt{\langle p^2 \rangle - \langle p \rangle^2} = \frac{\pi\hbar}{a}$$

**Verification:**

$$\Delta x \cdot \Delta p = \pi\hbar\sqrt{\frac{1}{12} - \frac{1}{2\pi^2}} \approx 0.568\,\hbar > \frac{\hbar}{2} \quad \checkmark$$

The PIB ground state satisfies the uncertainty principle, but does *not* saturate the bound (only a Gaussian wave packet achieves exact equality).

> [!NOTE]
> **Concept Check 10.2**
> For the $n = 2$ PIB state, would you expect $\Delta x$ to be larger or smaller than for $n = 1$? What about $\Delta p$? (Hint: think about the shape of $|\psi_2|^2$ — it has two peaks vs. one.)

---

## 3. Physical Consequences

### Zero-Point Energy from Uncertainty

The uncertainty principle forbids a particle from being simultaneously at rest ($p = 0$) and at a definite position ($\Delta x = 0$). Confined particles always have nonzero kinetic energy — the **zero-point energy**.

**Quick estimate for the PIB:**

$$\Delta x \sim a, \quad \Delta p \gtrsim \frac{\hbar}{2a}, \quad E_{\min} \sim \frac{(\Delta p)^2}{2m} \sim \frac{\hbar^2}{8ma^2}$$

Compare to the exact ground-state energy: $E_1 = \frac{\pi^2\hbar^2}{2ma^2} = \frac{h^2}{8ma^2}$ — the same order of magnitude!

### Stability of Atoms

Classical electrodynamics predicts that an orbiting electron should radiate and spiral into the nucleus. The uncertainty principle prevents this: confining the electron to a smaller region ($\Delta x$ decreases) increases the momentum ($\Delta p$ increases), raising the kinetic energy. The atom reaches a stable minimum-energy configuration.

**Quick estimate for hydrogen:**

$$E(\Delta x) \approx \frac{\hbar^2}{2m_e(\Delta x)^2} - \frac{e^2}{4\pi\epsilon_0\,\Delta x}$$

Minimizing: $\Delta x_{\min} \approx a_0$ (the Bohr radius), $E_{\min} \approx -13.6$ eV. The uncertainty principle gives the correct order of magnitude!

### What the Uncertainty Principle Does NOT Say

- ❌ It does NOT say measurements are imprecise due to crude instruments
- ❌ It does NOT say the act of measurement always disturbs the system (though it can)
- ✅ It DOES say that conjugate variables cannot simultaneously have well-defined values
- ✅ It IS a property of the wave nature of quantum states

---

## 4. Compatible and Incompatible Observables

| Property | Compatible ($[\hat{A},\hat{B}] = 0$) | Incompatible ($[\hat{A},\hat{B}] \neq 0$) |
|----------|------|------|
| Simultaneous eigenstates? | Yes | No |
| Measured simultaneously? | Yes, to arbitrary precision | No; $\Delta A\cdot\Delta B \geq \frac{1}{2}|\langle[\hat{A},\hat{B}]\rangle|$ |
| Example | $\hat{L}^2$ and $\hat{L}_z$ | $\hat{x}$ and $\hat{p}$ |

**PIB connection:** The PIB eigenstates are eigenstates of $\hat{H}$ and $\hat{p}^2$ simultaneously (since $\hat{H} = \hat{p}^2/(2m)$ inside the box, so $[\hat{H}, \hat{p}^2] = 0$). But they are *not* eigenstates of $\hat{p}$ or $\hat{x}$ individually.

---

## 5. Problem-Solving Workshop

### Worked Problem 1: Eigenvalue Verification

*Is $\psi = Axe^{-\alpha x}$ (for $x \geq 0$) an eigenfunction of the kinetic energy operator?*

Apply $\hat{T} = -\frac{\hbar^2}{2m}\frac{d^2}{dx^2}$:

$$\frac{d\psi}{dx} = A(1 - \alpha x)e^{-\alpha x}$$

$$\frac{d^2\psi}{dx^2} = A(-2\alpha + \alpha^2 x)e^{-\alpha x}$$

$$\hat{T}\psi = -\frac{\hbar^2}{2m}A(\alpha^2 x - 2\alpha)e^{-\alpha x}$$

This is NOT proportional to $\psi = Axe^{-\alpha x}$ (additional constant term in the parentheses), so $\psi$ is **not** an eigenfunction of $\hat{T}$.

### Worked Problem 2: Commutator Practice

*Evaluate $[\hat{x}, \hat{p}^2]$.*

Using the identity $[\hat{A}, \hat{B}\hat{C}] = [\hat{A}, \hat{B}]\hat{C} + \hat{B}[\hat{A}, \hat{C}]$:

$$[\hat{x}, \hat{p}^2] = [\hat{x}, \hat{p}]\hat{p} + \hat{p}[\hat{x}, \hat{p}] = i\hbar\hat{p} + \hat{p}(i\hbar) = 2i\hbar\hat{p}$$

### Worked Problem 3: PIB Transition Wavelength

*Conjugated dye molecules can be modeled as a PIB. β-carotene has 11 conjugated double bonds spanning $a \approx 2.4$ nm, with 22 π-electrons filling levels $n = 1$ through $n = 11$. Calculate the wavelength of the lowest-energy electronic transition ($n = 11 \to 12$).*

$$\Delta E = (12^2 - 11^2)\frac{h^2}{8m_ea^2} = 23 \cdot \frac{(6.626\times10^{-34})^2}{8(9.109\times10^{-31})(2.4\times10^{-9})^2}$$

$$\Delta E \approx 3.8 \times 10^{-19}\text{ J}, \quad \lambda = \frac{hc}{\Delta E} \approx 520\text{ nm (green)}$$

This correctly predicts that β-carotene absorbs blue-green light, making it appear orange-red!

---

## Key Equations Summary

| Equation | Expression |
|----------|-----------|
| Generalized uncertainty | $\Delta A\cdot\Delta B \geq \frac{1}{2}\|\langle[\hat{A},\hat{B}]\rangle\|$ |
| Position-momentum | $\Delta x\cdot\Delta p \geq \hbar/2$ |
| Energy-time | $\Delta E\cdot\Delta t \geq \hbar/2$ |
| Commutator identity | $[\hat{A},\hat{B}\hat{C}] = [\hat{A},\hat{B}]\hat{C} + \hat{B}[\hat{A},\hat{C}]$ |
| PIB $\Delta x$ (ground state) | $a\sqrt{1/12 - 1/(2\pi^2)} \approx 0.181a$ |
| PIB $\Delta p$ (ground state) | $\pi\hbar/a$ |

## Recent Literature Spotlight

**"Fragment Molecular Orbital-Based Variational Quantum Eigensolver for Quantum Chemistry in the Age of Quantum Computing"**
*H. Yoshida, T. Takahashi, H. C. Watanabe, et al.*, Scientific Reports, **2024**, 14, 2564. [DOI](https://doi.org/10.1038/s41598-024-52926-3)

This paper uses the variational principle on a quantum computer to find ground-state energies of molecules. The FMO/VQE algorithm works by minimizing $\langle \Psi_{\text{trial}} | \hat{H} | \Psi_{\text{trial}} \rangle$ with respect to parameterized trial wavefunctions — exactly like our uncertainty-principle-based energy estimation, but using a quantum computer to handle many-electron systems. The uncertainty principle sets the fundamental limits on what can be simultaneously known about these molecular systems.

---

## Practice Problems

1. **Estimation.** Use the uncertainty principle to estimate the ground-state energy of a harmonic oscillator ($V = \frac{1}{2}kx^2$). Compare to the exact result $E_0 = \frac{1}{2}\hbar\omega$.

2. **Spectral linewidths.** An excited state has a lifetime of $\tau = 10^{-8}$ s. Estimate the minimum uncertainty in the energy of the emitted photon and the corresponding natural linewidth $\Delta\nu$.

3. **PIB uncertainty for $n = 2$.** Calculate $\Delta x$ and $\Delta p$ for the $n = 2$ PIB state and verify $\Delta x \cdot \Delta p \geq \hbar/2$.

---

*Next lecture: Particle in 2-D and 3-D Boxes — Degeneracy*
