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
import { Child2Component } from './child2/child2.component';
import { Child2aComponent } from './menu/child2a/child2a.component';
import { Child2bComponent } from './menu/child2b/child2b.component';
import { FooterComponent } from './footer/footer.component';



@NgModule({
  declarations: [
    AppComponent,
    CampingComponent,
    CampingInvoerComponent,
    CampingRegistratieInvoerComponent,
    ChildComponent,
    ParentComponent,
    Child2Component,
    Child2aComponent,
    Child2bComponent,
    FooterComponent
  
  ],
  imports: [
    BrowserModule,FormsModule, AppRoutingModule
  ],
  providers: [ ChildService],
  bootstrap: [AppComponent]
})
export class AppModule { }
