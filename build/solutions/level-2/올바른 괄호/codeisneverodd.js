function solution(s) {
  let opened = 0;
  for (const bracket of s) {
    if (bracket === "(") opened += 1;
    if (bracket === ")") opened -= 1;
    if (opened < 0) return false;
  }
  return opened === 0;
}