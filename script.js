const colors = ["#ffffff", "#f0f0f0", "#b4b4b4", "#929292"];

function changeBackground() {
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    document.body.style.backgroundColor = randomColor;
}

window.onload = changeBackground; 
