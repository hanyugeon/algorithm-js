/**
 * N진수 게임
 * https://school.programmers.co.kr/learn/courses/30/lessons/17687
 */

/**
 * 여러 사람이 둥글게 앉아 숫자 하나씩 말하기
 * 첫번째 사람부터 0을 말함
 * 10부터는 한자리씩 끊어서 말함 1, 0
 *
 * 코딩 동아리 일부 사람들은 이진수로 함
 * 0, 1, 1, 0, 1, 1, 1, 0, 0, 1, 0, 1, 1, 1, 0, 1, 1, 1, ...
 *
 * 이제 하다하다 이진법에서 십육진법까지 한다고 한다.
 */

/**
 * n: 진법
 * t: 미리 구해야 할 숫자 갯수
 * m: 게임에 참가하는 인원
 * p: 튜브의 순서
 */
function solution(n, t, m, p) {
  const NUMBERS = {
    0: "0",
    1: "1",
    2: "2",
    3: "3",
    4: "4",
    5: "5",
    6: "6",
    7: "7",
    8: "8",
    9: "9",
    a: "A",
    b: "B",
    c: "C",
    d: "D",
    e: "E",
    f: "F",
  };

  const result = [];
  const answers = [];
  const maximum = t * m;

  for (let number = 0; number < maximum; number += 1) {
    const answerItem = number.toString(n);
    answerItem.split("").forEach((item) => {
      answers.push(NUMBERS[item]);
    });
  }

  for (let turn = 0; turn < t; turn += 1) {
    const playTurn = p - 1 + turn * m;
    result.push(answers[playTurn]);
  }

  return result.join("");
}
