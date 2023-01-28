function solution(quiz) {
  return quiz.map(q => {
    const [formula, answer] = q.split('=');
    return eval(formula) === +answer ? 'O' : 'X';
  });
}