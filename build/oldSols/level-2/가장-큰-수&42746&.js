//https://github.com/codeisneverodd/programmers-coding-test
//완벽한 정답이 아닙니다.
//정답 1 - codeisneverodd
function solution(numbers) {
    var answer = '';
    numbers.sort(sortFunc)
    answer = numbers.join('')
    if (answer[0] === '0') return '0'
    return answer;
}

const sortFunc = (a, b) => {
    const compareA = parseInt(a.toString() + b.toString())
    const compareB = parseInt(b.toString() + a.toString())
    return compareB - compareA
}


// 정답 2 - createhb21
function solution(numbers) {
    let stringNum = 
      numbers.map((el) => el + '').sort((a,b) => (b+a) - (a+b));
  
    return stringNum[0] === '0' ? '0' : stringNum.join('');
}

// 정답 3 - prove-ability
function solution(numbers) {
  if(numbers.every(v => v === 0)) return "0";
  return numbers.sort((a, b) => {
      if(a === b) return 0;
      let stringA = a.toString(10), stringB = b.toString(10);
      if(stringA[0] === stringB[0]) {
          let aIndex = 1, bIndex = 1;
          while(true) {
              if(!stringA[aIndex]) --aIndex;
              if(!stringB[bIndex]) --bIndex;
              if(stringA[aIndex] === stringB[bIndex]) {
                  aIndex++, bIndex++;
                  continue;
              }
              if(stringA[aIndex] < stringB[bIndex]) return 1;
              else return -1;
          }            
      } 
      return stringB[0] - stringA[0]
  }).join("");
}

// 정답 4 - prove-ability
function solution(numbers) {
  return numbers.every(v => v === 0) ? "0" : numbers.map(v => v.toString(10)).sort((a,b) => (b+a) - (a+b)).join("");
}
