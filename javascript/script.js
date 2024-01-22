document.addEventListener('DOMContentLoaded', function () {
    const welcomeMessage = "Bienvenido a mi entorno!";

    let charIndex = 0;
    const delay = 50; 

    function typeWelcomeMessage() {
        const messageElement = document.getElementById('welcome-message');
        if (charIndex < welcomeMessage.length) {
            messageElement.innerHTML += welcomeMessage.charAt(charIndex);
            charIndex++;
            setTimeout(typeWelcomeMessage, delay);
        }
    }

    typeWelcomeMessage();
});
