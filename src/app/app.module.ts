import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { AdsenseModule } from 'ng2-adsense';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NgxSelectModule, INgxSelectOptions } from 'ngx-select-ex';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LeftMenuComponent } from './left-menu/left-menu.component';
import { RightMenuComponent } from './right-menu/right-menu.component';
import { PnrStatusComponent } from './pnr-status/pnr-status.component';
import { HttpClientModule } from '@angular/common/http';
import { TrainRouteComponent } from './train-route/train-route.component';
import { LiveTrainStatusComponent } from './live-train-status/live-train-status.component';
import { BannerComponent } from './banner/banner.component';
import { HostListener } from '@angular/core';
import { TopMenuComponent } from './top-menu/top-menu.component';

const appRoutes: Routes = [
  { path: 'pnr-status', component: PnrStatusComponent },
  { path: 'live-train-status', component: LiveTrainStatusComponent },
  { path: 'train-route', component: TrainRouteComponent },
  { path: '', redirectTo: '/live-train-status', pathMatch: 'full' },

];


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LeftMenuComponent,
    RightMenuComponent,
    PnrStatusComponent,
    TrainRouteComponent,
    LiveTrainStatusComponent,
    BannerComponent,
    TopMenuComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [
    BrowserModule,
    NgxSelectModule,
    HttpClientModule,
    AdsenseModule.forRoot({
      adClient: 'ca-pub-4496734235237025',
      adSlot: 6782725308
    }),
    RouterModule.forRoot(
      appRoutes
    ),
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [HostListener],
  bootstrap: [AppComponent]
})
export class AppModule { }
