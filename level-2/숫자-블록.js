//https://github.com/codeisneverodd/programmers-coding-test
//완벽한 정답이 아닙니다.
//정답 1 - iHoHyeon
function solution(begin, end) {
  return new Array(end - begin + 1).fill().map((v, idx) => calc(begin + idx));
  // begin ~ end 각 위치에 대해서 calc 함수의 return 값으로 채운다.
}
  
const calc = (number) => {
  if (number === 1) return 0;
  // 1번째 위치는 무조건 0블록이 위치

  for (let i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0 && number / i <= 10_000_000) return number / i;
    // 10_000_000번 블록까지만 놓았으므로 숫자를 초과하는 경우는 제외
  }

  return 1;
};

/*
    1번 블록부터 10_000_000번 블록까지 전부 규칙에 따라서 놓는 경우는
    시간 / 공간 복잡도가 급상승

    -> 따라서 각 위치에 어떤 숫자의 블록이 놓일지를 계산해주자
    
    -> n번째 위치에는 1, n을 제외한 n의 가장 큰 약수의 블록이 놓이게 된다.

    -> 가장 큰 약수는 n / (n의 가장 작은 약수)임을 이용해서 계산해주면 된다.

    + 가장 큰 약수가 1인 경우는 소수인 경우이고 숫자 1 블록이 놓인다.
*/
