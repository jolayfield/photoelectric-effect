import './style.css';

console.log('QuantumChem Simulations Landing Page Loaded');

const featureCards = document.querySelectorAll('.feature-card');
featureCards.forEach(card => {
    card.addEventListener('mouseenter', () => {
        (card as HTMLElement).style.transform = 'translateY(-5px)';
        (card as HTMLElement).style.boxShadow = '0 10px 20px rgba(0,0,0,0.1)';
    });
    card.addEventListener('mouseleave', () => {
        (card as HTMLElement).style.transform = 'translateY(0)';
        (card as HTMLElement).style.boxShadow = '0 4px 30px rgba(0, 0, 0, 0.05)';
    });
});
