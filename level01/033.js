function solution(babbling) {
  const words = ["aya", "ye", "woo", "ma"];
  let answer = 0;

  babbling.map((babble) => {
    words.map((word) => {
      if (babble.includes(word.repeat(2))) return;

      babble = babble.split(word).join(" ");
    });

    if (babble.split(" ").join("").length === 0) answer += 1;
  });

  return answer;
}

solution(["aya", "yee", "u", "maa"]);
solution(["ayaye", "uuu", "yeye", "yemawoo", "ayaayaa"]);
