import { Directive, ElementRef } from "@angular/core";

@Directive({
  selector: "[appHighlight]"
})
export class NumbersDirective {
  constructor(private elem: ElementRef) {
    // this.elem.nativeElement.style.background =
    //   "linear-gradient(to bottom, #474747, #2a2a2a, #1b1b1b)";
    // this.elem.nativeElement.style.boxShadow =
    //   "inset 0 1px 0 #636363, 0 1px 4px -1px #000";
    // this.elem.nativeElement.style.borderRadius = "50%";
    elem.nativeElement.style.color = "red";
  }
}
