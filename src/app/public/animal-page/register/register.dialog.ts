import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Owner } from 'src/app/shared/model/owner.model';
import { OwnerService } from 'src/app/shared/service/owner.service';

declare var $:any;

@Component({
    selector: 'app-register-dialog',
    templateUrl: 'register.dialog.html',
  })
  export class RegisterDialog {
  
    owner: Owner = {
        name: '',
        phone: '',
        email: '',
        password: ''
    };

    constructor(
        private ownerService: OwnerService,
        public dialogRef: MatDialogRef<RegisterDialog>,
        @Inject(MAT_DIALOG_DATA) public data: any) {
        }
  
    onNoClick(): void {
        this.dialogRef.close();
    }

    register():void {
        $('#progress-modal').show();
        this.ownerService.register(this.owner).subscribe(
            result => {
                $('#progress-modal').hide();
                this.dialogRef.close();
            }, err => {
                $('#progress-modal').hide();
            }
        )
    }
  
  }