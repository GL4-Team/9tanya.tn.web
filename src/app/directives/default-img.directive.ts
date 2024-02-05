import { Directive, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appDefaultImg]'
})
export class DefaultImgDirective implements OnInit {
  @Input('appDefaultImg') src: string | null = null;
  defaultImageLocation: string = 'assets/images/placeholder.png';

  constructor(private elementRef: ElementRef, private renderer: Renderer2) { }

  ngOnInit(): void {
    this.initImage();
  }

  private initImage(): void {
    if (!this.src) {
      this.setPlaceholderImage();
      return;
    }

    const img = new Image();
    img.onload = () => {
      this.setImage(this.src!);
    };
    img.onerror = () => {
      this.setPlaceholderImage();
    };
    img.src = this.src!;
  }

  private setPlaceholderImage(): void {
    this.setImage(this.defaultImageLocation);
  }

  private setImage(src: string): void {
    this.renderer.setAttribute(this.elementRef.nativeElement, 'src', src);
  }
}
