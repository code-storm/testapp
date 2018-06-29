import { Directive, ElementRef, Output, EventEmitter, HostListener } from '@angular/core';

@Directive({
  selector: '[appClickOutside]'
})
export class ClickOutsideDirective {

  constructor(private elemRef: ElementRef) { }

  @Output('clickOutside') clickOutside = new EventEmitter();

  @HostListener('document:click', ['$event.target'])
  onClick(targetElement) {
    const elementRefElement = <HTMLElement>this.elemRef.nativeElement;
    const clickedInside = elementRefElement.contains(targetElement);
    if (!clickedInside) {
      this.clickOutside.emit(targetElement);
    }
  }

}
