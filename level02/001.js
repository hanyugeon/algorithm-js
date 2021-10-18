// n개의  최소공배수

/*
# 문제 설명
두 수의 최소공배수(Least Common Multiple)란 입력된 두 수의 배수 중 공통이 되는 가장 작은 숫자를 의미합니다. 예를 들어 2와 7의 최소공배수는 14가 됩니다. 정의를 확장해서, n개의 수의 최소공배수는 n 개의 수들의 배수 중 공통이 되는 가장 작은 숫자가 됩니다. n개의 숫자를 담은 배열 arr이 입력되었을 때 이 수들의 최소공배수를 반환하는 함수, solution을 완성해 주세요.

# 제한 사항
arr은 길이 1이상, 15이하인 배열입니다.
arr의 원소는 100 이하인 자연수입니다.

# 입출력 예
arr	        result
[2,6,8,14]	168
[1,2,3]	    6
*/

// 나의 풀이
function solution(para) {
    const gcb = (a, b) => a % b === 0 ? b : gcb(b, a % b);
    const lcm = (a, b) => a * b / gcb(a, b);
    let arr = para;
    let leng = para.length;

    while (leng != 1) {
        if (leng % 2 == 0) {
            for (let i = 0; i < leng / 2; i++) {
                arr[i] = lcm(arr[2 * i], arr[(2 * i) + 1])
            }
            leng = leng / 2;
        }
        else if (leng % 2 == 1) {
            for (let i = 0; i < Math.floor(leng / 2); i++) {
                arr[i] = lcm(arr[2 * i], arr[(2 * i) + 1])
            }
            arr[Math.floor(leng / 2)] = arr[leng - 1];
            leng = Math.ceil(leng / 2);
        }
    }
    return arr[0];
}


// 다른 풀이
function solution(arg) {
    var answer = 0;
    const gcb = (a, b) => a % b === 0 ? b : gcb(b, a % b);
    const lcm = (a, b) => a * b / gcb(a, b);

    answer = num.reduce(function(a,b) {
    var min = Math.min(a,b);
    var max = Math.max(a,b);
    return lcm(min,max);
    })

    return answer;
}
