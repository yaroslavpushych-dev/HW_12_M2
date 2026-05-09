function MyArray(...items) {
    this.items = items;
}

MyArray.prototype.push = function () {
    for (let i = 0; i < arguments.length; i++)
        this.items[this.items.length] = arguments[i];
    return this.items.length;
}

MyArray.prototype.flat = function (depth = 1) {
    if (depth <= 0) return this.items;
    const arr = new MyArray();

    for (let i = 0; i < this.items.length; i++) {
        if (this.items[i] instanceof MyArray)
            arr.push(...this.items[i].flat(depth - 1))
        else
            arr.push(this.items[i]);
    }
    return arr.items;
}

const arr = new MyArray(1, 2, 3, new MyArray(3, 4, 5, new MyArray(6, 7, 8, new MyArray(9, 0, "d"))));

console.log(arr.flat(0));
console.log(arr.flat(1));
console.log(arr.flat(2));
console.log(arr.flat(3));