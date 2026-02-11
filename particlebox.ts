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
    const superToggle = document.getElementById('superposition-toggle') as HTMLInputElement;
    const superN2Group = document.getElementById('super-n2-group') as HTMLElement;
    const superN2Input = document.getElementById('super-n2') as HTMLInputElement;
    const superN2Val = document.getElementById('super-n2-val') as HTMLElement;

    // Stats
    const energyValEl = document.getElementById('energy-val') as HTMLElement;
    const nodesValEl = document.getElementById('nodes-val') as HTMLElement;
    const wavelengthValEl = document.getElementById('wavelength-val') as HTMLElement;

    const updateUI = () => {
        const n = parseInt(nInput.value);
        sim.n = n;

        // Display mode
        sim.showProbability = displayMode.value === 'probability';

        // Superposition
        sim.superpositionMode = superToggle.checked;
        superN2Group.style.display = superToggle.checked ? 'flex' : 'none';

        if (superToggle.checked) {
            const n2 = parseInt(superN2Input.value);
            sim.superN2 = n2;
            superN2Val.textContent = `n₂ = ${n2}`;
        }

        // Update displays
        nVal.textContent = `n = ${n}`;
        energyValEl.textContent = `${n * n} E₁`;
        nodesValEl.textContent = `${n - 1}`;

        // λ = 2L/n
        if (n === 1) wavelengthValEl.textContent = '2L';
        else if (n === 2) wavelengthValEl.textContent = 'L';
        else wavelengthValEl.textContent = `2L/${n}`;

        // Update energy diagram
        energyDiagram.currentN = n;
        energyDiagram.draw();
    };

    // Event listeners
    nInput.addEventListener('input', updateUI);
    displayMode.addEventListener('change', updateUI);
    superToggle.addEventListener('change', updateUI);
    superN2Input.addEventListener('input', updateUI);

    // Init
    updateUI();
});
