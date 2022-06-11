module.exports = (primeData) => {
  if (primeData <= 1) {
    return false;
  }
  for (let i = 2; i < primeData; i++) {
    if (primeData % i === 0) return false;
  }
  return true;
};