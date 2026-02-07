
import Chart from 'chart.js/auto';

export class KEGraph {
    canvas: HTMLCanvasElement;
    chart: Chart;

    // Physics Constants for Graphing
    // K max = hf - Phi
    // Slope = h
    // Intercept = -Phi
    // We plot KE (y) vs Frequency (x)

    // Frequency range to show
    minFreq: number = 0;
    maxFreq: number = 2000; // THz

    // Physics Scaling
    // h is 4.1357e-15 eV*s (eV / Hz)
    h_val = 4.1357e-15; // eV / Hz

    constructor(canvas: HTMLCanvasElement) {
        this.canvas = canvas;
        this.chart = new Chart(canvas, {
            type: 'line',
            data: {
                datasets: [
                    {
                        label: 'Theoretical Max KE',
                        data: [], // Line
                        borderColor: '#666',
                        borderWidth: 2,
                        borderDash: [5, 5],
                        pointRadius: 0,
                        fill: false
                    },
                    {
                        label: 'Current State',
                        data: [], // multiple points
                        backgroundColor: '#00f2ff',
                        borderColor: '#fff',
                        borderWidth: 2,
                        pointRadius: 6,
                        pointHoverRadius: 8,
                        type: 'scatter'
                    },
                    {
                        xAxisID: 'x2',
                        label: 'axis-hack',
                        data: [{ x: 0, y: 0 }],
                        showLine: false,
                        pointRadius: 0
                    }
                ]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                    x: {
                        type: 'linear',
                        position: 'bottom',
                        title: {
                            display: true,
                            text: 'Frequency \u03BD (Hz)',
                            color: '#636e72'
                        },
                        grid: {
                            color: 'rgba(0, 0, 0, 0.1)'
                        },
                        ticks: {
                            color: '#636e72',
                            callback: function (value) {
                                return Number(value).toExponential(1);
                            }
                        },
                        min: 0,
                        max: 1.5e15
                    },
                    x2: {
                        type: 'linear',
                        position: 'top',
                        title: {
                            display: true,
                            text: 'Wavelength (nm)',
                            color: '#636e72'
                        },
                        grid: {
                            drawOnChartArea: false,
                            color: 'rgba(0, 0, 0, 0.1)'
                        },
                        ticks: {
                            color: '#636e72',
                            callback: function (value) {
                                const f = Number(value);
                                if (f <= 1e12) return ''; // Hide overly large wavelengths at 0/low freq
                                const wl = 2.99792e17 / f;
                                return Math.round(wl).toString();
                            }
                        },
                        min: 0,
                        max: 1.5e15
                    },
                    y: {
                        title: {
                            display: true,
                            text: 'Max Kinetic Energy (eV)',
                            color: '#636e72'
                        },
                        grid: {
                            color: 'rgba(0, 0, 0, 0.1)'
                        },
                        ticks: {
                            color: '#636e72'
                        },
                        min: 0,
                        max: 5
                    }
                },
                plugins: {
                    legend: {
                        labels: {
                            color: '#2d3436',
                            filter: (item) => item.text !== 'axis-hack'
                        }
                    }
                }
            }
        });
    }

    update(frequencyTHz: number, workFunction: number) {
        try {
            // Convert THz to Hz
            const freqHz = frequencyTHz * 1e12;

            // 1. Update Theoretical Line (Always update to current phi)
            // Line defined by K = h*f - Phi
            const lineData = [
                { x: 0, y: -workFunction },
                { x: 1.5e15, y: (this.h_val * 1.5e15) - workFunction }
            ];

            this.chart.data.datasets[0].data = lineData;
            this.chart.data.datasets[0].label = `Phi = ${workFunction} eV`;

            // 2. Add New Point (Accumulate history)
            let currentKE = (this.h_val * freqHz) - workFunction;
            if (currentKE < 0) currentKE = 0;

            console.log(`Plotting: Freq=${freqHz.toExponential(2)}, KE=${currentKE.toFixed(2)}`);

            const newPoint = { x: freqHz, y: currentKE };

            // Scatter dataset is always index 1
            const scatterDataset = this.chart.data.datasets[1];
            (scatterDataset.data as any[]).push(newPoint);

            // Append Color
            const color = currentKE > 0 ? '#00f2ff' : '#ff073a';
            if (!Array.isArray(scatterDataset.backgroundColor)) {
                scatterDataset.backgroundColor = [];
            }
            (scatterDataset.backgroundColor as string[]).push(color);

            // Update chart - force full update to ensure rendering
            this.chart.update();
        } catch (e) {
            console.error("Error updating graph:", e);
        }
    }

    reset() {
        try {
            // Clear Points from Scatter (index 1)
            const scatter = this.chart.data.datasets[1];
            if (scatter) {
                scatter.data = [];
                scatter.backgroundColor = [];
            }

            this.chart.update();
        } catch (e) {
            console.error("Error resetting graph:", e);
        }
    }
}
