# Lecture 28 — Helium Atom & Electron-Electron Repulsion

**Reading:** Engel 4th ed., Chapter 10 (Sections 10.1–10.3)

## Learning Objectives

- Write the Hamiltonian for two-electron and many-electron atoms
- Explain why the many-electron Schrödinger equation cannot be solved exactly
- Apply the orbital approximation and interpret its limitations
- Use variational methods and perturbation theory for the helium atom
- Define shielding and effective nuclear charge

---

## 1. The Helium Atom Hamiltonian

$$\hat{H} = -\frac{\hbar^2}{2m_e}\nabla_1^2 - \frac{\hbar^2}{2m_e}\nabla_2^2 - \frac{Ze^2}{4\pi\epsilon_0 r_1} - \frac{Ze^2}{4\pi\epsilon_0 r_2} + \frac{e^2}{4\pi\epsilon_0 r_{12}}$$

| Term | Physics |
|------|---------|
| $-\frac{\hbar^2}{2m_e}\nabla_i^2$ | Kinetic energy of electron $i$ |
| $-\frac{Ze^2}{4\pi\epsilon_0 r_i}$ | Attraction of electron $i$ to nucleus ($Z = 2$) |
| $+\frac{e^2}{4\pi\epsilon_0 r_{12}}$ | Electron-electron repulsion |

The electron-electron repulsion term $e^2/(4\pi\epsilon_0 r_{12})$ makes this problem **analytically unsolvable** because $r_{12} = |\mathbf{r}_1 - \mathbf{r}_2|$ couples the coordinates of both electrons.

> [!NOTE]
> **Concept Check 28.1**
> In the helium atom Hamiltonian, the $r_{12}$ term represents the repulsion between the two electrons. Why does this single term prevent us from solving the Schrödinger equation exactly?

---

## 2. The Orbital Approximation

### Zeroth-Order Approach: Ignore $e^2/r_{12}$

Without repulsion, the Hamiltonian separates:

$$\hat{H}^{(0)} = \hat{h}_1 + \hat{h}_2$$

Each electron moves independently in a hydrogen-like orbital with $Z = 2$:

$$\psi^{(0)}(\mathbf{r}_1, \mathbf{r}_2) = \phi_{1s}(\mathbf{r}_1)\,\phi_{1s}(\mathbf{r}_2)$$

$$E^{(0)} = -Z^2 \times 13.6\text{ eV} \times 2 = -4 \times 13.6 \times 2 = -108.8\text{ eV}$$

Experimental: $E = -79.0$ eV. The discrepancy ($-29.8$ eV) is entirely due to the neglected electron-electron repulsion — it is enormous and cannot be ignored.

### First-Order Perturbation Theory

Treat $\hat{V}_{ee} = e^2/(4\pi\epsilon_0 r_{12})$ as a perturbation:

$$E^{(1)} = \langle\psi^{(0)}|\hat{V}_{ee}|\psi^{(0)}\rangle = \frac{5}{8}Z \times 13.6\text{ eV} = +34.0\text{ eV}$$

$$E_{\text{total}} = -108.8 + 34.0 = -74.8\text{ eV}$$

Better, but still 5% off from the experimental value.

---

## 3. The Variational Method

### Variational Principle

For any trial wavefunction $\psi_{\text{trial}}$:

$$\boxed{E_{\text{trial}} = \frac{\langle\psi_{\text{trial}}|\hat{H}|\psi_{\text{trial}}\rangle}{\langle\psi_{\text{trial}}|\psi_{\text{trial}}\rangle} \geq E_{\text{exact}}}$$

The trial energy is always an **upper bound** to the true ground-state energy. We optimize parameters in $\psi_{\text{trial}}$ to minimize $E_{\text{trial}}$.

### Effective Nuclear Charge

Use $\psi_{\text{trial}} = \phi_{1s}^{Z_{\text{eff}}}(\mathbf{r}_1)\,\phi_{1s}^{Z_{\text{eff}}}(\mathbf{r}_2)$ with $Z_{\text{eff}}$ as a variational parameter.

Result: $Z_{\text{eff}} = Z - 5/16 = 1.6875$

$$E_{\text{var}} = -77.5\text{ eV}$$

The effective nuclear charge is less than $Z = 2$ because each electron **screens** (shields) the other from the nucleus.

### Understanding Shielding

Each electron, on average, partially neutralizes the nuclear charge seen by the other electron. The concept of **effective nuclear charge** $Z_{\text{eff}} = Z - \sigma$ (where $\sigma$ is the shielding constant) is central to understanding the periodic table.

> [!NOTE]
> **Concept Check 28.2**
> The variational method for helium yields an effective nuclear charge $Z_{\text{eff}} \approx 1.69$. Why is this value significantly lower than the actual nuclear charge $Z = 2$?

---

## 4. Shielding and Penetration in Many-Electron Atoms

### The Orbital Approximation for $N$ Electrons

$$\Psi(\mathbf{r}_1, \mathbf{r}_2, \ldots, \mathbf{r}_N) \approx \phi_1(\mathbf{r}_1)\,\phi_2(\mathbf{r}_2)\,\cdots\,\phi_N(\mathbf{r}_N)$$

Each electron moves in an **effective potential** created by the nucleus and the average distribution of all other electrons.

### Consequences: Lifting the $l$-Degeneracy

In hydrogen, $E$ depends only on $n$. In multi-electron atoms, **shielding depends on $l$**:

- $s$ electrons: significant probability near the nucleus → penetrate through inner shells → feel higher $Z_{\text{eff}}$ → lower energy
- $p$ electrons: less penetration → more shielded → higher energy
- $d$ electrons: even less penetration → even more shielded → higher energy

**Result:** For a given $n$: $E_{ns} < E_{np} < E_{nd} < E_{nf}$

This explains the filling order and the structure of the periodic table.

---

## Key Equations Summary

| Equation | Expression |
|----------|-----------|
| He Hamiltonian | $\hat{H} = \hat{h}_1 + \hat{h}_2 + e^2/(4\pi\epsilon_0 r_{12})$ |
| Zeroth-order energy | $E^{(0)} = -2Z^2(13.6\text{ eV})$ |
| First-order correction | $E^{(1)} = (5Z/8)(13.6\text{ eV})$ |
| Variational principle | $E_{\text{trial}} \geq E_{\text{exact}}$ |
| Effective nuclear charge (He) | $Z_{\text{eff}} = Z - 5/16$ |
| Orbital energy ordering | $E_{ns} < E_{np} < E_{nd}$ (multi-electron) |

## Recent Literature Spotlight

**"Imaging the Square of the Correlated Two-Electron Wave Function of a Hydrogen Molecule"**
*M. Waitz, D. Metz, J. Lower, C. Schober, M. Kircher, et al.*, Science, **2022**, 376, 260–264. [DOI](https://doi.org/10.1126/science.abn7950)

This experiment imaged the correlated two-electron wave function of H₂ following double ionization and Coulomb explosion. By measuring the momenta of both electrons simultaneously, the authors reconstructed the two-particle probability density $|\Psi(\mathbf{r}_1, \mathbf{r}_2)|^2$ — providing a direct visualization of electron correlation and entanglement that goes beyond the independent-particle model taught in this lecture for helium.

---

## Practice Problems

1. **Helium energies.** Calculate the zeroth-order, first-order perturbation, and variational energies for He. Compare each to the experimental value of $-79.0$ eV.

2. **Lithium.** Write the Hamiltonian for the lithium atom ($Z = 3$, 3 electrons). How many electron-repulsion terms are there?

3. **Effective nuclear charge.** Using Slater's rules, estimate $Z_{\text{eff}}$ for the $2p$ electron in nitrogen ($Z = 7$). How does this compare to the $2s$ electron?

---

*Next lecture: The Hartree-Fock Self-Consistent Field Method*
