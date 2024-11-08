// Array to store project information
const projects = [
    {
        title: "Grocery App Redesign",
        description: "A complete redesign of a grocery app, focusing on a modern and user-friendly interface.",
        link: "https://www.figma.com/design/dLI929HwqnMmBaXgypKOVT/Grocery-App-Redesign?node-id=0-1&node-type=canvas&t=bTv60LuXWdrnBRZg-0"
    },
    {
        title: "Style Fusion E-Commerce Website",
        description: "An e-commerce website for men and women’s fashion, including shopping for clothes, watches, and sneakers.",
        link: "https://github.com/gurkirankaurr/Style-Fusion-ECommerce-Website"
    },
    {
        title: "Portfolio Website",
        description: "A personal portfolio showcasing my web development skills, projects, and achievements.",
        link: "https://github.com/gurkirankaurr/My-portfolio"
    }
];

// Function to display projects in the projects section
function displayProjects() {
    const projectsContainer = document.getElementById("projects-container");
    projectsContainer.innerHTML = ""; // Clear previous content if any

    projects.forEach(project => {
        // Create a div for each project card
        const projectCard = document.createElement("div");
        projectCard.classList.add("project-card");

        // Set the inner HTML of the project card
        projectCard.innerHTML = `
            <h3>${project.title}</h3>
            <p>${project.description}</p>
            <a href="${project.link}" class="project-link" target="_blank">View Project</a>
        `;
        
        // Append the project card to the projects container
        projectsContainer.appendChild(projectCard);
    });
}

// Load the projects when the document content is fully loaded
document.addEventListener("DOMContentLoaded", displayProjects);
