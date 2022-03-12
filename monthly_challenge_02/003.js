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

// 다른 풀이
function solution(numbers) {
  const answer = [];

  numbers.forEach(e => {
    let binNum = '0' + e.toString(2);
    let binLen = binNum.length;
    
    if (binNum[binLen - 1] === '0') {
      answer.push(e + 1);
    } else {
      for (let i = binLen; i >= 0; i--) {
        if (binNum[i] === '0') {
          answer.push(parseInt(binNum.substring(0, i) + "1" + "0" + binNum.substring(i + 2, l), 2));          
          break;
        }
      }
    }
  });

  return answer;
}

/**
 * 1. 맨 끝자리가 0인 경우
 * 2. 01이 나오는 경우 => 01을 서로 10으로 바꾸어 준다.
 * 활용한 메서드
 * forEach()
 * 문자열 특정 위치 바꾸어서 출력하기
 */
