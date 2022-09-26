import fetchTitleLink from './fetch.js';
import fs from 'fs';
const possibleLevels = [1, 2, 3, 4, 5];
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

renameFileNamesWithID(titleLinkObject);
renameInvalid();
