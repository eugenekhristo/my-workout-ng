import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TrainingComponent } from './containers/training/training.component';
import { StatisticsComponent } from './components/statistics/statistics.component';
import { ExercisingComponent } from './components/exercising/exercising.component';

const routes: Routes = [
  {path: ':id', component: TrainingComponent, pathMatch: 'full' },
  {path: ':id/statistics', component: StatisticsComponent },
  {path: ':id/exercising', component: ExercisingComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TrainingRoutingModule { }
