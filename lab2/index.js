import Fetch from "./Fetch.js";

let Valid = new Fetch("https://pokeapi.co/api/v2/pokemon/pikachu");
Valid.fetch();

const notValid = new Fetch("https://pokeapi.co/api/v2/pokemon/abcd");
notValid.fetch();
