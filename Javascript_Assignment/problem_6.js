function findDuplicates(array) {
    var object = {};
    var new_arr = [];

        array.forEach((i) => {
          if(!object[i])
              object[i] = 0;
            object[i] += 1;
        })

        for (var j in object) {
           if(object[j] >= 2) {
               new_arr.push(j);
           }
        }

        return new_arr;

}

array = [3,4,6,1,2,3,4,8,6,8,1,3,3,9];

let new_array = findDuplicates(array);

console.log(new_array);