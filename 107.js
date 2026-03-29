function mergeIntervals(intervals) {
    if (intervals.length === 0) {
        console.log("given array is empty.");
        return;
    }
    intervals.sort((a, b) => a[0] - b[0]);
    let result = [intervals[0]];
    for (let interval of intervals) {
        let e1 = result[result.length - 1][1];
        let s2 = interval[0];
        let e2 = interval[1];
        if (e1 >= s2) {
            result[result.length - 1][1] = Math.max(e1, e2);
        } else {
            result.push(interval);
        }
    }
    console.log("original array :- ", intervals);
    console.log("array after merging intervals :- ", result);
    return;
}

mergeIntervals([[1, 3], [2, 6], [8, 10], [15, 18]]);
mergeIntervals([]);
mergeIntervals([[1, 4], [4, 5]]);
mergeIntervals([[4, 7], [1, 4]]);


