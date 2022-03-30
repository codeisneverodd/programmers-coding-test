//https://github.com/codeisneverodd/programmers-coding-test
//완벽한 정답이 아닙니다.
//정답 1 - createhb21

function solution(numbers, target) {
    var answer = 0;
    dfs(0, 0);
    return answer;

    function dfs(count, sum){
        if( count === numbers.length){
            if(sum ===target ){
                answer++
            }
            return
        }
        dfs(count+1, sum+numbers[count]);
        dfs(count+1, sum-numbers[count]);
    }
}

