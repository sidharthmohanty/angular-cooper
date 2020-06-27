import {
  Component,
  ViewEncapsulation,
  OnInit,
  HostListener,
} from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';

@Component({
  selector: 'app-main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class MainNavComponent implements OnInit {
  rightIcon;
  sideIcon;
  toggleSide;
  toggleIn = 'toggle-in';
  toggleOut = 'toggle-out';
  hideSideIcon = 'd-none';
  showSideIcon = 'ml-2 pt-light side-label';
  block = 'd-block';
  hide = 'd-none';

  isHandset$: Observable<boolean> = this.breakpointObserver
    .observe(Breakpoints.Handset)
    .pipe(
      map((result) => result.matches),
      shareReplay()
    );
  public screenWidth: any;

  constructor(private breakpointObserver: BreakpointObserver) {}
  ngOnInit() {
    this.screenWidth = window.innerWidth;
    if (this.screenWidth < 550) {
      this.sideIcon = this.hideSideIcon;
      this.toggleSide = this.toggleOut;
    } else {
      this.sideIcon = this.showSideIcon;
      this.toggleSide = this.toggleIn;
    }
  }
  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.screenWidth = window.innerWidth;
    if (this.screenWidth < 550) {
      this.sideIcon = this.hideSideIcon;
      this.toggleSide = this.toggleOut;
    } else {
      this.sideIcon = this.showSideIcon;
      this.toggleSide = this.toggleIn;
    }
  }
  toggle() {
    if (this.sideIcon === this.showSideIcon) {
      this.sideIcon = this.hideSideIcon;
      this.toggleSide = this.toggleOut;
    } else {
      this.sideIcon = this.showSideIcon;
      this.toggleSide = this.toggleIn;
    }
  }
}
