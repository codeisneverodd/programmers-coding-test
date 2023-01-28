function solution(array) {
  return [...array.join('')].filter(a => a === '7').length;
}