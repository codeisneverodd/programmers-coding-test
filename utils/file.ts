import * as fs from 'fs';
import path, { dirname } from 'path';

import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

/** build 폴더 기준 절대경로를 사용하세요 */
export const makeDir = (_path: string) => {
  if (fs.existsSync(path.join(__dirname, '../', _path))) return;

  fs.mkdirSync(path.join(__dirname, '../', _path), { recursive: true });
};

/** build 폴더 기준 절대경로를 사용하세요 */
export const writeFile = ({ dirName, fileName, content }) => {
  const _path = `${dirName}/${fileName}`;
  // if (fs.existsSync(path.join(__dirname, _path))) return;

  fs.writeFileSync(path.join(__dirname, '../', _path), content);
};

/** build 폴더 기준 절대경로를 사용하세요 */
export const readFile = (_path: string) => {
  return fs.readFileSync(path.join(__dirname, '../', _path), {
    encoding: 'utf-8',
  });
};

/** build 폴더 기준 절대경로를 사용하세요 */
export const readDir = (dirName: string) => {
  return fs.readdirSync(path.join(__dirname, '../', dirName));
};
