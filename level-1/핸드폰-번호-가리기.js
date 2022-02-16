//https://github.com/codeisneverodd/programmers-coding-test
//완벽한 정답이 아닙니다.
function solution(phone_number) {
    var answer = '';
    answer = '*'.repeat(phone_number.length - 4) + phone_number.slice(-4)
    return answer;
}