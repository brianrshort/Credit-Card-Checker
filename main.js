// All valid credit card numbers
const valid1 = [4, 5, 3, 9, 6, 7, 7, 9, 0, 8, 0, 1, 6, 8, 0, 8]
const valid2 = [5, 5, 3, 5, 7, 6, 6, 7, 6, 8, 7, 5, 1, 4, 3, 9]
const valid3 = [3, 7, 1, 6, 1, 2, 0, 1, 9, 9, 8, 5, 2, 3, 6]
const valid4 = [6, 0, 1, 1, 1, 4, 4, 3, 4, 0, 6, 8, 2, 9, 0, 5]
const valid5 = [4, 5, 3, 9, 4, 0, 4, 9, 6, 7, 8, 6, 9, 6, 6, 6]

// All invalid credit card numbers
const invalid1 = [4, 5, 3, 2, 7, 7, 8, 7, 7, 1, 0, 9, 1, 7, 9, 5]
const invalid2 = [5, 7, 9, 5, 5, 9, 3, 3, 9, 2, 1, 3, 4, 6, 4, 3]
const invalid3 = [3, 7, 5, 7, 9, 6, 0, 8, 4, 4, 5, 9, 9, 1, 4]
const invalid4 = [6, 0, 1, 1, 1, 2, 7, 9, 6, 1, 7, 7, 7, 9, 3, 5]
const invalid5 = [5, 3, 8, 2, 0, 1, 9, 7, 7, 2, 8, 8, 3, 8, 5, 4]

// Can be either valid or invalid
const mystery1 = [3, 4, 4, 8, 0, 1, 9, 6, 8, 3, 0, 5, 4, 1, 4]
const mystery2 = [5, 4, 6, 6, 1, 0, 0, 8, 6, 1, 6, 2, 0, 2, 3, 9]
const mystery3 = [6, 0, 1, 1, 3, 7, 7, 0, 2, 0, 9, 6, 2, 6, 5, 6, 2, 0, 3]
const mystery4 = [4, 9, 2, 9, 8, 7, 7, 1, 6, 9, 2, 1, 7, 0, 9, 3]
const mystery5 = [4, 9, 1, 3, 5, 4, 0, 4, 6, 3, 0, 7, 2, 5, 2, 3]

// An array of all the arrays above
const batch = [valid1, valid2, valid3, valid4, valid5, invalid1, invalid2, invalid3, invalid4, invalid5, mystery1, mystery2, mystery3, mystery4, mystery5]

// Test and validation functions below

const validateCred = arr => {
    let newArr = [];
    let reversedArray = arr.reverse();
    //console.log(reversedArray);
    for (var i = 0; i < reversedArray.length; i++) {
        if (i === 0) {
            newArr.push(reversedArray[i]);
        } else if (i % 2 === 0) {
            newArr.push(reversedArray[i]);
            //console.log(newArr);
        } else {
        let timesTwo = reversedArray[i] * 2;
        //console.log(timesTwo);
        if (timesTwo > 9) {
            let newSum = timesTwo - 9;
            newArr.push(newSum);
            //console.log(newArr);
        } else {
            newArr.push(timesTwo);
            //console.log(newArr);
        }
    }
}
    let arrSum = newArr.reduce(function (a, b) {
        return a + b;
    }, 0);
    //console.log(arrSum);
    if (arrSum % 10 === 0) {
        //console.log("true");
        return true;
    } else {
        //console.log("false");
        return false;
    }
}


const invalidCred = arr => {
    let newArr = [];
    let reversedArray = arr.reverse();
    //console.log(reversedArray);
    for (var i = 0; i < reversedArray.length; i++) {
        if (i === 0) {
            newArr.push(reversedArray[i]);
        } else if (i % 2 === 0) {
            newArr.push(reversedArray[i]);
            //console.log(newArr);
        } else {
        let timesTwo = reversedArray[i] * 2;
        //console.log(timesTwo);
        if (timesTwo > 9) {
            let newSum = timesTwo - 9;
            newArr.push(newSum);
            //console.log(newArr);
        } else {
            newArr.push(timesTwo);
            //console.log(newArr);
        }
    }
}
    let arrSum = newArr.reduce(function (a, b) {
        return a + b;
    }, 0);
    //console.log(arrSum);
    if (arrSum % 10 === 0) {
        //console.log("false");
        return false;
    } else {
        //console.log("true");
        return arr;
    }
}


function findInvalidCreditCards(arrays) {
    const newArray = arrays.filter(array => {
        return invalidCred(array);
    });
    //console.log(newArray);
    //console.log(newArray.length);
    return newArray;
}

const idArray = findInvalidCreditCards(batch);

function idInvalidCardCompanies(arrays) {
    const newArr = [];
    for (var i=0; i < arrays.length; i++) {
        if (arrays[i][0] === 3 && newArr.includes("Amex") === false) {
            newArr.push("Amex");
        } else if (arrays[i][0] === 4 && newArr.includes("Visa") === false) {
            newArr.push("Visa");
        } else if (arrays[i][0] === 5 && newArr.includes("Mastercard") === false) {
            newArr.push("Mastercard");
        } else if (arrays[i][0] === 6 && newArr.includes("Discover") === false) {
            newArr.push("Discover");
        }
    }
    //console.log(newArr);
    return newArr;
}

// invalidCred(valid1);
// invalidCred(valid2);
// invalidCred(valid3);
// invalidCred(valid4);
// invalidCred(valid5);

// invalidCred(invalid1);
// invalidCred(invalid2);
// invalidCred(invalid3);
// invalidCred(invalid4);
// invalidCred(invalid5);

// invalidCred(mystery1);
// invalidCred(mystery2);
// invalidCred(mystery3);
// invalidCred(mystery4);
// invalidCred(mystery5);

//findInvalidCreditCards(batch);

//idInvalidCardCompanies(idArray);
