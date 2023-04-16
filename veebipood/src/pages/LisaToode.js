import React, { useRef, useState } from "react";
import tootedFailist from "../data/tooted.json";

function LisaToode() {
  const [sonum, uuendaSonum] = useState("Lisa toode!"); // use..Reacti erikoodid, mida tuleb alati importida
  const nimiViide = useRef();
  const hindViide = useRef();
  const piltViide = useRef();
  const aktiivneViide = useRef();

  // function lisa() {}

  const lisa = () => {
    if (nimiViide.current.value === "") {
      uuendaSonum("Tühja nimetusega ei saa toodet lisada!");
    } else {
      uuendaSonum(
        "Toode nimega " +
          nimiViide.current.value +
          nimiViide.current.value +
          " lisatud!" +
          tootedFailist.push({
            nimi: nimiViide.current.value,
            hind: Number(hindViide.current.value),
            pilt: piltViide.current.value,
            aktiivne: aktiivneViide.current.checked,
          })
      );
    }
  };
  return (
    <div>
      <div>{sonum}</div>
      <label>Uue toote nimi</label> <br />
      <input ref={nimiViide} type="text" />
      <button onClick={lisa}>Sisesta</button> <br />
      <label> Uue toote hind </label> <br />
      <input ref={hindViide} type="number" />
      <button onClick={lisa}>Sisesta</button> <br />
      <label> Uue toote pilt </label> <br />
      <input ref={piltViide} type="text" />
      <button onClick={lisa}>Sisesta</button> <br />
      <label> Uus toode aktiivne</label> <br />
      <input ref={aktiivneViide} type="checkbox" />
      <button onClick={lisa}>Sisesta</button> <br />
    </div>
  );
}
export default LisaToode;
