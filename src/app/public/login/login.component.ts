import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { RegisterDialog } from '../animal-page/register/register.dialog';
import { AuthenticationService } from 'src/app/shared/service/authentication.service';
import { Login } from 'src/app/shared/model/login.model';
import { Router } from '@angular/router';

declare var $: any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  
    login: Login = {
        username: '',
        password: ''
    }

  constructor(private authenticationService: AuthenticationService, private router: Router, public dialog: MatDialog) {
  }

  public authenticate() {
    $('#progress-modal').show();

    this.authenticationService.auhtenticate(this.login).subscribe(
        result => {
          $('#progress-modal').hide();
            localStorage.setItem('auth-token', result['token']);
            this.router.navigate(["/private"]);
        }, err => console.log(err)
    )
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
}
