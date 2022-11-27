//https://github.com/codeisneverodd/programmers-coding-test
//완벽한 정답이 아닙니다.
//정답 1 - codeisneverodd
function solution(n) {
    var ans = 0;
    while (n > 0) {
        if (n % 2 !== 0) {
            n = (n - 1) / 2
            ans++
        } else {
            n = n / 2
        }
    }
    return ans;
}

//정답 2 - yongchanson
function solution(n) {
  let result = 0;
  while (n > 0) {
    result += n % 2;
    n = Math.floor(n / 2);
  }
  return result;
}
