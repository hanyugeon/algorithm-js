/**
 * [PCCP 기출 문제]
 * 붕대 감기
 */

function solution(bandage, health, attacks) {
  /**
   * t초 동안 붕대 감기: 1초마다 x만큼의 체력을 회복
   * t초 동안 연속으로 붕대감기 성공: y만큼의 체력을 추가 회복
   * 공격당해 기술이 취소, 기술이 끝나면 그 즉시 붕대감기 다시 사용 -> 연속 성공 시간 0
   * 공격받으면 정해진 피해량만큼 체력이 줄어듦
   * 체력이 0 이하가 되면 사망, 회복 불가 상태 return -1
   * 생존 return (남은 채력)
   */

  /**
   * bandage = [t, x, y]
   * health = number
   * attack = [[time, damage], ...]
   */

  const entireTime = attacks[attacks.length - 1][0];
  const attackTimes = [];
  for (let idx = 0; idx < attacks.length; idx += 1) {
    attackTimes.push(attacks[idx][0]);
  }

  let playerHealth = health;
  let bandageTime = 0;

  for (let time = 1; time <= entireTime; time += 1) {
    if (attackTimes.indexOf(time) !== -1) {
      playerHealth -= attacks.shift()[1];
      bandageTime = 0;

      if (playerHealth <= 0) {
        return -1;
      }

      continue;
    }

    bandageTime += 1;
    playerHealth += bandage[1];

    if (bandageTime === bandage[0]) {
      bandageTime = 0;
      playerHealth += bandage[2];
    }

    if (playerHealth >= health) {
      playerHealth = health;
    }
  }

  return playerHealth;
}

solution([5, 1, 5], 30, [
  [2, 10],
  [9, 15],
  [10, 5],
  [11, 5],
]);
