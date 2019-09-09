import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from "@angular/forms"
import { AppComponent } from './app.component';
import { FormDComponent } from './form-d/form-d.component';
import {HttpClientModule} from  "@angular/common/http";
@NgModule({
  declarations: [
    AppComponent,
    FormDComponent
  ],
  imports: [
    BrowserModule, ReactiveFormsModule , HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
