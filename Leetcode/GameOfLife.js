// According to Wikipedia's article: "The Game of Life, also known simply as Life, is a cellular automaton devised by the British mathematician John Horton Conway in 1970."

// The board is made up of an m x n grid of cells, where each cell has an initial state: live (represented by a 1) or dead (represented by a 0). Each cell interacts with its eight neighbors (horizontal, vertical, diagonal) using the following four rules (taken from the above Wikipedia article):

// Any live cell with fewer than two live neighbors dies as if caused by under-population.
// Any live cell with two or three live neighbors lives on to the next generation.
// Any live cell with more than three live neighbors dies, as if by over-population.
// Any dead cell with exactly three live neighbors becomes a live cell, as if by reproduction.
// The next state is created by applying the above rules simultaneously to every cell in the current state, where births and deaths occur simultaneously. Given the current state of the m x n grid board, return the next state.

// Example 1:

// Input: board = [[0,1,0],[0,0,1],[1,1,1],[0,0,0]]
// Output: [[0,0,0],[1,0,1],[0,1,1],[0,1,0]]

// Example 2:

// Input: board = [[1,1],[1,0]]
// Output: [[1,1],[1,1]]

// Constraints:

// m == board.length
// n == board[i].length
// 1 <= m, n <= 25
// board[i][j] is 0 or 1.
 
// Follow up:

// Could you solve it in-place? Remember that the board needs to be updated simultaneously: You cannot update some cells first and then use their updated values to update other cells.
// In this question, we represent the board using a 2D array. In principle, the board is infinite, which would cause problems when the active area encroaches upon the border of the array (i.e., live cells reach the border). How would you address these problems?

// O(1) space in-place solution (instead of creating a copy of the board)
const gameOfLife = (board) => {
    const rows = board.length;
    const cols = board[0].length;
    const neighbors = [[-1, -1], [-1, 0], [-1, 1], [0, -1], [0, 1], [1, -1], [1, 0], [1, 1]];
    const isInRange = (x, y, rows, cols) => (x >= 0 && x < rows && y >= 0 && y < cols);

    for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
            let liveNeighbors = 0;
            for (let [x, y] of neighbors) {
                const neighborRow = row + x;
                const neighborCol = col + y;
                // Check the validity of the neighboring cell and if it was originally a live cell
                if (isInRange(neighborRow, neighborCol, rows, cols) && Math.abs(board[neighborRow][neighborCol]) === 1) {
                    liveNeighbors += 1;
                }
            }

            if (board[row][col] === 1 && (liveNeighbors < 2 || liveNeighbors > 3)) {
                board[row][col] = -1;
            } else if (board[row][col] === 0 && liveNeighbors === 3) {
                board[row][col] = 2;
            }
        }
    }

    // Get the final representation for the newly updated board.
    for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
            if (board[row][col] > 0) { // Check if it's 1 or 2 (live or dead to live)
                board[row][col] = 1;
            } else { // Check if it's 0 or -1 (Dead or live to dead)
                board[row][col] = 0;
            }
        }
    }

    return board;
}

console.log(gameOfLife([[0,1,0],[0,0,1],[1,1,1],[0,0,0]])); // [[0,0,0],[1,0,1],[0,1,1],[0,1,0]]
console.log(gameOfLife([[1,1],[1,0]])); // [[1,1],[1,1]]