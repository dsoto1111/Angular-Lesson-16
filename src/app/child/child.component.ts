import { Component, Input } from '@angular/core';
import { Character } from '../character';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
})
export class ChildComponent {
  @Input() get person() {
    return this._person;
  }
  set person(obj: Character) {
    obj.name = obj.name.trim() || 'There is no name present';
    if (obj.name === 'There is no name present') {
      this.setClass = false;
      this.changeStyle();
      this.changeColor();
    } else {
      this.setClass = true;
      this.changeStyle();
      this.changeColor();
    }
    this._person = obj;
    console.log(obj);
  }
  private _person!: Character;

  styleChange!: { backgroundColor: string; fontWeight: string };

  position: string = 'relative';
  left: string = '2';

  setClass: boolean = true;

  colorChange: Record<string, string> = {};

  changeColor() {
    this.colorChange = {
      'background-color': this.setClass ? 'blue' : 'maroon',
    };
  }

  changeStyle() {
    this.styleChange = {
      backgroundColor: this.setClass ? 'orange' : 'red',
      fontWeight: this.setClass ? 'normal' : 'bold',
    };
  }

  multipleClassesOne = { setAlignment: true, changeColor: true };
  multipleClassesTwo = ['setAlignment', 'changeColor'];
  multipleClassesThree = 'setAlignment changeColor';

  constructor() {}
}
