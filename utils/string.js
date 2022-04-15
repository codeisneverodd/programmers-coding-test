import * as fs from 'fs';
import path from 'path';
import fetchTitleLink from './fetch.js';

const __dirname = path.resolve();
const titleLinkObject = await fetchTitleLink();

function getFileNameList(dir) {
  try {
    return fs
      .readdirSync(dir)
      .map(fileName => fileName.normalize('NFC'))
      .filter(fileName => fileName !== '00-해답-예시.js')
      .sort();
  } catch (err) {
    return [];
  }
}

function checkException(title) {
  switch (title) {
    case '수박수박수박수박수박수':
      return '수박수박수박수박수박수?';
    case 'H Index':
      return 'H-Index';
    case 'N Queen':
      return 'N-Queen';
    case '오픈채팅방':
      return '오픈채팅방 ';
    default:
      return title;
  }
}

function getTitle(fileName) {
  const title = fileName.split('-').join(' ').slice(0, -3);
  return checkException(title);
}

export function getInfoList(levelNumber) {
  const levelDir = path.resolve(__dirname, `./level-${levelNumber}`);
  const fileNameList = getFileNameList(levelDir);
  const infoList = fileNameList.map(fileName => {
    const title = getTitle(fileName);
    const link = titleLinkObject[title];
    return { title, link, fileName, levelNumber };
  });
  return infoList;
}

function makeReadmeStr(infoItem, index) {
  const { title, link, fileName, levelNumber } = infoItem;
  const codeLink = `https://github.com/codeisneverodd/programmers-coding-test/blob/main/level-${levelNumber}/${fileName}`;
  return `| ${index + 1} | [${title}](${link}) | [${fileName}](${codeLink}) |`;
}

export function getTableStr(levelNumber) {
  if (getInfoList(levelNumber).length === 0) return '';

  return getInfoList(levelNumber)
    .map((item, index) => makeReadmeStr(item, index))
    .join('\n');
}
