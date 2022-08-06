function sumOfNumber(number) {
    sum = 0;
    for (let i = 1; i <= number; i++) {
        sum = sum + i;
        // console.log(i, sum);
    }
    return sum;
}

const totalSum = sumOfNumber(7)
console.log('Total Sum:', sum);