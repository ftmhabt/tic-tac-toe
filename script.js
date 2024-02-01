let game = (function () {

    let gameboard = [['', '', ''], ['', '', ''], ['', '', '']];
    let xTurn = true;
    let sign = 'x';
    let p1;
    let p2;

    let table = document.querySelectorAll('.gameboard>*');

    let p1input = document.querySelector('input#player1');
    let p2input = document.querySelector('input#player2');
    let startBtn = document.querySelector('.start');
    let p1display = document.querySelector('#player-name1');
    let p2display = document.querySelector('#player-name2');

    let p1score = document.querySelector('#player-score1');
    let p2score = document.querySelector('#player-score2');


    let getPlayerName = function () {
        p1display.textContent = p1input.value;
        p2display.textContent = p2input.value;
        p1 = player(p1input.value);
        p2 = player(p2input.value);
    }

    startBtn.addEventListener('click', getPlayerName);

    let getPlayerScore =function(){
        p1score.textContent=p1.getScore();
        p2score.textContent=p2.getScore();
    }

    function player(name) {
        let score = 0;
        return {
            getScore: function () { return score; },
            addScore: function () { score++; }
        }
    }

    let _setPawn = function (row, col, sign) {
        if (gameboard[row][col] === '') {
            gameboard[row][col] = sign;
            _changeTurn();
            _render();
            if (_checkWin('x')) {
                p1.addScore();
                _emptyGameboard();
                getPlayerScore();
            }
            else if (_checkWin('o')) {
                p2.addScore();
                _emptyGameboard();
                getPlayerScore();
            }
        }
    }

    // eventlistener
    for (let i = 0, c = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            table[c].addEventListener('click', function () {
                _setPawn(i, j, sign);
            })
            c++;
        }
    }

    let _changeTurn = function () {
        xTurn = !xTurn;
        if (xTurn) {
            sign = 'x';
        }
        else {
            sign = 'o';
        }
    }

    let _checkWin = function (sign) {

        //check rows
        for (let i = 0; i < 3; i++) {
            if (gameboard[i][0] === sign && gameboard[i][1] === sign && gameboard[i][2] === sign) {
                return true;
            }
        }

        //check cols
        for (let i = 0; i < 3; i++) {
            if (gameboard[0][i] === sign && gameboard[1][i] === sign && gameboard[2][i] === sign) {
                return true;
            }
        }

        //check diag
        if (gameboard[0][0] === sign && gameboard[1][1] === sign && gameboard[2][2] === sign) {
            return true;
        }
        else if (gameboard[0][2] === sign && gameboard[1][1] === sign && gameboard[2][0] === sign) {
            return true;
        }

    }

    let _emptyGameboard = function () {
        gameboard = [['', '', ''], ['', '', ''], ['', '', '']];
    }

    let _render = function () {

        for (let i = 0, c = 0; i < 3; i++) {
            for (let j = 0; j < 3; j++) {
                table[c].textContent = gameboard[i][j];
                c++;
                console.log(table[c]);
            }
        }
    }

})();


