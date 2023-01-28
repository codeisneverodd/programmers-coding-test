function solution(a, b) {
  let count = 0;
  const day = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
  const month = [0, 31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  for (let i = 1; i < a; i++) count += month[i];
  count += b;
  return day[(count + 4) % 7]; // 금요일 부터 1일 이므로
}