import {Directive, ElementRef, Input} from 'angular2/core';

@Directive ({
  selector: '[validate-text]',
  host: {
    '(mouseleave)': 'onMouseLeave()',
    '(click)' : 'onClick()'
  }
})

export class ValidateTextDir {
  @Input('validate-text') item: {pattern: string} = {pattern: ''};
  private htmlElement: HTMLElement;
  private isCorrect: boolean = true;

  constructor(private element: ElementRef) {
         this.htmlElement = element.nativeElement;
  }

  public onMouseLeave(): void {
    if (!this.matchPattern(this.element.nativeElement.value)) {
      this.showErrorStyles();
      this.isCorrect = false;
    } else {
      this.clearErrorStyles();
      this.isCorrect = true;
    }
  }

  public onClick(): void {
    if (!this.isCorrect) {
      alert("El campo de texto no coinicide con el patron");
    } else {
      // no-op
    }
  }

  public matchPattern(value: string): boolean {
    let regExp = new RegExp(this.item.pattern);
    return regExp.test(value);
  }

  private clearErrorStyles(): void {
    this.htmlElement.className = "";
    this.htmlElement.style.borderRightWidth = "";
    this.htmlElement.style.borderRightColor = "";
  }

  private showErrorStyles(): void {
    this.htmlElement.style.borderRightWidth = "6px";
    this.htmlElement.style.borderRightColor = "red";
    this.htmlElement.className = "errorTextBoxBar";
  }

}
