import { nanoid } from 'nanoid';
import { DB, Prob } from './db.js';
import { readDir, readFile } from './file.js';

const levels: Prob['level'][] = [0, 1, 2, 3, 4, 5];

export const oldSolsToDB = (): DB => {
  const result: DB = { probs: [], sols: [] };

  levels.forEach((level) => {
    const oldDirName = `oldSols/level-${level}`;
    const fileNames = readDir(oldDirName);

    fileNames.map((fileName) => {
      const [title, id] = fileName.replace('&#63;', '?').replaceAll('-', ' ').split('&');

      if (id) result.probs.push({ id, title: title.replace('?', '&#63;'), level });

      readFile(`${oldDirName}/${fileName}`)
        .split(/\/\/[ ]*정답[ ]*\d[^-]*-/)
        .slice(1)
        .map((content) => {
          const [author, ...lines] = content.split('\n');
          return {
            author: author.trim(),
            code: lines.join('\n').trim(),
          };
        })
        .forEach(({ author, code }) => {
          if (id) result.sols.push({ author, code, id: nanoid(), probId: id });
        });
    });
  });
  console.log(
    result.probs
      .sort((a, b) => (a.id < b.id ? -1 : a.id === b.id ? 0 : 1))
      .filter((p, i, arr) => i < arr.length - 1 && p.id === arr[i + 1].id)
  );

  return result;
};
