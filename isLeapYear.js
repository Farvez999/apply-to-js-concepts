// First way
function isLeapYear(year) {
    const remaider = year % 4;
    if (remaider === 0) {
        return true;
    }
    else {
        return false;
    }
}

const myYearLeapYear = isLeapYear(1960);
console.log(myYearLeapYear);

const herYearLeapYear = isLeapYear(1962);
console.log(herYearLeapYear);


// Second way

function leapYear(year) {
    return ((year % 4 == 0) && (year % 100 != 0)) || (year % 400 == 0);
}

console.log(leapYear(2016));
console.log(leapYear(2000));
console.log(leapYear(1700));
console.log(leapYear(1800));
console.log(leapYear(100));