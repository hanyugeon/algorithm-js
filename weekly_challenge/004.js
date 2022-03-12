// 피로도
// 나의 풀이
function ascend(arr) {
  arr.sort((a, b) => {
    if (a[1] === b[1]) {
      return a[0] - b[0];
    }

    return a[1] - b[1];
  });

  return arr;
}

function solution(k, dungeons) {
  const dungeons = ascend(dungeons);
  let result = 0;

  for (let i = 0; i < dungeons.length; i++) {
    if (k >= dungeons[i][0]) {
      k -= dungeons[i][1];
      result++;
      console.log("if문 진입", result, k);
    } 
  }

  console.log("for문 탈출", result, k);

  return result;
}

/**
 * 배열을 소모 피로도가 적은 순으로 나열해서 최대한 돌게 하려고 했으나
 * 예외가 존재하였음
 * 따라서 dungeons의 최대 길이가 8이니
 * 완전탐색을 통한 구현이 가능하다고 생각함.
 * reduce() 메서드를 이용해서 풀이해보자.
 */

/**
 * 자료구조에 대한 개별 공부가 확실히 필요해 보임.
 * 어떻게 공부하면 효율적일까? 그 방법으로
 * 창의적이면서 계산적인 기능구현이 가능할까?
 */
