// I have a gameBoard Module
// gameBoard.createBoard() --> creates an array from 0 to 8 representing the 9 boxes in tic tac toe
//   each box is represented within gameBoard module by a boardRow Object 
// so gameBoard.getBoard()[0] returns a boardBox. 
// Each boardBox is a corner in tictactoe that can be setClickTrue();
// so gameBoard.getBoard()[0].setClickTrue();
// get the Board current results with gameBoard.getBoard();

const displayController = (() =>{
    //need to alternate between characters
    let turn = 0;
    let bodyHTML = document.querySelector('.winnertext');
    function findActiveLine(){
        let winnerFound = false;
        let numberofwinsOne = document.querySelector('.numberofwinsone');
        let numberofwinsTwo = document.querySelector('.numberofwinstwo');
        const playerOneHolder = [];
        const playerTwoHolder = [];
        
        for(let i = 0; i <9; i++){   
            if(gameBoard.getBoard()[i].getPlayerNum() === 'X'){
                if(gameBoard.getBoard()[i].getClicked())
                playerOneHolder.push(i);

            }
            else if(gameBoard.getBoard()[i].getPlayerNum() === 'O'){
                if(gameBoard.getBoard()[i].getClicked())
                playerTwoHolder.push(i);
            }    } 
            
                // CHECKS IF WON in findWinner 
            if(findWinner(playerOneHolder)){
                bodyHTML.classList.add('result');
                player1.isWinner(); 
             
                numberofwinsOne.textContent =  `${player1.numberWins()}`;
                setTimeout(() => {
                    
                    bodyHTML.textContent ="";
                },1000);
                bodyHTML.textContent = "Player 1 is Winner!";
                winnerFound = true;
                gameBoard.restart();
               
            }
            else if(findWinner(playerTwoHolder)){
                bodyHTML.classList.add('result');
                player2.isWinner(); 
                numberofwinsTwo.textContent =  `${player2.numberWins()}`;
                setTimeout(() => {
                   
                    bodyHTML.textContent ="";
                },1000);
                bodyHTML.textContent = "Player 2 is Winner!";
                winnerFound = true;
                gameBoard.restart()
               
           
            }
            return winnerFound;
    
             
           
            // gameBoard.restart();
            }
           
  
const gameBoard = (() => {
    //a gameboard has 3 boxes that can be clicked
    const board = [];
   

    function boardBox(num,playerNum){
        let clicked = false;
        const boxRow =[num];
        var playerNum = 'O';
        function setClickTrue(player){
            clicked = true; 
            playerNum = player;

        }
        function getClicked(){
          
            return clicked;
        }
        function getPlayerNum(){
            return playerNum;
        }
        return {boxRow,setClickTrue,getClicked,getPlayerNum};        
    }
    // board contains the 9 box
 
function createBoard(){
   
    for(let o =1; o<=3;o++){
        for(let i = 0; i<3; i++){
                if(o === 1){  
                    total = 0;  
                }
            else if(o===2){
                    total =3;
                }else{
                    total = 6;  
                }
                total+=i;
                board.push(boardBox(total));
            }
        }
       
    }
function updateBoard(num,player){
        gameBoard.getBoard()[num].setClickTrue(player);
    }   
function getBoard(){
    
    return board;
  
}

function restart(){
    
    if((bodyHTML.textContent === "")){
        bodyHTML.textContent ="RESTARTING GAME!";
        bodyHTML.classList.add('result');
    }
    
    let ticButtons = document.querySelectorAll('button');
  
    for(let i = 0; i<9; i++){
        board.pop();
     
    }  
    setTimeout(() => {
   
    for(const ticButton of ticButtons){
        ticButton.textContent='';
        // ticButton.removeEventListener('click', playGame);
    }
  
    playerTwoHTML.classList.remove('active');
    playerOneHTML.classList.add('active');
    bodyHTML.textContent = "";
    bodyHTML.classList.remove('result');
},1000);
  
turn=0;

}
    return {board, updateBoard, getBoard, createBoard,restart};
})();


// END GAMEBOARD MODULE




const player = (number) =>{
    let shape;
    let ai= false;
    if(number === 1){
        shape = 'X';
    }
    else {
        shape = 'O';
    }
    let winner = false;
        let wins = 0;
    const playerNumber = shape;
  //basically x is 1 
    function getPlayerShape(){
        return playerNumber;
    }
    function isWinner(){
        winner= true;
        wins++;
    }
    function numberWins(){
        return wins;
    }
    function isAI(){
        return ai;
    }
    function setAI(){
        ai = true;
        // if(ai === false){
          
        // }
        // else ai = false;
         }

    function setHuman(){
        ai = false;
    }
    return {getPlayerShape,isWinner,numberWins,isAI,setAI,setHuman};


    
}


//players and board initiated 
const player1 = player(1);
const player2 = player(2);


 
let ticButtons = document.querySelectorAll('button');
let playerOneHTML = document.getElementById("one");
let playerTwoHTML = document.getElementById("two");

let restartButton = document.querySelector('.restart');
let vsAI = document.querySelector('.vsAI');
let vsHuman = document.querySelector('.vsHuman');
//UPDATES BOARD UPON CLICK OF BUTTONS IN BROWSER. 


for(const ticButton of ticButtons){

ticButton.addEventListener('click', playGame);



function playGame(){
    console.log(turn);
    if(turn === 0){
        console.log('created new gameBoard');
        gameBoard.createBoard();
        turn++
    }
if(bodyHTML.textContent === ""){
 
   
   let num = ticButton.id;

   
// if against AI

if(gameBoard.getBoard()[num].getClicked()){
  
}

  else if(player2.isAI()){
  
    updateCurrentGame(player1,num);

 
    
    if(findActiveLine()){
        turn = 0;
     
       

    } 
    else{
        num = findBox();
        ticButtonID = document.getElementById(`${num}`);
        updateCurrentGame(player2,num,ticButtonID);  
        
        if(findActiveLine()){
            turn = 0;
        
            console.log(turn);
        }
        
    }
  

   

  


 
   
} 

// if against human
else{
    if(gameBoard.getBoard()[num].getClicked()){
      
        turn--;
    }

  else if((turn % 2) === 0){
   
    updateCurrentGame(player2,num);
    
    }
   else{
    
    updateCurrentGame(player1,num);
      
   }
   turn++;
findActiveLine();
}




    
   if(turn === 10){
       setTimeout(() => {
           gameBoard.restart()
           console.log('no turns left');
       },1000);
       turn =0;
   }
  
}

function updateCurrentGame(player,num,ticButtonID){
    gameBoard.updateBoard(num,player.getPlayerShape());
    if(ticButtonID){  
        ticButtonID.textContent = player.getPlayerShape();
        ticButtonID.classList.add('clicked');
    }else{
        ticButton.textContent = player.getPlayerShape();
        ticButton.classList.add('clicked');
    }
   
   
    if(player.getPlayerShape() === 'X'){
        playerTwoHTML.classList.add('active');    
        playerOneHTML.classList.remove('active');
         
    }else{
        console.log('active');
        playerOneHTML.classList.add('active');  
        playerTwoHTML.classList.remove('active');
    }
}

function findBox(){
    let num = Math.floor(Math.random() * 9);

    while(gameBoard.getBoard()[num].getClicked()){
        num = Math.floor(Math.random() * 9);
       
 
    }

    return num;
}

}


function findWinner(playerHolder){
    for(let i = 0; i <7; i++){   
    //   checks row
        if((i%3) === 0 && playerHolder.includes(i) && 
        playerHolder.includes(i+1) && playerHolder.includes(i+2)){
            return true;
        }
        // checks col
        if(playerHolder.includes(i) && 
        playerHolder.includes(i+3) && playerHolder.includes(i+6)){
            return true;
        }
        // check diagonal
        if(playerHolder.includes(i) && 
        playerHolder.includes(i+4) && playerHolder.includes(i+8)){
            return true;
        }
        if(playerHolder.includes(2) && 
        playerHolder.includes(4) && playerHolder.includes(6)){
            return true;
        }
     
}     
}}

restartButton.addEventListener('click', e =>{
gameBoard.restart();
console.log("restart button clicked");

    
});

vsHuman.addEventListener('click', e =>{
    gameBoard.restart();
    console.log("restarting against Human");
 
    player2.setHuman();
    });
  
vsAI.addEventListener('click', e =>{
    gameBoard.restart();
    console.log("restarting against AI");
    player2.setAI();
        
    });


   



})();