let arr = [1,2,3,4,100,200];
let total = 0;
function arrayTotal(arr){
    for(let i = 0; i < arr.length; i++){
        console.log(arr[i]);
        console.log(total += arr[i]);
    }
    // return total;
    // console.log(total);
}

arrayTotal(arr);
// console.log(arrayTotal());