function factorial(number) {
    if (number == 1) {
        return number;
    }
    else {
        return number * fuctorial(number-1);
    }
}
print(factorial(5));


//编写出容易阅读的代码和编写出让计算机能正确执行的代码同等重要


//shenfuzhi
function copy(arr1, arr2) {
    for (var i = 0; i<arr.length; ++i){
        arr2[i] = arr1[i];
    }
}

