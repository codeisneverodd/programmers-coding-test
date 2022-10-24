//https://github.com/codeisneverodd/programmers-coding-test
//완벽한 정답이 아닙니다.
//정답 1 - codeisneverodd
function solution(babbling) {
  const convertPWordsToNum = word => {
    const pWords = ['aya', 'ye', 'woo', 'ma'];
    return pWords.reduce((result, pWord, i) => result.replaceAll(pWord, i), word);
  };
  const canPronounce = word => {
    const result = convertPWordsToNum(word);
    return !/[^\d]/.test(result) && [...result].every((num, i) => i + 1 > result.length || num !== result[i + 1]);
  };

  return babbling.filter(b => canPronounce(b)).length;
}
