let cards = document.getElementsByClassName("cards")[0];
let submitButton = document.getElementById("buttonSubmit");
let deleteButton = document.getElementById("deleteRestaurant");

submitButton.addEventListener("click",addRestaurant);

cards.addEventListener("click",deleteRestaurant);


document.addEventListener('DOMContentLoaded',function() {
    star();
    loadRestaurants();
})


function addRestaurant(event)
{   event.preventDefault();
    const name = document.querySelector("#restaurant-name");
    const adress = document.getElementById("restaurant-adress");
    const opening = document.getElementById("restaurant-time-start");
    const closing = document.getElementById("restaurant-time-close");
    const url = document.getElementById("restaurant-url");

    if(!url.value)
        {
            url.value = "https://images.squarespace-cdn.com/content/v1/5c9534c4af4683461d462c6b/1689521312266-1AEGKWVDPCVDQQYUVFFV/Sessions%2BArt%2BClub.jpg?format=750w";
        }


    if(name.value && adress.value)
        {
            const newRestaurant = {
                name:name.value,
                adress: adress.value,
            opening: opening.value,
            closing: closing.value,
            url: url.value
        };
        const restaurants = JSON.parse(localStorage.getItem('restaurants')) || [];
        restaurants.push(newRestaurant);
        localStorage.setItem('restaurants', JSON.stringify(restaurants));

        addRestaurantToDOM(newRestaurant);

        /*
            const newRestaurantItem = document.createElement('li');
            newRestaurantItem.innerHTML = `<img src="${url.value}" alt="${name.value}">
                                    <div class="restaurant-shop-details">
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
                                    <button type="button" class="deleteRestaurant">Delete the restaurant</button>

                                    
                                  </div>`;
            newRestaurantItem.classList.add("MyRestaurant");
            cards.appendChild(newRestaurantItem);*/
            
        
            name.value = "";
            adress.value = "";
            opening.value="";
            closing.value="";
            url.value="";
            star();
        }
}


function deleteRestaurant(event)
{
    event.preventDefault();
    if (event.target && event.target.classList.contains("deleteRestaurant")) 
    {
        let restaurantShop = event.target.closest('li');
        if (restaurantShop) {
            const name = restaurantShop.querySelector('h3').textContent;
            const restaurants = JSON.parse(localStorage.getItem('restaurants')) || [];
            const updatedRestaurants = restaurants.filter(restaurant => restaurant.name !== name);
            localStorage.setItem('restaurants', JSON.stringify(updatedRestaurants));
            cards.removeChild(restaurantShop);
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


function addRestaurantToDOM(restaurant) {
    const newRestaurantItem = document.createElement('li');
    newRestaurantItem.innerHTML = `<img src="${restaurant.url}" alt="${restaurant.name}">
                                <div class="restaurant-details">
                                <h3>${restaurant.name}</h3>
                                <p>Adress: ${restaurant.adress}</p>
                                <p>Schedule: ${restaurant.opening}-${restaurant.closing}</p>
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
                                <button type="button" class="deleteRestaurant">Delete the restaurant</button>
                                </div>`;
    newRestaurantItem.classList.add("MyRestaurant");
    cards.appendChild(newRestaurantItem);
}

function loadRestaurants() {
    const restaurants = JSON.parse(localStorage.getItem('restaurants')) || [];
    restaurants.forEach(restaurant => addRestaurantToDOM(restaurant));
    star();
}

//document.addEventListener('DOMContentLoaded',star);
