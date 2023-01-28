function solution(dirs) {
  const move = ([x, y], dir) => {
    let next = [x, y];
    if (dir === 'U') next = [x, y + 1];
    if (dir === 'D') next = [x, y - 1];
    if (dir === 'R') next = [x + 1, y];
    if (dir === 'L') next = [x - 1, y];
    if (Math.abs(next[0]) > 5 || Math.abs(next[1]) > 5) return [x, y];
    return next;
  };

  const isSameRoute = ([s1, e1], [s2, e2]) => {
    const isSamePoint = ([x1, y1], [x2, y2]) => x1 === x2 && y1 === y2;
    return (isSamePoint(s1, s2) && isSamePoint(e1, e2)) || (isSamePoint(s1, e2) && isSamePoint(s2, e1));
  };

  const trace = {
    visited: [],
    visit(start, end) {
      if (start[0] === end[0] && start[1] === end[1]) return;
      if (!this.visited.find(route => isSameRoute(route, [start, end]))) this.visited.push([start, end]);
    },
  };

  let current = [0, 0];

  dirs.split('').forEach(dir => {
    const next = move(current, dir);
    trace.visit(current, next);
    current = next;
  });

  return trace.visited.length;
}