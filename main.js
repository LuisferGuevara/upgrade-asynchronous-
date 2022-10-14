// 1.1 Utiliza esta url de la api Agify 'https://api.agify.io?name=michael' para
// hacer un .fetch() y recibir los datos que devuelve. Imprimelo mediante un
// console.log(). Para ello, es necesario que crees un .html y un .js.
fetch("https://api.agify.io?name=michael")
  .then((data) => data.json())
  .then((data) => console.log(data));

// 2.1 Dado el siguiente javascript y html. Añade la funcionalidad necesaria usando
// fetch() para hacer una consulta a la api cuando se haga click en el botón,
// pasando como parametro de la api, el valor del input.
function search() {
  fetch(`${baseUrl}/?name=${input$$.value}`)
    .then((data) => data.json())
    .then((data) => console.log(data));
}

const baseUrl = "https://api.nationalize.io";
const input$$ = document.querySelector("input");
const button$$ = document.querySelector("button");
button$$.addEventListener("click", () => search());

// 2.3 En base al ejercicio anterior. Crea dinamicamente un elemento  por cada petición
// a la api que diga...'El nombre X tiene un Y porciento de ser de Z' etc etc.
// EJ: El nombre Pepe tiene un 22 porciento de ser de ET y un 6 porciento de ser
// de MZ.

// function search2(){
//     fetch(`${baseUrl}/?name=${input$$.value}`)
//     .then((data) => data.json())
//     .then((person) => createText(person));
// }
// function createText(person){
//     const p$$ = document.createElement('p');
//     let text = `El nombre ${person.name} `;

//     for (const country of person.country) {
//         text +=  `tiene un porciento  ${country.probability * 100} porciento  de ser ${country.country_id} `
//     }

//     p$$.textContent = text;
//     document.body.appendChild(p$$);

// }
// button$$.addEventListener('click', () => search2());

// 2.4 En base al ejercicio anterior, crea un botón con el texto 'X' para cada uno
// de los p que hayas insertado y que si el usuario hace click en este botón
// eliminemos el parrafo asociado.

// Opcion 1
// function search3(){
//     fetch(`${baseUrl}/?name=${input$$.value}`)
//     .then((data) => data.json())
//     .then((person) => createText(person));
// }
// function createText(person){

//     const p$$ = document.createElement('p');
//     let text = `El nombre ${person.name} `;

//     for (const country of person.country) {
//         text +=  ` tiene un ${country.probability * 100} porciento  de ser de ${country.country_id} `
//     }

//     p$$.textContent = text;
//     const button$$ = document.createElement('button');
//     button$$.textContent = 'X';
//     const div$$ = document.createElement('div');
//     div$$.appendChild(p$$);
//     div$$.appendChild(button$$)
//     document.body.appendChild(div$$)

//     function removeDiv(div$$){
//         const findP$$ = document.querySelector('div');
//         findP$$.remove()

//     }

//     button$$.addEventListener('click', () => removeDiv())
// }

//Opcion 2
function search4() {
  fetch(`${baseUrl}/?name=${input$$.value}`)
    .then((data) => data.json())
    .then((person) => createText(person));
}

const eliminar = (elementos) => {
  for (const elemento of elementos) {
    elemento.remove();
  }
};
function createText(person) {
  const p$$ = document.createElement("p");
  const button2$$ = document.createElement("button");
  button2$$.textContent = "X";

  let text = `El nombre ${person.name} `;

  for (const country of person.country) {
    if (person.country.indexOf(country) === 0) {
      text += ` tiene un ${(country.probability * 100).toFixed(1)} porciento de ser de ${
        country.country_id
      } `;
    } else if (person.country.indexOf(country) !== person.country.length - 1) {
      text += `, un ${(country.probability * 100).toFixed(1)} porciento de ser de ${
        country.country_id
      } `;
    } else {
      text += ` y un ${(country.probability * 100).toFixed(1)} porciento de ser de ${
        country.country_id
      }.`;
    }
  }

  button2$$.addEventListener("click", () => eliminar([p$$, button2$$]));
  p$$.textContent = text;
  document.body.appendChild(p$$);
  document.body.appendChild(button2$$);
}
button$$.addEventListener("click", () => search4());