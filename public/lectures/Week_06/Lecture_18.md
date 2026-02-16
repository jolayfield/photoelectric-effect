# Lecture 18 — Applications: Reducible Representations & the Reduction Formula

**Reading:** Engel 4th ed., Chapter 16 (Sections 16.7–16.9)

## Learning Objectives

- Construct reducible representations for sets of basis functions (bonds, orbitals, coordinates)
- Apply the reduction formula to decompose reducible representations into irreps
- Use group theory to classify molecular vibrations by symmetry
- Predict IR and Raman activity using symmetry selection rules
- Determine which atomic orbitals can combine to form molecular orbitals

---

## 1. The Reduction Formula

Any reducible representation $\Gamma$ can be written as a sum of irreducible representations:

$$\Gamma = \sum_i n_i\,\Gamma_i$$

where $n_i$ is the number of times irrep $\Gamma_i$ appears. The coefficients are found using:

$$\boxed{n_i = \frac{1}{h}\sum_R \chi(R)\,\chi_i(R)}$$

where:
- $h$ = order of the group
- $\chi(R)$ = character of the reducible representation for operation $R$
- $\chi_i(R)$ = character of irrep $\Gamma_i$ for operation $R$
- Sum is over all operations $R$ (or over classes, multiplied by the number of operations in each class)

> [!NOTE]
> **Concept Check 18.1**
> Why is the reduction formula essential for analyzing complex molecules in quantum chemistry? How does it help us relate a large set of basis functions (like 3N displacements) back to the fundamental symmetry properties of the point group?

### Using Classes

$$n_i = \frac{1}{h}\sum_{\text{classes}} N_c\,\chi(C)\,\chi_i(C)$$

where $N_c$ is the number of operations in class $C$.

---

## 2. Worked Example: Classifying Vibrations of H₂O

### Step 1: Identify the Point Group

H₂O belongs to $C_{2v}$ ($h = 4$).

### Step 2: Construct the Reducible Representation

Use the 3$N$ Cartesian displacement vectors as the basis set. For H₂O ($N = 3$ atoms), we have $3 \times 3 = 9$ basis vectors.

The character $\chi(R)$ for each operation equals the number of atoms **unmoved** by $R$, multiplied by the contribution per unmoved atom:

| Operation | Contribution per unmoved atom |
|-----------|------------------------------|
| $E$ | +3 |
| $C_n$ | $1 + 2\cos(360°/n)$ |
| $\sigma$ | +1 |
| $i$ | $-3$ |
| $S_n$ | $-1 + 2\cos(360°/n)$ |

For H₂O:

| | $E$ | $C_2$ | $\sigma_v(xz)$ | $\sigma_v'(yz)$ |
|-|-----|-------|---------------|----------------|
| Unmoved atoms | 3 | 1 | 1 | 3 |
| Contribution/atom | 3 | -1 | 1 | 1 |
| $\chi_{\text{total}}$ | **9** | **-1** | **1** | **3** |

### Step 3: Apply the Reduction Formula

$$n_{A_1} = \frac{1}{4}[9(1) + (-1)(1) + 1(1) + 3(1)] = \frac{12}{4} = 3$$

$$n_{A_2} = \frac{1}{4}[9(1) + (-1)(1) + 1(-1) + 3(-1)] = \frac{4}{4} = 1$$

$$n_{B_1} = \frac{1}{4}[9(1) + (-1)(-1) + 1(1) + 3(-1)] = \frac{8}{4} = 2$$

$$n_{B_2} = \frac{1}{4}[9(1) + (-1)(-1) + 1(-1) + 3(1)] = \frac{12}{4} = 3$$

$$\Gamma_{\text{total}} = 3A_1 + A_2 + 2B_1 + 3B_2$$

### Step 4: Subtract Translations and Rotations

From the character table:
- Translations: $A_1(z) + B_1(x) + B_2(y)$
- Rotations: $A_2(R_z) + B_1(R_y) + B_2(R_x)$

$$\Gamma_{\text{vib}} = \Gamma_{\text{total}} - \Gamma_{\text{trans}} - \Gamma_{\text{rot}}$$

$$\Gamma_{\text{vib}} = (3A_1 + A_2 + 2B_1 + 3B_2) - (A_1 + B_1 + B_2) - (A_2 + B_1 + B_2)$$

$$\boxed{\Gamma_{\text{vib}} = 2A_1 + B_2}$$

H₂O has **3 normal modes**: two of $A_1$ symmetry (symmetric stretch and bend) and one of $B_2$ symmetry (asymmetric stretch).

---

## 3. Selection Rules from Symmetry

### Infrared (IR) Activity

A vibration is **IR active** if it belongs to the same symmetry species as one of the translational functions ($x$, $y$, or $z$) in the character table.

For H₂O ($C_{2v}$):
- $A_1$: $z$ is listed → **IR active** ✓
- $B_2$: $y$ is listed → **IR active** ✓

All three modes of H₂O are IR active.

### Raman Activity

A vibration is **Raman active** if it belongs to the same symmetry species as one of the quadratic functions ($x^2$, $y^2$, $z^2$, $xy$, $xz$, $yz$) in the character table.

For H₂O:
- $A_1$: $x^2, y^2, z^2$ → **Raman active** ✓
- $B_2$: $yz$ → **Raman active** ✓

### The Mutual Exclusion Rule

> In a molecule with an **inversion center** ($i$), no vibration can be both IR active and Raman active.

This is because in centrosymmetric molecules:
- IR-active modes are $u$ (ungerade)
- Raman-active modes are $g$ (gerade)
- No mode can be both $g$ and $u$

**Example:** CO₂ ($D_{\infty h}$) — the symmetric stretch is Raman active only; the asymmetric stretch and bends are IR active only.

> [!NOTE]
> **Concept Check 18.2**
> The manual exclusion rule states that for molecules with an inversion center, a vibration cannot be both IR active and Raman active. Explain the physical reason for this in terms of the "ungerade" ($u$) and "gerade" ($g$) symmetries.

---

## 4. Group Theory and Molecular Orbitals (Preview)

### Symmetry-Adapted Linear Combinations (SALCs)

Group theory determines which combinations of atomic orbitals transform as each irrep. Only orbitals of the **same symmetry species** can mix to form molecular orbitals.

### Projection Operator

The projection operator generates SALCs from a basis function $\phi$:

$$\hat{P}_i\,\phi = \frac{l_i}{h}\sum_R \chi_i(R)\,R\,\phi$$

**Example:** For H₂O, the two H 1s orbitals generate:
- $A_1$: $\phi_{1s,A} + \phi_{1s,B}$ (in-phase, symmetric)
- $B_2$: $\phi_{1s,A} - \phi_{1s,B}$ (out-of-phase, antisymmetric)

These SALCs combine with O orbitals of matching symmetry to form MOs.

---

## 5. Optical Activity and Symmetry

A molecule is **optically active (chiral)** if and only if it lacks:
- Any $S_n$ axis (including $S_1 = \sigma$ and $S_2 = i$)

Equivalently, a molecule is chiral if its point group contains **only proper rotations** ($C_n$) and the identity ($E$).

Chiral point groups: $C_1$, $C_n$, $D_n$, $T$, $O$, $I$

---

## Key Equations Summary

| Equation | Expression |
|----------|-----------|
| Reduction formula | $n_i = \frac{1}{h}\sum_R \chi(R)\chi_i(R)$ |
| Vibrational modes | $\Gamma_{\text{vib}} = \Gamma_{\text{total}} - \Gamma_{\text{trans}} - \Gamma_{\text{rot}}$ |
| Number of vibrational modes | $3N - 6$ (nonlinear), $3N - 5$ (linear) |
| IR activity | Mode symmetry = translation symmetry |
| Raman activity | Mode symmetry = quadratic function symmetry |
| Projection operator | $\hat{P}_i\phi = \frac{l_i}{h}\sum_R\chi_i(R)\,R\phi$ |

## Recent Literature Spotlight

**"Nature of the Charge Density Wave in Kagome Metal CsV₃Sb₅"**
*H. Zhao, H. Li, B. R. Ortiz, S. M. L. Teicher, T. Park, et al.*, Physical Review X, **2023**, 13, 011032. [DOI](https://doi.org/10.1103/PhysRevX.13.011032)

This study reveals how molecular orbital symmetry governs the electronic ordering in the kagome metal CsV₃Sb₅. Using scanning tunneling microscopy, the authors show that charge density waves form through symmetry-driven trimerization of vanadium d-orbitals — a macroscopic quantum phenomenon that directly reflects the MO symmetry principles taught in this lecture.

---

## Practice Problems

1. **NH₃ vibrations.** Using the $C_{3v}$ character table, determine the symmetry species of the vibrational modes of NH₃. How many modes are IR active? Raman active?

2. **CO₂ modes.** CO₂ is linear ($D_{\infty h}$). It has $3(3)-5 = 4$ vibrational modes. Using symmetry arguments, predict which modes are IR active and which are Raman active. Verify the mutual exclusion rule.

3. **SALCs.** For BF₃ ($D_{3h}$), use the projection operator to construct the symmetry-adapted linear combinations of the three F $2p_z$ orbitals (perpendicular to the molecular plane). What symmetry species do they belong to?

---

*Next week: Vibration and Rotation of Molecules (using group theory!)*
