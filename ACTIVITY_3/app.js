const cube = document.getElementById("cube");
const sound = document.getElementById("rollSound");

cube.addEventListener("click", rollDice);

function rollDice() {

    const random = Math.floor(Math.random() * 6) + 1;

    // Play sound
    sound.currentTime = 0;
    sound.play();

    // Mobile vibration
    if (navigator.vibrate) {
        navigator.vibrate(200);
    }

    // Random rotation for rolling effect
    const xRotation = (Math.floor(Math.random() * 4) + 1) * 360;
    const yRotation = (Math.floor(Math.random() * 4) + 1) * 360;

    cube.style.transform = `rotateX(${xRotation}deg) rotateY(${yRotation}deg)`;

    setTimeout(() => {
        showFace(random);
        changeBackground(random);
    }, 1000);
}

function showFace(number) {

    const rotations = {
        1: "rotateX(0deg) rotateY(0deg)",
        2: "rotateX(90deg) rotateY(0deg)",
        3: "rotateX(0deg) rotateY(-90deg)",
        4: "rotateX(0deg) rotateY(90deg)",
        5: "rotateX(-90deg) rotateY(0deg)",
        6: "rotateX(180deg) rotateY(0deg)"
    };

    cube.style.transform = rotations[number];
}

function changeBackground(number) {

    const gradients = {
        1: "linear-gradient(135deg, #ff6b6b, #ff9f9f)",
        2: "linear-gradient(135deg, #4ecdc4, #48c6ef)",
        3: "linear-gradient(135deg, #fddb92, #d1fdff)",
        4: "linear-gradient(135deg, #6c5ce7, #a29bfe)",
        5: "linear-gradient(135deg, #00b894, #55efc4)",
        6: "linear-gradient(135deg, #ff9f1c, #ffbf69)"
    };

    document.body.style.background = gradients[number];
}
