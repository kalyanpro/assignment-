let array = [10,23,34,45,50,66,77,88,99];

console.log("original Array: "+array);

array.sort(function (a, b){
    return b - a
});

console.log("after sorting in dcending order:  " +array);
