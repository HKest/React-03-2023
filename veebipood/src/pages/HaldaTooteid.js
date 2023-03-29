import React, { useState } from 'react';
import tootedFailist from "../data/tooted.json"
import { Link } from 'react-router-dom';

function HaldaTooted() {
  const [tooted, uuendaTooted] = useState(tootedFailist)



const kustuta = (index) => {
 tootedFailist.splice(index,1);
 uuendaTooted(tootedFailist.slice());

}

  return (
    <div>
      <div> Tooteid kokku: {tooted.length} tk</div>
      {tooted.map((el, ix) => 
        <div key={ix}>
          {el}
          <button onClick={() => kustuta(ix)}>x</button>

          <Link to={"muuda/" + ix}>
          <button>Muuda</button>
          </Link>
    
        </div>
      )}
    </div>
  )
}

export default HaldaTooted;
