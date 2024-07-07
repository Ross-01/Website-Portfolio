// Dynamic Project Cards with Hover Effects
    const projectCards = document.querySelectorAll('.project-card');

    projectCards.forEach(card => {
        card.addEventListener('mouseover', () => {
            const description = card.getAttribute('data-description');
            card.querySelector('p').textContent = description;
        });

        card.addEventListener('mouseout', () => {
            card.querySelector('p').textContent = 'Brief description of project ' + card.querySelector('h3').textContent.split(' ')[1] + '.';
        });
    });

    // Contact Form Validation
    const contactForm = document.querySelector('#contact form');

    if (contactForm) {
        contactForm.addEventListener('submit', (event) => {
            const name = document.querySelector('#name').value;
            const email = document.querySelector('#email').value;
            const message = document.querySelector('#message').value;

            if (!name || !email || !message) {
                alert('All fields are required.');
                event.preventDefault();
            } else if (!validateEmail(email)) {
                alert('Please enter a valid email address.');
                event.preventDefault();
            }
        });

        function validateEmail(email) {
            const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            return re.test(String(email).toLowerCase());
        }
    }

    // Scroll-to-Top Button
    const scrollToTopBtn = document.getElementById('scrollToTopBtn');

    if (scrollToTopBtn) {
        window.addEventListener('scroll', () => {
            if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
                scrollToTopBtn.style.display = 'block';
            } else {
                scrollToTopBtn.style.display = 'none';
            }
        });

        scrollToTopBtn.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
});
