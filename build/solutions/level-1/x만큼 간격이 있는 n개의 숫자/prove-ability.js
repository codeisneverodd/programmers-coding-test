function solution(x, n) {
  var answer = [];
  let i = 1;
  // n개 지니는 리스트를 리턴해야 합니다
  while (answer.length !== n) {
    // x부터 시작해 x씩 증가하는 숫자
    answer.push(x * i);
    i++;
  }
  return answer;
}