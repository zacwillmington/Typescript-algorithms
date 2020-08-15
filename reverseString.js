var str = 'Taco Cat';
function reverseString(str) {
    var strToArr = str.split('');
    var left = 0;
    var right = str.length - 1;
    while (left < right) {
        if (strToArr[left] === ' ') {
            left++;
            continue;
        }
        if (strToArr[right] === ' ') {
            right--;
            continue;
        }
        var temp = strToArr[left];
        strToArr[left] = strToArr[right];
        strToArr[right] = temp;
        left++;
        right--;
    }
    return strToArr.join('');
}
console.log(reverseString(str));
