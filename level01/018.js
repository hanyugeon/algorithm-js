// 소수 찾기

/*
# 문제 설명
1부터 입력받은 숫자 n 사이에 있는 소수의 개수를 반환하는 함수, solution을 만들어 보세요.

소수는 1과 자기 자신으로만 나누어지는 수를 의미합니다.
(1은 소수가 아닙니다.)

# 제한 조건
n은 2이상 1000000이하의 자연수입니다.

# 입출력 예
n	    result
10    4
5     3

# 입출력 예 설명
입출력 예 #1
1부터 10 사이의 소수는 [2,3,5,7] 4개가 존재하므로 4를 반환

입출력 예 #2
1부터 5 사이의 소수는 [2,3,5] 3개가 존재하므로 3를 반환
*/

// 나의 풀이
function solution(n) {
  const answer = [];

  const isPrime = (x) => {
    for (let i = 2; i < x; i++) {
      if (x % i === 0) {
        return;
      }
    }

    answer.push(x);
  };

  for (let i = 2; i <= n; i++) {
    isPrime(i);
  }

  return answer.length;
}

// 다시 작성해보기
/*
# 시도해 볼 방법
- 2부터 1000000이하의 소수 집합 정의
- 조건반복문을 통해 소수 집합에 들어있는지 확인
  - 들어있다면 정답 집합에 .push()
- 반복문이 끝나면 정답 집합 길이 반환하기
*/

function solution(n) {
  const arr = [];
  let answer = 0;

  for (let i = 2; i <= n; i++) arr.push(i);

  for (let j = 2; j <= n; j++) {
    if (arr[j] === 0) continue;

    for (let k = j * 2; k <= n; k += j) {
      arr[k] = 0;
    }
  }

  for (let i = 2; i <= n; i++) {
    if (arr[i] !== 0) answer++;
  }

  return answer;
}
