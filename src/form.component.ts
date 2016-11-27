import { Component } from '@angular/core';

@Component({
  selector: 'input-form',
  templateUrl: 'form.component.html'
})
export class InputForm {
model: any;
  onClick() {
    if (this.model !== '') {
      console.log(this.model);
      this.model = '';
    }
  }
}
