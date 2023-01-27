function solution(survey, choices) {
  const points = [-3, -2, -1, 0, 1, 2, 3];
  const types = ['RT', 'CF', 'JM', 'AN'];
  const pointBoard = survey.reduce((a, key, i) => {
    if (types.includes(key)) {
      a[key] = (a[key] || 0) + points[choices[i] - 1];
      return a;
    }
    const rKey = key[1] + key[0];
    a[rKey] = (a[rKey] || 0) - points[choices[i] - 1];
    return a;
  }, {});
  return types.map(type => (pointBoard[type] <= 0 || !pointBoard[type] ? type[0] : type[1])).join('');
}
