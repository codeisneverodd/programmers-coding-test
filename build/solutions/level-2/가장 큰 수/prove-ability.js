function solution(numbers) {
  return numbers.every(v => v === 0) ? "0" : numbers.map(v => v.toString(10)).sort((a,b) => (b+a) - (a+b)).join("");
}