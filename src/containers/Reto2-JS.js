function fibonacci(num) {
    if (num == 0) {
        return 0
    } 
    else if (num == 1) {
        return 1
    } 
    else {
        return (fibonacci(num-1) + fibonacci(num-2))
    }
}
var cant=10
for (var i=0; i<cant; i++) {
    console.log(fibonacci(i));
}