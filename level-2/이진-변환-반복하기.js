//https://github.com/codeisneverodd/programmers-coding-test
//더 좋은 풀이가 존재할 수 있습니다.
//정답 1 - codeisneverodd
function solution(s) {
  const removeZero = s => {
    const removed = s
      .split('')
      .filter(n => n !== '0')
      .join('');
    return { removed, count: s.length - removed.length };
  };

  const convertToBinary = (s, turnCount, removedCount) => {
    if (s === '1') return [turnCount, removedCount];
    const { removed, count } = removeZero(s);
    return convertToBinary(removed.length.toString(2), turnCount + 1, removedCount + count);
  };

  return convertToBinary(s, 0, 0);
}
