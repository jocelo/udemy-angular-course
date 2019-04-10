import * as firebase from 'firebase';
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {
  token: string;

  constructor(private router: Router) {}

  signupUser(username: string, password: string) {
    firebase.auth().createUserWithEmailAndPassword(username, password)
      .catch(
        error => console.log(error)
      )
  }

  loginUser(username: string, password: string) {
    firebase.auth().signInWithEmailAndPassword(username, password)
      .then(
        response => {
          firebase.auth().currentUser.getIdToken()
            .then(
              (token: string) => this.token = token
            )
            this.router.navigate(['/']);
        }
      )
      .catch(
        error => console.log('error', error)
      )
  }

  logoutUser() {
    firebase.auth().signOut();
    this.token = null;
  }

  getToken() {
    firebase.auth().currentUser.getIdToken()
      .then(
        (token: string) => this.token = token
      )
    
    return this.token;
  }

  isAuthenticated() {
    return this.token != null;
  }
}