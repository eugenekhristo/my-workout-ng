import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TrainingsService } from '../../../core/services/trainings-service.service';
import { Achievement, Training } from '../../../core/models/training.interface';

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.scss']
})
export class StatisticsComponent implements OnInit {
  training: Training;
  statistics: Achievement;

  constructor(private route: ActivatedRoute, private trainingService: TrainingsService) { }

  ngOnInit() {
    this.route.params.subscribe(({id}) => {
      this.training = this.trainingService.getTraining(id);
      this.statistics = this.training.achivements;
    });
  }

  calculateSummArr(arr: number[]) {
    return arr.reduce((sum, number) => sum + number, 0);
  }

}
