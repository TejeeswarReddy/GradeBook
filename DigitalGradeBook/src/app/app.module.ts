import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GradingDigitalBookComponent } from './grading-digital-book/grading-digital-book.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import {MAT_DIALOG_DEFAULT_OPTIONS, MatDialogModule, MatDialogRef} from '@angular/material/dialog';
import { DialogComponent } from './shared/dialog/dialog.component';
import { DoughnutChartComponent } from './doughnut-chart/doughnut-chart.component';



@NgModule({
  declarations: [
    AppComponent,
    GradingDigitalBookComponent,
    DialogComponent,
    DoughnutChartComponent
  ],
  entryComponents: [DialogComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    MatDialogModule,
    
    
  ],
  providers: [ {provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: {hasBackdrop: false}}],
  bootstrap: [AppComponent]
})
export class AppModule { }
