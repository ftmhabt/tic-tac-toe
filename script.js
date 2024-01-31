let gameboard = (function () {

    let gameboard = [['', '', ''], ['', '', ''], ['', '', '']];
    let lastSign='';

    let setPawn = function (row, col, player) {
        if(gameboard[row][col] === ''){
            if (_checkTurn(player.getSign())) {
                gameboard[row][col] = player.getSign() === 'o' ? 'o' : 'x';
                _showGameboard();
                if(_checkWin(player.getSign())){
                    player.addScore();
                }
            }
        }
        
    }

    let _checkTurn=function(sign){

        if(lastSign!==sign){

            lastSign=sign;
            return true;
        }
        else{
            return false;
        }
    }

    let _showGameboard = function () {
        console.table(gameboard);
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

    return { setPawn };
})();

function player(name, sign) {
    let score = 0;

    return {
        getSign: function() { return sign; },
        getScore: function() { return score; },
        addScore: function() { score++; },
        getName: function() { return name; }
    }
}

let p1=player('afshin','x');
let p2=player('maryam','o');

gameboard.setPawn(0,1,p1);
gameboard.setPawn(1,0,p2);
gameboard.setPawn(0,2,p1);
gameboard.setPawn(2,0,p2);
gameboard.setPawn(0,0,p1);


gameboard.setPawn(2,0,p2);
gameboard.setPawn(0,2,p1);
gameboard.setPawn(1,0,p2);
gameboard.setPawn(0,0,p1);
gameboard.setPawn(1,1,p2);
gameboard.setPawn(0,1,p1);


