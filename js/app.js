/*-------------------------------- Constants --------------------------------*/

const winningCombos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];



/*---------------------------- Variables (state) ----------------------------*/
let board = ['', '', '', '', '', '', '', '', '']
let turn
let winner
let tie


/*------------------------ Cached Element References ------------------------*/

const resetBtnEl = document.querySelector('#reset')
console.log(resetBtnEl)

const squareEls = document.querySelectorAll('.sqr')
console.log(squareEls)
console.dir(squareEls)
squareEls[5]

const messageEl = document.querySelector('#message')
console.log(messageEl)



/*-------------------------------- Functions --------------------------------*/

function init() {
    board = ['', 'X', '', '', '', '', '', '', ''];
    turn = 'X';// this will represent player X //
    winner = false;
    tie = false;
    render;
    console.log('Initialization tasks are being performed.');
}

function render() {
    updateBoard;
    updateMessage;
}

// take square node list, and one by one board array index is assigned. unsure why re styling???
function updateBoard() {
    board.forEach((square, index) => {
        squareEls[index]
        if (board[index] == 'X') {
            squareEls[index].innerHTML = "X";
        } else if (board[index] === '0') {
            squareEls[index].innerHTML = "0";
        } else {
            squareEls[index].innerHTML = " "
        }
    })
};

function updateMessage() {
    if (winner === false && tie === false && turn === 'X')
        return 'Player 0s turn';
    if (winner === false && tie === false && turn === '0')
        return 'Player Xs turn';
    if (winner === false && tie === true)
        return 'Its a tie'
    if (winner === true && tie === false && turn === 'X')
        return 'Player Xs wins';
    if (winner === true && tie === false && turn === '0')
        return 'Player 0s wins';

}


function handleClick(event) {
    console.log(board)
    console.log(event)
    let squareIndex = event.target.id
    if (board[squareIndex] === 'X' || board[squareIndex] === '0')
        return
    if (winner === true)
        return
    placePiece(squareIndex)
    checkForWinner
    checkForTie
    switchPlayer
    render
}

function placePiece(index) {
    board[index] = turn
}


function checkForWinner() {
    winningCombos.forEach(onecombo => {
        console.log(onecombo)
        const pos1 = board[onecombo[0]];
        const pos2 = board[onecombo[1]];
        const pos3 = board[onecombo[2]];
        console.log(pos1)

        if (pos1 !== "" && pos2 === pos1 && pos3 === pos1) {
           return winner = true
        }
        console.log(winner)
    })
}


console.log(board)

const tieBreak = board.some(square => {
    return square === " ";
})

console.log(tieBreak)

function checkForTie() {
    return tieBreak
}

function switchPlayer() {
    if (winner === true) {
        return
    }
    if (winner === false && turn === 'X') {
        turn = '0'
        console.log('Its player 0s turn now!')
    }
    if (winner === false && turn === '0') {
        turn = 'X'
        console.log('Its player Xs turn now!')
    }

}
console.log(squareEls[5].textContent)

/*----------------------------- Event Listeners -----------------------------*/

squareEls.forEach(square => {
    square.addEventListener('click', handleClick)
}
)

resetBtnEl.addEventListener('click', init)


