var arr = [11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
function reverseArray(arr) {
    var left = 0;
    var right = arr.length - 1;
    while (left <= right) {
        var temp = arr[left];
        arr[left] = arr[right];
        arr[right] = temp;
        left++;
        right--;
    }
    return arr;
}
console.log(reverseArray(arr));
