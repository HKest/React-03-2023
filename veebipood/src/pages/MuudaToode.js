import React, { useRef, useState } from "react";
import { useParams } from "react-router-dom";
import tootedFailist from "../data/tooted.json";

function MuudaToode() {
  const { index } = useParams(); //app.js failis: path="muuda/:index"
  const leitud = tootedFailist[index];

  const [modifiedProduct, setModifiedProduct] = useState(leitud);

  const nimiRef = useRef();
  const hindRef = useRef();
  const piltRef = useRef();
  const aktiivneRef = useRef();

  const muuda = () => {
    const modified = {
      nimi: nimiRef.current.value,
      hind: Number(hindRef.current.value),
      pilt: piltRef.current.value,
      aktiivne: aktiivneRef.current.checked,
    };
    setModifiedProduct(modified);
  };

  return (
    <div>
      {leitud !== undefined && (
        <div>
          <label>Toote nimi</label>
          <br />
          <input
            type="text"
            ref={nimiRef}
            defaultValue={modifiedProduct.nimi}
          />
          <br />

          <label>Toote hind</label>
          <br />
          <input
            type="number"
            ref={hindRef}
            defaultValue={modifiedProduct.hind}
          />
          <br />

          <label>Toote pilt</label>
          <br />
          <input
            type="text"
            ref={piltRef}
            defaultValue={modifiedProduct.pilt}
          />
          <br />

          <label>Toote aktiivsus</label>
          <br />
          <input
            type="checkbox"
            ref={aktiivneRef}
            defaultChecked={modifiedProduct.aktiivne}
          />
          <br />

          <button onClick={muuda}>Uuenda</button>
          <br />
        </div>
      )}
      {leitud === undefined && <div>Toodet ei leitud!</div>}
    </div>
  );
}

export default MuudaToode;
