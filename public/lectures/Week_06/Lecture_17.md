# Lecture 17 — Group Theory: Representations & Character Tables

**Reading:** Engel 4th ed., Chapter 16 (Sections 16.4–16.6)

## Learning Objectives

- Define what a mathematical group is and verify that point group operations satisfy the group axioms
- Construct matrix representations of symmetry operations
- Distinguish between reducible and irreducible representations
- Read and interpret character tables
- Identify the symmetry species of common chemical functions (orbitals, translations, rotations)

---

## 1. Mathematical Groups

A **group** is a set $G = \{g_1, g_2, \ldots, g_h\}$ with a binary operation (here, successive application of symmetry operations) satisfying four axioms:

| Axiom | Statement |
|-------|----------|
| **Closure** | If $A, B \in G$, then $A \cdot B \in G$ |
| **Associativity** | $A \cdot (B \cdot C) = (A \cdot B) \cdot C$ |
| **Identity** | $\exists\, E \in G$ such that $E \cdot A = A \cdot E = A$ |
| **Inverse** | $\forall\, A \in G$, $\exists\, A^{-1} \in G$ such that $A \cdot A^{-1} = E$ |

The **order** of the group, $h$, is the total number of elements (symmetry operations).

### Example: $C_{2v}$ (H₂O)

Operations: $\{E, C_2, \sigma_v, \sigma_v'\}$ — order $h = 4$.

**Multiplication table:**

| · | $E$ | $C_2$ | $\sigma_v$ | $\sigma_v'$ |
|---|-----|-------|-----------|------------|
| $E$ | $E$ | $C_2$ | $\sigma_v$ | $\sigma_v'$ |
| $C_2$ | $C_2$ | $E$ | $\sigma_v'$ | $\sigma_v$ |
| $\sigma_v$ | $\sigma_v$ | $\sigma_v'$ | $E$ | $C_2$ |
| $\sigma_v'$ | $\sigma_v'$ | $\sigma_v$ | $C_2$ | $E$ |

This table shows closure (every product is in the group) and each element has an inverse.

> [!NOTE]
> **Concept Check 17.1**
> If a set of operations fails the "Closure" axiom, can it be considered a mathematical group? Describe a set of geometric operations that would *not* form a group.

---

## 2. Matrix Representations

### The Idea

We can represent each symmetry operation as a **matrix** that acts on a set of basis functions (e.g., atomic coordinates, orbitals).

### Example: $C_{2v}$ Acting on $(x, y, z)$ Coordinates

Choose the $C_2$ axis along $z$, $\sigma_v$ as the $xz$ plane.

$$E: \begin{pmatrix} x\\y\\z \end{pmatrix} \to \begin{pmatrix} 1&0&0\\0&1&0\\0&0&1 \end{pmatrix}\begin{pmatrix} x\\y\\z \end{pmatrix}$$

$$C_2: \begin{pmatrix} x\\y\\z \end{pmatrix} \to \begin{pmatrix} -1&0&0\\0&-1&0\\0&0&1 \end{pmatrix}\begin{pmatrix} x\\y\\z \end{pmatrix}$$

$$\sigma_v(xz): \begin{pmatrix} x\\y\\z \end{pmatrix} \to \begin{pmatrix} 1&0&0\\0&-1&0\\0&0&1 \end{pmatrix}\begin{pmatrix} x\\y\\z \end{pmatrix}$$

$$\sigma_v'(yz): \begin{pmatrix} x\\y\\z \end{pmatrix} \to \begin{pmatrix} -1&0&0\\0&1&0\\0&0&1 \end{pmatrix}\begin{pmatrix} x\\y\\z \end{pmatrix}$$

### Characters

The **character** $\chi(R)$ of operation $R$ is the **trace** (sum of diagonal elements) of its matrix:

$$\chi(R) = \text{Tr}[D(R)] = \sum_i D_{ii}(R)$$

For the representations above:

| Operation | $E$ | $C_2$ | $\sigma_v$ | $\sigma_v'$ |
|-----------|-----|-------|-----------|------------|
| $\chi$ | 3 | -1 | 1 | 1 |

---

## 3. Reducible and Irreducible Representations

### Irreducible Representations (irreps)

The simplest, smallest-dimension representations that cannot be further decomposed. They are the "building blocks."

### Reducible Representations

Larger representations that can be **decomposed** into a sum of irreducible representations.

The 3-D representation above is **reducible**. Looking at the matrices, $x$, $y$, and $z$ each transform independently — so the 3×3 representation decomposes into three 1×1 representations:

| | $E$ | $C_2$ | $\sigma_v$ | $\sigma_v'$ | Irrep |
|-|-----|-------|-----------|------------|-------|
| $z$ | 1 | 1 | 1 | 1 | $A_1$ |
| $x$ | 1 | -1 | 1 | -1 | $B_1$ |
| $y$ | 1 | -1 | -1 | 1 | $B_2$ |

---

## 4. Character Tables

A character table summarizes all irreducible representations of a point group.

### The $C_{2v}$ Character Table

| $C_{2v}$ | $E$ | $C_2$ | $\sigma_v(xz)$ | $\sigma_v'(yz)$ | Linear functions | Quadratic |
|---------|-----|-------|---------------|----------------|-----------------|-----------|
| $A_1$ | 1 | 1 | 1 | 1 | $z$ | $x^2, y^2, z^2$ |
| $A_2$ | 1 | 1 | -1 | -1 | $R_z$ | $xy$ |
| $B_1$ | 1 | -1 | 1 | -1 | $x, R_y$ | $xz$ |
| $B_2$ | 1 | -1 | -1 | 1 | $y, R_x$ | $yz$ |

### Reading the Table

**Column 1:** Mulliken symbol for each irrep
- $A$: symmetric with respect to $C_n$ ($\chi = +1$)
- $B$: antisymmetric with respect to $C_n$ ($\chi = -1$)
- $E$: 2-dimensional irrep (doubly degenerate)
- $T$: 3-dimensional irrep (triply degenerate)
- Subscript 1/2: symmetric/antisymmetric to $\sigma_v$ or $C_2'$
- $'/ ''$: symmetric/antisymmetric to $\sigma_h$
- $g/u$: symmetric/antisymmetric to $i$ (gerade/ungerade)

**Rightmost columns:** Show which functions (translations, rotations, quadratic forms) belong to each irrep — essential for spectroscopic selection rules.

> [!NOTE]
> **Concept Check 17.2**
> In a character table, what do the Mulliken symbols $A$ and $B$ signify regarding the symmetry of the representation with respect to the principal axis of rotation?

---

## 5. Important Properties of Characters

### Orthogonality of Characters

$$\sum_R \chi_i(R)^*\,\chi_j(R) = h\,\delta_{ij}$$

where the sum is over all operations $R$ and $h$ is the order of the group.

### Sum of Squared Dimensions

$$\sum_i l_i^2 = h$$

where $l_i$ is the dimension of the $i$th irrep.

For $C_{2v}$: $1^2 + 1^2 + 1^2 + 1^2 = 4 = h$. ✓

---

## 6. Common Character Tables Reference

### $C_{3v}$ (NH₃)

| $C_{3v}$ | $E$ | $2C_3$ | $3\sigma_v$ | Functions |
|---------|-----|--------|-----------|-----------|
| $A_1$ | 1 | 1 | 1 | $z$; $x^2+y^2, z^2$ |
| $A_2$ | 1 | 1 | -1 | $R_z$ |
| $E$ | 2 | -1 | 0 | $(x,y), (R_x,R_y)$; $(x^2-y^2,xy), (xz,yz)$ |

Note: $E$ is a **2-D irrep** — it accounts for the doubly degenerate pair $(x,y)$.

---

## Key Equations Summary

| Concept | Expression |
|---------|-----------|
| Character | $\chi(R) = \text{Tr}[D(R)]$ |
| Orthogonality | $\sum_R \chi_i^*\chi_j = h\,\delta_{ij}$ |
| Dimension sum | $\sum_i l_i^2 = h$ |
| Number of irreps | = number of classes of operations |

## Recent Literature Spotlight

**"Valence Bond and Molecular Orbital: Two Powerful Theories That Nicely Complement One Another"**
*S. Shaik, D. Danovich, B. Braida, W. Wu, P. C. Hiberty*, Journal of Chemical Education, **2021**, 98, 1518–1530. [DOI](https://doi.org/10.1021/acs.jchemed.0c01349)

This pedagogical paper by pioneers of valence bond theory explains how VB and MO approaches are complementary rather than competing descriptions of chemical bonding. The authors show that molecular symmetry plays a central role in both frameworks and use examples from diatomic molecules to demonstrate how group theory constrains the allowed orbital interactions.

---

## Practice Problems

1. **Group axioms.** Write the multiplication table for $C_{3v}$. Verify closure and identify the inverse of each element.

2. **Matrix representations.** For the $C_{3v}$ group, write the 2×2 matrix representations for $E$, $C_3$, $C_3^2$, and one $\sigma_v$ acting on the basis $(x, y)$. Verify that the characters match the $E$ irrep in the character table.

3. **Classifying functions.** Using the $C_{2v}$ character table, determine the symmetry species (irrep) of: (a) the $p_z$ orbital on the central atom, (b) the $p_x$ orbital, (c) the $d_{xy}$ orbital, (d) the $d_{z^2}$ orbital.

---

*Next lecture: Applications — Reducible Representations & the Reduction Formula*
