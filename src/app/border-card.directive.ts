import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appBorderCard]'
})
export class BorderCardDirective {

  constructor(private el: ElementRef) {
    this.setHeight(180);
    this.setBorder("#f5f5f5")
   }

   @Input('animalBorderCard') borderColor: string;

   @HostListener('mouseenter') onMouseEnter() {
    this.setBorder('#009688');
   }

   @HostListener('mouseleave') onMouseLeave() {
    this.setBorder('#f5f5f5');
   }

   private setHeight(height: number) {
      this.el.nativeElement.style.height = `${height}px`;
    }

   private setBorder(color: string) {
      this.el.nativeElement.style.border = `solid 3x ${color}`;
    }
}
