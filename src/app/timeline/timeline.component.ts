import { Component, OnInit } from '@angular/core';
import { Timelinedata } from '../timelinedata';
import { TimelinedataService } from '../timelinedata.service';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.css']
})
export class TimelineComponent implements OnInit {
	
	timelinedata: Timelinedata[] = [];
  
  constructor(private timelinedataService: TimelinedataService) { }

  ngOnInit() {
 		this.getTimelinedata();
  }

  getTimelinedata(): void {
  	this.timelinedataService.getTimelinedata()
  		.subscribe(timelinedata => this.timelinedata = timelinedata);
  }

}
