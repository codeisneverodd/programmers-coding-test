//https://github.com/codeisneverodd/programmers-coding-test
//완벽한 정답이 아닙니다.
//정답 1 - codeisneverodd
function solution(numbers) {
    var answer = -1;
    answer = 45 - numbers.reduce((a, b) => a + b);
    return answer;
}

//정답 2 - codeisneverodd
function solution(numbers) {
    var answer = 0;
    for (let i = 0; i < 10; i++) {
        answer += numbers.includes(i) ? 0 : i;
    }
    return answer;
}

//정답 3 - yongchanson
function solution(numbers) {
    var answer = -1;

    let arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    let arr_sum = 0;
    let numbers_sum = 0;

    for (i = 0; i < arr.length / 2; i++) {
        if (arr[i] == arr[arr.length - 1 - i]) {
            arr_sum += arr[i];
        } else {
            arr_sum += arr[i] + arr[arr.length - 1 - i];
        }
    }

    for (i = 0; i < numbers.length; i++) {
        numbers_sum += numbers[i];
    }

    answer = arr_sum - numbers_sum;
    return answer;
}

//정답 3 - prove-ability
function solution(numbers) {
    var answer = 0;

    for (let i = 0; i < 10; i++) {
        if (!numbers.includes(i)) answer += i;
    }

    return answer;
}
