document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('form');
    form.addEventListener('submit', function(event) {
        event.preventDefault();
        event.stopPropagation();

        if (form.checkValidity() === false) {
            form.classList.add('was-validated');
        } else {
            Swal.fire({
                title: "Enviado con éxito!",
                text: "Gracias por su participación.",
                icon: "success"
            });
        }
    });

    // Estilo de contraste y clásico
    document.getElementById('high-contrast').addEventListener('click', function(event) {
        event.preventDefault();
        document.body.classList.add('contrast-mode');
    });

    document.getElementById('classic').addEventListener('click', function(event) {
        event.preventDefault();
        document.body.classList.remove('contrast-mode');
    });
});
