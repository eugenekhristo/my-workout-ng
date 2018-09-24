import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TrainingsDashboardModule } from './trainings-dashboard/trainings-dashboard.module';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // custom modules
    TrainingsDashboardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
