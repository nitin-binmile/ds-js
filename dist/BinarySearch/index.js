"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.upperBound = exports.lowerBound = exports.binarySearch = void 0;
/**
 * Performs binary search on a sorted array.
 * Find element index in the array in order of log(n) where n is the number of elements
 * @template T The type of elements in the array.
 * @param {BinarySearchType<T>} options - Options for the binary search.
 * @returns {number} The index of the found element, or -1 if not found.
 */
function binarySearch({ array, key, compare }) {
    let low = 0;
    let high = array.length - 1;
    console.log(key);
    while (low <= high) {
        let mid = Math.floor((low + high) / 2);
        let res = compare(array[mid], key);
        if (res === 0)
            return mid;
        else if (res < 0) {
            low = mid + 1;
        }
        else {
            high = mid - 1;
        }
    }
    return -1;
}
exports.binarySearch = binarySearch;
/**
 * Finds the lower bound index of the given `key` in a sorted array.
 *
 * @template T The type of elements in the array.
 * @param {BinarySearchType<T>} options - Options for the lower bound search.
 * @returns {number} The lower bound index of the `key` in the sorted array.
 */
function lowerBound({ array, key, compare }) {
    let low = 0;
    let high = array.length - 1;
    let ans = array.length;
    while (low <= high) {
        let mid = Math.floor((low + high) / 2);
        let res = compare(array[mid], key);
        if (res >= 0) {
            ans = mid;
            high = mid - 1;
        }
        else {
            low = mid + 1;
        }
    }
    return ans;
}
exports.lowerBound = lowerBound;
/**
* Finds the upper bound index of the given `key` in a sorted array.
*
* @template T The type of elements in the array.
* @param {BinarySearchType<T>} options - Options for the lower bound search.
* @returns {number} The lower bound index of the `key` in the sorted array.
*/
function upperBound({ array, key, compare }) {
    let low = 0;
    let high = array.length - 1;
    let ans = array.length;
    while (low <= high) {
        let mid = Math.floor((low + high) / 2);
        let res = compare(array[mid], key);
        if (res > 0) {
            ans = mid;
            high = mid - 1;
        }
        else {
            low = mid + 1;
        }
    }
    return ans;
}
exports.upperBound = upperBound;
