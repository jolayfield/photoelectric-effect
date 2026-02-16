# Lecture 12 — Finite Potential Well & Quantum Tunneling

**Reading:** Engel 4th ed., Chapter 4 (Sections 4.5–4.7)

## Learning Objectives

- Contrast the finite and infinite potential wells qualitatively and quantitatively
- Explain the physical meaning of wavefunction penetration into classically forbidden regions
- Derive and apply the transmission coefficient for rectangular barriers
- Describe quantum tunneling and its role in chemistry (proton transfer, STM, nuclear fusion)
- Recognize when tunneling is significant vs. negligible

---

## 1. The Finite Potential Well

### The Potential

$$V(x) = \begin{cases} 0 & |x| \leq L/2 \\ V_0 & |x| > L/2 \end{cases}$$

where $V_0$ is finite (not infinite).

### Qualitative Differences from the Infinite Well

| Feature | Infinite well | Finite well |
|---------|--------------|-------------|
| Wavefunction at walls | Exactly zero | Nonzero (penetrates into barriers) |
| Number of bound states | Infinite | Finite (depends on $V_0$ and $L$) |
| Energies | $E_n = n^2h^2/(8ma^2)$ | Lower than infinite well values |
| "Effective" box size | Exactly $L$ | Greater than $L$ (particle "leaks" out) |

### Inside the Well ($|x| < L/2$, $E < V_0$):

$$\psi(x) = A\cos(kx) + B\sin(kx), \quad k = \frac{\sqrt{2mE}}{\hbar}$$

### Outside the Well ($|x| > L/2$):

$$\psi(x) = Ce^{-\kappa x} + De^{\kappa x}, \quad \kappa = \frac{\sqrt{2m(V_0 - E)}}{\hbar}$$

Physical requirement: $\psi \to 0$ as $|x| \to \infty$ (normalizability).

### Key Result: Wavefunction Penetration

The wavefunction decays exponentially in the classically forbidden region with a **penetration depth**:

$$\boxed{\delta = \frac{1}{\kappa} = \frac{\hbar}{\sqrt{2m(V_0 - E)}}}$$

- Lighter particles penetrate farther (smaller $m$)
- Particles with energy close to $V_0$ penetrate farther
- The probability of finding the particle in the forbidden region is nonzero but small

### Matching Conditions

At $x = \pm L/2$, we require:
1. $\psi$ is continuous
2. $d\psi/dx$ is continuous

These matching conditions lead to transcendental equations that determine the allowed energies. They must be solved graphically or numerically — no closed-form solution exists.

### Bound State Count

The number of bound states in a 1-D finite well of depth $V_0$ and width $L$:

$$N \approx 1 + \text{floor}\left(\frac{L\sqrt{2mV_0}}{\pi\hbar}\right)$$

There is **always at least one** bound state in a 1-D finite well (not true in 3-D!).

> [!NOTE]
> **Concept Check 12.1**
> In the finite potential well, as $V_0 \to \infty$, what happens to the penetration depth $\delta$? Show that the energies of the finite well approach the energies of the infinite well in this limit.

---

## 2. Quantum Tunneling

### The Rectangular Barrier

$$V(x) = \begin{cases} V_0 & 0 \leq x \leq a \\ 0 & \text{otherwise} \end{cases}$$

A particle with energy $E < V_0$ approaches from the left. Classically, it would be completely reflected. Quantum mechanically, there is a nonzero probability of transmission.

### The Transmission Coefficient

For $E < V_0$:

$$\boxed{T \approx e^{-2\kappa a}}$$

where $\kappa = \frac{\sqrt{2m(V_0 - E)}}{\hbar}$ and $a$ is the barrier width.

More precisely:

$$T = \frac{1}{1 + \frac{V_0^2\sinh^2(\kappa a)}{4E(V_0 - E)}}$$

For thick barriers ($\kappa a \gg 1$), the exponential approximation is excellent.

### What Controls Tunneling?

$$T \propto e^{-2a\sqrt{2m(V_0-E)}/\hbar}$$

Tunneling probability increases when:
- **Barrier is narrow** (small $a$)
- **Barrier is low** ($V_0 - E$ small)
- **Particle is light** (small $m$)

> [!NOTE]
> **Concept Check 12.2**
> If you double the width of a tunneling barrier ($a \to 2a$), while keeping the height $V_0$ and the particle's energy $E$ constant, how does the transmission coefficient $T$ change? (Assume the barrier is "thick" so the exponential approximation holds.)

| System | $m$ | Tunneling? |
|--------|-----|-----------|
| Electron through 1 nm oxide | $m_e$ | Significant |
| Proton through H-bond barrier | $m_p$ | Measurable |
| Deuteron (same barrier) | $2m_p$ | Reduced by $e^{-\sqrt{2}}$ |
| Carbon atom | $12m_p$ | Negligible |

---

## 3. Chemical Applications of Tunneling

### Scanning Tunneling Microscope (STM)

Electrons tunnel from a sharp metal tip across a vacuum gap (~1 nm) to a surface. The tunneling current depends exponentially on the tip-surface distance:

$$I \propto e^{-2\kappa d}$$

This extreme distance sensitivity (factor of ~10 per 0.1 nm) enables **atomic-resolution** imaging. Gerd Binnig and Heinrich Rohrer won the 1986 Nobel Prize for the STM.

### Proton Tunneling in Chemistry

- **Proton transfer reactions**: Tunneling contributes significantly to reaction rates, especially at low temperatures
- **Kinetic isotope effect**: Replacing H with D reduces tunneling → measurable rate decrease. The ratio $k_H/k_D > 1$ is a signature of tunneling
- **DNA mutations**: Some theories suggest proton tunneling between base pairs could cause rare tautomeric forms

### Nuclear Fusion

In the Sun's core, protons tunnel through Coulomb barriers to fuse — classical energies are far too low. Without tunneling, stars would not shine.

### Alpha Decay

George Gamow (1928) first explained radioactive alpha decay as tunneling of an alpha particle through the nuclear potential barrier.

---

## 4. The WKB Approximation (Brief)

For barriers of arbitrary shape $V(x)$, the transmission coefficient can be approximated as:

$$T \approx \exp\left(-\frac{2}{\hbar}\int_{x_1}^{x_2}\sqrt{2m[V(x)-E]}\,dx\right)$$

where $x_1$ and $x_2$ are the classical turning points. This **WKB (Wentzel-Kramers-Brillouin)** approximation is widely used in chemistry for reaction rate calculations.

---

## Key Equations Summary

| Equation | Expression |
|----------|-----------|
| Penetration depth | $\delta = \hbar/\sqrt{2m(V_0-E)}$ |
| Transmission coefficient | $T \approx e^{-2\kappa a}$ |
| Decay constant | $\kappa = \sqrt{2m(V_0-E)}/\hbar$ |
| WKB approximation | $T \approx \exp\left(-\frac{2}{\hbar}\int_{x_1}^{x_2}\sqrt{2m(V-E)}\,dx\right)$ |

## Recent Literature Spotlight

**"Recent Developments in Symmetry-Adapted Perturbation Theory"**
*K. Patkowski*, WIREs Computational Molecular Science, **2020**, 10, e1452. [DOI](https://doi.org/10.1002/wcms.1452)

This comprehensive review describes how quantum mechanical tunneling and finite-barrier effects are handled in symmetry-adapted perturbation theory (SAPT), the premier method for computing intermolecular interaction energies from first principles. The decomposition into electrostatics, induction, dispersion, and exchange — each arising from different quantum mechanical operators acting on finite-barrier wavefunctions — demonstrates the power of perturbation theory for chemical problems.

---

## Practice Problems

1. **Finite well.** An electron is in a finite well of depth $V_0 = 10$ eV and width $L = 0.50$ nm. (a) Calculate the penetration depth $\delta$ for the ground state energy $E \approx 0.6$ eV. (b) How does $\delta$ change if the particle is a proton instead?

2. **Tunneling probability.** An electron with $E = 5.0$ eV encounters a rectangular barrier of height $V_0 = 10.0$ eV and width $a = 0.50$ nm. Calculate the transmission coefficient. Repeat for $a = 1.0$ nm and $a = 2.0$ nm.

3. **Isotope effect.** A proton and a deuteron each encounter the same barrier ($V_0 - E = 0.4$ eV, $a = 0.05$ nm). Calculate the ratio $T_H / T_D$. This is related to the kinetic isotope effect in chemistry.

---

*Next week: Particle-in-a-Box Applications; Operators & Entanglement*
