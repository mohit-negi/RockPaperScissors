function getPlayerChoice()
{
    let choice = prompt("Please enter your choice :");
    choice = choice.toLowerCase();
    choice = choice.charAt(0).toUpperCase() + choice.slice(1);

    return choice;
}
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
//console.log(playRound(getPlayerChoice(),getComputerChoice()));

function game()
{
    for(let i=0;i<5;i++)
    {
        console.log(playRound(getPlayerChoice(),getComputerChoice()));
    }
    if(winsPlayer > winsComputer)
    {
        alert("You win by : "+winsPlayer);
    }else if(winsPlayer === winsComputer)
    {
        alert("Deuce!! Try again");
    }else
    {
        alert("Computer Wins by : "+winsComputer);
    }
}

game()
