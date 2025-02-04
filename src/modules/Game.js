import { Answer } from "./Answer";

export class  Game {
    constructor(numTentatives) {
      this.tentatives = [];
      for (let i = 0; i < numTentatives; i++) {
        const answer = new Answer();
        this.tentatives.push(answer);
      }
      this.activeTentativeIndex = 0;
      this.formattedAnswer = '';
      this.messageElement = document.querySelector('.message');
      this.tentatives[this.activeTentativeIndex].enableAttempt();
    }
  
    switchTentative() {
      this.tentatives[this.activeTentativeIndex].disableAttempt();
      this.activeTentativeIndex++;
      if (this.activeTentativeIndex < this.tentatives.length) {
        this.tentatives[this.activeTentativeIndex].enableAttempt();
      }
    }
  
    show(message) {
      this.messageElement.innerText = message;
    }
  }