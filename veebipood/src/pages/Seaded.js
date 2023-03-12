//alustada käsuga rfce ja enter, tekitab reacti

import React, { useState } from "react"

function Seaded() {
    const [keel, uuendaKeel] = useState ("est");

    const muudaKeelEst = () => {
        uuendaKeel("est");
    }

    const muudaKeelEng = () => {
        uuendaKeel("eng");
    }

    const muudaKeelRus = () => {
        uuendaKeel("rus");
    }

    return (
        <div>
<button onClick={muudaKeelEst}>Eesti keelseks</button>
<button onClick={muudaKeelEng}>To English</button>
<button onClick={muudaKeelRus}>Pyccki</button>
{keel === "est" && <div>Leht on eesti keelne</div>}
{keel === "eng" && <div>The page is in English</div>}
{keel === "rus" && <div>Pyccki Rsõk</div>}


        </div>
    )
}

export default Seaded