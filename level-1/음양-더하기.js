//https://github.com/codeisneverodd/programmers-coding-test
//더 좋은 풀이가 존재할 수 있습니다.
//정답 1(🎩 refactor 220425) - codeisneverodd
function solution(absolutes, signs) {
  return absolutes.reduce(
    (acc, curr, i) => acc + curr * (signs[i] ? 1 : -1),
    0
  );
}

//정답 2 - codeisneverod
function solution(absolutes, signs) {
  var answer = 0;
  for (let i = 0; i < absolutes.length; i++) {
    answer += signs[i] ? absolutes[i] : -1 * absolutes[i];
  }
  return answer;
}

//정답 3 - jaewon1676
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

// 정답 4 - prove-ability
function solution(absolutes, signs) {
  var answer = 0;

  for (let i = 0, len = absolutes.length; i < len; i++) {
    if (!signs[i]) answer += absolutes[i] * -1;
    else answer += absolutes[i];
  }

  return answer;
}

// 정답 5 - prove-ability
function solution(absolutes, signs) {
    let answer = 0;
    absolutes.forEach((absolute, i) => {
        if(!signs[i]) absolute *= -1;
        answer += absolute;
    })
    return answer;
}