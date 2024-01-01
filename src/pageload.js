import './background.jpg';
import { loadMenu } from './menu.js';

export function pageLoad() {
    const element = document.getElementById('content');
    const header = document.createElement('header');
    const heading = document.createElement('h1');
    heading.textContent = "Zayka";
    header.appendChild(heading);
    const nav = document.createElement('nav');
    const menuTab = document.createElement('button');
    menuTab.textContent = "MENU";
    const contactTab = document.createElement('button');
    contactTab.textContent = "CONTACT";
    menuTab.addEventListener('click', loadMenu);
    nav.appendChild(menuTab);
    nav.appendChild(contactTab);
    header.appendChild(nav);
    element.appendChild(header);
};