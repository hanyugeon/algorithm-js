// 바탕화면 상태: wallpaper
// 2차원 배열?
// 빈칸 . / 파일 있있는 칸  #
// 드래그 파일 선택, 선택해서 삭제 가능

/**
 * 드래그
 * S(lux, luy) -> E(rdx, rdy)
 *
 * 거리 |rdx - lux| + |rdy - luy|
 */

function solution(wallpaper) {
  const wallpaperArray = [];
  wallpaper.map((item) => wallpaperArray.push(item.split("")));
  const x = [];
  const y = [];
  const answer = [];

  for (let i = 0; i < wallpaper.length; i += 1) {
    for (let j = 0; j < wallpaper[0].length; j += 1) {
      if (wallpaper[i][j] === "#") {
        x.push(i);
        y.push(j);

        continue;
      }
    }
  }

  const sortedX = x.sort((a, b) => a - b);
  const sortedY = y.sort((a, b) => a - b);

  answer.push(sortedX[0]);
  answer.push(sortedY[0]);
  answer.push(sortedX.pop() + 1);
  answer.push(sortedY.pop() + 1);

  return answer;
}

// 다른 풀이
function solution(wallpaper) {
  const top = [];
  const bottom = [];
  const left = [];
  const right = [];

  wallpaper.forEach((val01, idx01) => {
    [...val01].forEach((val02, idx02) => {
      if (val02 === "#") {
        top.push(idx02);
        bottom.push(idx02 + 1);
        left.push(idx01);
        right.push(idx01 + 1);
      }
    });
  });

  return [
    Math.min(...left),
    Math.min(...top),
    Math.max(...right),
    Math.max(...bottom),
  ];
}

// 개선 된 풀이
function solution(wallpaper) {
  const wallpaperArray = [];
  wallpaper.map((item) => wallpaperArray.push(item.split("")));

  const x = [];
  const y = [];

  for (let i = 0; i < wallpaper.length; i += 1) {
    for (let j = 0; j < wallpaper[0].length; j += 1) {
      if (wallpaper[i][j] === "#") {
        x.push(i);
        y.push(j);

        continue;
      }
    }
  }

  return [
    Math.min(...x),
    Math.min(...y),
    Math.max(...x) + 1,
    Math.max(...y) + 1,
  ];
}
