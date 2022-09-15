function solution(survey, choices) {
  const getPoint = (point) => {
    if (point < 4) {
      return (4 - point) * -1;
    }
    if (point > 4) {
      return point - 4;
    }
  };

  const getIndex = (index) => {
    if (index == "RT" || index == "TR") {
      return 0;
    }
    if (index == "CF" || index == "FC") {
      return 1;
    }
    if (index == "JM" || index == "MJ") {
      return 2;
    }
    if (index == "AN" || index == "NA") {
      return 3;
    }
  };

  const sortIndex = (index) => {
    if (index == "TR" || index == "FC" || index == "MJ" || index == "NA") {
      return -1;
    }

    return 1;
  };

  const getResult = () => {
    let result = "";

    for (let i = 0; i < 4; i++) {
      if (points[i] > 0) {
        result += indices[i][1];
      } else if (points[i] < 0) {
        result += indices[i][0];
      } else if (points[i] == 0) {
        result += sortString(indices[i])[0];
      }
    }

    return result;
  };

  const sortString = (string) => {
    return string.split("").sort().join("");
  };

  const points = [0, 0, 0, 0];
  const indices = ["RT", "CF", "JM", "AN"];

  for (let i = 0; i < survey.length; i++) {
    if (choices[i] == 4) continue;

    const index = getIndex(survey[i]);
    const point = getPoint(choices[i]) * sortIndex(survey[i]);

    points[index] += point;
  }

  const answer = getResult();

  return answer;
}
