"use strict";
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _priority_queue_compareFun, _priority_queue_array;
Object.defineProperty(exports, "__esModule", { value: true });
exports.priority_queue = void 0;
/**
 * A generic priority queue class that allows pushing and popping elements with a custom comparison function.
 *
 * @template T - The type of elements stored in the priority queue.
 */
class priority_queue {
    /**
     * Creates a new PriorityQueue instance with the specified comparison function.
     *
     * @param {(a: T, b: T) => boolean} compare - A comparison function that determines the priority of elements.
     */
    constructor(compare) {
        /**
        * The comparison function used to determine the priority of elements in the queue.
        *
        * @private
        * @type {(a: T, b: T) => boolean}
        */
        _priority_queue_compareFun.set(this, void 0);
        /**
        * An array that stores the elements of the priority queue.
        *
        * @private
        * @type {T[]}
        */
        _priority_queue_array.set(this, []);
        /**
         * Retrieves the element with the highest priority (root of the heap).
         *
         * @returns {T} - The element with the highest priority in the priority queue.
         */
        this.top = () => __classPrivateFieldGet(this, _priority_queue_array, "f")[0];
        /**
         * Removes and returns the element with the highest priority (root of the heap).
         */
        this.pop = () => {
            let data = __classPrivateFieldGet(this, _priority_queue_array, "f")[0];
            __classPrivateFieldGet(this, _priority_queue_array, "f")[0] = __classPrivateFieldGet(this, _priority_queue_array, "f")[__classPrivateFieldGet(this, _priority_queue_array, "f").length - 1];
            __classPrivateFieldGet(this, _priority_queue_array, "f").pop();
            let curr = 0;
            while (curr < __classPrivateFieldGet(this, _priority_queue_array, "f").length) {
                if (curr * 2 + 1 < __classPrivateFieldGet(this, _priority_queue_array, "f").length && __classPrivateFieldGet(this, _priority_queue_compareFun, "f").call(this, __classPrivateFieldGet(this, _priority_queue_array, "f")[curr * 2 + 1], __classPrivateFieldGet(this, _priority_queue_array, "f")[curr])) {
                    let temp = __classPrivateFieldGet(this, _priority_queue_array, "f")[curr];
                    __classPrivateFieldGet(this, _priority_queue_array, "f")[curr] = __classPrivateFieldGet(this, _priority_queue_array, "f")[curr * 2 + 1];
                    __classPrivateFieldGet(this, _priority_queue_array, "f")[curr * 2 + 1] = temp;
                    curr = curr * 2 + 1;
                    continue;
                }
                if (curr * 2 + 2 < __classPrivateFieldGet(this, _priority_queue_array, "f").length && __classPrivateFieldGet(this, _priority_queue_compareFun, "f").call(this, __classPrivateFieldGet(this, _priority_queue_array, "f")[curr * 2 + 2], __classPrivateFieldGet(this, _priority_queue_array, "f")[curr])) {
                    let temp = __classPrivateFieldGet(this, _priority_queue_array, "f")[curr];
                    __classPrivateFieldGet(this, _priority_queue_array, "f")[curr] = __classPrivateFieldGet(this, _priority_queue_array, "f")[curr * 2 + 2];
                    __classPrivateFieldGet(this, _priority_queue_array, "f")[curr * 2 + 2] = temp;
                    curr = curr * 2 + 2;
                    continue;
                }
                return data;
            }
            return data;
        };
        __classPrivateFieldSet(this, _priority_queue_compareFun, compare, "f");
    }
    /**
     * Pushes an element onto the priority queue.
     *
     * @param {T} data - The element to be added to the queue.
     */
    push(data) {
        __classPrivateFieldGet(this, _priority_queue_array, "f").push(data);
        let curr = __classPrivateFieldGet(this, _priority_queue_array, "f").length - 1;
        while (curr >= 0) {
            let parent = Math.floor(curr / 2);
            if (__classPrivateFieldGet(this, _priority_queue_compareFun, "f").call(this, __classPrivateFieldGet(this, _priority_queue_array, "f")[curr], __classPrivateFieldGet(this, _priority_queue_array, "f")[parent])) {
                let temp = __classPrivateFieldGet(this, _priority_queue_array, "f")[curr];
                __classPrivateFieldGet(this, _priority_queue_array, "f")[curr] = __classPrivateFieldGet(this, _priority_queue_array, "f")[parent];
                __classPrivateFieldGet(this, _priority_queue_array, "f")[parent] = temp;
                curr = parent;
            }
            else {
                return;
            }
        }
    }
}
exports.priority_queue = priority_queue;
_priority_queue_compareFun = new WeakMap(), _priority_queue_array = new WeakMap();
