
const gameBoard = (() => {
    //a gameboard has 3 boxes that can be clicked
   

    function boardRow(num){
        let clicked = false;
        const boxRow =[num,num+1,num+2];

        function click(){
            clicked = true;
        }
        
        return {boxRow,click};        
    }
    // board contains the 9 box
    const board = [];
    
function createBoard(){
    

        for(let i = 1; i<=3; i++){
                
             
                if(i === 1){  
                    total = 0;  
                }
            else if(i===2){
                    total =2;
                }else{
                    total = 4;  
                }
                total+=i;
                board.push(boardRow(total));
            }
}
function updateBoard(num){
    console.log(gameBoard.getBoard()[2].boxRow[2]);
    for(box in gameBoard.getBoard().boxRow){
    
    }
}   
function getBoard(){
    return board;

}
// starting game
    const startGame = createBoard();
    // console.log(startGame.getBoardRow());


    return {updateBoard, getBoard};
})();





const player = (number) =>{
    
}

const displayController = (() =>{
    let winner;
    

})();


gameBoard.updateBoard(1);







