"Use Strict";

import { Game } from "../modules/game";

const game = new Game(5);

// const main = document.querySelector(".board");
// for (let i = 0; i < 6; i++) {
//   const form = document.createElement("form");
//   form.className = "row";
//   form.id = `row-${i}`;
//   main.appendChild(form);

//   for (let j = 0; j < 6; j++) {
//     const letterInput = document.createElement("input");
//     letterInput.type = "text";
//     letterInput.name = `letter-${j}`;
//     letterInput.id = `row-${i}--${j}`;
//     letterInput.maxLength = 1;
//     form.appendChild(letterInput);
//   }
//   const submitInput = document.createElement("input");
//   submitInput.type = "submit";
//   submitInput.hidden = true;
//   form.appendChild(submitInput);
//   const container = document.querySelector(".board");
//   container.appendChild(form);

//   form.setAttribute("inert");
// }
