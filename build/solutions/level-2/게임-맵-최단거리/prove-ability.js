function solution(maps) {
    // BFS 활용
    const row = maps.length - 1, col = maps[0].length - 1;
    
    // 큐 - 시작 위치 y, x, 이동 거리
    const queue = [[0, 0, 1]];
    
    while(queue.length) {
        // 큐 추출
        let [y, x, count] = queue.shift();
        // 상대 팀 진영이라면
        if(y === row && x === col) return count;
        // 동서남북 확인
        for(let i = 0; i < 4; i++) {
            const [dy, dx] = DIRECTION[i];
            // 다음 길 위치
            const nextY = dy + y, nextX = dx + x;
            // 맵 밖으로 나간다면
            if(isOut(nextY, nextX, row, col)) continue;
            // 도착한 곳이 벽이라면
            if(maps[nextY][nextX] === 0) continue;
            // 이미 지난 곳 벽으로 만들어서 다음에 접근 방지
            maps[nextY][nextX] = 0;
            // 다음에 확인해야하는 곳 큐에 추가
            // 갈수 있는 곳이 두 곳이라면 두 곳 추가됨       
            queue.push([nextY, nextX, count + 1]);
            // 처음에 count 를 let 으로 선언하고 ++count 로 작성했을 떄 에러 발생 - 이유는 모르겠음..
        }
    }
    
    return -1;
}

// 상 우 하 좌
const DIRECTION = [[1, 0], [0, 1], [-1, 0], [0, -1]];

// 사용이 가능한 길인지 확인하는 함수
const isOut = (nextY, nextX, row, col) => nextY < 0 || nextX < 0 || nextY > row || nextX > col;