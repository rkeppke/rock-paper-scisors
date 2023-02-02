//declaring variables for the html elements
let header = document.querySelector('.header');
let rules = document.querySelector('.rules');
let startGame = document.querySelector('.start-game');
let playbox = document.querySelector('.playbox');
let rock = document.querySelector('.rock');
let paper = document.querySelector('.paper');
let scissor = document.querySelector('.scissor');
let score = document.querySelector('.score');
let win = document.querySelector('.win');
let lose = document.querySelector('.lose');
let tie = document.querySelector('.tie');
let victory = document.querySelector('.victory');
let defeat = document.querySelector('.defeat');
let again = document.querySelector('.again');
let finalMessage = document.querySelector('.final-message');
let wPoints = 0;
let lPoints = 0;
let tPoints = 0;
let playerChoice = 0;

function initiateGame(){
    //hides start button
    startGame.style.display = 'none';
    //setting button values
    wPoints = 0;
    lPoints = 0;
    tPoints = 0;
    win.innerText = `${wPoints} won`;
    lose.innerText = `${lPoints} lost`;
    tie.innerText = `${tPoints} tie(s)`;
    //show playbox and score
    playbox.style.display = 'flex';
    score.style.display = 'flex';

}


//this sets the website to be in the welcoming page
function welcome (){
    //hide 3 buttons, scorebox and final message
    playbox.style.display = 'none';
    score.style.display = 'none';
    finalMessage.style.display = 'none';
    //shows start button
    startGame.style.display = 'block';
}

function rollUpdate(playerChoice){
    //console.log(playerChoice);
    //button was pressed -> game updates!

}

welcome();

startGame.addEventListener('click',initiateGame);

//events for the game buttons, rock = 0 paper = 1 scissor = 2
rock.addEventListener('click', () => rollUpdate(0));
paper.addEventListener('click', () => rollUpdate(1));
scissor.addEventListener('click', () => rollUpdate(2));



/*
ok what do I wanna do here:
starts game in welcoming page, only shows header, rules and start button
when start button is pressed it gets hidden and game shows up
when one of the game buttons gets pressed the game updates
update shows some sort of animation
checks for end of game condition to keep playing or end game
if the game is ended hides the playbox and score and shows final message
*/