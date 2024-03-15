const firstName = document.getElementById('first-name');
const lastName = document.getElementById('last-name');
const yourPass = document.getElementById('Password');
const yourEmail = document.getElementById('Email');
const patternPassword = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/;
const patternEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function successReg(input) {
    const formGroup = input.parentElement;
    formGroup.className = "form-group success";
    const errorMessage = formGroup.querySelector('.error-message');
    errorMessage.innerText = 'success';
    errorMessage.style.visibility = 'hidden';
}

function errorReg(input, message) {
    const formGroup = input.parentElement;
    formGroup.className = "form-group error";
    const errorMessage = formGroup.querySelector('.error-message');
    errorMessage.innerText = message;
    errorMessage.style.visibility = 'visible';
    
}

function checkFirstname(){
    if (firstName.value === "") {
        errorReg(firstName, "first name cannot be empty");
        return false;
    } else {
        successReg(firstName);
        return true;
    }
}

function checkLastname(){
    if (lastName.value === "") {
        errorReg(lastName, "last name cannot be empty");
        return false;
    } else {
        successReg(lastName);
        return true;
    }
}

function checkEmail(errorText){
    if (yourEmail.value === "" || !patternEmail.test(yourEmail.value)) {
        errorReg(yourEmail, "Looks like this is not an email");
        errorText = "email@example/com";
        yourEmail.value=errorText;
        return false;
    } else {
        successReg(yourEmail);
        return true;
    }
}

function checkPassword(){
    if (yourPass.value === "" || !patternPassword.test(yourPass.value))  {
        errorReg(yourPass, "password can not be empty");
        return false;

    } else {
        successReg(yourPass);
        return true;
    }
}

document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('form');
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        checkFirstname();
        checkLastname();
        checkPassword();
        checkEmail();
    });
});
