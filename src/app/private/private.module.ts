import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatPaginatorModule } from '@angular/material/paginator';
import {MatDialogModule} from '@angular/material/dialog';
import {MatTableModule} from '@angular/material/table';
import {MatSelectModule} from '@angular/material/select';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from '../shared/shared.module';
import { FormsModule } from '@angular/forms';
import { PrivateComponent } from './private.component';
import { HttpClientModule } from '@angular/common/http';
import { AnimalCreateDialogComponent } from './animal-create/animal-create.component';
import { ImageUploadComponent } from './image-upload/image-upload.component';
import { FindedAnimalComponent } from './animal-finded/animal-finded.component';


@NgModule({
    declarations: [
        PrivateComponent,
        AnimalCreateDialogComponent, 
        ImageUploadComponent,
        FindedAnimalComponent
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
      MatTableModule,
      MatSelectModule,
      SharedModule,
      HttpClientModule
     
    ],
    entryComponents: [AnimalCreateDialogComponent, FindedAnimalComponent],
    providers: [
      
    ]
  })
  export class PrivateModule { }