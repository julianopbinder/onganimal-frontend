import { Component } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { AnimalService } from 'src/app/shared/service/animal.service';
import { Pageable } from 'src/app/shared/model/pageable.model';
import { MatDialog } from '@angular/material/dialog';
import { AnimalReportDialog } from './animal-report/animal-report.dialog';
import { RegisterDialog } from './register/register.dialog';

declare var $: any;

@Component({
  selector: 'app-animal-page',
  templateUrl: './animal-page.component.html',
  styleUrls: ['./animal-page.component.scss']
})
export class AnimalPageComponent {
  
  pageable: Pageable = {
    page: 0,
    size: 5,
    sort: 'status,asc'
  }

  length = 100;
  pageSize = 5;
  pageSizeOptions: number[] = [5, 10, 25, 100];

  animals = []

  constructor(public dialog: MatDialog, private animalService: AnimalService) {
    this.getAllAnimals();
  }

  public openReportDialog(animalId: number) {
    const dialogRef = this.dialog.open(AnimalReportDialog, {
      width: '400px',
      data: {animalId: animalId}
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.getAllAnimals();
      }
    });

  }

  public openRegisterDialog() {
    const dialogRef = this.dialog.open(RegisterDialog, {
      width: '400px',
      data: {}
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        
      }
    });
  }

  public onPageChanged(event): void {
    this.pageable.size = event.pageSize;
    this.pageable.page = event.pageIndex;
    this.getAllAnimals();
  }

  private getAllAnimals(): void {
    $('#progress-modal').show();
    this.animalService.findAll(this.pageable).subscribe(
      result => {
        $('#progress-modal').hide();
        this.animals = result['content'];
        this.length = result['totalElements'];
      }, err => {
        $('#progress-modal').hide();
        console.log(err);
      }
    )
  }


}
