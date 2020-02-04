import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Animal } from '../shared/model/animal.model';
import { OwnerService } from '../shared/service/owner.service';
import { Pageable } from '../shared/model/pageable.model';
import { AnimalCreateDialogComponent } from './animal-create/animal-create.component';
import { FindedAnimalComponent } from './animal-finded/animal-finded.component';

declare var $:any;

@Component({
  selector: 'app-private',
  templateUrl: './private.component.html',
  styleUrls: ['./private.component.scss']
})
export class PrivateComponent {
    
    pageable: Pageable = {
        page: 0,
        size: 5,
        sort: 'status,asc'
      }

    length = 100;
    pageSize = 5;
    pageSizeOptions: number[] = [5, 10, 25, 100];

    displayedColumns: string[] = ['id', 'name', 'age', 'city', 'state', 'status', 'actions']

    dataSource: Animal[] = []

    constructor(private ownerService: OwnerService, public matDialog: MatDialog) {
        this.getAllAnimals();
    }

    public openAnimalCreateDialog() {
        const dialogRef = this.matDialog.open(AnimalCreateDialogComponent, {
          width: '600px',
          data: {}
        });
    
        dialogRef.afterClosed().subscribe(result => {
            this.getAllAnimals();
        });
    
    }

    public openEditDialog(animal) {
        const dialogRef = this.matDialog.open(AnimalCreateDialogComponent, {
          width: '600px',
          data: {animal: animal}
        });
    
        dialogRef.afterClosed().subscribe(result => {
            this.getAllAnimals();
        });
    
    }

    public openReportedDialog(animal) {
      const dialogRef = this.matDialog.open(FindedAnimalComponent, {
        width: '600px',
        data: {animal: animal}
      });
  
      dialogRef.afterClosed().subscribe(result => {
          this.getAllAnimals();
      });
  
  }

    public deleteAnimal(animalId) {
        $('#progress-modal').show();
        this.ownerService.deleteAnimal(animalId).subscribe(
            result => {
                $('#progress-modal').hide();
                this.getAllAnimals();
            }, err => {
                $('#progress-modal').hide();
            }
        )
    }

    public onPageChanged(event): void {
        this.pageable.size = event.pageSize;
        this.pageable.page = event.pageIndex;
        this.getAllAnimals();
      }
    
      private getAllAnimals(): void {
        $('#progress-modal').show();
        this.ownerService.getAnimals(this.pageable).subscribe(
          result => {
            $('#progress-modal').hide();
            this.dataSource = result['content'];
            this.length = result['totalElements'];
          }, err => {
            $('#progress-modal').hide();
            console.log(err);
          }
        )
      }
}
