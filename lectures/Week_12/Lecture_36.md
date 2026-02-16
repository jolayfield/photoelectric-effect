# Lecture 36 — Heteronuclear Diatomics & Valence Bond Theory

**Reading:** Engel 4th ed., Chapter 12 (Sections 12.7–12.9)

## Learning Objectives

- Construct MO diagrams for heteronuclear diatomic molecules
- Relate orbital energy asymmetry to bond polarity and electronegativity
- Explain valence bond (VB) theory and how it differs from MO theory
- Define hybridization and its role in VB theory
- Compare the strengths and weaknesses of MO and VB approaches

---

## 1. Heteronuclear Diatomics: Asymmetric MOs

When two different atoms form a bond, the AO energies are no longer equal. The more electronegative atom has **lower-energy** AOs.

### LCAO-MO for HF

$$\psi_{\text{MO}} = c_{\text{H}}\phi_{1s}^{\text{H}} + c_{\text{F}}\phi_{2p_z}^{\text{F}}$$

Since F is more electronegative: $E(2p_F) < E(1s_H)$

**Bonding MO:** More F character ($|c_F| > |c_H|$) — electron density shifted toward F
**Antibonding MO:** More H character ($|c_H| > |c_F|$)

### General Rule

> In the bonding MO, the coefficient on the more electronegative atom is larger.
> In the antibonding MO, the coefficient on the less electronegative atom is larger.

> [!NOTE]
> **Concept Check 36.1**
> In a heteronuclear diatomic molecule like $HF$, which atom's atomic orbital contributes more to the bonding Molecular Orbital? How does this relate to the concept of electronegativity?

### Bond Polarity

The **polarity** is determined by the asymmetry:

$$|c_A|^2 - |c_B|^2 \propto \text{charge separation} \propto \text{dipole moment}$$

If both coefficients were equal → nonpolar (homonuclear)
If one dominates → ionic

---

## 2. Electronegativity from MO Theory

The Mulliken definition of electronegativity:

$$\chi_M = \frac{IE + EA}{2}$$

This directly connects to the orbital energies: a more electronegative atom has both higher $IE$ and higher $EA$, meaning its $AOs$ are at lower energy.

---

## 3. MO Diagrams for Common Heteronuclear Diatomics

### CO (isoelectronic with N₂)

CO has 14 electrons, same as N₂. The MO diagram is similar but asymmetric:

- C contributes $2s$ and $2p$ (higher energy)
- O contributes $2s$ and $2p$ (lower energy)
- The HOMO ($5\sigma$) is a lone pair on C — explains why CO is a good ligand through C
- Bond order = 3 (triple bond)

### HF

- H: $1s$ orbital
- F: $2p$ orbital (only $2p_z$ has the right symmetry to bond with H $1s$)
- The $2p_x$ and $2p_y$ orbitals on F are **nonbonding** lone pairs
- Bond order = 1

---

## 4. Valence Bond (VB) Theory

### Heitler-London Approach (1927)

For H₂, VB theory starts from atomic states and allows electrons to exchange:

$$\Psi_{\text{VB}} = N[\phi_A(1)\phi_B(2) + \phi_A(2)\phi_B(1)] \cdot [\alpha(1)\beta(2) - \alpha(2)\beta(1)]$$

This is a **covalent** wavefunction — each atom contributes one electron.

### Comparison: MO vs. VB at Dissociation

**MO ($\sigma_g$ doubly occupied):**

$$\Psi_{\text{MO}} = [\phi_A(1) + \phi_B(1)][\phi_A(2) + \phi_B(2)]$$

$$= \phi_A(1)\phi_A(2) + \phi_B(1)\phi_B(2) + \phi_A(1)\phi_B(2) + \phi_A(2)\phi_B(1)$$

This contains **ionic terms** ($\phi_A(1)\phi_A(2)$ = both electrons on A) that are unphysical at large $R$.

**VB:** Contains only covalent terms — correct dissociation behavior.

### MO is better for most molecular properties; VB dissociates correctly.

Modern computational chemistry: CI (configuration interaction) fixes MO's dissociation problem.

> [!NOTE]
> **Concept Check 36.2**
> What is the primary failing of the basic Molecular Orbital (MO) theory when describing a diatomic molecule at large internuclear distances? How does Valence Bond (VB) theory handle this differently?

---

## 5. Hybridization in VB Theory

### The Concept

In VB theory, atoms form hybrids of their $s$ and $p$ orbitals before bonding:

$$|sp^3\rangle = \frac{1}{2}(|s\rangle + |p_x\rangle + |p_y\rangle + |p_z\rangle)$$

| Hybridization | Geometry | Bond angle | Examples |
|--------------|----------|-----------|---------|
| $sp$ | Linear | 180° | BeCl₂, CO₂, C₂H₂ |
| $sp^2$ | Trigonal planar | 120° | BF₃, C₂H₄, graphene |
| $sp^3$ | Tetrahedral | 109.5° | CH₄, NH₃, H₂O |
| $sp^3d$ | Trigonal bipyramidal | 90°/120° | PCl₅ |
| $sp^3d^2$ | Octahedral | 90° | SF₆ |

### Important Caveat

Hybridization is a mathematical tool in VB theory, **not** a physical process. In MO theory, the same molecular structure emerges naturally from symmetry-adapted combinations without invoking hybridization.

---

## 6. MO vs. VB: Summary Comparison

| Feature | MO Theory | VB Theory |
|---------|----------|----------|
| Starting point | AOs → delocalized MOs | AOs → localized bonds |
| Electron delocalization | Natural | Requires resonance structures |
| Dissociation | Incorrect (ionic terms) | Correct |
| Magnetic properties | Predicts correctly (O₂) | Fails for O₂ |
| Symmetry | Uses full molecular symmetry | Uses hybrid orbitals |
| Aromatic systems | Natural (delocalized π) | Needs resonance |
| Computational use | Dominant (HF, DFT) | GVB methods |

---

## Key Equations Summary

| Equation | Expression |
|----------|-----------|
| Heteronuclear LCAO | $\psi = c_A\phi_A + c_B\phi_B$ ($c_A \neq c_B$) |
| Mulliken electronegativity | $\chi_M = (IE+EA)/2$ |
| VB wavefunction (H₂) | $\Psi = N[\phi_A(1)\phi_B(2)+\phi_A(2)\phi_B(1)]$ |
| $sp^3$ hybrid | $\frac{1}{2}(\|s\rangle+\|p_x\rangle+\|p_y\rangle+\|p_z\rangle)$ |
| Bond polarity | $\propto \|c_A\|^2 - \|c_B\|^2$ |

## Recent Literature Spotlight

**"On the Nature of the Chemical Bond in Valence Bond Theory"**
*S. Shaik, D. Danovich, P. C. Hiberty*, Journal of Chemical Physics, **2022**, 157, 090901. [DOI](https://doi.org/10.1063/5.0095953)

This perspective by the founders of modern valence bond theory provides a comprehensive overview of how VB theory describes covalent bonds, ionic bonds, and the newly identified "charge-shift" bonds. The authors compare VB and MO descriptions of molecules like F₂ and C₂, showing how both approaches converge when done properly — reinforcing the complementary views of bonding introduced in this lecture.

---

## Practice Problems

1. **HF MO diagram.** Draw the MO diagram for HF. Identify the HOMO and LUMO. Which orbitals are nonbonding? What is the bond order?

2. **CO.** CO is isoelectronic with N₂. Draw its MO diagram and explain why the HOMO has more carbon character. Relate this to CO acting as a ligand through C in transition metal complexes.

3. **MO vs. VB.** Write both the MO and VB wavefunctions for H₂ at equilibrium. Expand the MO wavefunction and identify the ionic and covalent terms. What happens to the MO wavefunction at large internuclear separation?

---

*Next week: Polyatomic Molecules, Molecular Orbital Theory & Electronic Spectroscopy*
