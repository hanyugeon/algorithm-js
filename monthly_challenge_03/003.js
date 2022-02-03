// n^2 배열 자르기

// 나의 풀이
function solution(n, left, right) {
  const arrOuter = [];
  const answer = [];

  for (let i = 0; i < n; i++) {
    const arrInner = [];

    for (let j = 0; j < i; j++) {
      arrInner.push(i + 1);
    }

    for (let k = i + 1; k <= n; k++) {
      arrInner.push(k);
    }

    arrOuter.push(arrInner);
  }

  for (let i = left; i <= right; i++) {
    const q = parseInt(i / n);
    const r = i % n;

    answer.push(arrOuter[q][r]);
  }

  return answer;
}

// 다른 풀이
/*
  완전 틀린 풀이는 아니지만
  위의 풀이같은 경우에는 효율성이 매우 떨어지는것으로 보인다.
  마지막으로 작성하였던 for문이 그나마
  효율성이 좋아 보여 그것을 활용해서 다시 풀어보기로 했다.
*/
function solution(n, left, right) {
  const answer = [];

  for (let i = left; i <= right; i++) {
    const q = parseInt(i / n) + 1;
    const r = (i % n) + 1;

    if (q > r) {
      answer.push(q);
    } else {
      answer.push(r);
    }
  }

  return answer;
}

// ㅅㅂ 성공
