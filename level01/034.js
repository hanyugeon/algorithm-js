// function solution(ingredient) {
//   let result = 0;
//   let loop = true;

//   const packUp = () => {
//     for (let i = 0; i < ingredient.length - 3; i += 1) {
//       if (ingredient[i] !== 1) continue;
//       if (ingredient[i + 1] !== 2) continue;
//       if (ingredient[i + 2] !== 3) continue;
//       if (ingredient[i + 3] !== 1) continue;

//       ingredient.splice(i, 4);
//       result += 1;

//       return (loop = true);
//     }

//     return (loop = false);
//   };

//   while (loop) {
//     packUp();
//   }

//   return result;
// }

function solution(ingredient) {
  const stack = [];
  let result = 0;

  ingredient.forEach((value) => {
    stack.push(value);

    if (stack.length >= 4) {
      if (stack.slice(-4).join("") === "1231") {
        stack.pop();
        stack.pop();
        stack.pop();
        stack.pop();
        result += 1;
      }
    }
  });

  return result;
}

solution([2, 1, 1, 2, 3, 1, 2, 3, 1]);
solution([1, 3, 2, 1, 2, 1, 3, 1, 2]);
