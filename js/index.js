
function generateRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

// array, math, string (split, toUpperCase), data curenta
const colors = ["#978C84", "#8D877A", "#817870", "#6C5E51", "#a3b3c4", "#727d89"];


function changeCupColor() {
    const cupBody = document.getElementById("cup-body");
    const cupShade = document.getElementById("cup-shade");
    const cupHandle = document.getElementById("cup-handle");
    const saucer = document.getElementById("saucer");
    const shadow = document.getElementById("shadow");

    const randomIndex = Math.floor(Math.random() * colors.length);
    const randomColor = colors[randomIndex];
    //const randomColor = generateRandomColor();
    cupBody.style.backgroundColor = randomColor;
    cupShade.style.backgroundColor = randomColor;
    cupHandle.style.border = `8px solid ${randomColor}`;
    saucer.style.backgroundColor = randomColor;
    shadow.style.backgroundColor = randomColor;

}
setInterval(changeCupColor, 2000);



function displayCurrentDateTime() {
    
    const dateElement = document.getElementById('currentDateTime');
    const now = new Date(); 



    const formattedDate = now.toLocaleString(); 
    const upperCaseDate = formattedDate.toUpperCase();
    const dateParts = formattedDate.split(", ");
    dateElement.textContent = `Current Date: ${dateParts[0]} and Time: ${dateParts[1]}`;
}

setInterval(displayCurrentDateTime, 0);
