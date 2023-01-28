function solution(arr) {
  const index = arr.indexOf(Math.min(...arr));
  arr.splice(index, 1);
  return arr.length === 0 ? [-1] : arr;
}