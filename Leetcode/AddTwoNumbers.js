// You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.

// You may assume the two numbers do not contain any leading zero, except the number 0 itself.

// Example 1:

// Input: l1 = [2,4,3], l2 = [5,6,4]
// Output: [7,0,8]
// Explanation: 342 + 465 = 807.

// Example 2:

// Input: l1 = [0], l2 = [0]
// Output: [0]

// Example 3:

// Input: l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]
// Output: [8,9,9,9,0,0,0,1]
 
// Constraints:

// The number of nodes in each linked list is in the range [1, 100].
// 0 <= Node.val <= 9
// It is guaranteed that the list represents a number that does not have leading zeros.



class ListNode {
    constructor(val, next) {
        this.val = (val === undefined ? 0 : val);
        this.next = (next === undefined ? null : next);
    }
}

const addTwoNumbers = (l1, l2) => {
    const head = new ListNode(0);
    let current = head;
    let carry = 0;

    while(l1 !== null || l2 !== null) {
        let l1Val = l1 !== null ? l1.val : 0;
        let l2Val = l2 !== null ? l2.val : 0;
        let sum = l1Val + l2Val + carry;
        carry = Math.floor(sum / 10);
        if (sum >= 10) {
            sum = sum % 10;
        }
        current.next = new ListNode(sum);
        current = current.next;
        l1 = l1 !== null ? l1.next : null;
        l2 = l2 !== null ? l2.next : null;
    }
    if (carry === 1) {
        current.next = new ListNode(carry);
    }

    return head.next;
}

// const l1 = new ListNode(2);
// const l1Next = new ListNode(4);
// const l1NextNext = new ListNode(3);
// l1.next = l1Next;
// l1Next.next = l1NextNext;

// const l2 = new ListNode(5);
// const l2Next = new ListNode(6);
// const l2NextNext = new ListNode(4);
// l2.next = l2Next;
// l2Next.next = l2NextNext;

const l1 = new ListNode(9);
const l1Next = new ListNode(9);
const l1NextNext = new ListNode(9);
const l1NextNextNext = new ListNode(9);
const l1NextNextNextNext = new ListNode(9);
const l1NextNextNextNextNext = new ListNode(9);
const l1NextNextNextNextNextNext = new ListNode(9);
l1.next = l1Next;
l1Next.next = l1NextNext;
l1NextNext.next = l1NextNextNext;
l1NextNextNext.next = l1NextNextNextNext;
l1NextNextNextNext.next = l1NextNextNextNextNext;
l1NextNextNextNextNext.next = l1NextNextNextNextNextNext

const l2 = new ListNode(9);
const l2Next = new ListNode(9);
const l2NextNext = new ListNode(9);
const l2NextNextNext = new ListNode(9);
l2.next = l2Next;
l2Next.next = l2NextNext;
l2NextNext.next = l2NextNextNext;

console.log(addTwoNumbers(l1, l2));