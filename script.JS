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
            fetch('About.HTML')
                .then(response => response.text())
                .then(html => content.innerHTML = html)
                .catch(error => content.innerHTML = '<p>Error loading About page.</p>');
            break;
        case 'apps':
            fetch('Apps.HTML')
                .then(response => response.text())
                .then(html => content.innerHTML = html)
                .catch(error => content.innerHTML = '<p>Error loading Apps page.</p>');
            break;
        case 'contact':
            fetch('Contact.HTML')
                .then(response => response.text())
                .then(html => content.innerHTML = html)
                .catch(error => content.innerHTML = '<p>Error loading Contact page.</p>');
            break;
        default:
            content.innerHTML = `<p>Page not found.</p>`;
    }
}

// Load the home section by default
loadContent('home');
