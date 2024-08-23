document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('¡Gracias por contactarnos! Pronto nos pondremos en contacto contigo.');
    this.reset();
});