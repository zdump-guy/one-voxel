document.addEventListener('DOMContentLoaded', () => {

    // Mobile menu toggle
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const nav = document.querySelector('header nav');
    if (mobileMenuBtn && nav) {
        mobileMenuBtn.addEventListener('click', () => {
            nav.classList.toggle('hidden');
            nav.classList.toggle('flex');
            nav.classList.add('flex-col', 'absolute', 'top-full', 'left-0', 'right-0', 'bg-charcoal-deep', 'p-lg', 'gap-md');
        });
    }

    // Section scroll animation
    const sections = document.querySelectorAll('.section');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1 });

    sections.forEach(section => {
        observer.observe(section);
    });

    // Counter animation
    const counters = document.querySelectorAll('[data-counter]');
    const counterObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const counter = entry.target;
                const target = parseInt(counter.getAttribute('data-counter'));
                let current = 0;
                const increment = target / 100;

                const updateCounter = () => {
                    current += increment;
                    if (current < target) {
                        counter.innerText = Math.ceil(current);
                        requestAnimationFrame(updateCounter);
                    } else {
                        counter.innerText = target;
                    }
                };
                updateCounter();
                observer.unobserve(counter);
            }
        });
    }, { threshold: 0.8 });

    counters.forEach(counter => {
        counterObserver.observe(counter);
    });

    // Testimonial slider
    const testimonialSlider = document.querySelector('.testimonial-slider');
    if(testimonialSlider){
        const testimonials = testimonialSlider.querySelectorAll('.testimonial-card');
        let currentIndex = 0;

        if(testimonials.length > 1){
            setInterval(() => {
                testimonials[currentIndex].classList.add('hidden');
                currentIndex = (currentIndex + 1) % testimonials.length;
                testimonials[currentIndex].classList.remove('hidden');
            }, 5000); // Change slide every 5 seconds
        }
    }
});
