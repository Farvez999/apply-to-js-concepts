function isEven(number) {
    const remaider = number % 2;
    if (remaider === 0) {
        return true;
    }
    else {
        return false;
    }
}

const isEvenNumber = isEven(129);
console.log(isEvenNumber);
const isEvenOddNumber = isEven(140);
console.log(isEvenOddNumber);