function solution(nums) {
  let count = 0;

  const isPrimeNumber = (target) => {
    for (let i = 2; i <= target - 1; i++) {
      if (target % i === 0) return;
    }

    count += 1;
    return;
  };

  for (let i = 0; i < nums.length - 2; i++) {
    for (let j = i + 1; j < nums.length - 1; j++) {
      for (let k = j + 1; k < nums.length; k++) {
        isPrimeNumber(nums[i] + nums[j] + nums[k]);
      }
    }
  }

  return count;
}
