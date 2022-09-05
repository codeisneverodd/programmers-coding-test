import fs from 'fs';
import { splitCodeToSolutions } from './format.js';

const makeAPI = () =>
  [1, 2, 3, 4, 5].flatMap(level =>
    fs.readdirSync(`level-${level}`).map(file => {
      const [name, id, extension] = file.split('&');
      const code = splitCodeToSolutions(fs.readFileSync(`level-${level}/${file}`, 'utf-8'));
      return { id, name: name.replace('-', ' '), level, code: code[0] + code[1] };
    })
  );

fs.writeFileSync('api.json', JSON.stringify(makeAPI()));
