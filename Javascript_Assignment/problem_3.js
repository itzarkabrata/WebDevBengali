function filterOddNumbers(array) {
    return array.filter((e)=>{
        return e % 2 == 1;
    })
}

array = [15,23,46,58,14,83,64,9];

OddNumber_Array = filterOddNumbers(array);

console.log("The Array of odd elements : ");

console.log(OddNumber_Array);