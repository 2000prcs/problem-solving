// Given an array of meeting time intervals intervals where intervals[i] = [starti, endi], return the minimum number of conference rooms required.

// Example 1:

// Input: intervals = [[0,30],[5,10],[15,20]]
// Output: 2
// Example 2:

// Input: intervals = [[7,10],[2,4]]
// Output: 1
 

// Constraints:

// 1 <= intervals.length <= 104
// 0 <= starti < endi <= 106

const minMeetingRooms = (intervals) => {
    let numberOfMeetingRooms = 0;
    const sortedStartTimes = intervals.map((interval) => interval[0]).sort((a, b) => a - b);
    const sortedEndTimes = intervals.map((interval) => interval[1]).sort((a, b) => a - b);
    let endTimePointer = 0;

    for (let i = 0; i < sortedStartTimes.length; i++) {
        if (sortedStartTimes[i] < sortedEndTimes[endTimePointer]) {
            numberOfMeetingRooms += 1;
        } else {
            endTimePointer += 1;
        }
    }

    return numberOfMeetingRooms;
}

console.log(minMeetingRooms([[0,30],[5,10],[15,20]])); // 2
console.log(minMeetingRooms([[7,10],[2,4]])); // 1
