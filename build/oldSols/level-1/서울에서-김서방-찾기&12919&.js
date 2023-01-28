//https://github.com/codeisneverodd/programmers-coding-test
//더 좋은 풀이가 존재할 수 있습니다.
//정답 1(🎩 refactor 220425) - codeisneverodd
function solution(seoul) {
  return `김서방은 ${seoul.indexOf("Kim")}에 있다`;
}

//정답 2 - chaerin-dev
function solution(seoul) {
  return `김서방은 ${seoul.indexOf("Kim")}에 있다`;
}

//정답 3 - prove-ability
function solution(seoul) {
  return `김서방은 ${seoul.findIndex(v => v === "Kim")}에 있다`;
}

//정답 4 - jaewon1676
function solution(seoul) {
  var answer = '';
  for (let i=0; i<1000; i++){
      if (seoul[i] === 'Kim') return '김서방은 ' + i + '에 있다';
  }
  return 1;
}