// Show/hide sections based on navigation clicks
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();
        const sectionId = this.getAttribute('data-section');
        
        // Hide all sections and remove active class from links
        document.querySelectorAll('.section').forEach(section => {
            section.classList.remove('active');
        });
        document.querySelectorAll('.nav-link').forEach(nav => {
            nav.classList.remove('active');
        });
        
        // Show selected section and mark link as active
        document.getElementById(sectionId).classList.add('active');
        this.classList.add('active');
    });
});

// Set Home as default active section
document.getElementById('home').classList.add('active');
document.querySelector('a[data-section="home"]').classList.add('active');