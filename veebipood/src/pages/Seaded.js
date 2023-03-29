//alustada käsuga rfce ja enter, tekitab reacti

import React, { useRef, useState } from "react"
import { ToastContainer, toast } from 'react-toastify';

function Seaded() {

    const aadressViide = useRef();
    const emailViide = useRef();
    const telefonViide = useRef();
    const [keel, uuendaKeel] = useState (localStorage.getItem("keel") || "est");

    const muudaKeelEst = () => {
        uuendaKeel("est"); 
        localStorage.setItem(localStorage.getItem ("keel")); //sissekirjutatatud Javascripti- salvestame brows
    }

    const muudaKeelEng = () => {
        uuendaKeel("eng");
        localStorage.setItem(localStorage.getItem("keel"));
    }

    const muudaKeelRus = () => {
        uuendaKeel("rus");
        localStorage.setItem("keel", "rus");
    }
    
    const salvestaAadress = () => {
        if (aadressViide.current.value === "") {
        toast.error("Tühja aadressi ei saa sisestada!")
        return;
        }

        if (aadressViide.current.value[0] === aadressViide.current.value[0].toLowerCase()) {
        toast.error("Aadress ei saa sisestada väikese algus tähega")
       return;
    }
        toast.success("Aadress edukalt sisestatud")
        localStorage.setItem("aadress", aadressViide.current.value);
    }
        //uus

    const salvestaEmail = () => {
        if (emailViide.current.value === "") {
            toast.error("Tühja emaili ei saa sisetada!");
       return;
    }
    if (emailViide.current.value.includes("@") === false) {
        toast.error("E-maili ei saa sisestada kui pole @ märki");
        return;
    }
   
toast.success("E-mail edukalt sisestatud")
localStorage.setItem("email", emailViide.current.value);
    return;
}

const salvestaTelefon = () => {
      
    if (telefonViide.current.value === "") {
        toast.error("Telefoni ei saa sisetada!")
        return;
    }
    if (telefonViide.current.value.includes("+372") === false) {
        toast.error("Numbrit ei saa sisestada kui pole +372 riigikoodi");
        return;
    }

toast.success("Telefon on õigesti sisestatud")
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
<br />
<br />
<ToastContainer />

        </div>
    )
}

export default Seaded