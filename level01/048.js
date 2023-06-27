function solution(name, yearning, photo) {
  const result = [];

  for (let i = 0; i < photo.length; i += 1) {
    let point = 0;

    for (let j = 0; j < photo[i].length; j += 1) {
      const nameIndex = name.indexOf(photo[i][j]);

      if (nameIndex === -1) continue;

      point += yearning[nameIndex];
    }

    result.push(point);
  }

  return result;
}
