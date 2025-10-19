import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// Aapke banaye gaye sabhi components ko yahan import kiya gaya hai
import { HeaderComponent } from './header/header.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SectionComponent } from './section/section.component';
import { LandingPageComponent } from './landing-page/landing-page.component';

@NgModule({
  // 'declarations' array mein sabhi components ko register karna zaroori hai
  declarations: [
    AppComponent,
    HeaderComponent,
    NavbarComponent,
    SectionComponent,
    LandingPageComponent
  ],
  // 'imports' array mein dusre Angular modules ko import kiya jaata hai
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  // 'bootstrap' property batata hai ki application ka root component kaun sa hai
  bootstrap: [AppComponent]
})
export class AppModule { }
