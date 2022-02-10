const homeLoad = () =>
{
    const home = document.createElement("main");
    const welcomeContainer = document.createElement("div");
    const welcomeHeader = document.createElement("h1");
    const welcomeText = document.createElement("p");
    
    home.classList.add("home");
    welcomeContainer.classList.add("welcomeContainer");
    welcomeHeader.textContent = "Iraq restaurant, beyond traditional.";
    welcomeText.textContent = "Best traditional dishes in town.\nA place that you will never forget!";
    welcomeContainer.appendChild(welcomeHeader);
    welcomeContainer.appendChild(welcomeText);

    home.appendChild(welcomeContainer);
    return home;
};

export {homeLoad};