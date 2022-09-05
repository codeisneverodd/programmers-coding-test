export const splitCodeToSolutions = code => {
  if (code === undefined) return [];
  const solutions = code.split(/\/\/[ ]*정답/);
  return [solutions[0], ...solutions.slice(1).map(solution => '//' + solution)];
};
