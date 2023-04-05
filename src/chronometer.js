class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = null;
  }

  start(printTimeCallback) {
    this.intervalId = setInterval(() => {
      
      this.currentTime += 1
      
      if(printTimeCallback){
        printTimeCallback()
      }
      
    }, 1000)
  }

  getMinutes() {
    this.minutes = this.currentTime/60
    return Math.floor(this.minutes)
  }

  getSeconds() {
    this.seconds = this.currentTime % 60
    return Math.floor(this.seconds)
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
   return clearInterval(this.intervalId)
  }
  reset() {
    this.currentTime = 0
  }

  split() {
    let stringMinutes = this.computeTwoDigitNumber(this.getMinutes())
    let stringSeconds = this.computeTwoDigitNumber(this.getSeconds())
    let timeFormat = `${stringMinutes}:${stringSeconds}`
    return timeFormat;
  }
}
