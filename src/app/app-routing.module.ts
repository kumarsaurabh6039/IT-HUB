import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';

// Application ke routes yahan define kiye gaye hain
const routes: Routes = [
  // Jab user root URL (jaise http://localhost:4200/) par aayega,
  // toh LandingPageComponent load hoga.
  { path: '', component: LandingPageComponent },

  // Agar user koi aisa URL daalta hai jo exist nahi karta,
  // toh use wapas home page par redirect kar diya jayega.
  { path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
