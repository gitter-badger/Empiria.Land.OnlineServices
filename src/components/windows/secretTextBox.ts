import {Component, EventEmitter} from 'angular2/core';

@Component({
  selector: 'secret-text-box',
  templateUrl: './components/windows/secret-text-box.html',
  inputs: ['secretTextBoxlabel'],
  outputs: ['secretTextBoxChange']
})
export class SecretTextBox {

  public secretBoxType = 'password';
  public showSecretLabel = 'Mostrar';
  public secretTextBoxlabel: string = "";
  public secretTextBoxChange = new EventEmitter();

   public showSecretText(): void {
    if (this.secretBoxType === 'password') {
      this.secretBoxType = 'text';
      this.showSecretLabel = 'Ocultar';
    } else {
      this.secretBoxType = 'password';
      this.showSecretLabel = 'Mostrar';
    }
  }

  onChange(value: string) {
    this.secretTextBoxChange.emit(value);
  }

}
