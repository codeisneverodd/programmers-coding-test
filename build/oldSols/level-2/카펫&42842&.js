//https://github.com/codeisneverodd/programmers-coding-test
//완벽한 정답이 아닙니다.
//정답 1 - codeisneverodd
function solution(brown, yellow) {
    var answer = [];
    const size = brown + yellow
    answer = widthHeightPair(size).filter(pair => (pair[0] + pair[1]) * 2 - 4 === brown)[0]
    return answer;
}

function widthHeightPair(size) {
    let result = []
    for (let i = 1; i <= Math.sqrt(size); i++) if (size % i === 0) result.push([size / i, i])
    return result
}

//정답 2 - jaewon1676
function solution(brown, yellow) {
    var answer = [];
    let sum = brown + yellow; 
    
    //카펫의 최소높이는 3부터이다.(테두리 갈색, 가운데 노란색)
    for(let height=3; height<brown/2; height++){
        //전체 크기에서 높이로 나눌때 나머지가 없을경우만 진행
        if(sum % height === 0){
            //가로길이
            let weight = sum / height;
            //테두리를 제외한 길이를 구해야하기 때문에 각각 -2해준뒤 곱셈 하여 답을 구한다.
            if( (height-2) * (weight-2) === yellow){
                return [weight, height];
            }
        }
    }
    return answer;
}
// 완전탐색 
  
// 문제 설명에서의 중앙은 노란색, 테두리는 갈색이 포인트입니다.
// 갈색은 항상 노란색의 가로 세로 크기보다 +2 만큼 큽니다.
// 따라서 높이는 전체 테두리/2보다 작으므로 
// 3부터 brown/2 를 순회합니다.