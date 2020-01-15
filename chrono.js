// Cronometro en consola con start/stop/reset, que salga el tiempo con minutos y segundos
// con una Class
// metodo showtime dentro de la clase para que me muestre el tiempo que tiene en ese momento

class Timer {
  constructor(seconds, minutes) {
    this.seconds = seconds;
    this.minutes = minutes;
    this.intervalId = 0;
  }
  start() {
    this.seconds = 0;
    this.intervalId = setInterval(() => {
      console.log(this.seconds);
      this.seconds ++; 
    }, 1000);
  }
  stop() {
    clearInterval(this.intervalId);
  }
  reset() {

  }
  showTime() {

  }
}

let myTimer = new Timer();

myTimer.start();
myTimer.stop();
myTimer.reset();
myTimer.start();

myTimer.showTime();
myTimer.showTime();
myTimer.showTime();
