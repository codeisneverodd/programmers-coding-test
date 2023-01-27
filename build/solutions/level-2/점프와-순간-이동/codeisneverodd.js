function solution(n) {
    var ans = 0;
    while (n > 0) {
        if (n % 2 !== 0) {
            n = (n - 1) / 2
            ans++
        } else {
            n = n / 2
        }
    }
    return ans;
}

