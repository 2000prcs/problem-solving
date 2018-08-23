// Given a collection of intervals, merge all overlapping intervals.

// Example 1:

// Input: [[1,3],[2,6],[8,10],[15,18]]
// Output: [[1,6],[8,10],[15,18]]
// Explanation: Since intervals [1,3] and [2,6] overlaps, merge them into [1,6].
// Example 2:

// Input: [[1,4],[4,5]]
// Output: [[1,5]]
// Explanation: Intervals [1,4] and [4,5] are considerred overlapping.

/**
 * Definition for an interval.
 */
 function Interval(start, end) {
  this.start = start;
  this.end = end;
}
/**
 * @param {Interval[]} intervals
 * @return {Interval[]}
 */
var merge = function(intervals) {
  if(intervals.length === 0) return intervals;
  let sorted = intervals.sort((a, b) => {
      return a.start - b.start;
  });
  let merged = [sorted[0]];
  for(let i = 1; i < sorted.length; i++){
      let current = sorted[i];
      let last = merged[merged.length-1];
      if(current.start <= last.end){
        last.end = Math.max(current.end, last.end);
      } else {
        merged.push(current);
      }
  }
  return merged;
};

var interval1 = new Interval(1,3);
var interval2 = new Interval(2,6);
var interval3 = new Interval(8,10);
var interval4 = new Interval(15, 18);

console.log(merge([interval1, interval2, interval3, interval4]));

var interval5 = new Interval(2,3);
var interval6 = new Interval(2,2);
var interval7 = new Interval(3,3);
var interval8 = new Interval(1,3);
var interval9 = new Interval(5,7);
var interval10 = new Interval(2,2);
var interval11 = new Interval(4,6);

console.log(merge([interval5, interval6, interval7, interval8, interval9, interval10, interval11]));
