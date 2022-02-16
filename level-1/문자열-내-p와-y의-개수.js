//https://github.com/codeisneverodd/programmers-coding-test
//완벽한 정답이 아닙니다.
function solution(s){
    var answer = true;
    const countP = [...s.matchAll(/p/gi)].length
    const countY = [...s.matchAll(/y/gi)].length
    if(countP !== countY) answer = false

    return answer;
}