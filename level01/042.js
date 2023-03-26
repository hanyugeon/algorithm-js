/**
 * a - z 안에서 index만큼 바꾸기
 * skip에 있는 알파벳은 제외하고.
 */

function solution(s, skip, index) {
  let answer = "";
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  const array = alphabet.split("");

  for (let i = 0; i < skip.length; i += 1) {
    const idx = array.indexOf(skip[i]);

    if (idx === -1) continue;

    array[idx] = "0";
  }

  const filteredArray = array.filter((value) => value !== "0");

  for (let i = 0; i < s.length; i += 1) {
    const idx = filteredArray.indexOf(s[i]);

    answer += filteredArray[(idx + index) % filteredArray.length];
  }

  return answer;
}

const solution = (s, skip, index) => {
  let answer = "";
  const matched = "abcdefghijklmnopqrstuvwxyz".match(
    // RegExp 생성자는 패턴을 사용해 텍스트를 판별할 때 사용합니다.
    new RegExp(`[^${skip}]`, "g")
  );

  for (const char of s) {
    const newIdx = matched.indexOf(char) + index;
    answer += matched[newIdx % matched.length];
  }

  return answer;
};
