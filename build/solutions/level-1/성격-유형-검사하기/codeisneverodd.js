function solution(survey, choices) {
  const points = [-3, -2, -1, 0, 1, 2, 3];
  const types = ['RT', 'CF', 'JM', 'AN'];
  const pointBoard = types.reduce((a, key) => ({ ...a, [key]: 0 }), {});
  survey.forEach((key, i) => {
    const point = points[choices[i] - 1];
    Object.keys(pointBoard).includes(key) ? (pointBoard[key] += point) : (pointBoard[key[1] + key[0]] -= point);
  });
  return types.map(type => (pointBoard[type] <= 0 ? type[0] : type[1])).join('');
}

