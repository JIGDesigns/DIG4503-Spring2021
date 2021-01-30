
import axios from 'axios';
import chalk from 'chalk'; 

class Fetch {

    constructor(pokemon, color,) {
        this.pm = pokemon;
        this.colorHex = color;
    }

    fetch(){
        axios('https://pokeapi.co/api/v2/pokemon/ditto')
    .then(function (response) {
        // Use the 'data'
        const pokemon = response.data;
        // In this example, the above URL will return an object
        //  with data on the Pokemon requested
        console.log("You chose" + pokemon.name + "\nand its ID is " + pokemon.id);
    })
    .catch(function (error) {
        // handle error
        console.log(chalk.red(error));
    });
}
}
export default Fetch;