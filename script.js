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
        
        for (let j = 0, i = 0; j <= 3; j++) {
            if(gameboard[i][j]===sign && gameboard[i][j+1]===sign && gameboard[i][j+2]===sign){
                console.log(sign+' wins');
            }
            else if(gameboard[i][j]===sign && gameboard[i+1][j]===sign && gameboard[i+2][j]===sign){
                console.log(sign+' wins');
            }
            else if(gameboard[i][j]===sign && gameboard[i+1][j+1]===sign && gameboard[i+2][j+2]===sign){
                console.log(sign+' wins');
            }
        }
        
    }

    return {setPawn};
})();

let players=(function(){
    
})();

