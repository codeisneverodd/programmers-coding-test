//https://github.com/codeisneverodd/programmers-coding-test
//더 좋은 풀이가 존재할 수 있습니다.
//정답 1 - ssi02014
function solution(survey, choices) {
  const points = [3, 2, 1, 0, 1, 2, 3];
  const pointBoard = {
    R: 0,
    T: 0,
    C: 0,
    F: 0,
    J: 0,
    M: 0,
    A: 0,
    N: 0,
  };
  let result = "";

  // 카테고리 별 점수 추가
  for (let i = 0; i < survey.length; i++) {
    const categories = survey[i];

    if (choices[i] < 4) {
      pointBoard[categories[0]] += points[choices[i] - 1];
    } else if (choices[i] > 4) {
      pointBoard[categories[1]] += points[choices[i] - 1];
    }
  }

  const pointBoardEntries = Object.entries(pointBoard);

  // 지표에 맞게 결과 값 도출
  for (let i = 0; i < pointBoardEntries.length; i += 2) {
    const [curCategory, curValue] = pointBoardEntries[i];
    const [nextCategory, nextValue] = pointBoardEntries[i + 1];

    if (curValue < nextValue) {
      result += nextCategory;
    } else {
      result += curCategory;
    }
  }

  return result;
}

//정답 2 - codeisneverodd
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

//정답 3 - codisneverodd
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
