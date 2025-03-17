document.addEventListener("DOMContentLoaded",()=>{
    const userNameDisplay = document.getElementById("user-name");
    const loggedInUSer = sessionStorage.getItem("username");
    if(loggedInUSer)
        {
            userNameDisplay.textContent = loggedInUSer;
        } else {
            window.location.href = "login.html";
        }
    
        document.getElementById("logout-button").addEventListener("click",()=>{
            sessionStorage.clear();
            window.location.href = "login.html";
        });
});

