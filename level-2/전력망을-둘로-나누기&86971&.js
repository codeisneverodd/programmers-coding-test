//https://github.com/codeisneverodd/programmers-coding-test
//더 좋은 풀이가 존재할 수 있습니다.
//정답 1 - codeisneverodd
function solution(n, wires) {
  const hasOneOfWire = (tree, [a, b]) => tree.includes(a) || tree.includes(b);

  const convertWiresToTree = wires => [...new Set(wires.flat())];

  const generateTree = (wires, tree) => {
    if (!wires.find(wire => hasOneOfWire(tree, wire))) return tree;

    const nextWires = wires.filter(wire => !hasOneOfWire(tree, wire));
    const nextTree = [...tree, ...convertWiresToTree(wires.filter(wire => hasOneOfWire(tree, wire)))];

    return [...new Set(generateTree(nextWires, nextTree))];
  };

  let minDiff = Infinity;
  const length = convertWiresToTree(wires).length;

  wires.forEach((_, i) => {
    const [initWire, ...remainWires] = wires.filter((_, j) => j !== i);
    const lengthA = generateTree(remainWires, convertWiresToTree([initWire])).length;
    const diff = Math.abs(lengthA - (length - lengthA));
    minDiff = Math.min(diff, minDiff);
  });

  return minDiff;
}
