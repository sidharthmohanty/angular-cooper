import { Component, ViewEncapsulation } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';

@Component({
  selector: 'app-main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class MainNavComponent {
  rightIcon = 'd-none';
  block = 'd-block';
  hide = 'd-none';
  toggleDisplay =
    'col-md-2 col-sm-2 col-lg-2 d-block bg-light sidebar collapse navbar-collapse';
  toggleHide =
    'col-md-2 bg-light col-md-2 col-sm-2 col-lg-2 d-none sidebar collapse navbar-collapse';
  toggleClass = this.toggleDisplay;
  isHandset$: Observable<boolean> = this.breakpointObserver
    .observe(Breakpoints.Handset)
    .pipe(
      map((result) => result.matches),
      shareReplay()
    );

  constructor(private breakpointObserver: BreakpointObserver) {}

  toggle() {
    if (this.toggleClass === this.toggleDisplay) {
      this.toggleClass = this.toggleHide;
      this.rightIcon = this.block;
    } else {
      this.toggleClass = this.toggleDisplay;
      this.rightIcon = this.hide;
    }
  }
}
