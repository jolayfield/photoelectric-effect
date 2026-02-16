import './style.css';
import { ParticleBoxSimulation, ParticleBoxEnergyDiagram } from './particleBoxSimulation';

document.addEventListener('DOMContentLoaded', () => {
    const simCanvas = document.getElementById('pbox-canvas') as HTMLCanvasElement;
    const energyCanvas = document.getElementById('energy-level-canvas') as HTMLCanvasElement;

    if (!simCanvas || !energyCanvas) throw new Error("Canvas elements not found");

    const sim = new ParticleBoxSimulation(simCanvas);
    const energyDiagram = new ParticleBoxEnergyDiagram(energyCanvas);

    // Controls
    const nInput = document.getElementById('quantum-n') as HTMLInputElement;
    const nVal = document.getElementById('quantum-n-val') as HTMLElement;
    const displayMode = document.getElementById('display-mode') as HTMLSelectElement;

    // Superposition Controls
    const addStateBtn = document.getElementById('add-state') as HTMLButtonElement;
    const clearStatesBtn = document.getElementById('clear-states') as HTMLButtonElement;
    const statesListEl = document.getElementById('states-list') as HTMLElement;

    // Animation Controls
    const animateBtn = document.getElementById('toggle-animate') as HTMLButtonElement;
    const resetBtn = document.getElementById('reset-animate') as HTMLButtonElement;

    // Stats
    const energyValEl = document.getElementById('energy-val') as HTMLElement;
    const nodesValEl = document.getElementById('nodes-val') as HTMLElement;
    const wavelengthValEl = document.getElementById('wavelength-val') as HTMLElement;

    const updateUI = () => {
        const n = parseInt(nInput.value);
        sim.previewN = n;

        const combined = Array.from(new Set([...sim.pinnedStates, sim.previewN])).sort((a, b) => a - b);
        const isSuperposition = combined.length > 1;

        // Display mode
        sim.showProbability = displayMode.value === 'probability';

        // Animation state
        animateBtn.textContent = sim.isAnimating ? 'Pause' : 'Animate Wavefunction';

        // States list display
        statesListEl.textContent = combined.map(s => `n=${s}${sim.pinnedStates.includes(s) ? '' : ' (preview)'}`).join(', ');

        // Update displays
        nVal.textContent = `n = ${n}`;
        if (isSuperposition) {
            energyValEl.textContent = 'Superposition';
            nodesValEl.textContent = 'N/A';
            wavelengthValEl.textContent = 'N/A';
        } else {
            energyValEl.textContent = `${n * n} E₁`;
            nodesValEl.textContent = `${n - 1}`;
            if (n === 1) wavelengthValEl.textContent = '2L';
            else if (n === 2) wavelengthValEl.textContent = 'L';
            else wavelengthValEl.textContent = `2L/${n}`;
        }

        // Update energy diagram
        energyDiagram.activeStates = combined;
        energyDiagram.draw();
    };

    // Event listeners
    nInput.addEventListener('input', updateUI);

    displayMode.addEventListener('change', updateUI);

    addStateBtn.addEventListener('click', () => {
        const n = parseInt(nInput.value);
        if (!sim.pinnedStates.includes(n)) {
            sim.pinnedStates.push(n);
            sim.pinnedStates.sort((a, b) => a - b);
        }
        updateUI();
    });

    clearStatesBtn.addEventListener('click', () => {
        sim.pinnedStates = [];
        updateUI();
    });

    animateBtn.addEventListener('click', () => {
        sim.isAnimating = !sim.isAnimating;
        updateUI();
    });

    resetBtn.addEventListener('click', () => {
        sim.resetTime();
        sim.isAnimating = false;
        updateUI();
    });

    // Init
    updateUI();
});
