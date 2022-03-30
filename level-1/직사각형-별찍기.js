//https://github.com/codeisneverodd/programmers-coding-test
//완벽한 정답이 아닙니다.
//정답 1 - chaerin-dev
process.stdin.setEncoding("utf8");
process.stdin.on("data", (data) => {
  const n = data.split(" ");
  const a = Number(n[0]),
    b = Number(n[1]);
  // 정답을 저장할 문자열 answer
  answer = "";
  // 세로 길이만큼 아래의 과정(가로 길이만큼 별 더해주고 줄 바꾸기) 반복
  for (let i = 0; i < b; i++) {
    // 가로 길이만큼 문자열에 별 더해주기
    for (let j = 0; j < a; j++) answer += "*";
    // 가로 길이만큼 별을 다 더해줬으면 줄 바꾸기
    answer += "\n";
  }
  // 정답 출력
  console.log(answer);
});
