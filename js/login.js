/**************************************************************** */
/* Authorisation */
/**************************************************************** */

const form = document.getElementById('form');
const email = document.getElementById('email');
const password = document.getElementById('password');

function auth(event) {
    
    event.preventDefault();

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    if (email === "genaro.almeida@seongcorp.es" || email=="admin" && password === "Perrita99" || password=="root") {

         window.location.replace("./areaclientes.html");

    } else {

        alert("Información Incorrecta \n\nDatos de Acceso:\n\nUser: genaro.almeida@seongcorp.es\npass: Perrita99");

        return;
    }
}