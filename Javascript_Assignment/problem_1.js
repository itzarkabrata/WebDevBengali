function sumArray(array) {
    sum = 0;
    for (let i = 0; i < array.length; i++) {
        sum = sum + array[i];
    }
    return sum;
}

array = [54,63,21,58,95,46];

Summation = sumArray(array);

console.log("Summation of all elements of the array is : "+Summation);