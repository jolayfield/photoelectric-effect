# Lecture 16 — Symmetry Elements, Symmetry Operations & Point Groups

**Reading:** Engel 4th ed., Chapter 16 (Sections 16.1–16.3)

## Learning Objectives

- Define symmetry elements and symmetry operations and distinguish between them
- Identify the five types of symmetry operations in molecules
- Apply a systematic procedure to assign a molecule to its point group
- Recognize common point groups and associate them with familiar molecules

---

## 1. Symmetry Elements and Symmetry Operations

A **symmetry operation** is a geometric transformation that leaves a molecule indistinguishable from its original configuration (though individual atoms may be permuted).

A **symmetry element** is the geometric entity (point, axis, or plane) about which the symmetry operation is performed.

| Symmetry Element | Symbol | Operation | Description |
|-----------------|--------|-----------|-------------|
| Identity | $E$ | Do nothing | Every molecule has this |
| Proper rotation axis | $C_n$ | Rotation by $360°/n$ | $n$-fold rotation axis |
| Mirror plane | $\sigma$ | Reflection | $\sigma_v$ (vertical), $\sigma_h$ (horizontal), $\sigma_d$ (dihedral) |
| Inversion center | $i$ | Inversion through center | $(x,y,z) \to (-x,-y,-z)$ |
| Improper rotation axis | $S_n$ | Rotation by $360°/n$ + reflection through $\perp$ plane | Combined operation |

> [!NOTE]
> **Concept Check 16.1**
> Explain the difference between a symmetry operation and a symmetry element. For example, in a water molecule, what is the symmetry element and what is the corresponding operation?

---

## 2. Detailed Look at Each Operation

### Identity ($E$)

Every molecule possesses the identity element. It serves as the "do nothing" operation, analogous to multiplying by 1 or adding 0.

### Proper Rotation ($C_n$)

Rotation by $360°/n$ about an axis. The axis with the highest $n$ is the **principal axis**.

**Examples:**
- **H₂O**: $C_2$ axis (bisects the H–O–H angle)
- **NH₃**: $C_3$ axis (along the N and the center of the H triangle)
- **BF₃**: $C_3$ (principal) and three $C_2$ axes
- **Benzene**: $C_6$ (principal), six $C_2$ axes

Note: $C_n$ generates operations $C_n^1, C_n^2, \ldots, C_n^{n-1}, C_n^n = E$.

### Mirror Planes ($\sigma$)

- **$\sigma_v$ (vertical)**: Contains the principal axis
- **$\sigma_h$ (horizontal)**: Perpendicular to the principal axis
- **$\sigma_d$ (dihedral)**: Contains the principal axis and bisects two $C_2$ axes

**Examples:**
- H₂O has two $\sigma_v$ planes (the molecular plane and the perpendicular plane through O)
- BF₃ has one $\sigma_h$ (the molecular plane) and three $\sigma_v$

### Inversion ($i$)

Every point $(x, y, z)$ is mapped to $(-x, -y, -z)$ through a center of symmetry.

**Has $i$**: SF₆, benzene, ethane (staggered), CO₂
**Lacks $i$**: H₂O, NH₃, CH₄, CHCl₃

### Improper Rotation ($S_n$)

$S_n = \sigma_h \times C_n$ (rotate by $360°/n$, then reflect through the perpendicular plane).

- $S_1 = \sigma$ (just a reflection)
- $S_2 = i$ (inversion)
- **CH₄** has three $S_4$ axes (but no $C_4$ or $\sigma_h$ individually!)

---

## 3. Point Group Classification

A **point group** is the complete set of symmetry operations for a molecule. It is called a "point" group because at least one point (the center of mass) is unmoved by every operation.

### Systematic Flowchart for Assigning Point Groups

```
Start
 ├── Linear?
 │    ├── Yes → Has i? → Yes: D∞h (CO₂) / No: C∞v (HCl)
 │    └── No ↓
 ├── Two or more Cn (n ≥ 3)?
 │    ├── Yes → Has i? → Yes: Oh or Ih / No: Td
 │    └── No ↓
 ├── Find principal Cn axis
 │    ├── n C₂ ⊥ to Cn?
 │    │    ├── Yes → σh? → Dnh
 │    │    │         σd? → Dnd
 │    │    │         neither → Dn
 │    │    └── No ↓
 │    ├── σh? → Cnh
 │    ├── nσv? → Cnv
 │    ├── S2n? → S2n
 │    └── None → Cn
 ├── No Cn (n > 1)?
 │    ├── σ? → Cs
 │    ├── i? → Ci
 │    └── Neither → C1
```

### Common Point Groups with Examples

| Point Group | Key Features | Example Molecules |
|------------|-------------|-------------------|
| $C_1$ | No symmetry except $E$ | CHFClBr |
| $C_s$ | Only a mirror plane | HOCl |
| $C_i$ | Only inversion | meso-tartaric acid |
| $C_{2v}$ | $C_2$ + 2$\sigma_v$ | H₂O, CH₂Cl₂, pyridine |
| $C_{3v}$ | $C_3$ + 3$\sigma_v$ | NH₃, CHCl₃, POCl₃ |
| $C_{\infty v}$ | Linear, no $i$ | HCl, HCN, CO, NO |
| $D_{2h}$ | Three $C_2$ + $\sigma_h$ + 2$\sigma_v$ | C₂H₄ (ethylene), naphthalene |
| $D_{3h}$ | $C_3$ + 3$C_2$ + $\sigma_h$ | BF₃, PCl₅ (eq), CO₃²⁻ |
| $D_{6h}$ | $C_6$ + 6$C_2$ + $\sigma_h$ | Benzene |
| $D_{\infty h}$ | Linear, has $i$ | CO₂, N₂, C₂H₂ |
| $T_d$ | Tetrahedral | CH₄, CCl₄, SiH₄ |
| $O_h$ | Octahedral | SF₆, [Fe(CN)₆]⁴⁻ |

> [!NOTE]
> **Concept Check 16.2**
> Following the point group flowchart, why does water ($H_2O$) belong to the $C_{2v}$ point group while ammonia ($NH_3$) belongs to $C_{3v}$? What specific symmetry element differs between them?

---

## 4. Why Symmetry Matters in Chemistry

We will use point groups in the coming weeks to:

1. **Classify molecular vibrations** (Week 7): Determine normal modes and their symmetry species using character tables
2. **Predict IR and Raman activity** (Week 8): A vibration is IR active only if it belongs to the same symmetry species as $x$, $y$, or $z$ (translational functions in the character table)
3. **Construct molecular orbitals** (Weeks 11–13): Only atomic orbitals of the same symmetry species can combine
4. **Determine selection rules** for electronic transitions (Week 13): Only transitions with nonzero transition dipole moment are allowed

---

## Key Equations Summary

| Concept | Expression |
|---------|-----------|
| $C_n^k$ | Rotation by $k \times 360°/n$ |
| $S_n$ | $\sigma_h \circ C_n$ |
| $S_1 = \sigma$, $S_2 = i$ | Special cases |
| Order of group | Total number of symmetry operations |

## Recent Literature Spotlight

**"MolSym: A Python Package for Handling Symmetry in Molecular Quantum Chemistry"**
*S. M. Goodlett, N. L. Kitzmiller, J. M. Turney, H. F. Schaefer III*, Journal of Chemical Physics, **2024**, 161, 012501. [DOI](https://doi.org/10.1063/5.0216738)

This paper introduces MolSym, a Python package that automates molecular symmetry analysis for quantum chemistry calculations. The software identifies point groups, generates symmetry-adapted linear combinations of basis functions, and constructs character tables — tasks that are central to the group theory taught in this lecture and that underpin modern computational chemistry.

---

## Practice Problems

1. **Identify operations.** List all symmetry elements and operations for (a) H₂O, (b) NH₃, (c) BF₃, (d) CH₄, (e) benzene.

2. **Point group assignment.** Assign the following molecules to their point groups: (a) CHCl₃, (b) trans-1,2-dichloroethylene, (c) allene (H₂C=C=CH₂), (d) SF₆, (e) ferrocene (staggered).

3. **Inversion.** For each molecule in Problem 2, determine whether it has an inversion center. Which of these molecules are optically active (chiral)?

---

*Next lecture: Group Theory — Representations & Character Tables*
