function solution(food) {
  let result = ''
  const Queue = []
  const Stack = []

  food.map((mount, idx) => {
    if (idx === 0) return;
    
    Queue.push(parseInt(mount / 2))
    Stack.push(parseInt(mount / 2))
  })

  for (let i = 0; i < Stack.length; i += 1) {
    result += `${i + 1}`.repeat(parseInt(Stack[i], 10))
  }

  result += '0'

  for (let i = Stack.length - 1; i >= 0; i -= 1) {
    result += `${i + 1}`.repeat(parseInt(Stack[i], 10))
  }

  return result;
}

function solution(food) {
  const game = []

  food.map((item, idx) => {
    if (idx === 0) return;

    game.push(String(idx).repeat(parseInt(item / 2, 10)))
  })

  
  return [...game].join("") + '0' + [...game].reverse().join("")
}

solution([1, 3, 4, 6])
solution([1, 7, 1, 2])
