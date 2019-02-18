import { Component, OnInit, Input } from '@angular/core';
import { HostListener } from '@angular/core';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-left-menu',
  templateUrl: './left-menu.component.html',
  styleUrls: ['./left-menu.component.css']
})
export class LeftMenuComponent implements OnInit {
  screenWidth;
  screenHeight;
  constructor(private railService: CommonService) {
    this.onResize();
  }
  public menuList = [
    // {path: 'pnr-status', title: 'PNR Status'},
    {path: 'train-route', title: 'Train Route'},
    {path: 'live-train-status', title: 'Live Train Status'},
  ];

  @HostListener('window:resize', ['$event'] ) onResize(event?) {
    this.railService.screenHeight.next(window.innerHeight);
    this.railService.screenWidth.next(window.innerWidth);
  }

  ngOnInit() {
    this.railService.screenWidth.subscribe(width => {this.screenWidth = width; console.log(width); });
    this.railService.screenHeight.subscribe(height => {this.screenHeight = height; console.log(height); });
    console.log(this.screenHeight + 'px ' + this.screenWidth + 'px');
  }

}
