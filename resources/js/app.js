const stone = document.getElementById('stone');
const scissors = document.getElementById('scissors');
const paper = document.getElementById('paper');
const playAgain = document.getElementById('playAgain');

let isPlayed = false;



stone.addEventListener('click', () => {
    Play(0);
});

scissors.addEventListener('click', () => {
    Play(1);
});

paper.addEventListener('click', () => {
    Play(2);
});

playAgain.addEventListener('click', restart);


function Play(number) {
    if (!isPlayed) {
        let result;
        const player = number;
        const computer = Math.floor(Math.random() * 3);
        onScreen(player, computer);
        switch (player) {
            case 0:
                if (computer == 0) {
                    result = 0;
                } else if (computer == 1) {
                    result = 1;
                } else {
                    result = 2;
                }
                break;
            case 1:
                if (computer == 0) {
                    result = 2;
                } else if (computer == 1) {
                    result = 0;
                } else {
                    result = 1;
                }
                break;
            case 2:
                if (computer == 0) {
                    result = 1;
                } else if (computer == 1) {
                    result = 2;
                } else {
                    result = 0;
                }
                break;
            default:
                result = 2;
                break;
        }
        isPlayed = true;
         setTimeout(function () {
            resultPreview(result);
        }, 1000);
        }

}

function onScreen(player, computer) {
    const result = document.getElementById("result");
    const playerChoose = document.querySelectorAll("#options img").item(player);
    const playerChooseCopy = playerChoose.cloneNode(true);

    const computerChoose = document.querySelectorAll("#options img").item(computer);
    const computerChooseCopy = computerChoose.cloneNode(true);

    playerChoose.style.opacity = "0";
    playerChoose.style.cursor = "inherit";
    playerChooseCopy.style.opacity = "0";
    computerChooseCopy.style.opacity = "0";
    setTimeout(function () {
        result.appendChild(playerChooseCopy);
        result.appendChild(computerChooseCopy);
    }, 350);

    setTimeout(function () {
        playerChooseCopy.style.opacity = "1";
    }, 400);

    setTimeout(function () {
        computerChooseCopy.style.opacity = "1";
    }, 800);
}

function resultPreview(resultStat) {
    const battleResultBox       =   document.getElementById("battleResult");
    const battleResulth3        =   document.querySelector("#battleResult h3");
    const boxBattleWithText     =   document.getElementsByClassName('boxBattle').item(0);
    const boxBattleIMG          =   document.querySelector("#battleResult img");
    const client                =   document.getElementById("client");
    const computer              =   document.getElementById("computer");
    const resources             =   "resources/images/";
    let newScore;
    
    battleResultBox.style.display = "block";

    switch (resultStat) {

        case 0:
            battleResulth3.innerHTML = "You are equal this round.";
            boxBattleWithText.id = "draw";
            boxBattleIMG.src = resources + "draw.webp";
            break;

        case 1:
            battleResulth3.innerHTML = "You win this round.";
            boxBattleWithText.id = "win";
            boxBattleIMG.src = resources + "win.webp";
            newScore = client.innerHTML
            client.innerHTML = parseInt(newScore) + 1;
            break;

        case 2:
            battleResulth3.innerHTML = "You lose this round.";
            boxBattleWithText.id = "lose";
            boxBattleIMG.src = resources + "lose.webp";
            newScore = computer.innerHTML
            computer.innerHTML = parseInt(newScore) + 1;
            break;
    }
}

function restart() {
    const playerChoose = document.querySelectorAll("#options img");
    const result = document.getElementById("result");
    const battleResultBox = document.getElementById("battleResult");

    
    battleResultBox.style.display = "none";
    playerChoose.item(0).style.cssText = "";
    playerChoose.item(1).style.cssText = "";
    playerChoose.item(2).style.cssText = "";
    result.innerHTML = "";
    
    isPlayed = false;
}