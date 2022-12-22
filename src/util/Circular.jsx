/**
 * A simple circular data structure
 */
export function Circular(arr, startIntex) {
    this.arr = arr;
    this.currentIndex = startIntex || 0;
}

Circular.prototype.next = function () {
    const i = this.currentIndex, arr = this.arr;
    this.currentIndex = i < arr.length - 1 ? i + 1 : 0;
    return this.current();
}

Circular.prototype.prev = function () {
    const i = this.currentIndex, arr = this.arr;
    this.currentIndex = i > 0 ? i - 1 : arr.length - 1;
    return this.current();
}

Circular.prototype.current = function () {
    return this.arr[this.currentIndex];
}
