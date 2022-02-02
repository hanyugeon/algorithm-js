// 가장 큰 정사각형 찾기

/*
# 문제 설명
1와 0로 채워진 표(board)가 있습니다.
표 1칸은 1 x 1 의 정사각형으로 이루어져 있습니다.
표에서 1로 이루어진 가장 큰 정사각형을 찾아 넓이를 return 하는 solution 함수를 완성해 주세요.
(단, 정사각형이란 축에 평행한 정사각형을 말합니다.)

예를 들어
1	2	3	4
0	1	1	1
1	1	1	1
1	1	1	1
0	0	1	0
가 있다면 가장 큰 정사각형은

1 1 1
1 1 1
1 1 1
가 되며 넓이는 9가 되므로 9를 반환해 주면 됩니다.

# 제한사항
표(board)는 2차원 배열로 주어집니다.
표(board)의 행(row)의 크기 : 1,000 이하의 자연수
표(board)의 열(column)의 크기 : 1,000 이하의 자연수
표(board)의 값은 1또는 0으로만 이루어져 있습니다.

# 입출력 예
board                                     answer
[[0,1,1,1],[1,1,1,1],[1,1,1,1],[0,0,1,0]] 9
[[0,0,1,1],[1,1,1,1]]                     4

# 입출력 예 설명
입출력 예 #1
위의 예시와 같습니다.

입출력 예 #2
| 0 | 0 | 1 | 1 |
| 1 | 1 | 1 | 1 |
로 가장 큰 정사각형의 넓이는 4가 되므로 4를 return합니다.
*/

// 나의 풀이
/*
  내가 생각한 구조
  00. let answer = 1; (answer는 최대 사각형의 넓이)
  01. 함수01 => 변 찾기
  02. 함수02 => 정사각형 성립하는지 확인
*/

function solution(board) {
  const columnLimit = board.length; // 세로
  const rowLimit = board[0].length; // 가로

  const isSquare = (i, j, k) => {
    const length = k - j + 1;
    for (let n = i + 1; n < length - 1; n++) {
      for (let m = j; m < j + length; j++) {
        if (board[n][m] === 0) return false;
      }
    }

    return true;
  };

  for (let i = 0; i < columnLimit; i++) {
    let row = 0;

    for (let j = 0; j < rowLimit; j++) {
      let rowTemp = 0;

      if (board[i][j] === 1) {
        rowTemp = 1;

        for (let k = j + 1; k < rowLimit; k++) {
          if (board[i][k] === 0) break;

          rowTemp++;
          // if (rowTemp < row) break;
          if (rowTemp + i > columnLimit) break;

          if (isSquare(i, j, k) == true) {
            row = rowTemp;
            console.log(row);
            break;
          } else if (isSquare(i, j, k) == false) {
            break;
          }
        }
      }
    }
    answer = row * row;
  }
}

// 다른 풀이
// https://velog.io/@proshy/%ED%94%84%EB%A1%9C%EA%B7%B8%EB%9E%98%EB%A8%B8%EC%8A%A4JS-%EA%B0%80%EC%9E%A5-%ED%81%B0-%EC%A0%95%EC%82%AC%EA%B0%81%ED%98%95-%EC%B0%BE%EA%B8%B0
// 거의 2시간 동안 못풀어서 다른이의 풀이 참고...
function solution(board) {
  const column = board.length;
  const row = board[0].length;
  let answer = 0;

  if (column === 1 || row === 1) return 1;

  for (let i = 1; i < column; i++) {
    for (let j = 1; j < row; j++) {
      if (board[i][j] > 0) {
        const up = board[i - 1][j];
        const left = board[i][j - 1];
        const cross = board[i - 1][j - 1];
        const minNum = Math.min(up, left, cross);

        board[i][j] = minNum + 1;
        answer = Math.max(answer, board[i][j]);
      }
    }
  }

  return answer * answer;
}

// let answer = 0 이 아닌 다른 수를 선언하면 왜 안되는 걸까?
