function solution(s) {
  return s
    .split("")
    .sort((a, b) => {
      if (a < b) return 1;
      if (a > b) return -1;
      return 0;
    })
    .join("");
}