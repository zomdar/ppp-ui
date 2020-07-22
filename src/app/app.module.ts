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
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SubtractStringPipe } from './pipes/subtract-string.pipe';

@NgModule({
  declarations: [
    AppComponent,
    StatesComponent,
    HomeComponent,
    AboutComponent,
    BusinessInfoComponent,
    SubtractStringPipe,
  ],
  exports: [
    SubtractStringPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FontAwesomeModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
