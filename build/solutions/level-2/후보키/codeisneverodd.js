function solution(relation) {
    //1. 가능한 조합을 1개~Attribute개수 만큼 찾는다.
    //2. 해당 개수의 조합이 키가 될 수 있는지 검사하고, 가능하면 후보키에 추가한다.
    //3. 단 추가하려고 할 때, 후보키에 있는 값이 자신의 부분 집합이 될 수 있으면 추가하지 않는다.
    const keys = []
    const totalAttrCount = relation[0].length
    const indexList = Array.from(Array(totalAttrCount), (x, index) => index) // [0,1,2,3 ... totalAttrCount-1]

    //Fn for 2. 해당 조합으로 각 row의 attribute를 모았을 때 중복이 있는지를 반환하는 함수
    const isUnique = (relation, attrIndexComb) => {
        let result = Array.from(Array(relation.length), x => '')
        for (const attrIndex of attrIndexComb) {
            relation.forEach((row, rowIndex) => result[rowIndex] += row[attrIndex]) //Set를 이용해 중복 검사를 하기 위해 result에 string으로 넣음.
        }
        return result.length === [...new Set(result)].length
    }

    //Fn for 3. keys에 현재 구한 검사할 조합의 부분집합이 존재하는지 반환, 단 keys에 들어있는 각 조합의 크기는 현재 검사할 조합의 크기보다 작다.
    const isMinimal = (attrComb) => {
        for (const key of keys) if (key.every(attr => attrComb.includes(attr))) return false
        return true
    }

    //가능한 모든 조합을 검사
    for (let attrCount = 1; attrCount <= totalAttrCount; attrCount++) {
        const combinations = getCombinations(indexList, attrCount)
        for (const attrComb of combinations) {
            if (isMinimal(attrComb) && isUnique(relation, attrComb)) keys.push(attrComb)
        }
    }

    return keys.length
}

//Fn for 1. 조합을 반환하는 함수
const getCombinations = (array, selectNumber) => {
    const result = [];
    if (selectNumber === 1) {
        return array.map((element) => [element]);
    }
    array.forEach((fixed, index, origin) => {
        const restCombinations = getCombinations(origin.slice(index + 1), selectNumber - 1);
        const attached = restCombinations.map((restCombination) => [fixed, ...restCombination]);
        result.push(...attached);
    });
    return result;
}
