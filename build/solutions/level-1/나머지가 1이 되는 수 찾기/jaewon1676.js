function solution(n) {
    var answer = 0;
    for (let i=1; i<n; i++){
        if(n%i === 1) return i // 나머지가 1이 되면 i를 출력합니다
    }
    return -1
}