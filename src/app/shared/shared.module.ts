import { NgModule } from '@angular/core';
import { AnimalService } from './service/animal.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FindedAnimalService } from './service/finded-animal.service';
import { OwnerService } from './service/owner.service';
import { JwtInterceptor } from './interceptor/jwt.interceptor';
import { AuthenticationService } from './service/authentication.service';

@NgModule({
    declarations: [
      
    ],
    exports: [
      
    ],
    imports: [
     HttpClientModule
    ],
    providers: [
        AnimalService,
        FindedAnimalService,
        AuthenticationService,
        OwnerService,
        {
          provide: HTTP_INTERCEPTORS,
          useClass: JwtInterceptor,
          multi: true
        }
    ]
  })
  export class SharedModule { }