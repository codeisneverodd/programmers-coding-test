//https://github.com/codeisneverodd/programmers-coding-test
//완벽한 정답이 아닙니다.
function solution(sizes) {
    var answer = 0;
    for(let card of sizes) if(card[0] < card[1]) [card[0],card[1]] = [card[1],card[0]]
    const maxWidth = Math.max(...sizes.map(card=>card[0]))
    const maxHeight = Math.max(...sizes.map(card=>card[1]))
    answer = maxWidth * maxHeight
    return answer;
}