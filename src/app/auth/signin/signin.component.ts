import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  constructor(private authSrv: AuthService) { }

  ngOnInit() {
  }

  onLogin(form: NgForm) {
    const userName: string = form.value.email;
    const password: string = form.value.password;
    this.authSrv.loginUser(userName, password);
  }
}
