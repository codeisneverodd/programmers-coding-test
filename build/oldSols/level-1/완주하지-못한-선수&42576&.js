//https://github.com/codeisneverodd/programmers-coding-test
//더 좋은 풀이가 존재할 수 있습니다.
//정답 1(🎩 refactor 220425) - codeisneverodd
function solution(participant, completion) {
  participant = participant.sort();
  completion = completion.sort();
  for (let i = 0; i < completion.length; i++) {
    if (participant[i] !== completion[i]) return participant[i];
  }
  return participant[participant.length - 1];
}

//정답 2 - jaewon1676
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
//정답 3 - hyosung
function solution(participant, completion) {
  let answer = "";
  // 2개 이상을 가진 특정값의 갯수 기록용 변수
  let max = 0;
  // 반복문 내부에서 set.has 를 사용하기 위해 Set 선언 (처음에는 Array.findIndex 를 사용)
  const set = new Set([...completion]);
  // 반복문 최적화 - 반복되던 연산 제거 (값 비교, length)
  const length = participant.length;
  for (let i = length; i--; ) {
    // 완주자 명단에 없다면 완주하지 못한 참가자 이므로 바로 종료
    if (!set.has(participant[i])) {
      answer = participant[i];
      break;
    }
    // 배열안에 특정값 갯수 확인
    let count = participant.reduce(
      (a, v) => (v === participant[i] ? a + 1 : a),
      0
    );
    // 해당 값이 참가자 그룹 내 2명 이상이고 이전 최대 동명이인 참가자보다 많다면
    // 해당 로직을 반복하면 제일 많은 동명이인을 알 수 있다
    if (count > 1 && max < count) {
      answer = participant[i];
      // 조건에 맞는 동명이인 수 저장
      max = count;
    }
  }
  return answer;
}

//완벽한 정답이 아닙니다.
//정답 4 - chaerin-dev
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
