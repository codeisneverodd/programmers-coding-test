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