// Cronometro en consola con start/stop/reset, que salga el tiempo con minutos y segundos
// metodo showtime dentro de la clase para que me muestre el tiempo que tiene en ese momento

class Timer {
  constructor(seconds, minutes) {
    this.seconds = seconds;
    this.minutes = minutes;
    this.intervalId = 0;
  }
  start() {
    this.seconds = 0;
    this.minutes = 0;
    this.intervalId = setInterval(() => {
      console.log(`${this.minutes} minutes ${this.seconds} seconds`);
      this.seconds ++; 
    }, 1000);
    if (this.seconds === 60) {
      this.seconds = 0;
      this.minutes +1;
    }
    // cuando seconds llega a 60, ponerlo a cero y darle 1 a minuto
  }
  stop() {
    clearInterval(this.intervalId);
    console.log('Timer stopped!');
  }
  reset() {
    console.log('Resetting Timer!');
    this.seconds = 0;
  }
  showTime() {

  }
}

let myTimer = new Timer();

myTimer.start();
myTimer.stop();
myTimer.start();
myTimer.reset();
myTimer.start();

myTimer.showTime();

