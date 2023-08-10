
document.addEventListener("DOMContentLoaded", function () {      //
    const regBtn = document.getElementById("regBtn");  //se accede al registro botón
    const alertSuccess = document.getElementById("alert-success");
    const alertError = document.getElementById("alert-danger");

    regBtn.addEventListener("click", function () {
        const nombre = document.getElementById("nombre").value;  // se accede al valor del elemento.
        const apellido = document.getElementById("apellido").value;
        const email = document.getElementById("email").value;
        const password1 = document.getElementById("password1").value;
        const password2 = document.getElementById("password2").value;
        const terminos = document.getElementById("terminos").checked;

        if (nombre === "" || apellido === "" || email === "" || password1 === "" || password2 === "" || !terminos) {  //si todas las variables son iguales a string pero los términos están desmarcados, da error 
            showAlertError();
        } else if (password1.length < 6 || password1 !== password2) {   //Si la contraseña es menor de 6 caracteres, da error.
            showAlertError();
        } else {
            showAlertSuccess();
        }
    })
});

function showAlertSuccess() {
    document.getElementById("alert-success").classList.add("show");
}

function showAlertError() {
    document.getElementById("alert-danger").classList.add("show");
}

