# Lecture 7 — Probability, Normalization & Wavefunction Constraints

**Reading:** Engel 4th ed., Chapter 2 (Sections 2.5–2.7)

## Learning Objectives

- State and apply the Born interpretation of the wavefunction
- Normalize wavefunctions in one and three dimensions
- List the requirements for a physically acceptable wavefunction
- Calculate probabilities from a wavefunction using the particle in a box as a model
- Interpret the wavefunction for a free particle using wave packets

---

## 1. The Born Interpretation (1926)

Max Born proposed that the wavefunction $\Psi(x,t)$ does not have direct physical meaning, but $|\Psi(x,t)|^2$ does:

$$\boxed{P(x,t)\,dx = |\Psi(x,t)|^2\,dx = \Psi^*(x,t)\,\Psi(x,t)\,dx}$$

This is the **probability** of finding the particle between $x$ and $x + dx$ at time $t$.

- $|\Psi|^2$ is the **probability density** (probability per unit length)
- $\Psi$ itself is the **probability amplitude**

### Probability in a Region

The probability of finding the particle between $x_1$ and $x_2$:

$$P(x_1 \leq x \leq x_2) = \int_{x_1}^{x_2} |\Psi(x,t)|^2\,dx$$

### PIB Example: Where Is the Particle?

For the ground state of the particle in a box, $\psi_1(x) = \sqrt{2/a}\sin(\pi x/a)$, the probability of finding the particle in the left half of the box is:

$$P\left(0 \leq x \leq \frac{a}{2}\right) = \int_0^{a/2} \frac{2}{a}\sin^2\left(\frac{\pi x}{a}\right)dx = \frac{1}{2}$$

By symmetry, the particle is equally likely to be in either half. But for the $n = 2$ state, the probability density has a node at $x = a/2$, and the particle spends *zero* time at the center — a purely quantum-mechanical result.

> [!NOTE]
> **Concept Check 7.1**
> For the PIB ground state ($n = 1$), calculate the probability of finding the particle in the middle third of the box ($a/3 \leq x \leq 2a/3$). Is it greater or less than 1/3? Why does this make physical sense given the shape of $|\psi_1|^2$?

---

## 2. Normalization

Since the particle must be found *somewhere*, the total probability over all space must equal 1:

$$\boxed{\int_{-\infty}^{\infty} |\Psi(x,t)|^2\,dx = 1}$$

This is the **normalization condition**.

### Normalization Procedure

If a solution to the Schrödinger equation gives an unnormalized function $\psi(x)$, we find the normalization constant $N$:

$$N^2 \int_{-\infty}^{\infty} |\psi(x)|^2\,dx = 1 \implies N = \left[\int_{-\infty}^{\infty}|\psi(x)|^2\,dx\right]^{-1/2}$$

The normalized wavefunction is $\psi_{\text{norm}}(x) = N\psi(x)$.

### PIB Example: Deriving the Normalization Constant

The unnormalized PIB solutions are $\psi_n(x) = A\sin(n\pi x/a)$. To normalize:

$$A^2\int_0^a \sin^2\left(\frac{n\pi x}{a}\right)dx = A^2 \cdot \frac{a}{2} = 1 \implies A = \sqrt{\frac{2}{a}}$$

This is why the PIB wavefunctions carry the factor $\sqrt{2/a}$. Notice it depends on the box size $a$ but not on $n$.

### Worked Example: Gaussian Normalization

Normalize $\psi(x) = Ae^{-\alpha x^2}$ where $\alpha > 0$:

$$\int_{-\infty}^{\infty} |A|^2 e^{-2\alpha x^2}\,dx = |A|^2\sqrt{\frac{\pi}{2\alpha}} = 1$$

$$\implies A = \left(\frac{2\alpha}{\pi}\right)^{1/4}$$

### Three Dimensions

$$\int\int\int |\Psi(\mathbf{r},t)|^2\,d^3r = 1$$

---

## 3. Constraints on Acceptable Wavefunctions

Not every mathematical function qualifies as a wavefunction. Physical requirements:

### The wavefunction must be:

1. **Single-valued**: $\psi$ has only one value at each point in space
2. **Continuous**: $\psi$ has no discontinuities
3. **Continuously differentiable**: $d\psi/dx$ is continuous (except where $V$ is infinite)
4. **Square-integrable (normalizable)**: $\int |\psi|^2\,dx < \infty$
5. **Finite**: $\psi$ does not diverge at any point

### PIB Example: Seeing the Constraints in Action

The PIB solutions $\psi_n = \sqrt{2/a}\sin(n\pi x/a)$ satisfy every constraint:
- **Single-valued:** $\sin$ is single-valued ✓
- **Continuous:** $\psi$ matches the boundary conditions $\psi(0) = \psi(a) = 0$ with the $\psi = 0$ regions outside ✓
- **Derivative discontinuity at walls:** $d\psi/dx$ is discontinuous at $x = 0$ and $x = a$ — but this is allowed because $V = \infty$ there
- **Normalizable:** $\int_0^a |\psi_n|^2\,dx = 1$ ✓

The constraint of continuity at the boundaries is precisely what *forces quantization* — only specific $k$ values satisfy $\psi(a) = 0$.

### Examples of Unacceptable Functions

| Function | Problem |
|----------|---------|
| $\psi = e^{x}$ | Not normalizable (diverges as $x \to \infty$) |
| $\psi = 1/x$ | Diverges at $x = 0$; not continuous |
| $\psi = \begin{cases} x & x > 0 \\ -2x & x < 0 \end{cases}$ | Discontinuous derivative at $x = 0$ |

> [!NOTE]
> **Concept Check 7.2**
> The function $\psi(x) = N\cos(3\pi x/a)$ satisfies the Schrödinger equation inside a box of width $a$. Explain why it is *not* an acceptable PIB wavefunction. Which constraint does it violate?

---

## 4. Expectation Values

The **expectation value** (average of many measurements) of an observable $A$ with corresponding operator $\hat{A}$:

$$\boxed{\langle A \rangle = \int_{-\infty}^{\infty} \Psi^*\,\hat{A}\,\Psi\,dx}$$

### PIB Example: Average Position

For the PIB ground state $\psi_1 = \sqrt{2/a}\sin(\pi x/a)$:

$$\langle x \rangle = \int_0^a \psi_1^* x \psi_1 \, dx = \frac{2}{a}\int_0^a x\sin^2\left(\frac{\pi x}{a}\right)dx$$

Using the identity $\sin^2\theta = \frac{1 - \cos(2\theta)}{2}$:
$$\langle x \rangle = \frac{2}{a}\int_0^a x \left( \frac{1 - \cos(2\pi x/a)}{2} \right) dx = \frac{1}{a} \left[ \int_0^a x \, dx - \int_0^a x \cos\left(\frac{2\pi x}{a}\right) dx \right]$$

The first integral is trivial: $\int x \, dx = \frac{1}{2}x^2$. 
For the second, we use the **indefinite integral**:
$$\int x \cos(kx) \, dx = \frac{\cos(kx)}{k^2} + \frac{x \sin(kx)}{k}$$

Applying this with $k = 2\pi/a$:
$$\langle x \rangle = \frac{1}{a} \left[ \left( \frac{a^2}{2} - 0 \right) - \left( \left[ \frac{\cos(2\pi x/a)}{(2\pi/a)^2} + \frac{x \sin(2\pi x/a)}{2\pi/a} \right]_0^a \right) \right]$$
$$\langle x \rangle = \frac{1}{a} \left[ \frac{a^2}{2} - \left( \left( \frac{a^2}{4\pi^2} + 0 \right) - \left( \frac{a^2}{4\pi^2} + 0 \right) \right) \right] = \frac{1}{a} \left[ \frac{a^2}{2} \right] = \frac{a}{2}$$

The average position is exactly at the center of the box.

$$\langle p \rangle = \int_0^a \psi_1^*\left(-i\hbar\frac{d}{dx}\right)\psi_1\,dx = -i\hbar\frac{2}{a} \int_0^a \sin\left(\frac{\pi x}{a}\right) \frac{d}{dx} \left[ \sin\left(\frac{\pi x}{a}\right) \right] dx$$

$$\langle p \rangle = -i\hbar\frac{2}{a} \left(\frac{\pi}{a}\right) \int_0^a \sin\left(\frac{\pi x}{a}\right) \cos\left(\frac{\pi x}{a}\right) dx$$

Using the **indefinite integral**:
$$\int \sin(kx) \cos(kx) \, dx = \frac{\sin^2(kx)}{2k}$$

Applying this with $k = \pi/a$:
$$\langle p \rangle = -\frac{2i\hbar\pi}{a^2} \left[ \frac{\sin^2(\pi x/a)}{2\pi/a} \right]_0^a = -\frac{2i\hbar\pi}{a^2} \frac{a}{2\pi} \left[ \sin^2(\pi) - \sin^2(0) \right]$$
$$\langle p \rangle = -\frac{i\hbar}{a} (0 - 0) = 0$$

The average momentum is zero because the particle is a standing wave (equal probability of moving left and right).

### Common Expectation Values

**Kinetic energy:**
$$\langle T \rangle = \int \Psi^*\left(-\frac{\hbar^2}{2m}\frac{d^2}{dx^2}\right)\Psi\,dx$$

For PIB state $\psi_n$: $\langle T \rangle = E_n = \frac{n^2 h^2}{8ma^2}$ (since $V = 0$ inside the box, all energy is kinetic).

### Variance and Uncertainty

$$\sigma_A^2 = \langle A^2 \rangle - \langle A \rangle^2$$

$$\Delta A = \sqrt{\langle A^2 \rangle - \langle A \rangle^2}$$

---

## 5. The Free Particle and Wave Packets

### Free Particle Solutions

For $V = 0$, the TISE gives:

$$\psi_k(x) = Ae^{ikx}, \qquad E = \frac{\hbar^2 k^2}{2m}$$

These are plane waves with definite momentum $p = \hbar k$ but completely delocalized (not normalizable over all space).

### Wave Packets

A **wave packet** — a superposition of many plane waves — can represent a localized particle:

$$\Psi(x,t) = \frac{1}{\sqrt{2\pi}}\int_{-\infty}^{\infty} \phi(k)\,e^{i(kx - \omega(k)t)}\,dk$$

where $\phi(k)$ determines the distribution of momenta.

### Gaussian Wave Packet

A Gaussian momentum distribution $\phi(k) \propto e^{-(k-k_0)^2/(2\sigma_k^2)}$ gives a spatial wave packet:

$$|\Psi(x,0)|^2 \propto e^{-(x-x_0)^2/(2\sigma_x^2)}$$

with $\sigma_x \cdot \sigma_k = 1/2$, or equivalently $\Delta x \cdot \Delta p = \hbar/2$ — the minimum uncertainty product.

### Group Velocity vs. Phase Velocity

- **Phase velocity**: $v_p = \omega/k$ (speed of individual wavefronts)
- **Group velocity**: $v_g = d\omega/dk$ (speed of the wave packet envelope = speed of the particle)

For a free particle: $\omega = \hbar k^2/(2m)$, so $v_g = \hbar k/m = p/m = v_{\text{classical}}$. The wave packet moves at the classical particle velocity.

> [!NOTE]
> **Concept Check 7.3**
> Explain why a "wave packet" is necessary to represent a localized particle, whereas a single plane wave $e^{ikx}$ describes a particle with a perfectly defined momentum but unknown position.

---

## Key Equations Summary

| Equation | Expression |
|----------|-----------|
| Born interpretation | $P(x,t)\,dx = \|\Psi(x,t)\|^2\,dx$ |
| Normalization | $\int_{-\infty}^{\infty}\|\Psi\|^2\,dx = 1$ |
| Expectation value | $\langle A\rangle = \int \Psi^*\hat{A}\Psi\,dx$ |
| Uncertainty | $\Delta A = \sqrt{\langle A^2\rangle - \langle A\rangle^2}$ |
| Group velocity | $v_g = d\omega/dk$ |
| Min. uncertainty | $\Delta x\cdot\Delta p = \hbar/2$ (Gaussian) |

## Recent Literature Spotlight

**"Logical Quantum Processor Based on Reconfigurable Atom Arrays"**
*D. Bluvstein, S. J. Evered, A. A. Geim, S. H. Li, et al.*, Nature, **2024**, 626, 58–65. [DOI](https://doi.org/10.1038/s41586-023-06927-3)

This landmark paper demonstrates a programmable quantum processor that encodes and manipulates logical qubits using reconfigurable atom arrays. Each atom is effectively a "particle in a trap" — confined in optical tweezers with quantized energy levels, just like our particle in a box. The Born interpretation governs the readout: the probability of measuring each qubit state is given by $|c_0|^2$ and $|c_1|^2$, directly applying the concepts from this lecture.

---

## Practice Problems

1. **Normalization.** Normalize the wavefunction $\psi(x) = A\,x\,e^{-\alpha x}$ for $x \geq 0$ (and $\psi = 0$ for $x < 0$), where $\alpha > 0$.

2. **PIB probability.** For a particle in the $n = 2$ state of a box of width $a$, calculate the probability of finding the particle between $x = 0$ and $x = a/4$.

3. **Acceptable wavefunctions.** Which of the following are acceptable wavefunctions on $(-\infty, \infty)$? Explain. (a) $\psi = e^{-|x|}$ (b) $\psi = \tan(x)$ (c) $\psi = (x^2 + 1)^{-1}$

---

*Next lecture: Postulates I–III — State Functions, Operators & Measurement*
