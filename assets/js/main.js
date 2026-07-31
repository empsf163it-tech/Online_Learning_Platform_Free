// CourseNest Free Tier JS

document.addEventListener('DOMContentLoaded', () => {
    // Hamburger menu toggle
    const hamburgerBtn = document.getElementById('hamburger-btn');
    const navLinks = document.getElementById('nav-links');
    if (hamburgerBtn && navLinks) {
        hamburgerBtn.addEventListener('click', () => {
            const isOpen = navLinks.classList.toggle('open');
            hamburgerBtn.setAttribute('aria-expanded', isOpen);
            
            // Toggle hamburger icon appearance
            hamburgerBtn.classList.toggle('active');
        });
    }

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

    // FAQ Accordion Toggle
    const faqQuestions = document.querySelectorAll('.faq-question');
    faqQuestions.forEach(question => {
        question.addEventListener('click', () => {
            const faqItem = question.parentElement;
            const isOpen = faqItem.classList.toggle('active');
            question.setAttribute('aria-expanded', isOpen);

            const answer = faqItem.querySelector('.faq-answer');
            if (isOpen) {
                answer.style.maxHeight = answer.scrollHeight + 'px';
            } else {
                answer.style.maxHeight = '0px';
            }
        });
    });
});
