function leftRotatebyOne(arr, n) {
    var i, temp;
    temp = arr[0];
    for (i = 0; i < n - 1; i++)
        arr[i] = arr[i + 1];
    arr[n - 1] = temp;
}

function leftRotate(arr, n, d) {
    for (i = 0; i < d; i++)
        leftRotatebyOne(arr, n);
}

function printArray(arr, n) {
    for (i = 0; i < n; i++)
        console.log(arr[i]);
}

var arr = [1, 2, 3, 4, 5, 6, 7];
console.log(leftRotate(arr, 7, 3));
printArray(arr, 7);