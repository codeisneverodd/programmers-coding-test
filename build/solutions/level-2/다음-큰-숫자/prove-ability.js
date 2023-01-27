function solution(n) {
  let i = n;
  n = n.toString(2).match(/1/g).length;
  while(true) {
      i++;
      const value = i.toString(2).match(/1/g).length;
      if(n === value) return i;
  }
}

//정답 4 = ryan-dia
function solution(n) {
    const count = (num) => num.toString(2).match(/1/g).length;
    for(i=(n+1); i< 1_000_000; i++) if(count(n) == count(i)) return i
}
