function solution(id_pw, db) {
  const [id, pw] = id_pw;
  if (!db.find(([_id]) => _id === id)) return 'fail';
  return db.find(([_id, _pw]) => _id === id && _pw === pw) ? 'login' : 'wrong pw';
}
