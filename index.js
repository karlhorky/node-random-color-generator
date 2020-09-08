const randomColor = require('randomcolor'); // import the script
const color = randomColor(); // a hex code for an attractive color
const chalk = require('chalk');
const prompt = require('prompt');

const command = process.argv[2];

if (command === `ask`) {
  prompt.start();
  prompt.get(['usersColor', 'usersLuminosity'], function (err, result) {
    //
    // Log the results.
    //
    console.log('Command-line input received:');
    console.log(result.usersColor);
    console.log(result.usersLuminosity);
    const myColor = randomColor({
      hue: result.usersColor,
      luminosity: result.usersLuminosity,
    });
    console.log(myColor);

    console.log(
      chalk.hex(myColor)(`
############################
############################
#######   ${myColor}  #########
############################
############################`),
    );
  });
} else
  console.log(
    chalk.hex(color)(`
############################
############################
#######   ${color}  #########
############################
############################`),
  );
