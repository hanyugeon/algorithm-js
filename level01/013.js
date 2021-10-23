// 자연수 뒤집어 배열로 만들기

/*
# 문제 설명
자연수 n을 뒤집어 각 자리 숫자를 원소로 가지는 배열 형태로 리턴해주세요. 예를들어 n이 12345이면 [5,4,3,2,1]을 리턴합니다.

# 제한 조건
n은 10,000,000,000이하인 자연수입니다.

# 입출력 예
n	    return
12345	[5,4,3,2,1]
*/

// 나의 풀이
function solution(n) {
    var arr = (n + '')
        .split('')
        .reverse();
    var answer = [];

    for (var i = 0; i < arr.length; i++) {
        answer.push(Number(arr[i]));
    }

    return answer;
}


// 다른 풀이
// Number타입으로 계속 진행
function solution(n) {
    var arr = [];
    do {
        arr.push(n%10);
        Math.floor(n/10);
    } while (n > 0);
    
    return arr;
}

// String으로 담았다가 형변환
function solution(n) {
    return (n + '').split('').reverse().map(x => parseInt(x));
}
