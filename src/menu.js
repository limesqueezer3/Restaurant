export {createMenu};
const content = document.querySelector("div#content");

const menu = document.createElement("div");
menu.textContent = "Nothign yet";

function createMenu() {
    content.appendChild(menu);
}