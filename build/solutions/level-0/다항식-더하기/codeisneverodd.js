function solution(polynomial) {
  const countX = x => {
    const count = x.replaceAll('x', '');
    return count === '' ? 1 : +count;
  };

  const count = polynomial
    .split(' + ')
    .reduce((a, c) => (c.includes('x') ? { ...a, x: a.x + countX(c) } : { ...a, num: a.num + +c }), {
      x: 0,
      num: 0,
    });

  const x = count.x > 0 ? `${count.x > 1 ? count.x : ''}x` : '';
  const num = count.num > 0 ? '' + count.num : '';
  const plus = x !== '' && num !== '' ? ' + ' : '';

  return x + plus + num;
}
