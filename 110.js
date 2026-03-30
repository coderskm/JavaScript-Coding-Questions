function productExceptSelf(nums) {
    if (nums.length === 0) {
        console.log(`given array is empty.`);
        return;
    }
    let left = new Array(nums.length).fill(0);
    left[0] = 1;
    let right = new Array(nums.length).fill(0);
    right[right.length - 1] = 1;
    
    for (let i = 1; i < left.length; i++){
        left[i] = nums[i - 1] * left[i - 1];
    }
    for (let i = right.length - 2; i >= 0;i--) {
        right[i] = nums[i + 1] * right[i + 1];
    }
    for (let i = 0; i < nums.length; i++){
        nums[i] = left[i] * right[i];
    }

    console.log(`array of products except self :- [${nums}]`);
    return;

}

productExceptSelf([1, 2, 3, 4]);
productExceptSelf([-1, 1, 0, -3, 3]);
productExceptSelf([])

