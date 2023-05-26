### LIST
lista = ["miguel","blkshhh",True,18] # SI se puede modificar
lista[1] = "nuevo nombre"
print (lista[1])

### DUPLA
tupla = ("miguel","blkshhh",True,18) # NO se puede modificar
# tupla[3] = 20 /// NO ES VALIDO
print (tupla[3])

### SET
conjunto = {"miguel","blkshhh",True,18} #NO tienen indice como list y dupl, se ncesita un for. ELIMINA los datos duplicados

### DICT
    # Como un array asociativo
diccionario = {
    'nombre' : "Miguel",
    'alias' : "blkshhh",
    'edad' : 24
}
print(diccionario['nombre'])