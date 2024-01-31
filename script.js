let gameboard = (function () {

    let gameboard = [['', '', ''], ['', '', ''], ['', '', '']];
    let xTurn=true;
    let sign ='x';

    let table=document.querySelectorAll('.gameboard>*');
    

    function player(name) {
        let score = 0;
        return {
            getScore: function() { console.log(score); },
            addScore: function() { score++; }
        }
    }
    
    let p1=player('afshin');
    let p2=player('maryam');

    let setPawn = function (row, col, sign) {
        if(gameboard[row][col] === ''){
            gameboard[row][col] = sign;
            _changeTurn();
            _showGameboard();
            if(_checkWin('x')){
                p1.addScore();
            }
            else if(_checkWin('o')){
                p2.addScore();
            }
        }
    }

    for (let i = 0 , c=0 ; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            table[c].addEventListener('click',function(){
                setPawn(i,j,sign)
            })
            c++;
        }
    }

    let _changeTurn=function(){
        xTurn=!xTurn;
        if(xTurn){
            sign='x';
        }
        else{
            sign='o';
        }
    }

    let _showGameboard = function () {
        console.table(gameboard);
        _render();
    }

    let _checkWin = function (sign) {

        //check rows
        for (let i = 0; i < 3; i++) {
            if (gameboard[i][0] === sign && gameboard[i][1] === sign && gameboard[i][2] === sign) {
                _emptyGameboard();
                return true;
            }
        }

        //check cols
        for (let i = 0; i < 3; i++) {
            if (gameboard[0][i] === sign && gameboard[1][i] === sign && gameboard[2][i] === sign) {
                _emptyGameboard();
                return true;
            }
        }

        //check diag
        if (gameboard[0][0] === sign && gameboard[1][1] === sign && gameboard[2][2] === sign) {
            _emptyGameboard();
            return true;
        }
        else if (gameboard[0][2] === sign && gameboard[1][1] === sign && gameboard[2][0] === sign) {
            _emptyGameboard();
            return true;
        }

    }

    let _emptyGameboard = function () {
        gameboard = [['', '', ''], ['', '', ''], ['', '', '']];
    }

    let _render=function(){
        
        for (let i = 0 , c=0 ; i < 3; i++) {
            for (let j = 0; j < 3; j++) {
                table[c].textContent=gameboard[i][j];
                c++;
                console.log(table[c]);
            }
        }
    }

})();




