for(i=1;i<101;i++){
    var resto3 = (i % 3);
    var resto5 = (i % 5);

    if (resto3 == 0){
        console.log("fizz" + " " + i)
    }
    if (resto5 == 0){
        console.log("buzz" + " " + i)
    }
    if (resto3 == 0 && resto5 == 0){
        console.log("fizzbuzz" + " " + i)
    }

}