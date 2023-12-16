function findMaxNumber(array) {
    max = -999;
    for (let i = 0; i < array.length; i++) {
        if(array[i]>max){
            max = array[i];
        }
    }
    return max;
}

array = [12,45,10,18,35,26];

Maximum_element = findMaxNumber(array);

console.log("Maximum element of the array is : "+ Maximum_element);