//https://github.com/codeisneverodd/programmers-coding-test
//완벽한 정답이 아닙니다.
//정답 1 - codeisneverodd
function solution(id_pw, db) {
  const [id, pw] = id_pw;
  if (!db.find(([_id]) => _id === id)) return 'fail';
  return db.find(([_id, _pw]) => _id === id && _pw === pw) ? 'login' : 'wrong pw';
}
