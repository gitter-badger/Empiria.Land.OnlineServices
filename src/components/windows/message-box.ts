import {Component, EventEmitter} from 'angular2/core';

@Component({
  selector: "message-box",
  outputs: ['onClose'],
  templateUrl: "./components/windows/message-box.html",
  styleUrls : ["./components/windows/message-box.css"],
  directives: []
})
export class MessageBox {

  public onClose: EventEmitter<any> = new EventEmitter();

  private visible: boolean = false;

  public showException(e: Error): void {
    this.visible = true;
    window.alert(e.message);
  }

  public showMessage(message: string) {
    this.visible = false;
    window.alert(message);
  }

  public close() {
    this.visible = false;
    this.onClose.next(null);    // ToDo: How to return void?
  }

}  // class MessageBox
