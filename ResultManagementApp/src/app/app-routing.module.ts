import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentComponent } from './student/student.component'
import { LoginComponent } from './login/login.component'
import { ShowresultComponent } from './showresult/showresult.component'
import { ManageresultComponent } from './manageresult/manageresult.component'
import { AddresultComponent } from './addresult/addresult.component'
import { UpdateResultComponent } from './update-result/update-result.component'

const routes: Routes = [

  {
    path: '',
    component: LoginComponent
  },

  {
    path: 'searchResult',
    component: StudentComponent

  },

  {
    path: 'showResult/:id',
    component: ShowresultComponent
  },

  {
    path: 'manageResult',
    component: ManageresultComponent
  },

  {
    path: 'addResult',
    component: AddresultComponent
  },

  {
    path: 'updateResult/:id',
    component: UpdateResultComponent

  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
