const str: string = 'Taco Cat';

function reverseString(str: string): string {
    const strToArr: any[] = str.split('');
    let left: number = 0;
    let right: number = str.length - 1;

    while (left < right) {
        if (strToArr[left] === ' ') {
            left++;
            continue;
        }

        if (strToArr[right] === ' ') {
            right--;
            continue;
        }

        let temp: string = strToArr[left];
        strToArr[left] = strToArr[right];
        strToArr[right] = temp;

        left++;
        right--;
    }

    return strToArr.join('');
}


console.log(reverseString(str));