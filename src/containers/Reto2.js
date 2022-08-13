var num1 = 0

function fibonacci(num1){

    if(num1 == 0){
        return 0;
    }
    else if(num1 == 1){
        return 1;
    }
    else{
        return fibonacci(num1-1)+fibonacci(num1-2)
    }
}
for (cont = 0;cont<50;cont++){
    console.log(fibonacci(cont))
}