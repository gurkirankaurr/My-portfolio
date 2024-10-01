// Smooth Scrolling for navigation
document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Dynamic Project Display
const projects = [
    {
        name: 'E-commerce Website',
        description: 'Developed a e-commerce platform Worked extensively with HTML, CSS, and JavaScript to design and implement responsive and user-friendly web interfaces.',
        link: 'https://github.com/gurkirankaurr/Style-Fusion-ECommerce-Website'
    },
    {
        name: 'Portfolio Website',
        description: 'A personal portfolio website built with HTML, CSS, and JavaScript to showcase my skills and projects.',
        link: 'https://github.com/yourusername/portfolio-website'
    },
];

const projectContainer = document.getElementById('projects-container');
projects.forEach(project => {
    const projectDiv = document.createElement('div');
    projectDiv.classList.add('project');
    
    projectDiv.innerHTML = `
        <h3>${project.name}</h3>
        <p>${project.description}</p>
        <a href="${project.link}" target="_blank">View on GitHub</a>
    `;
    
    projectContainer.appendChild(projectDiv);
});

// Contact Form Submission Handler
document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    const status = document.getElementById('status');

    if (name && email && message) {
        status.textContent = 'Sending message...';
        setTimeout(() => {
            status.textContent = 'Message sent successfully!';
        }, 2000);
    } else {
        status.textContent = 'Please fill out all fields.';
    }
});
