// Interaktivita pro stránku Lokalita
document.addEventListener('DOMContentLoaded', function() {
    // Zvýraznění výhod při najetí myší
    const benefitItems = document.querySelectorAll('.benefits-list li');

    benefitItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            const benefit = this.getAttribute('data-benefit');
            // Vizuální feedback
            this.style.backgroundColor = 'rgba(184, 83, 45, 0.05)';
        });

        item.addEventListener('mouseleave', function() {
            this.style.backgroundColor = 'transparent';
        });
    });

    // Animace pro highlight cards
    const highlightCards = document.querySelectorAll('.highlight-card');

    // Intersection Observer pro animaci při scrollování
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    highlightCards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        observer.observe(card);
    });
});
