function solution(chicken) {
  const order = coupons => {
    if (coupons < 10) return 0;
    const service = Math.floor(coupons / 10);
    return service + order(service + (coupons % 10));
  };
  return order(chicken);
}
