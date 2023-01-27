function solution(msg) {
  const result = [];
  const dict = Array.from({length: 26},(_, i) => String.fromCharCode(65 + i))

  // 시간 복잡도 O(N^2)
  const lastWordAndCompression = msg.split("").reduce((acc, cur) => {
    const nextWord = acc + cur;
    const nextWordIdx = dict.indexOf(nextWord);
    const prevWordIdx = dict.indexOf(acc);

    if (nextWordIdx !== -1) return acc + cur;
    dict.push(nextWord);

    if (prevWordIdx !== -1) result.push(prevWordIdx + 1);
    return cur;
  }, "");

  result.push(dict.indexOf(lastWordAndCompression) + 1);
  return result;
}
