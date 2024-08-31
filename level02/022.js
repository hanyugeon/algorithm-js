/**
 * 롤케이크 자르기 객체 활용(set, map)
 * https://school.programmers.co.kr/learn/courses/30/lessons/132265
 */

// 실패
// slice를 하면 O(n) * (O(n) * 2) -> O(2(n^2)) 당연 느릴 수 밖에.
for (let idx = 1; idx < topping.length - 1; idx += 1) {
  const me = topping.slice(0, idx);
  const brother = topping.slice(idx);

  const meSet = new Set(me);
  const brotherSet = new Set(brother);

  if (meSet.size === brotherSet.size) {
    answer += 1;
  }
}

return answer;

// 개선 방향
// 최대한 반복을 줄이자.
// O(2n)
function solution(topping) {
  if (topping.length === 1) return 0;

  let answer = 0;
  const map = new Map();
  const set = new Set();

  for (const item of topping) {
    map.has(item) ? map.set(item, map.get(item) + 1) : map.set(item, 1);
  }

  for (const item of topping) {
    set.add(item);

    const itemCount = map.get(item) - 1;
    itemCount === 0 ? map.delete(item) : map.set(item, itemCount);

    if (map.size === set.size) answer += 1;
  }

  return answer;
}
