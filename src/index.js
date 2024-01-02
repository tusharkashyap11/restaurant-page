import './style.css';
import './background.jpg';
import { pageLoad } from './pageload.js';
import { menu } from './menu.js';
import { contact } from './contact.js';

const element = document.getElementById('content');
const header = document.createElement('header');
const nav = document.createElement('nav');
const menuTab = document.createElement('button');
menuTab.textContent = "MENU";
const contactTab = document.createElement('button');
contactTab.textContent = "CONTACT";
const homeTab = document.createElement('button');
homeTab.textContent = "HOME";
const heading = document.createElement('h1');
heading.textContent = "Zayka";
const br = document.createElement('br');
header.appendChild(heading);
nav.appendChild(homeTab);
nav.appendChild(menuTab);
nav.appendChild(contactTab);
header.appendChild(nav);
homeTab.addEventListener('click', loadHome);
menuTab.addEventListener('click', loadMenu);
contactTab.addEventListener('click', loadContact);
element.appendChild(header);
element.appendChild(br);
element.appendChild(pageLoad());

function loadHome() {
    const prevTab = document.querySelectorAll('#content div');
    if (prevTab) {
        prevTab.forEach(function(div) {
            div.remove();
        })
    }
    const element = document.getElementById('content');
    element.appendChild(pageLoad());
}
function loadMenu() {
    const prevTab = document.querySelectorAll('#content div');
    if (prevTab) {
        prevTab.forEach(function(div) {
            div.remove();
        })
    }
    const element = document.getElementById('content');
    const div = document.createElement('div');
    div.classList.add('menu-tab');
    const menuHeading = document.createElement('h1');
    menuHeading.textContent = "MENU";
    div.appendChild(menuHeading);
    div.appendChild(menu());
    element.appendChild(div);
}
function loadContact() {
    const prevTab = document.querySelectorAll('#content div');
    if (prevTab) {
        prevTab.forEach(function(div) {
            div.remove();
        })
    }
    const element = document.getElementById('content');
    const div = document.createElement('div');
    div.classList.add('contact-tab');
    const contactHeading = document.createElement('h1');
    contactHeading.textContent = "CONTACT";
    div.appendChild(contactHeading);
    div.appendChild(contact());
    element.appendChild(div);
}