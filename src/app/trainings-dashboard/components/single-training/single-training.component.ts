import { Component, OnInit, Input } from '@angular/core';
import { Training } from '../../models/training.interface';

@Component({
  selector: 'app-single-training',
  templateUrl: './single-training.component.html',
  styleUrls: ['./single-training.component.scss']
})
export class SingleTrainingComponent implements OnInit {
  @Input()
  training: Training;

  trainingDetailsIsOpened = false;

  constructor() { }

  ngOnInit() {
  }

  toggleDetailsVisibility() {
    this.trainingDetailsIsOpened = !this.trainingDetailsIsOpened;
  }

}
