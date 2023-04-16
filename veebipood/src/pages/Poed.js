import React, { useState } from 'react'
import poedFailist from "../data/poed.json"

function Poed() {

    const [poed, uuendaPoed] = useState(poedFailist);
  
    const tagasiOrginaali = () => {
      uuendaPoed(poedFailist) ;
    }

    // }
        const sorteeriAZ = () => {
            poed.sort((a,b) => b.nimi.localeCompare(a.nimi) ); 
            uuendaPoed(poed.slice());// default sorteermine: a-z 
        // ("Ülemiste", "Viimsi", "Rocca al Mare", "Magistrali", "Kristine", "Vesse", "järveotsa");
        // ("Ülemiste", "Viimsi", "Rocca al Mare", "Magistrali", "Kristine", "Vesse", "järveotsa");
    }


    // const [poed, uuendaPoed] = useState(poedFailist);
    // const sorteeriAZ = () => {
    //     poed.sort(); // default sorteermine: a-z 
    //     uuendaPoed(poed.slice()); //kustutab mälukoha
    // }
        const sorteeriZA = () => {
            poed.sort((a,b) => b.nimi.localeCompare(a.nimi) ); // default sorteermine: a-z 
            uuendaPoed(poed.slice()); //kustutab mälukoha
    }


    const sorteeriTahedKasv = () => {
        poed.sort((a,b) =>a.nimi.length - b.nimi.length );
        uuendaPoed(poed.slice());

    }

    const sorteeriTahedKah = () => {
        poed.sort((a,b) => b.nimi.length - a.nimi.length);
        uuendaPoed(poed.slice());
    }

    const sorteeriKolmasTaht = () => {
        poed.sort((a,b) => a.nimi[2].localeCompare(b.nimi[2]));
        uuendaPoed(poed.slice());
    }

    const filtreeriELopus = () => {
       const tulem = poed.filter(element => element.nimi.endsWith("e"));
        uuendaPoed(tulem);
    
    }

    const filtreerKellel9Tahte = () => {
        const tulem = poed.filter(element => element.nimi.length === 9);
         uuendaPoed(tulem);
     
     }

     const filtreeriSisaldabTaheLyhenditIs = () => {
        const tulem = poed.filter(element => element.nimi.includes ("is"));
         uuendaPoed(tulem);
     
     }

     const filtreerKellelVah7Taht = () => {
        const tulem = poed.filter(element => element.nimi.length > 7);
         uuendaPoed(tulem);
     
     }

     
     
     const filtreeriKolmasTahti = () => {
        const tulem = poed.filter(element => element.nimi[2] === "i");
         uuendaPoed(tulem);
     
     }

     
   const muudaKoikSuureks = () => {
const vastus = poed.map(YksPood =>{ return {"nimi":YksPood.nimi.toUpperCase(), "tel":YksPood.tel}});
uuendaPoed(vastus);

   }

   const muudaKoikVaikeseks = () => {
    
    const vastus = poed.map(YksPood => { return {"nimi":YksPood.nimi.toLowerCase(), "tel":YksPood.tel}});
uuendaPoed(vastus);
   }

   const muudaKoikITahedOtaheks = () => {

    const vastus = poed.map(YksPood =>{ return {"nimi":YksPood.nimi.replaceAll("i", "0"), "tel":YksPood.tel}}) ;
uuendaPoed(vastus);
}

   const muudaKoikideleKriipsudEtte = () => {
    const vastus = poed.map(YksPood => {return {"nimi": "--" + YksPood.nimi, "tel": YksPood.tel}});
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

   const arvutaTahedKokku = () => {
    let summa = 0;
    poed.forEach(element => summa = summa + element.nimi.length);
    return summa;
   } 

  return (
    <div>

        <br />
        <br />


<button onClick={tagasiOrginaali}>Tagasi orginaali</button>
<br />
<br />

<div>Poode on kokku: {poed.length} tk</div>
<div>Kõikide poodide tähemärkide arv on: {arvutaTahedKokku()}</div>

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

      {poed.map((YksPood, i) => <div key={i}> {YksPood.nimi} - {YksPood.tel}</div> )}

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