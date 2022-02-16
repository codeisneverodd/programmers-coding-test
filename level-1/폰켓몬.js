//https://github.com/codeisneverodd/programmers-coding-test
//완벽한 정답이 아닙니다.
function solution(nums) {
    var answer = 0;
    const numSet = new Set(nums)
    const numLen = nums.length
    const setLen = numSet.size
    answer = numLen/2 >= setLen ? setLen : numLen/2
    return answer;
}