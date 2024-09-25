/**
 * 전화번호 목록
 * https://school.programmers.co.kr/learn/courses/30/lessons/42577
 */

/**
 * 순회 및 정렬을 활용한 풀이 (효율성 테스트 X)
 *
 * 아무래도 최악의 경우에는 O(n^2)이기 때문에 그런것 같다.
 */
function solution(phone_book) {
  const phoneBook = phone_book.sort();

  let targetIdx = 0;
  for (const phoneNumber of phoneBook) {
    for (let idx = 0; idx < phoneBook.length; idx += 1) {
      if (targetIdx === idx) continue;
      if (phoneNumber.length === phoneBook[idx].length) continue;

      if (phoneNumber.startsWith(phoneBook[idx])) {
        return false;
      }
    }

    targetIdx += 1;
  }

  return true;
}

/**
 * 순회 및 정렬을 활용한 다른 풀이 (통과)
 *
 * 고차함수 some()을 활용
 * 똑같은 순회인데 O(2n)이라 통과
 */
function solution(phone_book) {
  const phoneBook = phone_book.sort();

  const isPrefix = phoneBook.some((phoneNumber, idx) => {
    if (phoneNumber.length !== phoneBook[idx + 1]?.length) {
      return phoneBook[idx + 1]?.startsWith(phoneNumber);
    }
  });

  return !isPrefix;
}

/**
 * 해시 테이블을 활용한 정석 풀이 (통과)
 *
 * 해시 문제이지만 뭔가 정렬이후 순회하며 탐색하는게 더 깔끔해 보인다.
 * 하지만 javascript의 sort() 알고리즘은 다른 언어와는 다르다고 알고있음.
 * javascript 한정으로 정렬로 풀었을 때 운이좋게 풀 수 있는것이 아닌가 하는 개인적인 생각.
 */
function solution(phone_book) {
  const hashTable = {};

  for (const number of phone_book) {
    hashTable[number] = true;
  }

  for (const number of phone_book) {
    for (let i = 1; i < number.length; i++) {
      const prefix = number.substring(0, i);

      if (hashTable[prefix]) return false;
    }
  }

  return true;
}
