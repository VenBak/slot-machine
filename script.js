function getRandomNumber() {
    return Math.floor(Math.random() * 9);
}

function getElement(id) {
    return document.getElementById(id);
}

function spin() {
    const item1 = getElement('item1');
    const item2 = getElement('item2');
    const item3 = getElement('item3');
    const item4 = getElement('item4');
    const item5 = getElement('item5');

    const num1 = getRandomNumber();
    const num2 = getRandomNumber();
    const num3 = getRandomNumber();
    const num4 = getRandomNumber();
    const num5 = getRandomNumber();

    item1.innerHTML = `${num1}`;
    item2.innerHTML = `${num2}`;
    item3.innerHTML = `${num3}`;
    item4.innerHTML = `${num4}`;
    item5.innerHTML = `${num5}`;

    if (num1 === num2 && num1 === num3 && num1 === num4 && num1 === num5) {
        playBoing();
        showMessage();
    } else {
        hideMessage();
    }
}

function playBoing() {
    const boing = document.getElementById("boing");
    boing.play();
}

function showMessage() {
    const msg = document.getElementById("message");
    msg.style.display = "block";
    msg.classList.add('animated', 'pulse')
}

function hideMessage() {
    const msg = document.getElementById("message");
    msg.style.display = "none";
}