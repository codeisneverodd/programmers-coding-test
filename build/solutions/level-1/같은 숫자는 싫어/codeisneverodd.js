function solution(arr) {
  var answer = [arr[0]];
  for (let i = 1; i < arr.length; i++) {
    //arr를 수정하면(shift해서 사용하면) 효율성 테스트에서 미통과됩니다.
    answer[answer.length - 1] !== arr[i] ? answer.push(arr[i]) : null;
  }
  return answer;
}