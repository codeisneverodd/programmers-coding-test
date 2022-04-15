//https://github.com/codeisneverodd/programmers-coding-test
//완벽한 정답이 아닙니다.
//정답 1 - codeisneverodd
function solution(strings, n) {
    var answer = [];
    answer = strings.sort((a, b) => {
        if (a[n] < b[n]) return -1
        if (a[n] > b[n]) return 1
        if (a[n] == b[n]) return a < b ? -1 : 1
        return 0
    })
    return answer;
}

//정답 2 - chaerin-dev
function solution(strings, n) {
  return strings.sort((a, b) => {
    // 인덱스 n번째 글자를 기준으로 오름차순 정렬
    if (a[n] > b[n]) return 1;
    else if (a[n] < b[n]) return -1;
    // 인덱스 n번째 글자가 같으면 사전순 정렬
    else return a > b ? 1 : -1;
  });
}
