# USO

objeto.addEventListener('evento', funcion, )

### Eventos

.addEventListener('evento', accion)
.removeEventListener('evento', accion)

### Eventos del mouse

click => cuando aprietas y suelta dentro del objeto
dblclick => dos clicks
contextmenu => click derecho (cuando aprietas y suelta dentro del objeto)

mousedown => al apretar
mouseup => haces click dentro o fuera del objeto, pero los sueltas en el objeto

mouseover => mouse sobre el objeto
mouseout => cuando el objeto sale del objeto

### Eventos de teclado

keydown => cuando se aprieta la tecla dentro del objeto
keypress => cuando se aprieta y se suelta la tecla dentro del objeto
keyup => cuando se suelta la tecla dentro del objeto

### Eventos de interfaz

error => si un archivo multimedia no se carga
load => cuando un elemento se ha cargado

beforeunload => antes de que cargue una pagina de un enlace
unload => una vez abierta la pagina o abandonado el sitio

resize => cuando se redimentiona la pestaña

scroll => cuando escrolleas
select => cuando selecionas un input o textarea

### Temporizadores

setTimeOut(funcion(){codigo funcion}, tiempo) => como un sleep, se ejecuta una vez en el tiempo que le digamos en ms

clearTimeOut => elimina el temporizador. uso: creamos una variable que tenga temporizador y ejecutamos variable.clearTimeOut() y no se ejecutará.

setInterval(funcion, tiempo) => se ejecuta en bucle cada x tiempo.

clearInterval() => igual que clearTimeOut, corta el bucle.
