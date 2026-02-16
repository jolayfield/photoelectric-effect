# Lecture 21 — The Rigid Rotor Model

**Reading:** Engel 4th ed., Chapter 7 (Sections 7.6–7.8)

## Learning Objectives

- Solve the Schrödinger equation for the rigid rotor (particle on a sphere)
- Identify the quantum numbers $J$ and $m_J$ and their physical meaning
- Describe the spherical harmonics and their connection to angular momentum
- Calculate rotational energy levels and degeneracies
- Relate moment of inertia, bond length, and rotational constant

---

## 1. The Classical Rigid Rotor

Two atoms of masses $m_1$ and $m_2$ separated by a fixed distance $r_e$ (bond length), rotating about their center of mass.

**Moment of inertia:**

$$I = \mu r_e^2$$

**Classical rotational energy:**

$$E_{\text{rot}} = \frac{L^2}{2I}$$

where $L$ is the angular momentum.

> [!NOTE]
> **Concept Check 21.1**
> If the bond length of a rotating diatomic molecule increases by 10% (while the masses stay the same), by what percentage does the moment of inertia $I$ change? How does this affect the rotational energy levels?

---

## 2. The Quantum Rigid Rotor — Schrödinger Equation

In spherical coordinates, the rigid rotor Hamiltonian involves only angular variables $(\theta, \phi)$:

$$\hat{H} = -\frac{\hbar^2}{2I}\left[\frac{1}{\sin\theta}\frac{\partial}{\partial\theta}\left(\sin\theta\frac{\partial}{\partial\theta}\right) + \frac{1}{\sin^2\theta}\frac{\partial^2}{\partial\phi^2}\right]$$

This is equivalent to:

$$\hat{H} = \frac{\hat{L}^2}{2I}$$

where $\hat{L}^2$ is the angular momentum squared operator.

---

## 3. Spherical Harmonics — Solutions

The eigenfunctions are the **spherical harmonics** $Y_J^{m_J}(\theta, \phi)$:

$$\hat{H}\,Y_J^{m_J}(\theta,\phi) = E_J\,Y_J^{m_J}(\theta,\phi)$$

### Energy Levels

$$\boxed{E_J = \frac{\hbar^2}{2I}J(J+1) = BhcJ(J+1), \quad J = 0, 1, 2, \ldots}$$

where the **rotational constant** is:

$$B = \frac{\hbar}{4\pi cI} = \frac{h}{8\pi^2 cI} \quad \text{(in cm}^{-1}\text{)}$$

### Quantum Numbers

| Quantum Number | Symbol | Range | Physical Meaning |
|---------------|--------|-------|-----------------|
| Rotational | $J$ | $0, 1, 2, \ldots$ | Total angular momentum: $|L| = \hbar\sqrt{J(J+1)}$ |
| Magnetic | $m_J$ | $-J, \ldots, 0, \ldots, +J$ | $z$-component: $L_z = m_J\hbar$ |

### Degeneracy

Each level $J$ has $(2J+1)$ degenerate states (different $m_J$ values):

$$g_J = 2J + 1$$

This degeneracy reflects the **spherical symmetry** — the energy doesn't depend on the orientation of the angular momentum.

---

## 4. Angular Momentum

### Operators and Eigenvalues

$$\hat{L}^2\,Y_J^{m_J} = \hbar^2 J(J+1)\,Y_J^{m_J}$$

$$\hat{L}_z\,Y_J^{m_J} = m_J\hbar\,Y_J^{m_J}$$

$\hat{L}^2$ and $\hat{L}_z$ **commute**: $[\hat{L}^2, \hat{L}_z] = 0$
→ They share eigenfunctions and can be simultaneously specified.

But: $[\hat{L}_x, \hat{L}_y] = i\hbar\hat{L}_z$ (and cyclic permutations)
→ Only one component of $\vec{L}$ can be known along with $L^2$.

### Space Quantization

The angular momentum vector $\vec{L}$ has:
- Fixed magnitude: $|\vec{L}| = \hbar\sqrt{J(J+1)}$
- Fixed $z$-component: $L_z = m_J\hbar$

But $L_x$ and $L_y$ are **uncertain** — the angular momentum vector precesses around the $z$-axis on a cone.

> [!NOTE]
> **Concept Check 21.2**
> For a rigid rotor in the state $J = 1$, what are the possible values of the $z$-component of angular momentum ($L_z$)? What is the total magnitude of the angular momentum vector $|\vec{L}|$ in this state?

---

## 5. The First Few Spherical Harmonics

| $J$ | $m_J$ | $Y_J^{m_J}(\theta,\phi)$ |
|-----|-------|------------------------|
| 0 | 0 | $\frac{1}{\sqrt{4\pi}}$ |
| 1 | 0 | $\sqrt{\frac{3}{4\pi}}\cos\theta$ |
| 1 | ±1 | $\mp\sqrt{\frac{3}{8\pi}}\sin\theta\,e^{\pm i\phi}$ |
| 2 | 0 | $\sqrt{\frac{5}{16\pi}}(3\cos^2\theta - 1)$ |

These same functions appear as the angular parts of atomic orbitals:
- $J = 0$ → $s$ orbitals (spherically symmetric)
- $J = 1$ → $p$ orbitals
- $J = 2$ → $d$ orbitals

### Symmetry of Spherical Harmonics

In the full rotation group $R_3$, spherical harmonics with quantum number $J$ transform as the irreducible representation of dimension $2J+1$. Under specific point groups:

- $Y_1^0 \sim z$ (transforms like $p_z$)
- $Y_1^{\pm 1} \sim (x \pm iy)$ (transforms like $p_x, p_y$)

---

## 6. Rotational Constants and Bond Lengths

$$B = \frac{h}{8\pi^2 c\mu r_e^2}$$

Measuring $B$ from the rotational spectrum gives the **bond length** $r_e$ directly:

$$r_e = \sqrt{\frac{h}{8\pi^2 c\mu B}}$$

| Molecule | $B$ (cm⁻¹) | $r_e$ (pm) |
|----------|-----------|-----------|
| HCl | 10.59 | 127.5 |
| HBr | 8.46 | 141.4 |
| CO | 1.931 | 112.8 |
| N₂ | 2.010 | 109.8 |

---

## 7. Energy Level Spacing

$$E_J - E_{J-1} = 2BhcJ$$

The spacing increases linearly with $J$:
- $J = 0 \to 1$: gap = $2Bhc$
- $J = 1 \to 2$: gap = $4Bhc$
- $J = 2 \to 3$: gap = $6Bhc$

This contrasts with the harmonic oscillator (constant spacing) and the particle in a box (quadratic spacing).

---

## Key Equations Summary

| Equation | Expression |
|----------|-----------|
| Moment of inertia | $I = \mu r_e^2$ |
| Rotational energies | $E_J = BhcJ(J+1)$ |
| Rotational constant | $B = h/(8\pi^2 cI)$ |
| Angular momentum | $\|L\| = \hbar\sqrt{J(J+1)}$ |
| $z$-component | $L_z = m_J\hbar$ |
| Degeneracy | $g_J = 2J+1$ |
| Level spacing | $\Delta E = 2BhcJ$ |

## Recent Literature Spotlight

**"Rotational-State-Selected Carbon Astrochemistry"**
*J. Toscano*, Chimia, **2024**, 78, 40–44. [DOI](https://doi.org/10.2533/chimia.2024.40)

This review describes how state-selected molecular beams, prepared in individual rotational quantum states $|J, M_J\rangle$, are used to study carbon-bearing reactions relevant to astrochemistry. By controlling the rotational angular momentum of reactant molecules, chemists can probe how quantized angular momentum influences reaction dynamics — a direct application of the rigid rotor energy levels taught in this lecture.

---

## Practice Problems

1. **Bond length.** The rotational constant of ¹²C¹⁶O is $B = 1.931$ cm⁻¹. Calculate the bond length.

2. **Energy levels.** Calculate the energies (in cm⁻¹) of the first five rotational levels ($J = 0$ to $4$) of HCl. What are the frequencies (in GHz) of the $J = 0 \to 1$ and $J = 3 \to 4$ transitions?

3. **Degeneracy and populations.** At 300 K, calculate the ratio of the population in $J = 1$ to $J = 0$ for HCl, including the degeneracy factor. Use the Boltzmann distribution: $N_J/N_0 = (2J+1)\exp[-E_J/(k_BT)]$.

---

*Next week: Vibrational and Rotational Spectroscopy of Diatomic Molecules*
