// Cronometro en consola con start/stop/reset, que salga el tiempo con minutos y segundos
// metodo showtime dentro de la clase para que me muestre el tiempo que tiene en ese momento

class Timer {
  constructor() {
    this.seconds = 0;
    this.minutes = 0;
    this.intervalId = 0;
  }
  start() {
    this.intervalId = setInterval(() => {
      console.log(`${this.minutes} minutes ${this.seconds} seconds`);
      this.seconds ++; 
      if (this.seconds === 60) {
        this.seconds = 0;
        this.minutes += 1;
      }
    }, 1000);
  }
  stop() {
    clearInterval(this.intervalId);
    console.log('Timer stopped');
  }
  reset() {
    console.log('Resetting Timer!');
    this.seconds = 0;
    this.minutes = 0;
    this.start();
  }
  showTime() {
    alert(`The timer is right now on ${this.minutes} minutes ${this.seconds} seconds`);
  }
}

let myTimer = new Timer();

myTimer.start();
// myTimer.stop();
// myTimer.start();
myTimer.reset();
// myTimer.start();

// myTimer.showTime();

