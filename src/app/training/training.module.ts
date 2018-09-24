import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TrainingRoutingModule } from './training-routing.module';
import { TrainingComponent } from './containers/training/training.component';
import { StatisticsComponent } from './components/statistics/statistics.component';
import { ExercisingComponent } from './components/exercising/exercising.component';

@NgModule({
  imports: [
    CommonModule,
    TrainingRoutingModule
  ],
  declarations: [TrainingComponent, StatisticsComponent, ExercisingComponent]
})
export class TrainingModule { }
