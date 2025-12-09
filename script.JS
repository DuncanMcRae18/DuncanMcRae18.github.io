// script.js

function loadContent(section) {
    const content = document.getElementById('content');
    switch (section) {
        case 'home':
            content.innerHTML = `
                <section id="home">
                    <h2>Home</h2>
                    <p>Welcome to the home page. Here you can find the latest updates and news about Duncan's Website.</p>
                </section>
            `;
            break;
        case 'about':
            content.innerHTML = `
                <section id="about">
                    <h2>About</h2>
                    <p>This page provides information about the purpose of Duncan's Website and its creator.</p>
                </section>
            `;
            break;
        case 'services':
            content.innerHTML = `
                <section id="services">
                    <h2>Services</h2>
                    <p>Details about the services offered can be found here. Whether it's consultation, development, or support, we have you covered.</p>
                </section>
            `;
            break;
        case 'contact':
            content.innerHTML = `
                <section id="contact">
                    <h2>Contact</h2>
                    <p>Get in touch with us through this page. We'd love to hear from you!</p>
                </section>
            `;
            break;
        default:
            content.innerHTML = `<p>Page not found.</p>`;
    }
}

// Load the home section by default
loadContent('home');
