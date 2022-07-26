/*
function getPlayerChoice()
{
    //let choice = prompt("Please enter your choice :");
    choice = choice.toLowerCase();
    choice = choice.charAt(0).toUpperCase() + choice.slice(1);

    return choice;
}
*/

function getComputerChoice()
{
    let num = Math.floor(Math.random() * 3) + 1;
    if(num === 1)
    {
        return "Rock";
    }else if(num === 2)
    {
        return "Paper";
    }else
    {
        return "Scissor";
    }
}
//alert(getComputerChoice());
var winsComputer = 0;
var winsPlayer = 0;

function playRound(playerSelection, computerSelection)
{
    if(playerSelection === "Rock")
    {
        if(computerSelection === "Scissor")
        {
            winsPlayer++;
            winsComputer--;
            return("Hurray you win! Rocks beats scissors");
            
        }else if(computerSelection === "Paper")
        {
            winsPlayer--;
            winsComputer++;
            return("You Lose! Paper beats rock");
        }else
        {
            return("Deuce! Try again");
        }
    }else if(playerSelection === "Paper")
    {
        if(computerSelection === "Rock")
        {
            winsPlayer++;
            winsComputer--;
            return("Hurray you win! Paper beats rock");   
        }else if(computerSelection === "Scissor")
        {
            winsPlayer--;
            winsComputer++;
            return("You Lose! Scissor beats paper");
        }else
        {
            return("Deuce! Try again");
        }
    }else if(playerSelection === "Scissor")
    {
        if(computerSelection === "Rock")
        {
            winsPlayer--;
            winsComputer++;
            return("You Lose! Rock beats scissor");   
        }else if(computerSelection === "Paper")
        {
            winsPlayer++;
            winsComputer--;
            return("Hurray you win! Scissor beats paper");
        }else
        {
            return("Deuce! Try again");
        }
    }
}
var count = 0;


//console.log(playRound(getPlayerChoice(),getComputerChoice()));

function game(cnt)
{
    console.log(count);
    if(cnt == 5)
    {
        
        if(winsPlayer > winsComputer)
        {
            resultMenu.textContent = "You win by : "+winsPlayer;
        }else if(winsPlayer === winsComputer)
        {
            resultMenu.textContent ="Nobody wins";
        }else
        {
            resultMenu.textContent ="Computer Wins by : "+winsComputer;
        }
    }else if(cnt == 6)
    {
        resultMenu.textContent = null;
        winsPlayer = 0;
        winsComputer = 0;
        count = 0;
    }
}

function getPlayerChoice(choice)
{
    console.log(choice);
    return choice;
}
//const btns = document.querySelectorAll('button');
const div = document.querySelector('.result');
const resultMenu = document.createElement('h5');
const result = document.createElement('h4');


const rockBtn = document.querySelector('.Rock');
const paperBtn = document.querySelector('.Paper');
const scissorBtn = document.querySelector('.Scissor');

div.appendChild(result);
div.appendChild(resultMenu);

    rockBtn.addEventListener('click',(e)=>{
        //getPlayerChoice();
        const resultValue = playRound(e.target.classList.value,getComputerChoice());
        result.textContent = resultValue;
        game(++count);
    });
    paperBtn.addEventListener('click',(e)=>{
        //getPlayerChoice();
        const resultValue = playRound(e.target.classList.value,getComputerChoice());
        result.textContent = resultValue;
        game(++count);
    });
    scissorBtn.addEventListener('click',(e)=>{
        //getPlayerChoice();
        const resultValue = playRound(e.target.classList.value,getComputerChoice());
        result.textContent = resultValue;
        game(++count);
    });
    
//To add styling to the element created in js adding classes to them

result.classList.add('result-para');
resultMenu.classList.add('result-menu');
