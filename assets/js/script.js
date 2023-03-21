function getRandomNumber() {
    return Math.floor(Math.random() * 4) + 1;
}

function getElement(id) {
    return document.getElementById(id);
}

function spin() {
    const item1 = getElement('item1');
    const item2 = getElement('item2');
    const item3 = getElement('item3');
    // const item4 = getElement('item4');
    // const item5 = getElement('item5');

    const num1 = getRandomNumber();
    const num2 = getRandomNumber();
    const num3 = getRandomNumber();
    // const num4 = getRandomNumber();
    // const num5 = getRandomNumber();

    item1.innerHTML = `${num1}`;
    item2.innerHTML = `${num2}`;
    item3.innerHTML = `${num3}`;
    // item4.innerHTML = `${num4}`;
    // item5.innerHTML = `${num5}`;

    // Jackpot 3 of same for 1s
    if ((num1 == 1) && (num1 === num2 && num1 === num3)){
        playBoing();
        showMessage();
        jackpot1();

    // Jackpot 3 of same for 3s
    } else if ((num1 == 3) && (num1 === num2 && num1 === num3)) {
        playBoing();
        showMessage();
        jackpot3();

    // Jackpot of 3 of same for 4s
    } else if ((num1 == 4) && (num1 === num2 && num1 === num3)) {
        playBoing();
        showMessage();
        jackpot4();
    
    // Pair of 1s
    } else if (((num1 == 1) && (num1 == num2 || num1 == num3)) || ((num3 == 1) && (num3 == num2 || num3 == num2)))  {
        playBoing();
        showMessage();
        pair1();
    
    // Pair of 2s
    } else if (((num1 == 2) && (num1 == num2 || num1 == num3)) || ((num3 == 2) && (num3 == num2 || num3 == num2))) {
        playBoing();
        showMessage();
        pair2();

    } else {
        hideMessage()
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

const div = document.getElementById("message")

function jackpot1 () {
    div.innerHTML = "Congrats you got triple 1s"
}

function jackpot3 () {
    div.innerHTML = "Congrats you got triple 3s"
}

function jackpot4() {
    div.innerHTML = "Congrats you got triple 4s"
}

function pair1 () {
    div.innerHTML = "Congrats you got a pair of 1s"
}

function pair2 () {
    div.innerHTML = "Congrats you got a pair of 2s"
}