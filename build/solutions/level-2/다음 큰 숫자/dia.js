function solution(n) {
    const count = (num) => num.toString(2).match(/1/g).length;
    for(i=(n+1); i< 1_000_000; i++) if(count(n) == count(i)) return i
}