import fs from 'fs';
const splitCodeToSolutions = code => {
  if (code === undefined) return [];
  const solutions = code.split(/\/\/[ ]*정답/);
  return [solutions[0], ...solutions.slice(1).map(solution => '//' + solution)];
};

export const generateAPI = (() => {
  const formatName = (() => {
    const nameExceptions = [
      ['-', ' '],
      ['&#63;', '?'],
    ];

    return name => {
      nameExceptions.forEach(([a, b]) => (name = name.replaceAll(a, b)));
      return name;
    };
  })();

  return () => {
    try {
      const api = [0, 1, 2, 3, 4, 5].flatMap(level =>
        fs
          .readdirSync(`level-${level}`)
          .filter(name => name !== '00-해답-예시.js')
          .map(fileName => {
            const [name, id, extension] = formatName(fileName).split('&');
            console.log(formatName(fileName));
            const code = splitCodeToSolutions(fs.readFileSync(`level-${level}/${fileName}`, 'utf-8'));
            return {
              id,
              name,
              fileName,
              level,
              code: code[0] + code[1],
              link: `https://school.programmers.co.kr/learn/courses/30/lessons/${id}`,
            };
          })
      );
      fs.writeFileSync('api.json', JSON.stringify(api));
      return api;
    } catch (e) {
      console.log('Making API ERROR: ' + e);
      return [];
    }
  };
})();
