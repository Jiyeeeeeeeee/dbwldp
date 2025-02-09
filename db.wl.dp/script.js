const colors = ["#FFcc99", "#ff8200", "#b4b4b4","#f0b469", "#FFe3e3", "#FFffcc", "#5ac8c8"];

function changeBackground() {
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    document.body.style.backgroundColor = randomColor;
}

window.onload = changeBackground; 