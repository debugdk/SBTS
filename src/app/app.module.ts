import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { LoginComponent } from './component/login/login.component';
import { MapComponent } from './component/map/map.component';
import { StudentComponent } from './component/student/student.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MapComponent,
    StudentComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
 
}
