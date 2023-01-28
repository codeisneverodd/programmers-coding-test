function solution(absolutes, signs) {
  var answer = 0;
  for (var i = 0; i < absolutes.length; i++) {
    if (signs[i] === false) {
      answer = answer - absolutes[i];
    } else {
      answer = answer + absolutes[i];
    }
  }

  return answer;
}