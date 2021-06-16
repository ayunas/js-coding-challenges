function maxAreaOfIsland(grid) {
    //def island : consecutive 1's horizontally or vertically
    //area == total tab of 1's
    //matrix == array of arrays. 
    //search through each array in the matrix.  if finding a 1, increment an islandArea counter. 
    //additionally store the index position of that 1 in an object literal.
    //search through next array.  if finding a 1, check to see if the index position is matching in the island index object literal.  if it is, increment the islandArea. then check for any subsequent 1s in that row.   If not, break, the loop because there is no more potential islands.  
    let g=0;

    //search through each array in the matrix.  if finding a 1, increment a islandArea counter. 

    findConsecutiveOnes(grid[g]);
    firstOne()

    while(g < grid.length) {
        const row = grid[g];
        
    }


}

const findConsecutiveOnes = row => {
    console.log(row);
    const onesCount =  row.reduce((ones,num) => num == 1 ? ones + 1 : ones, 0);
    return onesCount;
}

const firstOne = (row) => {
    return row.findIndex(o => o === 1);
}

module.exports = {
    findConsecutiveOnes,
    firstOne
}

