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

