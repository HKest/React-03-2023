import React, { useState } from "react";
import { Link } from "react-router-dom";
import ostukorvFailist from "../data/ostukorv.json";

function Ostukorv() {
  const [ostuKorv, uuendaOstukorv] = useState(ostukorvFailist);

  const lisa = (klikitudToode) => {
    // ostuKorv.push("Red bull", "Dynamiit", "Monster");
    // ostuKorv.push("red Bull")
    ostuKorv.push(klikitudToode);
    uuendaOstukorv(ostuKorv.slice());
  };
  const kustuta = (jarjekorranumber) => {
    ostuKorv.splice(jarjekorranumber, 1); // vasakpoolne number tähendab mitmendat ma kustutan, parempoolne mitu tükki kustutab

    // 1 tähendab teist, javascriptis on järjekorra nur 0 algavad, järjekorra nr 0
    uuendaOstukorv(ostuKorv.slice());
  };

  const arvutaKoguSumma = () => {
    let summa = 0;
    ostuKorv.forEach((toode) => (summa = summa + toode.hind));

    return summa;
  };

  // const tyhjenda = () =>
  // ostukorvFailist = [];
  // uuendaOstukorv([]);
  return (
    <div>
      {/* {ostuKorv.length > 0 && <button onClick={tyhjenda}>Tühjenda</button>} */}

      {ostuKorv.length > 0 && (
        <div>Ostukorvis esmeid kokku {ostuKorv.length}</div>
      )}
      {ostuKorv.map((toode, jrkNr) => (
        <div key={jrkNr}>
          {toode.nimi}
          <img className="pilt" src={toode.pilt} alt="" />
          {toode.hind}

          <button onClick={() => lisa(toode)}>+</button>
          <button onClick={() => kustuta(jrkNr)}>x</button>
        </div>
      ))}

      <br />
      {ostuKorv.length === 0 && (
        <div>
          {" "}
          Ostukorv on tühi. <Link to="/">Tooteid lisama. </Link>{" "}
        </div>
      )}
      <br />

      <div>Kokku: {arvutaKoguSumma()} $</div>
    </div>
  );
}

export default Ostukorv;
