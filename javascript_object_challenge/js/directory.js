// this is the script file used to store and manipulate the program

let html = "";

for ( let i = 0 ; i < pets.length ; i++ ) {
  let pet = pets[i];
  html += `
    <h2>${pet.name}</h2>
    <h3>${pet.type} | ${pet[i].breed}</h3>
    <p>Age: ${pet.age}</p>
    <img src='${pet.photo}' alt='${pet.breed}'>
  `;
}

document.querySelector("main").insertAdjacentHTML("beforeend", html);