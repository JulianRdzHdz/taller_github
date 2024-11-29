const chalk = require('chalk');
const figlet = require('figlet');

console.log('Hola Mundoooo!');
figlet('Hola Mundo!', function(err, data) {
    if (err) {
        console.log('Something went wrong....');
        console.dir(err);
        return;
    }
    console.log(chalk.blue(data));
});