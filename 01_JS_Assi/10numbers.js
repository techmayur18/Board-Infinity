let number = arr => {
    const odd = arr.filter((x) => x % 2).sort((a, b) => a - b);
    return arr.map((x) => x % 2 ? odd.shift() : x);
}
console.log(number([5, 3, 9, 1, 44, 6]));