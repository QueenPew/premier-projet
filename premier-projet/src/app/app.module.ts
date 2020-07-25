import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { CommonModule, APP_BASE_HREF, LocationStrategy, HashLocationStrategy} from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import { MatMenuModule } from '@angular/material/menu';
import { AppRoutingModule }     from './app-routing.module';
import { MessagesComponent }    from './messages/messages.component';
import { DashboardComponent }   from './dashboard/dashboard.component';
import { HttpClientModule }    from '@angular/common/http';
import { NavTestComponent } from './nav-test/nav-test.component';
@NgModule({
  imports: [
    MatSliderModule,
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,],

  declarations: [
    AppComponent,
    HeroesComponent,
    HeroDetailComponent,
    MessagesComponent,
    DashboardComponent,
    NavTestComponent,
  ],
bootstrap: [ AppComponent ]
})
export class AppModule { }