import {Component, EventEmitter} from 'angular2/core';

@Component({
  selector: 'secret-text-box',
  templateUrl: './components/windows/secret-text-box.html',
  inputs: ['label'],
  outputs: ['changed']
})
export class SecretTextBox {

  public boxType = 'password';
  public showHideLabel = 'Mostrar';
  public label: string = "";
  public changed = new EventEmitter();

   public showSecretText(): void {
    if (this.boxType === 'password') {
      this.boxType = 'text';
      this.showHideLabel = 'Ocultar';
    } else {
      this.boxType = 'password';
      this.showHideLabel = 'Mostrar';
    }
  }

  public onChange(value: string) {
    this.changed.emit(value);
  }

}
