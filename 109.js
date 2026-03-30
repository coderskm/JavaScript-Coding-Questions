function peakElement(nums) {
    if (nums.length === 0) {
        console.log(`given array is empty.`);
        return;
    }
    let left = 0;
    let right = nums.length - 1;
    while (left < right) {
        let mid = Math.floor((left + right) / 2);
        if (nums[mid] > nums[mid + 1]) {
            right = mid;
        } else {
            left = mid + 1;
        }
    }
    console.log(`index of peak element :- ${left}`);
    return;
}

peakElement([1, 2, 3, 1]);
peakElement([1, 2, 1, 3, 5, 6, 4]);
peakElement([]);

