// 2개 이하로 다른 비트
// 나의 풀이
function solution(numbers) {
  const answer = [];
  
  for (let i = 0; i < numbers.length; i++) {
    let temp = numbers[i];
    let next = temp + 1;
    let tempBin = temp.toString(2);
    let nextBin = next.toString(2);

    while(true) {
      if (tempBin.length === nextBin.length) break;
  
      tempBin = '0' + tempBin;
    }
  
    while (true) {
      let count = 0;
  
      for (let j = 0; j < tempBin.length; j++) {
        if (tempBin[j] !== (next.toString(2))[j]) count++;
      }
  
      if (count > 2) {
        next++;
        continue;
      } else {
        answer.push(next);
        break;
      }
    }
  }

  return answer;
}
