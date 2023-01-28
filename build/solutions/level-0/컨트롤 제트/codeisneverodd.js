function solution(s) {
  const arr = s.split(' ');
  while (arr.includes('Z')) arr.splice(arr.indexOf('Z') - 1, 2);
  return arr.map(n => +n).reduce((a, c) => a + c, 0);
}