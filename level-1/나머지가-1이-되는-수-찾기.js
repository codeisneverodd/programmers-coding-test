//https://github.com/codeisneverodd/programmers-coding-test
//완벽한 정답이 아닙니다.
//정답 1 - codeisneverodd
function solution(n) {
    var answer = 0;
    for (let divisor = n - 1; divisor >= 2; divisor--) {
        n % divisor === 1 ? answer = divisor : null
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
  