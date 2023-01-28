function solution(participant, completion) {
  var answer = "";
  for (let i = 0; i < participant.length; i++) {
    for (let j = 0; j < completion.length; j++) {
      if (participant[i] === completion[j]) {
        console.log(participant, completion);
        participant.splice(i, 1);
        completion.splice(j, 1);
        i--;
        j--;
        console.log(participant, completion);
        break;
      }
    }
  }

  return participant[0];
}

//완벽한 정답이 아닙니다.