// script.js
function validateForm() {
    var name = document.getElementById('name').value;
    var age = document.getElementById('age').value;
    var phone = document.getElementById('phone').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    var gender = document.getElementById('gender').value;

    if (name.trim() === '' || age.trim() === '' || phone.trim() === '' || email.trim() === '' || password.trim() === '' || gender.trim() === '') {
        alert('All fields are required');
        return false;
    }

    if (!validateEmail(email)) {
        alert('Please enter a valid email address');
        return false;
    }

    if (!validatePassword(password)) {
        alert('Password must be at least 8 characters long');
        return false;
    }

    return true;
}

function validateEmail(email) {
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
}

function validatePassword(password) {
    return password.length >= 8;
}
