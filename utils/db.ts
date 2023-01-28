import { nanoid } from 'nanoid';
import { makeDir, readFile, writeFile } from './file.js';

export interface Prob {
  id: string;
  title: string;
  level: 0 | 1 | 2 | 3 | 4 | 5;
}

export interface Sol {
  id: string;
  probId: string;
  code: string;
  author: string;
}

export interface DB {
  probs: Prob[];
  sols: Sol[];
}

export const getDB = () => JSON.parse(readFile('db/db.json')) as DB;

export const writeDB = (db: DB) =>
  writeFile({
    dirName: 'db',
    fileName: `db.json`,
    content: JSON.stringify(db),
  });

/** Sol 하나를 DB 및 파일에 추가 */
export const addSol = ({ author, code, probId }: Omit<Sol, 'id'>) => {
  const { probs, sols } = getDB();
  const { level, title } = probs.find((prob) => prob.id === probId);

  const addToFiles = () => {
    const newDir = `solutions/level-${level}/${title}`;
    makeDir(newDir);

    writeFile({
      dirName: newDir,
      fileName: `${author}.js`,
      content: code,
    });
  };

  const addToDB = () => {
    const newSol: Sol = {
      id: nanoid(),
      author,
      code,
      probId,
    };

    writeDB({
      probs,
      sols: [...sols.filter((sol) => !(sol.author === newSol.author && sol.probId === newSol.probId)), newSol],
    });
  };

  addToFiles();
  addToDB();
};

/** DB 전체를 파일로 변환 */
export const dbToFile = (db: DB) => {
  const { sols } = db;

  sols.forEach((sol) => addSol(sol));
};
