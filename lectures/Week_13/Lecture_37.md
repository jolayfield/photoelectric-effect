# Lecture 37 — MOs for Polyatomic Molecules & Hückel Theory

**Reading:** Engel 4th ed., Chapter 13 (Sections 13.1–13.4)

## Learning Objectives

- Construct MOs for polyatomic molecules using symmetry-adapted linear combinations (SALCs)
- Apply the Hückel approximation to conjugated π systems
- Solve the Hückel secular determinant for small molecules
- Calculate π-electron energies, delocalization energies, and bond orders
- Classify MOs by their symmetry in the molecular point group

---

## 1. MOs for Polyatomic Molecules

### Strategy

1. **Identify the molecular point group**
2. **Choose a basis set** of AOs
3. **Construct SALCs** using projection operators (from Lecture 18)
4. **Combine SALCs** with AOs on the central atom of matching symmetry
5. **Fill with electrons** following aufbau, Pauli, and Hund

### Example: H₂O ($C_{2v}$)

O contributes: $2s$, $2p_x$, $2p_y$, $2p_z$
H₁ and H₂ contribute: $1s$ each

SALCs of H $1s$ orbitals:
- $A_1$: $\phi_1 + \phi_2$ (symmetric)
- $B_2$: $\phi_1 - \phi_2$ (antisymmetric)

These combine with O orbitals of matching symmetry:

| Symmetry | O orbital | H SALC | MO formed |
|---------|----------|--------|-----------|
| $A_1$ | $2s$, $2p_z$ | $\phi_1+\phi_2$ | $1a_1$ (bonding), $2a_1$ (nb/bonding), $3a_1$ (nb) |
| $B_2$ | $2p_y$ | $\phi_1-\phi_2$ | $1b_2$ (bonding), $2b_2^*$ (antibonding) |
| $B_1$ | $2p_x$ | — | $1b_1$ (nonbonding lone pair) |

This gives the MO diagram for water with 4 occupied MOs and 2 lone pairs ($1b_1$ and $3a_1$).

> [!NOTE]
> **Concept Check 37.1**
> In the water molecule ($C_{2v}$), the oxygen $2p_x$ orbital is classified as nonbonding ($1b_1$). Why does it not combine with any of the hydrogen $1s$ orbitals?

---

## 2. Hückel Molecular Orbital Theory

### The Approximations

For **conjugated planar** molecules, we separate $\sigma$ and $\pi$ electrons and focus only on the $\pi$ system.

**Hückel assumptions:**
1. All overlap integrals $S_{ij} = \delta_{ij}$ (set to 0 for $i \neq j$, 1 for $i = j$)
2. All diagonal Hamiltonian elements: $H_{ii} = \alpha$ (Coulomb integral — same for all C atoms)
3. Off-diagonal elements: $H_{ij} = \beta$ if atoms $i$ and $j$ are bonded, $0$ otherwise
4. $\alpha < 0$, $\beta < 0$ (both stabilizing)

### The Secular Determinant

$$\det(H_{ij} - E\delta_{ij}) = 0$$

With the substitution $x = (\alpha - E)/\beta$:

$$\det(x\delta_{ij} + A_{ij}) = 0$$

where $A_{ij} = 1$ for bonded pairs, 0 otherwise.

---

## 3. Worked Examples

### Ethylene (C₂H₄) — 2 $\pi$ electrons

$$\begin{vmatrix} x & 1 \\ 1 & x \end{vmatrix} = 0 \implies x^2 - 1 = 0 \implies x = \pm 1$$

$E_1 = \alpha + \beta$ (bonding), $E_2 = \alpha - \beta$ (antibonding)

$\pi$-electron energy: $E_\pi = 2(\alpha + \beta) = 2\alpha + 2\beta$

### Butadiene (C₄H₆) — 4 $\pi$ electrons

$$\begin{vmatrix} x & 1 & 0 & 0 \\ 1 & x & 1 & 0 \\ 0 & 1 & x & 1 \\ 0 & 0 & 1 & x \end{vmatrix} = 0$$

Solutions: $x = \pm 0.618, \pm 1.618$

$$E_1 = \alpha + 1.618\beta, \quad E_2 = \alpha + 0.618\beta$$

$E_\pi = 2(\alpha + 1.618\beta) + 2(\alpha + 0.618\beta) = 4\alpha + 4.472\beta$

### Delocalization Energy

$$E_{\text{deloc}} = E_\pi(\text{conjugated}) - E_\pi(\text{isolated double bonds})$$

For butadiene: $4\alpha + 4.472\beta - 2(2\alpha + 2\beta) = 0.472\beta$

Since $\beta < 0$: delocalization stabilization = $0.472|\beta| \approx 0.47 \times 75 = 35$ kJ/mol

### Benzene — 6 $\pi$ electrons

Hückel energies: $E_k = \alpha + 2\beta\cos(2\pi k/6)$, $k = 0, \pm1, \pm2, 3$

$$E_\pi = 2(\alpha+2\beta) + 4(\alpha+\beta) = 6\alpha + 8\beta$$

Delocalization energy = $8\beta - 6\beta = 2|\beta| \approx 150$ kJ/mol

This large stabilization is **aromaticity**.

---

## 4. Hückel Rules

### Hückel's Rule for Aromaticity

A cyclic, planar, fully conjugated molecule is **aromatic** if it has $4n + 2$ $\pi$ electrons ($n = 0, 1, 2, \ldots$):

$$4n + 2 = 2, 6, 10, 14, \ldots$$

**Anti-aromatic**: $4n$ $\pi$ electrons → destabilized relative to open-chain analog

| Species | $\pi$ electrons | Aromatic? |
|---------|----------------|----------|
| Benzene | 6 | Yes |
| Cyclopentadienyl anion | 6 | Yes |
| Cycloheptatrienyl cation | 6 | Yes |
| Cyclobutadiene | 4 | Anti-aromatic |
| Cyclooctatetraene | 8 | Non-planar (avoids anti-aromaticity) |

> [!NOTE]
> **Concept Check 37.2**
> Applying Hückel's Rule ($4n + 2$), identify why the cycloheptatrienyl cation (7-membered ring, 6 $\pi$ electrons) is considered aromatic, while the neutral cycloheptatriene molecule is not.

---

## 5. Symmetry Classification of MOs

Using group theory, we can directly determine the MO symmetry species rather than solving the secular determinant:

For benzene ($D_{6h}$):
- The 6 $\pi$ MOs transform as: $a_{2u} + e_{1g} + e_{2u} + b_{2g}$
- Occupied: $a_{2u}^2\,e_{1g}^4$ → ground state symmetry = $^1A_{1g}$

---

## Key Equations Summary

| Equation | Expression |
|----------|-----------|
| Hückel approximation | $H_{ii} = \alpha$, $H_{ij} = \beta$ (bonded), $S_{ij} = \delta_{ij}$ |
| Secular determinant | $\det(H-ES) = 0$ |
| Cyclic energies | $E_k = \alpha + 2\beta\cos(2\pi k/N)$ |
| Delocalization energy | $E_\pi(\text{conj}) - E_\pi(\text{isolated})$ |
| Hückel's rule | Aromatic if $4n+2$ $\pi$ electrons |

## Recent Literature Spotlight

**"Machine Learning for Electronically Excited States of Molecules"**
*J. Westermayr, P. Marquetand*, Journal of Chemical Information and Modeling, **2020**, 60, 3661–3673. [DOI](https://doi.org/10.1021/acs.jcim.0c00451)

This perspectives article reviews how machine learning can predict molecular orbital energies, electronic excitation energies, and spectral properties. The ML models are trained on quantum chemical data from Hückel-level through DFT calculations, demonstrating how the simple MO energy-level framework taught in this lecture — HOMO, LUMO, and π-orbital diagrams — provides the foundation for modern data-driven electronic structure predictions.

---

## Practice Problems

1. **Allyl system.** Solve the Hückel secular determinant for the allyl radical ($\text{C}_3\text{H}_5$, 3 $\pi$ electrons). Find the three MO energies and calculate $E_\pi$.

2. **Naphthalene.** Naphthalene ($\text{C}_{10}\text{H}_8$) has 10 $\pi$ electrons. Without solving the $10 \times 10$ determinant, use Hückel's rule to predict whether it is aromatic.

3. **H₂O MOs.** Using the $C_{2v}$ character table, verify that the SALC $\phi_1 + \phi_2$ belongs to $A_1$ and $\phi_1 - \phi_2$ belongs to $B_2$.

---

*Next lecture: Electronic Transitions & the Franck-Condon Principle*
