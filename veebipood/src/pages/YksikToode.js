import React from 'react'
import { useParams } from 'react-router-dom';
import tooteFailist from "../data/tooted.json"

function YksikToode() {
  const { jrkNr } = useParams();

  const leitud = tooteFailist[jrkNr];
  return (
    <div>
      {leitud !== undefined && <div>
     <div>Toote nimetus:{leitud.nimi}</div>
     <div>Toote hind:{leitud.hind}</div>
     <div>Toode on järjekorras number:{Number(jrkNr) + 1}</div>
     <div>Toote pilt on:
      <img src={leitud.pilt} alt="" />
     </div>
     </div>}
{leitud === undefined && <div>
Tooodet ei leitud!
</div>}

     </div>
  )
}

export default YksikToode