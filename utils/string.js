import * as fs from 'fs';
import path from 'path';
import { generateAPI } from './api.js';
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
  const files = generateAPI();
  return files.filter(v => v.level === levelNumber);
}

function makeReadmeStr(infoItem, index) {
  const { name, link, fileName, level } = infoItem;
  const codeLink = `https://github.com/codeisneverodd/programmers-coding-test/blob/main/level-${level}/${fileName
    .split(' ')
    .join('-')}`;
  return `| ${index + 1} | [${name}](${link}) | [${name}.js](${codeLink}) |`;
}

export function getTableStr(levelNumber) {
  if (getInfoList(levelNumber).length === 0) return '';

  return getInfoList(levelNumber)
    .map((item, index) => makeReadmeStr(item, index))
    .join('\n');
}
