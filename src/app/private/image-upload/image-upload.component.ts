import { Component, Output, EventEmitter, Input } from '@angular/core';

@Component({
    selector: 'app-image-upload',
    templateUrl: './image-upload.component.html',
    styleUrls: [ './image-upload.component.scss' ]
})
export class ImageUploadComponent  {

    @Input()
    imagem:any = '';

    @Output("onFileSelected") 
    onFileSelected = new EventEmitter();

    onSelectFile(event: any) {
        if (event.target.files && event.target.files[0]) {
            var reader = new FileReader();

            reader.readAsDataURL(event.target.files[0]); 

            reader.onload = (event) => { 
                this.imagem = event['target']['result'];

                this.onFileSelected.emit(this.imagem);
            }
        }
    }
}