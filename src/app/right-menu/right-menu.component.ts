import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-right-menu',
  templateUrl: './right-menu.component.html',
  styleUrls: ['./right-menu.component.css']
})
export class RightMenuComponent implements OnInit {
  public renderer = false;
  constructor() { }
  ngOnInit() {
    setInterval(() => {
      this.renderer = false;
      setTimeout(() => this.renderer = true, 1000);
    }, 15000);
  }

}
