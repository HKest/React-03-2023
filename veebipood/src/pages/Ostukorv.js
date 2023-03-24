import React, { useState } from 'react';
import { Link } from 'react-router-dom'

function Ostukorv() {
const[ostuKorv, uuendaOstukorv] = useState(["Coca", "Fanta", "Sprite"]);

    return (
        <div>

            <div>Ostukorvis esmeid kokku {ostuKorv.length}</div>
            {ostuKorv.map(toode=> <div>{ostuKorv}</div>)}

            <br />
            Ostukorv on tühi. <Link to="/">
            Tooteid lisama. </Link>
            </div>
    )
}

export default Ostukorv