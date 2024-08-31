/**
 * 할인 행사
 * https://school.programmers.co.kr/learn/courses/30/lessons/131127
 */

// 구현, 배열 활용
function solution(want, number, discount) {
  let answer = 0;

  // discount 배열에 want의 요소가 한개라도 없다면 early return
  for (const item of want) {
    if (discount.indexOf(item) === -1) {
      return 0;
    }
  }

  // 원하는 요소 객체 wanted 생성 및 구매 기간 선언
  const wanted = {};
  let period = 0;
  want.forEach((val, idx) => {
    wanted[want[idx]] = number[idx];
    period += number[idx];
  });

  // 구매 기간이 행사 기간보다 짧다면 early return
  if (period > discount.length) return 0;

  // 가능한 일자가 얼마나 있는지 계산
  for (let idx = 0; idx <= discount.length - period; idx += 1) {
    let flag = true;
    const arr = discount.slice(idx, idx + period);
    const obj = {};

    arr.forEach((val, idx) => {
      obj[val] = (obj[val] || 0) + 1;
    });

    for (const wantItem in wanted) {
      if (wanted[wantItem] !== obj[wantItem]) {
        flag = false;
        break;
      }
    }

    if (flag) {
      answer += 1;
    }
  }

  return answer;
}

// 다른 풀이
function solution(want, number, discount) {
  let count = 0;

  for (let i = 0; i < discount.length - 9; i++) {
    const slice = discount.slice(i, i + 10);

    let flag = true;
    for (let j = 0; j < want.length; j++) {
      if (slice.filter((item) => item === want[j]).length !== number[j]) {
        flag = false;
        break;
      }
    }

    if (flag) count += 1;
  }

  return count;
}
