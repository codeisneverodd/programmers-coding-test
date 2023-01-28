function solution(numbers, hand) {
  let leftNum = 10;
  let rightNum = 12;
  return numbers
    .map(num => {
      if (num === 0) {
        num = 11;
      }
      if (num % 3 === 1) {
        return leftTo(num);
      } else if (num % 3 === 0) {
        return rightTo(num);
      } else {
        const numLocation = numToLocation(num);
        const leftDistance = distanceBtwLocation(numToLocation(leftNum), numLocation);
        const rightDistance = distanceBtwLocation(numToLocation(rightNum), numLocation);
        if (leftDistance === rightDistance) {
          return hand === 'left' ? leftTo(num) : rightTo(num);
        } else if (leftDistance < rightDistance) {
          return leftTo(num);
        } else {
          return rightTo(num);
        }
      }
    })
    .join('');

  function leftTo(num) {
    leftNum = num;
    return 'L';
  }

  function rightTo(num) {
    rightNum = num;
    return 'R';
  }
}