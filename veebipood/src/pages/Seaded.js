//alustada käsuga rfce ja enter, tekitab reacti

import React, { useRef, useState } from "react"

function Seaded() {

    const aadressViide = useRef();
    const emailViide = useRef();
    const telefonViide = useRef();
    const [keel, uuendaKeel] = useState (localStorage.getItem("keel") || "est");

    const muudaKeelEst = () => {
        uuendaKeel("est"); 
        localStorage. setItem(localStorage.getItem ("keel")); //sissekirjutatatud Javascripti- salvestame brows
    }

    const muudaKeelEng = () => {
        uuendaKeel("eng");
        localStorage. setItem(localStorage.getItem("keel"));
    }

    const muudaKeelRus = () => {
        uuendaKeel("rus");
        localStorage. setItem("keel", "rus");
    }
    
    const salvestaAadress = () => {
 localStorage.setItem("aadress", aadressViide.current.value);
    }

    const salvestaEmail = () => {
        localStorage.setItem("email", emailViide.current.value);
    }

    const salvestaTelefon = () => {
        localStorage.setItem("telefon", telefonViide.current.value);
    }
    // WCAG - web content accessibility guidelines, EU seadused

    return (
        <div>

<label>Meie aadress</label>
<input ref={aadressViide} type="text" />
<button onClick={salvestaAadress}>Sisesta</button>
<br />
<br />
<label>Meie e-mail</label>
<input ref={emailViide}  type="text" />
<button onClick={salvestaEmail}>Sisesta</button>
<br /><br />
<label>Meie telefon</label>
<input ref={telefonViide}  type="text" />
<button onClick={salvestaTelefon}>Sisesta</button>
<br /><br />


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