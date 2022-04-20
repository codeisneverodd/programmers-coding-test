//https://github.com/codeisneverodd/programmers-coding-test
//완벽한 정답이 아닙니다.
//정답 1 - codeisneverodd
function solution(arr) {
    var answer = [];
    answer = arr.filter((element, index) => element !== arr[index + 1])
    return answer;
}

//정답 2 - codeisneverodd
function solution(arr) {
    var answer = [arr[0]];
    for (let i = 1; i < arr.length; i++) {//arr를 수정하면(shift해서 사용하면) 효율성 테스트에서 미통과됩니다.
        answer[answer.length - 1] !== arr[i] ? answer.push(arr[i]) : null
    }
    return answer;
}

//정답 3 - chaerin-dev
function solution(arr) {
  // 콜백함수의 조건을 만족하는 '모든' 값을 배열로 반환하고,
  // 조건을 만족하는 값이 없으면 빈 배열을 반환하는 filter 메서드 활용
  // 첫 번째 요소의 경우 undefined와 비교
  return arr.filter((item, index) => item !== arr[index - 1]);
}
