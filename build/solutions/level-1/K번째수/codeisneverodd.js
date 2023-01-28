function solution(array, commands) {
  return commands.map((cmd) => {
    const arrCmd = array.slice(cmd[0] - 1, cmd[1]).sort((a, b) => a - b);
    return arrCmd[cmd[2] - 1];
  });
}