import React, { useState } from 'react'
import poedFailist from "../data/poed.json"

function Poed() {

    const [poed, uuendaPoed] = useState(poedFailist);
  
    const tagasiOrginaali = () => {
      uuendaPoed(poedFailist) ;
    }

    // }
        const sorteeriAZ = () => {
            poed.sort(poedFailist); // default sorteermine: a-z 
        // ("Ülemiste", "Viimsi", "Rocca al Mare", "Magistrali", "Kristine", "Vesse", "järveotsa");
        // ("Ülemiste", "Viimsi", "Rocca al Mare", "Magistrali", "Kristine", "Vesse", "järveotsa");
    }


    // const [poed, uuendaPoed] = useState(poedFailist);
    // const sorteeriAZ = () => {
    //     poed.sort(); // default sorteermine: a-z 
    //     uuendaPoed(poed.slice()); //kustutab mälukoha
    // }
        const sorteeriZA = () => {
            poed.sort((a,b) => b.localeCompare(a) ); // default sorteermine: a-z 
            uuendaPoed(poed.slice()); //kustutab mälukoha
    }


    const sorteeriTahedKasv = () => {
        poed.sort((a,b) =>a.length - b.length );
        uuendaPoed(poed.slice());

    }

    const sorteeriTahedKah = () => {
        poed.sort((a,b) => b.length - a.length);
        uuendaPoed(poed.slice());
    }

    const sorteeriKolmasTaht = () => {
        poed.sort((a,b) => a[2].localeCompare(b[2]));
        uuendaPoed(poed.slice());
    }

    const filtreeriELopus = () => {
       const tulem = poed.filter(element => element.endsWith("e"));
        uuendaPoed(tulem);
    
    }

    const filtreerKellel9Tahte = () => {
        const tulem = poed.filter(element => element.length === 9);
         uuendaPoed(tulem);
     
     }

     const filtreeriSisaldabTaheLyhenditIs = () => {
        const tulem = poed.filter(element => element.includes ("is"));
         uuendaPoed(tulem);
     
     }

     const filtreerKellelVah7Taht = () => {
        const tulem = poed.filter(element => element.length > 7);
         uuendaPoed(tulem);
     
     }

     
     
     const filtreeriKolmasTahti = () => {
        const tulem = poed.filter(element => element[2] === "i");
         uuendaPoed(tulem);
     
     }

     
   const muudaKoikSuureks = () => {
const vastus = poed.map(YksPood => YksPood.toUpperCase());
uuendaPoed(vastus);

   }

   const muudaKoikVaikeseks = () => {
    
    const vastus = poed.map(YksPood => YksPood.toLowerCase());
uuendaPoed(vastus);
   }

   const muudaKoikITahedOtaheks = () => {

    const vastus = poed.map(YksPood => YksPood.replaceAll("i", "0"));
uuendaPoed(vastus);
}

   const muudaKoikideleKriipsudEtte = () => {
    const vastus = poed.map(YksPood => "--" + YksPood);
uuendaPoed(vastus);
   }

//    const muudaKoikidelKolmasTahtMTaheks = () => {

//         const vastus = poed.map(YksPood => YksPood[2] = "m");
//     uuendaPoed(vastus);
//    }

   const viimaneOsaPikeneb = () => {

    const vastus = poed.map(YksPood => YksPood + YksPood.length);
uuendaPoed(vastus);
}

    

  return (
    <div>

        <br />
        <br />


<button onClick={tagasiOrginaali}>Tagasi orginaali</button>
<br />
<br />

<div>Poode on kokku: {poed.length} tk</div>

<br />
<br />

        <button onClick={sorteeriAZ}>Sorteeri A - Z </button>
        <button onClick={sorteeriZA}>Sorteeri Z - A </button>

        <button onClick={sorteeriTahedKasv}>Sorteeri tähed kasvavalt</button>
        <button onClick={sorteeriTahedKah}>Sorteeri tähed kahanevalt</button>

        <button onClick={sorteeriKolmasTaht}>Sorteeri kolmanda tähe järgi</button>


<button onClick={filtreeriELopus}>Filtreeri kellel e lõpus</button>
<button onClick={filtreerKellel9Tahte}>Filtreeri kellel 9 tahte</button>

<br />
<button onClick={filtreerKellelVah7Taht}>Filtreeri kellel vähemalt 7 tähte</button>
<button onClick={filtreeriSisaldabTaheLyhenditIs}>Filtreeri kellel is lühend</button>
<button onClick={filtreeriKolmasTahti}>Filtreeri kolmas täht i</button>

<br />

<button onClick={muudaKoikSuureks}>Muuda kõik suurteks tähtedeks</button>
<button onClick={muudaKoikVaikeseks}>Muuda kõik väikesteks tähtedeks</button>
<button onClick={muudaKoikITahedOtaheks}>Filtreeri koik i täht o täheks</button>

<button onClick={muudaKoikideleKriipsudEtte}>Muuda kõikidel "--" ette</button>
{/* <button onClick={muudaKoikidelKolmasTahtMTaheks}>Muuda kõikidel kolmas täht M täheks</button> */}
<button onClick={viimaneOsaPikeneb}>Muuda kõigile pikkuse number lõppu</button>

    <br />
    <br />

        {poed.map( uksPood => <div>{uksPood}</div>  )}

    <br />
        <div>---tavalisest kirjutatud nimekiri-----</div>

        <br />

        <div>Ülemiste</div>
        <div>Viimsi</div>
        <div>Rocca al Mare</div>
        <div>Magistrali</div>
        <div>Vesse</div>
        <div>Kristine</div>
        <div>Järveotsa</div>
    </div>
  )
}

export default Poed