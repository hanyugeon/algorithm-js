/**
 * 자신의 기사 번호의 약수 개수에 해당하는 공격력의 무기 구매
 * but 공격력의 제한 수치를 정함.
 *
 * 제한 수치보다 큰 공격력을 가진 무기 구매할때는 기관에서 정한 공격력의 무기 구매해야.
 *
 * 무기를 모두 만들기 위해 필요한 철의 무게를 미리 계산
 *
 */

/**
 * 순회 -> 약수의 갯수 return -> (이때 overpower 예외처리 return) -> 배열에 정리
 *
 */

function solution(number, limit, power) {
  let answer = 0;

  for (let cur = 1; cur <= number; cur++) {
    let devisors = 0;

    for (let idx = 1; idx <= cur / 2; idx++) {
      if (cur % idx === 0) devisors++;
    }

    if (devisors + 1 > limit) {
      answer += power;
    } else {
      answer += devisors + 1;
    }
  }

  return answer;
}
