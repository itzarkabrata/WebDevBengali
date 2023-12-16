function findMissingNumber(array) {
    i = 0;
    flag = 1;
    while (i<array.length) {
        if(flag==array[i]){
            flag++;
            i++;
        }else{
            console.log(flag);
            flag++;
        }
    }
}

array = [1,2,4,5,6,8,11,12];

console.log("Missing Elements are : ");
findMissingNumber(array);