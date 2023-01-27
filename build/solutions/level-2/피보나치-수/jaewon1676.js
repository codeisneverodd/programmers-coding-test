function solution(n) {
    let f_1 = 0;
    let f_2 = 1;
    
    for (let i=2; i<=n; i++) {
        let temp = (f_1 + f_2) % 1234567;
        f_1 = f_2;
        f_2 = temp;
    }
    
    return f_2;
}