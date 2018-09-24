import { Injectable } from '@angular/core';
import { Training } from '../models/training.interface';

@Injectable({
  providedIn: 'root'
})
export class TrainingsService {

  constructor() { }

  getTrainings(): Training[] {
    return JSON.parse(localStorage.getItem('trainings')) || [];
  }

  getTraining(id: string): Training {
    const trainings = this.getTrainings();

    const training = trainings.find(item => item.id === id);

    return training;
  }

  addTraining(training: Training): Training[] {
    const trainings = this.getTrainings();
    trainings.push(training);
    localStorage.setItem('trainings', JSON.stringify(trainings));
    return this.getTrainings();
  }
}


// interface SingeAchievement {
//   timestamp: number;
//   results: number[];
// }

// interface Achievement {
//   best: SingeAchievement;
//   first: SingeAchievement;
//   previous: SingeAchievement;
//   current: SingeAchievement;
// }

// export interface Training {
//   id: string;
//   title: string;
//   details: string;
//   lastTrained: number;
//   isTrained: boolean;
//   setsNumber: 10;
//   breakSecs: 60;
//   achivements: Achievement;
// }
