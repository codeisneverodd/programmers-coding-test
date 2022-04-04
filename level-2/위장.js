//https://github.com/codeisneverodd/programmers-coding-test
//완벽한 정답이 아닙니다.
//정답 1 - codeisneverodd
function solution(clothes) {
	var answer = 1;
	const spyWear = {};
	for (const clothNPart of clothes)
		spyWear[clothNPart[1]] = (spyWear[clothNPart[1]] || 0) + 1;
	for (const part in spyWear) answer *= spyWear[part] + 1;
	return answer - 1;
}

//정답 2 - codeisneverodd
function solution(clothes) {
	var answer = 0;
	const spyWear = {};
	for (const clothNPart of clothes) {
		if (spyWear[clothNPart[1]] === undefined) spyWear[clothNPart[1]] = [];
		spyWear[clothNPart[1]].push(clothNPart[0]);
	}
	const clothesCount = [];
	for (const part in spyWear) clothesCount.push(spyWear[part].length + 1);
	answer =
		clothesCount.reduce((previous, current) => previous * current, 1) - 1;
	return answer;
}
// 정답 3 - hyosung
function solution(clothes) {
	let answer = 1;
	// 옷 종류
	const types = {};
	// 반복문 최적화 - length, 비교연산 제거
	const length = clothes.length;
	for (let i = length; i--; ) {
		// 해당 옷의 종류가 없다면 종류 1
		if (!types[clothes[i][1]]) types[clothes[i][1]] = 1;
		// 해당 옷의 종류가 있다면 종류 증가
		else types[clothes[i][1]] += 1;
	}
	// (종류 별 값 + 1 ) 을 다 곱셈
	Object.values(types).forEach((v) => {
		answer *= v + 1;
	});

	return answer - 1;
}

//정답 4 - jaewon1676
function solution(clothes) {
  var answer = 1;
  var obj={};
  for(var i=0;i<clothes.length;i++){
      obj[clothes[i][1]]=(obj[clothes[i][1]] || 1) + 1;
      console.log(obj)
  }

  for(var key in obj){
      answer *= obj[key];
      console.log(answer)
  }
  
  return answer-1;
}
/* 풀이과정
1. 빈 객체(obj)생성
2. obj에 해당 키가 없으면 값을 1(옷을 입지 않은 경우)로 지정하고 1(옷의 개수)을 더해줌.
3. obj에 해당 키가 있으면 해당 키의 값을 불러오고 1을 더해줌.
4. for in 구문으로 obj의 키를 반복하여 불러오고 해당 값을 answer에 곱해줌
5. 최소한 1가지 이상의 옷을 입기 떄문에 옷을 입지 않은 경우 -1로 제외. */