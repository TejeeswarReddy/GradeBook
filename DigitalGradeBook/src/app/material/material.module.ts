import { NgModule } from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import {MatTableModule} from '@angular/material/table';
import {  MatFormFieldModule } from '@angular/material/form-field';
import { MatPaginatorModule } from '@angular/material/paginator';
import { HttpClientModule } from '@angular/common/http';
import { MatSelectModule } from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatListModule} from '@angular/material/list';
import {MatCardModule} from '@angular/material/card';
import { MatSortModule } from '@angular/material/sort';
import {MatButtonModule} from '@angular/material/button';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner'; 
import {MatRippleModule} from '@angular/material/core';
import {MatTooltipModule} from '@angular/material/tooltip';

const MaterialComponents = [
  MatToolbarModule,
    MatIconModule,
    MatTableModule,
    MatFormFieldModule,
    MatPaginatorModule,
    MatSelectModule,
    MatInputModule,
    MatButtonToggleModule,
    MatListModule,
    MatCardModule,
    MatSortModule,
    MatButtonModule,
    HttpClientModule,
    MatProgressSpinnerModule,
    MatRippleModule,
    MatTooltipModule
]
@NgModule({
  exports: [MaterialComponents],
  imports: [MaterialComponents]
})
export class MaterialModule { }
