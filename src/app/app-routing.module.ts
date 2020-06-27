import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ChaussureComponent } from './components/chaussure/chaussure.component';
import { ChaussureDetailComponent } from './components/chaussure-detail/chaussure-detail.component';
import { AddChaussureComponent } from './components/add-chaussure/add-chaussure.component';
import { EditChaussureComponent } from './components/edit-chaussure/edit-chaussure.component';


const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: 'home', component: HomeComponent },
  { path: 'chaussure', component: ChaussureComponent },
  { path: 'chaussure/add', component: AddChaussureComponent },
  { path: 'chaussure/:id', component: ChaussureDetailComponent },
  { path: 'chaussure/update/:id', component: EditChaussureComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
