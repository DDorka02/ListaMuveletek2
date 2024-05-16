import { postAdat } from "./asszinkron.js";
import { init } from "./main.js";

export function sorBeszur(lista) {
  const sumbitGomb = $("#submit");
  sumbitGomb.on("click", function (event) {
    //leszedjük az apa értelmezett alapértelmezett eseménykezelőt
    event.preventDefault();
    console.log($("input[name='nem']:checked"));
    const adat = {
      nev: $("#nev").val(),
      kor: $("#kor").val(),
      nem: $("input[name='nem']:checked").val() === "ferfi" ? true : false,
    };
    console.log(adat)
    console.log($(".valid-feedback").eq(0).css("display"));
    if (
      $(".valid-feedback").eq(0).css("display") === "block" &&
      $(".valid-feedback").eq(1).css("display") === "block"
    ) {
  /*  lista.push(adat);
    console.log(lista);
    init(lista); */

    /* } else {
      console.log("Hibás adatok");*/
    } 
    postAdat("http://localhost:3000/emberekLISTA",adat)
 
  });
}
