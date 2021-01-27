const chalk = require('chalk');
const beep = require('beepbeep');

class Person {
constructor(name, favoriteColors, backgroundColors) {
    this.name = name;
    this.favoriteColor
}

speak(){
    for (let i=0; 1 < this.favoriteColors.length; i++){
        console.log(chalk.bgHex(this.backgroundColors[i]).hex(this.favoriteColors[i])(this.name));
        beep(i);
    }
}
}
module.exports = Person;
