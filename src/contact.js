import locationIcon from './location.png';

export function contact() {
    const contact = document.createElement('div');
    contact.classList.add('contact');
    const phone = document.createElement('p');
    phone.textContent = "Call us at: 📞 1-800-123-4567"
    const loc = document.createElement('p');
    loc.textContent = "Location 📍: New Delhi, India"
    const location = new Image();
    location.src = locationIcon;
    contact.appendChild(phone);
    contact.appendChild(loc);
    contact.appendChild(location);
    return contact;
}