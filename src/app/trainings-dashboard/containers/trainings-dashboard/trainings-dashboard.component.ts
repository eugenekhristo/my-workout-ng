import { Component, OnInit } from '@angular/core';

import {Training} from '../../models/training.interface';
import { placeHeroBtn } from '../../../dirty-tricks/dirtyTricks.js';
import { TrainingsService } from '../../../core/services/trainings-service.service';

@Component({
  selector: 'app-trainings-dashboard',
  templateUrl: './trainings-dashboard.component.html',
  styleUrls: ['./trainings-dashboard.component.scss']
})
export class TrainingsDashboardComponent implements OnInit {
  trainings: Training[];

  overlayIsOpened = false;

  constructor(private trainingsService: TrainingsService) {}

  ngOnInit() {
    // to place hero btn in the right place
    placeHeroBtn();

    this.trainings = this.trainingsService.getTrainings();
  }

  openOverlayForm() {
    this.overlayIsOpened = true;
  }

  handleCloseOverlayForm(overlayIsOpened) {
    this.overlayIsOpened = overlayIsOpened;
  }

  handleAddTraining(training: Training) {
    this.trainings = this.trainingsService.addTraining(training);
  }
}
