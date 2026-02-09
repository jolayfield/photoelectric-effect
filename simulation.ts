
interface Photon {
    x: number;
    y: number;
    dy: number;
    color: string;
    energy: number; // Store energy at creation to prevent mismatches when slider changes
}

interface Electron {
    x: number;
    y: number;
    dx: number;
    dy: number;
    ke: number;
}

export class Simulation {
    // ... existing properties ...


    canvas: HTMLCanvasElement;
    ctx: CanvasRenderingContext2D;
    width: number;
    height: number;

    photons: Photon[];
    electrons: Electron[];

    // Physics State
    wavelength: number; // nm
    intensity: number; // %
    workFunction: number; // eV
    voltage: number; // External voltage (stopping potential)
    metalName: string = 'Cesium';

    // Constants
    hc_eV_nm: number = 1239.8; // eV*nm

    // Visuals
    metalY: number = 0;
    plateWidth: number = 0;
    lastTime: number = 0;

    constructor(canvas: HTMLCanvasElement) {
        this.canvas = canvas;
        const ctx = canvas.getContext('2d');
        if (!ctx) throw new Error("Could not get 2D context");
        this.ctx = ctx;

        this.width = canvas.width;
        this.height = canvas.height;

        this.photons = [];
        this.electrons = [];

        // Physics State Initial Values
        this.wavelength = 500; // nm
        this.intensity = 50;
        this.workFunction = 2.1;
        this.voltage = 0;

        this.handleResize();
        window.addEventListener('resize', () => this.handleResize());

        this.loop = this.loop.bind(this);
        requestAnimationFrame(this.loop);
    }

    handleResize(): void {
        const parent = this.canvas.parentElement;
        if (parent) {
            this.canvas.width = parent.clientWidth;
            this.canvas.height = parent.clientHeight;
            this.width = this.canvas.width;
            this.height = this.canvas.height;

            this.metalY = this.height * 0.8;
            this.plateWidth = this.width * 0.6;
        }
    }

    updateParams(wavelength: number, intensity: number, workFunc: number, metalName: string): void {
        this.wavelength = wavelength;
        this.intensity = intensity;
        this.workFunction = workFunc;
        this.metalName = metalName;
    }

    getPhotonEnergy(): number {
        return this.hc_eV_nm / this.wavelength; // eV
    }

    getFrequency(): number {
        // c = f * lambda -> f = c / lambda
        // c = 299792458 m/s
        // lambda in nm = 1e-9 m
        // result in THz (1e12 Hz)
        // f (THz) = (299792458 / (wl * 1e-9)) / 1e12
        // f (THz) = 299792.458 / wl
        return 299792.458 / this.wavelength;
    }

    wavelengthToColor(wl_nm: number): string {
        let r = 0, g = 0, b = 0;

        // Standard RGB approximate mapping
        if (wl_nm >= 380 && wl_nm < 440) {
            r = -(wl_nm - 440) / (440 - 380); g = 0; b = 1;
        } else if (wl_nm >= 440 && wl_nm < 490) {
            r = 0; g = (wl_nm - 440) / (490 - 440); b = 1;
        } else if (wl_nm >= 490 && wl_nm < 510) {
            r = 0; g = 1; b = -(wl_nm - 510) / (510 - 490);
        } else if (wl_nm >= 510 && wl_nm < 580) {
            r = (wl_nm - 510) / (580 - 510); g = 1; b = 0;
        } else if (wl_nm >= 580 && wl_nm < 645) {
            r = 1; g = -(wl_nm - 645) / (645 - 580); b = 0;
        } else if (wl_nm >= 645 && wl_nm <= 780) {
            r = 1; g = 0; b = 0;
        }

        // Visibility falloff (optional, but good for edges)
        // Not implementing full falloff for now, just main spectrum

        // UV / IR Representation
        if (wl_nm < 380) return 'rgba(120, 0, 255, 0.5)'; // UV
        if (wl_nm > 780) return 'rgba(200, 0, 0, 0.3)'; // IR

        return `rgba(${Math.round(r * 255)}, ${Math.round(g * 255)}, ${Math.round(b * 255)}, 0.8)`;
    }

    spawnPhoton(): void {
        const spawnRate = this.intensity / 20;
        if (Math.random() < 0.1 * spawnRate) {
            this.photons.push({
                x: Math.random() * this.plateWidth + (this.width - this.plateWidth) / 2,
                y: 0,
                dy: 5 + Math.random() * 2,
                color: this.wavelengthToColor(this.wavelength),
                energy: this.hc_eV_nm / this.wavelength
            });
        }
    }


    update(dtFactor: number): void {
        this.spawnPhoton();

        // Update Photons
        for (let i = this.photons.length - 1; i >= 0; i--) {
            let p = this.photons[i];
            p.y += p.dy * dtFactor;

            // Hit metal
            if (p.y >= this.metalY) {
                // Efficient removal: Swap with last and pop
                this.photons[i] = this.photons[this.photons.length - 1];
                this.photons.pop();

                // Trigger logic
                this.tryEmitElectron(p.x, p.energy);
            }
        }

        // Update Electrons
        for (let i = this.electrons.length - 1; i >= 0; i--) {
            let e = this.electrons[i];
            e.y += e.dy * dtFactor;
            e.x += e.dx * dtFactor;

            // Remove off screen
            if (e.y < 0 || e.x < 0 || e.x > this.width) {
                this.electrons[i] = this.electrons[this.electrons.length - 1];
                this.electrons.pop();
            }
        }
    }

    tryEmitElectron(x: number, energy: number): void {
        if (energy > this.workFunction) {
            const ke = energy - this.workFunction;
            // Convert KE to speed
            const speed = Math.sqrt(ke) * 3;

            this.electrons.push({
                x: x,
                y: this.metalY - 5,
                dx: (Math.random() - 0.5) * 2,
                dy: -speed,
                ke: ke
            });
        }
    }

    draw(): void {
        this.ctx.clearRect(0, 0, this.width, this.height);

        // Draw Metal Plate
        this.ctx.fillStyle = '#555';
        const plateX = (this.width - this.plateWidth) / 2;
        this.ctx.fillRect(plateX, this.metalY, this.plateWidth, 20);

        // Draw Metal Glow/Label
        this.ctx.fillStyle = '#aaa';
        this.ctx.font = '14px Merriweather';
        this.ctx.textAlign = 'center';
        this.ctx.fillText(`${this.metalName} (${this.workFunction} eV)`, this.width / 2, this.metalY + 40);

        // Draw Light Source
        const mainColor = this.wavelengthToColor(this.wavelength);
        this.ctx.fillStyle = mainColor;
        this.ctx.shadowBlur = 20;
        this.ctx.shadowColor = mainColor;
        this.ctx.fillRect(0, 0, this.width, 5);
        this.ctx.shadowBlur = 0; // Reset

        // Draw Photons (Batched by Color)
        // Grouping photons by color to minimize state changes
        const photonsByColor: { [color: string]: Photon[] } = {};
        for (const p of this.photons) {
            if (!photonsByColor[p.color]) photonsByColor[p.color] = [];
            photonsByColor[p.color].push(p);
        }

        for (const color in photonsByColor) {
            this.ctx.fillStyle = color;
            this.ctx.shadowColor = color;
            this.ctx.shadowBlur = 10;

            this.ctx.beginPath();
            for (const p of photonsByColor[color]) {
                this.ctx.moveTo(p.x + 6, p.y);
                this.ctx.arc(p.x, p.y, 6, 0, Math.PI * 2);
            }
            this.ctx.fill();
        }
        this.ctx.shadowBlur = 0; // Reset

        // Draw Electrons (Batched)
        if (this.electrons.length > 0) {
            this.ctx.fillStyle = '#00f2ff';
            this.ctx.strokeStyle = '#00f2ff'; // For stroke if needed
            this.ctx.shadowColor = '#00f2ff';
            this.ctx.shadowBlur = 10;

            this.ctx.beginPath();
            for (const e of this.electrons) {
                this.ctx.moveTo(e.x + 4, e.y);
                this.ctx.arc(e.x, e.y, 4, 0, Math.PI * 2);
            }
            this.ctx.fill();
            // Removed stroke() to save perf, glow is enough or add back if needed
            this.ctx.shadowBlur = 0;
        }
    }

    loop(timestamp: number): void {
        if (!this.lastTime) this.lastTime = timestamp;
        const dt = timestamp - this.lastTime;
        this.lastTime = timestamp;

        // Cap dt to prevent huge jumps if tab was backgrounded
        const safeDt = Math.min(dt, 100);
        const targetFrameTime = 16.67; // 60fps
        const dtFactor = safeDt / targetFrameTime;

        this.update(dtFactor);
        this.draw();
        requestAnimationFrame(this.loop);
    }

    getLastKE(): number {
        const energy = this.getPhotonEnergy();
        return Math.max(0, energy - this.workFunction);
    }

    getCurrent(): number {
        return this.electrons.length * 0.1;
    }
}
