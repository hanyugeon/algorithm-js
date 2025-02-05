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
