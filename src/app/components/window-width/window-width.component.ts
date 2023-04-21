import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-window-width',
  templateUrl: './window-width.component.html',
  styleUrls: ['./window-width.component.css']
})
export class WindowWidthComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.onResize(null);
  }
  mouseEnterText = 'Hover on me to change my text!!';
  windowWidth!:any;
  @HostListener("window:resize",["$event"])
  onResize(event:any){
    this.windowWidth = window.innerWidth;
    console.log(window.innerWidth);
  }

  @HostListener('mouseenter')
  onMouseEnter(){
    this.mouseEnterText = 'Yaaay you hovered on me!!';
  }

  @HostListener('mouseout')
  onMouseOut(){
    this.mouseEnterText = 'Hover on me to change my text!!';
  }

}
