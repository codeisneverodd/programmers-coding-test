//https://github.com/codeisneverodd/programmers-coding-test
//더 좋은 풀이가 존재할 수 있습니다.
//정답 1(🎩 refactor 220425) - codeisneverodd
function solution(n) {

  let answer = 0;
  for (let divisor = n - 1; divisor >= 2; divisor--) {
    if (n % divisor === 1) answer = divisor;
  }
  return answer;
}

//정답 2 - prove-ability
function solution(n) {
    var answer = 0;
    let i = 0;
    while(true) {
        if(n % i === 1) {
            answer = i;
            break;
        }
        i++;
    }
    return answer;
}

//정답 3 - jaewon1676
function solution(n) {
    var answer = 0;
    for (let i=1; i<n; i++){
        if(n%i === 1) return i // 나머지가 1이 되면 i를 출력합니다
    }
    return -1
}
  

