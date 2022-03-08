//https://github.com/codeisneverodd/programmers-coding-test
//완벽한 정답이 아닙니다.
function solution(skill, skill_trees) {
    var answer = 0;
    for (const tree of skill_trees) {
        let check = Array.from(tree).filter(x => skill.includes(x)).map(x => skill.indexOf(x))
        if (checkOrder(check)) answer += 1
    }
    return answer;
}

function checkOrder(checkArr) {
    for (let i = 0; i < checkArr.length; i++) if (checkArr[i] !== i) return false
    return true
}