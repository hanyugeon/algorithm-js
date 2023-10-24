function solution(players, callings) {
  /**
   * 문제 풀이 포인트
   *
   * 배열로 탐색하는 것
   * 최대: O(N)
   *
   * 해시로 탐색하는 것
   * O(1)
   */

  // ojb로 player: idx로 복사
  const obj = {};
  for (let idx = 0; idx < players.length; idx += 1) {
    obj[players[idx]] = idx;
  }

  for (let idx = 0; idx < callings.length; idx += 1) {
    // playerIdx에 호명된 선수 idx 선언
    const calledPlayerIdx = obj[callings[idx]];

    // players 배열 업데이트
    const temp = players[calledPlayerIdx - 1];
    players[calledPlayerIdx - 1] = players[calledPlayerIdx];
    players[calledPlayerIdx] = temp;

    // obj 객체 업데이트
    obj[temp] = calledPlayerIdx;
    obj[callings[idx]] = calledPlayerIdx - 1;
  }

  return players;
}
