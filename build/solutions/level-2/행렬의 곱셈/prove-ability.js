function solution(arr1, arr2) {
    var answer = [];
    // 행만큼 반복
    for(let i = 0, len = arr1.length; i < len; i++) {
        const arr = []
        // 열만큼 반복
        for(let j = 0, len = arr1[i].length; j < len; j++) {
            // 각의 배열에서 행을 더해서 arr push
            arr.push(arr1[i][j] + arr2[i][j])
        }
        // 열 만큼 추가된 arr 를 answer 가 추가
        answer.push(arr)
    }
    
    return answer;
}