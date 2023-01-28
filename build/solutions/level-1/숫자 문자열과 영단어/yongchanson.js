function solution(s) {
  let en = [
    "zero",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
  ];

  for (let i = 0; i < s.length * 2; i++) {
    let p = i % en.length;
    s = s.replace(en[p], p);
  }
  return Number(s);
}