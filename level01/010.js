// 제일 작은 수 제거하기

/*
# 문제 설명
정수를 저장한 배열, arr 에서 가장 작은 수를 제거한 배열을 리턴하는 함수, solution을 완성해주세요. 단, 리턴하려는 배열이 빈 배열인 경우엔 배열에 -1을 채워 리턴하세요. 예를들어 arr이 [4,3,2,1]인 경우는 [4,3,2]를 리턴 하고, [10]면 [-1]을 리턴 합니다.

# 제한 조건
arr은 길이 1 이상인 배열입니다.
인덱스 i, j에 대해 i ≠ j이면 arr[i] ≠ arr[j] 입니다.

# 입출력 예
arr	        return
[4,3,2,1]	[4,3,2]
[10]	    [-1]
*/

// 다른 풀이
const solution = (arr) => {
    arr.splice(arr.indexOf(Math.min(...arr)), 1);
    return arr.length ? arr : [-1];
};

/*
참고 01 : 
https://wooder2050.medium.com/%EC%95%8C%EA%B3%A0%EB%A6%AC%EC%A6%98-%EC%A0%9C%EC%9D%BC-%EC%9E%91%EC%9D%80-%EC%88%98-%EC%A0%9C%EA%B1%B0%ED%95%98%EA%B8%B0-javascript-270068f29ded

참고 02 : 
https://yuddomack.tistory.com/entry/%EC%9E%90%EB%B0%94%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8-%EB%AC%B8%EB%B2%95-%EB%B9%84%EA%B5%AC%EC%A1%B0%ED%99%94-%ED%95%A0%EB%8B%B9

이게 왜 레벨 1?
*/
