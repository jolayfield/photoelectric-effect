# Lecture 8 — Postulates I–III: State Functions, Operators & Measurement

**Reading:** Engel 4th ed., Chapter 3 (Sections 3.1–3.3)

## Learning Objectives

- State and interpret Postulates I–III of quantum mechanics
- Identify valid quantum-mechanical state functions
- Construct quantum-mechanical operators from classical expressions
- Verify that an operator is Hermitian
- Solve eigenvalue equations — using the particle in a box as a primary example

---

## Postulate I — The State Function

> **The state of a quantum-mechanical system is completely specified by a function $\Psi(\mathbf{r}, t)$ — the wavefunction — that depends on the coordinates of the particle(s) and on time. All observable properties can be extracted from $\Psi$.**

### Key Implications

- $\Psi$ contains *all* information about the system
- $|\Psi|^2$ gives the probability density (Born interpretation, Lecture 7)
- $\Psi$ must satisfy the requirements from Lecture 7: single-valued, continuous, normalizable

### PIB Example: The State Function in Action

The PIB wavefunctions $\psi_n(x) = \sqrt{2/a}\sin(n\pi x/a)$ are valid state functions:
- They satisfy the Schrödinger equation inside the box
- They meet all wavefunction constraints (Lecture 7)
- From $\psi_n$ alone, we can extract everything: energies, probabilities, expectation values

The particle can also exist in a **superposition** of these states:

$$\Psi(x) = c_1\psi_1(x) + c_2\psi_2(x) + \cdots$$

This is also a valid state function, and Postulate I tells us it contains all the information about the system.

---

## Postulate II — Observables and Operators

> **For every observable (measurable quantity) in classical mechanics, there is a corresponding linear, Hermitian operator in quantum mechanics. The operator is obtained by replacing classical variables with their quantum-mechanical counterparts.**

### The Replacement Rules

$$x \to \hat{x} = x \quad(\text{multiplication})$$

$$p_x \to \hat{p}_x = -i\hbar\frac{\partial}{\partial x}$$

Any classical quantity expressed as $A(x, p)$ becomes $\hat{A}(\hat{x}, \hat{p})$.

### Table of Important Operators

| Observable | Classical | Operator $\hat{A}$ |
|-----------|-----------|----------|
| Position | $x$ | $x$ |
| Momentum | $p_x$ | $-i\hbar\frac{\partial}{\partial x}$ |
| Kinetic energy | $\frac{p_x^2}{2m}$ | $-\frac{\hbar^2}{2m}\frac{\partial^2}{\partial x^2}$ |
| Potential energy | $V(x)$ | $V(x)$ |
| Total energy | $H = T + V$ | $\hat{H} = -\frac{\hbar^2}{2m}\nabla^2 + V$ |
| Angular momentum ($z$) | $L_z = xp_y - yp_x$ | $\hat{L}_z = -i\hbar\frac{\partial}{\partial\phi}$ |

### PIB Example: Building the Hamiltonian

For the PIB ($V = 0$ inside, $V = \infty$ outside):

$$\hat{H}_{\text{PIB}} = -\frac{\hbar^2}{2m}\frac{d^2}{dx^2} \quad (0 < x < a)$$

Acting on $\psi_n$:

$$\hat{H}\psi_n = -\frac{\hbar^2}{2m}\frac{d^2}{dx^2}\left[\sqrt{\frac{2}{a}}\sin\left(\frac{n\pi x}{a}\right)\right] = \frac{n^2\pi^2\hbar^2}{2ma^2}\psi_n = E_n\psi_n$$

The PIB wavefunctions are **eigenfunctions** of $\hat{H}$ with **eigenvalues** $E_n$ — we built the operator from the classical recipe, and the known energies emerge automatically.

### Linearity

An operator $\hat{A}$ is **linear** if:

$$\hat{A}(c_1 f + c_2 g) = c_1\hat{A}f + c_2\hat{A}g$$

All quantum-mechanical operators are linear.

> [!NOTE]
> **Concept Check 8.1**
> Classically, kinetic energy is expressed as $T = p^2/(2m)$. Using the operator for momentum $\hat{p} = -i\hbar\frac{d}{dx}$, show that the quantum kinetic energy operator is indeed $\hat{T} = -\frac{\hbar^2}{2m}\frac{d^2}{dx^2}$. Then verify that $\psi_2 = \sqrt{2/a}\sin(2\pi x/a)$ is an eigenfunction by applying $\hat{T}$ to it.

### Hermitian Operators

An operator $\hat{A}$ is **Hermitian** (self-adjoint) if:

$$\int \psi_1^*\,\hat{A}\,\psi_2\,dx = \int (\hat{A}\psi_1)^*\,\psi_2\,dx$$

or equivalently in Dirac notation: $\langle \psi_1 | \hat{A} | \psi_2 \rangle = \langle \hat{A}\psi_1 | \psi_2 \rangle$.

**Why Hermitian?** Because Hermitian operators guarantee:
1. **Real eigenvalues** — measurement outcomes must be real numbers
2. **Orthogonal eigenfunctions** — eigenfunctions belonging to different eigenvalues are orthogonal

#### Proof: Eigenvalues are Real

If $\hat{A}\psi = a\psi$:

$$\int\psi^*\hat{A}\psi\,dx = a\int|\psi|^2\,dx = a$$

$$\int(\hat{A}\psi)^*\psi\,dx = a^*\int|\psi|^2\,dx = a^*$$

Hermiticity requires these to be equal, so $a = a^*$, meaning $a$ is real. ∎

#### PIB Verification: Orthogonality

For the PIB, $\hat{H}$ is Hermitian, so its eigenfunctions must be orthogonal. Indeed:

$$\int_0^a \psi_m^*(x)\psi_n(x)\,dx = \frac{2}{a}\int_0^a \sin\left(\frac{m\pi x}{a}\right)\sin\left(\frac{n\pi x}{a}\right)dx = \delta_{mn}$$

The $n = 1$ and $n = 2$ states are orthogonal — physically, they represent completely distinguishable states with different energies.

---

## Postulate III — Measurement

> **When a measurement of observable $A$ is made on a system in state $\Psi$, the only possible results are the eigenvalues $\{a_n\}$ of the corresponding operator $\hat{A}$.**

$$\hat{A}\psi_n = a_n\psi_n$$

### Implications

- Measurement *always* yields one of the eigenvalues — never anything in between
- If the system is in an eigenstate $\psi_n$, measurement gives $a_n$ with certainty
- If the system is in a superposition, the result is probabilistic (Postulate IV, next lecture)

### PIB Example: What Can You Measure?

If you measure the **energy** of a particle in a box, the only possible results are:

$$E_n = \frac{n^2 h^2}{8ma^2}, \quad n = 1, 2, 3, \ldots$$

You can *never* measure an energy between $E_1$ and $E_2$. Even if the particle is in a superposition $\Psi = c_1\psi_1 + c_2\psi_2$, you will measure either $E_1$ or $E_2$ — never $(E_1 + E_2)/2$.

> [!NOTE]
> **Concept Check 8.2**
> A particle in a box is in the state $\Psi = \frac{1}{\sqrt{2}}\psi_1 + \frac{1}{\sqrt{2}}\psi_3$. (a) If you measure the energy, what values can you get? (b) Can you ever measure $E_2$? Why or why not? (c) Is the average energy $(E_1 + E_3)/2$?

### Eigenvalue Equations — Worked Example

**Is a PIB wavefunction an eigenfunction of momentum?**

Apply $\hat{p} = -i\hbar\frac{d}{dx}$ to $\psi_1 = \sqrt{2/a}\sin(\pi x/a)$:

$$\hat{p}\psi_1 = -i\hbar\sqrt{\frac{2}{a}}\cdot\frac{\pi}{a}\cos\left(\frac{\pi x}{a}\right)$$

This is proportional to $\cos(\pi x/a)$, not $\sin(\pi x/a)$. Therefore $\psi_1$ is **not** an eigenfunction of $\hat{p}$.

Physical interpretation: a PIB state has definite energy but *not* definite momentum — the particle bounces back and forth, with equal probability of moving left or right.

### Discrete vs. Continuous Spectra

| | Discrete | Continuous |
|-|----------|-----------|
| Example | Particle in a box | Free particle |
| Eigenvalues | $E_n = \frac{n^2\pi^2\hbar^2}{2ma^2}$ | $E = \frac{\hbar^2k^2}{2m}$ (any $k$) |
| Normalization | $\int|\psi_n|^2\,dx = 1$ | $\int\psi_k^*\psi_{k'}\,dx = \delta(k-k')$ |

---

## Key Equations Summary

| Equation | Expression |
|----------|-----------|
| Postulate I | $\Psi(\mathbf{r},t)$ fully specifies the state |
| Postulate II | Observables → linear Hermitian operators |
| Postulate III | Measurements yield eigenvalues only |
| PIB eigenvalue eq. | $\hat{H}\psi_n = E_n\psi_n$ |
| Hermiticity condition | $\int\psi_1^*\hat{A}\psi_2\,dx = \int(\hat{A}\psi_1)^*\psi_2\,dx$ |
| Orthogonality | $\int\psi_m^*\psi_n\,dx = \delta_{mn}$ |

## Recent Literature Spotlight

**"Catalytic Hydrogenation Dominated by Concerted Hydrogen Tunneling at Room Temperature"**
*B. Wüstenberg, T. N. Ponath, G. T. Vries, P. Chen, et al.*, JACS, **2024**, 146, 32263–32268. [DOI](https://doi.org/10.1021/jacs.4c11726)

This study provides compelling evidence that quantum mechanical hydrogen tunneling can dominate a chemical reaction pathway at room temperature. Using kinetic isotope effects and Arrhenius analysis, the authors show that a catalytic hydrogenation proceeds primarily through a concerted tunneling mechanism — an operator eigenvalue problem made real in an enzyme active site.

---

## Practice Problems

1. **Hermiticity.** Show that $\hat{p} = -i\hbar\frac{d}{dx}$ is Hermitian. (Hint: use integration by parts and assume wavefunctions vanish at $\pm\infty$.)

2. **PIB eigenvalue check.** Apply $\hat{H}$ to the PIB wavefunction $\psi_3(x) = \sqrt{2/a}\sin(3\pi x/a)$ and verify that the eigenvalue is $E_3 = 9h^2/(8ma^2)$.

3. **Operator construction.** Construct the quantum-mechanical operator for the angular momentum component $L_z = xp_y - yp_x$. Verify that it is equivalent to $-i\hbar\frac{\partial}{\partial\phi}$ in cylindrical coordinates.

---

*Next lecture: Postulates IV–VI — Expansion, Expectation Values & Time Evolution*
