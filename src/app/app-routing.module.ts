import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NumbersListComponent } from './numbers-list/numbers-list.component';

const routes: Routes = [
  {path:'',redirectTo:"Numbers",pathMatch:'full'},
  {path:'Numbers',component:NumbersListComponent}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
