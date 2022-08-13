var existeAnagrama = true;
var numCar = 0;

var palabra1 = "roma";
var palabra2 = "mora";

if(palabra1.length != palabra2.length){
    existeAnagrama = false
}
else if(palabra1 == palabra2){
    existeAnagrama = false
}
else{
    numCar = 0
    var lstPalabra1 = Array.from(palabra1)
    lstPalabra1.sort()
    var lstPalabra2 = Array.from(palabra2)
    lstPalabra2.sort()

    while (existeAnagrama && (numCar < palabra1.length)){
        if (lstPalabra1[numCar] != lstPalabra2[numCar]){
            existeAnagrama = false
        }
        numCar++;
    }

}

if (existeAnagrama == true){
    console.log("True")
}
else{
    console.log("False")
}
