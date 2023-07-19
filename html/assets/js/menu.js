const navLinks = document.querySelectorAll('.nav-link');

navLinks.forEach(link => {
    link.addEventListener('click', handleNavLinkClick);
});

function handleNavLinkClick(event) {
    event.preventDefault();
    const targetSectionId = event.target.dataset.target;

    const sections = document.querySelectorAll('.section');
    const targetSection = document.querySelector(`.${targetSectionId}`);

    sections.forEach(section => {
        section.classList.remove('show');
        section.classList.add('hidden');
    });

    targetSection.classList.add('show');
    targetSection.classList.remove('hidden');

    // Entferne die Klasse 'active' von allen Links
    navLinks.forEach(link => {
        link.classList.remove('active');
    });

    // Setze die Klasse 'active' für den geklickten Link
    event.target.classList.add('active');
}