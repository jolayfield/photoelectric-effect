# Lecture 29 — The Hartree-Fock Self-Consistent Field Method

**Reading:** Engel 4th ed., Chapter 10 (Sections 10.4–10.5)

## Learning Objectives

- Describe the Hartree-Fock (HF) method and the self-consistent field (SCF) procedure
- Explain the role of Slater determinants in satisfying the Pauli principle
- Define Coulomb and exchange integrals and interpret them physically
- Outline Koopman's theorem and its connection to ionization energies
- Recognize the limitations of Hartree-Fock theory (electron correlation)

---

## 1. The Hartree Method

### The Idea

Each electron moves in the average potential of all other electrons. Replace the exact electron-electron interactions with an effective one-electron potential.

### Self-Consistent Field (SCF) Procedure

1. **Guess** initial orbitals $\{\phi_i^{(0)}\}$
2. **Calculate** the effective potential $V_{\text{eff}}^{(0)}$ from these orbitals
3. **Solve** single-electron Schrödinger equations with $V_{\text{eff}}^{(0)}$ → new orbitals $\{\phi_i^{(1)}\}$
4. **Recalculate** $V_{\text{eff}}^{(1)}$ from the new orbitals
5. **Repeat** until the orbitals (and energies) converge — **self-consistency**

This iterative process typically converges in 10–50 cycles.

> [!NOTE]
> **Concept Check 29.1**
> Explain why the Hartree-Fock method is called "self-consistent." Why can't we just solve the equations in a single step like we did for the hydrogen atom?

---

## 2. The Slater Determinant

### Problem with Simple Products

A simple product wavefunction $\psi = \phi_1(\mathbf{r}_1)\phi_2(\mathbf{r}_2)$ does not satisfy the **antisymmetry requirement** (Pauli principle):

$$\Psi(\mathbf{r}_1, \mathbf{r}_2) = -\Psi(\mathbf{r}_2, \mathbf{r}_1)$$

### Solution: The Slater Determinant

For two electrons:

$$\Psi(\mathbf{x}_1, \mathbf{x}_2) = \frac{1}{\sqrt{2}}\begin{vmatrix} \chi_a(\mathbf{x}_1) & \chi_b(\mathbf{x}_1) \\ \chi_a(\mathbf{x}_2) & \chi_b(\mathbf{x}_2) \end{vmatrix}$$

where $\chi_i(\mathbf{x}) = \phi_i(\mathbf{r})\sigma_i(s)$ are **spin-orbitals** (spatial part × spin part) and $\mathbf{x} = (\mathbf{r}, s)$.

For $N$ electrons:

$$\Psi = \frac{1}{\sqrt{N!}}\begin{vmatrix} \chi_1(\mathbf{x}_1) & \chi_2(\mathbf{x}_1) & \cdots & \chi_N(\mathbf{x}_1) \\ \chi_1(\mathbf{x}_2) & \chi_2(\mathbf{x}_2) & \cdots & \chi_N(\mathbf{x}_2) \\ \vdots & \vdots & \ddots & \vdots \\ \chi_1(\mathbf{x}_N) & \chi_2(\mathbf{x}_N) & \cdots & \chi_N(\mathbf{x}_N) \end{vmatrix}$$

### Properties of Slater Determinants

1. **Antisymmetric**: exchanging two rows (= exchanging two electrons) changes the sign
2. **Pauli exclusion**: if two columns are identical (= two electrons in same spin-orbital), the determinant is zero
3. **Indistinguishability**: electrons are not assigned to specific orbitals

---

## 3. The Hartree-Fock Equations

Applying the variational principle to a single Slater determinant gives the **Hartree-Fock equations**:

$$\hat{f}_i\,\chi_i = \epsilon_i\,\chi_i$$

where $\hat{f}_i$ is the **Fock operator**:

$$\hat{f}_i = \hat{h}_i + \sum_{j \neq i}\left(\hat{J}_j - \hat{K}_j\right)$$

| Term | Name | Physical meaning |
|------|------|-----------------|
| $\hat{h}_i$ | Core Hamiltonian | KE + nuclear attraction for electron $i$ |
| $\hat{J}_j$ | Coulomb operator | Classical repulsion from electron $j$'s charge cloud |
| $\hat{K}_j$ | Exchange operator | Quantum exchange interaction (no classical analog) |

### Coulomb Integral

$$J_{ij} = \int\int |\chi_i(\mathbf{x}_1)|^2 \frac{e^2}{4\pi\epsilon_0 r_{12}} |\chi_j(\mathbf{x}_2)|^2\,d\mathbf{x}_1\,d\mathbf{x}_2$$

This is always **positive** (repulsive) — it is the classical electrostatic repulsion between two charge clouds.

### Exchange Integral

$$K_{ij} = \int\int \chi_i^*(\mathbf{x}_1)\chi_j(\mathbf{x}_1) \frac{e^2}{4\pi\epsilon_0 r_{12}} \chi_j^*(\mathbf{x}_2)\chi_i(\mathbf{x}_2)\,d\mathbf{x}_1\,d\mathbf{x}_2$$

This is also **positive** but has no classical counterpart. It arises from the antisymmetry of the wavefunction and is nonzero only for electrons of **parallel spin**.

### Exchange Stabilization

Parallel-spin electrons benefit from exchange: each pair contributes $-K_{ij}$ to the energy. This is the quantum-mechanical basis for **Hund's first rule** (maximize spin in degenerate orbitals).

> [!NOTE]
> **Concept Check 29.2**
> Contrast the Coulomb ($J$) and Exchange ($K$) integrals. Which one has a classical electrostatics analogy, and which one is strictly a quantum mechanical consequence of the Pauli principle?

---

## 4. Koopman's Theorem

$$\boxed{IE_i \approx -\epsilon_i}$$

The ionization energy for removing electron $i$ is approximately equal to the negative of its orbital energy. This assumes that the remaining orbitals don't relax upon ionization (the "frozen orbital" approximation).

Works well for outer electrons; less accurate for core electrons where relaxation effects are larger.

---

## 5. Electron Correlation: What HF Misses

The Hartree-Fock method treats each electron as moving in the **average** field of all others. It misses:

- **Instantaneous** electron-electron repulsion (electrons avoid each other more than the average suggests)
- This missing physics is called **electron correlation**

$$E_{\text{correlation}} = E_{\text{exact}} - E_{\text{HF}}$$

$E_{\text{correlation}}$ is always negative (HF gives an energy that is too high).

Methods to recover correlation energy (Week 14):
- Configuration interaction (CI)
- Møller-Plesset perturbation theory (MP2, MP4)
- Coupled cluster (CCSD(T))
- Density functional theory (DFT) — approximate but efficient

---

## Key Equations Summary

| Equation | Expression |
|----------|-----------|
| Slater determinant | $\Psi = \frac{1}{\sqrt{N!}}\det[\chi_i(\mathbf{x}_j)]$ |
| Fock operator | $\hat{f}_i = \hat{h}_i + \sum_j(\hat{J}_j - \hat{K}_j)$ |
| HF equation | $\hat{f}\chi_i = \epsilon_i\chi_i$ |
| Koopman's theorem | $IE \approx -\epsilon_i$ |
| Correlation energy | $E_{\text{corr}} = E_{\text{exact}} - E_{\text{HF}}$ |

## Recent Literature Spotlight

**"GPU-Accelerated Resolution-of-the-Identity Hartree-Fock Exchange for Large Molecules"**
*K. D. Vogiatzis, D. Ma, J. Olsen, L. Gagliardi, W. A. de Jong*, Journal of Chemical Theory and Computation, **2020**, 16, 6753–6764. [DOI](https://doi.org/10.1021/acs.jctc.0c00337)

This paper describes how GPU computing dramatically accelerates Hartree-Fock calculations for large molecular systems. By exploiting the resolution-of-the-identity approximation on graphics processing units, the authors achieve orders-of-magnitude speedups over conventional implementations — making the variational SCF method taught in this lecture practical for systems with thousands of basis functions.

---

## Practice Problems

1. **Slater determinant.** Write the Slater determinant for the ground state of Li ($1s^2 2s^1$). How many terms does it have when expanded?

2. **Exchange.** For the carbon atom ($1s^2 2s^2 2p^2$), count the number of exchange pairs for parallel-spin electrons in the ground state ($^3P$). Use this to explain why the $^3P$ state is lower in energy than the $^1D$ state.

3. **Koopman's theorem.** The HF orbital energies for N₂ are $\epsilon_{2\sigma_g} = -1.47$ au, $\epsilon_{1\pi_u} = -0.61$ au, $\epsilon_{3\sigma_g} = -0.57$ au. Predict the first three ionization energies (in eV) and identify which orbital the electron is removed from.

---

*Next lecture: Electron Spin, Pauli Exclusion & the Aufbau Principle*
