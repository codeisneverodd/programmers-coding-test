//https://github.com/codeisneverodd/programmers-coding-test
//완벽한 정답이 아닙니다.
//정답 1 - pereng11
//완전 탐색, greedy O(N^2)
  function solution(k, dungeons) {
    let answer = 0;
    const visited = new Array(dungeons.length).fill(false);
    function dfs(k, total){
      answer = Math.max( answer, total );
      //모든 포인트를 출발점으로 전체 경우의 수 탐색
      //0번 인덱스를 출발로 삼은 greedy 탐색이 끝나면 1번 인덱스를 출발점으로 ~ 마지막 인덱스까지 반복
        for(let i = 0; i < dungeons.length; i++){
            if(!visited[i] && dungeons[i][0] <= k){
                visited[i] = true;
                dfs(k - dungeons[i][1], total+1);
                visited[i] = false;
            }
        }
    }
    dfs(k, 0);
    return answer;
}
