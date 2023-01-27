function solution(s) {
  let answer = [];
  s = s.split(" ");

  for (let i = 0; i < s.length; i++) {
    answer.push(
      s[i].substring(0, 1).toUpperCase() + s[i].substring(1).toLowerCase()
    );
  }
  return answer.join(" ");
}

