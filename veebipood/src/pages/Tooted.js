import React, { useState } from 'react';
import ostukorvFailist from "../data/ostukorv.json";
import tootedFailist from "../data/tooted.json"

function Tooted() {
  // const [ostukorv, uuendaOstukorv] = useState(tootedFailist);
  const [tooted, uuendaTooted] = useState(tootedFailist);

  const lisaOstukorvi = (klikitudToode) => {
    ostukorvFailist.push(klikitudToode);
  };

 

  return (
    <div>
      <div> Tooteid kokku: {tooted.length} tk</div>
      {tooted.map((el, ix) =>  <div key={ix} > {el} <button onClick={() => lisaOstukorvi(el)}>Lisa ostukorvi</button></div>) }
     
      {/* <div> Ostukorvi tooteid kokku: {ostukorv.length} tk</div>
      {tooted.map(toode =>  
      <div key={toode}>
          {toode}
        </div>
      
     </div> */}
     </div>
  )
}

export default Tooted;
