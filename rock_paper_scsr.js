let userScore= 0;
let compScore = 0

let choices =  document.querySelectorAll(".choice")
let msg = document.querySelector(".msg-con");

let  compScorepara = document.querySelector("#comp-score");
let userScorepara = document.querySelector("#your-score");

const gencompChoice =()=>{
  const options  = [ "rock" , "paper" , "scissor"];
  const randNo = Math.floor(Math.random)*3
return options[randNo]
}

const drawGame = () =>{
console.log("Game has drawn \n \n");
msg.style.backgroundColor = "blue";
msg.style.color = "white";
msg.innerText = `game drawn.computer select same`;
msg.style.width = "580px";
}

const showingwinner = (userWin , userChoice , computerchice)=>{
  if(userWin){
    console.log("you win   \n \n");
    msg.style.backgroundColor = " green";
    msg.innerText = ` you win!. your ${userChoice} beat  ${computerchice}`;
    msg.style.color = "white";
    msg.style.width = "580px";
    userScore++ ;
    userScorepara.innerText = userScore;
  }
  else{
    console.log("you lost \n \n")
    msg.style.backgroundColor = " red";
    msg.innerText = ` you lost!. ${computerchice} beats your ${userChoice}`;
    msg.style.color = "white";
    msg.style.width = "580px";
    compScore++;
    compScorepara.innerText = compScore;
  }
}
 const playGame=  (userChoice) =>{
  console.log("user choise = " , userChoice)

  const compChoice = gencompChoice()
  const options  = [ "rock" , "paper" , "scissor"];
  const randNo = Math.floor(Math.random()*3);
  const computerchice = `${options[randNo]}`
 console.log("computer  choise = ",computerchice);
  
  if (userChoice === computerchice)
  {
    drawGame()
  }
else{
  let userWin = true;
  if (userChoice === "rock"){
  //paper scissor
  userWin = computerchice === "paper" ? false  :true
}

else if(userChoice === "paper") 
{
  userWin = computerchice === "scissor" ? false : true
} 
else
 {
  //rock paper
  userWin = computerchice === " rock " ? false : true
 }
 showingwinner(userWin , userChoice , computerchice)
}}
choices.forEach((choice) =>{
  choice.addEventListener("click" , () => {
    const userChoice = choice.getAttribute("id")

    playGame(userChoice)
  })
}
)

let rst_btn = document.querySelector("#mybtn")

rst_btn.addEventListener("click" , ()=>{

  userScorepara.innerText = 0
  compScorepara.innerText = 0
  compScore = 0
  userScore = 0
  msg.innerText = "play your turn"
  msg.style.width = "340px"
  msg.style.backgroundColor = "black"
})