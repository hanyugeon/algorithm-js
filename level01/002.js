// x만큼 간격이 있는 n개의 숫자

/*
# 문제 설명
함수 solution은 정수 x와 자연수 n을 입력 받아, x부터 시작해 x씩 증가하는 숫자를 n개 지니는 리스트를 리턴해야 합니다. 다음 제한 조건을 보고, 조건을 만족하는 함수, solution을 완성해주세요.

# 제한 조건
x는 -10000000 이상, 10000000 이하인 정수입니다.
n은 1000 이하인 자연수입니다.

# 입출력 예
x	n	answer
2	5	[2,4,6,8,10]
4	3	[4,8,12]
-4	2	[-4, -8]
*/


// 나의 풀이
function solution(x, n) {
    let answer = [];
    for (let i = 0; i < n; i++) {
        answer.push(x * (i + 1));
    }
    return answer;
}

// 다른 풀이
function anotherSol(x, n) {
    return Array(n).fill(x).map((v, i) => (i + 1) * v);
}

/*
다차원 배열 메서드를 이용한 풀이
fill(): 배열의 시작 인덱스부터 끝 인덱스의 이전의 정적인 값 하나로 채움
map(): 배열 내의 모든 요소 각각에 대하여 주어진 함수를 호출한 결과를 모아 새로운 배열을 반환
예시:
var data = Array(25).fill(null).map(function(x){...})
var data = Array(25).fill(null).map(() => function(...))

*/
