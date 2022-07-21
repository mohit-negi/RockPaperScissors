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

function playRound(playerSelection, computerSelection)
{
    if(playerSelection === "Rock")
    {
        if(computerSelection === "Scissor")
        {
            return("Hurray you win! Rocks beats scissors");
            
        }else if(computerSelection === "Paper")
        {
            return("You Lose! Paper beats rock");
        }else
        {
            return("Deuce! Try again");
        }
    }else if(playerSelection === "Paper")
    {
        if(computerSelection === "Rock")
        {
            return("Hurray you win! Paper beats rock");   
        }else if(computerSelection === "Scissor")
        {
            return("You Lose! Scissor beats paper");
        }else
        {
            return("Deuce! Try again");
        }
    }else if(playerSelection === "Scissor")
    {
        if(computerSelection === "Rock")
        {
            return("You Lose! Rock beats scissor");   
        }else if(computerSelection === "Paper")
        {
            return("Hurray you win! Scissor beats paper");
        }else
        {
            return("Deuce! Try again");
        }
    }
}

console.log(playRound(getPlayerChoice(),getComputerChoice()));
