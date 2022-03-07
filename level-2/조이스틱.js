//https://github.com/codeisneverodd/programmers-coding-test
//완벽한 정답이 아닙니다.
function solution(name) {
    var answer = 0;
    const length = name.length;
    let upDownCount = 0
    let leftRightCountList = [length - 1]//한 방향으로 쭉 갔을 때
    for (let i = 0; i < length; i++) upDownCount += minUpOrDownCount(name[i])
    for (let startOfA = 0; startOfA < name.length; startOfA++) {
        let endOfA = startOfA + 1;
        while (endOfA < length && name[endOfA] === 'A') endOfA++;
        const [moveToStartOfA, moveToEndOfA] = [startOfA, length - endOfA]
        leftRightCountList.push(moveToStartOfA * 2 + moveToEndOfA)// 0 -> A.., 0 <- A.., ..A <- -1
        leftRightCountList.push(moveToEndOfA * 2 + moveToStartOfA)//시작부터 뒤로 가는 경우 ..A <- -1, ..A -> -1, 0 -> A..
    }
    answer = upDownCount + Math.min(...leftRightCountList)
    return answer;
}

function minUpOrDownCount(destination) {
    const Alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    const index = Alphabet.indexOf(destination)
    return Math.min(index, Alphabet.length - index)
}