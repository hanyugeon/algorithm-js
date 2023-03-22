/**
 * 매일 1명의 가수 노래 -> 문자 투표수로 점수 부여
 * k번째 이내이면 명예의 전당 리스트 등재
 *
 * k일 까지는 모든 출연 가수의 점수가 명예의 전당
 * k일 이후에는 k번째 순위의 가수 점수보다 높으면 명예의 전당
 *
 * 매일 명예의 전당 최하위 점수를 발표
 * k일간의 발표된 최하위 점수 배열로 return
 */

function solution(k, score) {
  const answer = [];
  let dailyWinners = [];

  for (let day = 0; day < score.length; day += 1) {
    dailyWinners.push(score[day]);
    dailyWinners.sort((a, b) => a - b);

    if (day > k - 1) dailyWinners = dailyWinners.slice(-k);

    answer.push(dailyWinners[0]);
  }

  return answer;
}
