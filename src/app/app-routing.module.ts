import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TrainingsDashboardComponent } from './trainings-dashboard/containers/trainings-dashboard/trainings-dashboard.component';



const routes: Routes = [
  { path: '', component: TrainingsDashboardComponent, pathMatch: 'full' },
  { path: 'training', loadChildren: './training/training.module#TrainingModule' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}


