function solution(s) {
  const answer = [-1];

  for (let i = 1; i < s.length; i += 1) {
    const target = s[i];

    for (let j = i - 1; j > -1; j -= 1) {
      if (target === s[j]) {
        answer.push(i - j);
        break;
      }
      if (j < 1) {
        answer.push(-1);
        break;
      }
    }
  }

  return answer;
}
