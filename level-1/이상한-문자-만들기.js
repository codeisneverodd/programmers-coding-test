//https://github.com/codeisneverodd/programmers-coding-test
//완벽한 정답이 아닙니다.
//정답 1 - codeisneverodd
function solution(s) {
    var answer = '';
    answer = s.split(' ').map(word => {
        let strangeWord = ''
        for (let i = 0; i < word.length; i++) {
            strangeWord += i % 2 === 0 ? word[i].toUpperCase() : word[i].toLowerCase()
        }
        return strangeWord
    }).join(' ')
    return answer;
}