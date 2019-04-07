import { Directive,ElementRef,Input,HostListener } from '@angular/core';
@Directive({
  selector: '[appButtons]'
})
export class ButtonsDirective {

  constructor(private elem:ElementRef) { }
}
