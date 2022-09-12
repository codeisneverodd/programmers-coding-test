//https://github.com/codeisneverodd/programmers-coding-test
//더 좋은 풀이가 존재할 수 있습니다.
//정답 1(🎩 refactor 220425) - codeisneverodd
function solution(arr) {
  return arr.reduce((acc, curr) => acc + curr) / arr.length;
}

//정답 2 - jaewon1676
function solution(arr) {
  var answer = 0;
  for (var i = 0; i < arr.length; i++) {
    answer += arr[i];
  }
  return answer / arr.length;
}

//정답 3 - chaerin-dev
function solution(arr) {
  // arr의 모든 요소를 sum에 더힘
  let sum = arr.reduce((sum, e) => sum + e);
  // sum을 arr의 요소의 갯수로 나눈 후 반환
  return sum / arr.length;
}

// 정답 4 - prove-ability
function solution(arr) {
  var answer = 0;
  arr.forEach((num) => {
    answer += num;
  });
  return answer / arr.length;
}
