import { dbToFile, writeDB } from './utils/db.js';
import { deleteDir } from './utils/file.js';
import { oldSolsToDB } from './utils/oldSols.js';

const run = () => {
  const db = oldSolsToDB();
  deleteDir('solutions');
  writeDB(db);
  dbToFile(db);
};

run();
