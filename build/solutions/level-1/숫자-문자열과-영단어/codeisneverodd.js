function solution(s) {
  var answer = 0;
  let answerString = s;
  const stringToNum = [
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
  for (let i = 0; i < 10; i++) {
    const regex = new RegExp(stringToNum[i], "g");
    answerString = answerString.replace(regex, i);
  }
  answer = Number(answerString);
  return answer;
}

