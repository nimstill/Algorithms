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

//paixu 

function compare(num1, num2) {
    return num1 - num2;
}

var nums = [3,1,2,100];

nums.sort(compare);

//*/*/*/*/*/*/*/

//diedaiqi   every()

function isEven(num) {
    return num % 2 == 0;
} 

var nums = [2,46,];
var even = nums.every(isEven);
if(even) {
    print("all numbers are even");
}
else {
    print("not all numbers are even");
}

//reduce()

function add(runningTotal, currentValue) {
    return runningToltal + currentValue;
}
var nums = [1,2,3,4];
var sum = nums.reduce(add);

// reduceRight() 他是从右往左执行


