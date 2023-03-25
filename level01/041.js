function solution(t, p) {
  let answer = 0;
  const totalSize = t.length;
  const sliceSize = p.length;

  for (let i = 0; i <= totalSize - sliceSize; i += 1) {
    if (t.slice(i, i + sliceSize) <= p) {
      answer += 1;
      continue;
    }
  }

  return answer;
}
