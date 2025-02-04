export class Answer {
  constructor() {
    this.form = document.createElement("form");
    this.form.className = "row";
    this.form.id = "row-0";
    for (let i = 0; i < 5; i++) {
      const letterInput = document.createElement("input");
      letterInput.type = "text";
      letterInput.name = `letter-${i}`;
      letterInput.id = `row-0--${i}`;
      letterInput.maxLength = 1;
      this.form.appendChild(letterInput);
    }
    const submitInput = document.createElement("input");
    submitInput.type = "submit";
    submitInput.hidden = true;
    this.form.appendChild(submitInput);
    this.container = document.querySelector(".board");
    this.container.appendChild(this.form);
    this.form.inert = true;

    return this.container;
  }

  enableAttempt() {
    this.form.removeAttribute("inert");
  }

  disableAttempt() {
    this.form.setAttribute("inert", "");
  }

  isAlphaNumericKey(key) {
    return /^([\x30-\x39]|[\x61-\x7a])$/i.test(key);
  }

  handleKeyPress(event) {
    const { key } = event;
    if (this.isAlphaNumericKey(key)) {
      // Passer le focus à l'input suivant
      const currentInput = this.form.querySelector('input[type="text"]:focus');
      const nextInput = this.form.querySelector(
        `input[type="text"]:nth-child(${
          currentInput.parentNode.children.indexOf(currentInput) + 2
        })`
      );
      if (nextInput) {
        nextInput.focus();
      }
    } else if (key === "ArrowRight") {
      // Passer le focus à l'input suivant
      const currentInput = this.form.querySelector('input[type="text"]:focus');
      const nextInput = this.form.querySelector(
        `input[type="text"]:nth-child(${
          currentInput.parentNode.children.indexOf(currentInput) + 2
        })`
      );
      if (nextInput) {
        nextInput.focus();
      }
    } else if (key === "ArrowLeft") {
      // Passer le focus à l'input précédent
      const currentInput = this.form.querySelector('input[type="text"]:focus');
      const previousInput = this.form.querySelector(
        `input[type="text"]:nth-child(${
          currentInput.parentNode.children.indexOf(currentInput) - 1
        })`
      );
      if (previousInput) {
        previousInput.focus();
      }
    }
  }

  addEventListeners() {
    for (let i = 0; i < 5; i++) {
      const letterInput = this.form.querySelector(
        `input[type="text"][name="letter-${i}"]`
      );
      letterInput.addEventListener("keyup", (event) => {
        this.handleKeyPress(event);
      });
    }
  }

  init() {
    this.addEventListeners();
  }
}
