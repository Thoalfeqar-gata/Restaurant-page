let contactLoad = () =>
{
    let contactMain = document.createElement("main");
    let background = document.createElement("div");
    background.classList.add("contactBackground");

    let header = document.createElement("h2");
    header.textContent = "Hi there!";
    let text = document.createElement("p");
    text.innerHTML =  '<p>My name is Thoalfeqar.\r\nI hope that you like my little website. If you want to, you can reach me through my github<a href = "https://github.com/Thoalfeqar-gata" target = "_blank"> account.</a></p>';
    background.appendChild(header);
    background.appendChild(text);
    contactMain.appendChild(background);
    return contactMain;
}

export {contactLoad};