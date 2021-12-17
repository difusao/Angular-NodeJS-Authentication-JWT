import { Component, OnInit } from '@angular/core';

import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { tap } from 'rxjs/operators';
import { AuthService } from '../../services/auth-service/auth.service';

import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  form: FormGroup = new FormGroup({
    NM_USUARIO: new FormControl(null, [Validators.required]),
    password: new FormControl(null, [Validators.required])
  });

  constructor(private authService: AuthService, private router: Router, private _snackBar: MatSnackBar) { }

  login() {
    if (this.form.valid) {
      this.authService.ServiceLogin({ NM_USUARIO: this.username.value, DC_SENHA: this.password.value })
        .pipe(
          tap(() => this.router.navigate(['../../private/dashboard']))
        )
        .subscribe(
          data => null,
          error => this._snackBar.open(error.error.errors[0], '', { duration: 3000, horizontalPosition: 'end', verticalPosition: 'top' }),
          () => null
        )
    }
  }

  get username(): FormControl {
    return this.form.get('NM_USUARIO') as FormControl;
  }

  get email(): FormControl {
    return this.form.get('ED_EMAIL') as FormControl;
  }

  get password(): FormControl {
    return this.form.get('password') as FormControl;
  }

  ngOnInit(): void {
  }
}
