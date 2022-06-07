// Given an m x n grid of characters board and a string word, return true if word exists in the grid.

// The word can be constructed from letters of sequentially adjacent cells, where adjacent cells are horizontally or vertically neighboring. The same letter cell may not be used more than once.

// Example 1:

// Input: board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "ABCCED"
// Output: true

// Example 2:

// Input: board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "SEE"
// Output: true

// Example 3:


// Input: board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "ABCB"
// Output: false
 
// Constraints:

// m == board.length
// n = board[i].length
// 1 <= m, n <= 6
// 1 <= word.length <= 15
// board and word consists of only lowercase and uppercase English letters.

const wordSearch = (board, word) => {
    const rows = board.length;
    const cols = board[0].length;

    const checkNeighborChars = (x, y, word) => {
        // got to the end means we found a correct path
        if (word.length <= 0) { 
            return true;
        }
        if (x < 0 || x >= rows || y < 0 || y >= cols || board[x][y] !== word[0]) {
            return false;
        }

        const currentChar = board[x][y];
        const newWord = word.substring(1);
        
        board[x][y] = 0; // mark our path so we dont go back and forth

        const result = checkNeighborChars(x + 1, y, newWord) || checkNeighborChars(x - 1, y, newWord) || checkNeighborChars(x, y + 1, newWord) || checkNeighborChars(x, y -1, newWord);

        board[x][y] = currentChar; // reset our board

        return result;
    }

    for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
            if(board[row][col] === word[0]) {
                if(checkNeighborChars(row, col, word)) {
                    return true;
                }
            }
        }
    }
    return false;
}

console.log(wordSearch([["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], "ABCCED"));
console.log(wordSearch([["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], "SEE"));
console.log(wordSearch([["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], "ABCB"));