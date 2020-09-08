
// You should implement your task here.

module.exports = function towelSort(matrix) {
  if (!matrix || matrix.length === 0) return [];
  return matrix.map((item, index) => {
    if (index === 0 || index % 2 === 0) {
      return item.sort((a, b) => 1);
    } else {
      return item.sort((a, b) => -1);
    }
  }).flat();
}
