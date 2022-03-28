
const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

//Show input error message

function showError(input, message) {

    const formControl = input.parentElement;

    formControl.className = 'form_control error';

    const small = formControl.querySelector('small');
    small.innerText = message;

}

//Show success outline

function showSuccess(input){

    const formControl = input.parentElement;
    formControl.className = 'form_control success';

}

//Check email validation

function isValidEmail(email){

    const re = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/;

    return re.test(String(email).toLocaleLowerCase());

}

function CheckPassword(password){ 

    var paswd=  /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{7,15}$/;
    return re.test(String(password));

}

/*

//Check Required Fields

function checkRequired(inputArr){

    inputArr.forEach(function(input){

        if(input.value.trim() === ''){

            console.log('Campo Obligatorio');
            showError(input, 'Campo Obligatorio');

        }

        else{

            showSuccess(input);

        }

    });

}

//Get Field Name

function getFieldName(input){

    return input.id.charAt(0).toUpperCase() + input.id.slice(1);

}


//Event Listeners

form.addEventListener('submit', function(e){

    e.preventDefault();

    checkRequired([username, email, password, password2]);

});*/

form.addEventListener('submit', function(e) {

    e.preventDefault();

    if(username.value === ''){

        showError(username, 'Campo Obligatorio');

    } else{

        showSuccess(username);

    }

    if(email.value === ''){

        showError(email, 'Campo Obligatorio');

    } else if(!isValidEmail(email.value)){
        
        showError(email, "Correo No Válido");
        
    } else{

        showSuccess(email);

    }

    if(password.value === ''){

        showError(password, 'Campo Obligatorio');

    } else if(password.value.length < 8){
        
        showError(password, 'Debe contener más de 8 carácteres');
        
    } else{

        showSuccess(password);

    }

    if(password2.value === ''){

        showError(password2, 'Campo Obligatorio');

    } else if(password2.value !== password.value){

        showError(password2, 'Las Contraseñas no Coinciden');

    } else{

        showSuccess(password2);

    }

});