const randomColor = require('randomcolor'); // import the script
const color = randomColor(); // a hex code for an attractive color
const chalk = require('chalk');
const prompt = require('prompt');

const command = process.argv[2];
const command2 = process.argv[3];

if (command === `ask`) {
  prompt.start();
  prompt.get(['usersColor', 'usersLuminosity'], function (err, result) {
    const myColor = randomColor({
      hue: result.usersColor,
      luminosity: result.usersLuminosity,
    });

    console.log(
      chalk.hex(myColor)(`
############################
############################
#######   ${myColor}  #########
############################
############################`),
    );
  });
} else if (command !== 'ask') {
  const command = process.argv[2];
  const command2 = process.argv[3];
  const usersPick = randomColor({ hue: command, luminosity: command2 });
  console.log(
    chalk.hex(usersPick)(`
############################
############################
#######   ${usersPick}  #########
############################
############################`),
  );
}
