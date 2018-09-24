import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TrainingsService } from '../../../core/services/trainings-service.service';
import { Training } from '../../../trainings-dashboard/models/training.interface';

@Component({
  selector: 'app-training',
  templateUrl: './training.component.html',
  styleUrls: ['./training.component.scss']
})
export class TrainingComponent implements OnInit {
  training: Training;

  constructor(private route: ActivatedRoute, private trainingsService: TrainingsService) { }

  ngOnInit() {
    this.route.params.subscribe(({id}) => {
      this.training = this.trainingsService.getTraining(id);
    });
  }

}
