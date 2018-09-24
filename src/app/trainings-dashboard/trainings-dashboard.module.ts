import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TrainingsDashboardComponent } from './containers/trainings-dashboard/trainings-dashboard.component';
import { OverlayFormComponent } from './components/overlay-form/overlay-form.component';
import { TrainingsService } from '../core/services/trainings-service.service';
import { SingleTrainingComponent } from './components/single-training/single-training.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [CommonModule, FormsModule, RouterModule],
  declarations: [TrainingsDashboardComponent, OverlayFormComponent, SingleTrainingComponent],
  exports: [TrainingsDashboardComponent],
  providers: [TrainingsService]
})
export class TrainingsDashboardModule {}
