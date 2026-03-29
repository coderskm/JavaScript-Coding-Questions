function twoSum(nums, target) {
  if (nums.length === 0) {
    console.log(`given array is empty.`);
    return;
  }

  let twoSumTracker = {};
  
  for(let i=0;i<nums.length;i++){
    let value = nums[i];
    twoSumTracker[value] = i;
  }

  for(let i=0;i<nums.length;i++){
    let potentialKey = target - nums[i];
    if(twoSumTracker[potentialKey] && twoSumTracker[potentialKey]!==i){
        console.log(`${target} sum equals element present at following index :- [${i},${twoSumTracker[potentialKey]}]`);
        return;
    }
  }
  console.log(`no pair of elements found whose sum is ${target}`);
  return;
}

twoSum([2, 7, 11, 15], 9);
twoSum([3, 2, 4], 6);
twoSum([], 0);
twoSum([3, 3], 6);
