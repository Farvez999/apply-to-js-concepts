// const myInch = 12;
// const myFeet = myInch / 12;
// console.log(myFeet);

// const dadaInch = 144;
// const dadaFeet = dadaInch / 12;
// console.log('Dada Feet : ', dadaFeet)

function inchToFeet(inche) {
    const feet = inche / 12;
    return feet;
}

const dadaInch = 144;
const dadaFeet = inchToFeet(dadaInch);
console.log('data feet: ', dadaFeet);

const nanaInch = 168;
const nanaFeet = inchToFeet(nanaInch);
console.log('nana feet: ', nanaFeet);