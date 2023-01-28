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