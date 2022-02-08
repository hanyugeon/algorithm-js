// 이진 변환 반복하기

/*
  s에서 0 제거 -> 1의 갯수(c) 구하기 -> c.toString(2) 이진 변환
*/

// 나의 풀이
function solution(s) {
  const answer = [0, 0];
  let c = s.length;

  const getC = (x) => {
    let count = 0;
    let zeroSum = 0;

    for (let i = 0; i < x.length; i++) {
      if (x[i] === "1") {
        count++;
      } else {
        zeroSum++;
      }
    }

    answer[0] += 1;
    answer[1] += zeroSum;

    return count;
  };

  while (c > 1) {
    c = getC(s);
    s = c.toString(2);
  }

  return answer;
}
