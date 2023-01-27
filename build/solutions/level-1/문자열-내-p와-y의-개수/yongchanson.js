function solution(s) {
  p = s.toLowerCase().split("p").length;
  y = s.toLowerCase().split("y").length;

  return p == y ? true : false;
}

