function solution(x, n) {
  var answer = [];
  let add_gap = x;
  // n번 반복
  for (let i = 0; i < n; i++) {
    answer.push(x); // 처음 배열에 넣을 x
    x += add_gap; // x를 배열에 넣은 후 x값을 add_gap만큼 증가
  }
  return answer;
}