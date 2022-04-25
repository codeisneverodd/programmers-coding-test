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

//정답 2 - prove-ability
process.stdin.setEncoding('utf8');
process.stdin.on('data', data => {
    const nums = data.split(" ");
    const n = Number(nums[0]), m = Number(nums[1]);
    
    let result = "";
    // 2차원으로 접근
    // 세로 길이만큼 반복
    for(let i = 0; i < m; i++) {
        // 가로 길이만큼 별 더하기
        for(let j = 0; j < n; j++) {
            result += "*";
        }
        // 가로가 끝나면 줄내림
        result += "\n";
    }
    console.log(result)
});

//정답 3 - yongchanson
process.stdin.setEncoding("utf8");
process.stdin.on("data", (data) => {
  const n = data.split(" ");
  const a = Number(n[0]),
    b = Number(n[1]);
  console.log(("*".repeat(a) + `\n`).repeat(b));
});
/*
<풀이과정>
repeat() 메서드는 문자열을 주어진 횟수만큼 반복해 붙인 새로운 문자열을 반환한다. ex) str.repeat(count);
'*'.repeat(a) : *를 a만큼 반복한다.
*/
