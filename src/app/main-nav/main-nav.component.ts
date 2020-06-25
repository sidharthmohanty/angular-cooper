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
  block = 'd-block';
  hide = 'd-none';

  blockStyle = {
    display: 'block',
  };
  hideStyle = {
    display: 'none',
  };

  display;

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
      this.display = this.hideStyle;
      this.rightIcon = this.block;
    } else {
      this.display = this.blockStyle;
      this.rightIcon = this.hide;
    }
  }
  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.screenWidth = window.innerWidth;
    if (this.screenWidth < 550) {
      this.display = this.hideStyle;
      this.rightIcon = this.block;
    } else {
      this.display = this.blockStyle;
      this.rightIcon = this.hide;
    }
  }
  toggle() {
    if (this.display === this.blockStyle) {
      this.display = this.hideStyle;
      this.rightIcon = this.block;
    } else {
      this.display = this.blockStyle;
      this.rightIcon = this.hide;
    }
  }
}
