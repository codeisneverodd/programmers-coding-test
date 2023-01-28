function solution(infos, queries) {
  const infoData = {};

  const fetchInfoData = (keyArr, score, start) => {
    const key = keyArr.join('');

    infoData[key] ? infoData[key].push(score) : (infoData[key] = [score]);

    for (let i = start; i < keyArr.length; i++) {
      fetchInfoData(
        keyArr.map((v, index) => (index === i ? '-' : v)),
        score,
        i + 1
      );
    }
  };

  const getPassCount = (key, passScore) => {
    const scores = infoData[key];

    if (!scores) return 0;

    let [left, right] = [0, scores.length];

    while (left < right) {
      const mid = Math.floor((left + right) / 2);
      scores[mid] >= passScore ? (right = mid) : (left = mid + 1);
    }

    return scores.length - left;
  };

  infos
    .map(info => [info.split(' ').slice(0, 4), info.split(' ')[4]])
    .forEach(([keyArr, score]) => fetchInfoData(keyArr, +score, 0));

  Object.keys(infoData).forEach(key => {
    infoData[key].sort((a, b) => a - b);
  });

  return queries
    .map(query => query.replace(/ and /g, '').split(' '))
    .map(([key, passScore]) => getPassCount(key, +passScore));
}
// 주의 할 점
// 1. 중첩 구조에 있는 객체를 수정할 때 새로운 객체를 만들어 재할당하면 효율성에 걸림
// 2. 고차함수 중첩하면 새로운 객체를 만드는 행위가 너무 많음으로 효율성에 걸림.
// 3. filter 대신 정렬 후 이진 탐색을 활용해야 효율성에 걸리지 않음.