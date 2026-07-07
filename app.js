document.addEventListener('DOMContentLoaded', () => {
    const container = document.querySelector('.container');
    const sections = document.querySelectorAll('.slide');
    const dots = document.querySelectorAll('.dot');
    
    // Intersection Observer for Reveal Animations & Dot Update
    const observerOptions = {
        root: container,
        threshold: 0.5
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Reveal Animation
                const revealElements = entry.target.querySelectorAll('.reveal');
                revealElements.forEach(el => el.classList.add('active'));

                // Update Pagination Dots
                const targetId = entry.target.getAttribute('id');
                dots.forEach(dot => {
                    if (dot.getAttribute('data-target') === targetId) {
                        dot.classList.add('active');
                    } else {
                        dot.classList.remove('active');
                    }
                });
            }
        });
    }, observerOptions);

    sections.forEach(section => {
        observer.observe(section);
    });

    // Pagination Dot Click
    dots.forEach(dot => {
        dot.addEventListener('click', () => {
            const targetId = dot.getAttribute('data-target');
            const targetSection = document.getElementById(targetId);
            if (targetSection) {
                targetSection.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    // Initial Trigger for slide 1
    setTimeout(() => {
        const firstSlideReveals = sections[0].querySelectorAll('.reveal');
        firstSlideReveals.forEach(el => el.classList.add('active'));
    }, 100);
});
