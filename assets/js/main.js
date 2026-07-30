// CourseNest Free Tier JS

document.addEventListener('DOMContentLoaded', () => {
    // Contact Form submission handler
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            alert('Thank you for contacting CourseNest! We will get back to you shortly.');
            contactForm.reset();
        });
    }

    // Dynamic search filtering for courses
    const courseSearch = document.getElementById('course-search');
    if (courseSearch) {
        courseSearch.addEventListener('input', (e) => {
            const query = e.target.value.toLowerCase();
            const courseCards = document.querySelectorAll('.course-card');
            
            courseCards.forEach(card => {
                const title = card.querySelector('h3').textContent.toLowerCase();
                const description = card.querySelector('p').textContent.toLowerCase();
                
                if (title.includes(query) || description.includes(query)) {
                    card.style.display = 'block';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    }
});
