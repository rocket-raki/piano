const pianoKeys = document.querySelectorAll(".key");

function playSound(newUrl) {
    new Audio(newUrl).play();
}

pianoKeys.forEach((pianoKey, i) => {
    const number = i < 9 ? "0" + (i + 1) : i + 1;
    const newUrl = "24-piano-keys/key" + number + ".mp3";
    if(number>=25){ pianoKey.addEventListener("click", () => playSound('24-piano-keys/key24.mp3'));}
    else{  pianoKey.addEventListener("click", () => playSound(newUrl)); };
});


const pianoKey = document.querySelectorAll(".key");

function playSound(newUrl) {
    new Audio(newUrl).play();
}

function getKeyUrl(key) {
    const number = key < 10 ? "0" + key : key;
    return "24-piano-keys/key" + number + ".mp3";
}

pianoKey.forEach((pianoKey, i) => {
    pianoKey.addEventListener("click", () => playSound(getKeyUrl(i + 1)));
});

document.addEventListener("keypress", (event) => {
    const key = event.key.toLowerCase();
    let keyIndex;
    if (key === 'x' || key === 'y' || key === 'z') {
        keyIndex = 24;
    } else if (key.charCodeAt(0) >= 97 && key.charCodeAt(0) <= 122) {
        keyIndex = key.charCodeAt(0) - 96; // 'a' has index 1, 'b' has index 2, and so on
    }

    if (keyIndex !== undefined) {
        playSound(getKeyUrl(keyIndex));
    }
});
