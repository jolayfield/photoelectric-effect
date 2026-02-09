export class EnergyDiagram {
    canvas: HTMLCanvasElement;
    ctx: CanvasRenderingContext2D;
    width: number;
    height: number;

    currentN: number = 3;
    targetN: number | null = null;

    // Y-positions for levels n=1 to n=6
    // E_n = -13.6 / n^2
    // We want to map -13.6 (n=1) to bottom, 0 (n=inf) to top
    // Scale: y = height * (1 - (E_n - E_1) / |E_1|) -> maybe too compressed?
    // Let's just map 1/n^2 visually

    levels: number[] = [1, 2, 3, 4, 5, 6];

    constructor(canvas: HTMLCanvasElement) {
        this.canvas = canvas;
        const ctx = canvas.getContext('2d');
        if (!ctx) throw new Error("2D context not found");
        this.ctx = ctx;

        this.width = canvas.width;
        this.height = canvas.height;

        // Handle Resize
        this.handleResize();
        window.addEventListener('resize', () => this.handleResize());
    }

    handleResize() {
        if (this.canvas.parentElement) {
            this.canvas.width = this.canvas.parentElement.clientWidth;
            this.canvas.height = this.canvas.parentElement.clientHeight || 200;
            this.width = this.canvas.width;
            this.height = this.canvas.height;
            this.draw();
        }
    }

    getY(n: number): number {
        // Energy is proportional to -1/n^2
        // E1 = -1, E2 = -0.25, E3 = -0.11, ..., E_inf = 0
        // Map E1 to bottom (height - padding), E_inf to top (padding)
        const e = -1 / (n * n);
        const minE = -1; // n=1
        const maxE = 0;  // n=inf

        const normalize = (e - minE) / (maxE - minE); // 0 to 1
        return this.height - 30 - (normalize * (this.height - 60));
    }

    updateState(n: number, target: number | null) {
        this.currentN = n;
        this.targetN = target;
        this.draw();
    }

    draw() {
        this.ctx.clearRect(0, 0, this.width, this.height);

        const paddingLeft = 50;
        const width = this.width - 70;

        this.ctx.font = '12px Arial';
        this.ctx.textAlign = 'right';
        this.ctx.textBaseline = 'middle';

        // Draw Levels
        this.levels.forEach(n => {
            const y = this.getY(n);

            this.ctx.beginPath();
            this.ctx.strokeStyle = '#ccc';
            this.ctx.lineWidth = 1;
            this.ctx.moveTo(paddingLeft, y);
            this.ctx.lineTo(paddingLeft + width, y);
            this.ctx.stroke();

            // Label N
            this.ctx.fillStyle = '#666';
            this.ctx.fillText(`n=${n}`, paddingLeft - 5, y);

            // Label Energy (approx)
            const ev = -13.6 / (n * n);
            this.ctx.fillText(`${ev.toFixed(2)} eV`, this.width - 5, y);
        });

        // Draw Electron/State Marker
        const y = this.getY(this.currentN);
        this.ctx.beginPath();
        this.ctx.fillStyle = '#2196F3'; // Blue dot
        this.ctx.arc(paddingLeft + width / 2, y, 6, 0, Math.PI * 2);
        this.ctx.fill();

        // Draw Transition Arrow if happening
        if (this.targetN !== null) {
            const y1 = this.getY(this.currentN);
            const y2 = this.getY(this.targetN);

            // Draw arrow
            this.ctx.beginPath();
            this.ctx.strokeStyle = this.targetN < this.currentN ? '#F44336' : '#4CAF50'; // Red emission, Green absorption
            this.ctx.lineWidth = 2;
            this.ctx.moveTo(paddingLeft + width / 2 + 20, y1);
            this.ctx.lineTo(paddingLeft + width / 2 + 20, y2);
            this.ctx.stroke();

            // Arrowhead
            // ... (simple triangle at y2)
        }
    }
}
