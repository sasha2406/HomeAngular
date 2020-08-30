import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appDirect]'
})
export class DirectDirective {
  private colors = [
    'red',
    'blue',
    'yellow',
    'black',
    'green',
    'grey'
  ]
  private count = 0;
  private firstStart = true;
  @HostBinding('style.background') bgcolor: string;

  @HostListener('click') changeBgcolor() {
    if (this.firstStart) {
      this.timeout();
      this.firstStart = false;
    } else {
      console.log('started');
    }
  }

  private timeout = () => setTimeout(() => {
    this.change();
    this.timeout();
  }, 1000);

  constructor() {
  }

  change() {
    this.bgcolor = this.colors[this.count];
    this.count === this.colors.length -1 ? this.count = 0 : this.count++;
  }
}
