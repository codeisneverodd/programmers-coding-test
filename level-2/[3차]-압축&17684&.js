//https://github.com/codeisneverodd/programmers-coding-test
//더 좋은 풀이가 존재할 수 있습니다.
//정답 1 - codeisneverodd
function solution(msg) {
  const outputs = [];
  const dict = ['@', ...Array.from(Array(26), (_, i) => String.fromCharCode(65 + i))];
  let [start, end] = [0, 1];

  const doesDictHave = (start, end) => dict.includes(msg.substring(start, end));

  const getInput = (start, end) => {
    if (end + 1 > msg.length || !doesDictHave(start, end + 1)) return [start, end];
    return getInput(start, end + 1);
  };

  const addToDict = (start, end) => {
    if (doesDictHave(start, end)) return;
    dict.push(msg.substring(start, end));
  };

  const addToOutputs = (start, end) => {
    if (!doesDictHave(start, end)) return;
    outputs.push(dict.indexOf(msg.substring(start, end)));
  };

  while (start < msg.length) {
    [start, end] = getInput(start, end);
    addToDict(start, end + 1);
    addToOutputs(start, end);
    start = end;
  }
  return outputs;
}

// 정답 2 - ssi02014
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
