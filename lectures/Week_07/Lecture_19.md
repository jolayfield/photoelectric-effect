# Lecture 19 — The Quantum Harmonic Oscillator

**Reading:** Engel 4th ed., Chapter 7 (Sections 7.1–7.3)

## Learning Objectives

- Set up the Schrödinger equation for the harmonic oscillator using the reduced mass
- State the quantized energy levels and explain zero-point energy
- Sketch the first several wavefunctions and probability densities
- Compare the quantum and classical probability distributions
- Connect the harmonic oscillator to real molecular vibrations

---

## 1. The Classical Harmonic Oscillator

A diatomic molecule vibrates like two masses connected by a spring. For small displacements from equilibrium, the potential is:

$$V(x) = \frac{1}{2}kx^2$$

where $x = r - r_e$ is the displacement from equilibrium and $k$ is the **force constant** (related to bond stiffness — units: N/m).

The classical frequency of oscillation:

$$\nu_{\text{cl}} = \frac{1}{2\pi}\sqrt{\frac{k}{\mu}}$$

where $\mu$ is the **reduced mass**:

$$\boxed{\mu = \frac{m_1 m_2}{m_1 + m_2}}$$

---

## 2. The Schrödinger Equation for the Harmonic Oscillator

$$-\frac{\hbar^2}{2\mu}\frac{d^2\psi}{dx^2} + \frac{1}{2}kx^2\psi = E\psi$$

This equation has exact analytical solutions discovered by Hermite. The key results:

### Quantized Energy Levels

$$\boxed{E_v = \left(v + \frac{1}{2}\right)\hbar\omega = \left(v + \frac{1}{2}\right)h\nu, \quad v = 0, 1, 2, \ldots}$$

where $\omega = \sqrt{k/\mu}$ is the angular frequency and $\nu = \omega/(2\pi)$.

### Key Features

1. **Even spacing**: $\Delta E = \hbar\omega = h\nu$ between all adjacent levels
2. **Zero-point energy**: $E_0 = \frac{1}{2}\hbar\omega \neq 0$
   - The molecule can never stop vibrating completely
   - Required by the uncertainty principle: $\Delta x\cdot\Delta p \geq \hbar/2$
3. **Equal spacing** is a unique feature of the harmonic potential
4. **Non-degenerate**: each energy level has exactly one wavefunction

> [!NOTE]
> **Concept Check 19.1**
> Explain why the harmonic oscillator has a non-zero energy ($E_0 = \frac{1}{2}\hbar\omega$) even in its lowest possible state. How does this result relate to the Heisenberg uncertainty principle?

---

## 3. Wavefunctions

$$\psi_v(x) = N_v\, H_v(\alpha x)\, e^{-\alpha^2 x^2/2}$$

where:
- $\alpha = \left(\frac{\mu\omega}{\hbar}\right)^{1/2} = \left(\frac{\mu k}{\hbar^2}\right)^{1/4}$
- $H_v$ are the **Hermite polynomials**
- $N_v = \left(\frac{\alpha}{\sqrt{\pi}\,2^v\,v!}\right)^{1/2}$ is the normalization constant

### First Few Hermite Polynomials

| $v$ | $H_v(y)$ | $\psi_v(x)$ (unnormalized) |
|-----|---------|--------------------------|
| 0 | 1 | $e^{-\alpha^2x^2/2}$ |
| 1 | $2y$ | $x\,e^{-\alpha^2x^2/2}$ |
| 2 | $4y^2-2$ | $(2\alpha^2x^2-1)e^{-\alpha^2x^2/2}$ |
| 3 | $8y^3-12y$ | $(2\alpha^3x^3-3\alpha x)e^{-\alpha^2x^2/2}$ |

### Properties of the Wavefunctions

- $\psi_v$ has $v$ nodes
- **Parity**: Even $v$ → symmetric ($\psi_v(-x) = \psi_v(x)$); Odd $v$ → antisymmetric ($\psi_v(-x) = -\psi_v(x)$)
- All wavefunctions decay as Gaussians at large $|x|$
- The ground state $\psi_0$ is itself a Gaussian — the minimum-uncertainty wave packet

### Symmetry Classification

In a molecule with symmetry, each vibrational mode belongs to an irreducible representation (from Week 6). The ground vibrational state ($v = 0$) always transforms as the totally symmetric representation (e.g., $A_1$ in $C_{2v}$).

---

## 4. Classical Turning Points and Tunneling

The classical turning points are where $E = V(x)$:

$$x_{\text{tp}} = \pm\sqrt{\frac{2E}{k}} = \pm\sqrt{\frac{(2v+1)\hbar}{\mu\omega}}$$

Classically, the particle cannot exist beyond these points. Quantum mechanically, $\psi_v$ extends into the classically forbidden region (exponential tail) — **tunneling into the barrier**.

For the ground state ($v = 0$), the probability of finding the particle beyond the classical turning points is approximately **16%**.

---

## 5. Classical vs. Quantum Probability

**Classical:** A classical oscillator spends more time near the turning points (where it slows down), so the probability density peaks at the edges.

**Quantum (low $v$):** The ground state probability density peaks at the center — opposite to the classical result.

**Quantum (large $v$):** The quantum probability density averaged over oscillations approaches the classical result — the **correspondence principle**.

> [!NOTE]
> **Concept Check 19.2**
> Sketch the probability density for a particle in the $v = 100$ state of a harmonic oscillator (qualitatively). Where is the particle most likely to be found, and how does this compare to the $v = 0$ case?

---

## 6. Molecular Vibrational Parameters

| Molecule | $\tilde{\nu}$ (cm⁻¹) | $k$ (N/m) | $E_0/hc$ (cm⁻¹) |
|----------|---------------------|-----------|-----------------|
| H₂ | 4401 | 575 | 2200 |
| HCl | 2991 | 516 | 1496 |
| HBr | 2649 | 412 | 1325 |
| CO | 2170 | 1902 | 1085 |
| N₂ | 2359 | 2294 | 1180 |

- Strong bonds → large $k$ → high $\tilde{\nu}$
- Light atoms (especially H) → small $\mu$ → high $\tilde{\nu}$

---

## Key Equations Summary

| Equation | Expression |
|----------|-----------|
| Reduced mass | $\mu = m_1m_2/(m_1+m_2)$ |
| Classical frequency | $\nu = \frac{1}{2\pi}\sqrt{k/\mu}$ |
| Energy levels | $E_v = (v+\frac{1}{2})\hbar\omega$ |
| Zero-point energy | $E_0 = \frac{1}{2}\hbar\omega$ |
| Level spacing | $\Delta E = \hbar\omega$ |
| Wavefunctions | $\psi_v = N_v H_v(\alpha x)e^{-\alpha^2x^2/2}$ |

## Recent Literature Spotlight

**"Anharmonic Force Constants Extracted from First-Principles Molecular Dynamics"**
*O. Hellman, I. A. Abrikosov, S. I. Simak*, Physical Review Letters, **2018**, 121, 225902. [DOI](https://doi.org/10.1103/PhysRevLett.121.225902)

This work introduces a method for extracting anharmonic force constants from ab initio molecular dynamics, enabling the calculation of phonon properties that go beyond the harmonic approximation. The temperature-dependent phonon spectra in diamond illustrate how the parabolic potential $V = \frac{1}{2}kx^2$ taught in this lecture is only the first term in a more complete description of molecular vibrations.

---

## Practice Problems

1. **Force constant.** The fundamental vibrational frequency of ¹H³⁵Cl is 2991 cm⁻¹. Calculate (a) the reduced mass, (b) the force constant, and (c) the zero-point energy in kJ/mol.

2. **Isotope effect.** Predict the fundamental frequency of ²H³⁵Cl (DCl) given that $\tilde{\nu}$(HCl) = 2991 cm⁻¹. Assume the force constant is unchanged.

3. **Classical turning points.** Calculate the classical turning points for the $v = 0$ and $v = 5$ states of HCl. Express in pm and compare to the equilibrium bond length of 127.5 pm.

---

*Next lecture: Harmonic Oscillator Properties & Ladder Operators*
