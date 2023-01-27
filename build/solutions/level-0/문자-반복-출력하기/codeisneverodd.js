function solution(my_string, n) {
  return [...my_string].map(char => char.repeat(n)).join('');
}
