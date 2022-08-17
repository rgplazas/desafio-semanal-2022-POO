function anagrama (pal1, pal2) {
    pal1 = pal1.toLowerCase()
    pal2 = pal2.toLowerCase()
    if ((pal1 == pal2) || (pal1.length != pal2.length)) {
        console.log(false)
        console.log(pal1, pal2)
    } else{
        var iguales = true
        pal1array = pal1.split("")
        pal2array = pal2.split("")
        pal1array.sort()
        pal2array.sort()
        for (var i=0;i<pal1array.length;i++) {
            if (pal1array[i]!=pal2array[i]) {
                iguales = false
            }
        }
        console.log(iguales)
    }
}
anagrama("Antes", "Tensa")