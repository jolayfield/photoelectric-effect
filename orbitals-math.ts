// Hydrogen-like atom wavefunction mathematics
// Constants
const a0 = 1.0; // Bohr radius (normalized for visualization)

/**
 * Factorial function
 */
function factorial(n: number): number {
    if (n <= 1) return 1;
    let res = 1;
    for (let i = 2; i <= n; i++) res *= i;
    return res;
}

/**
 * Associated Laguerre Polynomial L^a_n(x)
 * Source: https://en.wikipedia.org/wiki/Laguerre_polynomials#Associated_Laguerre_polynomials
 */
function associatedLaguerre(n: number, a: number, x: number): number {
    if (n === 0) return 1;
    if (n === 1) return 1 + a - x;

    // Recurrence relation: (n+1)L^a_{n+1}(x) = (2n+1+a-x)L^a_n(x) - (n+a)L^a_{n-1}(x)
    let l_prev = 1;
    let l_curr = 1 + a - x;

    for (let i = 1; i < n; i++) {
        const l_next = ((2 * i + 1 + a - x) * l_curr - (i + a) * l_prev) / (i + 1);
        l_prev = l_curr;
        l_curr = l_next;
    }

    return l_curr;
}

/**
 * Associated Legendre Polynomial P^m_l(x)
 */
function associatedLegendre(l: number, m: number, x: number): number {
    // Basic implementation for low l, m or general recurrence
    // abs(m) must be <= l
    m = Math.abs(m);

    // p_mm
    let pmm = 1.0;
    if (m > 0) {
        const somx2 = Math.sqrt((1.0 - x) * (1.0 + x));
        let fact = 1.0;
        for (let i = 1; i <= m; i++) {
            pmm *= -fact * somx2;
            fact += 2.0;
        }
    }

    if (l === m) return pmm;

    // p_mm+1
    let pmmp1 = x * (2.0 * m + 1.0) * pmm;

    if (l === m + 1) return pmmp1;

    // Recurrence for higher l
    let pll = 0.0;
    for (let ll = m + 2; ll <= l; ll++) {
        pll = (x * (2.0 * ll - 1.0) * pmmp1 - (ll + m - 1.0) * pmm) / (ll - m);
        pmm = pmmp1;
        pmmp1 = pll;
    }

    return pmmp1;
}

/**
 * Radial part of the Hydrogen-like wavefunction
 */
export function radialPart(n: number, l: number, Z: number, r: number): number {
    const rho = (2.0 * Z * r) / (n * a0);
    const normalization = Math.sqrt(
        Math.pow((2.0 * Z) / (n * a0), 3) *
        (factorial(n - l - 1) / (2.0 * n * Math.pow(factorial(n + l), 3)))
    );

    return normalization * Math.exp(-rho / 2.0) * Math.pow(rho, l) * associatedLaguerre(n - l - 1, 2 * l + 1, rho);
}

/**
 * Real Spherical Harmonic Y_lm(theta, phi)
 */
export function angularPart(l: number, m: number, theta: number, phi: number): number {
    const absM = Math.abs(m);
    const normalization = Math.sqrt(
        ((2 * l + 1) / (4 * Math.PI)) * (factorial(l - absM) / factorial(l + absM))
    );

    const legendre = associatedLegendre(l, absM, Math.cos(theta));
    const raw = normalization * legendre;

    if (m === 0) return raw;
    if (m > 0) return Math.sqrt(2) * raw * Math.cos(m * phi);
    return Math.sqrt(2) * raw * Math.sin(absM * phi);
}

/**
 * Probability density |psi|^2 at (r, theta, phi)
 */
export function getProbabilityDensity(n: number, l: number, m: number, Z: number, r: number, theta: number, phi: number): number {
    const psi = radialPart(n, l, Z, r) * angularPart(l, m, theta, phi);
    return psi * psi;
}

/**
 * Wavefunction value psi at (r, theta, phi)
 */
export function getWavefunction(n: number, l: number, m: number, Z: number, r: number, theta: number, phi: number): number {
    return radialPart(n, l, Z, r) * angularPart(l, m, theta, phi);
}
