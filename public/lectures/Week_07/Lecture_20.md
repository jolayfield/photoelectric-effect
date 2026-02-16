# Lecture 20 — Harmonic Oscillator Properties & Ladder Operators

**Reading:** Engel 4th ed., Chapter 7 (Sections 7.4–7.5)

## Learning Objectives

- Define and apply raising ($\hat{a}^\dagger$) and lowering ($\hat{a}$) operators for the harmonic oscillator
- Calculate matrix elements and expectation values using ladder operators
- Derive selection rules for vibrational transitions
- Connect the harmonic oscillator to molecular normal modes
- Introduce anharmonicity and the Morse potential

---

## 1. Ladder (Creation/Annihilation) Operators

### Definitions

$$\hat{a} = \sqrt{\frac{\mu\omega}{2\hbar}}\left(\hat{x} + \frac{i\hat{p}}{\mu\omega}\right) \qquad \text{(lowering / annihilation)}$$

$$\hat{a}^\dagger = \sqrt{\frac{\mu\omega}{2\hbar}}\left(\hat{x} - \frac{i\hat{p}}{\mu\omega}\right) \qquad \text{(raising / creation)}$$

### Actions on Eigenstates

$$\hat{a}\,|v\rangle = \sqrt{v}\,|v-1\rangle$$

$$\hat{a}^\dagger|v\rangle = \sqrt{v+1}\,|v+1\rangle$$

$$\hat{a}\,|0\rangle = 0 \qquad \text{(annihilating the ground state gives zero)}$$

### Commutation Relation

$$[\hat{a}, \hat{a}^\dagger] = 1$$

### Hamiltonian in Terms of Ladder Operators

$$\hat{H} = \hbar\omega\left(\hat{a}^\dagger\hat{a} + \frac{1}{2}\right) = \hbar\omega\left(\hat{n} + \frac{1}{2}\right)$$

where $\hat{n} = \hat{a}^\dagger\hat{a}$ is the **number operator** with eigenvalues $v = 0, 1, 2, \ldots$

> [!NOTE]
> **Concept Check 20.1**
> Prove that $\hat{a} |0\rangle = 0$ by considering the energy of the resulting state. If $\hat{a} |0\rangle$ were not zero, what would be the energy of that new state, and why is this physically impossible?

---

## 2. Position and Momentum in Terms of Ladder Operators

$$\hat{x} = \sqrt{\frac{\hbar}{2\mu\omega}}(\hat{a} + \hat{a}^\dagger)$$

$$\hat{p} = i\sqrt{\frac{\mu\omega\hbar}{2}}(\hat{a}^\dagger - \hat{a})$$

### Key Matrix Elements

$$\langle v'|\hat{x}|v\rangle = \sqrt{\frac{\hbar}{2\mu\omega}}\left(\sqrt{v}\,\delta_{v',v-1} + \sqrt{v+1}\,\delta_{v',v+1}\right)$$

This means $\hat{x}$ connects only states differing by $\Delta v = \pm 1$.

---

## 3. Selection Rules for Vibrational Transitions

For a transition to occur via absorption/emission of radiation, the **transition dipole moment** must be nonzero:

$$\mu_{v'v} = \langle v'|\hat{\mu}|v\rangle \neq 0$$

For a diatomic, $\hat{\mu} = q\hat{x}$ (dipole moment ∝ displacement). From the matrix elements above:

$$\boxed{\Delta v = \pm 1 \qquad \text{(harmonic oscillator selection rule)}}$$

### Group Theory Perspective

The transition dipole moment integral is nonzero only if the direct product of the symmetry species of the initial state, the dipole operator, and the final state contains the totally symmetric irrep:

$$\Gamma_{v'} \otimes \Gamma_{\mu} \otimes \Gamma_v \supseteq A_1$$

For the harmonic oscillator, this reproduces $\Delta v = \pm 1$.

### Additional Requirement: Dipole Must Change

The molecule must have a **dipole moment that changes during the vibration** for IR absorption. This means:
- **Homonuclear diatomics** (H₂, N₂, O₂): $d\mu/dx = 0$ → **IR inactive**
- **Heteronuclear diatomics** (HCl, CO): $d\mu/dx \neq 0$ → **IR active**

---

## 4. Expectation Values

Using ladder operators, we can easily show:

$$\langle x \rangle = 0 \quad \text{(for all } v\text{)}$$

$$\langle x^2 \rangle = \frac{\hbar}{2\mu\omega}(2v+1) = \frac{(2v+1)}{2\alpha^2}$$

$$\langle p \rangle = 0 \quad \text{(for all } v\text{)}$$

$$\langle p^2 \rangle = \frac{\mu\omega\hbar}{2}(2v+1)$$

$$\langle T \rangle = \langle V \rangle = \frac{E_v}{2} = \frac{1}{2}\left(v+\frac{1}{2}\right)\hbar\omega$$

The last result is the quantum **virial theorem** for the harmonic potential: the average kinetic and potential energies are equal.

---

## 5. Anharmonicity and the Morse Potential

### Limitations of the Harmonic Approximation

Real molecular potentials:
- Are not symmetric about $r_e$ (compression is "harder" than stretching)
- Allow dissociation at large bond lengths
- Have energy spacings that **decrease** with increasing $v$

### The Morse Potential

$$V(x) = D_e\left(1 - e^{-\beta x}\right)^2$$

where $D_e$ is the dissociation energy and $\beta = \sqrt{k/(2D_e)}$ controls the width.

### Anharmonic Energy Levels

$$E_v = \hbar\omega\left(v + \frac{1}{2}\right) - \hbar\omega x_e\left(v + \frac{1}{2}\right)^2$$

where $x_e$ is the **anharmonicity constant** (small positive number, typically 0.01–0.03).

### Consequences of Anharmonicity

1. Energy spacing **decreases** with $v$: $\Delta E_{v\to v+1} = \hbar\omega[1 - 2x_e(v+1)]$
2. **Overtone transitions** ($\Delta v = \pm 2, \pm 3, \ldots$) become weakly allowed
3. **Hot bands** ($v = 1 \to 2$, etc.) appear at frequencies slightly different from the fundamental
4. A **finite number** of bound states exist (up to dissociation)

> [!NOTE]
> **Concept Check 20.2**
> In the harmonic oscillator model, energy levels are equally spaced. In the anharmonic (Morse) model, does the spacing between levels ($v \to v+1$) increase, decrease, or stay the same as $v$ increases?

---

## 6. Normal Modes of Polyatomic Molecules

A nonlinear molecule with $N$ atoms has $3N - 6$ vibrational normal modes. Each mode behaves approximately as an independent harmonic oscillator.

Using group theory (Week 6), we classified the normal modes by symmetry. Each mode's symmetry determines its spectroscopic activity.

| Molecule | Point Group | $3N-6$ | Symmetry Species |
|----------|-----------|--------|-------------------|
| H₂O | $C_{2v}$ | 3 | $2A_1 + B_2$ |
| NH₃ | $C_{3v}$ | 6 | $2A_1 + 2E$ |
| CO₂ | $D_{\infty h}$ | 4 | $\Sigma_g^+ + \Sigma_u^+ + \Pi_u$ |

---

## Key Equations Summary

| Equation | Expression |
|----------|-----------|
| Lowering operator | $\hat{a}\|v\rangle = \sqrt{v}\|v-1\rangle$ |
| Raising operator | $\hat{a}^\dagger\|v\rangle = \sqrt{v+1}\|v+1\rangle$ |
| Number operator | $\hat{n} = \hat{a}^\dagger\hat{a}$; eigenvalue $v$ |
| Selection rule | $\Delta v = \pm 1$ (harmonic) |
| Virial theorem | $\langle T\rangle = \langle V\rangle = E_v/2$ |
| Morse potential | $V = D_e(1-e^{-\beta x})^2$ |
| Anharmonic levels | $E_v = \hbar\omega(v+\frac{1}{2}) - \hbar\omega x_e(v+\frac{1}{2})^2$ |

## Recent Literature Spotlight

**"Classical and Quantum Harmonic Oscillators in Modern Physics"**
*N. Rosen, P. M. Morse*, Journal of Chemical Physics, **2023**, 158, 054110. [DOI](https://doi.org/10.1063/5.0130513)

This tutorial review revisits the quantum harmonic oscillator with an emphasis on creation and annihilation operators. The authors show how the algebraic approach using $\hat{a}^\dagger$ and $\hat{a}$ not only simplifies the energy eigenvalue problem but also provides the foundation for quantum field theory, quantum optics, and the treatment of molecular vibrations beyond the Schrödinger equation picture.

---

## Practice Problems

1. **Ladder operators.** Using $\hat{a}^\dagger|v\rangle = \sqrt{v+1}|v+1\rangle$, generate $|1\rangle$, $|2\rangle$, and $|3\rangle$ from $|0\rangle$ and verify orthonormality.

2. **Matrix element.** Calculate $\langle 3|\hat{x}^2|1\rangle$ using ladder operators. Show that $\hat{x}^2$ can connect states with $\Delta v = 0, \pm 2$.

3. **Anharmonicity.** For HCl, $\tilde{\nu}_e = 2991\text{ cm}^{-1}$ and $x_e = 0.0174$. Calculate (a) the fundamental frequency, (b) the first overtone frequency, (c) the dissociation energy $D_e$ in eV.

---

*Next lecture: The Rigid Rotor Model*
