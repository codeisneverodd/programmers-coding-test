function solution(n) {
  let answer = [];
  let string = n.toString();
  for (let i = string.length - 1; i >= 0; i--) {
    let slice = string.substr(i, 1) * 1;
    answer.push(slice);
  }
  return answer;
}
