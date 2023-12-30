export function pageLoad() {
    const element = document.getElementById('content');
    const heading = document.createElement('h1');
    heading.textContent = "Zayka";
    element.appendChild(heading);
};