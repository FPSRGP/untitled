const texts = [
    "JAG By WaterL3mon",
    "RPG Contributed",
    "Best Website!",
    "Loading assets",
    "R5 DO THAT $Ħ1Þ"
];

function changeText() {
    const textElement = document.getElementById('loading-text');
    textElement.textContent = texts[Math.floor(Math.random() * texts.length)];
}

// Change text every 2 seconds
setInterval(changeText, 2000);
