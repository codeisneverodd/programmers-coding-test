//https://github.com/codeisneverodd/programmers-coding-test
//완벽한 정답이 아닙니다.
function solution(s) {
    var answer = false;
    const length = s.length
    if(s.search(/\D/g) < 0 && (length === 4 || length === 6)) answer = true
        return answer;
}