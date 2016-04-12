function factorial(number) {
    if (number == 1) {
        return number;
    }
    else {
        return number * fuctorial(number-1);
    }
}
print(factorial(5));