//https://github.com/codeisneverodd/programmers-coding-test
//완벽한 정답이 아닙니다.
//정답 1 - codeisneverodd
function solution(numbers, hand) {
    var answer = '';
    let leftNum = 10
    let rightNum = 12
    answer = numbers.map(num => {
        if (num === 0) {
            num = 11
        }
        if (num % 3 === 1) {
            return leftTo(num)
        } else if (num % 3 === 0) {
            return rightTo(num)
        } else {
            const numLocation = numToLocation(num)
            const leftDistance = distanceBtwLocation(numToLocation(leftNum), numLocation)
            const rightDistance = distanceBtwLocation(numToLocation(rightNum), numLocation)
            if (leftDistance === rightDistance) {
                return hand === 'left' ? leftTo(num) : rightTo(num)
            } else if (leftDistance < rightDistance) {
                return leftTo(num)
            } else {
                return rightTo(num)
            }
        }
    }).join('')

    function leftTo(num) {
        leftNum = num
        return 'L'
    }

    function rightTo(num) {
        rightNum = num
        return 'R'
    }

    return answer;
}

function numToLocation(num) {
    return [Math.floor((num - 1) / 3), (num - 1) % 3];
}

function distanceBtwLocation(a, b) {
    return Math.abs(a[0] - b[0]) + Math.abs(a[1] - b[1])
}