function solution(A, B) {
  const pushRight = str => [str[str.length - 1], ...str.slice(0, str.length - 1)].join('');
  for (let i = 0; i <= A.length; i++) {
    if (A === B) return i;
    A = pushRight(A);
  }

  return -1;
}
