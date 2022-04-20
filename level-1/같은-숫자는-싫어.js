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

// 정답 4 - prove-ability
function solution(arr) {
    let answer = [];
    // 이중 배열을 사용해서 포인터?를 두 개를 사용한다
    for (let i = 0, len = arr.length - 1; i < len; i++) {
        // i 의 다음수를 비교하기 위해 j = (i + 1)
        for (let j = i + 1, len = arr.length; j < len; j++) {
            // i 와 j 번째 값이 같이 않다면
            if (arr[i] !== arr[j]) {
                answer.push(arr[i]);
                i = j - 1;
                break;
            }
        }
    }
    answer.push(arr[arr.length - 1]);
    return answer;
}
