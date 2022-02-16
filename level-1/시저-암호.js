//https://github.com/codeisneverodd/programmers-coding-test
//완벽한 정답이 아닙니다.
function solution(s, n) {
    var answer = '';
    answer = s.split('').map(element => {
        if(element === ' ') return ' '
        const code = element.charCodeAt(0)
        if((code + n > 90 && code <=90)||(code + n > 122)) {
            return String.fromCharCode(code + n - 26)
        }else{
            return String.fromCharCode(code + n)
        }
    }).join('')
    return answer;
}