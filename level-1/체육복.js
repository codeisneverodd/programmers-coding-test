//https://github.com/codeisneverodd/programmers-coding-test
//완벽한 정답이 아닙니다.
function solution(n, lost, reserve) {
    var answer = 0;
    let studentClothes= new Array(n+2).fill(1)
    for(const student of reserve) studentClothes[student] += 1
    for(const student of lost) studentClothes[student] -= 1
    for(let i=1; i<n+1; i++){
        if(studentClothes[i] === 0){
            if(studentClothes[i-1] === 2 || studentClothes[i+1] === 2){
                if(studentClothes[i-1] === 2){
                    studentClothes[i-1] -= 1
                    studentClothes[i] += 1
                }else{
                    studentClothes[i+1] -= 1
                    studentClothes[i] += 1
                }
            }
        }
    }
    for(const student of studentClothes) answer += student > 0 ? 1 : 0
    answer -= 2
    return answer;
}
