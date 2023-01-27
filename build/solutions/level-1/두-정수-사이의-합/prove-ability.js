function solution(a, b) {
  return Array.from({length: Math.max(a, b) - Math.min(a, b) + 1}, (_, i) => i + Math.min(a, b)).reduce((a, b) => a + b, 0);
}

