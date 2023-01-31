function solution(s) {
  const regexes = [
    /zero/gi,
    /one/gi,
    /two/gi,
    /three/gi,
    /four/gi,
    /five/gi,
    /six/gi,
    /seven/gi,
    /eight/gi,
    /nine/gi,
  ];

  regexes.map((regex, idx) => (s = s.replace(regex, idx)));

  return parseInt(s, 10);
}

function solution(s) {
  const words = [
    "zero",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
  ];

  words.map((word, idx) => (s = s.split(word).join(idx)));

  return parseInt(s, 10);
}

solution("one4seveneight");
solution("23four5six7");
solution("2three45sixseven");
solution("123");
