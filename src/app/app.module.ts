import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { CampingComponent } from './camping.component';
import { CampingInvoerComponent } from './campinginvoer.component';
import { CampingRegistratieInvoerComponent } from './registratie/registratie.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { AppRoutingModule } from './app.routing';
import { ChildService } from './child/child.service';



@NgModule({
  declarations: [
    AppComponent,
    CampingComponent,
    CampingInvoerComponent,
    CampingRegistratieInvoerComponent,
    ChildComponent,
    ParentComponent
  
  ],
  imports: [
    BrowserModule,FormsModule, AppRoutingModule
  ],
  providers: [ ChildService],
  bootstrap: [AppComponent]
})
export class AppModule { }
