function solution(n) {
  let i = n;
  n = n.toString(2).match(/1/g).length;
  while(true) {
      i++;
      const value = i.toString(2).match(/1/g).length;
      if(n === value) return i;
  }
}