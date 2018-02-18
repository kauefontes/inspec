import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { CompaniesComponent } from './companies/companies.component';
import { CompanyComponent } from './companies/company/company.component';
import { CompanyDetailComponent } from './companies/company/company-detail/company-detail.component';
import { ProfileComponent } from './profile/profile.component';
import { PlacesComponent } from './places/places.component';
import { PlaceDetailComponent } from './place-detail/place-detail.component';
import { OccurrencesComponent } from './occurrences/occurrences.component';
import { OccurrenceComponent } from './occurrences/occurrence/occurrence.component';
import { OccurrenceDetailComponent } from './occurrences/occurrence/occurrence-detail/occurrence-detail.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    CompaniesComponent,
    CompanyComponent,
    CompanyDetailComponent,
    ProfileComponent,
    PlacesComponent,
    PlaceDetailComponent,
    OccurrencesComponent,
    OccurrenceComponent,
    OccurrenceDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
