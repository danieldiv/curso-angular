import { Directive, ElementRef, Renderer2, HostListener } from '@angular/core';

@Directive({
  selector: '[appCampoColorido]'
})
export class CampoColoridoDirective {

  constructor(
    private elementRef: ElementRef,
    private renderer: Renderer2
  ) { }

  // focus - quando ganha o foco
  // blur - quando perde o foco
  // click
  // mouseleave - quando o cursor do mouse sai da posicao
  @HostListener('focus') aoGanharFoco() {
    this.renderer.setStyle(this.elementRef.nativeElement,
    'background-color', 'yellow');
  }

  @HostListener('blur') aoPerderFoco() {
    this.renderer.setStyle(this.elementRef.nativeElement,
      'background-color', 'transparent');
  }

}
