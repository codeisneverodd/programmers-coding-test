function solution(participant, completion) {
  var answer = "";
  // 두 배열을 정렬한다!
  participant.sort();
  completion.sort();
  // 앞에서부터 차례로 비교하다가 값이 다를 때 participant의 요소가 완주하지 못한 선수!!
  // if (participant[i] != completion[i] || i == participant.length - 1) 이런 식으로
  // 완주하지 못한 선수의 이름이 마지막에 있을 경우도 고려해야 하나..? 라고 생각했지만
  // 그 때는 completion[i]의 값이 undefined가 되므로 괜찮음!
  for (let i = 0; i < participant.length; i++) {
    if (participant[i] != completion[i]) {
      answer = participant[i];
      break;
    }
  }
  return answer;
}