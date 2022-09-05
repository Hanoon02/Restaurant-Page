import loadHomePage from "./homePage";

function initializeHeader(){
    const header = document.createElement("header");
    header.classList.add("header");

    const restaurantName = document.createElement("h2");
    restaurantName.classList.add("restaurant-name");
    restaurantName.textContent = "Restaurant Name";

    header.appendChild(restaurantName);
    return header;
}

function initializeBody(){
    const body = document.createElement("body");
    body.classList.add("body");
        
    body.appendChild(loadHomePage());
}

function initialize(){
    const content = document.getElementById("content");
    content.appendChild(initializeHeader());
    initializeBody();
}

export default initialize;