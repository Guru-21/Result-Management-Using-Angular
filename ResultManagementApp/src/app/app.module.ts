import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentComponent } from './student/student.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { ShowresultComponent } from './showresult/showresult.component';
import { AddresultComponent } from './addresult/addresult.component';
import { ManageresultComponent } from './manageresult/manageresult.component';
import { HttpClientModule } from '@angular/common/http'
import { ReactiveFormsModule } from '@angular/forms';
import { UpdateResultComponent } from './update-result/update-result.component'


@NgModule({
  declarations: [
    AppComponent,
    StudentComponent,
    HeaderComponent,
    LoginComponent,
    ShowresultComponent,
    AddresultComponent,
    ManageresultComponent,
    UpdateResultComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
