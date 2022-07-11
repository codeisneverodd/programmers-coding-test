// https://github.com/codeisneverodd/programmers-coding-test
// 완벽한 정답이 아닙니다.
// 정답 1 - minjongbaek

// 빛의 이동을 위한 DX, DY 변수를 선언합니다.
const DX = [-1, 1, 0, 0];
const DY = [0, 0, -1, 1];

function solution(grid) {

    // DFS에 4방향을 고려하여 문제를 풉니다.
    // 핵심은 이미 방문한 칸이고 방향이 동일하다면 하나의 사이클이 형성된 것으로 생각해야합니다.

    const answer = [];

    // visited 변수를 선언 후 방문 여부를 확인할 3차원 배열을 할당합니다. [x좌표, y좌표, [하, 상, 좌, 우]]
    const visited = Array.from({ length: grid.length }, () => []).map((v) => {
        for (let i = 0; i < grid[0].length; i += 1) {
            v.push(new Array(4).fill(false));
        }
        return v
    });

    for (let x = 0; x < grid.length; x += 1) {
        for (let y = 0; y < grid[0].length; y += 1) {
            for (let d = 0; d < 4; d += 1) {
                // x, y 좌표에 하, 상, 좌, 우 방향으로 방문한 적이 없다면 dfs를 수행합니다.
                if (!visited[x][y][d]) {
                    const stack = [];
                    stack.push([x, y, d]);

                    let cnt = 0;
                    while (stack.length !== 0) {
                        const [currentX, currentY, currentD] = stack.pop();
                        if (!visited[currentX][currentY][currentD]) {
                            visited[currentX][currentY][currentD] = true;
                            cnt += 1;

                            const [nextX, nextY] = getNextXY(currentX, currentY, currentD, grid.length, grid[0].length); // 다음으로 이동할 좌표를 구합니다.
                            const nextD = getNextD(grid[nextX][nextY], currentD) // x, y 칸에 적혀있는 문자열대로 방향을 다음 방향을 구합니다.
                            
                            stack.push([nextX, nextY, nextD])
                        }

                    }
                    answer.push(cnt);
                }
            }
        }
    }
    return answer.sort((a, b) => a - b);
}

// 다음 행선지를 구하는 함수
function getNextXY(x, y, d, xLength, yLength) {
    x += DX[d];
    y += DY[d];

    // x나 y의 값이 유효하지 않은 경우 값을 재할당합니다.
    if (x < 0) x = xLength - 1;
    if (x >= xLength) x = 0;
    if (y < 0) y = yLength - 1;
    if (y >= yLength) y = 0;

    return [x, y];
}

// 현재 방향과 칸에 표시된 문자를 기준으로 다음 행선지의 방향을 구하는 함수
function getNextD(command, d) {
    if (command === 'L') {
        d = [2, 3, 1, 0][d]
    } else if (command === 'R') {
        d = [3, 2, 0, 1][d]
    }
    return d
}
