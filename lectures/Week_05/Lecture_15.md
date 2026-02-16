# Lecture 15 — Quantum Entanglement, Bell's Theorem & the EPR Paradox

**Reading:** Engel 4th ed., Chapter 6 (Sections 6.4–6.6)

## Learning Objectives

- Describe entangled quantum states and distinguish them from product states
- Explain the EPR paradox and Einstein's objections to quantum mechanics
- State Bell's inequality and explain how experiment resolves the EPR debate
- Discuss the implications of entanglement for quantum information
- Appreciate the "spookiness" while avoiding common misconceptions

---

## 1. Entangled States

### Product States vs. Entangled States

Consider two particles, each of which can be spin-up ($|\uparrow\rangle$) or spin-down ($|\downarrow\rangle$).

A **product state** (separable):

$$|\Psi\rangle = |\uparrow\rangle_A \otimes |\downarrow\rangle_B$$

Each particle has a definite state independent of the other.

An **entangled state**:

$$|\Psi\rangle = \frac{1}{\sqrt{2}}\left(|\uparrow\rangle_A|\downarrow\rangle_B - |\downarrow\rangle_A|\uparrow\rangle_B\right)$$

This is the **singlet state**. Neither particle has a definite spin on its own — only the *pair* has a definite state ($S_{\text{total}} = 0$).

### Key Properties of Entangled States

1. **Correlation**: Measuring particle A instantly determines particle B's outcome
2. **No individual description**: Neither particle can be described by its own wavefunction
3. **Cannot be factored**: $|\Psi_{AB}\rangle \neq |\psi_A\rangle \otimes |\phi_B\rangle$ for any choice of $|\psi_A\rangle$ and $|\phi_B\rangle$

> [!NOTE]
> **Concept Check 15.1**
> Explain why the state $|\Psi\rangle = \frac{1}{\sqrt{2}} (|\uparrow\rangle_A |\uparrow\rangle_B + |\downarrow\rangle_A |\downarrow\rangle_B)$ is considered entangled, whereas the state $|\Phi\rangle = |\uparrow\rangle_A |\uparrow\rangle_B$ is not.

---

## 2. The EPR Paradox (1935)

### Einstein, Podolsky, and Rosen's Argument

Einstein, Podolsky, and Rosen (EPR) considered two particles prepared in an entangled state and then separated by a large distance.

**Their reasoning:**

1. Measure the position of particle A → learn position of particle B (without disturbing B)
2. Alternatively, measure momentum of A → learn momentum of B (without disturbing B)
3. Therefore, B must have *both* definite position and definite momentum

**Their conclusion:** Since QM says position and momentum can't both be definite (uncertainty principle), quantum mechanics must be **incomplete** — there must be "hidden variables" that determine outcomes in advance.

### EPR's Definition of Reality

> "If, without in any way disturbing a system, we can predict with certainty the value of a physical quantity, then there exists an element of physical reality corresponding to this physical quantity."

### Bohr's Response

Niels Bohr argued that the measurement on particle A *does* affect what can be meaningfully said about particle B, because the experimental arrangement defines what is observable. The two particles form a single quantum system regardless of spatial separation.

---

## 3. Bell's Theorem (1964)

### What Bell Proved

John Bell showed that any **local hidden variable theory** makes specific quantitative predictions (Bell's inequality) that differ from the predictions of quantum mechanics.

### Bell's Inequality (Simplified CHSH Form)

For measurements along different directions $a$, $a'$, $b$, $b'$:

$$\boxed{|S| = |E(a,b) - E(a,b') + E(a',b) + E(a',b')| \leq 2}$$

where $E(a,b)$ is the correlation function between measurements.

- **Local hidden variables predict:** $|S| \leq 2$
- **Quantum mechanics predicts:** $|S|$ can reach $2\sqrt{2} \approx 2.83$

### Experimental Tests

Alain Aspect (1982) and many subsequent experiments have definitively shown:

$$|S|_{\text{experiment}} > 2$$

in agreement with quantum mechanics. Local hidden variable theories are **ruled out**.

> [!NOTE]
> **Concept Check 15.2**
> Does the violation of Bell's inequality imply that information can be sent faster than light? Why or why not? What is the role of "randomness" in the individual measurement outcomes?

Aspect, Clauser, and Zeilinger received the 2022 Nobel Prize in Physics for these experiments.

### What This Means

- **Quantum mechanics is correct**: entangled particles exhibit correlations stronger than any classical theory allows
- **Locality is violated**: measurements on distant particles are correlated in ways that cannot be explained by information carried at the speed of light
- **BUT**: no faster-than-light signaling is possible — the individual measurement outcomes are random; only the *correlations* are non-classical

---

## 4. Entanglement Is Not Communication

A common misconception: "measuring particle A instantly changes particle B, allowing faster-than-light communication."

**Why this is wrong:**
- Each observer sees completely random outcomes (50/50 up/down)
- The correlation is only evident when comparing both measurement records
- Comparing records requires classical communication (at most light speed)
- **No-communication theorem**: entanglement alone cannot transmit information

---

## 5. Applications of Entanglement

### Quantum Computing

Entanglement enables quantum computers to perform certain calculations exponentially faster than classical computers. **Quantum bits (qubits)** can be entangled to create massive superpositions.

### Quantum Cryptography (QKD)

The BB84 and E91 protocols use entanglement to create provably secure encryption keys. Any eavesdropping disturbs the entanglement and is detectable.

### Quantum Teleportation

The quantum state of a particle can be transferred to a distant particle using entanglement + classical communication. The original state is destroyed in the process (no-cloning theorem). Demonstrated experimentally over distances > 1000 km (via satellite).

---

## 6. Superposition, Measurement, and Decoherence

### The Measurement Problem

When does the wavefunction "collapse"? The Schrödinger equation is deterministic and linear — it doesn't describe collapse. This remains one of the deepest open questions in physics.

### Schrödinger's Cat

Schrödinger's famous thought experiment highlights the apparent absurdity: a cat entangled with a radioactive atom would be in a superposition of alive and dead. We never observe such macroscopic superpositions.

### Decoherence

The modern resolution (partial): interactions with the environment destroy quantum coherence extremely rapidly for macroscopic objects. The system doesn't "collapse" but becomes **entangled with its environment**, making interference effects unobservable in practice.

Decoherence time estimates:
- Electron in vacuum: years
- Large molecule in air: $\sim 10^{-17}$ s
- Dust grain in air: $\sim 10^{-31}$ s

---

## Key Equations Summary

| Concept | Expression |
|---------|-----------|
| Singlet state | $\|\Psi\rangle = \frac{1}{\sqrt{2}}(\|\uparrow\downarrow\rangle - \|\downarrow\uparrow\rangle)$ |
| Triplet states | $\|\uparrow\uparrow\rangle,\; \frac{1}{\sqrt{2}}(\|\uparrow\downarrow\rangle+\|\downarrow\uparrow\rangle),\; \|\downarrow\downarrow\rangle$ |
| Bell's inequality | $\|S\| \leq 2$ (classical bound) |
| QM prediction | $\|S\| \leq 2\sqrt{2}$ |

## Recent Literature Spotlight

**"Quantum Thermalization Through Entanglement in an Isolated Many-Body System"**
*A. M. Kaufman, M. E. Tai, A. Lukin, M. Rispoli, R. Schittko, P. M. Preiss, M. Greiner*, Science, **2016**, 353, 794–800. [DOI](https://doi.org/10.1126/science.aaf6220)

Using a quantum gas microscope to image individual atoms in a Hubbard-model optical lattice, the authors tracked how entanglement grows and leads to quantum thermalization in an isolated many-body system. The experiment provides a direct measurement of entanglement entropy — demonstrating that quantum statistical mechanics emerges naturally from the deterministic Schrödinger equation when subsystems become entangled.

---

## Practice Problems

1. **Entanglement test.** Determine whether the following two-particle states are entangled or separable: (a) $\frac{1}{\sqrt{2}}(|\uparrow\uparrow\rangle + |\downarrow\downarrow\rangle)$ (b) $\frac{1}{2}(|\uparrow\rangle + |\downarrow\rangle)(|\uparrow\rangle - |\downarrow\rangle)$

2. **EPR correlations.** Two electrons are prepared in the singlet state. Alice measures $S_z$ on electron 1 and gets $+\hbar/2$. What are the possible outcomes and probabilities for Bob measuring (a) $S_z$ on electron 2? (b) $S_x$ on electron 2?

3. **Bell's inequality.** Explain in your own words why the violation of Bell's inequality rules out local hidden variable theories but does not allow faster-than-light communication.

---

*Next week: Molecular Symmetry & Introduction to Group Theory*
