/**
 * 카드 2뭉치 주어짐
 * 원하는 뭉치에서 순서대로 1장씩
 * 한 번 사용한카드는 사용 불가
 * 카드를 사용하지 않고 다음 카드 사용 불가
 * 기존에 주어진 카드 뭉치의 단어 순서 바꾸기 불가
 *
 * Queue활용, shift()
 */

function solution(cards1, cards2, goal) {
  for (let i = 0; i < goal.length; i += 1) {
    if (cards1[0] === goal[i]) {
      cards1.shift();
    } else if (cards2[0] === goal[i]) {
      cards2.shift();
    } else {
      return "No";
    }
  }

  return "Yes";
}
