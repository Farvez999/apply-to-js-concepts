function kilometersToMiles(miles) {
    const kilometer = miles * 1.60934;
    return kilometer;
}

const totalMiles = 200;
const totalKilo = kilometersToMiles(totalMiles);
console.log('Total kilometer: ', totalKilo)