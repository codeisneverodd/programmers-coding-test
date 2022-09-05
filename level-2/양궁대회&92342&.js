//https://github.com/codeisneverodd/programmers-coding-test
//더 좋은 풀이가 존재할 수 있습니다.
//정답 1 - codeisneverodd
// 문제 풀이 전략
// 1. 라이언이 쏠 수 있는 모든 경우를 비교한다.
// 2. 10점부터 0점 순으로 어피치와 라이언을 비교해 가면서, 라이언이 해당 점수를 이길지, 비길지, 질지를 결정하며 가능한 경우를 만들어 간다.
// 3. 이기는 경우는 화살을 어피치 + 1 개, 비기는 경우는 어피치와 동일한 개수를 소모하고, 지는 경우는 화살을 쏘지 않는다.
// 4. 단, 0점에 도달하기 전에 화살을 모두 소진하면 더이상 쏠 화살이 없으므로 나머지 점수는 쏘지 않은 것으로 한다. 마찬가지로 0점에 도달하였는데 화살이 남아있더라면, 남은 화살을 모두 0점에 쏜다.
// 5. 따라서 [지금까지 화살을 쏜 상황, 현재 검사중인 점수, 남은 화살 수]를 파라미터로 갖는 재귀함수를 구현하면 모든 경우를 검사할 수 있다.
// 6. 모든 경우가 구해졌다면, 어피치와 라이언의 점수차가 가장 큰 경우들만 남긴다
// 7. 가장 큰 경우들이 여러개라면 각 경우들을 중 마지막으로 쏜 화살의 점수 배점이 낮은 경우를 우선적으로 정렬한다.
// RETURN. 정렬이 완료되면 가장 우선순위가 높은 경우를 반환한다.
function solution(possibleArrows, apeachComb) {
  const compareTable = apeachComb.map(apeachArrow => ({
    apeachArrow,
    ryanArrow: 0,
  }));
  const possibleRyanTable = getPossibleRyanTable(compareTable, 0, possibleArrows);
  const maxScoreDiff = Math.max(...possibleRyanTable.flatMap(({ scoreDiff }) => scoreDiff));
  const maxRyanTables = possibleRyanTable.filter(({ scoreDiff }) => scoreDiff === maxScoreDiff);
  if (maxScoreDiff <= 0) return [-1];
  const getIndexOfLastArrow = arrowTable =>
    arrowTable.length -
    arrowTable
      .slice()
      .reverse()
      .findIndex(x => x !== 0);
  return maxRyanTables.sort((a, b) => getIndexOfLastArrow(b.ryanTable) - getIndexOfLastArrow(a.ryanTable))[0].ryanTable;
}
function getPossibleRyanTable(compareTable, currentIndex, numberOfArrowLeft) {
  const { apeachArrow } = compareTable[currentIndex];
  const lastIndex = compareTable.length - 1;
  const possibleRyanArrows = [
    0,
    numberOfArrowLeft > apeachArrow && apeachArrow + 1,
    numberOfArrowLeft >= apeachArrow && apeachArrow,
  ];

  if (currentIndex === lastIndex || numberOfArrowLeft === 0) {
    if (numberOfArrowLeft > 0) {
      compareTable[compareTable.length - 1] = {
        apeachArrow,
        ryanArrow: numberOfArrowLeft,
      };
    }
    const appeachScore = compareTable.reduce(
      (acc, { apeachArrow, ryanArrow }, index) =>
        apeachArrow >= ryanArrow && apeachArrow !== 0 ? acc + 10 - index : acc,
      0
    );
    const ryanScore = compareTable.reduce(
      (acc, { apeachArrow, ryanArrow }, index) => (ryanArrow > apeachArrow ? acc + 10 - index : acc),
      0
    );
    return [
      {
        scoreDiff: ryanScore - appeachScore,
        ryanTable: compareTable.flatMap(({ ryanArrow }) => ryanArrow),
      },
    ];
  }
  return [
    ...possibleRyanArrows.flatMap(ryanUsedArrow => {
      const nextCompareTable = [...compareTable];
      nextCompareTable.splice(currentIndex, 1, {
        apeachArrow,
        ryanArrow: ryanUsedArrow,
      });
      return getPossibleRyanTable(nextCompareTable, currentIndex + 1, numberOfArrowLeft - ryanUsedArrow);
    }),
  ];
}
