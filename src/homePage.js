function loadHomePage(){
    const body = document.createElement("body");
    body.classList.add("body");

    const restaurantImage = document.createElement("img");
    restaurantImage.classList.add("restaurant-image");
    restaurantImage.src = "./images/pizzaMain.jpeg";
    console.log("Image Worked");
    
    body.appendChild(restaurantImage);
}

export default loadHomePage;