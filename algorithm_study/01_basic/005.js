// ...arr 개꿀
// ES6, destructing 할당
// https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment

function solution(arr) {
  let answer = 0;

  answer = Math.min(...arr);

  return answer;
}

const arr01 = [5, 7, 1, 3, 2, 9, 11];
const arr02 = [5, 3, 7, 11, 2, 15, 17];

console.log(solution(arr01));
console.log(solution(arr02));
