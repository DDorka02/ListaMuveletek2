//import { emberekLISTA } from "./adat.js";
import { megjelenit, tablazatLetrehoz } from "./fuggvenyek.js";
import { rendez, szures, torol } from "./adatKezelo.js";
import { sorBeszur } from "./urlapKezelo.js";
import { deleteAdat, getAdat } from "./asszinkron.js";

let rIrany = 1;
getAdat("http://localhost:3000/emberekLISTA", init);
//init(emberekLISTA);
szuresNevSzerint();
torolesemeny();

export function init(lista) {
  console.log(lista);
  var txt = tablazatLetrehoz(lista);
  megjelenit(txt);
  rendezesEsemeny();
  torolesemeny();
  sorBeszur(lista);
}

function szuresNevSzerint() {
  const szuroElem = $("#sznev");
  szuroElem.on("keyup", function () {
    let szoveg = szuroElem.val();
    init(szures(emberekLISTA, szoveg));
  });
}

function rendezesEsemeny() {
  /* ha rákattintunk a táblázat fejlécében lévő név mezőre */
  const nevMezoElem = $(".adatok table th").eq(0);
  nevMezoElem.on("click", function () {
    const lista = rendez(emberekLISTA, "nev", rIrany);
    console.log(lista);
    init(lista);
    rIrany *= -1;
  });
}

function torolesemeny() {
  const torolELEM = $(".torol");
  torolELEM.on("click", function (event) {
    let index = event.target.id;
    // ez váltotta ki az eseményt
    //const LISTA = torol(emberekLISTA, index);
    //init(LISTA);
    deleteAdat("http://localhost:3000/emberekLISTA",index)
  });
}

/* szorgalmi: tudjunk rendezni a tobbi mezore is */
