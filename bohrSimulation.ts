export class BohrSimulation {
    canvas: HTMLCanvasElement;
    ctx: CanvasRenderingContext2D;
    width: number;
    height: number;

    // State
    n: number = 3; // Start at n=3
    targetN: number | null = null;
    transitionProgress: number = 0;

    electronAngle: number = 0;
    electronSpeed: number = 0.02;

    // Photons: { x, y, angle, speed, color, life, type: 'emission'|'absorption' }
    photons: any[] = [];

    // Constants
    baseRadiusScale: number = 30;

    constructor(canvas: HTMLCanvasElement) {
        this.canvas = canvas;
        const ctx = canvas.getContext('2d');
        if (!ctx) throw new Error("2D context not found");
        this.ctx = ctx;

        this.width = canvas.width;
        this.height = canvas.height;

        this.handleResize();
        window.addEventListener('resize', () => this.handleResize());

        this.loop = this.loop.bind(this);
        requestAnimationFrame(this.loop);
    }

    handleResize() {
        if (this.canvas.parentElement) {
            this.canvas.width = this.canvas.parentElement.clientWidth;
            this.canvas.height = this.canvas.parentElement.clientHeight;
            this.width = this.canvas.width;
            this.height = this.canvas.height;
            this.baseRadiusScale = Math.min(this.width, this.height) / 20;
        }
    }

    getRadius(n: number): number {
        // Quantized radius r_n = n^2 * r1
        // Scaling to fit screen: r = scale * n^1.2 (for visualization, n^2 grows too fast)
        return this.baseRadiusScale * (n * 1.5);
    }

    transitionTo(finalN: number) {
        if (this.targetN !== null) return; // Busy
        if (finalN === this.n) return;

        // Emission (High -> Low)
        if (finalN < this.n) {
            this.emitPhoton(this.n, finalN);
        }

        // Absorption (Low -> High)
        if (finalN > this.n) {
            // Visualize incoming photon impacting?
            // For now, just animate the jump
        }

        this.targetN = finalN;
        this.transitionProgress = 0;
    }

    emitPhoton(ni: number, nf: number) {
        // Determine color based on transition
        // Lyman (to n=1): UV (Purple)
        // Balmer (to n=2): Visible
        // Paschen (to n=3): IR (Red)
        let color = '#FFFFFF';
        if (nf === 1) color = '#AA00FF'; // UV
        else if (nf === 2) {
            if (ni === 3) color = '#F44336'; // Red
            else if (ni === 4) color = '#03A9F4'; // Cyan
            else if (ni === 5) color = '#3F51B5'; // Blue
            else color = '#673AB7'; // Violet
        }
        else if (nf === 3) color = '#D32F2F'; // IR

        // Spawn at electron position
        const radius = this.getRadius(this.n);
        const ex = this.width / 2 + Math.cos(this.electronAngle) * radius;
        const ey = this.height / 2 + Math.sin(this.electronAngle) * radius;

        // Shoot outwards from center
        const angle = Math.atan2(ey - this.height / 2, ex - this.width / 2);

        this.photons.push({
            x: ex,
            y: ey,
            vx: Math.cos(angle) * 5,
            vy: Math.sin(angle) * 5,
            color: color,
            life: 100,
            waviness: 0
        });
    }

    update() {
        // Orbit
        // v ~ 1/n
        // angle += baseSpeed / currentN
        let currentEffectiveN = this.n;

        if (this.targetN !== null) {
            this.transitionProgress += 0.02; // speed of jump

            // Lerp N for drawing radius
            const t = this.easeInOutQuad(this.transitionProgress);
            currentEffectiveN = this.n + (this.targetN - this.n) * t;

            if (this.transitionProgress >= 1) {
                this.n = this.targetN;
                this.targetN = null;
                this.transitionProgress = 0;
            }
        }

        this.electronAngle += 0.05 / currentEffectiveN;

        // Photons
        for (let i = this.photons.length - 1; i >= 0; i--) {
            const p = this.photons[i];
            p.x += p.vx;
            p.y += p.vy;
            p.life--;
            p.waviness += 0.5;
            if (p.life <= 0) this.photons.splice(i, 1);
        }
    }

    draw() {
        this.ctx.clearRect(0, 0, this.width, this.height);

        const cx = this.width / 2;
        const cy = this.height / 2;

        // Draw Orbits
        for (let i = 1; i <= 6; i++) {
            const r = this.getRadius(i);
            this.ctx.beginPath();
            this.ctx.strokeStyle = 'rgba(0,0,0,0.1)';
            if (i === this.targetN || i === this.n) this.ctx.strokeStyle = 'rgba(0,0,0,0.3)';
            this.ctx.lineWidth = 1;
            this.ctx.arc(cx, cy, r, 0, Math.PI * 2);
            this.ctx.stroke();

            // Label
            this.ctx.fillStyle = '#aaa';
            this.ctx.font = '10px Arial';
            this.ctx.fillText(`n=${i}`, cx + 5, cy - r);
        }

        // Draw Nucleus
        this.ctx.beginPath();
        this.ctx.fillStyle = '#ff1744';
        this.ctx.arc(cx, cy, 6, 0, Math.PI * 2);
        this.ctx.fill();
        this.ctx.shadowColor = '#ff1744';
        this.ctx.shadowBlur = 10;


        // Draw Electron
        // Radius depends on transition state
        let r = this.getRadius(this.n);
        if (this.targetN !== null) {
            const t = this.easeInOutQuad(this.transitionProgress);
            const r1 = this.getRadius(this.n);
            const r2 = this.getRadius(this.targetN);
            r = r1 + (r2 - r1) * t;
        }

        const ex = cx + Math.cos(this.electronAngle) * r;
        const ey = cy + Math.sin(this.electronAngle) * r;

        this.ctx.beginPath();
        this.ctx.fillStyle = '#00e5ff'; // Cyan electron
        this.ctx.shadowColor = '#00e5ff';
        this.ctx.shadowBlur = 15;
        this.ctx.arc(ex, ey, 5, 0, Math.PI * 2);
        this.ctx.fill();
        this.ctx.shadowBlur = 0;

        // Draw Photons (Sine wave packet)
        this.photons.forEach(p => {
            this.ctx.beginPath();
            this.ctx.strokeStyle = p.color;
            this.ctx.lineWidth = 2;
            this.ctx.shadowColor = p.color;
            this.ctx.shadowBlur = 5;

            // Draw a small sine wave segment at (p.x, p.y)
            // rotated by velocity angle
            const angle = Math.atan2(p.vy, p.vx);
            const packetLen = 20;

            this.ctx.save();
            this.ctx.translate(p.x, p.y);
            this.ctx.rotate(angle);

            this.ctx.moveTo(-packetLen / 2, 0);
            for (let x = -packetLen / 2; x <= packetLen / 2; x += 2) {
                // simple sine
                const y = Math.sin((x + p.waviness * 5) * 0.5) * 5;
                this.ctx.lineTo(x, y);
            }

            this.ctx.stroke();
            this.ctx.restore();
            this.ctx.shadowBlur = 0;
        });
    }

    loop() {
        this.update();
        this.draw();
        requestAnimationFrame(this.loop);
    }

    easeInOutQuad(t: number): number {
        return t < .5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
    }
}
