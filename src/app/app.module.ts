import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { StatesComponent } from './states/states.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { BusinessInfoComponent } from './business-info/business-info.component';

@NgModule({
  declarations: [
    AppComponent,
    StatesComponent,
    HomeComponent,
    AboutComponent,
    BusinessInfoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
