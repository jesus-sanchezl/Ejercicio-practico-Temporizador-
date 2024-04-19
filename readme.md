# Ejercicio práctico de JavaScript: "Temporizador"

Este programa en JavaScript crea un temporizador que imprime en la consola el tiempo transcurrido desde su ejecución. El tiempo se formatea para mostrar los segundos, minutos, horas y días transcurridos, teniendo en cuenta la singularidad y pluralidad de las unidades de tiempo (por ejemplo, "1 minuto" o "30 segundos").

## Uso

1. Descarga o clona este repositorio en tu máquina local.
2. Abre el archivo `temporizador.js` en tu editor de código.
3. Ejecuta el archivo  en un navegador web que permita la ejecución de JavaScript.


## Detener el temporizador

Se proporciona una función para detener el temporizador después de un tiempo arbitrario. La función `detenerTemporizador(tiempo, unidad)` recibe dos parámetros:

- `tiempo`: Un número que representa la cantidad de tiempo que pasará antes de detener el temporizador.
- `unidad`: Una letra que indica la unidad de tiempo correspondiente:
  - 'D': Días
  - 'H': Horas
  - 'M': Minutos
  - 'S': Segundos

Por ejemplo, si se llama a `detenerTemporizador(2, "M")`, el temporizador se detendrá después de 2 minutos.

Después de detener el temporizador, se mostrará un mensaje en la consola indicando que se ha detenido.

## Nota

Es importante tener en cuenta que debido a la naturaleza de los temporizadores y las fechas en JavaScript, puede haber una pequeña desviación de +/- 1 segundo en el tiempo mostrado.
