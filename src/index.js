// You should implement your task here.

module.exports = function towelSort(matrix) {
    if (!matrix) return [];

    let concatArr = [];
    for (let i = 0; i < matrix.length; i++) {
        if (i % 2 === 0) {
            concatArr = concatArr.concat(matrix[i]);
        } else {
            concatArr = concatArr.concat(matrix[i].reverse());
        }
    }

    return concatArr;
};
