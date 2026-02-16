# Lecture 24 — Vibration-Rotation Spectra & Anharmonicity

**Reading:** Engel 4th ed., Chapter 8 (Sections 8.6–8.8)

## Learning Objectives

- Explain the P, Q, and R branch structure of vibration-rotation spectra
- Derive the combined selection rules for simultaneous vibrational-rotational transitions
- Extract $B$, $\tilde{\nu}_0$, and bond length from vibration-rotation band analysis
- Account for anharmonicity and its spectroscopic consequences
- Calculate dissociation energies from spectroscopic data using the Birge-Sponer extrapolation

---

## 1. Vibration-Rotation Transitions

In the gas phase, a vibrational transition is always accompanied by a simultaneous rotational transition. The combined selection rules are:

$$\Delta v = \pm 1 \quad \text{and} \quad \Delta J = \pm 1$$

(For molecules with no orbital angular momentum about the bond axis. If $\Lambda \neq 0$, then $\Delta J = 0$ is also allowed.)

### Energy of Vibration-Rotation Levels

$$E_{v,J} = \tilde{\nu}_0\left(v + \frac{1}{2}\right) + BJ(J+1) \quad \text{(in cm}^{-1}\text{)}$$

(Neglecting anharmonicity, centrifugal distortion, and vibration-rotation coupling.)

---

## 2. The P, R, and Q Branches

### R Branch ($\Delta J = +1$): $J \to J+1$

$$\tilde{\nu}_R(J) = \tilde{\nu}_0 + 2B(J+1), \quad J = 0, 1, 2, \ldots$$

Lines appear at **higher frequency** than $\tilde{\nu}_0$.

### P Branch ($\Delta J = -1$): $J \to J-1$

$$\tilde{\nu}_P(J) = \tilde{\nu}_0 - 2BJ, \quad J = 1, 2, 3, \ldots$$

Lines appear at **lower frequency** than $\tilde{\nu}_0$.

### Q Branch ($\Delta J = 0$): Allowed only for certain molecules

$$\tilde{\nu}_Q = \tilde{\nu}_0$$

For diatomic molecules in $^1\Sigma$ states (most common), $\Delta J = 0$ is **forbidden**. There is **no Q branch**, and a gap of $4B$ appears at $\tilde{\nu}_0$ between the P and R branches.

> [!NOTE]
> **Concept Check 24.1**
> In a vibration-rotation spectrum of a typical diatomic molecule, why is there a "gap" where the fundamental vibrational frequency $\tilde{\nu}_0$ should be? What selection rule is responsible for this?

### Schematic of the Band

```
  P branch          gap          R branch
  ←————————         4B          ————————→
  ...P(4) P(3) P(2) P(1)  |  R(0) R(1) R(2) R(3)...
                          ν̃₀
```

Each line is separated by approximately $2B$ from its neighbor.

---

## 3. Determining Molecular Parameters from the Spectrum

### Method: Combination Differences

From the R and P branch line positions:

$$\tilde{\nu}_R(J) - \tilde{\nu}_P(J) = 4B\left(J + \frac{1}{2}\right)$$

$$\tilde{\nu}_R(J) + \tilde{\nu}_P(J+1) = 2\tilde{\nu}_0$$

These equations allow extraction of $B$ and $\tilde{\nu}_0$ independently.

### Vibration-Rotation Coupling

In reality, $B$ differs slightly between $v = 0$ and $v = 1$ because the average bond length changes:

$$B_v = B_e - \alpha_e\left(v + \frac{1}{2}\right)$$

where $\alpha_e$ is the **vibration-rotation coupling constant** (small, positive — typically ~1% of $B_e$).

This causes the R branch lines to **converge** and P branch lines to **diverge** at high $J$:

$$\tilde{\nu}_R(J) = \tilde{\nu}_0 + (B_0 + B_1)(J+1) + (B_1 - B_0)(J+1)^2$$

$$\tilde{\nu}_P(J) = \tilde{\nu}_0 - (B_0 + B_1)J + (B_1 - B_0)J^2$$

---

## 4. Anharmonicity in Spectra

### Anharmonic Energy Levels

$$G(v) = \tilde{\nu}_e\left(v + \frac{1}{2}\right) - \tilde{\nu}_e x_e\left(v + \frac{1}{2}\right)^2 + \ldots$$

### Observed Frequencies

**Fundamental** ($v = 0 \to 1$):
$$\tilde{\nu}_{0\to1} = \tilde{\nu}_e(1 - 2x_e)$$

**First overtone** ($v = 0 \to 2$):
$$\tilde{\nu}_{0\to2} = 2\tilde{\nu}_e(1 - 3x_e)$$

**Second overtone** ($v = 0 \to 3$):
$$\tilde{\nu}_{0\to3} = 3\tilde{\nu}_e(1 - 4x_e)$$

### Hot Bands

Transitions from $v = 1$ (thermally populated at high $T$):

$$\tilde{\nu}_{1\to2} = \tilde{\nu}_e(1 - 4x_e)$$

Hot bands appear at slightly lower frequency than the fundamental.

---

## 5. Dissociation Energy: Birge-Sponer Extrapolation

The spacing between adjacent vibrational levels decreases linearly (for Morse potential):

$$\Delta G_{v+1/2} = G(v+1) - G(v) = \tilde{\nu}_e - 2\tilde{\nu}_e x_e(v+1)$$

The dissociation energy is the total of all level spacings:

$$\boxed{D_0 = \sum_{v=0}^{v_{\max}} \Delta G_{v+1/2} \approx \frac{\tilde{\nu}_e^2}{4\tilde{\nu}_e x_e} - \frac{1}{2}\tilde{\nu}_e(1-x_e)}$$

Graphically: plot $\Delta G$ vs. $v$ and sum the area under the curve (until $\Delta G = 0$).

### Worked Example: HCl

$\tilde{\nu}_e = 2991$ cm⁻¹, $x_e = 0.0174$

$$D_e = \frac{\tilde{\nu}_e}{4x_e} = \frac{2991}{4(0.0174)} = 43{,}000\text{ cm}^{-1} = 5.33\text{ eV}$$

$$D_0 = D_e - \frac{1}{2}\tilde{\nu}_e(1-x_e) = 43{,}000 - 1470 = 41{,}500\text{ cm}^{-1} = 5.15\text{ eV}$$

Experimental $D_0$ = 4.43 eV — the Morse model overestimates somewhat, but captures the right order.

> [!NOTE]
> **Concept Check 24.2**
> What happens to the spacing between vibrational energy levels near the dissociation limit of a molecule? How does this differ from the prediction of the harmonic oscillator model?

---

## 6. Summary of Spectroscopic Parameters

All molecular constants can be extracted from high-resolution spectra:

| Parameter | Determined from |
|-----------|----------------|
| $\tilde{\nu}_e$ | Fundamental + overtone frequencies |
| $x_e$ | Anharmonicity from overtones |
| $B_e$ | Rotational structure (line spacing) |
| $\alpha_e$ | Difference in $B_0$ and $B_1$ |
| $D$ | Centrifugal distortion from high-$J$ lines |
| $r_e$ | From $B_e$ |
| $k$ | From $\tilde{\nu}_e$ and $\mu$ |
| $D_0$ | Birge-Sponer extrapolation |

---

## Key Equations Summary

| Equation | Expression |
|----------|-----------|
| R branch | $\tilde{\nu}_R = \tilde{\nu}_0 + 2B(J+1)$ |
| P branch | $\tilde{\nu}_P = \tilde{\nu}_0 - 2BJ$ |
| Band gap | $4B$ |
| Combination differences | $\tilde{\nu}_R(J) - \tilde{\nu}_P(J) = 4B(J+\frac{1}{2})$ |
| Anharmonic fundamental | $\tilde{\nu}_{0\to1} = \tilde{\nu}_e(1-2x_e)$ |
| Birge-Sponer | $D_e \approx \tilde{\nu}_e/(4x_e)$ |

## Recent Literature Spotlight

**"Rovibrational Spectroscopy of the CH⁺-He Complex in a 4 K Cryogenic Ion Trap"**
*T. Salomon, J. L. Doménech, P. C. Schmid, E. A. Michael, S. Schlemmer, O. Asvany*, Journal of Molecular Spectroscopy, **2021**, 377, 111421. [DOI](https://doi.org/10.1016/j.jms.2021.111421)

This experiment used a cryogenic 22-pole ion trap at 4 K to record the high-resolution rovibrational spectrum of the CH⁺–He complex. The observed transitions between quantized rovibrational states — with rotational fine structure superimposed on vibrational bands — provide a textbook example of the vibration-rotation coupling taught in this lecture.

---

## Practice Problems

1. **Branch analysis.** The following lines are observed in the vibration-rotation spectrum of HBr (in cm⁻¹): P(1) = 2623.2, P(2) = 2606.8, R(0) = 2655.6, R(1) = 2671.7. Determine $\tilde{\nu}_0$ and $B$.

2. **Overtone analysis.** For HF, the fundamental is at 3961.6 cm⁻¹ and the first overtone at 7750.8 cm⁻¹. Calculate $\tilde{\nu}_e$ and $x_e$.

3. **Dissociation energy.** Using your $\tilde{\nu}_e$ and $x_e$ for HF from Problem 2, calculate $D_0$ via Birge-Sponer extrapolation. Compare to the experimental value of 5.87 eV.

---

*Next week: The Hydrogen Atom*
