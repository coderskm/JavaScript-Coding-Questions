function isMonotonic(nums) {
  if (nums.length === 0) {
    console.log("given array is empty.");
    return;
  }
  let same = nums[0] === nums[nums.length - 1];
  let increase = nums[0] < nums[nums.length - 1];
  let decrease = nums[0] > nums[nums.length - 1];
  if (same) {
    for (let i = 1; i < nums.length; i++) {
      if (nums[i - 1] !== nums[i]) {
        console.log(`given array [${nums}] is not monotonic.`);
        return;
      }
    }
    console.log(`given array [${nums}] is monotonic.`);
    return;
  } else if (increase) {
    for (let i = 0; i < nums.length; i++) {
      if (nums[i - 1] > nums[i]) {
        console.log(`given array [${nums}] is not monotonic.`);
        return;
      }
    }
    console.log(`given array [${nums}] is monotonic.`);
    return;
  } else {
    for (let i = 0; i < nums.length; i++) {
      if (nums[i - 1] < nums[i]) {
        console.log(`given array [${nums}] is not monotonic.`);
        return;
      }
    }
    console.log(`given array [${nums}] is monotonic.`);
    return;
  }
}

isMonotonic([1, 2, 2, 3]);
isMonotonic([6, 5, 4, 4]);
isMonotonic([]);
isMonotonic([1, 3, 2]);
isMonotonic([7, 7, 7]);
