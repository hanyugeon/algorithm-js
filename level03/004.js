/**
 * 단어 변환
 * https://school.programmers.co.kr/learn/courses/30/lessons/43163
 */

/**
 * DFS가 조금 더 효율적일 것 같아 DFS로 풀었지만
 * BFS로 풀어도 가능하지 않을까? 생각이 들기도 했다.
 *
 * 1. 우선 words에 target이 포함되지 않았다면 return 0 얼리리턴 시켜줬다.
 * 2. words를 배열이 있어 따로 그래프를 그리진 않았다.
 * 3. isVisited 객체를 따로 만들어 depth를 계산하였다.
 * 4. DFS 탐색이 끝나면 depth를 계산하고 return 한다.
 * 5. 만약 target이 탐색되지 못했다면 return 0 해준다.
 */

function solution(begin, target, words) {
  if (words.indexOf(target) === -1) return 0;

  const isVisited = {};
  words.forEach((word) => (isVisited[word] = 0));

  const isChangeable = (word, target) => {
    let temp = 0;

    for (let idx = 0; idx < word.length; idx += 1) {
      if (word[idx] === target[idx]) temp += 1;
    }

    return temp + 1 === word.length ? true : false;
  };

  const dfs = () => {
    const stack = [begin];
    isVisited[begin] = 1;

    while (stack.length) {
      const currentNode = stack.pop();

      for (let idx = 0; idx < words.length; idx += 1) {
        const newNode = words[idx];

        if (!isChangeable(currentNode, newNode)) continue;
        if (isVisited[newNode] !== 0) continue;

        isVisited[newNode] = isVisited[currentNode] + 1;
        stack.push(newNode);
      }
    }
  };

  dfs();

  const answer = isVisited[target] - 1;

  return answer !== -1 ? answer : 0;
}

/**
 * DFS에서 BFS로 바꾸었더니
 * 평균 실행 시간이 줄어든것을 확인!
 */

function solution(begin, target, words) {
  if (words.indexOf(target) === -1) return 0;

  const isVisited = {};
  words.forEach((word) => (isVisited[word] = 0));

  const isChangeable = (word, target) => {
    let temp = 0;

    for (let idx = 0; idx < word.length; idx += 1) {
      if (word[idx] === target[idx]) temp += 1;
    }

    return temp + 1 === word.length ? true : false;
  };

  const bfs = () => {
    const stack = [begin];
    isVisited[begin] = 1;

    while (stack.length) {
      const currentNode = stack.shift();

      for (let idx = 0; idx < words.length; idx += 1) {
        const newNode = words[idx];

        if (isVisited[newNode] !== 0) continue;
        if (!isChangeable(currentNode, newNode)) continue;

        isVisited[newNode] = isVisited[currentNode] + 1;
        stack.push(newNode);
      }
    }
  };

  bfs();

  const answer = isVisited[target] - 1;

  return answer !== -1 ? answer : 0;
}

/**
 * BFS가 맞을 것 같다, 이유는?
 * 최솟값을 찾아가며
 * 최솟값보다 길어지는 경우에는
 * 모두 return 해버리기
 */

/**
 * words에 target이 없다면 early return
 * 단어를 해시로 확인할 수 있게 객체 테이블 생성
 * 단어 변환이 가능한지 확인하는 함수 필요
 */

function solution(begin, target, words) {
  if (words.indexOf(target) === -1) return 0;

  const isVisited = {};
  words.forEach((word) => (isVisited[word] = 0));

  const isChangeable = ([curWord, newWord]) => {
    let diffCount = 0;

    for (let idx = 0; idx < curWord.length; idx += 1) {
      if (curWord[idx] !== newWord[idx]) {
        diffCount += 1;
      }

      if (diffCount > 1) return false;
    }

    return true;
  };

  const bfs = () => {
    const queue = [begin];
    isVisited[begin] = 0;

    while (queue.length > 0) {
      const curWord = queue.shift();

      for (let idx = 0; idx < words.length; idx += 1) {
        const newWord = words[idx];

        if (isVisited[newWord] !== 0) continue;
        if (curWord === newWord) continue;
        if (!isChangeable([curWord, newWord])) continue;

        isVisited[newWord] = isVisited[curWord] + 1;
        queue.push(newWord);
      }
    }
  };

  bfs();

  return isVisited[target];
}

// 복습
/**
 * DFS, BFS 둘 중 무엇이 더 효율적일 지 고민
 * DFS가 더 효율적일 듯
 */
function solution(begin, target, words) {
  if (words.indexOf(target) === -1) return 0;
  let minChangeCount = 0;

  // 단어 변환 가능여부 return 함수
  const isChangeable = (word, target) => {
    let difference = 0;

    for (let idx = 0; idx < word.length; idx += 1) {
      if (word[idx] !== target[idx]) difference += 1;
      if (difference > 1) return false;
    }

    if (difference === 0) return false;

    return true;
  };

  // dfs 구현
  const dfs = (initialNode) => {
    const isVisited = Array(words.length).fill(0);
    isVisited[initialNode] = 1;

    const stack = [initialNode];

    while (stack.length > 0) {
      const currentNode = stack.pop();
      const currentCount = isVisited[currentNode];

      if (words[currentNode] === target) {
        if (minChangeCount === 0 || minChangeCount > currentCount) {
          minChangeCount = currentCount;
        }

        break;
      }

      if (minChangeCount !== 0 && currentCount >= minChangeCount) break;

      for (let nextNode = 0; nextNode < words.length; nextNode += 1) {
        if (isVisited[nextNode] !== 0) continue;
        if (!isChangeable(words[currentNode], words[nextNode])) continue;

        stack.push(nextNode);
        isVisited[nextNode] = currentCount + 1;
      }
    }
  };

  // 차례대로 words를 순회
  for (let initialNode = 0; initialNode < words.length; initialNode += 1) {
    if (!isChangeable(begin, words[initialNode])) continue;

    dfs(initialNode);
  }

  return minChangeCount;
}
/**
 * 너무 풀이 속도가 느린 것 같다
 * 풀이 속도도 느리고 DFS, BFS유형 이해도가 많이 죽은듯..
 * 더 노력하자!
 */
