let confirmPasswordBox = document.querySelector('#confirmPassword');

confirmPasswordBox.addEventListener('change', validatePassword);


function validatePassword() {
    let confirmPassword = document.querySelector('#confirmPassword').value;
    let password = document.querySelector('#password').value;
    if (confirmPassword != password) {
            confirmPasswordBox.setCustomValidity("Passwords do not match.");
        }
    else {
        confirmPasswordBox.setCustomValidity("");
    }
}