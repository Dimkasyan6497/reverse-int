module.exports = function reverse (n) {
  if (n < 0) {n = -n};
  n += '';
  let i = n.length - 1;
  let result = '';
  while (i >= 0) {
    result += n[i];
    i--;
  }
  return result*1;
}
