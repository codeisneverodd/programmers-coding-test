//https://github.com/codeisneverodd/programmers-coding-test
//완벽한 정답이 아닙니다.
//정답 1 - codeisneverodd
function solution(dartResult) {
    var answer = 0;
    const regex = /\d{1,2}[SDT]{1}[*|#]?/g
    let result = []
    for (const dart of dartResult.match(regex)) {
        const game = [...dart.split(/([SDT]{1})/)]
        const score = game[0]
        let bonus = 1
        let option = 1
        if (game[1] === 'S') bonus = 1
        else if (game[1] === 'D') bonus = 2
        else if (game[1] === 'T') bonus = 3

        if (game[2] === '*') {
            if (result.length !== 0) result[result.length - 1] *= 2
            option = 2
        } else if (game[2] === '#') option = -1

        result.push(score ** bonus * option)
    }
    answer = result.reduce((a, b) => a + b)
    return answer;
}

//정답 2 - jaewon1676
function solution(dartResult) {
    var answer = 0;
    let score = 0;
    let cnt = [];
  
    for (let i = 0; i < dartResult.length; i++) {
        //점수가 주어질때
        if (!isNaN(dartResult[i])) {
            // i가 1인 경우는 10점, 그외에는 점수
            score = Number(dartResult[i - 1]) === 1 ? 10 : Number(dartResult[i]);
            //보너스 S일때
        } else if (dartResult[i] === "S") {
            cnt.push(score);
            //보너스 D일때
        } else if (dartResult[i] === "D") {
            cnt.push(Math.pow(score, 2));
            //보너스 T일때
        } else if (dartResult[i] === "T") {
            cnt.push(Math.pow(score, 3));
            //옵션 *일떄
        } else if (dartResult[i] === "*") {
            cnt[cnt.length - 2] = cnt[cnt.length - 2] * 2;
            cnt[cnt.length - 1] = cnt[cnt.length - 1] * 2;
            //옵션 #일때
        } else if (dartResult[i] === "#") {
            cnt[cnt.length - 1] = -1 * cnt[cnt.length - 1];
        }
    }
    //3개의 점수 합산
    answer = cnt.reduce((acc, cur) => acc + cur, 0);
    return answer;
}