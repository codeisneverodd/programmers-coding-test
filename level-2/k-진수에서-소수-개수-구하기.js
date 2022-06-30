function isPrime(number) {
    if (number < 2) return false;
    for (let i = 2; i * i <= number; i += 1) {
        if (number % i === 0) {
            return false;
        }
    }
    return true;
}

function solution(n, k) {    
    return (n).toString(k).split('0').filter((number) => isPrime(+number)).length;
}