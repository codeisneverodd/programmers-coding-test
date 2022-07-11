// https://github.com/codeisneverodd/programmers-coding-test
// 완벽한 정답이 아닙니다.
// 정답 1 - minjongbaek
function isPrime(number) { // 소수를 판별하는 함수
    if (number < 2) return false;
    for (let i = 2; i * i <= number; i += 1) {
        if (number % i === 0) {
            return false;
        }
    }
    return true;
}

function solution(n, k) {
    // 문제를 얼핏 보면 4가지의 경우를 모두 생각해야할 것 같지만,
    // 결국은 앞이나 뒤에 0이 하나라도 있거나 아예 없는 경우에 소수인지 확인하면 됩니다.
    // 따라서 k진수로 변환 후 0을 기준으로 나누고 각 요소가 소수인지 판별하면 됩니다.

    // (n).toString(k) // n을 k진수로 변환합니다.
    // .split('0') // 0을 기준으로 나눕니다.
    // .filter((number) => isPrime(+number)).length // 소수가 아닌 요소를 걸러낸 후에 개수를 셉니다.
    return (n).toString(k).split('0').filter((number) => isPrime(+number)).length;
}