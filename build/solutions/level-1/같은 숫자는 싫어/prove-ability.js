function solution(arr) {
    let answer = [];
    // 이중 배열을 사용해서 포인터?를 두 개를 사용한다
    for (let i = 0, len = arr.length - 1; i < len; i++) {
        // i 의 다음수를 비교하기 위해 j = (i + 1)
        for (let j = i + 1, len = arr.length; j < len; j++) {
            // i 와 j 번째 값이 같이 않다면
            if (arr[i] !== arr[j]) {
                answer.push(arr[i]);
                i = j - 1;
                break;
            }
        }
    }
    answer.push(arr[arr.length - 1]);
    return answer;
}