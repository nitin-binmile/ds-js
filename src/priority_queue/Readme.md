# Priority Queue 

A Priority Queue implementation in TypeScript that allows you to manage a collection of elements with priorities. This data structure ensures that elements with higher priorities are retrieved or removed before those with lower priorities.

## Installation

To use this Priority Queue in your TypeScript project, you can install it via npm or yarn:

```sh
npm install priority-queue
```

```typescript
import { priority_queue } from "priority-queue";

// Example: Creating a min-heap (elements with lower values have higher priority)
const minHeap = new priority_queue<number>((a, b) => a < b);

// Example: Creating a max-heap (elements with higher values have higher priority)
const maxHeap = new priority_queue<number>((a, b) => a > b);

// Adding elements to the priority queue
minHeap.push(10);
minHeap.push(5);
minHeap.push(15);

// Retrieving the element with the highest priority (min-heap: 5)
const highestPriorityMin = minHeap.top(); // Output: 5

// Removing and retrieving the element with the highest priority (min-heap: 5)
const removedMin = minHeap.pop(); // Output: 5

// Adding elements to the max-heap
maxHeap.push(20);
maxHeap.push(30);
maxHeap.push(25);

// Retrieving the element with the highest priority (max-heap: 30)
const highestPriorityMax = maxHeap.top(); // Output: 30

// Removing and retrieving the element with the highest priority (max-heap: 30)
const removedMax = maxHeap.pop(); // Output: 30
```


