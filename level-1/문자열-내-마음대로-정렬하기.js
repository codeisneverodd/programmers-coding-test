//https://github.com/codeisneverodd/programmers-coding-test
//완벽한 정답이 아닙니다.
function solution(strings, n) {
    var answer = [];
    answer = strings.sort((a,b)=>{
        if(a[n] < b[n]) return -1
        if(a[n] > b[n]) return 1
        if(a[n] == b[n]) return a < b ? -1 : 1
        return 0
    })
    return answer;
}