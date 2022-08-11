# el codigo convierte a minusculas asi que se puede escribir tanto en mayus como minus
def anagrama(pal1,pal2):
    pal1 = pal1.lower()
    pal2 = pal2.lower()
    if len(pal1) != len(pal2) or pal1 == pal2:
        print(False)
    else:
        lst1 = [pal1[i] for i in range(0, len(pal1))]
        lst1.sort()
        lst2 = [pal2[i] for i in range(0, len(pal2))]
        lst2.sort()
        if lst1 == lst2:
            print(True)
        else:
            print(False)

anagrama(input("Ingrese la primera palabra:"),input("Ingrese la segunda palabra:"))
