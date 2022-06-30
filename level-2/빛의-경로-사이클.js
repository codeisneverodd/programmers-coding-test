const DX = [-1, 1, 0, 0];
const DY = [0, 0, -1, 1];

function solution(grid) {
    const answer = [];
    const visited = Array.from({ length: grid.length }, () => []).map((v) => {
        for (let i = 0; i < grid[0].length; i += 1) {
            v.push(new Array(4).fill(false));
        }
        return v
    });

    for (let x = 0; x < grid.length; x += 1) {
        for (let y = 0; y < grid[0].length; y += 1) {
            for (let d = 0; d < 4; d += 1) {
                if (!visited[x][y][d]) {
                    const stack = [];
                    stack.push([x, y, d]);

                    let cnt = 0;
                    while (stack.length !== 0) {
                        const [currentX, currentY, currentD] = stack.pop();
                        if (!visited[currentX][currentY][currentD]) {
                            visited[currentX][currentY][currentD] = true;
                            cnt += 1;

                            const [nextX, nextY] = getNextXY(currentX, currentY, currentD, grid.length, grid[0].length);
                            const nextD = getNextD(grid[nextX][nextY], currentD)
                            
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


function getNextXY(x, y, d, xLength, yLength) {
    x += DX[d];
    y += DY[d];

    if (x < 0) x = xLength - 1;
    if (x >= xLength) x = 0;
    if (y < 0) y = yLength - 1;
    if (y >= yLength) y = 0;

    return [x, y];
}

function getNextD(command, d) {
    if (command === 'L') {
        d = [2, 3, 1, 0][d]
    } else if (command === 'R') {
        d = [3, 2, 0, 1][d]
    }
    return d
}
