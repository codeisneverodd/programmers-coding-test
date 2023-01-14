//https://github.com/codeisneverodd/programmers-coding-test
//더 좋은 풀이가 존재할 수 있습니다.
//정답 1 - itsnottest
function solution(k, score) {

    const honor = []

    const result = []

    for(let i = 0 ; i < score.length ; i ++) {

        if(i < k) {
            honor.push(score[i])
        }

        if(score[i]>Math.min(...honor)) {
           
            honor.pop()
            honor.push(score[i])
            honor.sort((a,b) => b-a)
        }
     
        result.push(honor.at(-1))
    }
    return result
}
