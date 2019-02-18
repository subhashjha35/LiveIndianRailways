import { Component, OnInit } from '@angular/core';
import { CommonService } from '../common.service';
import { DatePipe } from '@angular/common';
interface LiveTrain {
  position;
}
@Component({
  selector: 'app-live-train-status',
  templateUrl: './live-train-status.component.html',
  styleUrls: ['./live-train-status.component.css']
})
export class LiveTrainStatusComponent implements OnInit {
  public train_no;
  public doj;
  public live_data: LiveTrain = { position: null};
  public errorCode = this.railService.errorCode;
  public errorText = null;
  public stn_id={};
  public stn_list;
  constructor(private railService: CommonService) {
    console.log(this.live_data);
    this.stn_id="NDLS";
  }
  search_avail = function() {
    // https://api.railwayapi.com/v2/live/train/<train-number>/station/<station-code>/date/<dd-mm-yyyy>/apikey/<apikey>/
    const pipe: any = new DatePipe('en-US');
    this.railService.getLiveTrainStatus(this.train_no,this.stn_id, pipe.transform(this.doj, 'dd-MM-yyyy'))
      .subscribe(data => {
        this.live_data = data;
        console.log(this.live_data.length);
        console.log(this.live_data);
        this.errorText = this.errorCode[this.errorCode.findIndex(x => x.code === this.live_data.response_code)].txt;
      },  err => this.errorText = err.statusText + '. Check Internet Connection.');
  };
  getStation=function(event){
    this.stn_id=event.target.value;
    console.log(this.stn_id);
    if(this.stn_id.length>2){
      this.railService.getStationName(this.stn_id)
        .subscribe(data => {
          this.stn_list=data.stations;
          console.log(this.stn_list);
        });
    }
  }
  displaySelected=function(event){
    console.log(event.target.value);
  }
  stationSelected=function(event){
    console.log(event);
  }
  ngOnInit() {
  }

}
