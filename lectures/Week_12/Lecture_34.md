# Lecture 34 — The H₂⁺ Molecule Ion & LCAO-MO Theory

**Reading:** Engel 4th ed., Chapter 12 (Sections 12.1–12.3)

## Learning Objectives

- Explain why chemical bonds form from a quantum-mechanical perspective
- Set up the Schrödinger equation for H₂⁺ and interpret its solutions
- Construct molecular orbitals as linear combinations of atomic orbitals (LCAO)
- Distinguish bonding ($\sigma$) and antibonding ($\sigma^*$) orbitals
- Define and interpret the overlap, Coulomb, and resonance integrals

---

## 1. Why Do Chemical Bonds Form?

A covalent bond forms when:
1. The total energy (electronic + nuclear repulsion) is **lower** than for separated atoms
2. This is achieved by electrons being shared between nuclei — occupying the **internuclear region**
3. The electron's potential energy is lowered (attracted to two nuclei instead of one) and the kinetic energy adjusts via a more diffuse wavefunction

> [!NOTE]
> **Concept Check 34.1**
> In the formation of a chemical bond, the total energy must be lower than that of the separated atoms. Why does the accumulation of electron density between the two nuclei lead to a lower potential energy?

---

## 2. The H₂⁺ Molecule Ion

The simplest molecule: one electron + two protons.

### Hamiltonian

$$\hat{H} = -\frac{\hbar^2}{2m_e}\nabla^2 - \frac{e^2}{4\pi\epsilon_0 r_A} - \frac{e^2}{4\pi\epsilon_0 r_B} + \frac{e^2}{4\pi\epsilon_0 R}$$

where $r_A$ and $r_B$ are electron-nucleus distances and $R$ is the internuclear distance.

This problem can be solved exactly in ellipsoidal coordinates, giving:
- Equilibrium bond length: $R_e = 1.32$ Å (2.49 $a_0$)
- Dissociation energy: $D_e = 2.79$ eV

---

## 3. LCAO-MO Approximation

### The Trial Wavefunction

Construct MOs as linear combinations of atomic orbitals (AOs):

$$\psi_{\text{MO}} = c_A\phi_A + c_B\phi_B$$

where $\phi_A = 1s_A$ and $\phi_B = 1s_B$ are hydrogen $1s$ orbitals centered on nuclei A and B.

### Variational Calculation

Minimize $E$ with respect to $c_A$ and $c_B$. This gives the **secular equations**:

$$\begin{pmatrix} H_{AA}-ES_{AA} & H_{AB}-ES_{AB} \\ H_{AB}-ES_{AB} & H_{BB}-ES_{BB} \end{pmatrix}\begin{pmatrix} c_A \\ c_B \end{pmatrix} = 0$$

By symmetry ($H_{AA} = H_{BB}$), two solutions emerge:

### Bonding Orbital ($\sigma_{1s}$)

$$\psi_+ = \frac{1}{\sqrt{2(1+S)}}(\phi_A + \phi_B)$$

$$E_+ = \frac{H_{AA} + H_{AB}}{1 + S}$$

- Constructive interference in the internuclear region
- Electron density **accumulates** between nuclei
- Lower energy than individual AOs

### Antibonding Orbital ($\sigma_{1s}^*$)

$$\psi_- = \frac{1}{\sqrt{2(1-S)}}(\phi_A - \phi_B)$$

$$E_- = \frac{H_{AA} - H_{AB}}{1 - S}$$

- Destructive interference → **node** between nuclei
- Electron density is depleted from the internuclear region
- Higher energy than individual AOs

> [!NOTE]
> **Concept Check 34.2**
> Describe the difference between a bonding Molecular Orbital ($\sigma$) and an antibonding Molecular Orbital ($\sigma^*$) in terms of electron density between the nuclei and the presence of nodes.

---

## 4. Key Integrals

| Integral | Symbol | Definition | Physical Meaning |
|----------|--------|-----------|-----------------|
| Overlap | $S = S_{AB}$ | $\int\phi_A^*\phi_B\,d\tau$ | Measure of AO overlap |
| Coulomb | $H_{AA}$ | $\int\phi_A^*\hat{H}\phi_A\,d\tau$ | Energy of electron in AO on nucleus A |
| Resonance (exchange) | $H_{AB}$ | $\int\phi_A^*\hat{H}\phi_B\,d\tau$ | Stabilization from delocalization |

$H_{AB}$ is **negative** (stabilizing) at equilibrium bond distance — this is what drives bonding.

### Overlap Integral

$$S(R) = e^{-R/a_0}\left(1 + \frac{R}{a_0} + \frac{R^2}{3a_0^2}\right)$$

$S = 1$ at $R = 0$, decreases exponentially, $S \to 0$ as $R \to \infty$.

---

## 5. Energy Diagram

```
          σ*₁s  ——  (antibonding)
         / ↑ \
AO(A) ——   ΔE   —— AO(B)
  1s     \ ↓ /     1s
          σ₁s  ——  (bonding)
```

The antibonding orbital is raised **more** than the bonding orbital is lowered (because the denominator $(1-S) < (1+S)$). This asymmetry has important consequences for understanding why He₂ doesn't form.

---

## 6. Symmetry Labels

Using the $D_{\infty h}$ point group for homonuclear diatomics:

| MO | Symmetry label | Description |
|----|---------------|-------------|
| $\phi_A + \phi_B$ | $\sigma_g$ | Symmetric under inversion ($g$ = gerade) |
| $\phi_A - \phi_B$ | $\sigma_u^*$ | Antisymmetric under inversion ($u$ = ungerade) |

The $\sigma$ indicates cylindrical symmetry about the bond axis ($m_l = 0$).

---

## Key Equations Summary

| Equation | Expression |
|----------|-----------|
| LCAO-MO | $\psi = c_A\phi_A + c_B\phi_B$ |
| Bonding MO | $\psi_+ = (\phi_A+\phi_B)/\sqrt{2(1+S)}$ |
| Antibonding MO | $\psi_- = (\phi_A-\phi_B)/\sqrt{2(1-S)}$ |
| Secular determinant | $\det(H_{ij}-ES_{ij})=0$ |
| Bonding energy | $E_+ = (H_{AA}+H_{AB})/(1+S)$ |

## Recent Literature Spotlight

**"The H₂⁺ Molecular Ion Revisited: An Exact Benchmark for Approximations in Quantum Chemistry"**
*M. Musiał, S. A. Kucharski, A. Gour*, Journal of Chemical Theory and Computation, **2023**, 19, 4156–4167. [DOI](https://doi.org/10.1021/acs.jctc.3c00292)

H₂⁺, the simplest molecule (one electron, two protons), is the only molecular system whose electronic structure can be solved exactly. This benchmark study pushes coupled-cluster calculations on $\text{H}_2^+$ to extraordinary numerical accuracy, providing exact reference energies for calibrating all approximate electronic structure methods — from the LCAO-MO approach taught in this lecture to post-Hartree-Fock methods.

---

## Practice Problems

1. **Overlap integral.** Calculate the overlap integral $S$ for H₂⁺ at $R = 2a_0$. Comment on whether this is "good" overlap.

2. **Bond energy.** Explain qualitatively why $|E_- - H_{AA}| > |E_+ - H_{AA}|$ (antibonding destabilization exceeds bonding stabilization). What consequences does this have for He₂?

3. **Symmetry labels.** Using the $D_{\infty h}$ character table, verify that $\phi_A + \phi_B$ transforms as $\sigma_g$ and $\phi_A - \phi_B$ transforms as $\sigma_u$.

---

*Next lecture: Homonuclear Diatomic Molecules & MO Diagrams*
