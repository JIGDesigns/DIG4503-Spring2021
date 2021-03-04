import React, {useState} from 'react';
import Pokemon from '../Pokemon/pokemon.js';

function Teammaker(props){
    const [team, setTeam] = useState([]);
    const [pokelist, setPoke] = useState([]);
    
return(<div>
<button onClick={()=>{if (team.length > 0){
var newTeam = team; 
newTeam.pop();
var newPoke = [];
for (let index = 0; index < newTeam.length; index++) {
    const pokemon = newTeam[index];
newPoke.push(<Pokemon pokemon={pokemon}/>)
    
}
setPoke(newPoke);
setTeam(newTeam);}}}>Remove Last Pokemon</button>
<button onClick={()=>{if (props.pokemon.name != "N/A"){
var newTeam = team; 
var newPoke = [];
newTeam.push(props.pokemon);
for (let index = 0; index < newTeam.length; index++) {
    const pokemon = newTeam[index];
newPoke.push(<Pokemon pokemon={pokemon}/>)
    
}
setPoke(newPoke);
setTeam(newTeam);
}}}>Add Seached Pokemon</button>
{pokelist}
</div>);
}
export default Teammaker;