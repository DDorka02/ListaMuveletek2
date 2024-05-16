export function getAdat(vegpont, callback) {
  fetch(vegpont, { method: "GET" })
    .then((responsive) => responsive.json())
    .then((data) => {
      callback(data);
    })
    .catch((error) => console.log(error));
}

export function postAdat(vegpont,adat) {
  fetch(vegpont, { method: "POST", body: JSON.stringify(adat)})
    .then((responsive) => responsive.json())
    .then((data) => {
      console.log(data);
    })
    .catch((error) => console.log(error));
}

export function deleteAdat(vegpont,id) {
    fetch(vegpont+"/"+id, { method: "DELETE"})
      .then((responsive) => responsive.json())
      .then((data) => {
        console.log(data);
      })
      .catch((error) => console.log(error));
  }

export function putAdat(vegpont,id,adat) {
    fetch(vegpont+"/"+id, { method: "PUT",body: JSON.stringify(adat)})
      .then((responsive) => responsive.json())
      .then((data) => {
        console.log(data);
      })
      .catch((error) => console.log(error));
  }