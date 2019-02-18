import { Injectable, HostListener } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  public screenHeight = new BehaviorSubject(768);
  public screenWidth = new BehaviorSubject(1366);

  constructor(private http: HttpClient) {
  }
  private api_key = 'z6ti55ok5w';
  private error;
  public errorCode = [
    {code: 200,	txt: 'Success.'},
    {code: 210, txt: 'Train doesn’t run on the date queried.'},
    {code: 211, txt: 'Train doesn’t have journey class queried.'},
    {code: 220, txt: 'Flushed PNR.'},
    {code: 221, txt: 'Invalid PNR.'},
    {code: 230, txt: 'Date chosen for the query is not valid for the chosen parameters.'},
    {code: 404, txt: 'Data couldn’t be loaded on our servers. No data available.'},
    {code: 405, txt: 'Data couldn’t be loaded on our servers. Request couldn’t go through.'},
    {code: 500, txt: 'Unauthorized API Key.'},
    {code: 501, txt: 'Account Expired.'},
    {code: 502, txt: 'Invalid arguments passed.'}
  ];

  getPnrStatus = function(pnr_txt: String) {
    return this.http.get('https://api.railwayapi.com/v2/pnr-status/pnr/' + pnr_txt + '/apikey/' + this.api_key + '/');
  };

  getTrainRoute = function(train_no: String) {
    return this.http.get('https://api.railwayapi.com/v2/route/train/' + train_no + '/apikey/' + this.api_key + '/');
  };

  getLiveTrainStatus = function(train_no: String, stn_id:String, date: Date) {
    // https://api.railwayapi.com/v2/live/train/<train-number>/station/<station-code>/date/<dd-mm-yyyy>/apikey/<apikey>/
    return this.http.get('https://api.railwayapi.com/v2/live/train/' + train_no +'/station/'+ stn_id +'/date/' + date + '/apikey/' + this.api_key + '/');
  };

  getStationName = function(str: String){
    return this.http.get('https://api.railwayapi.com/v2/suggest-station/name/'+str+'/apikey/'+this.api_key+'/');
  }
}
