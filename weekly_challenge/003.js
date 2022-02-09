// 모음 사전

// 나의 풀이
function solution(word) {
  const alphabet = ["A", "E", "I", "O", "U"];
  const storage = ["A", "E", "I", "O", "U"];
  let count = 1;

  while (count < 5) {
    let end = storage.length;
    let start = end - 5 ** count;

    for (let i = start; i < end; i++) {
      for (let j = 0; j < alphabet.length; j++) {
        storage.push(storage[i] + alphabet[j]);
      }
    }

    count++;
  }

  storage.sort();

  return storage.indexOf(word) + 1;
}
