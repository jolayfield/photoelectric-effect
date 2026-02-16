# Lecture 26 — Atomic Orbitals, Radial Distributions & Angular Wavefunctions

**Reading:** Engel 4th ed., Chapter 9 (Sections 9.4–9.6)

## Learning Objectives

- Interpret radial wavefunctions $R_{n,l}(r)$ and identify their nodes
- Calculate and interpret radial distribution functions $P(r) = r^2|R|^2$
- Visualize angular wavefunctions and orbital shapes ($s$, $p$, $d$)
- Distinguish between radial nodes and angular nodes
- Construct real orbitals from complex spherical harmonics

---

## 1. Radial Wavefunctions

### General Form

$$R_{n,l}(r) = N_{n,l}\,\rho^l\,L_{n,l}(\rho)\,e^{-\rho/2}$$

where $\rho = 2r/(na_0)$ and $L_{n,l}$ are associated Laguerre polynomials.

### First Few Radial Functions

| Orbital | $R_{n,l}(r)$ (unnormalized) |
|---------|---------------------------|
| $1s$ | $e^{-r/a_0}$ |
| $2s$ | $(2 - r/a_0)\,e^{-r/(2a_0)}$ |
| $2p$ | $(r/a_0)\,e^{-r/(2a_0)}$ |
| $3s$ | $(27 - 18r/a_0 + 2r^2/a_0^2)\,e^{-r/(3a_0)}$ |
| $3p$ | $(6 - r/a_0)(r/a_0)\,e^{-r/(3a_0)}$ |
| $3d$ | $(r/a_0)^2\,e^{-r/(3a_0)}$ |

### Radial Nodes

$R_{n,l}$ passes through zero at certain values of $r$ — these are **radial nodes**.

Number of radial nodes = $n - l - 1$

| Orbital | $n$ | $l$ | Radial nodes |
|---------|-----|-----|-------------|
| $1s$ | 1 | 0 | 0 |
| $2s$ | 2 | 0 | 1 |
| $2p$ | 2 | 1 | 0 |
| $3s$ | 3 | 0 | 2 |
| $3p$ | 3 | 1 | 1 |
| $3d$ | 3 | 2 | 0 |

> [!NOTE]
> **Concept Check 26.1**
> How many radial nodes does a $4s$ orbital have? How many does a $4p$ orbital have? Use the formula $n - l - 1$.

### Total Nodes

Total nodes = radial nodes + angular nodes = $(n - l - 1) + l = n - 1$

---

## 2. Radial Distribution Function

The probability of finding the electron between $r$ and $r + dr$ (regardless of angle):

$$\boxed{P(r)\,dr = r^2|R_{n,l}(r)|^2\,dr}$$

The factor $r^2$ comes from the volume element in spherical coordinates ($dV = r^2\sin\theta\,dr\,d\theta\,d\phi$).

### Key Features of $P(r)$

**1s orbital:**
- $P(r) = 4r^2|R_{1s}|^2/a_0^3 \cdot e^{-2r/a_0}$
- Maximum at $r = a_0$ (the Bohr radius!)
- Despite the maximum at $a_0$, $|\psi|^2$ is maximum at $r = 0$

**2s orbital:**
- $P(r)$ has **two maxima** with a node between them
- The outer maximum is larger and farther from the nucleus

**General trend:** Higher $n$ → electron cloud extends farther → larger $\langle r \rangle$

### Most Probable Distance

$$r_{\max} = n^2 a_0 \quad \text{(for orbitals with } l = n-1 \text{, i.e., the most "circular" orbitals)}$$

### Average Distance

$$\langle r \rangle_{n,l} = \frac{a_0}{2}\left[3n^2 - l(l+1)\right]$$

---

## 3. Angular Wavefunctions and Orbital Shapes

### $s$ Orbitals ($l = 0$)

$$Y_0^0 = \frac{1}{\sqrt{4\pi}}$$

Spherically symmetric — no angular dependence. One lobe.

### $p$ Orbitals ($l = 1$)

The complex spherical harmonics $Y_1^0$, $Y_1^{\pm 1}$ are converted to real orbitals:

$$p_z = Y_1^0 \propto \cos\theta$$

$$p_x = \frac{1}{\sqrt{2}}(Y_1^{-1} - Y_1^{+1}) \propto \sin\theta\cos\phi$$

$$p_y = \frac{i}{\sqrt{2}}(Y_1^{-1} + Y_1^{+1}) \propto \sin\theta\sin\phi$$

Each $p$ orbital has **one angular node** (a nodal plane):
- $p_z$: nodal plane is $xy$ (where $\cos\theta = 0$, i.e., $\theta = 90°$)
- $p_x$: nodal plane is $yz$
- $p_y$: nodal plane is $xz$

### $d$ Orbitals ($l = 2$)

Five $d$ orbitals, each with **two angular nodes** (nodal planes or cones):

$$d_{z^2} \propto 3\cos^2\theta - 1 \qquad \text{(two cones)}$$

$$d_{xz} \propto \sin\theta\cos\theta\cos\phi$$

$$d_{yz} \propto \sin\theta\cos\theta\sin\phi$$

$$d_{x^2-y^2} \propto \sin^2\theta\cos 2\phi$$

$$d_{xy} \propto \sin^2\theta\sin 2\phi$$

### Angular Node Count

Number of angular nodes = $l$

| Orbital type | $l$ | Angular nodes | Shape |
|-------------|-----|--------------|-------|
| $s$ | 0 | 0 | Sphere |
| $p$ | 1 | 1 | Two lobes |
| $d$ | 2 | 2 | Four lobes (mostly) |
| $f$ | 3 | 3 | Eight lobes (mostly) |

> [!NOTE]
> **Concept Check 26.2**
> A $p_z$ orbital has one angular node. What is the geometric shape of this node, and what is its equation in Cartesian coordinates?

---

## 4. Symmetry of Orbitals

Under the point group operations of the full rotation group (and molecular point groups):

| Orbital | Transforms as | In $O_h$ | In $T_d$ |
|---------|--------------|----------|----------|
| $s$ | $\Sigma_g^+$ / $A_{1g}$ | $a_{1g}$ | $a_1$ |
| $p_x, p_y, p_z$ | $\Pi_u$ / $T_{1u}$ | $t_{1u}$ | $t_2$ |
| $d_{xy}, d_{xz}, d_{yz}$ | — | $t_{2g}$ | $t_2$ |
| $d_{z^2}, d_{x^2-y^2}$ | — | $e_g$ | $e$ |

This classification is essential for crystal field theory and molecular orbital construction.

---

## 5. Boundary Surface Diagrams

A **boundary surface** encloses the region where there is (typically) a 90% probability of finding the electron. These are the familiar "orbital shapes":

- $1s$: sphere
- $2p_z$: two tangent lobes along $z$ (+ and − phase)
- $3d_{z^2}$: two lobes along $z$ plus a torus in the $xy$ plane
- The **sign** of the wavefunction (phase) alternates between lobes — critical for bonding!

---

## Key Equations Summary

| Equation | Expression |
|----------|-----------|
| Radial distribution | $P(r) = r^2\|R_{nl}\|^2$ |
| Radial nodes | $n - l - 1$ |
| Angular nodes | $l$ |
| Total nodes | $n - 1$ |
| Most probable $r$ | $r_{\max} = n^2a_0$ ($l = n-1$) |
| Average $r$ | $\langle r\rangle = \frac{a_0}{2}[3n^2-l(l+1)]$ |

## Recent Literature Spotlight

**"The Chemical Structure of a Molecule Resolved by Atomic Force Microscopy"**
*L. Gross, F. Mohn, N. Moll, P. Liljeroth, G. Meyer*, Science, **2009**, 325, 1110–1114. [DOI](https://doi.org/10.1126/science.1176210)

This pioneering experiment used non-contact atomic force microscopy with a CO-functionalized tip to directly image the chemical structure of pentacene with atomic resolution. The images reveal the pentagon and hexagon carbon rings, directly visualizing the electron density predicted by quantum mechanical orbital theory. This landmark result showed for the first time that orbital-level molecular structure can be "seen" experimentally.

---

## Practice Problems

1. **Node counting.** For the $4d$ orbital: (a) How many radial nodes? (b) How many angular nodes? (c) How many total nodes?

2. **Radial distribution.** Show that the maximum of $P(r)$ for the $1s$ orbital occurs at $r = a_0$ by differentiating $P(r) = \frac{4}{a_0^3}r^2 e^{-2r/a_0}$ and setting the derivative to zero.

3. **Orbital comparison.** Calculate $\langle r \rangle$ for the $3s$, $3p$, and $3d$ orbitals. Which extends farthest from the nucleus? Which has the most probability near the nucleus (hint: think about radial nodes and penetration)?

---

*Next lecture: The Hydrogen Emission Spectrum & Selection Rules*
