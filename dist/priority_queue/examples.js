"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _1 = require(".");
// Example: Creating a min-heap (elements with lower values have higher priority)
const minHeap = new _1.priority_queue((a, b) => a < b);
// Example: Creating a max-heap (elements with higher values have higher priority)
const maxHeap = new _1.priority_queue((a, b) => a > b);
// Adding elements to the priority queue
minHeap.push(10);
minHeap.push(5);
minHeap.push(15);
// Retrieving the element with the highest priority (min-heap: 5)
const highestPriorityMin = minHeap.top(); // Output: 5
console.log("highestPriorityMin ", highestPriorityMin);
// Removing and retrieving the element with the highest priority (min-heap: 5)
const removedMin = minHeap.pop(); // Output: 5
// Adding elements to the max-heap
maxHeap.push(20);
maxHeap.push(30);
maxHeap.push(25);
// Retrieving the element with the highest priority (max-heap: 30)
const highestPriorityMax = maxHeap.top(); // Output: 30
console.log("highestPriorityMax ", highestPriorityMax);
// Removing and retrieving the element with the highest priority (max-heap: 30)
const removedMax = maxHeap.pop(); // Output: 30
