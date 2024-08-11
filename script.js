document.addEventListener('DOMContentLoaded', function() {
    const submitButton = document.getElementById('submit-btn');

    submitButton.addEventListener('click', function(event) {
        event.preventDefault();

        // Variables de los campos
        const nombre = document.getElementById('name');
        const apellido = document.getElementById('surname');
        const correo = document.getElementById('email');
        const fecha = document.getElementById('date');
        const pais = document.getElementById('pais');

        // Limpiar errores anteriores
        document.getElementById('name-error').textContent = '';
        document.getElementById('surname-error').textContent = '';
        document.getElementById('email-error').textContent = '';
        document.getElementById('date-error').textContent = '';
        document.getElementById('pais-error').textContent = '';

        let hasErrors = false;

        // Validación de los campos
        if (nombre.value.trim() === '') {
            document.getElementById('name-error').textContent = "El nombre es obligatorio";
            hasErrors = true;
        }

        if (apellido.value.trim() === '') {
            document.getElementById('surname-error').textContent = "El apellido es obligatorio";
            hasErrors = true;
        }

        if (correo.value.trim() === '') {
            document.getElementById('email-error').textContent = "El correo es obligatorio";
            hasErrors = true;
        } else {
            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailPattern.test(correo.value.trim())) {
                document.getElementById('email-error').textContent = "Formato de correo no válido debe contener @";
                hasErrors = true;
            }
        }

        const today = new Date();
        const birthDate = new Date(fecha.value);

        if (!fecha.value) {
            document.getElementById('date-error').textContent = "La fecha de nacimiento es obligatoria";
            hasErrors = true;
        } else {
            if (birthDate > today) {
                document.getElementById('date-error').textContent = "La fecha no puede ser futura";
                hasErrors = true;
            } else {
                let edad = today.getFullYear() - birthDate.getFullYear();
                const mes = today.getMonth() - birthDate.getMonth();
                if (mes < 0 || (mes === 0 && today.getDate() < birthDate.getDate())) {
                    edad--;
                }
                if (edad < 18) {
                    document.getElementById('date-error').textContent = "Debes ser mayor de 18 años";
                    hasErrors = true;
                }
            }
        }

        if (pais.value.trim() === '') {
            document.getElementById('pais-error').textContent = "Debe seleccionar un país";
            hasErrors = true;
        }

        if (!hasErrors) {
            Swal.fire({
                title: "Enviado con éxito!",
                text: "Gracias por su participación.",
                icon: "success"
            });
        }
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const btnHighContrast = document.getElementById('high-contrast');
    const btnClassic = document.getElementById('classic');

    btnHighContrast.addEventListener('click', function(event) {
        event.preventDefault(); 
        document.body.classList.add('contrast-mode');
    });

    btnClassic.addEventListener('click', function(event) {
        event.preventDefault(); 
        document.body.classList.remove('contrast-mode');
    });
});
