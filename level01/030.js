function solution(X, Y) {
  const answer = [];
  X = X.split("");
  Y = Y.split("");

  const addNumberToAnswer = (storage) => {
    storage.map((number) => answer.push(number));
  };

  for (let i = 0; i < 10; i += 1) {
    const storageX = X.filter((number) => number === `${i}`);
    const storageY = Y.filter((number) => number === `${i}`);
    storageX.length < storageY.length
      ? addNumberToAnswer(storageX)
      : addNumberToAnswer(storageY);
  }

  answer.sort((a, b) => {
    return b - a;
  });

  if (answer.length === 0) return "-1";
  if (answer[0] === "0") return "0";

  return answer.join("");
}

solution("100", "2345");
solution("100", "203045");
solution("100", "123450");
solution("12321", "42531");
solution("5525", "1255");
