let cards = document.getElementsByClassName("cards")[0];
let submitButton = document.getElementById("buttonSubmit");
let deleteButton = document.getElementById("deleteCoffee");

submitButton.addEventListener("click",addCoffee);

cards.addEventListener("click",deleteCoffee);


document.addEventListener('DOMContentLoaded',function() {
    star();
    loadCoffees();
})

//selectare dupa id, clasa, selector css, tag
function addCoffee(event)
{   event.preventDefault();
    const name = document.querySelector("#coffee-name");
    const adress = document.getElementById("coffee-adress");
    const opening = document.getElementById("coffee-time-start");
    const closing = document.getElementById("coffee-time-close");
    const url = document.getElementById("coffee-url");

    if(!url.value)
        {
            url.value = "https://www.espressocafe.ro/blog/wp-content/uploads/2023/06/coffee-shop.jpg";
        }


    if(name.value && adress.value)
        {
            const newCoffee = {
                name:name.value,
                adress: adress.value,
            opening: opening.value,
            closing: closing.value,
            url: url.value
        };
        const coffees = JSON.parse(localStorage.getItem('coffees')) || [];
        coffees.push(newCoffee);
        localStorage.setItem('coffees', JSON.stringify(coffees));

        addCoffeeToDOM(newCoffee);

        /*
            const newCoffeeItem = document.createElement('li');
            newCoffeeItem.innerHTML = `<img src="${url.value}" alt="${name.value}">
                                    <div class="coffee-shop-details">
                                    <h3>${name.value}</h3>
                                    <p>Adress: ${adress.value}</p>
                                    <p>Schedule: ${opening.value}-${closing.value}</p>
                                    <p>Rate your experience</p>
                                    <div class="rating-box">
                                        <div class="stars">
                                            <i class="fa-solid fa-star"></i>
                                            <i class="fa-solid fa-star"></i>
                                            <i class="fa-solid fa-star"></i>
                                            <i class="fa-solid fa-star"></i>
                                            <i class="fa-solid fa-star"></i>
                                        </div>
                                    </div>
                                    <button type="button" class="deleteCoffee">Delete the coffee shop</button>

                                    
                                  </div>`;
            newCoffeeItem.classList.add("MyCoffee");
            cards.appendChild(newCoffeeItem);*/
            
        
            name.value = "";
            adress.value = "";
            opening.value="";
            closing.value="";
            url.value="";
            star();
        }
}


function deleteCoffee(event)
{
    event.preventDefault();
    if (event.target && event.target.classList.contains("deleteCoffee")) 
    {
        let coffeeShop = event.target.closest('li');
        if (coffeeShop) {
            const name = coffeeShop.querySelector('h3').textContent;
            const coffees = JSON.parse(localStorage.getItem('coffees')) || [];
            const updatedCoffees = coffees.filter(coffee => coffee.name !== name);
            localStorage.setItem('coffees', JSON.stringify(updatedCoffees));
            cards.removeChild(coffeeShop);
        }
    }
}


function star(){    
    var cards = document.querySelectorAll('.cards li');
    console.log(cards.length);

    for(let x = 1;x<cards.length;x++)
        {
            const stars = cards[x].querySelectorAll(".stars i");
            /*
            stars[0].addEventListener("click",function(){
                if (stars[0].style.color=="yellow")
                    {stars[0].style.color = "";}
                else{
                    stars[0].style.color = "yellow";
                }

            })*/
            
            for (let i = 0; i < stars.length; i++) {
                stars[i].addEventListener("click", function() {
                    for (let j = 0; j < stars.length; j++) {
                        if (j <= i ) {
                            //style.color = "yellow";
                            stars[j].style.color = "yellow";
                        } else {
                            //style.color="#e6e6e6";
                            stars[j].style.color = "";  // Resetează culoarea la valoarea inițială
                        }
                    }
                });
            }
            /*
            for (let i = 0; i < stars.length; i++) {
                stars[i].addEventListener("click", function() {
                    if(stars[i].style.color == "yellow"){
                        stars[i].style.color = "";  // Resetează culoarea la valoarea inițială
                    }
                    else{
                        stars[i].style.color = "yellow";
                    }
                });
            }*/

        }
    }


function addCoffeeToDOM(coffee) {
    const newCoffeeItem = document.createElement('li');
    newCoffeeItem.innerHTML = `<img src="${coffee.url}" alt="${coffee.name}">
                                <div class="coffee-shop-details">
                                <h3>${coffee.name}</h3>
                                <p>Adress: ${coffee.adress}</p>
                                <p>Schedule: ${coffee.opening}-${coffee.closing}</p>
                                <p>Rate your experience</p>
                                <div class="rating-box">
                                    <div class="stars">
                                        <i class="fa-solid fa-star"></i>
                                        <i class="fa-solid fa-star"></i>
                                        <i class="fa-solid fa-star"></i>
                                        <i class="fa-solid fa-star"></i>
                                        <i class="fa-solid fa-star"></i>
                                    </div>
                                </div>
                                <button type="button" class="deleteCoffee">Delete the coffee shop</button>
                                </div>`;
    newCoffeeItem.classList.add("MyCoffee");
    cards.appendChild(newCoffeeItem);
}

function loadCoffees() {
    const coffees = JSON.parse(localStorage.getItem('coffees')) || [];
    coffees.forEach(coffee => addCoffeeToDOM(coffee));
    star();
}

//document.addEventListener('DOMContentLoaded',star);
