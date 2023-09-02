type BinarySearchType<T> = {
  array: T[];
  key: T;
  compare: (a: T, b: T) => number;
};

/**
 * Performs binary search on a sorted array.
 * Find element index in the array in order of log(n) where n is the number of elements
 * @template T The type of elements in the array.
 * @param {BinarySearchType<T>} options - Options for the binary search.
 * @returns {number} The index of the found element, or -1 if not found.
 */
function binarySearch<T>({ array, key, compare }: BinarySearchType<T>): number {
  let low = 0;
  let high = array.length - 1;
  console.log(key);

  while (low <= high) {
    let mid: number = Math.floor((low + high) / 2);
    let res: number = compare(array[mid], key);
    if (res === 0) return mid;
    else if (res < 0) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }

  return -1;
}


/**
 * Finds the lower bound index of the given `key` in a sorted array.
 *
 * @template T The type of elements in the array.
 * @param {BinarySearchType<T>} options - Options for the lower bound search.
 * @returns {number} The lower bound index of the `key` in the sorted array.
 */

function lowerBound<T>({ array, key, compare }: BinarySearchType<T>): number {
    let low: number = 0;
    let high: number = array.length - 1;
    let ans: number = array.length;
  
    while (low <= high) {
      let mid: number = Math.floor((low + high) / 2);
      let res: number = compare(array[mid], key);
  
      if (res >= 0) {
        ans = mid;
        high = mid - 1;
      } else {
        low = mid + 1;
      }
    }
  
    return ans;
  }
  

  /**
 * Finds the upper bound index of the given `key` in a sorted array.
 *
 * @template T The type of elements in the array.
 * @param {BinarySearchType<T>} options - Options for the lower bound search.
 * @returns {number} The lower bound index of the `key` in the sorted array.
 */
  function upperBound<T>({ array, key, compare }: BinarySearchType<T>): number {
    let low: number = 0;
    let high: number = array.length - 1;
    let ans: number = array.length;
  
    while (low <= high) {
      let mid: number = Math.floor((low + high) / 2);
      let res: number = compare(array[mid], key);
  
      if (res > 0) {
        ans = mid;
        high = mid - 1;
      } else {
        low = mid + 1;
      }
    }
  
    return ans;
  }


export {binarySearch,lowerBound,upperBound}