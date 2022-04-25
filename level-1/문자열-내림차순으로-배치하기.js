//https://github.com/codeisneverodd/programmers-coding-test
//완벽한 정답이 아닙니다.
//정답 1 - codeisneverodd
function solution(s) {
    var answer = '';
    answer = s.split('').sort((a, b) => {
        if (a < b) return 1
        if (a > b) return -1
        return 0
    }).join('')
    return answer;
}

//정답 2 - chaerin-dev
function solution(s) {
  // 문자열 -> 배열 -> 정렬 -> 순서뒤집기 -> 문자열
  return s.split("").sort().reverse().join("");
}

//정답 3 - chaerin-dev
function solution(s) {
  return s.split("").sort((a, b) => (a < b ? 1 : -1)).join("");
}

//정답 4 - prove-ability
function solution(s) {
  return s.split("").sort().reverse().join("")
}

//정답 5 - jaewon1676
function solution(s) {
  return s.split('').sort().reverse().join('')
}
// split('')은 문자열을 하나씩 쪼개주면서 타입을 배열로 변환시켜줍니다.
// 그러면 문자열 타입이 배열이 되므로 정렬을 할 수 있습니다.
// sort()는 오름차순이기때문에 다시 뒤집어서 합쳐줍니다.
