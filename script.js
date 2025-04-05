const colors = ["#f1f1f1"];

function changeBackground() {
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    document.body.style.backgroundColor = randomColor;
}

window.onload = changeBackground; 
