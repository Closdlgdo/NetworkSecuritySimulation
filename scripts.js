// Smooth Scroll for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Collapsible Sections
document.querySelectorAll('section h2').forEach(header => {
    header.addEventListener('click', function() {
        let content = this.nextElementSibling;
        content.style.display = (content.style.display === "none") ? "block" : "none";
    });
});

// Initially collapse all sections except the first one
document.querySelectorAll('main > section').forEach((section, index) => {
    if (index !== 0) {
        section.querySelector('p').style.display = 'none';
        section.querySelectorAll('h3, h4, ol, ul, pre').forEach(el => el.style.display = 'none');
    }
});
