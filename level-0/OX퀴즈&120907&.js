//https://github.com/codeisneverodd/programmers-coding-test
//완벽한 정답이 아닙니다.
//정답 1 - codeisneverodd
function solution(quiz) {
  return quiz.map(q => {
    const [formula, answer] = q.split('=');
    return eval(formula) === +answer ? 'O' : 'X';
  });
}
