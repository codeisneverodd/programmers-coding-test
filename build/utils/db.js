import { nanoid } from 'nanoid';
import { makeDir, readFile, writeFile } from './file.js';
export const getDB = () => JSON.parse(readFile('results/db.json'));
export const writeDB = (content) => writeFile({
    dirName: 'results',
    fileName: `db.json`,
    content: JSON.stringify(content),
});
/** Sol 하나를 DB 및 파일에 추가 */
export const addSol = ({ author, code, probId }) => {
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
        const newSol = {
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
export const dbToFile = () => {
    const { sols } = getDB();
    sols.forEach((sol) => addSol(sol));
};
