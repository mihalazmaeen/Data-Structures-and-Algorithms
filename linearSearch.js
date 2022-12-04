function linearSearch(arr, target) {
    for (let i = 0; i < arr.length; i++){
        if (arr[i] === target) {
            return i;
        }
    }
    return -1;
}
console.log(linearSearch([-5, 8, 6, 2, 3, 7], 5));