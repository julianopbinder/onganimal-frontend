import { Component, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { OwnerService } from 'src/app/shared/service/owner.service';
import { Animal } from 'src/app/shared/model/animal.model';
import { FindedAnimalService } from 'src/app/shared/service/finded-animal.service';

declare var $:any;

@Component({
  selector: 'app-finded-animal-dialog',
  templateUrl: './animal-finded.component.html',
  styleUrls: ['./animal-finded.component.scss']
})
export class FindedAnimalComponent {
    displayedColumns: string[] = ['name', 'phone']
  animals:any = [];

  constructor(
    private findedAnimalService: FindedAnimalService,
    public dialogRef: MatDialogRef<FindedAnimalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {
        console.log(data)
        this.getAll();
  }

  onNoClick(): void {
      this.dialogRef.close();
  }

  getAll():void {
    $('#progress-modal').show();

      this.findedAnimalService.getAll(this.data.animal.id).subscribe(
        result => {
          $('#progress-modal').hide();
          this.animals = result;
        }, err => {
          $('#progress-modal').hide();
        }
      )
   
  }
}
