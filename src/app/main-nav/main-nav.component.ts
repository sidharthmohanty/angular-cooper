import {
  Component,
  ViewEncapsulation,
  OnInit,
  HostListener,
} from '@angular/core';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';

@Component({
  selector: 'app-main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class MainNavComponent implements OnInit {
  mainWrapper;
  rightIcon;
  sideIcon;
  toggleSide;
  wrapper = 'wrapper';
  collapseWrapper = 'wrapper lapse';
  toggleIn = 'toggle-in';
  toggleOut = 'toggle-out';

  public screenWidth: any;

  constructor() {}
  ngOnInit() {
    this.screenWidth = window.innerWidth;
    if (this.screenWidth < 650) {
      this.mainWrapper = this.collapseWrapper;
      this.toggleSide = this.toggleOut;
    } else {
      this.mainWrapper = this.wrapper;
      this.toggleSide = this.toggleIn;
    }
  }
  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.screenWidth = window.innerWidth;
    if (this.screenWidth < 650) {
      this.mainWrapper = this.collapseWrapper;
      this.toggleSide = this.toggleOut;
    } else {
      this.mainWrapper = this.wrapper;
      this.toggleSide = this.toggleIn;
    }
  }
  toggle() {
    if (this.mainWrapper === this.wrapper) {
      this.mainWrapper = this.collapseWrapper;
      this.toggleSide = this.toggleOut;
    } else {
      this.mainWrapper = this.wrapper;
      this.toggleSide = this.toggleIn;
    }
    // if (this.sideIcon === this.showSideIcon) {

    //   this.sideIcon = this.hideSideIcon;
    //   this.toggleSide = this.toggleOut;
    // } else {
    //   this.sideIcon = this.showSideIcon;
    //   this.toggleSide = this.toggleIn;
    // }
  }
}
