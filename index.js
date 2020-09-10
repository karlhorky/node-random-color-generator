const randomColor = require('randomcolor');
const chalk = require('chalk');
const prompt = require('prompt');

const userInput = process.argv[2];
const userInputLuminosity = process.argv[3];

function output(colorCode) {
  console.log(chalk.hex(colorCode)`
  ################################
  ################################
  #######     ${colorCode}   ##########
  ################################
  ################################`);
}

if (userInput === `ask`) {
  prompt.start();
  prompt.get(['usersHue', 'usersLuminosity'], function (err, result) {
    const color = randomColor({
      hue: result.usersHue,
      luminosity: result.usersLuminosity,
    });
    output(color);
  });
} else if (userInput !== 'ask') {
  const color = randomColor({
    hue: userInput,
    luminosity: userInputLuminosity,
  });
  output(color);
}
