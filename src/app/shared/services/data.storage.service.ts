import { Injectable } from "@angular/core";
import { Http } from '@angular/http';
import { Recipe } from "../models/recipe.model";
import { AuthService } from "./auth.service";

@Injectable()
export class DataStorageService {
  constructor(
    private http: Http,
    private authSrv: AuthService ) {}

  saveRecipe(allRecipes: Recipe[]) {
    let tk = this.authSrv.getToken();
    return this.http.put('https://ng-recipe-book-718e5.firebaseio.com/recipes.json?auth='+tk, allRecipes);
  }

  getRecipes() {
    let tk = this.authSrv.getToken();
    return this.http.get('https://ng-recipe-book-718e5.firebaseio.com/recipes.json?auth=' + tk);
  }
}