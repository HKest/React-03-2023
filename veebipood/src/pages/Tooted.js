import React, { useState } from "react";
import { Link } from "react-router-dom";
import ostukorvFailist from "../data/ostukorv.json";
import tootedFailist from "../data/tooted.json";

function Tooted() {
  // const [ostukorv, uuendaOstukorv] = useState(tootedFailist);
  const [tooted, uuendaTooted] = useState(tootedFailist);

  const lisaOstukorvi = (klikitudToode) => {
    ostukorvFailist.push(klikitudToode);
  };

  const sorteeriAZ = () => {
    tooted.sort((a, b) => a.nimi.localeCompare(b.nimi));
    uuendaTooted(tooted.slice());
  };

  const sorteeriZA = () => {
    tooted.sort((a, b) => b.nimi.localeCompare(a.nimi));
    uuendaTooted(tooted.slice());
  };

  const sorteeriHindKasvav = () => {
    tooted.sort((a, b) => a.hind - b.hind);
    uuendaTooted(tooted.slice());
  };

  const sorteeriHindKahanev = () => {
    tooted.sort((a, b) => b.hind - a.hind);
    uuendaTooted(tooted.slice());
  };

  const filtreeriEsitaheAlusel = (esiTaht) => {
    const vastus = tootedFailist.filter((ykstoode) =>
      ykstoode.nimi.startsWith(esiTaht)
    );
    uuendaTooted(vastus);
  };

  return (
    <div>
      <button onClick={sorteeriAZ}>Sorteeri AZ</button>
      <button onClick={sorteeriZA}>Sorteeri ZA</button>
      <button onClick={sorteeriHindKasvav}>Hind kasvav</button>
      <button onClick={sorteeriHindKahanev}>Hind kahanev</button>

      <br />
      <button onClick={() => filtreeriEsitaheAlusel("B")}>B</button>
      <button onClick={() => filtreeriEsitaheAlusel("V")}>V</button>
      <button onClick={() => filtreeriEsitaheAlusel("M")}>M</button>

      <div> Tooteid kokku: {tooted.length} tk</div>

      {tooted.map((el, ix) => (
        <div key={ix}>
          <Link to={"/toode/" + ix}>
            {el.nimi} <br />
            <img className="pilt" src={el.pilt} alt="" /> <br />
            {el.hind} <br />
            {el.aktiivne}
          </Link>
          <button onClick={() => lisaOstukorvi(el)}>Lisa ostukorvi</button>
        </div>
      ))}

      {/* <div> Ostukorvi tooteid kokku: {ostukorv.length} tk</div>
      {tooted.map(toode =>  
      <div key={toode}>
          {toode}
        </div>
      
     </div> */}
    </div>
  );
}

export default Tooted;
