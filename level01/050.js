function solution(nums) {
  // 해시 테이블 생성
  const table = {};
  for (let i = 0; i < nums.length; i += 1) {
    if (!table[nums[i]]) {
      table[nums[i]] = 1;
      continue;
    }

    table[nums[i]] += 1;
    continue;
  }

  // 테이블 length에 따른 return값 도출
  const tableLength = Object.keys(table).length;
  const maxPickCount = nums.length / 2;

  return tableLength > maxPickCount ? maxPickCount : tableLength;
}
