# Binary search

- Element should be in monotonic order
- It finds element in array of length n in order of log(n) elements

## How to use binarySearch function

```typescript
const sortedArray = [1, 3, 5, 7, 9, 11];
const target = 7;

function compare(a, b) {
  return a - b; // For ascending order
}

const resultIndex = binarySearch({
  array: sortedArray,
  key: target,
  compare: compare,
});

if (resultIndex !== -1) {
  console.log(`Element ${target} found at index ${resultIndex}.`);
} else {
  console.log(`Element ${target} not found in the array.`);
}
```

### More Utilities Functions based on the binarySearch

```typescript
// it will give lower bound of key
let lb = lowerBound({ array: sortedArray, key: target, compare: compare });
// it will give upper bound of key
let ub = upperBound({ array: sortedArray, key: target, compare: compare });
```
