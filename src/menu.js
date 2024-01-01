import paneer from './kadhaipaneer.jpg';
import naan from './garlicnaan.jpg';
import biryani from './chickenbiryani.jpg';

function menu() {
    const menu = document.createElement('div');
    menu.classList.add('menu');
    const kadhaiPaneer = createDiv();
    kadhaiPaneer.classList.add('menu-item');
    const garlicNaan = createDiv();
    garlicNaan.classList.add('menu-item');
    const chickenBiryani = createDiv();
    chickenBiryani.classList.add('menu-item');
    
    const kp = new Image();
    kp.src = paneer;
    
    const gn = new Image();
    gn.src = naan;
    
    const cb = new Image();
    cb.src = biryani;
    
    kadhaiPaneer.appendChild(kp);
    garlicNaan.appendChild(gn);
    chickenBiryani.appendChild(cb);
    
    const ktext = document.createElement('p');
    ktext.textContent = "Kadhai Paneer";
    kadhaiPaneer.appendChild(ktext);
    const gtext = document.createElement('p');
    gtext.textContent = "Garlic Naan";
    garlicNaan.appendChild(gtext);
    const ctext = document.createElement('p');
    ctext.textContent = "Chicken Biryani";
    chickenBiryani.appendChild(ctext);
    
    menu.appendChild(kadhaiPaneer);
    menu.appendChild(garlicNaan);
    menu.appendChild(chickenBiryani);
    
    return menu;
}

function createDiv() {
    const d = document.createElement('div');
    return d;
}

export function loadMenu() {
    const prevMenu = document.querySelector('.menu-tab');
    if (prevMenu) {
        prevMenu.remove();
    }
    const element = document.getElementById('content');
    const div = document.createElement('div');
    div.classList.add('menu-tab');
    div.appendChild(menu());
    element.appendChild(div);
}