//Validation
function isValid(data) {
    return typeof data === 'number' && !isNaN(data) && isFinite(data);
}

// Task 1

function changeChar(str, arr) {
    let i = pos = posStore = 0;
    let strStore = "";

    while (pos = str.indexOf("_", pos) !== -1) {
        strStore += str.substring(posStore, pos) + arr[i];
        pos++;
        i++;
        posStore = pos;
    }
    console.log(strStore + str.substring(posStore, str.length));
}
changeChar(["word1","word2"]);
//


// Task 2 +

function getOddEvenNumbers(arr) {

    let arrayOddNumbers = [];
    let arrayEvenNumbers = [];

    for (let i = 0; i < arr.length; i++) {

        if (isValid(arr[i])) {
            if (arr[i] % 2 === 0) {
                arrayOddNumbers.push(arr[i]);
            } else {
                arrayEvenNumbers.push(arr[i]);
            }
        }

    }
    let concat = arrayEvenNumbers.concat(arrayOddNumbers);
    console.log(concat);
}

getOddEvenNumbers([6, 8, 3, "aaa", true, null, 1]);

// Task 3 +

function stringAndNumber(arr) {
    let num = 0;
    let str = 0;

    for (let i = 0; i < arr.length; i++) {
        if (typeof (arr[i]) == "number") {
            console.log(typeof (arr[i]));
            num++;
        } else {
            str++;
        }

    }
    console.log("Numbers:" + num + "," + "Strings:" + str);
}

stringAndNumber([1, 4, "asdf", 54, "qwerty"]);

// Task 4 +

function sumOfMaxMinString(arr) {

    let length = 0;
    let max;
    let min;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].length > length) {
            length = arr[i].length;
            max = arr[i];
        } else if (arr[i].length < arr.length) {
            min = arr[i];
        }


    }
    let sum = max.length + min.length;
    console.log(sum);
}

sumOfMaxMinString(["bbbb", "ooo", "sssss", "aaaaaaa"]);

// Task 5 +

function sumOfArrayNumbers(n) {
    let total = 0;
    for (let i = 0; i < n.length; i++) {
        if (isNaN(n[i])) {
            continue;
        }
        total += Number(n[i]);
    }
    console.log(total);
}

sumOfArrayNumbers([5, 5, 1]);

// Task 6

function getMultipleOfNeighbours(arr) {
    let multiple;
    for (let i = 0; i < arr.length; i++) {
        let next = arr[i + 1];
        multiple = arr[i] * next;
        console.log(multiple);
    }
}

getMultipleOfNeighbours([3, 7, 12, 5, 20, 0]);
