import { Directive, HostBinding, Input, Output, HostListener } from '@angular/core';
import { hostViewClassName } from '@angular/compiler';

@Directive({
  selector: '[appFavorite]'
})
export class FavoriteDirective {

  constructor() { }
  @HostBinding('class.is-favorite') isFavorite = true;
  @HostBinding('class.is-favorite-hovering') hovering = false;
  @HostListener('mouseenter') onMouseEnter() {
    this.hovering = true;
  }
  @HostListener('mouseleave') onMouseLeave() {
    this.hovering = false;
  }
  @Input() set appFavorite(value) {
    this.isFavorite = value;
  }
}
