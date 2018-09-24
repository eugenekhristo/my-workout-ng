import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import uuid from 'uuid';
import { Training } from '../../models/training.interface';

@Component({
  selector: 'app-overlay-form',
  templateUrl: './overlay-form.component.html',
  styleUrls: ['./overlay-form.component.scss']
})
export class OverlayFormComponent implements OnInit {
  @Input()
  overlayIsOpened;

  @Output()
  closeOverlayForm: EventEmitter<any> = new EventEmitter();

  @Output()
  addTraining: EventEmitter<any> = new EventEmitter();

  title: string;
  details: string;

  constructor() { }

  ngOnInit() {

  }

  handleCloseOverlayForm(form) {
    this.overlayIsOpened = false;

    setTimeout(() => {
      form.reset();
    }, 170);

    this.closeOverlayForm.emit((this.overlayIsOpened));
  }

  handleSubmitForm(form) {
    const id = uuid();
    const title = this.title;
    const details = this.details;
    const lastTrained = 0;
    const isTrained = false;
    const setsNumber = 10;
    const breakSecs = 10;
    const achivements = {
      best: {
        timestamp: 0,
        results: Array(10).fill(0)
      },
      first: {
        timestamp: 0,
        results: Array(10).fill(0)
      },
      previous: {
        timestamp: 0,
        results: Array(10).fill(0)
      },
      current: {
        timestamp: 0,
        results: Array(10).fill(0)
      }
    };

    const training: Training = {
      id,
      title,
      details,
      lastTrained,
      isTrained,
      setsNumber,
      breakSecs,
      achivements
    };

    this.addTraining.emit(training);

    this.handleCloseOverlayForm(form);
  }

}

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


