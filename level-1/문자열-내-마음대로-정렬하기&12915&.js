//https://github.com/codeisneverodd/programmers-coding-test
//더 좋은 풀이가 존재할 수 있습니다.
//정답 1(🎩 refactor 220425) - codeisneverodd
function solution(strings, n) {
  return strings.sort((a, b) => {
    if (a[n] < b[n]) return -1;
    if (a[n] > b[n]) return 1;
    if (a[n] === b[n]) return a < b ? -1 : 1;
    return 0;
  });
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

// 정답 3 - prove-ability
function solution(strings, n) {
  // 정렬
  strings.sort((a, b) => {
      // n번째 클자가 같다면 사전순
      if(a[n].charCodeAt() === b[n].charCodeAt()) {
          return a > b ? 1 : -1;
      } else return a[n].charCodeAt() - b[n].charCodeAt();
  });
  
  return strings;
}
