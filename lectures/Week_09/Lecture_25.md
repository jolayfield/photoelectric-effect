# Lecture 25 — The Hydrogen Atom Schrödinger Equation & Quantum Numbers

**Reading:** Engel 4th ed., Chapter 9 (Sections 9.1–9.3)

## Learning Objectives

- Write the Hamiltonian for the hydrogen atom including the Coulomb potential
- Separate the Schrödinger equation into radial and angular parts
- Identify the quantum numbers $n$, $l$, and $m_l$ and their ranges
- State the energy eigenvalues and explain the $n$-fold degeneracy
- Compare hydrogen-like energies for ions with $Z > 1$

---

## 1. The Hydrogen Atom Hamiltonian

A proton (charge $+e$) and electron (charge $-e$) interacting via the Coulomb potential:

$$\hat{H} = -\frac{\hbar^2}{2\mu}\nabla^2 - \frac{e^2}{4\pi\epsilon_0 r}$$

where $\mu \approx m_e$ is the reduced mass of the electron-proton system and $r$ is the electron-proton distance.

> [!NOTE]
> **Concept Check 25.1**
> Why is the Coulomb potential term in the Hamiltonian negative ($-\frac{e^2}{4\pi\epsilon_0 r}$)? What would it mean physically if this term were positive?

### Spherical Coordinates

Since the potential depends only on $r$ (spherically symmetric), we use spherical coordinates $(r, \theta, \phi)$:

$$\nabla^2 = \frac{1}{r^2}\frac{\partial}{\partial r}\left(r^2\frac{\partial}{\partial r}\right) + \frac{1}{r^2}\left[\frac{1}{\sin\theta}\frac{\partial}{\partial\theta}\left(\sin\theta\frac{\partial}{\partial\theta}\right) + \frac{1}{\sin^2\theta}\frac{\partial^2}{\partial\phi^2}\right]$$

The angular part is exactly $\hat{L}^2/(-\hbar^2 r^2)$ — the angular momentum operator we solved with the rigid rotor!

---

## 2. Separation of Variables

We write $\psi(r,\theta,\phi) = R(r) \cdot Y_l^{m_l}(\theta,\phi)$

The angular equation is already solved — the solutions are spherical harmonics $Y_l^{m_l}$.

The **radial equation** becomes:

$$-\frac{\hbar^2}{2\mu}\left[\frac{d^2u}{dr^2} - \frac{l(l+1)}{r^2}u\right] - \frac{e^2}{4\pi\epsilon_0 r}u = Eu$$

where $u(r) = rR(r)$.

The term $\frac{\hbar^2 l(l+1)}{2\mu r^2}$ acts as a **centrifugal barrier** — an effective repulsive potential for $l > 0$ that keeps the electron away from the nucleus.

---

## 3. The Three Quantum Numbers

Solving the radial equation with the boundary condition $R(r) \to 0$ as $r \to \infty$ introduces a third quantum number $n$:

| Quantum Number | Symbol | Allowed Values | Physical Meaning |
|---------------|--------|---------------|-----------------|
| Principal | $n$ | $1, 2, 3, \ldots$ | Energy level; determines size of orbital |
| Angular momentum | $l$ | $0, 1, 2, \ldots, n-1$ | Orbital shape; $\|L\| = \hbar\sqrt{l(l+1)}$ |
| Magnetic | $m_l$ | $-l, \ldots, 0, \ldots, +l$ | Orientation; $L_z = m_l\hbar$ |

### Spectroscopic Notation

| $l$ | 0 | 1 | 2 | 3 | 4 |
|-----|---|---|---|---|---|
| Letter | $s$ | $p$ | $d$ | $f$ | $g$ |

Orbital label: $n + \text{letter}$ (e.g., $1s$, $2p$, $3d$, $4f$)

### How Many Orbitals?

For a given $n$:
- $l$ ranges from $0$ to $n-1$ → $n$ values
- For each $l$, $m_l$ ranges from $-l$ to $+l$ → $2l+1$ values
- Total orbitals: $\sum_{l=0}^{n-1}(2l+1) = n^2$

| $n$ | $l$ values | Orbitals | Total |
|-----|-----------|----------|-------|
| 1 | 0 ($s$) | $1s$ | 1 |
| 2 | 0, 1 ($s, p$) | $2s, 2p_{x,y,z}$ | 4 |
| 3 | 0, 1, 2 ($s, p, d$) | $3s, 3p, 3d$ | 9 |
| 4 | 0, 1, 2, 3 | $4s, 4p, 4d, 4f$ | 16 |

---

## 4. Energy Eigenvalues

$$\boxed{E_n = -\frac{\mu e^4}{32\pi^2\epsilon_0^2\hbar^2}\cdot\frac{1}{n^2} = -\frac{13.6\text{ eV}}{n^2}, \quad n = 1, 2, 3, \ldots}$$

### Key Features

1. **Negative energies**: bound states (electron is trapped)
2. **$E \propto 1/n^2$**: levels converge toward $E = 0$ (ionization threshold)
3. **$n^2$-fold degeneracy**: energy depends *only* on $n$, not on $l$ or $m_l$
   - This is a special feature of the $1/r$ potential (not true for multi-electron atoms!)
   - Including spin: $2n^2$-fold degeneracy
4. **Ground state**: $E_1 = -13.6$ eV

> [!NOTE]
> **Concept Check 25.2**
> In the hydrogen atom (neglecting spin), what is the total degeneracy of the $n = 2$ energy level? List the specific orbitals that share this same energy.

### Ionization Energy

$$IE = -E_1 = 13.6\text{ eV} = 1312\text{ kJ/mol}$$

---

## 5. Hydrogen-Like Ions ($Z > 1$)

For ions with one electron (He⁺, Li²⁺, etc.):

$$E_n = -\frac{Z^2 \times 13.6\text{ eV}}{n^2}$$

The electron is bound $Z^2$ times more tightly.

### Bohr Radius Scaling

$$a_0 = \frac{4\pi\epsilon_0\hbar^2}{m_e e^2} = 0.529\text{ Å}$$

For hydrogen-like ions: $\langle r \rangle \propto n^2/Z$ — orbitals shrink with increasing $Z$.

---

## 6. Connection to Symmetry

The hydrogen atom has full **spherical symmetry** ($R_3$ group — the group of all rotations in 3D). This is why:
- Energy depends only on $n$ (not on orientation quantum numbers $l$, $m_l$)
- Degeneracy is $n^2$ (or $2n^2$ with spin)
- Orbitals are classified by $l$, which labels irreducible representations of the rotation group

When the atom is placed in a molecular environment, the symmetry is lowered to a point group, and the degeneracy is (partially) lifted — this is the basis of **crystal field theory**.

---

## Key Equations Summary

| Equation | Expression |
|----------|-----------|
| Energy levels | $E_n = -13.6\text{ eV}/n^2$ |
| Bohr radius | $a_0 = 0.529\text{ Å}$ |
| Angular momentum | $\|L\| = \hbar\sqrt{l(l+1)}$ |
| $z$-component | $L_z = m_l\hbar$ |
| Degeneracy (no spin) | $n^2$ |
| Degeneracy (with spin) | $2n^2$ |
| H-like ions | $E_n = -Z^2(13.6\text{ eV})/n^2$ |

## Recent Literature Spotlight

**"Highly Excited Rydberg Atoms"**
*T. F. Gallagher*, Reviews of Modern Physics, **2010**, 82, 2313–2363. [DOI](https://doi.org/10.1103/RevModPhys.82.2313)

This comprehensive review covers the physics of highly excited Rydberg atoms — atoms with one electron promoted to states with very large principal quantum number $n$. These "giant atoms" have orbital radii scaling as $n^2 a_0$, binding energies scaling as $1/n^2$ (just like the hydrogen atom solutions derived in this lecture), and remarkably long lifetimes. Rydberg atoms serve as a bridge between quantum and classical mechanics and are now used in quantum computing and simulation.

---

## Practice Problems

1. **Quantum numbers.** List all possible quantum number combinations ($n$, $l$, $m_l$) for $n = 4$. How many orbitals is this?

2. **Ionization energy.** Calculate the ionization energy (in eV and kJ/mol) of Li²⁺ from its ground state.

3. **Orbital size.** Calculate $\langle r \rangle$ for the 1s and 2s orbitals of hydrogen. By what factor does the electron cloud grow from $n = 1$ to $n = 2$?

---

*Next lecture: Atomic Orbitals, Radial Distributions & Angular Wavefunctions*
