for(names.front(); names.currPos() < names.length(); names.next()) {
    print(names.getElement());
}

function createArr(file) {
    var arr = read(file).aplit("\n");
    for (var i = 0; i< arr.length; ++i) {
        arr[i] = arr[i].trim();
    }
    return arr;
}

