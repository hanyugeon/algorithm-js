// JadenCase 문자열 만들기

/*
# 문제 설명
JadenCase란 모든 단어의 첫 문자가 대문자이고, 그 외의 알파벳은 소문자인 문자열입니다. 문자열 s가 주어졌을 때, s를 JadenCase로 바꾼 문자열을 리턴하는 함수, solution을 완성해주세요.

# 제한 조건
s는 길이 1 이상인 문자열입니다.
s는 알파벳과 공백문자(" ")로 이루어져 있습니다.
첫 문자가 영문이 아닐때에는 이어지는 영문은 소문자로 씁니다. ( 첫번째 입출력 예 참고 )

# 입출력 예
s	                    return
"3people unFollowed me"	"3people Unfollowed Me"
"for the last week"	    "For The Last Week"
*/

// 나의 풀이 & 다른 풀이
function solution(s) {
    s = s.toLowerCase()
    var answer = s
        .split(' ')
        .map(v => {
            var arr = v.split('');
            if (arr[0] != null) {
                arr[0] = arr[0].toUpperCase();    
            }
        
            return arr.join('');
        })
        .join(' ');
            
    return answer;
}

/*
 - .map() 과 .join() 숙지하기!
 - line 25: 런타임 에러를 피하기 위한 코드.
 - toUpperCase()와 toLowerCase()같은 메서드는 반환을 할 뿐이다. (값을 저장하는게 아님)
*/

// 또 다른 풀이
function solution(s) {
    return s
        .split(" ")
        .map(v => 
            v.charAt(0).toUpperCase() + v.substring(1).toLowerCase())
        .join(" ");
}

/*
 - console.log(Mozilla.substring(2));
 : zilla
*/
