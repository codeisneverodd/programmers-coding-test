import fs from 'fs';
import { splitCodeToSolutions } from './format.js';

export const generateAPI = () => {
  try {
    const api = [1, 2, 3, 4, 5].flatMap(level =>
      fs
        .readdirSync(`level-${level}`)
        .filter(name => name !== '00-해답-예시.js')
        .map(file => {
          const [name, id, extension] = file.split('&');
          const code = splitCodeToSolutions(fs.readFileSync(`level-${level}/${file}`, 'utf-8'));
          return {
            id,
            name: name.replaceAll('-', ' '),
            fileName: file,
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
