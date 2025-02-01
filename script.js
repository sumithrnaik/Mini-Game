function computerChoice() {
    
    let choices = ["Rock", "Paper", "Scissors"];
    let resultElement = document.getElementById("computer-value");
    let imgElement = document.getElementById("computer-img");

    let index = 0;
    let interval = setInterval(() => {
        imgElement.src = `images/${choices[index]}.png`;
        resultElement.innerHTML = "Choosing...";
        index = (index + 1) % 3;
    }, 200);

    return new Promise((resolve) => {
        setTimeout(() => {
            clearInterval(interval);
            let choiceIndex = Math.floor(Math.random() * 3); 
            let finalChoice = choices[choiceIndex];

            resultElement.innerHTML = finalChoice;
            imgElement.src = `images/${finalChoice}.png`;

            resolve(finalChoice); 
        }, 1000);
    });
}

async function rock(){
    userch="Rock";
    computerch=await computerChoice();

    document.getElementById("user-value").innerHTML=userch;
    document.getElementById("user-img").src="images/Rock.png";

    result=(userch == computerch) ? "Its a Tie !" : ((computerch == "Scissors") ? "You Win !!" : "You lose :( ");

    document.getElementById("result").innerText=result;
}

async function paper(){
    userch="Paper";
    computerch=await computerChoice();

    document.getElementById("user-value").innerHTML=userch;
    document.getElementById("user-img").src="images/Paper.png";


    result=(userch == computerch) ? "Its a Tie !" : ((computerch == "Rock") ? "You Win !!" : "You lose :( ");

    document.getElementById("result").innerText=result;
}

document.getElementById("scissorbtn").addEventListener( "click", rock());

async function scissor(){
    userch="Scissors";
    computerch=await computerChoice();

    document.getElementById("user-value").innerHTML=userch;
    document.getElementById("user-img").src="images/Scissors.png";


    result=(userch == computerch) ? "Its a Tie !" : ((computerch == "Paper") ? "You Win !!" : "You lose :( ");

    document.getElementById("result").innerText=result;
}
