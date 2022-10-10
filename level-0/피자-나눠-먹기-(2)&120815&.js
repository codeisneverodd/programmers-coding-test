//https://github.com/codeisneverodd/programmers-coding-test
//완벽한 정답이 아닙니다.
//정답 1 - codeisneverodd
function solution(n) {
  const getLCM = (a, b) => {
    let lcm = 1;
    while ((lcm % a !== 0 || lcm % b !== 0) && lcm < a * b) lcm += 1;
    return lcm;
  };

  return getLCM(n, 6) / 6;
}
