class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = null;
  }

  start(printTimeCallback) {
    this.intervalId = setInterval(()=>{
      
      this.currentTime += 1;

      if(printTimeCallback){
        printTimeCallback();
      }
      
    }, 10);
  }

  getMinutes() {
    this.minutes = this.currentTime/6000;
    return Math.floor(this.minutes);
  }

  getSeconds() {
    this.seconds = (this.currentTime % 6000) /100;
    return Math.floor(this.seconds);
  }

  getCentiseconds() {
    this.centiseconds = this.currentTime % 100
    return Math.floor(this.centiseconds);
  }

  computeTwoDigitNumber(value) {
    let stringVal = value.toString();
    
    if(stringVal.length === 1){
      return "0" + stringVal;
    }
    if(stringVal.length === 2){
      return stringVal;
    }
  }

  stop() {
    return clearInterval(this.intervalId);
  }

  reset() {
    this.currentTime = 0;
  }

  split() {

    const format = `${this.computeTwoDigitNumber(this.getMinutes())}:${this.computeTwoDigitNumber(this.getSeconds())}.${this.computeTwoDigitNumber(this.getCentiseconds())}`

    return format;
    
  
  }
}

