const str = 'Taco  Ct';
function reverseString(str) {
    const strToArr = str.split('');
    let left = 0;
    let right = str.length - 1;
    while (left < right) {
        if (strToArr[left] === ' ') {
            left++;
            continue;
        }
        if (strToArr[right] === ' ') {
            right--;
            continue;
        }
        let temp = strToArr[left];
        strToArr[left] = strToArr[right];
        strToArr[right] = temp;
        left++;
        right--;
    }
    return strToArr.join('');
}
console.log(reverseString(str));
