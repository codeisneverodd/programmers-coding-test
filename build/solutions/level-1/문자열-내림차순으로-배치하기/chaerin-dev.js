function solution(s) {
  return s.split("").sort((a, b) => (a < b ? 1 : -1)).join("");
}


