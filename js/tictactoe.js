// I have a gameBoard Module
// gameBoard.createBoard() --> creates an array from 0 to 8 representing the 9 boxes in tic tac toe
//   each box is represented within gameBoard module by a boardRow Object 
// so gameBoard.getBoard()[0] returns a boardBox. 
// Each boardBox is a corner in tictactoe that can be setClickTrue();
// so gameBoard.getBoard()[0].setClickTrue();
// get the Board current results with gameBoard.getBoard();

const displayController = (() =>{
    //need to alternate between characters
    var turn = 1;

const gameBoard = (() => {
    //a gameboard has 3 boxes that can be clicked
   

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
    const board = [];
    
function createBoard(){
    
    for(let o =1; o<=3;o++)
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
function updateBoard(num,player){
    

        gameBoard.getBoard()[num].setClickTrue(player);


    
}   
function getBoard(){
    return board;

}

function restart(){

    let ticButtons = document.querySelectorAll('button');
   
    for(let i = 0; i<9; i++){
        
        board.pop();
     
    }
    for(const ticButton of ticButtons){
        ticButton.textContent='';
    }
    turn=1;
    playerTwoHTML.classList.remove('active');
    playerOneHTML.classList.add('active');
    createBoard();

    
}
// starting game
    
    // console.log(startGame.getBoardRow());


    return {updateBoard, getBoard, createBoard,restart};
})();







const player = (number) =>{
    if(number === 1){
        var shape = 'O';
    }
    else {
        shape = 'X';
    }
    const playerNumber = shape;
    console.log(playerNumber);
    function getPlayerNumber(){
        return playerNumber;
    }
    
    return {getPlayerNumber};
}


//players and board initiated 
const player1 = player(1);
const player2 = player(2);
gameBoard.createBoard();

 
let ticButtons = document.querySelectorAll('button');
let playerOneHTML = document.getElementById("one");
let playerTwoHTML = document.getElementById("two");

let restartButton = document.querySelector('.restart');
//UPDATES BOARD UPON CLICK OF BUTTONS IN BROWSER. 
for(const ticButton of ticButtons)
ticButton.addEventListener('click',e =>{
    playerOneHTML.classList.remove('active');
    playerTwoHTML.classList.remove('active');
    var num=  ticButton.id
    if(gameBoard.getBoard()[num].getClicked()){
        console.log(gameBoard.getBoard()[num].getClicked());
        turn--;
    }

   else if((turn % 2) === 0){
    
    gameBoard.updateBoard(num,player1.getPlayerNumber());
    ticButton.textContent = player1.getPlayerNumber();
    playerOneHTML.classList.add('active');
     }
    else{
        
        gameBoard.updateBoard(num,player2.getPlayerNumber());
        ticButton.textContent = player2.getPlayerNumber();
        playerTwoHTML.classList.add('active');
    }
    turn++;
    ticButton.classList.add('clicked');
    console.log(turn);
    if(turn === 10){
        setTimeout(() => {
            gameBoard.restart()
        },1000);
        turn =1;
    }
});

// determine winner

if(turn >=3){
    for(let i =0;i<=9;i++){
        

    }
}

restartButton.addEventListener('click', e =>{
gameBoard.restart();
    
});






})();