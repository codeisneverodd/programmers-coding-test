//https://github.com/codeisneverodd/programmers-coding-test
//완벽한 정답이 아닙니다.
//정답 1 - codeisneverodd
function solution(a, b) {
    var answer = 1234567890;
    answer = a.reduce((x, y, i) => x + y * b[i], 0);
    return answer;
}

//정답 2 - yongchanson
function solution(a, b) {
    var answer = 0;

    for (i = 0; i < a.length; i++) {
        answer += a[i] * b[i];
    }
    return answer;
}

//정답 3 - prove-ability
function solution(a, b) {
    var answer = 0;

    for (let i = 0, len = a.length; i < len; i++) {
        answer += a[i] * b[i];
    }

    return answer;
}

//정답 4 - jaewon1676
function solution(a, b) {
    let answer = 0;
    for (let i=0; i<a.length; i++){
        answer += (a[i] * b[i]) // a[i]와 b[i]를 곱한다.
    }
    return answer;
}