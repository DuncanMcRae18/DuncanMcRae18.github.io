// script.js

function loadContent(section) {
    const content = document.getElementById('content');
    switch (section) {
        case 'home':
            content.innerHTML = `
                <section id="home">
                    <h2>Welcome to Duncan's Website</h2>
                    <p>Explore my personal portfolio and discover the services I offer. Whether you're here for inspiration, collaboration, or just to learn more about me, I'm glad you stopped by!</p>
                    <p>Navigate through the sections above to learn more.</p>
                </section>
            `;
            break;
        case 'about':
            content.innerHTML = `
                <section id="about">
                    <h2>About Me</h2>
                    <p>Hi, I'm Duncan McRae! I'm passionate about web development, design, and creating meaningful digital experiences. This website showcases my work and skills.</p>
                    <p>With a background in technology and a love for innovation, I strive to build websites that are not only functional but also beautiful and user-friendly.</p>
                </section>
            `;
            break;
        case 'services':
            content.innerHTML = `
                <section id="services">
                    <h2>My Services</h2>
                    <ul>
                        <li><strong>Web Development:</strong> Custom websites built with modern technologies.</li>
                        <li><strong>UI/UX Design:</strong> Creating intuitive and engaging user interfaces.</li>
                        <li><strong>Consultation:</strong> Advice on digital projects and best practices.</li>
                        <li><strong>Maintenance:</strong> Ongoing support and updates for your websites.</li>
                    </ul>
                    <p>Contact me to discuss how I can help with your project!</p>
                </section>
            `;
            break;
        case 'contact':
            content.innerHTML = `
                <section id="contact">
                    <h2>Get in Touch</h2>
                    <p>I'm always open to new opportunities and collaborations. Feel free to reach out!</p>
                    <p><strong>Phone:</strong> 613-330-3436</p>
                    <p><strong>Email:</strong> [Your Email Here]</p>
                    <p><strong>GitHub:</strong> <a href="https://github.com/DuncanMcRae18" target="_blank">DuncanMcRae18</a></p>
                </section>
            `;
            break;
        default:
            content.innerHTML = `<p>Page not found.</p>`;
    }
}

// Load the home section by default
loadContent('home');
