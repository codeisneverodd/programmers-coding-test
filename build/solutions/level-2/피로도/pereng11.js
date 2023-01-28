//완전 탐색, greedy O(N^2)
function solution(currentFatigue, dungeons) {
  return getMaxCount(currentFatigue, 0, dungeons);
}

function getMaxCount(currentFatigue, visitedCount, dungeons) {
  const possibleDungeons = dungeons.filter(([minNeededFatigue, _]) => minNeededFatigue <= currentFatigue);
  if (possibleDungeons.length === 0) return visitedCount;

  const maxCount = possibleDungeons.reduce((prevCount, curr, currentIndex) => {
    const [_, usedFatigue] = curr;
    const nextDungeons = possibleDungeons.filter((_, index) => index !== currentIndex);
    const currentCount = getMaxCount(
      currentFatigue - usedFatigue,
      visitedCount + 1,
      nextDungeons
    );
    return Math.max(currentCount, prevCount);
  }, 0);

  return maxCount;
}