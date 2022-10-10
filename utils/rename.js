import fetchTitleLink, { fetchLevel0 } from './fetch.js';
import fs from 'fs';

const possibleLevels = [0, 1, 2, 3, 4, 5];
const nameExceptions = [
  [' ', '-'],
  ['?', '&#63;'],
];
const renameFileNamesWithID = (() => {
  const formatName = name => {
    nameExceptions.forEach(([a, b]) => (name = name.replaceAll(a, b)));
    return name;
  };

  return lessons => {
    possibleLevels.forEach(level => {
      const files = fs.readdirSync(`level-${level}`);

      Object.entries(lessons).forEach(([title, link]) => {
        const id = link.split('/').at(-1);
        const oldName = formatName(title) + '.js';
        const newName = `${formatName(title)}&${id}&.js`;

        if (files.includes(oldName) && !files.includes(newName)) {
          fs.renameSync(`level-${level}/${oldName}`, `level-${level}/${newName}`, err => {
            console.log(err);
          });
        }
      });
    });
  };
})();
const makeFileLevel0 = (() => {
  const formatName = name => {
    nameExceptions.forEach(([a, b]) => (name = name.replaceAll(a, b)));
    return name;
  };

  return lessons => {
    const files = fs.readdirSync(`level-${0}`);

    Object.entries(lessons).forEach(([title, link]) => {
      const id = link.split('/').at(-1);
      const newName = `${formatName(title)}&${id}&.js`;
      const string = `//https://github.com/codeisneverodd/programmers-coding-test\n//완벽한 정답이 아닙니다.\n//정답 1 - codeisneverodd\nfunction solution(n) {\n//프로그래머스에 제출하여 통과된 함수를 복사 붙여넣기 해주세요!\n}`;

      if (!files.includes(newName)) {
        fs.writeFileSync(`level-${0}/${newName}`, string, err => {
          console.log(err);
          0;
        });
      }
    });
  };
})();

const renameInvalid = () => {
  possibleLevels.forEach(level => {
    const files = fs.readdirSync(`level-${level}`);

    nameExceptions.forEach(e => {
      files
        .filter(name => name.includes(e[0]))
        .forEach(name => {
          fs.renameSync(`level-${level}/${name}`, `level-${level}/${name.replace(e[0], e[1])}`, err => {
            console.log(err);
          });
        });
    });
  });
};

const titleLinkObject = await fetchTitleLink();
const level0 = await fetchLevel0();

renameFileNamesWithID(titleLinkObject);
renameInvalid();
