
//https://github.com/codeisneverodd/programmers-coding-test
//더 좋은 풀이가 존재할 수 있습니다.
//정답 1 - itsnottest
const makePersonalFood = (eachFood) => {
    return parseInt(eachFood / 2);
};

function solution(food) {
    return food.map(makePersonalFood).reverse().reduce((acc, cur, idx) => {
        if (cur === 0) return acc;
        
        const calorie = food.length - idx - 1;
        
        acc = acc.padEnd(cur + acc.length, calorie);
        return acc.padStart(cur + acc.length, calorie);
    }, '0')
}
