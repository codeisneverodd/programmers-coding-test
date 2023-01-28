process.stdin.setEncoding('utf8');
process.stdin.on('data', data => {
    const nums = data.split(" ");
    const n = Number(nums[0]), m = Number(nums[1]);
    
    let result = "";
    // 2차원으로 접근
    // 세로 길이만큼 반복
    for(let i = 0; i < m; i++) {
        // 가로 길이만큼 별 더하기
        for(let j = 0; j < n; j++) {
            result += "*";
        }
        // 가로가 끝나면 줄내림
        result += "\n";
    }
    console.log(result)
});