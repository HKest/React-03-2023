// import logo from './logo.svg';
import './App.css';
import { Link, Route, Routes } from 'react-router-dom';
import Avaleht from './pages/Avaleht';
import LisaToode from './pages/LisaToode';
import Ostukorv from './pages/Ostukorv';
import Seaded from './pages/Seaded';
import Meist from './pages/Meist';
import { useState } from 'react';
import Poed from './pages/Poed';
import Tooted from './pages/Tooted';
import HaldaTooteid from './pages/HaldaTooteid';
import YksikToode from './pages/YksikToode';
import MuudaToode from './pages/MuudaToode';

function App() {

  const [aktiivneUrl, uuendaAktiivneUrl] = useState(window.location.href.split("localhost:3000")[1]);
const [veebileheVarv, uuendaVeebileheVarv] = useState(localStorage.getItem("theme"));

const muudaLight = () => {
uuendaVeebileheVarv("light");
localStorage.setItem("theme", "light");
}

const muudaDark = () => {
  uuendaVeebileheVarv("dark");
  localStorage.setItem("theme", "dark");
}

const muudaVarviline = () => {
  uuendaVeebileheVarv("varviline");
  localStorage.setItem("theme", "varviline");
}

  return (

    <div className={veebileheVarv}>

<button onClick={muudaLight}>Light mode</button>
<button onClick={muudaDark}>Dark mode</button>
<button onClick={muudaVarviline}>Color mode</button>

      <Link to="/">
  
   <img onClick={() => uuendaAktiivneUrl("/")} className="pilt" src="https://upload.wikimedia.org/wikipedia/en/9/99/Nobe_GT100.jpg" alt="" />
   </Link>

   <Link to="/ostukorv">
   <button onClick={() => uuendaAktiivneUrl("/ostukorv") } className={aktiivneUrl === "/ostukorv" ? " url-aktiivne" : "nupp"}>Ostukorv</button>
   </Link>

   <Link to="/lisa-toode">
<button onClick={() => uuendaAktiivneUrl("/lisa-toode") } className={aktiivneUrl === "/lisa-toode" ? " url-aktiivne" : "nupp"}>Lisa toode</button>
   </Link>

   <Link to='/seaded'>
    <button onClick={() => uuendaAktiivneUrl("/seaded") } className= {aktiivneUrl === "/seaded" ? " url-aktiivne" : "nupp"}>Seaded</button>
   
   </Link>
   <Link to='/meist'>
    <button onClick={() => uuendaAktiivneUrl("/meist") }  className={aktiivneUrl === "/meist" ? " url-aktiivne" : "nupp"}>Meist</button>
   
   </Link>


   <Link to='/poed'>
    <button onClick={() => uuendaAktiivneUrl("/poed") }  className={aktiivneUrl === "/poed" ? " url-aktiivne" : "nupp"}>Poed</button>
   
   </Link>

   <Link to='/tooted'>
    <button onClick={() => uuendaAktiivneUrl("/tooted") }  className={aktiivneUrl === "/tooted" ? " url-aktiivne" : "nupp"}>Tooted</button>
   
   </Link>

   <Link to='/halda'>
    <button onClick={() => uuendaAktiivneUrl("/halda") }  className={aktiivneUrl === "/halda" ? " url-aktiivne" : "halda"}>Halda tooteid</button>
   
   </Link>

   

   {/* <p></p>
      <div>Tekst</div> */}
      {/* <span></span> */}
      {/* <img src="https://upload.wikimedia.org/wikipedia/en/9/99/Nobe_GT100.jpg" alt=""></img>
      <input type="text"></input> */}

 {/* localhost:3000/avaleht       <div>1</div> */}
 <Routes>
        <Route path='' element={ <Avaleht /> } />
        <Route path='ostukorv' element={ <Ostukorv /> } />
        <Route path='lisa-toode' element={ <LisaToode /> } />
        <Route path='seaded' element={ <Seaded /> } />
        <Route path='meist' element={ <Meist /> } />

        <Route path='poed' element={ <Poed /> } />
        <Route path='tooted' element={ <Tooted /> } />
        <Route path='halda' element={ <HaldaTooteid /> } />
        <Route path='toode' element={ <YksikToode /> } />
        <Route path='muuda' element={ <MuudaToode/> } />
      </Routes>
    </div>

  );
}

export default App;
