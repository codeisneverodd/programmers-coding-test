function solution(n) {
  const sqrt = Math.sqrt(n);
  //sqrt % 1 == 0 이면 양의정수, -0이면 음의정수
  return sqrt % 1 == 0 ? (sqrt + 1) ** 2 : -1;
}