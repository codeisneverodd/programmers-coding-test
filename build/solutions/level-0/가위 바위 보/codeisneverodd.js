function solution(rsp) {
  const win = { 0: 5, 2: 0, 5: 2 };
  return [...rsp].map(num => win[num]).join('');
}