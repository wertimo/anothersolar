document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('nav a');
    const joinWaitlistButton = document.getElementById('joinWaitlistButton');
    const joinWaitlistHero = document.getElementById('joinWaitlistHero');
    const formModal = document.getElementById('formModal');
    const closeModal = document.getElementById('closeModal');

    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            if (link.getAttribute('href').startsWith('#')) {
                e.preventDefault();
                const targetId = link.getAttribute('href').substring(1);
                const targetElement = document.getElementById(targetId);
                
                if (targetElement) {
                    targetElement.scrollIntoView({ behavior: 'smooth' });
                }
            }
        });
    });

    function openModal(e) {
        e.preventDefault();
        formModal.style.display = 'flex';
        console.log('Join Waitlist button clicked, opening modal.');
    }

    // Make sure these elements exist before adding event listeners
    if (joinWaitlistButton) {
        joinWaitlistButton.addEventListener('click', openModal);
    }

    if (joinWaitlistHero) {
        joinWaitlistHero.addEventListener('click', openModal);
    }

    if (closeModal) {
        closeModal.addEventListener('click', function() {
            formModal.style.display = 'none';
            console.log('Close button clicked, closing modal.');
        });
    }

    window.addEventListener('click', function(event) {
        if (event.target === formModal) {
            formModal.style.display = 'none';
            console.log('Clicked outside modal, closing modal.');
        }
    });

    console.log('Event listeners attached');
});
