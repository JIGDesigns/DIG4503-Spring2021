import React, {useState} from 'react';

function Teammaker(props){
    const [team, setTeam] = useState([]);
    console.log(team);
return(<div>
<button onClick={()=>{if (team.length > 0){
var newTeam = team; 
newTeam.pop();
setTeam(newTeam);}}}>Remove Last Pokemon</button>
<button onClick={()=>{if (props.pokemon.name != "N/A"){
var newTeam = team; 
newTeam.push(props.pokemon);
setTeam(newTeam);
alert("here");
}}}>Add Seached Pokemon</button>
</div>);
}
export default Teammaker;