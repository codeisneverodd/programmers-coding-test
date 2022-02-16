//https://github.com/codeisneverodd/programmers-coding-test
//완벽한 정답이 아닙니다.
function solution(arr) {
    var answer = [];
    const index = arr.indexOf(Math.min(...arr))
    arr.splice(index, 1)
    answer = arr.length === 0 ? [-1] : arr
    return answer;
}