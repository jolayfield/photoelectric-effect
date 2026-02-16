# Lecture 35 — Homonuclear Diatomic Molecules & MO Diagrams

**Reading:** Engel 4th ed., Chapter 12 (Sections 12.4–12.6)

## Learning Objectives

- Construct MO diagrams for homonuclear diatomics from Li₂ to Ne₂
- Define and calculate bond order
- Predict magnetic properties from MO configurations
- Explain the $s$-$p$ mixing effect and its impact on orbital ordering
- Correlate MO theory with experimental data (bond lengths, dissociation energies, magnetism)

---

## 1. Building MO Diagrams: From AOs to MOs

### Symmetry Requirement

Only AOs of the **same symmetry** (same irreducible representation under $D_{\infty h}$) can combine to form MOs.

| AO pair | MO type | MO symmetry |
|---------|---------|-------------|
| $s + s$ | $\sigma$ | $\sigma_g$, $\sigma_u^*$ |
| $p_z + p_z$ | $\sigma$ | $\sigma_g$, $\sigma_u^*$ |
| $p_x + p_x$ | $\pi$ | $\pi_u$, $\pi_g^*$ |
| $p_y + p_y$ | $\pi$ | $\pi_u$, $\pi_g^*$ |

Note: $p_x$ cannot combine with $s$ or $p_z$ (different symmetry).

> [!NOTE]
> **Concept Check 35.1**
> Why is it that only atomic orbitals of the same symmetry can combine to form molecular orbitals? What would happen to the overlap integral $S$ if you tried to combine a $1s$ orbital with a $2p_y$ orbital along the $z$-axis?

### Bonding and Antibonding

| Type | Node between nuclei? | Energy | Label |
|------|---------------------|--------|-------|
| $\sigma$ bonding | No | Lower | $\sigma$ |
| $\sigma$ antibonding | Yes (on axis) | Higher | $\sigma^*$ |
| $\pi$ bonding | No (one nodal plane containing axis) | Lower | $\pi$ |
| $\pi$ antibonding | Yes (additional node) | Higher | $\pi^*$ |

---

## 2. MO Ordering

### Standard Ordering (O₂, F₂, Ne₂)

$$1\sigma_g < 1\sigma_u^* < 2\sigma_g < 2\sigma_u^* < 1\pi_u < 3\sigma_g < 1\pi_g^* < 3\sigma_u^*$$

### Modified Ordering (Li₂ through N₂) — with $s$-$p$ Mixing

For lighter atoms, the $2s$ and $2p_z$ orbitals are close in energy. Their MOs mix (**$s$-$p$ hybridization** at the MO level), pushing $3\sigma_g$ above $1\pi_u$:

$$1\sigma_g < 1\sigma_u^* < 2\sigma_g < 2\sigma_u^* < 3\sigma_g < 1\pi_u < 1\pi_g^* < 3\sigma_u^*$$

Wait — flipped: the $1\pi_u$ drops below $3\sigma_g$:

$$\ldots < 2\sigma_u^* < 1\pi_u < 3\sigma_g < 1\pi_g^* < \ldots$$

The crossover occurs between N₂ and O₂.

> [!NOTE]
> **Concept Check 35.2**
> $s$-$p$ mixing occurs when $s$ and $p_z$ orbitals are close in energy. How does this mixing affect the relative energy levels of the $3\sigma_g$ and $1\pi_u$ orbitals in nitrogen ($N_2$)?

---

## 3. Bond Order

$$\boxed{\text{Bond Order} = \frac{1}{2}(n_{\text{bonding}} - n_{\text{antibonding}})}$$

| Molecule | Bonding $e^-$ | Antibonding $e^-$ | Bond Order |
|----------|--------------|-------------------|------------|
| H₂ | 2 | 0 | 1 |
| He₂ | 2 | 2 | 0 (doesn't exist) |
| Li₂ | 2 | 0 | 1 (counting valence only) |
| N₂ | 10 | 4 | 3 |
| O₂ | 10 | 6 | 2 |
| F₂ | 10 | 8 | 1 |
| Ne₂ | 10 | 10 | 0 |

---

## 4. Electronic Configurations of Second-Row Diatomics

| Molecule | $e^-$ | Configuration (valence) | Bond Order | $D_e$ (eV) | $R_e$ (pm) | Magnetic |
|----------|------|----------------------|-----------|----------|----------|---------|
| Li₂ | 6 | $(2\sigma_g)^2$ | 1 | 1.07 | 267 | Diamagnetic |
| Be₂ | 8 | $(2\sigma_g)^2(2\sigma_u^*)^2$ | 0 | ~0.1 | 245 | — |
| B₂ | 10 | $(1\pi_u)^2$ | 1 | 3.0 | 159 | **Paramagnetic** |
| C₂ | 12 | $(1\pi_u)^4$ | 2 | 6.3 | 124 | Diamagnetic |
| N₂ | 14 | $(1\pi_u)^4(3\sigma_g)^2$ | 3 | 9.8 | 110 | Diamagnetic |
| O₂ | 16 | $(3\sigma_g)^2(1\pi_u)^4(1\pi_g^*)^2$ | 2 | 5.2 | 121 | **Paramagnetic** |
| F₂ | 18 | $(3\sigma_g)^2(1\pi_u)^4(1\pi_g^*)^4$ | 1 | 1.6 | 142 | Diamagnetic |

### Key Observations

1. **O₂ is paramagnetic** — MO theory correctly predicts two unpaired electrons in $\pi_g^*$ (Hund's rule). Lewis structures and VB theory fail here!
2. **B₂ is paramagnetic** — explained by the modified ordering with $1\pi_u$ below $3\sigma_g$
3. Higher bond order → shorter bond → stronger bond (general trend)

---

## 5. Photoelectron Spectroscopy (PES)

PES confirms the MO ordering by measuring orbital ionization energies:

$$h\nu = IE + KE_{\text{electron}}$$

The **photoelectron spectrum** shows peaks corresponding to electrons ejected from each occupied MO, with energies matching Koopman's theorem ($IE \approx -\epsilon_i$).

### N₂ PES Evidence

The PES of N₂ shows that the $3\sigma_g$ orbital is less tightly bound than $1\pi_u$, confirming the modified ordering with $s$-$p$ mixing.

---

## Key Equations Summary

| Equation | Expression |
|----------|-----------|
| Bond order | $\frac{1}{2}(n_b - n_{ab})$ |
| LCAO-MO | $\psi = c_A\phi_A + c_B\phi_B$ |
| Symmetry rule | Only AOs of same $\Gamma$ combine |
| PES | $h\nu = IE + KE$ |

## Recent Literature Spotlight

**"Singlet Oxygen: Applications in Biosciences and Nanosciences"**
*P. R. Ogilby*, Chemical Reviews, **2010**, 110, 3790–3837. [DOI](https://doi.org/10.1021/acs.chemrev.8b00726)

Molecular oxygen's ground state is a triplet ($^3\Sigma_g^-$), making it one of the few common molecules with unpaired electrons. This review explains how the excited singlet states ($^1\Delta_g$ and $^1\Sigma_g^+$) of O₂ are generated, detected, and harnessed in photodynamic therapy and materials science. The singlet-triplet distinction, rooted in the same electronic term symbols taught in this lecture, determines O₂'s unique reactivity.

---

## Practice Problems

1. **MO diagram.** Draw the complete MO diagram for O₂. Show all electrons, label each MO with its symmetry label, and calculate the bond order. Explain why O₂ is paramagnetic.

2. **Ions.** Predict the bond order, number of unpaired electrons, and magnetic behavior of (a) O₂⁺, (b) O₂⁻, (c) O₂²⁻. Which has the strongest bond?

3. **$s$-$p$ mixing.** Explain why the MO ordering changes between N₂ and O₂. What experimental evidence (PES) supports the modified ordering for N₂?

---

*Next lecture: Heteronuclear Diatomics & Valence Bond Theory*
