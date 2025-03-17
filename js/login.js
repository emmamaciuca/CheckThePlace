window.onload = function ()
{
    var element = document.getElementById('login-container');
    var style = window.getComputedStyle(element);
    var backgroundColor = style.backgroundColor;
    console.log("Culoarea de fundal este: " + backgroundColor);
}

document.addEventListener('DOMContentLoaded', function() {
    var form = document.querySelector('form');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Previne trimiterea formularului

        var username = document.getElementById('username').value;
        var password = document.getElementById('password').value;

        var usernameRegex = /^[a-zA-Z0-9_]{8,}$/;
        var passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;

        var errors = [];

        if (!usernameRegex.test(username)) {
            errors.push("Input a valid username");
        }

        if (!passwordRegex.test(password)) {
            errors.push("Input a valid password");


        if (errors.length > 0) {
            alert(errors.join('\n'));
        } else {
            form.submit();
        }

}});
});


document.getElementById("login-form").addEventListener("submit", function (e){
    e.preventDefault();

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;


    fetch("js/users.json")
        .then((response) => response.json())
        .then((users) => {
            const userExist = users.some(
                (user) =>user.username === username && user.password === password
            );
            if (userExist){
                sessionStorage.setItem("username", username);
                
                alert("Autentificare reusita");
                setTimeout(function(){
                    window.location.href = "home.html";
                },500);
            }else{
                window.location.href = "404.html";
            }
        })
        .catch((error) =>{
            console.error("Eroare la preluarea listei de utilizatori:",error);
        });
});

