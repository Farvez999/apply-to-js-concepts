function findOddSum(numbers) {
    let sum = 0;
    for (i = 0; i < numbers.length; i++) {
        const index = i;
        const element = numbers[index];
        sum = sum + element;
        console.log(index, element, sum);
    }
    return sum;
}

const myNumber = [10, 36, 45, 59, 48, 60];
findOddSum(myNumber);
