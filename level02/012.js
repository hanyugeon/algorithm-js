// H-index (정렬)
// 나의 풀이
function solution(citations) {
  for (let h = citations.length; h >= 0; h--) {
    let quoted = 0;

    for (let i = 0; i < citations.length; i++) {
      if (citations[i] >= h) quoted++;
    }

    if (quoted >= h) return h;
  }
}

// 다른 풀이
function solution(citations) {
  let h = 0;

  citations.sort((a, b) => b - a); // 배열 내림차순 정리

  while (h + 1 <= citations[h]) h++;

  return h;
}
