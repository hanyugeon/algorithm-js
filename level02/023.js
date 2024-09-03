/**
 * 뒤에 있는 큰 수 찾기
 * https://school.programmers.co.kr/learn/courses/30/lessons/154539
 */

// 내 풀이 (시간 초과)
function solution(numbers) {
  const result = [];

  // 뒷 큰수 구하는 함수
  const getBigNumber = (idx) => {
    for (let i = idx + 1; i <= numbers.length; i += 1) {
      if (numbers[i] === undefined) return -1;

      if (numbers[idx] >= numbers[i]) {
        continue;
      } else {
        return numbers[i];
      }

      return -1;
    }
  };

  for (let i = 0; i < numbers.length; i += 1) {
    const bigNumber = getBigNumber(i);

    result.push(bigNumber);
  }

  return result;
}

// 반대로 생각하기
function solution(numbers) {
  const result = new Array(numbers.length).fill(-1);

  // i는 현재 숫자, j는 뒷 수
  for (let i = numbers.length - 2; i >= 0; i -= 1) {
    for (let j = i + 1; j < numbers.length; j += 1) {
      // 현재 숫자 < 뒷 수 라면
      // result[i] = 뒷 수
      if (numbers[i] < numbers[j]) {
        result[i] = numbers[j];
        break;
      }

      // 뒷 수가 -1 이라면 다음 현재 숫자로 이동
      // 뒷 큰수가 존재하지 않을것이기 때문
      if (result[j] === -1) break;

      // (현재 숫자 < 뒷수) === false
      // (뒷 수 === -1) false
      // 현재 숫자 < 뒷 큰수 라면
      // result[i] = result[j]
      if (numbers[i] < result[j]) {
        result[i] = result[j];
        break;
      }
    }
  }

  return result;
}
