//https://github.com/codeisneverodd/programmers-coding-test
//완벽한 정답이 아닙니다.
function solution(s) {
    var answer = ''
    answer = s.split(' ').map(word=> word.charAt(0).toUpperCase() + word.substring(1).toLowerCase()).join(' ')
    //word[0]은 빈 문자열을 만나면 undefined를,  word.charAt(0)은 빈 문자열을 만나면 빈 문자열을 반환한다.
    return answer;
}