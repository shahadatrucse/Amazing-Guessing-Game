const totalAttempts = 5;
const attempts = 0;
const totalLosts = 0;
const totalWons = 0;
// finding elements
const form = document.querySelector("form");
const cardBody = document.querySelector(".card-body");
const guessingNumber = form.querySelector("#guessingNumber");
const checkButton = form.querySelector("#check");
const resultText = cardBody.querySelector(".resultText");
const remainingAttempts = cardBody.querySelector(".remainingAttempts");
const lostWinMessage = document.createElement("p");

form.addEventListener("submit", function (event){
    event.preventDefault();
    attempts++;
    if(attempts > 5){
        checkButton.disabled = true;
        guessingNumber.disabled = true;
    }
    else{
        checkResult(guessingNumber.value);
        remainingAttempts.innerHTML = `Remaining attempts: ${totalAttempts - attempts}`;
    }
    guessingNumber.value="";
});


function checkResult(guessingNumber){
    const randomNumber = getRandomNumber(5);
    if(guessingNumber == randomNumber){
        resultText.innerHTML = `You are Won.`;
        totalWons++;
    }
    else{
        resultText.innerHTML = `You are Lost. Random number is ${randomNumber}.`;
        totalLosts++;
    }
    lostWinMessage.innerHTML = `Won: ${totalWons}, Lost: ${totalLosts}`;
    lostWinMessage.classList.add("large-text");
    cardBody.appendChild(lostWinMessage);
}

function getRandomNumber (limit){
    return Math.floor(Math.random() * limit) + 1;
}

