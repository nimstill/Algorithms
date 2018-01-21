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


function curve(grade) {
    return grade += 5;
}
var grades = [77, 65 ,81];
var newgrades = grades.map(curve);
print(newgrades); //

//字符串使用
 
function first(word) {
    return word[0];
}

var words = ["for", "your", "information"];
var acronym = words.map(first);
print(acronym.join(""));  //xianshi   "fyi"

//filter 过滤字符串数组

function afterc(str) {
    if (str.indexOf("cie") > -1) {
        return true;
    }
    return false;
}
var words = [];
var misspelled = word.filter(afterc);
print(misspelled);


//二维数组

Array.matrix = function(numrows, numcols, initial) {
    var arr = [];
    for (var i =0; j<numcols; ++j) {
        var columns = [];
        for (var j= ; j<numcols; ++j） {
            columns[j] = initial;    
        }
        arr[i] = columns;
    }
    return arr;
}

//对象中的数组

function weekTemps(){
    this.dataStore = [];
    this.add = add;
    this.average = average;
}

function add(temp) {
    this.dataStore.push(temp);
}

function average(){
    var total = ;
    for (var i = 0; i< this.dataStore.length; i++) {
        total += this.dataStore[i];
    }
    return total / this.dataStore.length;
}

var thisWeek = new weekTemps();
thisWeek.add();


print(thisWeek.average());






##Data Structures & Algorithms with JavaScript


*编写出容易阅读的代码和编写出让计算机能正确执行的代码同等重要*

---

###数组
*2016.04.13*

.shift()删除数组第一个元素
splice() 起始索引  需要删除的元素个数（添加元素时改参数设为0   想要添加进数组的元素

.revise() 数组的顺序反转  

.sort()方法是按照字典顺序对元素进项排序，因此他假定元素都是字符型类型

迭代器方法
forEach() every() some() reduce() 
生成新数组的迭代器方法： map() filter() 
map()和forEach() 相似，区别是map()返回一个新数组

**二维数组**

*2016.14.14*


---



###list