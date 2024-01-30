let gameboard = (function () {

    let gameboard = [['', '', ''], ['', '', ''], ['', '', '']];
    let lastSign='';

    let setPawn = function (row, col, sign) {
        if(_checkTurn(sign)){
            if (gameboard[row][col] === '') {
                gameboard[row][col] = sign === 'o' ? 'o' : 'x';
                _checkWin(sign);
            }
            _showGameboard();
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
                console.log(sign + ' wins');
                _emptyGameboard();
            }
        }

        //check cols
        for (let i = 0; i < 3; i++) {
            if (gameboard[0][i] === sign && gameboard[1][i] === sign && gameboard[2][i] === sign) {
                console.log(sign + ' wins');
                _emptyGameboard();
            }
        }

        //check diag
        if (gameboard[0][0] === sign && gameboard[1][1] === sign && gameboard[2][2] === sign) {
            console.log(sign + ' wins');
            _emptyGameboard();
        }
        else if (gameboard[0][2] === sign && gameboard[1][1] === sign && gameboard[2][0] === sign) {
            console.log(sign + ' wins');
            _emptyGameboard();
        }

    }

    let _emptyGameboard = function () {
        gameboard = [['', '', ''], ['', '', ''], ['', '', '']];
    }

    return { setPawn };
})();

let player = (function () {
    let name;
    let sign;
    let score = 0;
    let setName = function (name) {
        this.name = name;
    }
    let setSign = function (sign) {
        this.sign = sign;
    }
    let addScore = function () {
        this.score++;
    }
    let getScore = function () {
        return this.score;
    }

    return { setName, setSign, addScore, getScore };
})();

