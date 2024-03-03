// script.js
function validateForm() {
    var email = document.getElementById('email').value;

    if (email.trim() === '') {
        alert('Email field is required');
        return false;
    }

    if (!validateEmail(email)) {
        alert('Please enter a valid email address');
        return false;
    }

    return true;
}

function validateEmail(email) {
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
}
