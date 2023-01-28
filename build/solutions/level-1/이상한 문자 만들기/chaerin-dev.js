// 원래 문자가 모두 소문자여야 할 이유는 없다는 사실, 공백이 하나 이상일 수 있다는 사실을 빠뜨려서 조금 오래 생각한 문제..!
function solution(s) {
  let result = "";
  let flag = true;
  for (let i = 0; i < s.length; i++) {
    if (s[i] === " ") {
      flag = false;
      result += s[i];
    } else if (flag) {
      result += s[i].toUpperCase();
    } else {
      result += s[i].toLowerCase();
    }
    flag = !flag;
  }
  return result;
}