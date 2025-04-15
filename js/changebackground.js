let colors = ['#ff5733', '#33ff57', '#3357ff', '#f7a8b8', '#a8f7b8', '#f8b8a8'];
let currentColorIndex = 0;

function changeBackgroundColor() {
    currentColorIndex = (currentColorIndex + 1) % colors.length;
    document.body.style.backgroundColor = colors[currentColorIndex];
}

// Change background color every 10 minutes (600000 ms)
setInterval(changeBackgroundColor, 600000);
changeBackgroundColor(); // Initial change on load