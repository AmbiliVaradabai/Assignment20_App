import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddUserComponent } from './add-user/add-user.component';
import { AppComponent} from './app.component';
import { ListUserComponent} from './list-user/list-user.component';
import { SuccessComponent }  from './success/success.component';
import { DocumentsComponent }  from './documents/documents.component'; 

const routes: Routes = [
  {
    path:'',
    redirectTo: '/users',
    pathMatch: 'full'
  },
  {
    path: 'users',
    component:ListUserComponent 
  },
  {
    path: 'adduser',
    component:AddUserComponent
  },
  {
    path: 'success',
    component:SuccessComponent
  },
  {
    path: 'documents',
    component:DocumentsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
