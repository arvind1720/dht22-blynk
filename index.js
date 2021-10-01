var Blynk = require('blynk-library');
var Gpio = require('onoff').Gpio;
var led = new Gpio(14, 'out');

var AUTH = '76BqvSG5Wmyn2hcSEWJcsJ1Qa8f41FtS';

var blynk = new Blynk.Blynk(AUTH);

var v1 = new blynk.VirtualPin(1);

v1.on('write', function(param) {
 
  if (param[0] == '1') {
	led.writeSync(1);
  } else {
    led.writeSync(0);
  }
    console.log['V0:',param[0]];
});

