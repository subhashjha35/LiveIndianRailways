import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonService } from '../common.service';
interface TrainRoute {
  route;
}
@Component({
  selector: 'app-train-route',
  templateUrl: './train-route.component.html',
  styleUrls: ['./train-route.component.css']
})
export class TrainRouteComponent implements OnInit {

  constructor(private railService: CommonService) { }
  public train_num = '';
  public route_data: TrainRoute = {route: null};
  public errorCode = this.railService.errorCode;
  public errorText = null;
  getTrainRouteData = function() {
    this.railService.getTrainRoute(this.train_num)
      .subscribe(data => {
        this.route_data = data;
        console.log(this.route_data);
        this.errorText = this.errorCode[this.errorCode.findIndex(x => x.code === this.pnr_data.response_code)].txt;
    }, err => this.errorText = err.statusText + '. Check Internet Connection.');
  };
  ngOnInit() {
  }

}
