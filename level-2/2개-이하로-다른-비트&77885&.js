//https://github.com/codeisneverodd/programmers-coding-test
//완벽한 정답이 아닙니다.
//정답 1 - le2sky
function solution(numbers) {
  const answer = [];
  numbers.forEach((num) => {
    if (num % 2 == 0) answer.push(num + 1);
    else {
      let binary = ["0", ...num.toString(2)];
      let last = binary.lastIndexOf("0");
      binary[last] = "1";
      binary[last + 1] = "0";
      answer.push(parseInt(binary.join(""), 2));
    }
  });
  return answer;
}
