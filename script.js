const messages = [
    "wow ha...",
    "agay...",
    "pweaseeee",
    "edi wag.",
    "haha...",
    "JOKE LANG, PLSSS",
    "haha alam ko namang sidechick lang aq...",
    "k, sa gf ko nalang send",
    "love pls :<<<",
    ":'<<<<",
    "last na talaga, please I LOVE YOUUUU"
];

let messageIndex = 0;

function handleNoClick() {
    const noButton = document.querySelector('.no-button');
    const yesButton = document.querySelector('.yes-button');
    noButton.textContent = messages[messageIndex];
    messageIndex = (messageIndex + 1) % messages.length;
    const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
    yesButton.style.fontSize = `${currentSize * 1.55}px`;
}

function handleYesClick() {
    window.location.href = "yes_page.html";
}
