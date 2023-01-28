function solution(s) {
  return s.search(/\D/g) < 0 && (s.length === 4 || s.length === 6);
}