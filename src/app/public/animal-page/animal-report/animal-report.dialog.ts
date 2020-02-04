import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FindedAnimalService } from 'src/app/shared/service/finded-animal.service';
import { FindedAnimal } from 'src/app/shared/model/find-animal.model';

declare var $:any;

@Component({
    selector: 'app-animal-report-dialog',
    templateUrl: 'animal-report.dialog.html',
  })
  export class AnimalReportDialog {
  
    findedAnimal: FindedAnimal = {
        name: '',
        phone: ''
    };

    constructor(
        private findedAnimalService: FindedAnimalService,
        public dialogRef: MatDialogRef<AnimalReportDialog>,
        @Inject(MAT_DIALOG_DATA) public data: any) {
           
        }
  
    onNoClick(): void {
        this.dialogRef.close();
    }

    report():void {
        $('#progress-modal').show();
        this.findedAnimalService.report(this.findedAnimal, this.data.animalId).subscribe(
            result => {   
                $('#progress-modal').hide();         
                this.dialogRef.close({report: true});
            }, err => {
                $('#progress-modal').hide();
            }
        )
    }
  
}