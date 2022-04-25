//https://github.com/codeisneverodd/programmers-coding-test
//더 좋은 풀이가 존재할 수 있습니다.
//정답 1(🎩 refactor 220425) - codeisneverodd
function solution(arr) {
  return arr.filter((element, index) => element !== arr[index + 1]);
}

//정답 2 - codeisneverodd
function solution(arr) {
  var answer = [arr[0]];
  for (let i = 1; i < arr.length; i++) {
    //arr를 수정하면(shift해서 사용하면) 효율성 테스트에서 미통과됩니다.
    answer[answer.length - 1] !== arr[i] ? answer.push(arr[i]) : null;
  }
  return answer;
}
