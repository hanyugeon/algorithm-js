function solution(d, budget) {
  // d: 부서별로 신청한 금액 ([]) (length: 1 ~ 100 / 1 ~ 100000)
  // budget: 예산 (1 ~ 10000000)

  const sortedArray = d.sort(function (a, b) {
    return a - b;
  });

  let temp = 0;

  for (let i = 0; i < sortedArray.length; i++) {
    temp += sortedArray[i];

    if (temp > budget) return i;
    if (temp === budget) return i + 1;
    if (i === sortedArray.length - 1) return sortedArray.length;
  }
}
