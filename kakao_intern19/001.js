// 나의 풀이
function solution(board, moves) {
  const filteredBoard = [];
  const array = [];
  let answer = 0;

  for (let i = 0; i < board.length; i++) {
    filteredBoard.push(board[i].filter((x) => x > 0));
  }

  moves = moves.map((x) => x - 1);

  // 첫번째 시행
  const firstDoll = filteredBoard[moves[0]].pop();

  if (firstDoll !== undefined) {
    array.push(firstDoll);
  }

  // 나머지 시행
  for (let i = 1; i < moves.length; i++) {
    const doll = filteredBoard[moves[i]].pop();

    if (doll !== undefined) {
      array.push(doll);
    }
  }

  // 점수 계산
  answer = countDoll(array);

  return answer;
}

function countDoll(array) {
  let count = 0;
  for (let i = 1; i < array.length - 1; i++) {
    if (array[i - 1] === array[i]) {
      array.splice(i - 1, i);

      count += 2;
      i--;
    }
  }

  return count;
}

// 다른 풀이
function solution(board, moves) {
  let result = 0;
  let temp = 0;
  let basket = [];

  for (let i = 0; i < moves.length; i++) {
    for (let j = 0; j < board.length; j++) {
      if (board[j][moves[i] - 1] !== 0) {
        if (temp === board[j][moves[i] - 1]) {
          result += 2;

          if (basket.length > 0) {
            basket.pop();
            temp = basket[basket.length - 1];
          } else {
            temp = 0;
          }
        } else {
          basket.push(board[j][moves[i] - 1]);
          temp = board[j][moves[i] - 1];
        }

        board[j][moves[i] - 1] = 0;
        break;
      }
    }
  }

  return result;
}

// 다시 풀이
function solution(board, moves) {
  const basket = [];
  let temp = 0;
  let score = 0;

  for (let i = 0; i < moves.length; i++) {
    for (let j = 0; j < board.length; j++) {
      if (board[j][moves[i] - 1] !== 0) {
        if (temp === board[j][moves[i] - 1]) {
          result += 2;

          if (basket.length > 0) {
            basket.pop();
            temp = basket[basket.length - 1];
          } else {
            temp = 0;
          }
        } else {
          basket.push(board[j][moves[i] - 1]);
          temp = board[j][moves[i] - 1];
        }

        board[j][moves[i] - 1] = 0;
        break;
      }
    }
  }

  return result;
}
