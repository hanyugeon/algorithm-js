/**
 * 연속 부분 수열 합의 개수
 * https://school.programmers.co.kr/learn/courses/30/lessons/131701
 */

function solution(elements) {
  const sequences = [];
  const elLength = elements.length;
  const el = elements.concat(elements);

  for (let seqLength = 1; seqLength <= elLength; seqLength += 1) {
    for (let i = 0; i < elLength; i += 1) {
      const sequence = el.slice(i, i + seqLength);

      const sum = sequence.reduce((acc, cur) => {
        return acc + cur;
      }, 0);

      sequences.push(sum);
    }
  }

  const set = new Set(sequences);
  const answer = [...set];

  return answer.length;
}

// 다른 사람 풀이
function solution(elements) {
  const circular = elements.concat(elements);
  const set = new Set();

  for (let i = 0; i < elements.length; i++) {
    let sum = 0;

    for (let j = 0; j < elements.length; j++) {
      sum += circular[i + j];
      set.add(sum);
    }
  }

  return set.size;
}
