//https://github.com/codeisneverodd/programmers-coding-test
//더 좋은 풀이가 존재할 수 있습니다.
//정답 1(🎩 refactor 220425) - codeisneverodd
function solution(s) {
  return s.search(/\D/g) < 0 && (s.length === 4 || s.length === 6);
}

//정답 2 - yongchanson
function solution(s) {
  let parseInts = parseInt(s);
  if (s.length == 6 || s.length == 4) {
    if (s == parseInts) {
      return true;
    }
  }

  return false;
}

//정답 3 - prove-ability
function solution(s) {
  var answer = true;
  // 문자열 s의 길이가 4 혹은 6이고
  if (s.length === 4 || s.length === 6) {
    for (let i = 0, len = s.length; i < len; i++) {
      // 숫자로만 구성돼있는지 확인
      if (!Number.isInteger(parseInt(s[i], 10))) return false;
    }
    // 문자열 s의 길이가 4 혹은 6 가 아니라면 false
  } else return false;

  return answer;
}

//정답 4 - chaerin-dev
function solution(s) {
  // 길이가 4 혹은 6이 아니면 false 반환
  if (s.length !== 4 && s.length !== 6) return false;
  // 각 자리중에 숫자가 아닌 것이 하나라도 있으면 false 반환
  for (let i = 0; i < s.length; i++) {
    if (isNaN(Number(s[i]))) return false;
  }
  // 위의 모든 조건에 포함되지 않으면
  // (길이가 4 혹은 6이고, 숫자로만 구성되어 있으면) true 반환
  return true;
}

//정답 5 - soulhn
function solution(s) {
  if (s.length !== 4 && s.length !== 6) return false;
  return !s.split("").some((i) => isNaN(parseInt(i, 10))); 
   //early return 제외사항 먼저 처리
  //.split 문자열 배열로 변환, .some을 이용하여 isNaN인지 판별, ! 사용하여 문제 조건에 맞게 반환
}
