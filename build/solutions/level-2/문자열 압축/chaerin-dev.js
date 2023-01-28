function solution(s) {
  // len: 압축 전 문자열 길이
  const len = s.length;
  // shortenLen: 압축 후 문자열 길이의 최솟값을 저장할 변수(압축 전 문자열 길이로 초기화)
  let shortenLen = len;

  // 문자열을 1개 단위, 2개 단위, ... 문자열 길이의 절반 단위로 잘라가며 압축 수행
  for (let i = 1; i <= len / 2; i++) {
    // cnt: 단위가 반복되는 횟수를 카운트할 변수
    let cnt = 1;
    // temp: 현재 단위 문자열을 임시로 저장해둘 변수
    let temp = s.slice(0, i);
    // shhortenS: 압축 후 문자열을 저장할 변수
    let shortenS = "";

    // 문자열을 i개 단위로 잘라가며 현재 단위 문자열과 일치하는지 판단
    for (let j = i; j < len; j += i) {
      // 현재 단위 문자열과 일치하면 단위가 반복되는 횟수 1 증가
      if (temp === s.slice(j, j + i)) cnt++;
      // 현재 단위 문자열과 일치하지 않으면
      else {
        // 압축 후 문자열에 단위가 반복되는 횟수와 단위를 이어붙이고
        if (cnt === 1) shortenS += temp;
        else shortenS += cnt + temp;

        // 단위가 반복되는 횟수는 다시 1로 초기화
        cnt = 1;
        // 현재 단위 문자열 업데이트
        temp = s.slice(j, j + i);
      }
    }

    // 반복이 끝난 후 마지막으로 고려했던 단위 문자열도 압축 후 문자열에 이어붙여줘야 함
    if (cnt === 1) shortenS += temp;
    else shortenS += cnt + temp;

    // 압축 후 문자열 길이의 최솟값 업데이트
    shortenLen = Math.min(shortenLen, shortenS.length);
  }

  // 압축 후 문자열 길이의 최솟값 반환
  return shortenLen;
}