import { Component, ElementRef, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-counter-widget',
  templateUrl: './counter-widget.component.html',
  styleUrls: ['./counter-widget.component.css']
})
export class CounterWidgetComponent implements OnInit {

  private observer: IntersectionObserver | undefined;

  constructor(private elementref:ElementRef,private renderer:Renderer2) { }
  counterVal = 500;
  counterDone:boolean = false;

  ngOnInit(): void {
    const options = {
      rootMargin:'0px',
      threshold:1.0
    }
    this.observer = new IntersectionObserver(entries => {
      console.log('IntersectionObserver callback called.');
      entries.forEach(entry => {
        console.log('IntersectionObserver entry:', entry);
        if(entry.isIntersecting){
          console.log('Element is intersecting with the viewport.');
          this.incrementCounterWhenPageLoaded();
        }else{
          console.log('Element is not intersecting with the viewport.');
          this.counterVal = 500;
          this.counterDone = false;
        }
      })
    },options)
    console.log('Observing element:', this.elementref.nativeElement);
    this.observer.observe(this.elementref.nativeElement);
  }

  incrementCounterWhenPageLoaded(){
    setInterval(() => {
      if(this.counterVal<=1000){
        this.counterVal += 1;
      }else{
        this.counterDone = true;
      }
    }, 10);
  }

  ngOnDestroy() {
    if (this.observer) {
      this.observer.disconnect();
    }
  }

}
