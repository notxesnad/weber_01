import { Component, OnInit, Input, AfterContentChecked, ViewChild } from '@angular/core';
import { Sliderdata } from '../classes';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})

export class CarouselComponent implements OnInit, AfterContentChecked {

	@Input() slides: Sliderdata;
	
  @ViewChild('carousel') carousel: any;

  constructor() { }

  ngOnInit() {	

  }

  ngAfterContentChecked(){
  	console.log(this.carousel._currentActiveSlide);
  }

}


