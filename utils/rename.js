import fetchTitleLink from './fetch.js';
import fs from 'fs';

const renameFileNamesWithID = lessons => {
  const possibleLevels = [1, 2, 3, 4, 5];
  possibleLevels.forEach(level => {
    const files = fs.readdirSync(`level-${level}`);
    Object.entries(lessons).forEach(([title, link]) => {
      const id = link.split('/').at(-1);
      const oldFileName = title.split(' ').join('-') + '.js';
      const newFileName = `${title.split(' ').join('-')}&${id}&.js`;
      if (files.includes(oldFileName) && !files.includes(newFileName)) {
        fs.renameSync(`level-${level}/${oldFileName}`, `level-${level}/${newFileName}`, err => {
          console.log(err);
        });
      }
    });
  });
};

const titleLinkObject = await fetchTitleLink();
renameFileNamesWithID(titleLinkObject);
