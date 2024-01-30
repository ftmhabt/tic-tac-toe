let gameboard=(function(){
    let gameboard=[['','',''],['','',''],['','','']];

    let setPawn=function(row,col,sign){
        if(gameboard[row][col]===''){
            gameboard[row][col]=sign==='o'?'o':'x';
            checkWin(sign);
        }
        showGameboard();
    }

    let showGameboard=function(){
        console.table(gameboard);
    }

    let checkWin=function(sign){

        //check rows
        for(let i = 0; i <= 3; i++){
            if(gameboard[i][0]===sign && gameboard[i][1]===sign && gameboard[i][2]===sign){
                console.log(sign+' wins');
                emptyGameboard();
            }       
        }

        //check cols
        for(let i = 0; i <= 3; i++){
            if(gameboard[0][i]===sign && gameboard[1][i]===sign && gameboard[2][i]===sign){
                console.log(sign+' wins');
                emptyGameboard();
            }       
        }
        
        //check diag
        if(gameboard[0][0]===sign && gameboard[1][1]===sign && gameboard[2][2]===sign){
            console.log(sign+' wins');
            emptyGameboard();
        }
        else if(gameboard[0][2]===sign && gameboard[1][1]===sign && gameboard[2][0]===sign){
            console.log(sign+' wins');
            emptyGameboard();
        }        
        
    }

    let emptyGameboard=function(){
        gameboard=[['','',''],['','',''],['','','']];
    }

    return {setPawn};
})();

let players=(function(){
    
})();

