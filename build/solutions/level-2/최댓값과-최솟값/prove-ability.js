function solution(s) {
  s = s.split(" ").map((v) => parseInt(v, 10))
  return `${Math.min(...s)} ${Math.max(...s)}`;
}

