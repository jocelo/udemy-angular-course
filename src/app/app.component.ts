import { Component, OnInit } from '@angular/core';
import { RecipeService } from './shared/services/recipe.service';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [RecipeService]
})
export class AppComponent implements OnInit {
  ngOnInit() {
    firebase.initializeApp({
      apiKey: "AIzaSyADDYnYpgbmquXQNn53-gxddcxMDeyctbk",
      authDomain: "ng-recipe-book-718e5.firebaseapp.com"
    });
  }
}