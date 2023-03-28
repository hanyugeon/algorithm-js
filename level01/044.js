/**
 * 휴대폰 자판 (+ 메크로 기능)
 * 키의 갯수 1 ~ 100
 * 특정키에 메크로 기능
 * 경우1: 자판 전체에 같은 문자 여러 번 할당
 * 경우2: 키 하나에 같은 문자 여러 번 할당
 * 경우3: 아예 할당 되지 않은 경우
 *
 * 특정 문자열 작성할 떄 최소 몇 번 눌러야 가능한지 구하기
 * keymap
 * targets
 *
 * queue? 써야할 듯.
 */

function solution(keymap, targets) {
  const answer = [];

  const getLowerIndex = (target) => {
    let lowerIndex = -1;

    for (let idx = 0; idx < keymap.length; idx += 1) {
      const index = keymap[idx].indexOf(target);

      if (index === -1) continue;
      if (lowerIndex === -1) lowerIndex = index;
      if (index < lowerIndex) lowerIndex = index;
    }

    return lowerIndex;
  };

  for (let i = 0; i < targets.length; i += 1) {
    const target = targets[i];
    let temp = 0;

    for (let j = 0; j < target.length; j += 1) {
      const index = getLowerIndex(target[j]);

      if (index === -1) {
        answer.push(-1);
        break;
      }

      temp += index + 1;

      if (j > target.length) {
        answer.push(temp);
        temp = 0;
        break;
      }
    }
  }

  return answer;
}
