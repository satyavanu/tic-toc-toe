import { Component } from '@angular/core';

@Component({
  selector: 'app-board-game',
  templateUrl: './board-game.component.html',
  styleUrls: ['./board-game.component.scss']
})

export class BoardGameComponent {

  whoisWinner = null;
  private turn = 'X';
  private endOfGame = false;
  private playWithMachine = false;
  private selectedBox: Array<number> = [];
  private playSequence: Array<string> = [];

  clickHandler(event: any, id: number): void {
    const ele = event.srcElement;
    if (!this.endOfGame) {
      this.selectedBox.push(id);
      this.playSequence[id] = this.turn;
      this.checkWinner();
      this.changeTurn(ele, id);
    }
  }

  resetGame(gameHTMLElemenet) {
    const elems = gameHTMLElemenet.querySelectorAll('div');
    for (const elm of elems) {
      elm.innerText = '';
    }
    this.endOfGame = false;
    this.whoisWinner = null;
    this.playSequence = [];
    this.turn = 'X';
    this.playWithMachine = false;
  }

  detectGame(element) {
    console.log('click', element.srcElement.innerText);
  }

  playWithComputer(): void {
    this.playWithMachine = true;
  }

  checkWinner() {
    const lines = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6] ];
    const cells = this.playSequence;
    for (const line of lines) {
      if (cells[line[0]] === cells[line[1]]
            && cells[line[1]] === cells[line[2]]
            && cells[line[0]] !== undefined) {
        this.endOfGame = true;
        this.whoisWinner = cells[line[0]];
        return;
      }
    }

    let filled = 0;
    cells.forEach((e) => { filled += (e !== undefined ? 1 : 0); });
    if (filled === 9) {
      this.endOfGame = true;
      this.whoisWinner = 'Sorry, No';
    }

  }

  changeTurn(ele: any, id: number): void {
    ele.innerText = this.turn;
    (this.turn === 'X') ? this.turn = 'O' : this.turn = 'X';
  }
}
