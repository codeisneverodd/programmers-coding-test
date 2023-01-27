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
