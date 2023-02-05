function solution(k, m, score) {
  if (score.length === 0) return 0

  const sortedScore = score.sort((a, b) =>  b - a) 
  const packageMount = parseInt((sortedScore.length) / m, 10)
  const packages = []
  let result = 0

  for (let i = 0; i < packageMount; i += 1) {
    const packaged = []

    for (let j = 0; j < m; j += 1) {
      packaged.push(sortedScore[(i * m) + j])
    }

    packages.push(packaged)
  }

  for (let i = 0; i < packages.length; i += 1) {
    result += (packages[i][m - 1] * m)
  }
  
  return result
}

function solution(k, m, score) {
  if (score.length === 0) return 0;

  const sortedScore = score.sort((a, b) => {return b - a})
  const packMount = parseInt((sortedScore.length / m), 10)
  let result = 0

  for (let i = 0; i < packMount; i += 1) {
    result += sortedScore[(i * m) + (m - 1)] * m
  }

  console.log(result)
}

solution(3, 4, [1, 2, 3, 1, 2, 3, 1])
solution(4, 3, [4, 1, 2, 2, 4, 4, 4, 4, 1, 2, 4, 2])
