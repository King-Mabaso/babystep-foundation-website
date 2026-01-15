// project.js - Handles automatic image rotation for project cards

document.addEventListener('DOMContentLoaded', () => {
    const projectImages = [
        // Project 1: Smile, We Smile (add your image file names here)
        {
            element: document.querySelector('.project-card:nth-child(1) img'),
            images: [
                'images/smile-we-smile-1.jpg',    // your first photo
                'images/Agribusiness 1.jpg',    // add second photo
                'images/Agribusiness 2.jpg',
                'images/Agribusiness 3.jpg',
                'images/Agribusiness 2.jpg'    // add more if you have
                // Example: 'images/smile-we-smile-4.jpg'
            ]
        },
        // Project 2: Menstruate with Pride (replace Unsplash with your locals)
        {
            element: document.querySelector('.project-card:nth-child(2) img'),
            images: [
                'images/Menstruation Health 1.jpg',
                'images/Menstruation Health 2.jpg',
                'images/Menstruation Health 3.jpg'
            ]
        },
        // Project 3: Save a Man (you already have Mental Health 3.jpg)
        {
            element: document.querySelector('.project-card:nth-child(3) img'),
            images: [
                'images/Mental Health 1.jpg',
                'images/Mental Health 2.jpg',
                'images/Mental Health 3.jpg',
                'images/Mental Health 4.jpg'
            ]
        }
    ];

    const intervalTime = 4000; // Change image every 4 seconds (adjust as needed)

    // Add smooth fade CSS transition (no need to edit styles.css)
    const style = document.createElement('style');
    style.textContent = `
        .project-card img {
            transition: opacity 0.8s ease-in-out;
        }
        .project-card img.fade {
            opacity: 0;
        }
    `;
    document.head.appendChild(style);

    // Start rotation for each project
    projectImages.forEach(project => {
        if (!project.element || project.images.length <= 1) return; // Skip if no element or only 1 image

        let currentIndex = 0;

        setInterval(() => {
            project.element.classList.add('fade'); // Fade out

            setTimeout(() => {
                currentIndex = (currentIndex + 1) % project.images.length;
                project.element.src = project.images[currentIndex];
                project.element.alt = `Project image ${currentIndex + 1}`;
                project.element.classList.remove('fade'); // Fade in
            }, 800); // Matches transition time
        }, intervalTime);
    });
});