import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {CardListComponent} from './cardlist.component';
import {PDPComponent} from './pdp.component';
import {HomePageComponent} from './homePage.component';
import {appRoutes} from './appRoutes';
import {RouterModule} from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    CardListComponent,
    PDPComponent,
    HomePageComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
