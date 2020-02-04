import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AnimalPageComponent } from './animal-page/animal-page.component';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatPaginatorModule } from '@angular/material/paginator';
import {MatDialogModule} from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from '../shared/shared.module';
import { AnimalReportDialog } from './animal-page/animal-report/animal-report.dialog';
import { FormsModule } from '@angular/forms';
import { RegisterDialog } from './animal-page/register/register.dialog';
import { LoginComponent } from './login/login.component';
import { PublicComponent } from './public.component';


@NgModule({
    declarations: [
      PublicComponent,
      AnimalPageComponent,
      LoginComponent,
      AnimalReportDialog,
      RegisterDialog
    ],
    exports: [
    ],
    imports: [
      BrowserModule,
      FormsModule,
      BrowserAnimationsModule,
      MatCardModule,
      MatInputModule,
      MatButtonModule,
      MatPaginatorModule,
      MatDialogModule,
      SharedModule
     
    ],
    entryComponents: [AnimalReportDialog, RegisterDialog],
    providers: []
  })
  export class PublicModule { }