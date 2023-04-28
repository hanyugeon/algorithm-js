function solution(park, routes) {
  const parkWidth = park[0].length;
  const parkHeight = park.length;
  const parkString = park.reduce((acc, val) => {
    return acc + val;
  });
  const routeString = routes.reduce((acc, val) => {
    return acc + val[0].repeat(parseInt(val[2], 10));
  }, "");

  let startPoint = [
    parseInt(parkString.indexOf("S") / parkWidth, 10),
    parkString.indexOf("S") % parkWidth,
  ];
  const obstaclePoints = [];

  const getObstaclePoints = () => {
    if (parkString.indexOf("X") === -1) return;

    for (let idx = 0; idx < parkString.length; idx += 1) {
      if (parkString[idx] !== "X") continue;

      obstaclePoints.push([parseInt(idx / parkWidth, 10), idx % parkWidth]);
    }
  };

  getObstaclePoints();

  const walk = (routeChar) => {
    const temp = startPoint;

    switch (routeChar) {
      case "N":
        temp[0] += -1;
      case "S":
        temp[0] += 1;
      case "W":
        temp[1] += -1;
      case "E":
        temp[1] += 1;
    }

    if (temp[0] > parkHeight - 1 || temp[1] > parkWidth - 1) return;
    if (temp[0] < 0 || temp[1] < 0) return;
    for (let idx = 0; idx < obstaclePoints.length; idx += 1) {
      if (temp === obstaclePoints[idx]) return;
    }

    return (startPoint = temp);
  };

  for (let idx = 0; idx < routeString.length; idx += 1) {
    walk(routeString[idx]);
  }

  return startPoint;
}

// 못 풀었다. (이게 왜 레벨 1?)
// x, y좌표 따로 해서 풀어보기.
function solution(park, routes) {
  const result = [];

  return result;
}
