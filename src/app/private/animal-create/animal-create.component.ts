import { Component, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { OwnerService } from 'src/app/shared/service/owner.service';
import { Animal } from 'src/app/shared/model/animal.model';

declare var $:any;

@Component({
  selector: 'app-animal-create-dialog',
  templateUrl: './animal-create.component.html',
  styleUrls: ['./animal-create.component.scss']
})
export class AnimalCreateDialogComponent {
    
  animal: Animal = {
    age: null,
    city: null,
    extraInfo: null,
    id: null,
    image: null,
    name: null,
    state: null,
    status: 'LOST'
  }

  constructor(
    private ownerService: OwnerService,
    public dialogRef: MatDialogRef<AnimalCreateDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {

      if (data.animal) {
        this.animal = data.animal;
      }

  }

  onNoClick(): void {
      this.dialogRef.close();
  }

  create():void {
    $('#progress-modal').show();

    if (this.animal.id) {
      this.ownerService.updateAnimal(this.animal).subscribe(
        result => {
          $('#progress-modal').hide();
          this.dialogRef.close();
        }, err => {
          $('#progress-modal').hide();
        }
      )
    } else {

      this.ownerService.saveAnimal(this.animal).subscribe(
        result => {
          $('#progress-modal').hide();
          this.dialogRef.close();
        }, err => {
          $('#progress-modal').hide();
        }
      )
    }
  }

  onFileSelected(fileString: string) {
    this.animal.image = fileString;
  }
}
