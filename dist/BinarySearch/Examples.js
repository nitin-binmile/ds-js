"use strict";
// find first and last index of the element within sorted array if not exists then print -1 -1
Object.defineProperty(exports, "__esModule", { value: true });
const _1 = require(".");
const sortedArray = [1, 2, 2, 2, 2, 5, 6, 7, 8, 9, 9, 9];
const res = (0, _1.binarySearch)({ array: sortedArray, key: 2, compare: (a, b) => a - b });
if (res != -1) {
    const left = (0, _1.lowerBound)({ array: sortedArray, key: 2, compare: (a, b) => a - b, });
    const right = (0, _1.upperBound)({ array: sortedArray, key: 2, compare: (a, b) => a - b, }) - 1;
    console.log(left, right);
}
else {
    console.log(-1, -1);
}
