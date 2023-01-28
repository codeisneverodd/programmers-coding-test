function solution(dartResult) {
  const regex = /\d{1,2}[SDT]{1}[*|#]?/g;
  let result = [];
  for (const dart of dartResult.match(regex)) {
    const game = [...dart.split(/([SDT]{1})/)];
    const score = game[0];
    let bonus = 1;
    let option = 1;
    if (game[1] === "S") bonus = 1;
    if (game[1] === "D") bonus = 2;
    if (game[1] === "T") bonus = 3;

    if (game[2] === "*") {
      if (result.length !== 0) result[result.length - 1] *= 2;
      option = 2;
    }
    if (game[2] === "#") option = -1;

    result.push(score ** bonus * option);
  }

  return result.reduce((a, b) => a + b);
}