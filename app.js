"use strict";

// ============ LOAD & INIT APP ============ //
window.addEventListener("load", initApp);

async function initApp() {
  const harry = await getCharacter(
    " https://raw.githubusercontent.com/cederdorff/dat-js/main/data/harry.json"
  );
  showCharacter(harry);

  const ron = await getCharacter(
    "https://raw.githubusercontent.com/cederdorff/dat-js/main/data/ron.json "
  );
  showCharacter(ron);
}

async function getCharacter(url) {
  const response = await fetch(url);
  const data = await response.json();
  return data;
}

function showCharacter(character) {
  // const html = `

  console.log(character);

  document.querySelector("#characters").insertAdjacentHTML(
    "beforeend",
    /*html*/ ` <article class="grid-item">
                <img src="${character.image}">
                <h2>${character.name}</h2>
                <p>${character.house}</p>
                <p>Date of Birth: ${character.dateOfBirth}</p>
                <p>Played by ${character.actor}</p>
            </article>
        `
  );

  document
    .querySelector("#characters article:last-child")
    .addEventListener("click", characterClicked);

  function characterClicked() {
    // sets the abstract data for the id
    document.querySelector("#dialog-title").textContent = character.name;
    document.querySelector("#dialog-image").src = character.image;
    document.querySelector(
      "#dialog-house"
    ).textContent = `House: ${character.house}`;
    document.querySelector("#dialog-birthday").textContent =
      character.dateOfBirth;
    document.querySelector("#dialog-age").textContent = `Age ${showAge(
      character
    )}`;
    document.querySelector("#dialog-species").textContent = character.species;
    document.querySelector(
      "#dialog-gender"
    ).textContent = `${capatilizeFirstLetterGender(character)}`;

    document.querySelector("#dialog-ancestry").textContent = character.ancestry;
    document.querySelector("#dialog-eyeColour").textContent =
      character.eyeColour;
    document.querySelector("#dialog-hairColour").textContent =
      character.hairColour;
    document.querySelector("#dialog-actor").textContent = character.actor;
    document.querySelector("#dialog-alive").textContent = `${isAlive(
      character
    )}`;
    document.querySelector(
      "#dialog-hogwartsStudent"
    ).textContent = `${isStudent(character)}`;
    document.querySelector("#dialog-hogwartsStaff").textContent = `${isStaff(
      character
    )}`;
    document.querySelector(
      "#dialog-patronus"
    ).textContent = `Patronus: ${character.patronus}`;
    document.querySelector(
      "#dialog-wand"
    ).textContent = `Wand: ${character.wand}`;

    document.querySelector("#dialog-window").showModal();
    // document.querySelector("#dialog-window").classList.add("dialog-grid");
    //hvis ovenstående laves fungerer det indtil du lukker dialogvindue så kommer vinduet permanent på skærmen
  }
}
// helper functions
function showAge(character) {
  const dateOfBirth = new Date(character.dateOfBirth);
  //calculate month difference from current date in time
  const monthDiff = Date.now() - dateOfBirth.getTime();

  //convert the calculated difference in date format
  const ageDateFormat = new Date(monthDiff);

  //extract year from date
  const year = ageDateFormat.getUTCFullYear();

  //now calculate the age of the user
  const age = Math.abs(year - 1970);

  return age;
}

function isStaff(character) {
  if (character.hogwartsStaff === true) {
    return `${character.name} is member of staff at Hogwarts`;
  } else {
    return `${character.name}  is not a member of staff at Hogwarts`;
  }
}

function isStudent(character) {
  if (character.hogwartsStudent === true) {
    return `${character.name} is a student at Hogwarts`;
  } else {
    return `${character.name}  is not a student at Hogwarts`;
  }
}

function isAlive(character) {
  if (character.alive === true) {
    return `${character.name}  is alive`;
  } else {
    return `${character.name}  is dead`;
  }
}

function capatilizeFirstLetterGender(character) {
  const firstLetter = character.gender.charAt(0).toUpperCase();
  const restOfGender = character.gender.substring(1);
  return `${firstLetter}${restOfGender}`;
}

// function showDateOfBirth(character){
//   character.dateOfBirth
// }

// function showCharacter(image, name, house, dateOfBirth, actor) {
//     //define elements
//     const articleElement = document.createElement("article");
//     const imageElement = document.createElement("img");
//     const nameElement = document.createElement("h2");
//     const houseElement = document.createElement("p");
//     const dateOfBirthElement = document.createElement("p");
//     const actorElement = document.createElement("p");

//     // set content
//     imageElement.src = image;
//     nameElement.textContent = name;
//     houseElement.textContent = house;
//     dateOfBirthElement.textContent = `Date of Birth: ${dateOfBirth}`;
//     actorElement.textContent = `Played by ${actor}`;

//     // append child elements to articleElement
//     articleElement.appendChild(imageElement);
//     articleElement.appendChild(nameElement);
//     articleElement.appendChild(houseElement);
//     articleElement.appendChild(dateOfBirthElement);
//     articleElement.appendChild(actorElement);

//     // append article to grid
//     document.querySelector("#characters").appendChild(articleElement);
// }
