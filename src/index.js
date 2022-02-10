import logoPath from "./logo.png";
import {homeLoad} from './pages/homePage.js';
import {menuLoad} from './pages/menuPage.js';
import {contactLoad} from './pages/contactPage.js';
import './style.css';
const content = document.getElementById("content");

const headerLoad = () =>
{
    const head = document.createElement("header");
    head.classList.add("header");

    const logo = document.createElement("div");
    logo.classList.add("logo");
    const headImg = new Image();
    headImg.src = logoPath;
    logo.appendChild(headImg);

    const headText = document.createElement("p");
    headText.textContent = "Iraq restaurant";
    logo.appendChild(headText);

    head.appendChild(logo);
    head.appendChild(tabsLoad());
    return head;
}

const tabsLoad = () =>
{
    const tabsList = document.createElement("nav");
    tabsList.classList.add("tabs");
    const homeTab = document.createElement("button");
    const menuTab = document.createElement("button");
    const contactTab = document.createElement("button");

    //temporary for assigning event listeners.
    const buttons = [homeTab, contactTab, menuTab];
    homeTab.addEventListener("click", e =>
    {
        for(let btn of buttons)
        {
            btn.classList.remove("active");
        }
        homeTab.classList.add("active");

        content.replaceChild(homeLoad(), document.querySelector("main"))
    });

    menuTab.addEventListener("click", e =>
    {
        for(let btn of buttons)
        {
            btn.classList.remove("active");
        }

        menuTab.classList.add("active");
        content.replaceChild(menuLoad(), document.querySelector("main"))
    });

    contactTab.addEventListener("click", e =>
    {
        for(let btn of buttons)
        {
            btn.classList.remove("active");
        }
        contactTab.classList.add("active");
        content.replaceChild(contactLoad(), document.querySelector("main"))
    });
    

    homeTab.classList.add("active");
    homeTab.classList.add("homeTab");
    menuTab.classList.add("menuTab");
    contactTab.classList.add("contactTab");

    menuTab.textContent = "Menu";
    contactTab.textContent = "Contact";
    homeTab.textContent = "Home";
    tabsList.appendChild(homeTab);
    tabsList.appendChild(menuTab);
    tabsList.appendChild(contactTab);
    return tabsList;
};

const footerLoad = () =>
{
    const footer = document.createElement("div");
    footer.classList.add("footer");
    footer.textContent = "Copyright © Thoalfeqar 2022";
    return footer;
};


content.appendChild(headerLoad());
content.appendChild(homeLoad());
content.appendChild(footerLoad());