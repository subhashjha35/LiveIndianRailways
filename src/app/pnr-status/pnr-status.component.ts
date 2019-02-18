import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonService } from '../common.service';

interface PNR {
  pnr;
}
@Component({
  selector: 'app-pnr-status',
  templateUrl: './pnr-status.component.html',
  styleUrls: ['./pnr-status.component.css']
})
export class PnrStatusComponent {
  constructor(private http: HttpClient, private railService: CommonService) {
    this.pnr_txt = '';
    this.errorDisplay = 'false';
    console.log(this.pnr_data);
  }
  public pnr_txt;
  public errorDisplay;
  public pnr_data: PNR = { pnr: null};
  public errorCode = this.railService.errorCode;
  public errorText = null;
  get_pnr_data = function() {
    this.railService.getPnrStatus(this.pnr_txt)
    .subscribe(data => {
      this.pnr_data = data;
      console.log(this.pnr_data);
      this.errorText = this.errorCode[this.errorCode.findIndex(x => x.code === this.pnr_data.response_code)].txt;
    }, err => this.errorText = err.statusText + '. Check Internet Connection.');
  };
}
