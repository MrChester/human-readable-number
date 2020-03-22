let config = {
    0: "zero",
    1: "one",
    2: "two",
    3: "three",
    4: "four",
    5: "five",
    6: "six",
    7: "seven",
    8: "eight",
    9: "nine",
    10: "ten",
    11: "eleven",
    12: "twelve",
    13: "thirteen",
    14: "fourteen",
    15: "fifteen",
    16: "sixteen",
    17: "seventeen",
    18: "eighteen",
    19: "nineteen",
    20: "twenty",
    30: "thirty",
    40: "forty",
    50: "fifty",
    60: "sixty",
    70: "seventy",
    80: "eighty",
    90: "ninety",
    100: "one hundred",
    200: "two hundred",
    300: "three hundred",
    400: "four hundred",
    500: "five hundred",
    600: "six hundred",
    700: "seven hundred",
    800: "eight hundred",
    900: "nine hundred",
    1000: "one thousand",
    2000: "two thousand",
    3000: "three thousand",
    4000: "four thousand",
    5000: "five thousand",
    6000: "six thousand",
    7000: "seven thousand",
    8000: "eight thousand",
    9000: "nine thousand",
    10000: "ten thousand"
}

module.exports = function toReadable(number) {
    let resArr = [],
        wordsArr = [],
        lastTwoDigitsArr = [],
        strSplitArr = [],
        str = number + "";
    let lastTwoDigits = str.substring(str.length - 2);

    if (number === 0) {
        return config[number];
    }

    if (number > 10 && number < 20) {
        for (let i in config) {
            if (i === str) {
                wordsArr.push(config[i]);
            }
        }
        return wordsArr.join("");
    }

    if (lastTwoDigits > 10 && lastTwoDigits < 20) {
        str = str.substring(0, str.length - 2);
        str = str.concat("0".repeat(2))
        lastTwoDigitsArr[0] = lastTwoDigits;
        console.log(lastTwoDigitsArr);
    }

    strSplitArr = str.split("");
    console.log(strSplitArr);

    strSplitArr.forEach(function (element, ndx) {
        if (ndx !== strSplitArr.length - 1 && element !== "0") {
            element = element.concat("0".repeat(strSplitArr.length - 1 - ndx));
            resArr.push(element);
        } else {
            resArr.push(element);
            if(ndx === strSplitArr.length-1 && lastTwoDigitsArr.length){
              resArr.push(lastTwoDigits);
            }
        }
    });

    resArr.forEach(function (element) {
        if (element !== "0") {
            for (let i in config) {
                if (i === element) {
                    wordsArr.push(config[i]);
                }
            }
        }
    })
    return wordsArr.join(" ");
}
