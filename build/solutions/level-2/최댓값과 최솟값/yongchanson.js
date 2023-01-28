function solution(s) {
  let arr = s.split(" ").sort((a, b) => a - b);
  arr.splice(1, arr.length - 2, " ");
  let result = arr.join("");
  return result;
}