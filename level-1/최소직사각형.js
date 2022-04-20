//https://github.com/codeisneverodd/programmers-coding-test
//완벽한 정답이 아닙니다.
//정답 1 - codeisneverodd
function solution(sizes) {
    var answer = 0;
    for (let card of sizes) if (card[0] < card[1]) [card[0], card[1]] = [card[1], card[0]]
    const maxWidth = Math.max(...sizes.map(card => card[0]))
    const maxHeight = Math.max(...sizes.map(card => card[1]))
    answer = maxWidth * maxHeight
    return answer;
}

// 정답 2 - prove-ability
function solution(sizes) {
    
    // 가로, 세로 중 큰 값을 가로 길이로 변경(스압)
    sizes.forEach(([width, height], index) => {
        if(sizes[index][0] < sizes[index][1]) [sizes[index][0], sizes[index][1]] = [sizes[index][1], sizes[index][0]]
    })

    // 가로, 세로 각각 큰 값 추출
    const widthMax = Math.max(...sizes.map(v => v[0]));
    const widthHeight = Math.max(...sizes.map(v => v[1]));
        
    return widthMax * widthHeight;
}