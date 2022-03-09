function solution(answer) {
  const arr = [];
  const students = [
    [1, 2, 3, 4, 5], 
    [2, 1, 2, 3, 2, 4, 2, 5], 
    [3, 3, 1, 1, 2, 2, 4, 4, 5, 5]
  ];
  const key = [];
  
  for (let i = 0; i < students.length; i++) {
    let temp = 0;

    for (let j = 0; j < answer.length; j++) {
      const k = j % students[i].length;

      if (students[i][k] == answer[j]) temp++
    }

    arr.push(temp);
  }

  const max = Math.max(...arr);

  for (let i = 0; i < students.length; i++) {
    if (arr[i] == max) key.push(i + 1);
  }

  return key;
}
