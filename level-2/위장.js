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
