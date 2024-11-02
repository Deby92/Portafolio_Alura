
document.getElementById("contactForm").addEventListener("submit", function (event) {
    event.preventDefault();

    const emailField = document.getElementById("email");
    const errorMessage = document.getElementById("error-message");
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (!emailField.value) {
        errorMessage.textContent = "El campo de correo electrónico no puede estar vacío.";
        errorMessage.style.display = "block";
        return;
    } else if (!emailPattern.test(emailField.value)) {
        errorMessage.textContent = "Ingrese un correo electrónico válido en el formato: texto@texto.com.";
        errorMessage.style.display = "block";
        return;
    }

    errorMessage.style.display = "none";
    Swal.fire({
        icon: "success",
        title: "La información se ha enviado correctamente",
        showConfirmButton: false,
        timer: 1500
      });
});
