import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { routing} from './app.router';
import { HomeComponent } from  './home/home.component';
import { AddComponent } from './add/add.component';
import { ReportComponent } from './report/report.component';


@NgModule({
  declarations: [
    AppComponent,HomeComponent,AddComponent,ReportComponent
  ],
  imports: [FormsModule,
    BrowserModule,
    HttpModule,routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
