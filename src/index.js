import {createHome} from "./home.js";
import {createMenu} from "./menu.js";
import "./styles.css";

function deleteChild(parent) {
    //e.firstElementChild can be used. 
    let child = parent.lastElementChild;
    while (child) {
        parent.removeChild(child);
        child = parent.lastElementChild;
    }
}

const content = document.querySelector("div#content");

function changePage(createPage) {
    return function() {
        deleteChild(content);
        createPage();
    };
}

const menuButton = document.querySelector("button#menu");
const homeButton = document.querySelector("button#home");

menuButton.addEventListener("click", changePage(createMenu));
homeButton.addEventListener("click", changePage(createHome));

createHome();
console.log("hello");