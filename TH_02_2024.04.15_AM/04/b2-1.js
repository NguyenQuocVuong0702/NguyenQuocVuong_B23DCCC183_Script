function findMax(arr) {
    if (arr.length === 0) {
        return null;
    }
    
    let max = arr[0];

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }

    return max;
}

let numbers = [5, 8, 2, 10, 3];
let maxNumber = findMax(numbers);
console.log("Số lớn nhất trong mảng là:", maxNumber);
