// script.js

function loadContent(section) {
    const content = document.getElementById('content');
    switch (section) {
        case 'home':
            fetch('Home.HTML')
                .then(response => response.text())
                .then(html => content.innerHTML = html)
                .catch(error => content.innerHTML = '<p>Error loading Home page.</p>');
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
