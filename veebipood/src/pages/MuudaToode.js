import React, {useRef} from 'react';
import { useParams } from 'react-router-dom';
import tootedFailist from "../data/tooted.json";

function MuudaToode() {

  const { index } = useParams(); //app.js failis: path="muuda/:index"
  const leitud = tootedFailist[index];

  const nimiRef = useRef();

  const muuda = () => {
    tootedFailist[index] = nimiRef.current.value;
  }

  return (
    <div>
      {leitud !== undefined && (
        <div>
          <label>Toote nimi</label>
          <br />
          <input type="text" defaultValue={leitud} />
          <br />
          <button onClick={muuda}>Uuenda</button>
          <br />
        </div>
      )}
      {leitud === undefined && <div>Toodet ei leitud!</div>}
    </div>
  );
}

export default MuudaToode