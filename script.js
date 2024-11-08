document.querySelectorAll('.agisna-faq-question').forEach(button => {
    button.addEventListener('click', () => {
        const faqAnswer = button.nextElementSibling;
        const icon = button.querySelector('.agisna-faq-icon');

        // Toggle visibility of the answer
        if (faqAnswer.style.display === 'block') {
            faqAnswer.style.display = 'none';
            icon.textContent = '+';
        } else {
            faqAnswer.style.display = 'block';
            icon.textContent = '-';
        }
    });
});

function toggleNavbar() {
    const navbar = document.getElementsByClassName('agisna_menu');

    if (navbar[0].classList.contains('active')) {
        navbar[0].classList.remove('active');
    } else {
        navbar[0].classList.add('active');
    }
}