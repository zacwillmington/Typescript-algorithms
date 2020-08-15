
const arr: number[] = [11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1];

function reverseArray(arr: number[]): number[] {
    let left: number = 0;
    let right: number = arr.length - 1;

    while (left <= right) {
        let temp: number = arr[left];
        arr[left] = arr[right];
        arr[right] = temp;

        left++;
        right--;
    }

    return arr;
}

console.log(reverseArray(arr));