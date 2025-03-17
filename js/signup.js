document.addEventListener('DOMContentLoaded', function() {
    var form = document.querySelector('form');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Previne trimiterea formularului

        var username = document.getElementById('username').value;
        var email = document.getElementById('email').value;
        var password = document.getElementById('password').value;
        var confirmPassword = document.getElementById('confirm-password').value;

        var usernameRegex = /^[a-zA-Z0-9_]{8,}$/;
        var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        var passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;

        var errors = [];

        if (!usernameRegex.test(username)) {
            errors.push("Username must have at least 8 characters and can only contain letters, numbers, or underscore.");
        }

        if (!emailRegex.test(email)) {
            errors.push("Invalid email address.");
        }

        if (!passwordRegex.test(password)) {
            errors.push("Password must have at least 8 characters, one uppercase letter, one lowercase letter, and one number.");
        }

        if (password !== confirmPassword) {
            errors.push("Passwords do not match.");
        }

        if (errors.length > 0) {
            alert(errors.join('\n'));
        } else {
            //form.submit();
            setTimeout(function(){
                window.location.href = "404signup.html";
            },500);
        }
    });
});

