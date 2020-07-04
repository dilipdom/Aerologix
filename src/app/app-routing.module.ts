import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InsuranceComponent } from './insurance/insurance.component';
import { IntroductionComponent } from './introduction/introduction.component';
import { RealEstateComponent } from './real-estate/real-estate.component';
import { OtherComponent } from './other/other.component';
import { EnergyComponent } from './energy/energy.component';
import { TelecomComponent } from './telecom/telecom.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { FormComponent } from './form/form.component';
import { CardsComponent } from './cards/cards.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { AeropathComponent } from './aeropath/aeropath.component';
import { LiveComponent } from './live/live.component';
import { HighComponent } from './high/high.component';
import { VrComponent } from './vr/vr.component';
import { OthersolutionComponent } from './othersolution/othersolution.component';

const routes: Routes = [
  { path: 'industries/real-estate', component: OtherComponent },
  { path: 'industries/insurance', component: OtherComponent },
  { path: 'industries/telecom', component: OtherComponent },
  { path: 'industries/energy', component: OtherComponent },
  { path: 'industries/other', component: OtherComponent },
  { path: 'solutions/other', component: OtherComponent },
  { path: 'solutions/aeropath', component: OtherComponent },
  { path: 'solutions/live', component: OtherComponent },
  { path: 'solutions/high', component: OtherComponent },
  { path: 'solutions/vr', component: OtherComponent },
  { path: 'solutions/othersolutions', component: OtherComponent },
  { path: '', component: IntroductionComponent }, // redirect to `first-component`
  { path: '**', component: IntroductionComponent }
];

@NgModule({
  declarations: [FooterComponent,
    HeaderComponent,
    InsuranceComponent,
    IntroductionComponent,
    RealEstateComponent,
    TelecomComponent,
    EnergyComponent,
    OtherComponent, FormComponent, CardsComponent, AeropathComponent, LiveComponent, HighComponent, VrComponent, OthersolutionComponent],
  imports: [RouterModule.forRoot(routes), ReactiveFormsModule, FormsModule, CommonModule, BrowserModule, HttpModule],
  exports: [RouterModule, HeaderComponent, FooterComponent,
    InsuranceComponent,
    IntroductionComponent,
    RealEstateComponent,
    TelecomComponent,
    EnergyComponent,
    OtherComponent, FormComponent, CardsComponent, AeropathComponent, LiveComponent, HighComponent, VrComponent, OthersolutionComponent],
  providers: []
})
export class AppRoutingModule { }
