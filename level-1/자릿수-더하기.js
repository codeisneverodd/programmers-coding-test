//https://github.com/codeisneverodd/programmers-coding-test
//완벽한 정답이 아닙니다.
function solution(n)
{
    var answer = 0;
    const answerArray = n
        .toString()
        .split('')
    answer = answerArray.reduce((a,b)=>Number(a)+Number(b),0)
    return answer;
}