function solution(s) {
  let parseInts = parseInt(s);
  if (s.length == 6 || s.length == 4) {
    if (s == parseInts) {
      return true;
    }
  }

  return false;
}

