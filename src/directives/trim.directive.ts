import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appTrim]',
})
export class TrimDirective {
  constructor(private el: ElementRef) {}

  @HostListener('blur')
  onBlur() {
    this.el.nativeElement.value = this.el.nativeElement.value.trim();
  }
}
