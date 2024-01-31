let gameboard = (function () {

    let gameboard = [['', '', ''], ['', '', ''], ['', '', '']];
    let lastSign='';

    let setPawn = function (row, col, player) {
        if(gameboard[row][col] === ''){
            if (_checkTurn(player.sign)) {
                gameboard[row][col] = player.sign === 'o' ? 'o' : 'x';
                _showGameboard();
                if(_checkWin(player.sign)){
                    player.score++;
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

let players = (function () {
    
    let players=[];
    
    let setPlayer = function (name,sign) {
        players.push({name,sign,score:0});
        return players.length-1;
    }

    let getPlayer=function(index){
        return players[index];
    }

    return { getPlayer,setPlayer };
})();

let p1=players.setPlayer('afshin','x');
let p2=players.setPlayer('maryam','o');

gameboard.setPawn(0,1,players.getPlayer(p1));
gameboard.setPawn(1,0,players.getPlayer(p2));
gameboard.setPawn(0,2,players.getPlayer(p1));
gameboard.setPawn(2,0,players.getPlayer(p2));
gameboard.setPawn(0,0,players.getPlayer(p1));


gameboard.setPawn(2,0,players.getPlayer(p2));
gameboard.setPawn(0,2,players.getPlayer(p1));
gameboard.setPawn(1,0,players.getPlayer(p2));
gameboard.setPawn(0,0,players.getPlayer(p1));
gameboard.setPawn(1,1,players.getPlayer(p2));
gameboard.setPawn(0,1,players.getPlayer(p1));


