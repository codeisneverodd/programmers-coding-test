//https://github.com/codeisneverodd/programmers-coding-test
//완벽한 정답이 아닙니다.
//정답 1
function solution(clothes) {
    var answer = 1;
    const spyWear = {}
    for(const clothNPart of clothes) spyWear[clothNPart[1]] = (spyWear[clothNPart[1]] || 0) + 1
    for(const part in spyWear) answer *= (spyWear[part] + 1)
    return answer - 1;
}

//정답 2
function solution(clothes) {
    var answer = 0;
    const spyWear = {}
    for(const clothNPart of clothes){
        if(spyWear[clothNPart[1]] === undefined) spyWear[clothNPart[1]] = []
        spyWear[clothNPart[1]].push(clothNPart[0])
    }
    const clothesCount = []
    for(const part in spyWear) clothesCount.push(spyWear[part].length + 1)
    answer = clothesCount.reduce((previous, current) => previous * current, 1) - 1
    return answer;
}