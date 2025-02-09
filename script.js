const colors = ["#d11a1a", "#f0f0f0", "#b4b4b4", "#929292","#886754", "#fffd98","#FFffcc"];

function changeBackground() {
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    document.body.style.backgroundColor = randomColor;
}

window.onload = changeBackground; 
