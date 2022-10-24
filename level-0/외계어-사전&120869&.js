//https://github.com/codeisneverodd/programmers-coding-test
//완벽한 정답이 아닙니다.
//정답 1 - codeisneverodd
function solution(spell, dic) {
  const sort = str => [...str].sort((a, b) => (a < b ? -1 : a !== b ? 1 : 0)).join('');
  return dic.find(dic => sort(dic) === sort(spell.join(''))) ? 1 : 2;
}
