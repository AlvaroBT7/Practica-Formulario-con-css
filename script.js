
const messages = {
    "messages": {
        "validation": "Gracias por su contribucion.",
        "name": "Nombre no valido. El nombre tiene que tener entre 5 y 30 caracteres sin espacios.",
        "email": "Email no valido. El email debe contener '@'",
        "password": "Contraseña no valida. La contraseña debe tener entre 5 y 30 caracteres, ademas de incluir tanto letras, como numeros y simbolos"
    }
}

const text = document.getElementById("text");
const email = document.getElementById("email");
const password = document.getElementById("password");
const button = document.getElementById("btn");
const response = document.querySelector(".response-container h3");
const responseContainer = document.querySelector(".response-container");

const Numeros = "1233456789";
const Signos = ",;.:-_";
const Letras = "abcdefghijklmnopqrstuvwxyz";


button.addEventListener("click", event => {
    event.preventDefault();
    let errores = validarCampos();

    if (errores.length > 0){
        response.setAttribute("style", "display:block");
        response.innerHTML = errores[0];
        responseContainer.classList.add("red");
        responseContainer.classList.remove("green");
    }
    else {
        response.setAttribute("style", "display:block");
        response.innerHTML = messages.messages.validation;
        responseContainer.classList.add("green");
        responseContainer.classList.remove("red");
        
        // vaciando el formulario
        text.value = "";
        email.value = "";
        password.value = "";
    }
})

function validarCampos(){
    let errores = [];

    // nombre no valido secuencia
    if (text.value.length < 5 || text.value.length > 30 || text.value.includes(" ")){
        errores.push(messages.messages.name);
    }
    // email no valido secuencia
    if (!email.value.includes("@")){
        errores.push(messages.messages.email);
    }
    // contraseña no valida secencia
    if (password.value.length < 5 || password.value.length > 30 || !comprobarContraseña(password.value)){
        errores.push(messages.messages.password);
    }

    return errores;
}


function comprobarContraseña(contraseña){
    let numeros = 0;
    let signos = 0;
    let letras = 0;
    for (let i = 0; i < contraseña.length ; i++){
        if (Numeros.includes(contraseña[i])){
            numeros++;
        }
        if (Signos.includes(contraseña[i])){
            signos++;
        }
        if (Letras.includes(contraseña[i])){
            letras++;
        }
    }
    return numeros>0 && signos>0 && letras>0;
}