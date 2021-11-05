// 03

/*
# 문제 설명
어느 연못에 엄마 말씀을 좀처럼 듣지 않는 청개구리가 살고 있었습니다.
청개구리는 엄마가 하는 말은 무엇이든 반대로 말하였습니다.

엄마 말씀 word가 매개변수로 주어질 때, 아래 청개구리 사전을 참고해 반대로 변환하여 return
하도록 solution 메서드를 완성해주세요.

A B C D E F G H I J K L M N O P Q R S T U V W X Y Z
Z Y X W V U T S R Q P O N M L K J I H G F E D C B A

# 제한 사항
word는 길이가 1 이상 1,000 이하인 문자열입니다.
알파벳 외의 문자는 변환하지 않습니다.
알파벳 대문자는 알파벳 대문자로, 알파벳 소문자는 알파벳 소문자로 변환합니다.

# 입출력 예
word        result
I love you  R olev blf
*/

// 나의 풀이
function solution(word) {
  let dictUp = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
  let dictLow = dictUp.map(v => v.toLowerCase());
  let length = dictUp.length - 1;
  let arr = [];
  let answer = '';

  for(let i = 0; i < word.length; i++) {
    if(word[i] == ' ') {
      arr.push(' ');
    }
    else {
      for(let j = 0; j < dictUp.length; j++) {
        if(word[i] == dictUp[j]) {
          arr.push(dictUp[length - j]);
        }
        else if(word[i] == dictLow[j]) {
          arr.push(dictLow[length - j]);
        }
      }
    }
  }

  answer = arr.join('');
  return answer;
}

const q1 = solution("I love you");
const q2 = solution("ZyXwV");
console.log(q1);
console.log(q2);