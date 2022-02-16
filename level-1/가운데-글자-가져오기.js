//https://github.com/codeisneverodd/programmers-coding-test
//완벽한 정답이 아닙니다.
function solution(s) {
    var answer = '';
    const length = s.length
    answer = (length % 2) !== 0 ? s[Math.floor(length/2)] : s.slice((length/2)-1, (length/2)+1)
    return answer;
}