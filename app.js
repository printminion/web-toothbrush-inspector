// Sonicare Web - Main JavaScript file

function showMessage() {
    const messageDiv = document.getElementById('message');
    const currentTime = new Date().toLocaleTimeString();
    messageDiv.textContent = `Hello! The current time is ${currentTime}`;
    messageDiv.className = 'success';
}

// Log when the page loads
console.log('Sonicare Web application loaded successfully!');
document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM fully loaded and parsed');
});
