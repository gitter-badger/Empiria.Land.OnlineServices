import {Component, EventEmitter} from 'angular2/core';

@Component({
  selector: "modal-window",
  inputs: ["visible"],
  outputs: ['onClose'],
  templateUrl: "./components/windows/modal-window.html",
  styleUrls: ["./components/windows/modal-window.css"],
  directives: []
})
export class ModalWindow {

   public onClose: EventEmitter<any> = new EventEmitter();

   private visible: boolean = false;

   public close() {
     this.visible = false;
     this.onClose.next(null);
   }

   public show() {
      this.visible = true;
   }

}  // class ModalWindow
