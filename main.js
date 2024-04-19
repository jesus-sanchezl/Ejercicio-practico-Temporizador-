"use strict";

const formatText = (value, text) => {
  if (value === 1) {
    return `${value} ${text}`;
  }

  return `${value} ${text}s`;
};

let days = 0;
let hours = 0;
let minutes = 0;
let seconds = 0;

const intervalID = setInterval(() => {
  seconds += 5;

  if (seconds === 60) {
    minutes++;
    seconds = 0;
  }

  if (minutes === 60) {
    hours++;
    minutes = 0;
  }

  if (hours === 24) {
    days++;
    hours = 0;
  }

  console.log(
    "Han pasado " +
      formatText(days, "día") +
      ", " +
      formatText(hours, "hora") +
      ", " +
      formatText(minutes, "minuto") +
      ` y ${seconds} segundos desde la ejecución del programa`
  );
}, 5000);

const stopTimer = (time, unit) => {
  let timeInMs = time;

  switch (unit) {
    case "D":
      timeInMs *= 24;
    case "H":
      timeInMs *= 60;
    case "M":
      timeInMs *= 60;
    case "S":
      timeInMs *= 1000;
  }

  setTimeout(() => {
    console.log("Se paró el temporizador...");
    clearInterval(intervalID);
  }, timeInMs);
};

stopTimer(15, "S");
