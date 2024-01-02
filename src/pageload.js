export function pageLoad() {    
    const home = document.createElement('div');
    home.classList.add('home');
    const p1 = document.createElement('p');
    p1.textContent = "Savour the Flavour of the best Indian Spices"; 
    const p2 = document.createElement('p');
    p2.textContent = "Order Online or Dine In";
    home.appendChild(p1);
    home.appendChild(p2);
    return home;
};