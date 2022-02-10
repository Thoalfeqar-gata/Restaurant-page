import dolmaImg from "../Dolma.jpg";
import bamiaImg from "../Bamia.jpg";
import mahshiImg from "../Mahshi.jpg";
import maqlubaImg from "../Maqluba.jpg";
let createCard = (foodName, image, discription) =>
{
    let card = document.createElement("div");
    
    let img = new Image();
    img.src = image;
    
    let name = document.createElement("h2");
    name.textContent = foodName;
    
    let disc = document.createElement("p");
    disc.textContent = discription;



    card.appendChild(img);
    card.appendChild(name);
    card.appendChild(disc);
    card.classList.add("menuCard");
    return card;
}


let menuLoad = () =>
{
    const menu = document.createElement("main");
    menu.classList.add("menu");
    const background = document.createElement("div");
    background.classList.add("menuBackground");
    
    const dolma = createCard("Dolma", dolmaImg, "Vegetables wrapped in rice and meat.");
    const bamia = createCard("Bamia and rice", bamiaImg, "Bamia broth made from tomato sauce and okra.");
    const mahshi = createCard("Mahshi", mahshiImg, "Similar to dolma, but more sauce!");
    const maqluba = createCard("maqluba", maqlubaImg, "Rice and potatoes with eggplants and vegetables.");
    background.appendChild(dolma);
    background.appendChild(bamia);
    background.appendChild(mahshi);
    background.appendChild(maqluba);
    menu.appendChild(background);
    return menu;
}

export {menuLoad};