function solution(queue1, queue2) {
  const getSum = arr => arr.reduce((a, c) => a + c, 0);

  if (getSum([...queue1, ...queue2]) % 2 !== 0) return -1;

  const queue = [...queue1, ...queue2, ...queue1, ...queue2];
  const maxCount = queue.length;
  const average = getSum(queue) / 4;
  let [currentSum, count, start, end] = [getSum(queue1), 0, 0, queue1.length];

  const pop = () => {
    currentSum -= queue[start];
    start += 1;
    count += 1;
  };
  const insert = () => {
    currentSum += queue[end];
    end += 1;
    count += 1;
  };

  while (count <= maxCount) {
    if (currentSum < average) insert();
    if (currentSum > average) pop();
    if (currentSum === average) return count;
  }
  return -1;
}