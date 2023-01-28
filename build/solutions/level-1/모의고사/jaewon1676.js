function solution(answers) {
    let arr1 = [1,2,3,4,5]
    let arr2 = [2,1,2,3,2,4,2,5]
    let arr3 = [3,3,1,1,2,2,4,4,5,5]
    
    let score = [0, 0, 0]
    for (let i=0; i<answers.length; i++){
        if (answers[i] === arr1[i%5]) {
            score[0] += 1;
        }
        if (answers[i] === arr2[i%8]) {
            score[1] += 1;
        }
        if (answers[i] === arr3[i%10]) {
            score[2] += 1;
        }
    }
    let answer = []
    for (let i=0; i<3; i++){
        if (score[i] === Math.max(...score)) answer.push(i+1)
    }
    return answer;
}