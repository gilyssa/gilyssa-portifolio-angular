# My Personal Portfolio

Welcome to my personal portfolio project! This is an Angular-based website that showcases information about my career, projects, and contact details. It's a platform where you can learn more about me and explore my work.

## Features

- **Dashboard:** A home page that provides an overview of my portfolio.

- **AboutMe:** A page with details about my career, education, and professional experience.

- **Projects:** A page where I highlight the projects I've worked on, including descriptions and links for more information.

- **Contact:** A page where you can find information to get in touch with me.

- **Sidebar:** A persistent sidebar present on all pages, providing easy navigation between sections of my portfolio.

## Technologies Used

- Angular: The JavaScript framework powering the application.

- TypeScript: The programming language used to write Angular code.

- HTML and CSS (or SCSS): For the structure and styling of the pages.

- Mobile First

## SOLID Principles

This project follows the SOLID principles, which are code design guidelines to make the code more modular, extensible, and maintainable. The SOLID principles applied here include:

- **Single Responsibility Principle (SRP):** Each Angular component has a single clear responsibility. For example, the login component is responsible only for login presentation and interaction, while the authentication logic is managed by a separate service.

- **Open-Closed Principle (OCP):** The authentication logic is encapsulated in a service (`AuthenticationService`), making it extensible for future enhancements or extensions without modifying the login component.

- **Other principles such as Dependency Inversion can also be applied throughout the project to maintain code cohesion and flexibility.**
