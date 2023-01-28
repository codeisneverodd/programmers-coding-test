function solution(numbers, hand) {
  // 키패드를 4행 3열의 이차원 배열이라고 생각

  // leftRow, leftCol: 왼손의 현재 위치
  let [leftRow, leftCol] = [3, 0];
  // rightRow, rightCol: 오른손의 현재 위치
  let [rightRow, rightCol] = [3, 2];
  // 각 번호를 누른 엄지손가락이 어느 손인지 저장할 문자열
  let result = '';

  // 눌러야할 각 번호가
  numbers.forEach(e => {
    // 1/4/7이면 왼손으로 눌러야하므로
    if (e === 1 || e === 4 || e === 7) {
      // 왼손의 위치 업데이트
      [leftRow, leftCol] = [Math.floor((e - 1) / 3), 0];
      // result 문자열에 "L" 이어붙여줌
      result += 'L';
    }

    // 3/6/9이면 오른손으로 눌러야하므로
    else if (e === 3 || e === 6 || e === 9) {
      // 오른손의 위치 업데이트
      [rightRow, rightCol] = [Math.floor((e - 1) / 3), 2];
      // result 문자열에 "R" 이어붙여줌
      result += 'R';
    }

    // 2/5/8/0이면
    else {
      // 번호 위치 계산의 편의를 위해 눌러야 할 번호가 0일 경우 11로 바꿔줌
      if (e === 0) e = 11;

      // leftRow, leftCol: 다음에 눌러야 할 번호의 위치
      let [nextRow, nextCol] = [Math.floor((e - 1) / 3), 1];
      // leftDistance: 현재 왼손의 위치와 다음에 눌러야 할 번호의 위치 사이의 거리
      let leftDistance = Math.abs(leftRow - nextRow) + Math.abs(leftCol - nextCol);
      // rightDistance: 현재 오른손의 위치와 다음에 눌러야 할 번호의 위치 사이의 거리
      let rightDistance = Math.abs(rightRow - nextRow) + Math.abs(rightCol - nextCol);

      // 왼손이 다음에 눌러야 할 번호의 위치와 더 가깝거나, 두 손의 거리가 같으면서 왼손잡이라면 왼손으로 눌러야하므로
      if (leftDistance < rightDistance || (leftDistance == rightDistance && hand === 'left')) {
        // 왼손의 위치 업데이트
        [leftRow, leftCol] = [nextRow, nextCol];
        // result 문자열에 "L" 이어붙여줌
        result += 'L';
      }

      // 오른손이 다음에 눌러야 할 번호의 위치와 더 가깝거나, 두 손의 거리가 같으면서 오른손잡이라며 오른손으로 눌러야하므로
      else {
        // 오른손의 위치 업데이트
        [rightRow, rightCol] = [nextRow, nextCol];
        // reuslt 문자열에 "R" 이어붙여줌
        result += 'R';
      }
    }
  });

  // result 문자열 반환
  return result;
}