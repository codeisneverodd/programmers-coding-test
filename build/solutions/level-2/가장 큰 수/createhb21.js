function solution(numbers) {
    let stringNum = 
      numbers.map((el) => el + '').sort((a,b) => (b+a) - (a+b));
  
    return stringNum[0] === '0' ? '0' : stringNum.join('');
}