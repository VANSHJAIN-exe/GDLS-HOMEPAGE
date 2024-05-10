var typed = new Typed(".auto-type", {
    strings: ["Symphony Gang", "Gang de la Sinfonia"],
    typeSpeed: 150,
    backSpeed: 150,
    loop: true,
});

function glitchEffect() {
    var glitchText = document.querySelector(".auto-type").textContent;
    var glitchedText = "";

    for (var i = 0; i < glitchText.length; i++) {
        if (Math.random() < 0.05) { // Adjust probability for more or less glitch
            glitchedText += String.fromCharCode(Math.floor(Math.random() * (126 - 33 + 1)) + 33); // Random printable ASCII characters
        } else {
            glitchedText += glitchText[i];
        }
    }

    document.querySelector(".auto-type").textContent = glitchedText;
}

setInterval(glitchEffect, 200); // Adjust interval for glitch effect speed
