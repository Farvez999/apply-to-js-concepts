function findSum(numbers) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        const index = i;
        const element = numbers[index];
        sum = sum + element;
        //console.log(index, element, sum);
    }
    return sum;
}

function findOddNumberOfArrary(numbers) {
    const oddNumbers = [];
    for (let i = 0; i < numbers.length; i++) {
        const index = i;
        const element = numbers[index];
        if (element % 2 !== 0) {
            console.log(index, element);
            oddNumbers.push(element);
        }
    }
    return oddNumbers;
}

const myNumber = [10, 36, 45, 59, 48, 60];
const oddNumbers = findOddNumberOfArrary(myNumber);
console.log(oddNumbers);
const findOddNumberSum = findSum(oddNumbers);
console.log(findOddNumberSum);
