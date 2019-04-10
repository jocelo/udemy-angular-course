import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private authSrv: AuthService) { }

  ngOnInit() {
  }

  onSubmit(form: NgForm) {
    const userName: string = form.value.email;
    const password: string = form.value.password;
    console.log('userName', userName, 'password', password);
    this.authSrv.signupUser(userName, password);
  }

}
