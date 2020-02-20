(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<div class=\"container-fluid\">\n  <div class=\"row\">\n    <div class=\"col-lg-2 bg-dark left-menu\">\n      <app-left-menu></app-left-menu>\n    </div>\n    <div class=\"col-lg-8 p-sm-0 pl-lg-2 pr-lg-2\">\n      <router-outlet class=\"row\"></router-outlet>\n    </div>\n    <div class=\"col-lg-2\">\n      <app-right-menu></app-right-menu>\n    </div>\n  </div>\n</div>\n<div class=\"fixed-bottom\">\n  <app-top-menu></app-top-menu>\n</div>\n<div style=\"margin-top:50px\">\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/banner/banner.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/banner/banner.component.html ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ng2-adsense\n  [adClient]=\"'ca-pub-4496734235237025'\"\n  [adSlot]=\"5172805368\"\n  [display]=\"'block'\"\n  [adFormat]=\"'auto'\">\n</ng2-adsense>\n<!-- style=\"display:block\"\ndata-ad-client=\"ca-pub-4496734235237025\"\ndata-ad-slot=\"5172805368\"\ndata-ad-format=\"auto\"\ndata-full-width-responsive=\"true\"> -->\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/footer/footer.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/footer/footer.component.html ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>\n  footer works!\n</p>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/header/header.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/header/header.component.html ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>\n  header works!\n</p>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/left-menu/left-menu.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/left-menu/left-menu.component.html ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div [ngStyle]=\"(screenWidth>=992)?{'height':screenHeight+'px'}:null\">\n  <nav class=\"navbar navbar-toggleable-md navbar-dark\" style=\"padding:0px auto !important;\">\n    <a href=\"#\" class=\"navbar-brand text-center\" style=\"margin-right:0px;\">\n      <img src=\"assets/train.png\" class=\"img-fluid bg-white rounded\" [ngStyle] = \"(screenWidth < 992) ? {'max-height':'25px'}:null\"><br *ngIf=\"(screenWidth >= 992)\"><span class=\"small\">LiveIndianRailways.com</span>\n    </a>\n    <button class=\"navbar-toggler navbar-toggler-left\" [hidden]=\"(screenWidth >= 992)\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarNav\" aria-controls=\"navbarNav\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n      <span class=\"navbar-toggler-icon\"></span>\n    </button>\n    <div class=\"col-12 {{(screenWidth < 992)?'collapse navbar-collapse':null}}\" id=\"navbarNav\">\n      <hr class=\"row mt-1 mb-1 p-0\" style=\"border:1px solid rgba(40, 40, 40, 0.548)\">\n      <ul class=\"navbar-nav\">\n        <li class=\"nav-item\" *ngFor=\"let list of menuList\">\n          <a routerLink='{{list.path}}' class=\"nav-link\">{{list.title}}</a>\n        </li>\n      </ul>\n    </div>\n  </nav>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/live-train-status/live-train-status.component.html":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/live-train-status/live-train-status.component.html ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"card\">\n  <div class=\"card-body\">\n    <app-banner></app-banner>\n  </div>\n</div>\nLive Train Status Page <br>\n<hr>\n<div class=\"jumbotron pt-4 border pb-4 mb-1 mt-1 rounded-0\" style=\"border-radius:0px;\">\n  <form action=\"\">\n      <div class=\"form-group\">\n          <label for=\"train_no\">Enter Train Number</label>\n          <input type=\"number\" min=\"10000\" max=\"99999\" class=\"form-control\"name=\"train_no\" [(ngModel)]=\"train_no\">\n      </div>\n        <div class=\"form-group\">\n            <label for=\"train_no\">Enter Station</label>\n            <!-- {{stn_name}} -->\n            <!-- <input [(ngModel)]=\"stn_name\" type=\"text\" class=\"form-control\" name=\"station_name\" (keyup)=\"getStation()\">\n            <select name=\"stn_code\" id=\"\">\n                <option value=\"{{item.code}}\" *ngFor=\"let item of stn_list\">{{item.name}}</option>\n            </select>\n            <ngx-select [items]=\"stn_list\"\n                (typed)=\"getStation($event)\"\n                placeholder=\"Select Station\"\n                (select)=\"stationSelected($event)\"\n                name=\"stationCode\"\n                [(ngModel)]=\"stn_name\">\n            </ngx-select>\n            {{stn_name}} -->\n            <input (change)=\"displaySelected($event)\" class=\"form-control\" [ngModelOptions]=\"{standalone: true}\" type=\"text\" (keyup)=\"getStation($event)\" [(ngModel)]=\"stn_id\" list=\"options\">\n            <datalist id=\"options\" *ngIf=\"stn_list\">\n                <option *ngFor=\"let item of stn_list\" value=\"{{item.code}}\">{{item.name}}</option>\n            </datalist>\n        </div>\n\n      <div class=\"form-group\">\n          <label for=\"doj\">Date Of Journey</label>\n          <input type=\"date\" class=\"form-control\"name=\"doj\" [(ngModel)]=\"doj\">\n      </div>\n      <div class=\"form-group\">\n          <button class=\"btn btn-success\" type=\"button\" (click)=\"search_avail()\">Search Now</button>\n      </div>\n  </form>\n</div>\n<div class=\"alert alert-warning\" [hidden]=\"(errorText==null)\">\n  {{errorText}}\n</div>\n<div id=\"result\" *ngIf=\"(live_data.position != null)\">\n    <hr>\n    <div class=\"alert-success text-center\">Train Info: {{live_data.train.name}} - {{live_data.train.number}}</div>\n    <div class=\"text-center\">Current Position: {{live_data.position}}</div>\n    <table class=\"table table-sm table-bordered small\" id=\"trs_table\">\n        <tr>\n            <th>Station Name [Code]</th>\n            <th>Date</th>\n            <th>Schedule Arrival</th>\n            <th>Act Arrival</th>\n            <th>Arrived?</th>\n            <th>Schedule Departure</th>\n            <th>Act Departure</th>\n            <th>Departed?</th>\n            <th>Delay/Early</th>\n        </tr>\n        <tbody id=\"trs_data\">\n            <tr><!-- <td class=\"font-weight-bold\">{{data.station.name}} [{{data.station.code}}]</td> -->   \n                <td class=\"font-weight-bold\">{{live_data.station.name}} [{{live_data.station.code}}]</td>\n                <td>{{live_data.start_date}}</td>\n                <td>{{live_data.status.scharr}}</td>\n                <td>{{live_data.status.actarr}}</td>\n                <td>{{live_data.status.has_arrived}}</td>\n                <td>{{live_data.status.schdep}}</td>\n                <td>{{live_data.status.actdep}}</td>\n                <td><span class=\"{{(live_data.status.has_departed==true)?'text-success':'text-danger'}}\">{{(live_data.status.has_departed==true)?'Yes':'No'}}</span></td>\n                <td>{{live_data.status.latemin}}{{(live_data.status.latemin==null)?'Null':''}}</td>\n            </tr>\n        </tbody>\n    </table>\n    <hr>\n    <table class=\"table table-sm table-bordered small\" id=\"trd_table\">\n        <tr>\n            <td>Mon</td>\n            <td>Tue</td>\n            <td>Wed</td>\n            <td>Thu</td>\n            <td>Fri</td>\n            <td>Sat</td>\n            <td>Sun</td>\n        </tr>\n        <tr>\n          <td *ngFor=\"let days of live_data.train.days\" class=\"text-center\"><span class=\"{{(days.runs=='Y')?'text-success':'text-danger'}}\">{{days.runs}}</span></td>\n        </tr>\n    </table>\n</div>\n<div class=\"card small\">\n  <div class=\"card-body\">\n    Live train running status for Indian railway trains means the exact location of any train and its real time delay status. It may also include the estimated arrival of the train at any particular station en-route.\n\nThe two key things which are important to be noted while checking Live Train Status are \"Last Reported Location\" and \"Estimated Time of Arrival (ETA) at upcoming stoppages\"\n\nThe \"Last Reported Station\" signifies the station based on which the current live train running status is determined. The \"Last Reported Station\" also conveys that the train has either arrived or departed or crossed that particular station.\n\nThe \"Estimated Time of Arrival (ETA)\" value conveys the expected time at which the trains is supposed to arrive at any of its upcoming stoppages. This is the time when the traveler at the upcoming is expected to be there to board the train.\n\nThe last reported station can be either a stoppage or an intermediate station (where the train does not have a regular stoppage and simply is expected to cross the station)\n\nAccording to RailYatri, 90% of the live train status updates of the train from a particular station arrives with 8-10 mins of the train arriving/departing/crossing a station. For the remaining 10% of live train updates can range more than take more than that at times reaching to nearly an hour.\n\nTrains do recover time. So the train delay at the upcoming stoppages may be less than what has been reported from last reported station. Please plan accordingly.\n\nTrain running status updates are much more accurate when it arrives from the GPS of the RailYatri app users.\n\nTrain status updates from the last stop typically arrive in a delayed fashion.\n\nStatus running train updates change frequently. So it is recommended that the user check the status updates frequently. Nearer to the estimated time of arrival, the train running status information becomes more and more accurate.\n\nThe two key things which are important to be noted while checking Live Train Status are \"Last Reported Location\" and \"Estimated Time of Arrival (ETA)\" at upcoming stoppages.\n\nTrain status on mobile can be checked through modern day Internet powered mobile devices. It can be checked on the go, and conveys exact location of a train and its delay status.\n  </div>\n  <div class=\"about-content p-2\">\n    <i><b class=\"text-danger\">How to check Train Running Status Online?</b></i><br />\nYou can check <b>IRCTC Train Status</b> or the <b>Live Train Status</b> of any Indian Railways Train here at <a class=\"link-url\" href=\"https://indianrailways.info/train_running_status/\"><b>https://indianrailways.info/train_running_status/</b></a>.<br />\nThis is one of the fastest ways to get latest information and <b>spot your train</b> in real time.<br />\nAll you need to do is enter the Train Number or Train Name in box above and select the train start date to get the current location of the train. You can find Train Name or number by just entering first 3 letters / digits and it will show you a list from which you can select the train. <br />\n<b>Train Running Status</b> can also be checked at every stations where enquiry counters are available for this purpose.<br /><br />\n<i><b class=\"text-danger\">How to check Train status through SMS?</b></i><br />\nSMS Service : <b>SMS 'AD &lt;Train Number&gt; &lt;Station STD Code&gt;' to 139</b><br />\n<i>Eg : </i><b>AD 12002 0755</b><br /><br />\n<i><b class=\"text-danger\">How to check Train status through Phone?</b></i><br />\nRailway Enquiry Number : <b>Call 139</b> <br /><br />\n<i><b class=\"text-danger\">Live Train Status Explanation</b></i><br />\n<b>S.No</b>: Serial No's of Stations where the train stops.<br />\n<b>Station Name & Code</b>: Name & Station Code of Stations where the train stops.<br />\n<b>Actual Arrival Time</b>: Train Arrival Time when it actually arrived at that station.<br />\n<b>Actual Departure Time</b>: Train Departure Time when it actually arrived at that station.<br />\n<b>Late / Early</b>: Wthether the train is on time or delayed and by how much time.<br />\n<b>Current Position</b>: Arrived / Departed / Estimated as the case maybe.<br />\n<b>Scheduled Arrival Time</b>: Time when train was originally scheduled to arrive at that station.<br />\n<b>Scheduled Departure Time</b>: Time when train was originally scheduled to depart from that station.<br />\n<b>Halt Time</b>: Stoppage time at that station.<br />\n<b>Platform Number</b>: The platform number where the train actually or is scheduled to stop<br />\n<b>Enroute Day</b>: Number of Day of train travel.<br />\n<b>Distance</b>: Distance covered from Origin Station<br /><br />\n<i><b class=\"text-danger\"> Error. Please try later : Message / Status</b></i><br />\nIf the LIVE train running status for your queried train number is not delivered, the following reasons could be responsible:<br />\n1 - You entered an incorrect or invalid train number.<br />\n2 - Train does not run on the date it is being queried.<br />\n3 - Indian Railways server is down or overloaded.<br /><br />\n<i><b class=\"text-danger\">Train on Map</b></i><br />\nOne can track the exact position of the train by locating it on the map. By clicking on the indicated points on the map, one can see the name of the station, the arrival and departure time, the travel day number on which the train is running and distance from the source station.<br /><br />\n<i><b class=\"text-danger\">Example Of Train Status:</b></i><br />\nIf you are travelling from Bhopal to Delhi via train no 12001 - NDLS SHATABDI Express (HBJ - NDLS), just type the train number 12001 or NDLS SHATABDI in box 1. After this, select the date of travel and then click on 'Submit'.<br />\nThe information that the train is on one of the route stations - HABIBGANJ(HBJ), BHOPAL JN(BPL), JHANSI JN(JHS), GWALIOR(GWL), AGRA CANTT(AGC), MATHURA JN(MTJ) or NEW DELHI(NDLS)will come up. <br />\nIt will also tell you the Expected Time of Arrival (eg 16:35 at Bhopal) and Expected Time of Departure (eg 16:39 at Bhopal) along with the halt time of 4 Min. The late status can also be checked -whether a train is on 'On Time' or 'Late' will be indicated against the station.<br />\nDdistance between the stations will also be shown and you can know exactly that JHANSI JN(JHS) is how many km away from Bhopal.<br />\nYou will also be able to find the platform number on which the train will arrive and thus will not have to rush to coolies or other passengers for help. Eg: Bhopal Station at Platform 2 and New Delhi at Platform 1. Platform numbers will thus be indicated against each station.<br />\nAlong with this, a route map will also help you trace the trajectory of your travel and you will have a clear idea on what route the train is heading. This map can also help in finding the places around a particular station and what areas you are crossing. <br /><br />\n<i><b class=\"text-danger\">How is Train Status Tracked?</b></i><br />\nThe latest train status is reflected via an accurate GPS tracker and navigation system that provides accurate real time data for the travellers.<br />\nThe Global Positioning System (GPS) is a a global navigation satellite system that provides geo-location and time information to a GPS receiver anywhere on or near the Earth. The GPS operates independently of any telephonic or internet reception and does not require the user to transmit any data.<br /><br />\nFor More information & queries about this, please check <a class=\"link-url\" [routerLink]=\"['faq']\"><b>Indian Railways FAQ</b></a><br />\n</div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pnr-status/pnr-status.component.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pnr-status/pnr-status.component.html ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"card\">\n  <div class=\"card-body text-center\">\n    <app-banner></app-banner>\n  </div>\n</div>\n<div class=\"jumbotron pt-4 border pb-4 mb-1 mt-1 rounded-0\" style=\"border-radius:0px;\">\n  <form action=\"\" method=\"post\">\n    <div class=\"text-center\">\n      <div class=\"small\">Enter the 10 Digit PNR Number</div>\n        <input type=\"search\" [ngModelOptions]=\"{standalone: true}\" style =\"width:200px; display:inline-block;\" class=\"form-control rounded-0\" [(ngModel)] = \"pnr_txt\" id=\"pnr_txt\" placeholder=\"Enter Your PNR\">\n        <button class=\"rounded-0 btn btn-info\"(click)=\"get_pnr_data()\">Submit</button>\n    </div>\n  </form>\n</div>\n<div class=\"alert alert-warning\" [hidden]=\"(errorText==null)\">\n  {{errorText}}\n</div>\n<div class=\"card\" id=\"result_pnr\" *ngIf=\"(pnr_data.pnr != null)\">\n  <div class=\"card-body\">\n    <table class=\"table table-bordered table-sm\">\n      <tr class=\"text-center bg-info text-white\"><td colspan=4>PNR Status : {{pnr_data.pnr}}</td></tr>\n      <tr>\n        <td>Train Name</td>\n        <td>{{pnr_data.train.name}}</td>\n        <td>Train Number</td>\n        <td>{{pnr_data.train.number}}</td>\n      </tr>\n      <tr>\n        <td>Class</td>\n        <td>{{pnr_data.journey_class.code}}</td>\n        <td>Travel Date</td>\n        <td>{{pnr_data.doj}}</td>\n      </tr>\n      <tr>\n        <td>From</td>\n        <td>{{pnr_data.from_station.name}} [{{pnr_data.from_station.code}}]</td>\n        <td>To</td>\n        <td>{{pnr_data.to_station.name}} [{{pnr_data.to_station.code}}]</td>\n      </tr>\n      <tr>\n        <td>Boarding Point</td>\n        <td>{{ pnr_data.boarding_point.name }} [{{ pnr_data.boarding_point.code }}]</td>\n        <td>Reserved Till</td>\n        <td>{{pnr_data.reservation_upto.name}} [{{pnr_data.reservation_upto.code}}]</td>\n      </tr>\n    </table>\n    <table class=\"table tabled-bordered table-sm\">\n      <tr><td colspan=\"3\">Passenger Nos : {{pnr_data.total_passengers}}</td></tr>\n      <tr>\n        <td>S No.</td>\n        <td>Booking Status</td>\n        <td>Current Status</td>\n      </tr>\n      <tr *ngFor=\"let pass of pnr_data.passengers\">\n        <td>{{pass.no}}</td>\n        <td>{{pass.booking_status}}</td>\n        <td>{{pass.current_status}}</td>\n      </tr>\n      <tr class=\"bg-warning\"><td colspan=\"3\">Chart Prepared: {{pnr_data.chart_prepared}}</td></tr>\n    </table>\n  </div>\n</div>\n<div class=\"card\">\n  <div class=\"card-body small\">\n    <p>\n      <br /><span class=\"badge badge-info\">Indian Railways PNR No 2354986668 Status Check</span><br /><br />\n      <i><b class=\"text-danger\">How to check PNR status Online?</b></i><br />\n      You can check <b>IRCTC PNR Status</b> or the <b>Live PNR Status</b> of Indian Railways tickets here at <a class=\"link-url\" [routerLink]=\"['pnr-status']\"><b>here</b></a>.<br />\n      This is one of the fastest ways to get latest information and get your <b>ticket status</b> in real time.<br />\n      All you need to do is enter the PNR in box above to get the current status. You will find <b>PNR Number</b> on the top left corner of the ticket. <br />\n      PNR status can also be checked at every major stations, where PNR status checking counters are available.<br /><br />\n      <i><b class=\"text-danger\">How to check PNR status through SMS?</b></i><br />\n      SMS Service : <b>SMS 'PNR <10 Digit-PNR>' to 139</b><br />\n      <i>Eg : </i><b>PNR 1234567890</b><br /><br />\n      <i><b class=\"text-danger\">How to check PNR status through Phone?</b></i><br />\n      Railway Enquiry Number : <b>Call 139</b> <br /><br />\n      <i><b class=\"text-danger\">PNR Status and Seat Availability</b></i><br />\n      The following codes are used by Indian Railways for reservation status. You need to understand them :<br />\n      <b>RAC</b> - In RAC (Reservation Against Cancellation), the passenger is allowed to travel and two passengers share the same berth. If a confirmed passenger does not board the train, a full berth is allotted to the passenger with RAC ticket.<br />\n      <b>CNF</b> - The passenger seat has been confirmed and the seat will be allotted after charting<br />\n      <b>CAN</b> - The passenger seat has been cancelled<br />\n      <b>WL</b> - The passenger with Waitlist ticket is in the waiting list and is not allowed to board the train. A waitlist ticket can be cancelled by the passenger 30 minutes before the departure of the train. If a WL ticket does not get confirmed, it gets cancelled automatically.<br />\n      <b>GNWL</b> - A General Waitlist ticket which gets confirmed after the passengers cancel their confirmed bookings.<br />\n      <b>TQWL</b> - TQWL stands for Tatkal Waitlist. When a passenger does a tatkal booking and is put on the wait list, the status is shown as TQWL. This ticket is least likely to get confirmed.<br />\n      <b>PQWL</b> - Under Pooled Quota Waitlist, passengers traveling between intermediate stations and have a separate waitlist from the general waitlist.<br />\n      <b>RLWL</b> - A Remote Location Waitlist has the high chances of confirmation. Smaller stations have separate quota of seats and waiting seats on these intermediate stations are given RLWL status.<br />\n      <b>RSWL</b> - A station specific waitlist is called a Road-Side Waitlist.<br />\n      <b>NR</b> - NR means 'No Room' and no further bookings are allowed with a NR ticket<br />\n      <b>NOSB</b> - NOSB is acronym for No Seat Berth. Children below 12 years of age pay child fare and are not allotted seats. Their PNR status shows NOSB - No Seat Berth.<br />\n      <b>REL</b> - REL stands for Released<br />\n      <b>WEBCAN</b> - It's a Railway Counter Ticket. When a passenger has been cancelled over internet and the refund has not been collected.<br />\n      <b>WEBCANRF</b> - It's a Railway Counter Ticket. When a passenger has been cancelled over internet and the refund has been collected.<br /><br />\n      <i><b class=\"text-danger\"> Error. Please try later : Message / Status</b></i><br />\n      If the LIVE PNR Status for your queried PNR number is not delivered, the following reasons could be responsible:<br />\n      1 - You entered an incorrect or invalid PNR number.<br />\n      2 - Your Travel date is already in Past and PNR Number has been extinguished.<br />\n      3 - Indian Railways server is down or overloaded.<br /><br />\n      <i><b class=\"text-danger\">What is the 10-digit PNR number and how it is generated?</b></i><br />\n      The Indian Railways passenger name record, also known as <b>PNR</b>, is a number that gives a complete travel information to ticket-holders. The <b>PNR status</b> includes information such as the <b>booking status</b> - whether the ticket has been confirmed, it is on waiting list (WL) or it is under reservation against cancellation (RAC) - apart from giving basic information on arrival and departure time of trains. The PNR status has details of the coach and seat number and the fare paid by the passenger, among other details. <br /><br />\n      <i><b class=\"text-danger\">How PNR Works?</b></i><br />\n      The Centre of Railway Information Systems maintains information about passengers. Their system creates a 10-digit PNR status number every time a person buys an <b>Indian Railways ticket</b>.<br />\n      In case of group booking, a single PNR number can have a maximum of six passengers.<br /><br />\n      <i><b class=\"text-danger\">What does PNR number include?</b></i><br />\n      <b>Passenger Detail</b> (Name, Age, Sex, Birth Preference)<br />\n      <b>Ticket Detail</b> (Train No, Travel Date, From, To, Boarding Station, Reservation Upto, Class, Berth, Quota)<br />\n      <b>Transaction / Payment Details</b> (Transaction ID, Payment Mode, Ticket Charge)<br />\n      The first 3 digits of the PNR tell us from which Passenger Reservation System or PRS the ticket has been booked.<br />\n      The last seven digits are randomly generated numbers. These numbers represent no information about the ticket or journey as such. They only provide an unique identity to the PNR number.<br /><br />\n      <i><b class=\"text-danger\">Where is PNR number on ticket</b></i><br />\n      <b>PNR number</b> is usually printed at the top left corner of the tickets that are available at the railway station booking window. In case of the E - Ticket, the PNR number is mentioned at top in a separate cell.<br /><br />\n      <i><b class=\"text-danger\">Waiting List and RAC</b></i><br />\n      Once all available seats on a train are sold, the Indian railway releases RACs for railway reservations. When all of the RAC seats are sold, Waiting List tickets are released. The status of the tickets might vary based on a variety of reasons. Ticket cancellations by other passengers can increase your chances if you have an RAC or Waiting List ticket. RAC/WL ticket holders are also likely to get available seats in different quotas if they remain unused.<br />\n      Tickets are sold by the Indian Railways in the following order:<br />\n      - Available 02<br />\n      - Available 01<br />\n      - RAC 01<br />\n      - RAC 02<br />\n      - RAC 03<br />\n      - RAC 04<br />\n      - WL 01<br />\n      - WL 02<br /><br />\n      <i><b class=\"text-danger\">Understanding your ticket status</b></i><br />\n      There are two numbers mentioned on your ticket. The numbers detail the position at which you joined the waitlist and the current position of your ticket- in this order. Here is an example:<br />\n      When you book a train ticket online, you find the train number and class - AC, second class, third class etc mentioned on the e-ticket along with the seat/berth that you want along with the date and time. Let's consider that you buy a ticket with WL5/WL2.<br />\n      This means that you joined the WL at position 6, but by the time you paid for the ticket and actually bought the ticket online you moved to position 2. <br />\n      The position may have varied from WL6 to WL2 either due to a cancellation or due to someone not making a final booking. <br />\n      While The first number (WL5 in this case) will stay the same, the second number will decrease until you get a ticket.<br />\n      This is how the status of your reservation status could look like - in that order:<br />\n      - WL 6/WL 2<br />\n      - WL 6/WL 1<br />\n      - WL 6/RAC 3<br />\n      - WL 6/RAC 2<br />\n      - WL 6/RAC 1<br />\n      - WL 6/CNF<br /><br />\n      <i><b class=\"text-danger\">PNR numbers validity Period</b></i><br />\n      Normally, the digits of Passanger name record or PNR become meaningless after the completion of the journey. The PNR details may not be available to the public once the journey gets completed for privacy and security concerns of passengers.<br /><br />\n      For More information & queries about this, please check <a class=\"link-url\" href=\"//indianrailways.info/faq/\"><b>Indian Railways FAQ</b></a><br />\n      </p>\n  </div>\n</div>\n<div class=\"about-content p-2\">\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/right-menu/right-menu.component.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/right-menu/right-menu.component.html ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"card\">\n  <div class=\"p-1\">\n    <app-banner></app-banner>\n    <app-banner></app-banner>\n  </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/top-menu/top-menu.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/top-menu/top-menu.component.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"text-center d-md-none text-success\" style=\"background-color:rgba(30,30,30,0.8)\">\n  <a [routerLink]=\"['pnr-status']\" class=\"btn text-success\">PNR</a>\n  <a [routerLink]=\"['train-route']\" class=\"btn text-success ml-1 mr-1\">Schedule</a>\n  <a [routerLink]=\"['live-train-status']\" class=\"btn text-success\">Live</a>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/train-route/train-route.component.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/train-route/train-route.component.html ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"card\">\n  <div class=\"card-body\">\n    <app-banner></app-banner>\n  </div>\n</div>\n<div class=\"jumbotron pt-4 border pb-4 mb-1 mt-1 rounded-0\">\n  <form action=\"\" class=\"text-center\">\n      <div class=\"small\">Enter the Train No. to find its route</div>\n    <input name=\"train_num\" type=\"text\" class=\"form-control rounded-0\" style =\"width:200px; display:inline-block;\" [(ngModel)]=\"train_num\">\n    <button type=\"button\" class=\"rounded-0 btn btn-info\" (click)=\"getTrainRouteData()\">Search Train</button>\n  </form>\n</div>\n<div class=\"alert alert-warning\" [hidden]=\"(errorText==null)\">\n  {{errorText}}\n</div>\n<div id=\"result\" *ngIf=\"(route_data.route != null)\">\n  <table class=\"table table-sm table-bordered small\">\n      <tr class=\"text-center alert-info font-weight-bold\"><td colspan=\"6\">Train Details : {{ route_data.train.name }} ({{ route_data.train.number }})</td></tr>\n      <tr>\n          <td>Station Name [Code]</td>\n          <td>Scheduled Arrival</td>\n          <td>Scheduled Departure</td>\n          <td>Distance</td>\n          <td>Halt</td>\n          <td>Day</td>\n      </tr>\n      <tbody id=\"route_data\">\n        <tr *ngFor=\"let data of route_data.route\">\n          <td><strong>{{ data.station.name }} [{{ data.station.code }}]</strong></td>\n          <td>{{ data.scharr }}</td>\n          <td>{{ data.schdep }}</td>\n          <td>{{ data.distance }}</td>\n          <td>{{ data.halt }}</td>\n          <td>{{ data.day }}</td>\n        </tr>\n      </tbody>\n  </table>\n\n  <div class=\"col-md-12\">\n      <div class=\"row\" id=\"class_avail_box\">\n          <div class=\"col-sm-4 alert-info\">Train Class Available</div>\n          <div *ngFor=\"let class of route_data.train.classes\" class=\"col-sm-1 {{ (class.available=='Y')?'alert-success':'alert-danger' }}\">{{class.code}}</div>\n      </div>\n  </div>\n\n  <table class=\"table table-bordered table-sm mt-2\">\n      <tr class=\"col-sm-4 alert-info\"><td colspan=\"7\">Train Running Days</td></tr>\n      <tr>\n          <td>Mon</td>\n          <td>Tue</td>\n          <td>Wed</td>\n          <td>Thu</td>\n          <td>Fri</td>\n          <td>Sat</td>\n          <td>Sun</td>\n      </tr>\n      <tr>\n        <td *ngFor=\"let day of route_data.train.days\">\n          <div class=\"text-center {{(day.runs=='Y')?'text-success':'text-danger'}}\">{{day.runs}}</div>\n        </td>\n      </tr>\n  </table>\n</div>\n\n<div class=\"card\">\n  <div class=\"card-body small\">\n    <p>Indian Railways publish train time table with the name Trains at a Glance. But with the advent of online technologies, this has now become redundant. Now all the information regarding Train Time Table are on your fingertips and easily available. You can find the schedule of all Trains here.</p>\n\n    <b>How to Check Train Time Table</b><br>\n    <p>By using this website, you can check Train Schedule & Arrival and Departure of Trains in 3 easy steps</p>\n    <ul>\n      <li>Go to the Input Box on top below ‘Train Time Table‘</li>\n      <li>In the Input box, enter Train Number or select from dropdown list.</li>\n      <li>Click on Submit Button.</li>\n      <li>Here will be displayed Train Time Table based on your information</li>\n    </ul>\n  </div>\n</div>\n");

/***/ }),

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __importDefault(__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")).default]
        }),
        __metadata("design:paramtypes", [])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var ng2_adsense__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng2-adsense */ "./node_modules/ng2-adsense/__ivy_ngcc__/fesm5/ng2-adsense.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm5/forms.js");
/* harmony import */ var ngx_select_ex__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-select-ex */ "./node_modules/ngx-select-ex/__ivy_ngcc__/fesm5/ngx-select-ex.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/footer/footer.component.ts");
/* harmony import */ var _left_menu_left_menu_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./left-menu/left-menu.component */ "./src/app/left-menu/left-menu.component.ts");
/* harmony import */ var _right_menu_right_menu_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./right-menu/right-menu.component */ "./src/app/right-menu/right-menu.component.ts");
/* harmony import */ var _pnr_status_pnr_status_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./pnr-status/pnr-status.component */ "./src/app/pnr-status/pnr-status.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/http.js");
/* harmony import */ var _train_route_train_route_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./train-route/train-route.component */ "./src/app/train-route/train-route.component.ts");
/* harmony import */ var _live_train_status_live_train_status_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./live-train-status/live-train-status.component */ "./src/app/live-train-status/live-train-status.component.ts");
/* harmony import */ var _banner_banner_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./banner/banner.component */ "./src/app/banner/banner.component.ts");
/* harmony import */ var _top_menu_top_menu_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./top-menu/top-menu.component */ "./src/app/top-menu/top-menu.component.ts");
/* harmony import */ var _angular_service_worker__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/service-worker */ "./node_modules/@angular/service-worker/__ivy_ngcc__/fesm5/service-worker.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};




















var appRoutes = [
    { path: 'pnr-status', component: _pnr_status_pnr_status_component__WEBPACK_IMPORTED_MODULE_11__["PnrStatusComponent"] },
    { path: 'live-train-status', component: _live_train_status_live_train_status_component__WEBPACK_IMPORTED_MODULE_14__["LiveTrainStatusComponent"] },
    { path: 'train-route', component: _train_route_train_route_component__WEBPACK_IMPORTED_MODULE_13__["TrainRouteComponent"] },
    { path: '', redirectTo: '/live-train-status', pathMatch: 'full' },
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
                _header_header_component__WEBPACK_IMPORTED_MODULE_7__["HeaderComponent"],
                _footer_footer_component__WEBPACK_IMPORTED_MODULE_8__["FooterComponent"],
                _left_menu_left_menu_component__WEBPACK_IMPORTED_MODULE_9__["LeftMenuComponent"],
                _right_menu_right_menu_component__WEBPACK_IMPORTED_MODULE_10__["RightMenuComponent"],
                _pnr_status_pnr_status_component__WEBPACK_IMPORTED_MODULE_11__["PnrStatusComponent"],
                _train_route_train_route_component__WEBPACK_IMPORTED_MODULE_13__["TrainRouteComponent"],
                _live_train_status_live_train_status_component__WEBPACK_IMPORTED_MODULE_14__["LiveTrainStatusComponent"],
                _banner_banner_component__WEBPACK_IMPORTED_MODULE_15__["BannerComponent"],
                _top_menu_top_menu_component__WEBPACK_IMPORTED_MODULE_16__["TopMenuComponent"]
            ],
            schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["CUSTOM_ELEMENTS_SCHEMA"]],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                ngx_select_ex__WEBPACK_IMPORTED_MODULE_4__["NgxSelectModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_12__["HttpClientModule"],
                ng2_adsense__WEBPACK_IMPORTED_MODULE_2__["AdsenseModule"].forRoot({
                    adClient: 'ca-pub-4496734235237025',
                    adSlot: 6782725308
                }),
                _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forRoot(appRoutes),
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_service_worker__WEBPACK_IMPORTED_MODULE_17__["ServiceWorkerModule"].register('ngsw-worker.js', { enabled: _environments_environment__WEBPACK_IMPORTED_MODULE_18__["environment"].production })
            ],
            providers: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/banner/banner.component.ts":
/*!********************************************!*\
  !*** ./src/app/banner/banner.component.ts ***!
  \********************************************/
/*! exports provided: BannerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BannerComponent", function() { return BannerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};

var BannerComponent = /** @class */ (function () {
    function BannerComponent() {
    }
    BannerComponent.prototype.ngAfterViewInit = function () { };
    BannerComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-banner',
            template: __importDefault(__webpack_require__(/*! raw-loader!./banner.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/banner/banner.component.html")).default
        }),
        __metadata("design:paramtypes", [])
    ], BannerComponent);
    return BannerComponent;
}());



/***/ }),

/***/ "./src/app/common.service.ts":
/*!***********************************!*\
  !*** ./src/app/common.service.ts ***!
  \***********************************/
/*! exports provided: CommonService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommonService", function() { return CommonService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};



var CommonService = /** @class */ (function () {
    function CommonService(http) {
        this.http = http;
        this.screenHeight = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](768);
        this.screenWidth = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](1366);
        this.api_key = 'z6ti55ok5w';
        this.errorCode = [
            { code: 200, txt: 'Success.' },
            { code: 210, txt: 'Train doesn’t run on the date queried.' },
            { code: 211, txt: 'Train doesn’t have journey class queried.' },
            { code: 220, txt: 'Flushed PNR.' },
            { code: 221, txt: 'Invalid PNR.' },
            { code: 230, txt: 'Date chosen for the query is not valid for the chosen parameters.' },
            { code: 404, txt: 'Data couldn’t be loaded on our servers. No data available.' },
            { code: 405, txt: 'Data couldn’t be loaded on our servers. Request couldn’t go through.' },
            { code: 500, txt: 'Unauthorized API Key.' },
            { code: 501, txt: 'Account Expired.' },
            { code: 502, txt: 'Invalid arguments passed.' }
        ];
        this.getPnrStatus = function (pnr_txt) {
            return this.http.get('https://api.railwayapi.com/v2/pnr-status/pnr/' + pnr_txt + '/apikey/' + this.api_key + '/');
        };
        this.getTrainRoute = function (train_no) {
            return this.http.get('https://api.railwayapi.com/v2/route/train/' + train_no + '/apikey/' + this.api_key + '/');
        };
        this.getLiveTrainStatus = function (train_no, stn_id, date) {
            var url = 'https://api.railwayapi.com/v2/live/train/' + train_no
                + '/station/' + stn_id
                + '/date/' + date +
                '/apikey/' + this.api_key + '/';
            // https://api.railwayapi.com/v2/live/train/<train-number>/station/<station-code>/date/<dd-mm-yyyy>/apikey/<apikey>/
            return this.http.get(url);
        };
        this.getStationName = function (str) {
            return this.http.get('https://api.railwayapi.com/v2/suggest-station/name/' + str + '/apikey/' + this.api_key + '/');
        };
    }
    CommonService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
    ]; };
    CommonService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], CommonService);
    return CommonService;
}());



/***/ }),

/***/ "./src/app/footer/footer.component.css":
/*!*********************************************!*\
  !*** ./src/app/footer/footer.component.css ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/footer/footer.component.ts":
/*!********************************************!*\
  !*** ./src/app/footer/footer.component.ts ***!
  \********************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};

var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-footer',
            template: __importDefault(__webpack_require__(/*! raw-loader!./footer.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/footer/footer.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./footer.component.css */ "./src/app/footer/footer.component.css")).default]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/header/header.component.css":
/*!*********************************************!*\
  !*** ./src/app/header/header.component.css ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/header/header.component.ts":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};

var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-header',
            template: __importDefault(__webpack_require__(/*! raw-loader!./header.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/header/header.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./header.component.css */ "./src/app/header/header.component.css")).default]
        }),
        __metadata("design:paramtypes", [])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/left-menu/left-menu.component.css":
/*!***************************************************!*\
  !*** ./src/app/left-menu/left-menu.component.css ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".list-group-item {\n  padding: 3px 10px;\n  background-color:transparent !important;\n}\n.sidebar {\n  padding-left: 0 !important;\n  padding-right: 0 !important;\n}\n.sidebar .nav {\n  margin-bottom: 20px;\n}\n.sidebar .bg-dark a{\n  color:#eee;\n  -webkit-transition: 0.3s all ease-out;\n  transition: 0.3s all ease-out;\n}\n.sidebar .bg-dark a:hover{\n  color:#568cd8;\n  /* background:rgba(0, 0, 0, 0.616); */\n}\n.sidebar .nav-item {\n  width: 100%;\n}\n.sidebar .nav-item + .nav-item {\n  margin-left: 0;\n}\n.sidebar .nav-link {\n  border-radius: 0;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGVmdC1tZW51L2xlZnQtbWVudS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsaUJBQWlCO0VBQ2pCLHVDQUF1QztBQUN6QztBQUNBO0VBQ0UsMEJBQTBCO0VBQzFCLDJCQUEyQjtBQUM3QjtBQUVBO0VBQ0UsbUJBQW1CO0FBQ3JCO0FBQ0E7RUFDRSxVQUFVO0VBQ1YscUNBQTZCO0VBQTdCLDZCQUE2QjtBQUMvQjtBQUNBO0VBQ0UsYUFBYTtFQUNiLHFDQUFxQztBQUN2QztBQUNBO0VBQ0UsV0FBVztBQUNiO0FBRUE7RUFDRSxjQUFjO0FBQ2hCO0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEIiLCJmaWxlIjoic3JjL2FwcC9sZWZ0LW1lbnUvbGVmdC1tZW51LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubGlzdC1ncm91cC1pdGVtIHtcbiAgcGFkZGluZzogM3B4IDEwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6dHJhbnNwYXJlbnQgIWltcG9ydGFudDtcbn1cbi5zaWRlYmFyIHtcbiAgcGFkZGluZy1sZWZ0OiAwICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmctcmlnaHQ6IDAgIWltcG9ydGFudDtcbn1cblxuLnNpZGViYXIgLm5hdiB7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG59XG4uc2lkZWJhciAuYmctZGFyayBhe1xuICBjb2xvcjojZWVlO1xuICB0cmFuc2l0aW9uOiAwLjNzIGFsbCBlYXNlLW91dDtcbn1cbi5zaWRlYmFyIC5iZy1kYXJrIGE6aG92ZXJ7XG4gIGNvbG9yOiM1NjhjZDg7XG4gIC8qIGJhY2tncm91bmQ6cmdiYSgwLCAwLCAwLCAwLjYxNik7ICovXG59XG4uc2lkZWJhciAubmF2LWl0ZW0ge1xuICB3aWR0aDogMTAwJTtcbn1cblxuLnNpZGViYXIgLm5hdi1pdGVtICsgLm5hdi1pdGVtIHtcbiAgbWFyZ2luLWxlZnQ6IDA7XG59XG5cbi5zaWRlYmFyIC5uYXYtbGluayB7XG4gIGJvcmRlci1yYWRpdXM6IDA7XG59XG4iXX0= */");

/***/ }),

/***/ "./src/app/left-menu/left-menu.component.ts":
/*!**************************************************!*\
  !*** ./src/app/left-menu/left-menu.component.ts ***!
  \**************************************************/
/*! exports provided: LeftMenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LeftMenuComponent", function() { return LeftMenuComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _common_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common.service */ "./src/app/common.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};



var LeftMenuComponent = /** @class */ (function () {
    function LeftMenuComponent(railService) {
        this.railService = railService;
        this.menuList = [
            // {path: 'pnr-status', title: 'PNR Status'},
            { path: 'train-route', title: 'Train Route' },
            { path: 'live-train-status', title: 'Live Train Status' },
        ];
        this.onResize();
    }
    LeftMenuComponent.prototype.onResize = function (event) {
        this.railService.screenHeight.next(window.innerHeight);
        this.railService.screenWidth.next(window.innerWidth);
    };
    LeftMenuComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.railService.screenWidth.subscribe(function (width) { _this.screenWidth = width; console.log(width); });
        this.railService.screenHeight.subscribe(function (height) { _this.screenHeight = height; console.log(height); });
        console.log(this.screenHeight + 'px ' + this.screenWidth + 'px');
    };
    LeftMenuComponent.ctorParameters = function () { return [
        { type: _common_service__WEBPACK_IMPORTED_MODULE_1__["CommonService"] }
    ]; };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('window:resize', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], LeftMenuComponent.prototype, "onResize", null);
    LeftMenuComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-left-menu',
            template: __importDefault(__webpack_require__(/*! raw-loader!./left-menu.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/left-menu/left-menu.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./left-menu.component.css */ "./src/app/left-menu/left-menu.component.css")).default]
        }),
        __metadata("design:paramtypes", [_common_service__WEBPACK_IMPORTED_MODULE_1__["CommonService"]])
    ], LeftMenuComponent);
    return LeftMenuComponent;
}());



/***/ }),

/***/ "./src/app/live-train-status/live-train-status.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/live-train-status/live-train-status.component.css ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xpdmUtdHJhaW4tc3RhdHVzL2xpdmUtdHJhaW4tc3RhdHVzLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/live-train-status/live-train-status.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/live-train-status/live-train-status.component.ts ***!
  \******************************************************************/
/*! exports provided: LiveTrainStatusComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LiveTrainStatusComponent", function() { return LiveTrainStatusComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _common_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common.service */ "./src/app/common.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};



var LiveTrainStatusComponent = /** @class */ (function () {
    function LiveTrainStatusComponent(railService) {
        this.railService = railService;
        this.live_data = { position: null };
        this.errorCode = this.railService.errorCode;
        this.errorText = null;
        this.stn_id = {};
        this.search_avail = function () {
            var _this = this;
            // https://api.railwayapi.com/v2/live/train/<train-number>/station/<station-code>/date/<dd-mm-yyyy>/apikey/<apikey>/
            var pipe = new _angular_common__WEBPACK_IMPORTED_MODULE_2__["DatePipe"]('en-US');
            this.railService.getLiveTrainStatus(this.train_no, this.stn_id, pipe.transform(this.doj, 'dd-MM-yyyy'))
                .subscribe(function (data) {
                _this.live_data = data;
                console.log(_this.live_data.length);
                console.log(_this.live_data);
                _this.errorText = _this.errorCode[_this.errorCode.findIndex(function (x) { return x.code === _this.live_data.response_code; })].txt;
            }, function (err) { return _this.errorText = err.statusText + '. Check Internet Connection.'; });
        };
        this.getStation = function (event) {
            var _this = this;
            this.stn_id = event.target.value;
            console.log(this.stn_id);
            if (this.stn_id.length > 2) {
                this.railService.getStationName(this.stn_id)
                    .subscribe(function (data) {
                    _this.stn_list = data.stations;
                    console.log(_this.stn_list);
                });
            }
        };
        this.displaySelected = function (event) {
            console.log(event.target.value);
        };
        this.stationSelected = function (event) {
            console.log(event);
        };
        console.log(this.live_data);
        this.stn_id = 'NDLS';
    }
    LiveTrainStatusComponent.prototype.ngOnInit = function () {
    };
    LiveTrainStatusComponent.ctorParameters = function () { return [
        { type: _common_service__WEBPACK_IMPORTED_MODULE_1__["CommonService"] }
    ]; };
    LiveTrainStatusComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-live-train-status',
            template: __importDefault(__webpack_require__(/*! raw-loader!./live-train-status.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/live-train-status/live-train-status.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./live-train-status.component.css */ "./src/app/live-train-status/live-train-status.component.css")).default]
        }),
        __metadata("design:paramtypes", [_common_service__WEBPACK_IMPORTED_MODULE_1__["CommonService"]])
    ], LiveTrainStatusComponent);
    return LiveTrainStatusComponent;
}());



/***/ }),

/***/ "./src/app/pnr-status/pnr-status.component.css":
/*!*****************************************************!*\
  !*** ./src/app/pnr-status/pnr-status.component.css ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Buci1zdGF0dXMvcG5yLXN0YXR1cy5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/pnr-status/pnr-status.component.ts":
/*!****************************************************!*\
  !*** ./src/app/pnr-status/pnr-status.component.ts ***!
  \****************************************************/
/*! exports provided: PnrStatusComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PnrStatusComponent", function() { return PnrStatusComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/http.js");
/* harmony import */ var _common_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common.service */ "./src/app/common.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};



var PnrStatusComponent = /** @class */ (function () {
    function PnrStatusComponent(http, railService) {
        this.http = http;
        this.railService = railService;
        this.pnr_data = { pnr: null };
        this.errorCode = this.railService.errorCode;
        this.errorText = null;
        this.get_pnr_data = function () {
            var _this = this;
            this.railService.getPnrStatus(this.pnr_txt)
                .subscribe(function (data) {
                _this.pnr_data = data;
                console.log(_this.pnr_data);
                _this.errorText = _this.errorCode[_this.errorCode.findIndex(function (x) { return x.code === _this.pnr_data.response_code; })].txt;
            }, function (err) { return _this.errorText = err.statusText + '. Check Internet Connection.'; });
        };
        this.pnr_txt = '';
        this.errorDisplay = 'false';
        console.log(this.pnr_data);
    }
    PnrStatusComponent.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] },
        { type: _common_service__WEBPACK_IMPORTED_MODULE_2__["CommonService"] }
    ]; };
    PnrStatusComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-pnr-status',
            template: __importDefault(__webpack_require__(/*! raw-loader!./pnr-status.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pnr-status/pnr-status.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./pnr-status.component.css */ "./src/app/pnr-status/pnr-status.component.css")).default]
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], _common_service__WEBPACK_IMPORTED_MODULE_2__["CommonService"]])
    ], PnrStatusComponent);
    return PnrStatusComponent;
}());



/***/ }),

/***/ "./src/app/right-menu/right-menu.component.css":
/*!*****************************************************!*\
  !*** ./src/app/right-menu/right-menu.component.css ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3JpZ2h0LW1lbnUvcmlnaHQtbWVudS5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/right-menu/right-menu.component.ts":
/*!****************************************************!*\
  !*** ./src/app/right-menu/right-menu.component.ts ***!
  \****************************************************/
/*! exports provided: RightMenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RightMenuComponent", function() { return RightMenuComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};

var RightMenuComponent = /** @class */ (function () {
    function RightMenuComponent() {
        this.renderer = false;
    }
    RightMenuComponent.prototype.ngOnInit = function () {
        var _this = this;
        setInterval(function () {
            _this.renderer = false;
            setTimeout(function () { return _this.renderer = true; }, 1000);
        }, 15000);
    };
    RightMenuComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-right-menu',
            template: __importDefault(__webpack_require__(/*! raw-loader!./right-menu.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/right-menu/right-menu.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./right-menu.component.css */ "./src/app/right-menu/right-menu.component.css")).default]
        }),
        __metadata("design:paramtypes", [])
    ], RightMenuComponent);
    return RightMenuComponent;
}());



/***/ }),

/***/ "./src/app/top-menu/top-menu.component.css":
/*!*************************************************!*\
  !*** ./src/app/top-menu/top-menu.component.css ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RvcC1tZW51L3RvcC1tZW51LmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/top-menu/top-menu.component.ts":
/*!************************************************!*\
  !*** ./src/app/top-menu/top-menu.component.ts ***!
  \************************************************/
/*! exports provided: TopMenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TopMenuComponent", function() { return TopMenuComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};

var TopMenuComponent = /** @class */ (function () {
    function TopMenuComponent() {
    }
    TopMenuComponent.prototype.ngOnInit = function () {
    };
    TopMenuComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-top-menu',
            template: __importDefault(__webpack_require__(/*! raw-loader!./top-menu.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/top-menu/top-menu.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./top-menu.component.css */ "./src/app/top-menu/top-menu.component.css")).default]
        }),
        __metadata("design:paramtypes", [])
    ], TopMenuComponent);
    return TopMenuComponent;
}());



/***/ }),

/***/ "./src/app/train-route/train-route.component.css":
/*!*******************************************************!*\
  !*** ./src/app/train-route/train-route.component.css ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RyYWluLXJvdXRlL3RyYWluLXJvdXRlLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/train-route/train-route.component.ts":
/*!******************************************************!*\
  !*** ./src/app/train-route/train-route.component.ts ***!
  \******************************************************/
/*! exports provided: TrainRouteComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrainRouteComponent", function() { return TrainRouteComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _common_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common.service */ "./src/app/common.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};


var TrainRouteComponent = /** @class */ (function () {
    function TrainRouteComponent(railService) {
        this.railService = railService;
        this.train_num = '';
        this.route_data = { route: null };
        this.errorCode = this.railService.errorCode;
        this.errorText = null;
        this.getTrainRouteData = function () {
            var _this = this;
            this.railService.getTrainRoute(this.train_num)
                .subscribe(function (data) {
                _this.route_data = data;
                console.log(_this.route_data);
                _this.errorText = _this.errorCode[_this.errorCode.findIndex(function (x) { return x.code === _this.pnr_data.response_code; })].txt;
            }, function (err) { return _this.errorText = err.statusText + '. Check Internet Connection.'; });
        };
    }
    TrainRouteComponent.prototype.ngOnInit = function () {
    };
    TrainRouteComponent.ctorParameters = function () { return [
        { type: _common_service__WEBPACK_IMPORTED_MODULE_1__["CommonService"] }
    ]; };
    TrainRouteComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-train-route',
            template: __importDefault(__webpack_require__(/*! raw-loader!./train-route.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/train-route/train-route.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./train-route.component.css */ "./src/app/train-route/train-route.component.css")).default]
        }),
        __metadata("design:paramtypes", [_common_service__WEBPACK_IMPORTED_MODULE_1__["CommonService"]])
    ], TrainRouteComponent);
    return TrainRouteComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/__ivy_ngcc__/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/travis/build/subhashjha35/LiveIndianRailways/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map