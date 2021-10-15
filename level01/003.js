// 행렬의 덧셈

/*
# 문제 설명
행렬의 덧셈은 행과 열의 크기가 같은 두 행렬의 같은 행, 같은 열의 값을 서로 더한 결과가 됩니다. 2개의 행렬 arr1과 arr2를 입력받아, 행렬 덧셈의 결과를 반환하는 함수, solution을 완성해주세요.

# 제한 조건
행렬 arr1, arr2의 행과 열의 길이는 500을 넘지 않습니다.

# 입출력 예
arr1	        arr2	        return
[[1,2],[2,3]]	[[3,4],[5,6]]	[[4,6],[7,9]]
[[1],[2]]       [[3],[4]]	    [[4],[6]]
*/


// 나의 풀이
function solution(arr1, arr2) {
    let answer = [];
    for (let i = 0; i < arr1.length; i++) {
        let temp = [];
        for (let j = 0; j < arr1[i].length; j++) {
            temp.push(arr1[i][j] + arr2[i][j]);
        }
        answer.push(temp);
    }
    return answer;
}


// 다른 풀이
function solution(arr1, arr2) {
    return arr1.map((a,i) => a.map((b, j) => b + arr2[i][j]));
    /*
    var answer = Array();
    var rowMax = A.length > B.length ? A.length : B.length;
    var colMax = A[0].length > B[0].length ? A[0].length : B[0].length;
    for(var i=0; i < rowMax; i++) {
        answer[i] = new Array();
        for(var j=0; j < colMax; j++) {
            console.log(isNaN(A[i][j])?0:A[i][j]);
            console.log(isNaN(B[i][j])?0:B[i][j]);
            answer[i][j] = parseInt(isNaN(A[i][j])?0:A[i][j]) + parseInt(isNaN(B[i][j])?0:B[i][j]);
        }
    }
    */
}
