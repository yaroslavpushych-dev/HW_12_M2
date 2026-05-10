function MyArray(...items) {
    this.length = 0;

    for (let i = 0; i < items.length; i++) {
        this[i] = items[i];
        this.length++;
    }
}

MyArray.prototype.push = function () {
    for (let i = 0; i < arguments.length; i++) {
        this[this.length] = arguments[i];
        this.length++;
    }
    return this.length;
}

MyArray.prototype.flat = function (depth = 1) {
    if (depth <= 0) return this;
    const arr = new MyArray();

    for (let i = 0; i < this.length; i++) {
        if (this[i] instanceof MyArray) {
            const nested = this[i].flat(depth - 1);

            for (let j = 0; j < nested.length; j++) {
                arr.push(nested[j]);
            }
        }
        else
            arr.push(this[i]);
    }
    return arr;
}

const arr = new MyArray(1, 2, 3, new MyArray(3, 4, 5, new MyArray(6, 7, 8, new MyArray(9, 0, "d"))));

console.log(arr.flat(0));
console.log(arr.flat(1));
console.log(arr.flat(2));
console.log(arr.flat(3));