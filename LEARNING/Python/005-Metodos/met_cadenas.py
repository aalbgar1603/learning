cadena1 = "Me llamo Miguel"
cadena2 = "De loqueras"

# EN ESTE LENGUAJE LOS METODOS SE PONEN COMO EN JS
# variable2 = variable1.metodo()

resultado = cadena1.upper() #CONVIERTE A MAYUSCULA
resultado = cadena1.lower() #CONVIERTE A MINUSCULAS
resultado = cadena1.capitalize() #PRIMERA LETRA MAYUSCULA

resultado = cadena1.find('m') #Busca una cadena en la cadena y devuelve la posicion (-1 si no existe)
resultado = cadena1.index('m') #Si no hay coincidencias lanza una excepcion

resultado = cadena1.isnumeric() #Si es nomerico devuelve TRUE
resultado = cadena1.isalpha() #Si es alfanumerico devuelve TRUE

resultado = cadena1.count('m') #Cuenta las coincidencias
resultado = len(cadena1) #Cuenta cuantos caracteres tiene 

resultado = cadena1.startswith('Hola') #Comprueba si la cadena empieza con otra cadena dada
resultado = cadena1.endswith('Miguel') #Comprueba si la cadena termina con otra cadena dada

resultado = cadena1.replace('Hola','Adios') #Si encuentra la cadena 'Hola' la reemplaza por 'Adios'
resultado = cadena1.split(',') #Crea una lista en el que usa como separador lo que se le de, en este caso una coma
