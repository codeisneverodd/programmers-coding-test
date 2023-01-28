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